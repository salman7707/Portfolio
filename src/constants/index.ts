import { LuContact, LuGithub, LuLinkedin } from "react-icons/lu";
import IMAGES from "../../public/images";
import { MdHome, MdMailOutline } from "react-icons/md";
import { FaRegFolder } from "react-icons/fa";
import { BugIcon, CodeIcon, GitForkIcon, Mail, MailIcon, MapPin, PencilIcon, Phone, User } from "lucide-react";
import { ROUTES } from "@/utils/ROUTES";


export const HeroSectionData = [
    {
        id: 0,
        firstSection: [
            {
                id: 0,
                Avatar: IMAGES.PROFILE,
                links: [
                    { id: 0, ICON: LuGithub, link: "https://github.com/salman7707" },
                    { id: 1, ICON: LuLinkedin, link: "https://linkedin.com/in/salman-ali-908878284" },
                    { id: 2, ICON: MdMailOutline, link: "mailto:salmanaliofficial7@gmail.com" },
                ],
            }
        ],
        secondSection: [
            {
                id: 0,
                smallHeading: "Hello World, I am",
                heading: "Salman Dev",
                paragraph: "I am a passionate MERN stack developer with a strong interest in web development. I am constantly learning and exploring new technologies to enhance my skills. In my free time, I enjoy solving problems on LeetCode and improving my problem-solving abilities. I am excited to contribute to innovative projects and work alongside other developers to create meaningful solutions.",
                points: "Available for new projects",
                downloadbuttonhref: ROUTES.CV,
                moreAboutMeherf: "/"
            }
        ]
    }
]

export const SideBarNavLinks = [
    {
        id: 0,
        ICON: MdHome,
        title: "Home",
        url: "/",
    },
    {
        id: 1,
        ICON: FaRegFolder,
        title: "Projects",
        url: "/projects",
    },
    {
        id: 2,
        ICON: LuContact,
        title: "Contact Me",
        url: "/contact",
    },
]

export const NotableProjectsData = [
    {
        id: 0,
        icons: [
            "typescript",
            "javascript",
            "react",
            "html5",
            "css3",
            "nodedotjs",
            "express",
            "nextdotjs",
            "prisma",
            "postgresql",
            "firebase",
            "nginx",
            "vercel",
            "git",
            "github",
            "gitlab",
            "visualstudiocode",
        ],
        homeProjectCard: [
            {
                id: 0,
                img: IMAGES.EDUWIZ_PROJECT,
                heading: "EduWiz",
                privatesource: true,
                paragraph: "A professional and user-friendly website tailored for Schools to Manage their mission, activities, and impact. Designed to enhance engagement and communication with stakeholders.",
                websiteLink: "https://edu-wiz-1.vercel.app/",
                technologies: [
                    {
                        id: 0,
                        name: "nextjs"
                    },
                    {
                        id: 1,
                        name: "shadcn"
                    },
                    {
                        id: 2,
                        name: "redux toolkit"
                    },
                    {
                        id: 3,
                        name: "tailwindcss"
                    },
                    {
                        id: 4,
                        name: "nodejs"
                    },
                    {
                        id: 5,
                        name: "express"
                    },
                ]
            },
            {
                id: 1,
                img: IMAGES.AITRAVELAGENT_PROJECT,
                heading: "AI Travel Agent",
                privatesource: true,
                paragraph: "A smart and user-friendly AI travel agent website designed to manage trips, bookings, and recommendations. Created to enhance planning and improve the overall travel experience.",
                websiteLink: "https://ai-travel-agent-six.vercel.app/",
                technologies: [
                    {
                        id: 0,
                        name: "nextjs"
                    },
                    {
                        id: 1,
                        name: "shadcn"
                    },
                    {
                        id: 2,
                        name: "redux toolkit"
                    },
                    {
                        id: 3,
                        name: "tailwindcss"
                    },
                    {
                        id: 4,
                        name: "styled-component"
                    },
                ]
            },
            {
                id: 2,
                img: IMAGES.TRYBOOSTING_PROJECT,
                heading: "TRYBOOSTING",
                privatesource: true,
                paragraph: "A seamless and user-friendly gaming marketplace built for buying, selling, and trading in-game items. Made to enhance the gaming experience and simplify trades for players.",
                websiteLink: "https://tryboosting-1.vercel.app/",
                technologies: [
                    {
                        id: 0,
                        name: "nextjs"
                    },
                    {
                        id: 1,
                        name: "shadcn"
                    },
                    {
                        id: 2,
                        name: "redux toolkit"
                    },
                    {
                        id: 3,
                        name: "tailwindcss"
                    },
                    {
                        id: 4,
                        name: "nodejs"
                    },
                    {
                        id: 5,
                        name: "express"
                    },
                ]
            },
            {
                id: 3,
                img: IMAGES.PNGTOTEXT_PROJECT,
                heading: "PNGTOTEXT",
                privatesource: true,
                paragraph: "A simple and user-friendly website for effortlessly converting PNG images to text. Designed to improve efficiency and make text extraction easier.",
                websiteLink: "https://salman7707.github.io/texttopng/",
                technologies: [
                    {
                        id: 0,
                        name: "html"
                    },
                    {
                        id: 1,
                        name: "css"
                    },
                    {
                        id: 2,
                        name: "tailwindcss"
                    },
                    {
                        id: 3,
                        name: "javascript"
                    },
                ]
            }
        ],
        ProjectCard: [
            {
                id: 0,
                img: IMAGES.EDUWIZ_PROJECT,
                heading: "EduWiz",
                privatesource: true,
                paragraph: "A professional and user-friendly website tailored for Schools to Manage their mission, activities, and impact. Designed to enhance engagement and communication with stakeholders.",
                websiteLink: "https://edu-wiz-1.vercel.app/",
                technologies: [
                    {
                        id: 0,
                        name: "nextjs"
                    },
                    {
                        id: 1,
                        name: "shadcn"
                    },
                    {
                        id: 2,
                        name: "redux toolkit"
                    },
                    {
                        id: 3,
                        name: "tailwindcss"
                    },
                    {
                        id: 4,
                        name: "nodejs"
                    },
                    {
                        id: 5,
                        name: "express"
                    },
                ]
            },
            {
                id: 1,
                img: IMAGES.AITRAVELAGENT_PROJECT,
                heading: "AI Travel Agent",
                privatesource: true,
                paragraph: "A smart and user-friendly AI travel agent website designed to manage trips, bookings, and recommendations. Created to enhance planning and improve the overall travel experience.",
                websiteLink: "https://ai-travel-agent-six.vercel.app/",
                technologies: [
                    {
                        id: 0,
                        name: "nextjs"
                    },
                    {
                        id: 1,
                        name: "shadcn"
                    },
                    {
                        id: 2,
                        name: "redux toolkit"
                    },
                    {
                        id: 3,
                        name: "tailwindcss"
                    },
                    {
                        id: 4,
                        name: "styled-component"
                    },
                ]
            },
            {
                id: 2,
                img: IMAGES.TRYBOOSTING_PROJECT,
                heading: "TRYBOOSTING",
                privatesource: true,
                paragraph: "A seamless and user-friendly gaming marketplace built for buying, selling, and trading in-game items. Made to enhance the gaming experience and simplify trades for players.",
                websiteLink: "https://tryboosting-1.vercel.app/",
                technologies: [
                    {
                        id: 0,
                        name: "nextjs"
                    },
                    {
                        id: 1,
                        name: "shadcn"
                    },
                    {
                        id: 2,
                        name: "redux toolkit"
                    },
                    {
                        id: 3,
                        name: "tailwindcss"
                    },
                    {
                        id: 4,
                        name: "nodejs"
                    },
                    {
                        id: 5,
                        name: "express"
                    },
                ]
            },
            {
                id: 3,
                img: IMAGES.PNGTOTEXT_PROJECT,
                heading: "PNGTOTEXT",
                privatesource: true,
                paragraph: "A simple and user-friendly website for effortlessly converting PNG images to text. Designed to improve efficiency and make text extraction easier.",
                websiteLink: "https://salman7707.github.io/texttopng/",
                technologies: [
                    {
                        id: 0,
                        name: "html"
                    },
                    {
                        id: 1,
                        name: "css"
                    },
                    {
                        id: 2,
                        name: "tailwindcss"
                    },
                    {
                        id: 3,
                        name: "javascript"
                    },
                ]
            },
            {
                id: 4,
                img: IMAGES.REALTOR_PROJECT,
                heading: "Realtor",
                privatesource: true,
                paragraph: "A simple and user-friendly real estate website designed to help users effortlessly find and explore properties. Built to enhance efficiency and make the home-buying experience easier.",
                websiteLink: "https://realtor-flax-eight.vercel.app/",
                technologies: [
                    {
                        id: 1,
                        name: "tailwindcss"
                    },
                    {
                        id: 2,
                        name: "javascript"
                    },
                    {
                        id: 3,
                        name: "react"
                    },
                    {
                        id: 4,
                        name: "firebase"
                    },
                ]
            },
        ],
    }
]

export const SkillsCardSection = [
    {
        id: 0,
        title: "TailWindCSS",
        icon: IMAGES.TAILWINDCSS,
    },
    {
        id: 1,
        title: "JavaScript",
        icon: IMAGES.JAVASCRIPT,
    },
    {
        id: 2,
        title: "TypeScript",
        icon: IMAGES.TYPESCRIPT,
    },
    {
        id: 3,
        title: "React",
        icon: IMAGES.REACT
    },
    {
        id: 4,
        title: "Next.js",
        icon: IMAGES.NEXT
    },
    {
        id: 5,
        title: "Redux",
        icon: IMAGES.REDUX
    },
    {
        id: 6,
        title: "Nest.js",
        icon: IMAGES.NEST
    },
]

export const faqData = [
    {
        question: "Which operating system do I use?",
        answer:
            "I primarily use Windows as my operating system, which provides me with the flexibility and tools I need while working in my development environment.",
    },
    {
        question: "What programming language do I mostly use?",
        answer:
            "TypeScript and JavaScript are the programming languages I use most frequently.",
    },
    {
        question: "What code editor do I mostly use?",
        answer:
            "Visual Studio Code (VSCode) is my most used code editor, and here's why: It's free, powerful, customizable, works on multiple platforms, has an integrated terminal, offers intelligent code assistance, and has a thriving community.",
    },
    {
        question: "What is my favorite Web browser?",
        answer:
            "Chrome and Brave are my favorite Web browsers for browsing and development environment.",
    },
    {
        question: "What is my current development environment?",
        answer:
            "BRAND: Dell, PROCESSOR: Intel Core i7, RAM: 16GB, OPERATING SYSTEM: Windows 11, STORAGE CAPACITY: 256GB, STORAGE TYPE: SSD",
    },
];

export const AnyThingWorngLinks = [
    {
        href: `https://github.com/salman7707/Portfolio`,
        text: "Code source of this page",
        icon: CodeIcon,
    },
    {
        href: "https://github.com/salman7707/Portfolio/issues/new?",
        text: "Report issue on GitHub",
        icon: BugIcon,
    },
    {
        href: `mailto:salmanaliofficial7@gmail.com?subject=Report issues https://github.com/salman7707/Portfolio`,
        text: "Report issue by email",
        icon: MailIcon,
    },
    {
        href: `https://github.com/salman7707/Portfolio/settings/dev`,
        text: "Edit this page on GitHub",
        icon: PencilIcon,
    },
    {
        href: "https://github.com/salman7707/Portfolio/fork",
        text: "Fork this repository",
        icon: GitForkIcon,
    },
];

export const footerData = [
    {
        id: 0,
        heading: "What's next?",
        subHeading: "Let's connect",
        paragraph: "If you have any opportunity, suggestion or feedback we would love to hear from you! Please feel free to reach out to us using the contact form or our email address.",
        Icons: [
            {
                id: 0,
                source: LuGithub,
                href: "https://github.com/salman7707"
            },
            {
                id: 3,
                source: MdMailOutline,
                href: ""
            },
        ],
        Links: [
            {
                id: 0,
                href: "/projects",
                text: "Projects",
            },
            {
                id: 1,
                href: "/contact",
                text: "Contact Me",
            },
        ],
        CopyRight: " Copyright © 2025 Salman Dev. All rights reserved.",
    }
]

// export const AboutMeData = [
//     {
//         id: "intro",
//         content: `Abass Ben Cheik, who goes by the name Abass Dev, is a talented full-stack developer with a passion for building exceptional Web and Mobile applications. He was born in Niamey, Niger, on February 2, 1994. He is currently`,
//     },
//     {
//         id: "early-years",
//         content:
//             "At a young age of 15 in 2009, Abass Dev became fascinated with the world of web development. However, he had no idea where to start. It wasn't until he met a friend on Skyrock, a social networking site, in 2011, that he was introduced to the world of blogging and tasked with administering a Wix-created blog. It was this experience that sparked his curiosity and ignited his passion for web development.",
//     },
//     {
//         id: "growth",
//         content:
//             "In 2012, Abass Dev created his first blog on the Blogspot platform, but soon discovered its limitations. Determined to expand his knowledge and capabilities, he began to explore the depths of web development using languages such as HTML, CSS, JavaScript, PHP, SQL, and others.",
//     },
//     {
//         id: "development",
//         content:
//             "With his dedication and hard work, Abass Dev honed his skills and became a self-taught full-stack developer.",
//     },
//     {
//         id: "portfolio",
//         content:
//             "Today, he has an impressive portfolio of work that showcases his expertise in building dynamic, responsive, and visually appealing web applications.",
//     },
//     {
//         id: "skills",
//         content:
//             "In addition to his technical abilities, Abass Dev has a keen eye for design and aesthetics, which allows him to create stunning and functional user interfaces. He is always learning and staying up-to-date with the latest trends and technologies in the ever-evolving field of web development.",
//     },
//     {
//         id: "conclusion",
//         content:
//             "Abass Dev is a true testament to the power of self-education and perseverance. His passion and commitment to his craft have led him to become a respected figure in the web development community, and a source of inspiration for aspiring developers around the world.",
//     },
// ];

export const contactInfo = [
    {
        icon: User,
        label: "Role",
        value: "MERN Stack developer"
    },
    {
        icon: MapPin,
        label: "Location",
        value: "fsd,Pk"
    },
    {
        icon: Mail,
        label: "Email",
        value: "salmanaliofficia7@gmail.com",
        href: "mailto:salmanaliofficial7@gmail.com"
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+3300347125",
        href: "tel:+3300347125"
    }
];