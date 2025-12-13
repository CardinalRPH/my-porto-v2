import { BsGitlab } from "react-icons/bs";
import { CgMonday } from "react-icons/cg";
import { FaConfluence, FaGitAlt, FaJsSquare, FaPhp, FaReact, FaTrello } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiArduino, SiDotnet, SiExpress, SiJira, SiMui, SiMysql, SiNextdotjs, SiPostgresql, SiSharp, SiSocketdotio, SiTailwindcss, SiTypescript } from "react-icons/si";

import permatasq1 from "../assets/projects/permata-sq1.jpg"
import cropsq2 from "../assets/projects/crop-sq2.jpg"
import verticalGsq3 from "../assets/projects/smart-vertical-garden-sq3.jpg"
import presensisq4 from "../assets/projects/presensi-asisten-sq4.jpg"

const mainData = {
    core: [
        {
            title: "Web Administrator & System Reliability",
            desc: "Dedicated to maintaining system integrity, security, and peak performance, ensuring zero-downtime deployments and optimal infrastructure health."
        },
        {
            title: "Full Stack Development (Front-End & Back-End)",
            desc: "Expert in building scalable, responsive web applications using the modern JavaScript ecosystem (React/Next.js) combined with robust C#/.NET and Node.js back-ends."
        },
        {
            title: "IoT Engineering",
            desc: "Focus on embedded systems development (Arduino/microcontrollers), secure sensor data acquisition, and maintaining reliable network communication for interconnected devices."
        },

    ],
    project: [
        {
            title: "Live Score Counting",
            category: [{
                icon: FaPhp,
                color: 'text-purple-500'
            }, {
                icon: SiMysql,
                color: 'text-blue-400'
            }, {
                icon: FaReact,
                color: 'text-blue-400'
            }],
            linkText: "Permata Score",
            className: "col-span-2 md:col-span-1 h-[600px] bg-gray-900",
            imgageURI: permatasq1,
            projectLink: "https://permataicon.com/"
        },
        {
            title: "Plant and Crop Scheduling.",
            category: [{
                icon: SiExpress,
                color: 'text-gray-400'
            }, {
                icon: FaReact,
                color: 'text-blue-400'
            }, {
                icon: IoLogoFirebase,
                color: 'text-orange-400'
            }],
            linkText: "Cropplanner",
            className: "col-span-2 md:col-span-1 h-[600px] mt-0 md:mt-16 bg-gray-900",
            imgageURI: cropsq2,
            projectLink: "https://cropplanner.netlify.app/"
        },
        {
            title: "Automation and Monitoring Vertical Garden",
            category: [{
                icon: FaReact,
                color: 'text-blue-400'
            }, {
                icon: SiExpress,
                color: 'text-gray-400'
            }, {
                icon: SiArduino,
                color: 'text-teal-500'
            }, {
                icon: IoLogoFirebase,
                color: 'text-orange-400'
            }],
            linkText: "Smart Vertical Garden",
            className: "col-span-2 md:col-span-1 h-[600px] bg-gray-900",
            imgageURI: verticalGsq3,
            projectLink: "https://github.com/CardinalRPH/smart-vertical-garden"
        },
        {
            title: "People Attendance",
            category: [{
                icon: FaReact,
                color: 'text-blue-400'
            }, {
                icon: SiExpress,
                color: 'text-gray-400'
            }, {
                icon: SiMysql,
                color: 'text-blue-400'
            }],
            linkText: "Lab ICT Absen",
            className: "col-span-2 md:col-span-1 h-[600px] mt-0 md:mt-16 bg-gray-900",
            imgageURI: presensisq4,
            projectLink: "https://github.com/Laboratorium-ICT-Terpadu-UBL/Lab-Absen-JS-FrontEnd"
        },
    ],
    techStack: [
        {
            name: 'React',
            icon: FaReact,
            color: 'text-blue-400'
        },
        {
            name: 'Express.js',
            icon: SiExpress,
            color: 'text-gray-400'
        },
        {
            name: 'Next.js',
            icon: SiNextdotjs,
            color: 'text-white'
        },
        {
            name: 'ASP.NET Core',
            icon: SiDotnet,
            color: 'text-purple-700'
        },
        {
            name: 'JavaScript',
            icon: FaJsSquare,
            color: 'text-yellow-400'
        },
        {
            name: 'TypeScript',
            icon: SiTypescript,
            color: 'text-blue-500'
        },
        {
            name: 'C#',
            icon: SiSharp,
            color: 'text-purple-600'
        },
        {
            name: 'Arduino',
            icon: SiArduino,
            color: 'text-teal-500'
        },
        {
            name: 'PostgreSQL',
            icon: SiPostgresql,
            color: 'text-blue-600'
        },
        {
            name: 'MySQL',
            icon: SiMysql,
            color: 'text-blue-400'
        },
        {
            name: 'Firebase',
            icon: IoLogoFirebase,
            color: 'text-orange-400'
        },
        {
            name: 'Git/GitHub',
            icon: FaGitAlt,
            color: 'text-red-600'
        },
        {
            name: 'GitLab',
            icon: BsGitlab,
            color: 'text-orange-600'
        },
        {
            name: 'Tailwind CSS',
            icon: SiTailwindcss,
            color: 'text-cyan-400'
        },
        {
            name: 'Material UI',
            icon: SiMui,
            color: 'text-blue-500'
        },
        {
            name: 'Socket.io',
            icon: SiSocketdotio,
            color: 'text-gray-400'
        },
        {
            name: 'Jira',
            icon: SiJira,
            color: 'text-blue-500'
        },
        {
            name: 'Trello',
            icon: FaTrello,
            color: 'text-blue-500'
        },
        {
            name: 'Confluence',
            icon: FaConfluence,
            color: 'text-blue-500'
        },
        {
            name: 'Monday',
            icon: CgMonday,
            color: 'text-yellow-500'
        },

    ],
    journey: [
        {
            startDate: 'Dec 2024',
            endDate: 'Present',
            company: 'HSBC',
            role: 'Web Administrator',
            summary: 'Focused on web system administration and operational reliability within a secure banking environment.'
        },
        {
            startDate: 'Sept 2024',
            endDate: 'Dec 2024',
            company: 'Onanmedia International',
            role: 'Full Stack Developer',
            summary: 'Gained hands-on experience in full-stack web development using Typescript, Node.js, Next.js, and React.'
        },
        {
            startDate: 'Aug 2022',
            endDate: 'Jul 2023',
            company: 'ICT LAB Budiluhur',
            role: 'Network Supervision',
            summary: 'Supervised network infrastructure and ensured reliable connectivity to support laboratory research activities.'
        },
    ],
    profile: {
        name: "Rayhan Febriyan Saputra",
        description: "Web Administrator with a computer science background, experienced in managing enterprise web systems, CI/CD pipelines (Jenkins–Maven), Java-based deployments, and IoT-driven solutions, with prior full-stack experience building scalable APIs, responsive web applications, and real-time systems.",
        from: "Jakarta, Indonesia",
        email: "rayhan.febriyan@example.com",
        profileImage: "/path/to/your/profile-photo.jpg",
        social: {
            instagram: "https://www.instagram.com/_reean",
            github: "https://github.com/CardinalRPH",
            linkedin: "https://www.linkedin.com/in/rayhan-febriyan-saputra-945a05162"
        },
    },
    education: [
        {
            year: "Jun 2020 - Jul 2024",
            institution: "Universitas Budi Luhur",
            degree: "Bachelor of Computer Science",
            details: "Graduated Magna Cum Laude, demonstrating exceptional academic performance and dedication to excellence.",
        },
        {
            year: "Feb 2023 - Jul 2023",
            institution: "Dicoding Academy",
            degree: "Certificated of Developing Front-End and Back-End",
            details: "Completed JavaScript-based front-end development, strengthened collaboration and communication skills, and contributed to a team-based Capstone Project using React.js and Express.js.",
        }
    ],
    skills: [
        {
            title: "Programming & Development",
            details: "Javascript & Typescript (React, Next.js, Express.js, NodeJS, Material UI, Tailwind CSS, GSAP), RESTful API's Full Stack Development, Microservices , IoT (Arduino & ESp), DotNetCore (ASP DotNet) "
        },
        {
            title: "System Administration & Networking",
            details: "Linux (Ubuntu, Mint), Network Monitoring"
        },
        {
            title: "Database Management",
            details: "MySQL, PostgreSQL, Firebase Realtime Database, Firebase Firestore"
        },
        {
            title: "Dev Tools",
            details: "Github, Gitlab, CI/CD (Jenkins & Github Tunnel), Troubleshooting, Technical Support"
        },
        {
            title: "Project Management",
            details: "Jira, Monday, Confluence, Trello"
        },
    ]

}

export default mainData