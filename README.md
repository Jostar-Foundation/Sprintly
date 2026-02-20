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



## 📌 Background

- Rapid technological growth transformed traditional project management into structured digital workflows.  
- Manual spreadsheets and emails caused delays, miscommunication, and inefficient coordination.  
- Agile methodologies introduced flexible, iterative, and collaborative development practices.  
- Modern teams require centralized platforms for real-time project visibility.  
- Sprintly addresses these needs with secure, scalable, and structured solutions.  


## 💫 Purpose

- Provide a centralized Agile platform simplifying complex project execution processes.  
- Bridge planning strategies with real-time task tracking and monitoring.  
- Replace fragmented manual tracking methods with structured digital workflows.  
- Improve team collaboration through transparent and unified project information.  
- Enable informed decision-making using dashboards and visual progress insights.  


## 📦 Scope of the Platform

- Support secure user authentication with structured role-based access control.  
- Enable creation and management of multiple scalable project environments.  
- Facilitate sprint planning with organized backlog allocation and execution.  
- Provide complete task lifecycle management from creation to completion.  
- Display workflow stages clearly using structured visual task boards.  
- Offer dashboards for monitoring performance and team productivity.  

## 🌍 Applicability

- Suitable for software development teams practicing Agile methodologies.  
- Effective for startups and enterprises managing structured project workflows.  
- Ideal for remote and hybrid teams requiring centralized coordination.  
- Applicable in IT companies handling complex technical projects.  
- Useful for educational institutions managing academic collaborative projects.  
- Beneficial for freelancers and small teams organizing prioritized workloads.  

## 🔒 Security & Access Control

- Implement structured role-based permissions ensuring controlled system access.  
- Prevent unauthorized modifications through clearly defined access levels.  
- Protect sensitive project data using secure authentication mechanisms.  
- Maintain operational stability through controlled feature accessibility.  
- Enhance governance by aligning permissions with organizational responsibilities.  



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
