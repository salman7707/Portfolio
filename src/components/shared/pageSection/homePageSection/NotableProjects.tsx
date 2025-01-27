import SeeMoreButton from "@/components/template/button/seeMoreButton";
import ProjectCard from "@/components/template/cards/ProjectCard";
import DynamicIconCloud from "@/components/ui/icon-cloud";
import React from "react";

export default function NotableProjects() {
  const slugs = [
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
  ];
  return (
    <div className="w-full bg-[#111827] h-full  py-10">
      <div className="">
        <h2 className="text-5xl font-semibold text-center text-white">
          Notable Projects
        </h2>
      </div>
      <div className="m-auto flex items-center justify-center">
        <DynamicIconCloud slugs={slugs} />
      </div>
      <div className=" flex md:flex-row  flex-col lg:gap-8 gap-5 xs:gap-8 justify-between max-w-[1040px] mx-auto pt-8 pb-2 lg:px-0 md:px-12 px-4">
        <ProjectCard />
        <ProjectCard />
      </div>
      <div className="flex pt-10 justify-start max-w-[1040px] mx-auto">
        <SeeMoreButton text="See more projects..." goTo="/projects" />
      </div>
    </div>
  );
}
