import { Mail, Github, MapPin, Code, Database, Smartphone, Briefcase, Calendar, Award, GraduationCap } from 'lucide-react';

export const portfolioData = {
    personalInfo: {
        name: "Rimsha Sherwani",
        title: "Mid - Senior Software Developer",
        phone: "+92 3010501661",
        email: "rimshasherwani@gmail.com",
        location: "Islamabad, Pakistan",
        github: "github.com/RimshaKhanSherwani",
        contactInfo: [
            { icon: Mail, label: "Email", value: "rimshasherwani@gmail.com", href: "mailto:rimshasherwani@gmail.com" },
            { icon: Github, label: "GitHub", value: "RimshaKhanSherwani", href: "https://github.com/RimshaKhanSherwani" },
            { icon: MapPin, label: "Location", value: "Islamabad, Pakistan", href: "https://maps.google.com/?q=Islamabad,Pakistan" }
        ]
    },
    summary: "Results-oriented Mid-Senior Software Engineer with 3+ years of experience specializing in React.js, TypeScript, and Frontend Strategies. Expert in building scalable enterprise solutions across Healthcare, HR Management, 3D Model Viewer CMS and Mobile Device Management (MDM) and AI. Proven track record of optimizing CI/CD pipelines, leading cross-functional teams, and implementing AI-driven development workflows to reduce delivery cycles by 20-30%. Strong focus on 3D product visualization, state management, and performance tuning for high-traffic web applications.",
    experience: [
        {
            role: "Mid-Senior Front-End Developer – Technical Strategist",
            company: "Embrace-IT (PVT) Ltd, Islamabad, Pakistan",
            duration: "September 2025 – Present",
            highlights: [
                "Architecture & Leadership: Spearheaded the transition to a Micro-Frontend architecture, leading sprint planning and task delegation for a team of developers using Agile/Scrum methodologies.",
                "CI/CD & Automation: Optimized Azure DevOps CI/CD pipelines, reducing deployment failures by 15% and integrating AI agents (CodeRabbit) for automated code reviews and PR summaries.",
                "Performance Optimization: Diagnosed and resolved critical bottlenecks in dashboard rendering, improving Lighthouse performance scores by 30% through code-splitting and memoization.",
                "Security & Compliance: Engineered secure MDM workflows and security panels, ensuring 100% compliance with industry-standard data protection protocols."
            ],
            technologies: ["React", "TypeScript", "Micro-Frontends", "Azure DevOps", "AI Agents", "Lighthouse"]
        },
        {
            role: "Junior Front-End Developer – Technical Strategist",
            company: "Embrace-IT (PVT) Ltd, Islamabad, Pakistan",
            duration: "January 2023 – September 2025",
            highlights: [
                "State Management: Architected complex state logic using Jotai and Recoil, improving application responsiveness and reducing unnecessary re-renders in large-scale HRMS platforms.",
                "Scalability: Developed a centralized Storybook UI Library, increasing development velocity by 25% across multiple projects through reusable, atomic components.",
                "Data Integration: Streamlined data fetching strategies using GraphQL and Relay, reducing API payload sizes and improving mobile load times."
            ],
            technologies: ["React", "Jotai", "Recoil", "Storybook", "GraphQL", "Relay"]
        },
        {
            role: "Front-End Internship",
            company: "Embrace-IT (PVT) Ltd, Islamabad, Pakistan",
            duration: "July 2022 – December 2022",
            highlights: [
                "UI Development: Developed core modules and features for internal systems.",
                "Data Migration: Migrated backend data from SQL to MongoDB for better flexibility.",
                "Agile Practices: Learned version control workflows and Agile methodologies.",
                "Debugging: Assisted senior engineers in optimising front-end performance.",
                "Component Creation: Built basic UI components and layouts reused in production."
            ],
            technologies: ["React", "SQL", "MongoDB", "Agile", "UI/UX"]
        }
    ],
    projects: [
        {
            id: "servicehub",
            title: "ServiceHub – IT Service, Assets & Ticketing Platform",
            description: "Developed Kanban-style ticketing and interactive dashboards. Designed and implemented 10+ high-security dashboard panels for MDM systems, improving user data visualization efficiency by 40%.",
            highlights: [
                "Ensured deployment consistency and platform stability.",
                "Used Jotai for state management and React-Query for backend integration.",
                "Implemented AI-assisted prompt automation.",
                "Added security measures to protect data and prevent XSS."
            ],
            technologies: ["React JS", "TypeScript", "Ant Design", "AntV", "Styled-components", "Jotai", "React-Query", "Coderabbit", "CI/CD", "AI tools"]
        },
        {
            id: "getmt3",
            title: "GetMt3 – CMS with 3D Canvas Product Editor",
            description: "Implemented a custom 3D editor and integrated Model Viewer for real-time product visualisation.",
            highlights: [
                "Lead developer for the editor interface; solved complex 2D/3D rendering challenges.",
                "Improved usability with context-based state management."
            ],
            technologies: ["React JS", "TypeScript", "Styled-components", "Fabric JS", "Model Viewer", "React-Query", "Ant Design", "AntV", "Stripe", "Google USPs"]
        },
        {
            id: "workspace",
            title: "Workspace – HR Management System",
            description: "Built interactive HR modules with AntV Plots; wrote unit tests with React Testing Library.",
            highlights: [
                "Developed a reusable UI component library in Storybook.",
                "Used Recoil with Relay and GraphQL for efficient data handling."
            ],
            technologies: ["React", "TypeScript", "Styled-components", "Recoil", "Relay", "GraphQL", "Ant Design", "Storybook", "AntV Plot"]
        },
        {
            id: "healthtrack",
            title: "HealthTrack – Healthcare Management Dashboard",
            description: "Developed a dashboard to track patient appointments, treatment progress, and staff schedules.",
            highlights: [
                "Implemented interactive charts and real-time notifications.",
                "Designed and implemented the front-end interface, created reusable UI components, and ensured smooth state management.",
                "Built responsive layouts with secure access controls and optimised performance for real-time updates."
            ],
            technologies: ["React JS", "TypeScript", "Ant Design", "Recoil", "AntV Plots"]
        },
        {
            id: "mobiguard",
            title: "MobiGuard – Mobile Device Management (MDM & EMM Platform)",
            description: "Developed device management features like security policies, WiFi setup, and app management. Integrated AI-assisted development workflows.",
            highlights: [
                "Managed teams and planned sprints; oversaw full deployment.",
                "Worked with domain experts to create seamless enterprise business flows.",
                "Designed responsive UI/UX dashboards using Android Management API.",
                "Implemented AI-assisted prompt-based automation.",
                "Added robust security features to protect data."
            ],
            technologies: ["TypeScript", "React JS", "Ant Design", "Styled-components", "AntV", "Google Play Store", "Coderabbit", "CI/CD", "LangChain", "OpenAI API"]
        }
    ],
    skills: {
        languages: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3/SCSS"],
        frontend: ["React.js", "Next.js", "Styled-components", "Material UI", "Ant Design", "Fabric.js (3D/2D Canvas)", "AntV Plots", "Model Viewer", "Storybook"],
        stateData: ["Jotai", "Recoil", "Relay", "GraphQL", "Apollo Client", "REST APIs", "Context API"],
        backendTools: ["Node.js", "Express", "MongoDB", "MySQL", "Git", "GitHub Actions"],
        devOpsAI: ["Azure CI/CD", "Netlify", "AI Prompt Engineering", "Unit Testing (RTL/Jest)"],
        softSkills: ["Problem Solving", "Leadership", "Cross-Cultural Collaboration", "Critical Thinking", "Negotiation", "Public Speaking", "Adaptability", "Active Listening", "Innovation", "Responsibility", "Team & Time Mgmt"]
    },
    education: [
        {
            degree: "Bachelor of Science in Software Engineering",
            institution: "Riphah International University, Islamabad, Pakistan",
            details: "CGPA: 3.85 / 4.00 | 2020 – 2024",
            note: "Mentored by Embrace-IT (PVT) Ltd to develop real-world, industry-standard solutions."
        }
    ],
    awards: [
        {
            title: "Bachelor of Science in Software Engineering",
            institution: "Riphah International University",
            description: "Gold Medalist for academic excellence in Software Engineering."
        },
        {
            title: "Outstanding contribution in IEEE 2021–2022",
            institution: "Riphah University and the Faculty of Computing",
            description: "Recognized for managing logistics and leading event management."
        }
    ],
    certifications: [],
    volunteering: [
        {
            role: "Volunteer",
            organization: "IEEE Student Branch",
            duration: "2021–2022",
            description: "Managed logistics for technical webinars; coordinated sessions, ensured smooth participant experience, and supported technical setups."
        },
        {
            role: "Volunteer",
            organization: "IEEE Student Branch",
            duration: "2021–2022",
            description: "Led end-to-end event management for student events; planned schedules, coordinated teams, and oversaw resources for successful execution."
        }
    ]
};
