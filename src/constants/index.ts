import { LuBookA, LuContact, LuGithub, LuHistory, LuLinkedin } from "react-icons/lu";
import IMAGES from "../../public/images";
import { TbBrandTwitter } from "react-icons/tb";
import { FiFacebook } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { BiBullseye } from "react-icons/bi";
import { IoCodeSlash } from "react-icons/io5";
import { FaRegFolder } from "react-icons/fa";

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
        url: "/",
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
        url: "/",
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
        url: "/",
    },
]