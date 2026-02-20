<img width="100%" src="https://github.com/Jostar-Foundation/Sprintly/blob/main/assets/Sprintly-banner.png">

<h1>Sprintly: Agile Development and Workflow platform</h1>

Sprintly is a modern web-based Agile project management and task tracking platform designed to help teams plan, execute, and monitor projects efficiently. It centralizes project workflows, improves collaboration, and ensures transparency using structured Agile methodologies.
Sprintly replaces manual tracking methods such as spreadsheets, emails, and paper documentation with a unified digital system. It integrates Agile concepts like sprints, backlogs, task boards, dashboards, and iterative execution to enhance productivity and accountability.

<p align="center">
  <a href="https://neon.tech" target="_blank">
    <img src="https://img.shields.io/badge/Neon%20Postgres-2bbc8a?style=for-the-badge&logo=postgresql&logoColor=white" alt="Neon Postgres"/></a>
  <a href="https://www.prisma.io" target="_blank">
    <img src="https://img.shields.io/badge/Prisma-0f172a?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma ORM"/></a>
  <a href="https://clerk.com" target="_blank">
    <img src="https://img.shields.io/badge/Clerk-7f56d9?style=for-the-badge&logo=clerk&logoColor=white" alt="Clerk"/></a>
  <a href="https://www.inngest.com" target="_blank">
    <img src="https://img.shields.io/badge/Inngest-4f46e5?style=for-the-badge&logo=integration&logoColor=white" alt="Inngest"/></a>
  <a href="https://react.dev" target="_blank">
    <img src="https://img.shields.io/badge/React-61dafb?style=for-the-badge&logo=react&logoColor=white" alt="React"/></a>
  <a href="https://vitejs.dev" target="_blank">
    <img src="https://img.shields.io/badge/Vite-646cff?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/></a>
  <a href="https://expressjs.com" target="_blank"><br>
    <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="ExpressJS"/></a>
  <a href="https://nodejs.org" target="_blank">
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"/></a>
  <a href="https://tailwindcss.com" target="_blank">
    <img src="https://img.shields.io/badge/TailwindCSS-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/></a>
  <a href="https://www.brevo.com" target="_blank">
    <img src="https://img.shields.io/badge/Brevo-F7B500?style=for-the-badge&logo=brevo&logoColor=white" alt="Brevo"/></a>
  <a href="https://nodemailer.com" target="_blank">
    <img src="https://img.shields.io/badge/Nodemailer-D14836?style=for-the-badge&logo=nodemailer&logoColor=white" alt="Nodemailer"/></a>
</p>


## 🎯 Key Objectives

| Objective | Description |
|------------|-------------|
| Agile Project Management | Support sprint-based planning and iterative workflows |
| Centralized Task Tracking | Manage tasks, sprints, and projects in one unified system |
| Real-Time Collaboration | Enable seamless team coordination |
| Visual Workflow Boards | Represent task status clearly across stages |
| Secure Access Control | Implement role-based access permissions |
| Productivity Enhancement | Improve planning, monitoring, and deadline management |
| Responsive Design | Accessible across laptops and mobile devices |



## 📦 Scope of the Platform
Sprintly offers a wide range of features and functionalities to support Agile project management:

- 👤 **User Management**  
  Users can securely register, authenticate, and maintain role-based access.

- 🗂️ **Project Management**  
  Teams can create and manage multiple projects with structured workflows.

- 🏃 **Sprint Planning**  
  Plan sprint cycles, allocate backlog items, and execute tasks iteratively.

- 📋 **Backlog Management**  
  Maintain prioritized task lists to streamline project execution.

- ✅ **Task Management**  
  Create, assign, update, and track tasks throughout their lifecycle.

- 📊 **Visual Task Boards**  
  Represent workflow stages such as To-Do, In Progress, and Completed.

- 📈 **Advanced Dashboard**  
  Monitor project performance, team activities, and task progress.

- 🔐 **Security & Data Storage**  
  Ensure secure storage, role-based access, and operational reliability.


## 🌱 Applicability
Sprintly is versatile and applicable across a wide range of organizations and teams:

- **Software Development Teams:** Manage Agile workflows, sprints, and backlogs efficiently.  
- **Startups and Enterprises:** Streamline project coordination and structured task tracking.  
- **Remote and Hybrid Teams:** Enable centralized collaboration across multiple locations.  
- **IT Companies:** Track complex technical projects with transparency and accountability.  
- **Educational Institutions:** Manage academic team projects and collaborative assignments.  
- **Freelancers & Small Teams:** Organize tasks, prioritize workloads, and boost productivity.  

By implementing Sprintly, organizations can improve workflow efficiency, enhance collaboration, and ensure timely project delivery.



## 💫 Purpose
The primary purpose of Sprintly is to improve **project visibility**, **workflow efficiency**, and **team collaboration** through a centralized Agile platform. The system aims to:

- Centralize project and task information for unified access.  
- Support Agile workflows with sprints, backlogs, and iterative execution.  
- Enable real-time tracking of tasks, deadlines, and progress.  
- Improve communication and coordination among team members.  
- Provide actionable insights through dashboards and visual task boards.  



## ⚠️ Limitations
While Sprintly provides significant benefits, it also has some limitations:

- 🌐 **Internet Dependency**  
  Platform performance and real-time updates rely on network stability.  

- 👥 **Role-Based Access Only**  
  Currently supports predefined user roles, limiting advanced customization.  

- 💾 **Data Storage Limits**  
  Project data size may affect performance without optimized database management.  


<br>

> [!IMPORTANT]
>
> **Error:**  
> - Duplicate task created within the same sprint for the same project.
>
> **Cause:**  
> - Two task creation requests were submitted simultaneously.  
> - The database did not enforce a unique constraint on `(projectId, sprintId, taskTitle)`.  
> - Missing server-side validation to check for existing tasks before insertion.
>
> **Solution:**  
> - Added a **database-level unique constraint** to prevent duplicate tasks within the same sprint.  
> - Implemented **transaction handling** to ensure atomic task creation.  
> - Added **server-side validation** to verify task uniqueness before saving.  
> - Improved frontend validation to prevent multiple rapid submissions.



<details>
<summary> Project Contribution Breakdown</summary>

### ✅ What I Did

- Designed and developed a web-based Agile project management platform for teams.  
- Implemented sprint planning, backlog management, and iterative task execution.  
- Built structured workflows for task creation, assignment, and progress tracking.  
- Designed interactive dashboards for monitoring project and team performance.  
- Integrated secure role-based authentication for controlled user access.  
- Developed responsive UI ensuring seamless experience across devices and screens.  

### 🛠️ How I Did It

- Applied Agile workflow principles to design scalable system architecture.  
- Implemented complete task lifecycle management from creation to completion.  
- Designed role-based dashboards providing relevant data for each user type.  
- Ensured secure authentication and authorization for all system operations.  
- Built scalable database models for projects, sprints, and task management.  
- Focused on intuitive UI/UX for easy adoption and team collaboration.  

### 📊 Impact

- Improved overall visibility into project progress and task status.  
- Reduced workflow bottlenecks and minimized project delays effectively.  
- Increased adherence to deadlines through structured task monitoring.  
- Enhanced coordination and communication among team members.  
- Simplified Agile adoption for organizations of varying team sizes.  

</details>




## 🧰 Project Overview

<img width="100%" src="https://github.com/Jostar-Foundation/Sprintly/blob/main/assets/sprintly-agile.png">
<img width="100%" src="https://github.com/Jostar-Foundation/Sprintly/blob/main/assets/DashboardPage.png">
<img width="100%" src="https://github.com/Jostar-Foundation/Sprintly/blob/main/assets/TasksPage.png">
<img width="100%" src="https://github.com/Jostar-Foundation/Sprintly/blob/main/assets/calenderPage.png">
<img width="100%" src="https://github.com/Jostar-Foundation/Sprintly/blob/main/assets/AnalysisPage.png">
<img width="100%" src="https://github.com/Jostar-Foundation/Sprintly/blob/main/assets/commentpage.png">
<img width="100%" src="https://github.com/Jostar-Foundation/Sprintly/blob/main/assets/settingPage.png">


---

<div align="center">
  ⚠️ This repository is uniquely designed by <b>@JoshuaThadi</b>.
</div>
