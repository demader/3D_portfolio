
import {

    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    react,
    redux,
    sass,
    summiz,
    tailwindcss,
    typescript,
    col_logo,
    droply,
    dataalchemist,
    chat
} from "../assets/icons";

import { canyfix, cloudsciencelabs_logo,freelance} from "../assets/images";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];


export const experiences = [
    {
        title: "Salesforce Developer Intern",
        company_name: "Cloud Science Labs",
        icon:cloudsciencelabs_logo, // add your logo import here
        iconBg: "#accbe1",
        date: "Jan 2025 - June 2025",
        points: [
            "Developed and customized Salesforce applications using Apex, Visualforce, and Lightning Web Components (LWC).",
            "Built a Smart ServiceDesk platform to manage internal tickets, automate workflows, and enhance service efficiency.",
            "Designed custom objects, flows, validation rules, and triggers to implement scalable business logic.",
            "Integrated third-party APIs and tools to expand platform functionality and optimize user workflows.",
            "Collaborated with mentors and followed Salesforce best practices to improve maintainability and scalability.",
        ],
    },
    {
        title: "Software Developer Intern",
        company_name: "Canyfix",
        icon:canyfix, 
        iconBg: "#fbc3bc",
        date: "May 2024 - Dec 2024",
        points: [
            "Developed modular frontend architecture using React and Redux, improving maintainability and cross-team collaboration.",
            "Designed a Next.js admin dashboard enabling CRUD operations on vendors, services, and appointments.",
            "Built a cross-device responsive UI with Tailwind CSS and Next.js, streamlining signup/booking and reducing drop-off by 30%.",
            "Integrated 2+ third-party SaaS APIs (CRM & booking) via Axios, improving responsiveness and reducing sync errors by 40%.",
            "Built an animated landing page with Framer Motion, improving user engagement by 20% and reducing bounce rate by ~10%.",
        ],
    },
    {
        title: "Full-Stack Developer (Freelance)",
        company_name: "Self-Employed",
        icon: freelance, 
        iconBg: "#b7e4c7",
        date: "2024 - Present",
        points: [
            "Developed and deployed a responsive Fire & Safety Services website, improving online visibility and client engagement.",
            "Delivered a chatbot application (SciGinie) using React and FastAPI to handle user queries with AI-powered responses.",
            "Built a Cloud-Native eKart platform with microservices for users, products, orders, and payments, deployed with Docker and AWS ECS.",
            "Implemented API Gateway and event-driven architecture (Kafka) for real-time inventory sync and order tracking.",
            "Worked directly with clients to gather requirements, design solutions, and deploy scalable web applications.",
            "Ensured high-quality deliverables through testing, performance optimization, and continuous feedback loops.",
        ],
    },
];


export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/demader',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/abhishek-govind-54a92a227?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZnn9PajdRwiGADXi8wvWrw%3D%3D',
    }
];

export const projects = [
   
     {
        iconUrl: dataalchemist,
        theme: 'btn-back-black',
        name: 'Data Alchemist',
        description: 'AI-enabled platform to upload, clean, and validate CSV/XLSX datasets with auto-generated business rules and rule logic.',
        link: 'https://github.com/demader/alchemist',
    },
    {
        iconUrl: droply,
        theme: 'btn-back-blue',
        name: 'Droply',
        description: 'Secure, scalable file storage platform with CRUD operations, CDN optimization, and serverless backend for fast data processing.',
        link: 'https://github.com/demader/droply',
    },
    {
        iconUrl: col_logo,
        theme: 'btn-back-red',
        name: 'Fire & Safety Services Website',
        description: 'Developed a responsive service-oriented website for a fire safety company, showcasing services, booking, and client engagement features.',
        link: 'https://github.com/demader/Fire_and_safety', // replace with repo or deployed link if available
    },
    {
        iconUrl: chat,
        theme: 'btn-back-green',
        name: 'Chatbot SciGinie',
        description: 'Built an AI-powered chatbot application using FastAPI and React to assist users with dynamic query handling and smart responses.',
        link: 'https://github.com/demader/Chatbot/tree/main/Chatbot', // replace with repo or deployed link if available
    },
    {
        iconUrl:summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App leveraging AI to automatically generate concise & informative summaries from lengthy text or blog content.',
        link: 'https://github.com/demader/Ai_Summerizer',
    },
];