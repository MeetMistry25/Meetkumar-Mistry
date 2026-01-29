import { Project } from "./types";

export const MOCK_PROJECTS: Project[] = [
    {
        id: 1,
        title: "ReclaimIt - Campus Lost & Found",
        description: "A secure lost & found portal for campus environments where registered members can report and claim items. Features status updates and role-based authentication.",
        tech: ["MERN Stack", "React.js", "Node.js", "MongoDB", "Express.js"],
        image: "/reclaimit.png",
        github: "https://github.com/MeetMistry25/ReClaimIt",
        demo: "",
        category: "Full Stack"
    },
    {
        id: 2,
        title: "AcademiaPlus",
        description: "Extracurricular Course Management System facilitating student enrollments and faculty workflows. Implements secure JWT-based Role-Based Access Control (RBAC).",
        tech: ["Angular", "ASP.NET Core 8", "EF Core", "SQLite", "Tailwind CSS"],
        image: "/academiaplus.png",
        github: "https://github.com/MeetMistry25/Academiaplus",
        demo: "https://academiaplus-9532a.web.app/",
        category: "Full Stack"
    }
];

export const SKILLS = [
    { category: "Frontend", items: ["Angular", "React.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"] },
    { category: "Backend", items: ["ASP.NET Core 8", "Node.js", "Express.js", "C#", "REST APIs"] },
    { category: "Databases", items: ["MongoDB", "SQLite", "SQL", "Entity Framework Core"] },
    { category: "Tools & Concepts", items: ["Git", "JWT Auth", "RBAC", "Agile", "VS Code"] },
];

export const EXPERIENCES = [
    {
        id: 1,
        title: "Web Development Intern",
        company: "Outamation Technologies",
        period: "Sep 2025 - Mar 2026",
        description: "Contributing to AcademiaPlus, a full-stack course management system. Building responsive frontend with Angular/Tailwind and secure backend with ASP.NET Core 8."
    },
    {
        id: 2,
        title: "B.Tech in Computer Engineering",
        company: "Indus University",
        period: "Graduation: 2026",
        description: "CGPA: 8.83 / 10. Focused on software engineering fundamentals, OOP, and web architecture."
    }
];

