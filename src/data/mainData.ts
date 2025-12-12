import { BsGitlab } from "react-icons/bs";
import { CgMonday } from "react-icons/cg";
import { FaConfluence, FaGitAlt, FaJsSquare, FaReact, FaTrello } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiArduino, SiDotnet, SiExpress, SiJira, SiMui, SiMysql, SiNextdotjs, SiPostgresql, SiSharp, SiTailwindcss, SiTypescript } from "react-icons/si";

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
            title: "BeServer.",
            category: "Branding, Product",
            linkText: "Residential Proxy Server",
            className: "col-span-2 md:col-span-1 h-[600px] bg-gray-900",
            imgageURI: permatasq1
        },
        {
            title: "Seone.",
            category: "Product, Development",
            linkText: "Analytics Overview",
            className: "col-span-2 md:col-span-1 h-[600px] mt-0 md:mt-16 bg-gray-900",
            imgageURI: cropsq2
        },
        {
            title: "Energetic Tumbler.",
            category: "Product, Development",
            linkText: "Dark Midnight",
            className: "col-span-2 md:col-span-1 h-[600px] bg-gray-900",
            imgageURI: verticalGsq3
        },
        {
            title: "Energetic Tumbler.",
            category: "Product, Development",
            linkText: "Dark Midnight",
            className: "col-span-2 md:col-span-1 h-[600px] mt-0 md:mt-16 bg-gray-900",
            imgageURI: presensisq4
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


    ]
}

export default mainData