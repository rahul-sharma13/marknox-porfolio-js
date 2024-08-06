/*
    - The about object contains the information about the developer like name, phone, email, etc.
    - The skills object contains the information about the skills of the developer.
    - The Leetcode component is used to display the leetcode problems solved by the developer.
    - The About component is used to display the information about the developer.
    - The motion.div component is used to animate the About component.
    - The TooltipProvider component is used to provide the tooltip for the skills.
*/

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../components/ui/tooltip";
import { motion } from "framer-motion";
import Leetcode from "../components/Leetcode";

// about data
const about = {
    title: "About me",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Rahul Sharma",
        },
        {
            fieldName: "Phone",
            fieldValue: "(+91) 7404177669",
        },
        {
            fieldName: "Experience",
            fieldValue: "2 years",
        },
        {
            fieldName: "Email",
            fieldValue: "rahulharit13@gmail.com",
        },
        {
            fieldName: "College",
            fieldValue: "Delhi Technological University",
        },
        {
            fieldName: "Degree",
            fieldValue: "Bachelor of Technology(Engineering Physics)",
        },
    ],
};

// skills
const skills = {
    title: "My Skills",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html5",
        },
        {
            icon: <FaCss3 />,
            name: "Css",
        },
        {
            icon: <FaJs />,
            name: "Javascript",
        },
        {
            icon: <FaNodeJs />,
            name: "NodeJs",
        },
        {
            icon: <FaReact />,
            name: "ReactJs",
        },
        {
            icon: <FaFigma />,
            name: "Figma",
        },
        {
            icon: <SiTailwindcss />,
            name: "TailwindCSS",
        },
        {
            icon: <SiNextdotjs />,
            name: "NextJs",
        },
    ],
};

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="about"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="about">About me</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="leetcode">Leetcode</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-portColor transition-all duration-300">
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* about */}
                        <TabsContent
                            value="about"
                            className="w-full text-center xl:text-left"
                        >
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 mt-3">
                                    {about.info.map((info, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="flex items-center justify-center xl:justify-start gap-4"
                                            >
                                                <span className="text-white/60">{info.fieldName}</span>
                                                <span className="text-lg">{info.fieldValue}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* leetcode */}
                        <TabsContent value="leetcode" className="w-full text-center xl:text-left">
                            <Leetcode />
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default About;
