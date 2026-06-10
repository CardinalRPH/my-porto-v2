import { BsGitlab } from "react-icons/bs";
import { CgMonday } from "react-icons/cg";
import { FaConfluence, FaDiscord, FaGitAlt, FaJsSquare, FaPhp, FaReact, FaTrello } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiArduino, SiExpress, SiJira, SiMui, SiMysql, SiNextdotjs, SiPostgresql, SiRedis, SiRedux, SiSharp, SiSocketdotio, SiTailwindcss, SiTypescript } from "react-icons/si";

import permatasPrj from "../assets/projects/permata.jpg"
import verticalGPrj from "../assets/projects/vertical_garden.jpg"
import presensiPrj from "../assets/projects/people_attd.jpg"
import finTrack2 from "../assets/projects/fintrack2.jpg"
import level9 from "../assets/projects/level9.jpg"
import ppob from "../assets/projects/ppob.jpg"

import profileImg1 from "../assets/profile.png"
import profileImg2 from "../assets/profilev2.png"

const mainData = {
    core: [
        {
            title: "Web Administrator & System Reliability",
            desc: "Experienced in managing enterprise web environments, implementing CI/CD practices, and executing rigorous UAT-to-Production testing to ensure system integrity, asset validation, and operational efficiency."
        },
        {
            title: "Full Stack Development (Front-End & Back-End)",
            desc: "Skilled in building scalable and responsive web applications using TypeScript, React, Next.js, and Tailwind CSS, combined with robust RESTful APIs and real-time features using Express.js and Socket.io."
        },
        {
            title: "IoT Engineering & Analytical Systems",
            desc: "Proficient in designing embedded systems and logical flows using Arduino, microcontrollers, and Fuzzy Logic, supported by secure Node.js servers and WebSocket protocols for real-time device communication."
        }
    ],
    project: [
        {
            title: "Financial Tracker",
            category: [
                {
                    name: 'Next.js',
                    icon: SiNextdotjs,
                    color: 'text-white'
                },
                {
                    icon: SiRedis,
                    color: 'text-red-500'
                },
                {
                    icon: FaDiscord,
                    color: 'text-purple-500'
                },
                {
                    icon: SiMysql,
                    color: 'text-blue-400'
                },
                {
                    icon: SiTypescript,
                    color: 'text-blue-500'
                },
            ],
            linkText: "FinTrack",
            className: "col-span-2 md:col-span-1 h-[600px] bg-gray-900",
            imgageURI: finTrack2,
            projectLink: "https://venational-edmond-untameable.ngrok-free.dev/",
            repoLink: "https://github.com/CardinalRPH/finTrack2"
        },
        {
            title: "Donation Bridger",
            category: [
                {
                    icon: FaReact,
                    color: 'text-blue-400'
                },
                {
                    icon: SiRedis,
                    color: 'text-red-500'
                },
                {
                    icon: SiExpress,
                    color: 'text-gray-400'
                },
                {
                    icon: SiTypescript,
                    color: 'text-blue-500'
                },
            ],
            linkText: "Level9 Donation Bridger",
            className: "col-span-2 md:col-span-1 h-[600px] mt-0 md:mt-16 bg-gray-900",
            imgageURI: level9,
            projectLink: "http://ninerph.cloud/",
            repoLink: ""
        },
        {
            title: "Payment Point Online Bank",
            category: [
                {
                    icon: FaReact,
                    color: 'text-blue-400'
                },
                {
                    icon: SiRedux,
                    color: 'text-purple-500'
                },
                {
                    icon: SiTypescript,
                    color: 'text-blue-500'
                },
            ],
            linkText: "SIMS PPOB",
            className: "col-span-2 md:col-span-1 h-[600px] bg-gray-900",
            imgageURI: ppob,
            projectLink: "https://sims-ppob-rayhan-febriyan-saputra.netlify.app/",
            repoLink: "https://github.com/CardinalRPH/SIMS-PPOB-Rayhan-Febriyan-Saputra"
        },
        {
            title: "People Attendance",
            category: [
                {
                    icon: FaReact,
                    color: 'text-blue-400'
                },
                {
                    icon: SiExpress,
                    color: 'text-gray-400'
                },
                {
                    icon: SiMysql,
                    color: 'text-blue-400'
                },
                {
                    icon: FaJsSquare,
                    color: 'text-yellow-400'
                },
            ],
            linkText: "Lab ICT Absen",
            className: "col-span-2 md:col-span-1 h-[600px] mt-0 md:mt-16 bg-gray-900",
            imgageURI: presensiPrj,
            projectLink: "",
            repoLink: "https://github.com/Laboratorium-ICT-Terpadu-UBL/Lab-Absen-JS-FrontEnd"
        },
        {
            title: "Live Score Counting",
            category: [
                {
                    icon: FaPhp,
                    color: 'text-purple-500'
                },
                {
                    icon: SiMysql,
                    color: 'text-blue-400'
                },
                {
                    icon: FaReact,
                    color: 'text-blue-400'
                },
                {
                    icon: FaJsSquare,
                    color: 'text-yellow-400'
                },
            ],
            linkText: "Permata Score",
            className: "col-span-2 md:col-span-1 h-[600px] bg-gray-900",
            imgageURI: permatasPrj,
            projectLink: "https://permataicon.com/",
            repoLink: ""
        },
        {
            title: "Automation and Monitoring Vertical Garden",
            category: [
                {
                    icon: FaReact,
                    color: 'text-blue-400'
                },
                {
                    icon: SiExpress,
                    color: 'text-gray-400'
                },
                {
                    icon: SiArduino,
                    color: 'text-teal-500'
                },
                {
                    icon: IoLogoFirebase,
                    color: 'text-orange-400'
                },
                {
                    icon: FaJsSquare,
                    color: 'text-yellow-400'
                },
            ],
            linkText: "Smart Vertical Garden",
            className: "col-span-2 md:col-span-1 h-[600px] bg-gray-900 mt-0 md:mt-16",
            imgageURI: verticalGPrj,
            projectLink: "",
            repoLink: "https://github.com/CardinalRPH/smart-vertical-garden"
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
            name: 'Redis',
            icon: SiRedis,
            color: 'text-red-500'
        },
        {
            name: 'Redux',
            icon: SiRedux,
            color: 'text-purple-500'
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
            endDate: 'Jun 2026',
            company: 'HSBC Indonesia',
            role: 'IWPB Web Administrator',
            summary: 'Managed enterprise web operations, web page development, and end-to-end QA email campaigns while introducing CI/CD practices and robust UAT-to-Production environment testing.'
        },
        {
            startDate: 'Sep 2024',
            endDate: 'Dec 2024',
            company: 'Onanmedia Internasional Indonesia',
            role: 'Fullstack Web Developer',
            summary: 'Developed responsive web applications from scratch, created scalable RESTful APIs with TypeScript/Express.js, and integrated Socket.io for real-time communication features.'
        },
        {
            startDate: 'Aug 2022',
            endDate: 'Jul 2023',
            company: 'Lab ICT Universitas Budi Luhur',
            role: 'Supervisor Lab Assistant',
            summary: 'Supervised 30 lab assistants, maintained main and storage servers, deployed supporting laboratory websites, and managed network connectivity to ensure smooth lab operations.'
        }
    ],
    profile: {
        name: "Rayhan Febriyan Saputra",
        description: "Technical-minded Web Developer and Administrator with a strong foundation in Computer Science. Proven expertise in managing enterprise-grade web operations, rigorous environment testing (UAT to Production), and CI/CD pipelines, alongside comprehensive full-stack experience in the modern JavaScript/TypeScript ecosystem and IoT-driven solutions.",
        from: "Jakarta, Indonesia",
        email: "rayhanfebriyan62@gmail.com",
        profileImage1: profileImg1,
        profileImage2: profileImg2,
        social: {
            instagram: "https://www.instagram.com/reean_rayhan/",
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