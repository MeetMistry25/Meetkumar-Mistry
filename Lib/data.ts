import { Project } from "./types";

export const MOCK_PROJECTS: Project[] = [
    {
        id: 1,
        title: "ReclaimIt - Campus Lost & Found",
        description: "A secure, centralized platform for universities to manage lost and found items efficiently. Solves the chaos of unorganized claim processes using a modern MERN stack architecture.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "JWT", "Tailwind CSS"],
        image: "/reclaimit.png",
        github: "https://github.com/MeetMistry25/ReClaimIt",
        demo: "",
        category: "Full Stack",
        problemStatement: "Lost and found management on campuses is typically manual and inefficient, leading to unclaimed items and poor tracking. A centralized digital system is needed to report, match, and claim lost items securely.",
        role: "Full-stack developer. Built React frontend and Node.js backend. Designed MongoDB schema and API endpoints. Implemented authentication and media upload features. Developed admin dashboard and claim workflows.",
        architecture: "Frontend: React + Tailwind + Context API. Backend: Node.js + Express. Database: MongoDB + Mongoose. Media: Cloudinary integration. Auth: JWT + bcrypt. Architecture pattern: React SPA → REST API → MongoDB.",
        keyFeatures: [
            "Lost & found item reporting",
            "AI-based matching between lost and found items",
            "Image uploads with Cloudinary",
            "Admin dashboard for moderation",
            "Claim verification workflow",
            "Search, filtering, and real-time updates",
            "Personalized user dashboards"
        ],
        challengesSolved: [
            "Handling file uploads and cloud storage integration",
            "Designing schema for items, claims, and user tracking",
            "Implementing secure authentication flows",
            "Creating scalable REST endpoints",
            "Managing state across React components",
            "Building search and filter functionality"
        ],
        securityImplementations: [
            "JWT authentication",
            "Password hashing using bcrypt",
            "Protected routes for authenticated users",
            "Secure claim verification system",
            "Environment variable management (.env)"
        ],
        whatILearned: [
            "MERN stack architecture in production-style project",
            "Secure file upload handling",
            "MongoDB schema design for dynamic data",
            "Building scalable API layers in Express",
            "Managing global state using Context API"
        ]
    },
    {
        id: 2,
        title: "AcademiaPlus",
        description: "An enterprise-grade Extracurricular Course Management System facilitating student enrollments and faculty workflows. Built with clean architecture principles and secure RBAC.",
        tech: ["Angular 17", "ASP.NET Core 8", "EF Core", "SQLite", "Tailwind CSS", "DaisyUI"],
        image: "/academiaplus.png",
        github: "https://github.com/MeetMistry25/Academiaplus",
        demo: "https://academiaplus-9532a.web.app/",
        category: "Full Stack",
        problemStatement: "Colleges struggle to manage extracurricular course enrollments, faculty coordination, and student participation through scattered manual systems. There is a need for a centralized platform that enables secure course management, enrollment tracking, and role-based access for students, faculty, and administrators.",
        role: "Full-stack developer. Designed and implemented both frontend and backend. Built REST APIs and integrated them with Angular UI. Designed database schema and authentication flow. Developed role-based features for students, faculty, and admins.",
        architecture: "Frontend: Angular + TailwindCSS + TypeScript. Backend: ASP.NET Core Web API. Database: SQLite + Entity Framework Core. Auth: JWT-based authentication. API documentation: Swagger/OpenAPI. System follows a layered architecture: Angular SPA (presentation) -> REST API (business logic) -> EF Core + SQLite (data layer).",
        keyFeatures: [
            "Multi-role portals (Student, Faculty, Admin)",
            "Course browsing, filtering, and enrollment",
            "Faculty profile management",
            "Secure authentication & profile system",
            "Responsive UI for usability across devices"
        ],
        challengesSolved: [
            "Designing scalable REST APIs for multi-role access",
            "Structuring modular Angular components",
            "Handling relational data using EF Core",
            "Managing state between authentication and user sessions",
            "Creating reusable services for API communication"
        ],
        securityImplementations: [
            "JWT-based authentication",
            "Protected API endpoints",
            "Role-based authorization",
            "Secure login/signup flow",
            "Token validation middleware"
        ],
        whatILearned: [
            "End-to-end full-stack development lifecycle",
            "Designing clean RESTful API structures",
            "Implementing authentication and authorization in ASP.NET Core",
            "Angular component architecture and service-based data flow",
            "ORM-based database modeling"
        ]
    }
];

export const SKILLS = [
    {
        category: "Frontend",
        items: [
            { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", color: "#DD0031" },
            { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
            { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "#E34F26" },
            { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "#1572B6" },
            { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", color: "#06B6D4" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" }
        ]
    },
    {
        category: "Backend",
        items: [
            { name: "ASP.NET Core 8", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg", color: "#512BD4" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
            { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "#000000" },
            { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", color: "#239120" },
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776AB" }
        ]
    },
    {
        category: "Databases",
        items: [
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47A248" },
            { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg", color: "#003B57" },
            { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#336791" },
            { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg", color: "#3ECF8E" }
        ]
    },
    {
        category: "Tools & Concepts",
        items: [
            { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032" },
            { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-plain.svg", color: "#009688" }, // Using generic API icon or placeholder
            { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", color: "#FF6C37" },
            { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", color: "#007ACC" }
        ]
    }
];

export const ACHIEVEMENTS = [
    {
        id: 1,
        title: "Built Scalable Full-Stack Systems",
        description: "Designed and deployed multiple production-ready applications using .NET and MERN stacks."
    },
    {
        id: 2,
        title: "Secure Auth Implementation",
        description: "Implemented robust JWT-based Role-Based Access Control (RBAC) systems ensuring data security."
    },
    {
        id: 3,
        title: "API Development Expert",
        description: "Engineered high-performance REST APIs with optimized database queries and clean architecture."
    },
    {
        id: 4,
        title: "Cross-Platform Proficiency",
        description: "Demonstrated versatility by mastering both Angular (TypeScript) and React ecosystems."
    },
    {
        id: 5,
        title: "Internship Success",
        description: "Contributed to real-world enterprise software, enhancing frontend responsiveness and backend reliability."
    }
];

export const EXPERIENCES = [
    {
        id: 1,
        title: "Web Development Intern",
        company: "Outamation Technologies",
        period: "Sep 2025 - Mar 2026",
        description: "Spearheading the development of 'AcademiaPlus', an enterprise-grade course management system. Engineered the ASP.NET Core backend architecture and implemented secure JWT authentication. Optimized frontend performance using Angular 17's latest features."
    },
    {
        id: 2,
        title: "B.Tech in Computer Engineering",
        company: "Indus University",
        period: "2022 - 2026",
        description: "Maintained a strong CGPA of 9.03/10. Specializing in Advanced Web Engineering, Database Management Systems, and Object-Oriented Software Design."
    }
];
