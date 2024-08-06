/*
    - Work component is a functional component.
    - It uses the useState hook to manage the state of the project.
    - The projects array contains the data of the projects.
    - The handleChange function is used to update the project based on the current slide.
    - The Swiper component is used to create a slider for the projects.
    - The WorkSliderBtn component is used to create the buttons for the slider.
*/

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../components/ui/tooltip";
import { Link } from "react-router-dom";
import WorkSliderBtn from "../components/WordSliderBtn";


const projects = [
    {
        num: "01",
        category: "Full Stack",
        title: "ValoInfo",
        description: "A website that provides information about the game Valorant.",
        stack: [{ name: "MERN" }, { name: "JWT" }, { name: "Redux" }],
        image: "/public/Screenshot (325).png",
        live: "https://valo-info-c.vercel.app/",
        github: "https://github.com/rahul-sharma13/ValoInfo---FullStack",
    },
    {
        num: "02",
        category: "full stack",
        title: "Homyz",
        description: "A website for real estate work, selling and renting.",
        stack: [{ name: "React" }, { name: "MongoDB" }, { name: "Node" }],
        image: "/public/Screenshot (326).png",
        live: "https://realestate-bfkg.onrender.com/",
        github: "https://github.com/rahul-sharma13/RealEstate",
    },
    {
        num: "03",
        category: "frontend",
        title: "DeltechMun",
        description: "College society website worked in a team of 4.",
        stack: [{ name: "React" }, { name: "Framer Motion" }, { name: "Tailwind" }],
        image: "/public/Screenshot (327).png",
        live: "https://www.deltechmun.in/",
        github: "https://github.com/rahul-sharma13/deltechv2",
    },
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleChange = (swiper) => {
        // get the current slide
        const currentSlide = swiper.activeIndex;
        // update project based on current slide
        setProject(projects[currentSlide]);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline ">
                                {project.num}
                            </div>

                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-portColor transition-all duration-500 capitalize">
                                {project.category}
                            </h2>

                            <p className="text-white/60">{project.description}</p>

                            <ul className="flex gap-4">
                                {project.stack?.map((stack, index) => (
                                    <li key={index} className="text-xl text-portColor">
                                        {stack.name}
                                        {index !== project.stack.length - 1 && (
                                            <span className="text-white/60">,</span>
                                        )}
                                    </li>
                                ))}
                            </ul>

                            <div className="border border-white/20"></div>

                            <div className="flex items-center gap-4">
                                <Link to={project.live ?? ""}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-portColor " />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                                <Link to={project.github ?? ""}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-portColor " />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github Repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* slides */}
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                            {/* img  */}
                                            <div className="relative w-full h-full">
                                                <img
                                                    src={project.image ?? ""}
                                                    alt="project-img"
                                                    fill
                                                    className="object-cover w-full h-full"
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                            {/* buttons */}
                            <WorkSliderBtn
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-portColor hover:bg-portColor-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Work;
