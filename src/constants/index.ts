import { LuBookA, LuContact, LuGithub, LuHistory, LuLinkedin } from "react-icons/lu";
import IMAGES from "../../public/images";
import { TbBrandTwitter } from "react-icons/tb";
import { FiFacebook } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { BiBullseye } from "react-icons/bi";
import { IoCodeSlash } from "react-icons/io5";
import { FaRegFolder } from "react-icons/fa";
import {
    FaAppStore,
    FaChrome,
    FaFigma,
    FaGitAlt,
    FaInternetExplorer,
    FaJava,
    FaPaintBrush,
    FaReact,
    FaServer,
} from "react-icons/fa";
import { IoAnalyticsOutline } from "react-icons/io5";
import { GiPadlock } from "react-icons/gi";
import { BsDatabaseAdd, BsWordpress } from "react-icons/bs";
import { FcLinux, FcSmartphoneTablet } from "react-icons/fc";
import {
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiAndroidstudio,
    SiTorbrowser,
} from "react-icons/si";

import { TbBrandReactNative, TbBrandVscode } from "react-icons/tb";
import { BugIcon, CodeIcon, GitForkIcon, Mail, MailIcon, MapPin, PencilIcon, Phone, User } from "lucide-react";
import { IconType } from "react-icons/lib";


export const HeroSectionData = [
    {
        id: 0,
        firstSection: [
            {
                id: 0,
                Avatar: IMAGES.PROFILE,
                links: [
                    { id: 0, ICON: LuGithub },
                    { id: 1, ICON: LuLinkedin },
                    { id: 2, ICON: TbBrandTwitter },
                    { id: 3, ICON: FiFacebook },
                    { id: 4, ICON: MdMailOutline },
                ],
            }
        ],
        secondSection: [
            {
                id: 0,
                smallHeading: "Hello World, I am",
                heading: "Abass Dev",
                paragraph: "I am a passionate web and mobile app developer with over 6 years of experience in programming and internet technologies. In my free time, I enjoy sharing my experiences through my blog and contributing to the open-source community. I am the creator of the NigaPHP framework and the maintainer of @open-react-hub.",
                points: "Available for new projects",
                downloadbuttonhref: "/",
                moreAboutMeherf: "/"
            }
        ]

    }
]

export const SideBarNavLinks = [
    {
        id: 0,
        ICON: FaRegFolder,
        title: "Projects",
        url: "/projects",
    },
    {
        id: 1,
        ICON: IoCodeSlash,
        title: "Web Apps",
        url: "/",
    },
    {
        id: 2,
        ICON: LuHistory,
        title: "My Story",
        url: "/my-story",
    },
    {
        id: 3,
        ICON: BiBullseye,
        title: "Open React Hub",
        url: "/",
    },
    {
        id: 4,
        ICON: LuBookA,
        title: "Blog",
        url: "/",
    },
    {
        id: 5,
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
        projectCard: [
            {
                id: 0,
                img: IMAGES.EDUWIZ,
                heading: "EduWiz Website",
                privatesource: true,
                paragraph: "A professional and user-friendly website tailored for Schools to Manage their mission, activities, and impact. Designed to enhance engagement and communication with stakeholders.",
                websiteLink: "/",
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
                ]
            }
        ]
    }
]

interface skillCardTypes {
    id: number;
    title: string;
    desc: string;
    icon: {
        source: IconType;
        color: string;
        bg: string;
    };
    toolIcons: {
        id: number;
        name: string;
        source: IconType;
        color: string;
    }[];
}

export const skillCard: skillCardTypes[] = [
    {
        id: 0,
        title: "Web Development",
        desc: "I specialize in providing functional web services that include custom website development, WordPress development, e-commerce solutions, and more.",
        icon: {
            source: FaInternetExplorer,
            color: "text-sky-600",
            bg: "bg-sky-200",
        },
        toolIcons: [
            {
                id: 0,
                name: "Wordpress",
                source: BsWordpress,
                color: "text-sky-800",
            },
            {
                id: 1,
                name: "Git",
                source: FaGitAlt,
                color: "text-gray-900",
            },
            {
                id: 2,
                name: "React",
                source: FaReact,
                color: "text-sky-700",
            },
            {
                id: 3,
                name: "Chrome",
                source: FaChrome,
                color: "text-green-700",
            },
            {
                id: 4,
                name: "VSCode",
                source: TbBrandVscode,
                color: "text-sky-800",
            },
        ],
    },
    {
        id: 1,
        title: "SEO and security",
        desc: "I offer top-notch solutions in both software security and SEO practices that can help boost the quantity and quality of traffic to your website.",
        icon: {
            source: GiPadlock,
            color: "text-red-600",
            bg: "bg-red-200",
        },
        toolIcons: [
            {
                id: 0,
                name: "Database",
                source: BsDatabaseAdd,
                color: "text-red-600",
            },
            {
                id: 1,
                name: "Analytics",
                source: IoAnalyticsOutline,
                color: "text-yellow-600",
            },
            {
                id: 2,
                name: "Linux",
                source: FcLinux,
                color: "text-sky-700",
            },
            {
                id: 3,
                name: "Server",
                source: FaServer,
                color: "text-gray-700",
            },
            {
                id: 4,
                name: "Tor Browser",
                source: SiTorbrowser,
                color: "text-pink-800",
            },
        ],
    },
    {
        id: 2,
        title: "Web Design",
        desc: "My web design skill include creating stunning, intuitive websites that effectively represent your brand and corporate identity through exceptional UI/UX design.",
        icon: {
            source: FaPaintBrush,
            color: "text-gray-600",
            bg: "bg-gray-200",
        },
        toolIcons: [
            {
                id: 0,
                name: "Adobe Illustrator",
                source: SiAdobeillustrator,
                color: "text-yellow-600",
            },
            {
                id: 1,
                name: "WordPress",
                source: BsWordpress,
                color: "text-sky-800",
            },
            {
                id: 2,
                name: "Figma",
                source: FaFigma,
                color: "text-orange-800",
            },
            {
                id: 3,
                name: "Photoshop",
                source: SiAdobephotoshop,
                color: "text-sky-400",
            },
        ],
    },
    {
        id: 3,
        title: "Mobile App",
        desc: "I create beautiful and functional apps for iOS and Android using React Native. With my expertise in this framework, I can bring your app idea to life and deliver top-notch results.",
        icon: {
            source: FcSmartphoneTablet,
            color: "text-green-600",
            bg: "bg-green-200",
        },
        toolIcons: [
            {
                id: 0,
                name: "Android Studio",
                source: SiAndroidstudio,
                color: "text-sky-800",
            },
            {
                id: 1,
                name: "App Store",
                source: FaAppStore,
                color: "text-orange-700",
            },
            {
                id: 2,
                name: "Java",
                source: FaJava,
                color: "text-yellow-900",
            },
            {
                id: 3,
                name: "React Native",
                source: TbBrandReactNative,
                color: "text-green-700",
            },
        ],
    },
];

export const faqData = [
    {
        question: "Which operating system do I use?",
        answer:
            "I primarily use WSL, which stands for Windows Subsystem for Linux, with Kali Linux as my operating system. WSL allows me to run a Linux distribution alongside my Windows environment, providing me with the flexibility and tools of Linux while still using Windows as the host operating system.",
    },
    {
        question: "What programming language do I mostly use?",
        answer:
            "PHP and JavaScript are the programming languages I use most frequently.",
    },
    {
        question: "What code editor do I mostly use?",
        answer:
            "Visual Studio Code (VSCode) is my most used code editor, and here's why: It's free, powerful, customizable, works on multiple platforms, has an integrated terminal, offers intelligent code assistance, and has a thriving community.",
    },
    {
        question: "What is my favorite Web browser?",
        answer:
            "Tor and Chrome are my favorite Web browsers for browsing and development environment.",
    },
    {
        question: "What is my current development environment?",
        answer:
            "BRAND: Dell, PROCESSOR: Intel Core i7, RAM: 16GB, OPERATING SYSTEM: Windows 11, STORAGE CAPACITY: 256GB, STORAGE TYPE: SSD",
    },
];

export const AnyThingWorngLinks = [
    {
        href: `https://github.com/abass-dev/abassdev.com/blob/dev/`,
        text: "Code source of this page",
        icon: CodeIcon,
    },
    {
        href: "https://github.com/abass-dev/abassdev.com/issues/new?",
        text: "Report issue on GitHub",
        icon: BugIcon,
    },
    {
        href: `mailto:abass@abassdev.com?subject=Report issues https://github.com/abass-dev/abassdev.com/blob/dev/`,
        text: "Report issue by email",
        icon: MailIcon,
    },
    {
        href: `https://github.com/abass-dev/abassdev.com/edit/dev/`,
        text: "Edit this page on GitHub",
        icon: PencilIcon,
    },
    {
        href: "https://github.com/abass-dev/abassdev.com/fork",
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
                href: "https://github.com/abass-dev"
            },
            {
                id: 1,
                source: TbBrandTwitter,
                href: "https://twitter.com/abass_dev"
            },
            {
                id: 2,
                source: FiFacebook,
                href: "https://m.facebook.com/abassthedev"
            },
            {
                id: 3,
                source: MdMailOutline,
                href: "https://m.facebook.com/abassthedev"
            },
        ],
        Links: [
            {
                id: 0,
                href: "https://apps.abassdev.com",
                text: "Web Apps",
            },
            {
                id: 1,
                href: "https://abassdev.com/blog",
                text: "Blog",
            },
            {
                id: 2,
                href: "/my-story/",
                text: "About Me",
            },
            {
                id: 3,
                href: "/contact/",
                text: "Contact Me",
            },
            {
                id: 4,
                href: "/privacy-policy",
                text: "Privacy Policy",
            },
            {
                id: 5,
                href: "/copyright/",
                text: "Copyright",
            },
        ],
        CopyRight: " Copyright © 2021 - 2024 Abass Dev. All rights reserved.",
    }
]

export const AboutMeData = [
    {
        id: "intro",
        content: `Abass Ben Cheik, who goes by the name Abass Dev, is a talented full-stack developer with a passion for building exceptional Web and Mobile applications. He was born in Niamey, Niger, on February 2, 1994. He is currently`,
    },
    {
        id: "early-years",
        content:
            "At a young age of 15 in 2009, Abass Dev became fascinated with the world of web development. However, he had no idea where to start. It wasn't until he met a friend on Skyrock, a social networking site, in 2011, that he was introduced to the world of blogging and tasked with administering a Wix-created blog. It was this experience that sparked his curiosity and ignited his passion for web development.",
    },
    {
        id: "growth",
        content:
            "In 2012, Abass Dev created his first blog on the Blogspot platform, but soon discovered its limitations. Determined to expand his knowledge and capabilities, he began to explore the depths of web development using languages such as HTML, CSS, JavaScript, PHP, SQL, and others.",
    },
    {
        id: "development",
        content:
            "With his dedication and hard work, Abass Dev honed his skills and became a self-taught full-stack developer.",
    },
    {
        id: "portfolio",
        content:
            "Today, he has an impressive portfolio of work that showcases his expertise in building dynamic, responsive, and visually appealing web applications.",
    },
    {
        id: "skills",
        content:
            "In addition to his technical abilities, Abass Dev has a keen eye for design and aesthetics, which allows him to create stunning and functional user interfaces. He is always learning and staying up-to-date with the latest trends and technologies in the ever-evolving field of web development.",
    },
    {
        id: "conclusion",
        content:
            "Abass Dev is a true testament to the power of self-education and perseverance. His passion and commitment to his craft have led him to become a respected figure in the web development community, and a source of inspiration for aspiring developers around the world.",
    },
];

export const contactInfo = [
    {
        icon: User,
        label: "Role",
        value: "Web and mobile app developer at self-employed"
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Niamey, Niger"
    },
    {
        icon: Mail,
        label: "Email",
        value: "abass@abassdev.com",
        href: "mailto:abass@abassdev.com"
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+233 59 820 8469",
        href: "tel:+233598208469"
    }
];