import { Inngest } from "inngest";
import prisma from "../configs/prisma.js"
import sendEmail from "../configs/nodemailer.js"

// Create a client to send and receive events
export const inngest = new Inngest({ id: "sprintly" });

// inngest function to save user data to a database
const syncUserCreation = inngest.createFunction(
  { id: 'sync-user-from-clerk' },
  { event: 'clerk/user.created' },
  async ({ event }) => {
    const { data } = event;
    await prisma.user.create({
        data: {
            id: data.id,
            email: data?.email_addresses[0]?.email_address,
            name: data?.first_name + " " + data?.last_name,
            image: data?.image_url,
        }
    })
  }
);

// Inngest function to delete user from database
const syncUserDeletion = inngest.createFunction(
  { id: 'delete-user-with-clerk' },
  { event: 'clerk/user.deleted' },
  async ({ event }) => {
    const { data } = event;
    await prisma.user.delete({
        where: {
            id: data.id,
        }
    })
  }
);

// inngest function to update user data in database
const syncUserUpdation = inngest.createFunction(
  { id: 'update-user-from-clerk' },
  { event: 'clerk/user.updated' },
  async ({ event }) => {
    const { data } = event;
    await prisma.user.update({
        where: {
            id: data.id
        },
        data: {
            email: data?.email_addresses[0]?.email_address,
            name: data?.first_name + " " + data?.last_name,
            image: data?.image_url,
        }
    })
  }
);

// inngest function to manage the clerk webhooks / to save workspace data to a database
const syncWorkspaceCreation = inngest.createFunction(
    {id: 'sync-workspace-from-clerk'},
    {event: 'clerk/organization.created'},
    async ({event}) => {
        const {data} = event;
        await prisma.workspace.create({
            data: {
                id: data.id,
                name: data.name,
                slug: data.slug,
                ownerId: data.created_by,
                image_url: data.image_url,
            }
        })
        // add creator as ADMIN member
        await prisma.workspaceMember.create({
            data: {
                userId: data.created_by,
                workspaceId: data.id,
                role: "ADMIN"
            }
        })
    }
)

// inngest function to update workspace data in database
const syncWorkspaceUpdation = inngest.createFunction(
    {id: 'update-workspace-from-clerk'},
    {event: 'clerk/organization.updated'},
    async ({event}) => {
        const {data} = event;
        await prisma.workspace.update({
            where: {
                id: data.id
            },
            data: {
                name: data.name,
                slug: data.slug,
                image_url: data.image_url,
            }
        })
    }
)

// inngest function to delete workspace from database
const syncWorkspaceDeletion = inngest.createFunction(
    {id: 'delete-workspace-with-clerk'},
    {event: 'clerk/organization.deleted'},
    async ({event}) => {
        const {data} = event;
        await prisma.workspace.delete({
            where: {
                id: data.id
            }
        })
    }
)

// inngest function to save workspace member data to a database
const syncWorkspaceMemberCreation = inngest.createFunction(
    {id: 'sync-workspace-member-from-clerk'},
    {event: 'clerk/organizationInvitation.accepted'},
    async ({event}) => {
        const {data} = event;
        await prisma.workspaceMember.create({
            data: {
                userId: data.user_id,
                workspaceId: data.organization_id,
                role: String(data.role_name).toUpperCase(),
            }
        })
    }
)

// inngest function to send eamil on task creation
const sendTaskAssignmentEmail = inngest.createFunction(
    {id: "send-task-assignment-mail"},
    {event: "app/task.assigned"},
    async ({event, step}) => {
        const {taskId, origin} = event.data;
        const task = await prisma.task.findUnique({
            where: {id: taskId},
            include: {assignee: true, project: true}
        })

        await sendEmail({
            to: task.assignee.email,
            subject: `New Task Assignment in ${task.project.name}`,
            body: `
            <div style="font-family: Arial, sans-serif; background-color:#f4f6f8; padding:40px 20px;">
            <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 2px 6px rgba(0,0,0,0.08);">

                <!-- Header -->
                <div style="background:#2563eb; color:#ffffff; padding:20px 30px;">
                <h2 style="margin:0;">${task.project.name}</h2>
                <p style="margin:5px 0 0; font-size:14px;">Task Assignment Notification</p>
                </div>

                <!-- Body -->
                <div style="padding:30px; color:#1f2937; line-height:1.6;">

                <p style="font-size:16px;">Hi <strong>${task.assignee.name}</strong>,</p>

                <p>
                    You have been assigned a new task in
                    <strong>${task.project.name}</strong>.
                </p>

                <div style="background:#f9fafb; border-left:4px solid #2563eb; padding:15px; margin:20px 0;">
                    <p style="margin:0;"><strong>Task:</strong> ${task.title}</p>
                    <p style="margin:8px 0 0;"><strong>Due Date:</strong> ${new Date(task.due_date).toLocaleDateString()}</p>
                </div>

                <p>
                    Please review the task details and begin working on it at your earliest convenience.
                </p>

                <!-- Button -->
                <div style="text-align:center; margin:35px 0;">
                    <a href="${origin}"
                    style="background:#2563eb; color:#ffffff; padding:12px 26px;
                            text-decoration:none; border-radius:6px;
                            font-weight:600; display:inline-block;">
                    View Task
                    </a>
                </div>

                <p style="font-size:14px; color:#6b7280;">
                    If you have any questions, feel free to contact your project manager.
                </p>

                <p style="margin-top:25px;">
                    Best regards,<br/>
                    <strong>${task.project.name} Team</strong>
                </p>

                </div>

                <!-- Footer -->
                <div style="background:#f9fafb; padding:15px 30px; text-align:center; font-size:12px; color:#6b7280;">
                © ${new Date().getFullYear()} ${task.project.name}. All rights reserved.
                </div>

            </div>
            </div>
            `

        })

        if(new Date(task.due_date).toLocaleDateString() !== new Date().toDateString()){
            await step.sleepUntil('wait-for-the-due-date', new Date(task.due_date));
            await step.run('check-if-task-is-completed', async () => {
                const task = await prisma.task.findUnique({
                    where: {id: taskId},
                    include: {assignee: true, project: true}
                })
                if(!task) return;
                if(task.status !== "DONE"){
                    await step.run('send-task-reminder-mail', async () => {
                        await sendEmail({
                            to: task.assignee.email,
                            subject: `Reminder for ${task.project.name}`,
                            body: `
                            <div style="font-family: Arial, sans-serif; background-color:#f4f6f8; padding:40px 20px;">
                            <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 2px 6px rgba(0,0,0,0.08);">

                                <!-- Header -->
                                <div style="background:#dc2626; color:#ffffff; padding:20px 30px;">
                                <h2 style="margin:0;">${task.project.name}</h2>
                                <p style="margin:5px 0 0; font-size:14px;">Task Deadline Reminder</p>
                                </div>

                                <!-- Body -->
                                <div style="padding:30px; color:#1f2937; line-height:1.6;">

                                <p style="font-size:16px;">
                                    Hi <strong>${task.assignee.name}</strong>,
                                </p>

                                <p>
                                    This is a reminder that the following task is still pending and has reached its due date.
                                </p>

                                <!-- Task Card -->
                                <div style="background:#fef2f2; border-left:4px solid #dc2626; padding:18px; margin:22px 0;">

                                    <p style="margin:0 0 6px 0;">
                                    <strong>Project:</strong> ${task.project.name}
                                    </p>

                                    <p style="margin:0 0 6px 0;">
                                    <strong>Title:</strong> ${task.title}
                                    </p>

                                    <p style="margin:0 0 10px 0;">
                                    <strong>Description:</strong><br/>
                                    ${task.description || "No description provided."}
                                    </p>

                                    <p style="margin:0 0 6px 0;">
                                    <strong>Due Date:</strong> ${new Date(task.due_date).toLocaleDateString()}
                                    </p>

                                    <p style="margin:0;">
                                    <strong>Status:</strong> ${task.status}
                                    </p>

                                </div>

                                <p>
                                    Please review and complete this task as soon as possible to ensure timely delivery.
                                </p>

                                <!-- Button -->
                                <div style="text-align:center; margin:35px 0;">
                                    <a href="${origin}"
                                    style="background:#dc2626; color:#ffffff; padding:12px 28px;
                                            text-decoration:none; border-radius:6px;
                                            font-weight:600; display:inline-block;">
                                    Open Task
                                    </a>
                                </div>

                                <p style="font-size:14px; color:#6b7280;">
                                    If this task has already been completed, kindly update its status in the system.
                                </p>

                                <p style="margin-top:25px;">
                                    Regards,<br/>
                                    <strong>${task.project.name} Team</strong>
                                </p>

                                </div>

                                <!-- Footer -->
                                <div style="background:#f9fafb; padding:15px 30px; text-align:center; font-size:12px; color:#6b7280;">
                                © ${new Date().getFullYear()} ${task.project.name}. All rights reserved.
                                </div>

                            </div>
                            </div>
                            `

                        })
                    })
                }
            })
        }
    }
)

// Create an empty array where we'll export future Inngest functions
export const functions = [
    syncUserCreation,
    syncUserDeletion,
    syncUserUpdation,
    syncWorkspaceCreation,
    syncWorkspaceDeletion,
    syncWorkspaceUpdation,
    syncWorkspaceMemberCreation,
    sendTaskAssignmentEmail
];
