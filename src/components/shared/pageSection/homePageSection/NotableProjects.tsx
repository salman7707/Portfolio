"use client";
import SeeMoreButton from "@/components/template/button/seeMoreButton";
import ProjectCard from "@/components/template/cards/ProjectCard";
import React from "react";
import dynamic from "next/dynamic";
import { NotableProjectsData } from "@/constants";

const DynamicIconCloud = dynamic(() => import("@/components/ui/icon-cloud"), {
  ssr: false,
});
export default function NotableProjects() {
  return (
    <div className="w-full bg-[#111827] h-full py-10 px-2.5">
      <div className="">
        <h2 className="text-5xl font-semibold text-center text-white">
          Notable Projects
        </h2>
      </div>
      {NotableProjectsData.map((data) => (
        <div key={data.id} className="max-w-[1350px] mx-auto">
          <div className="m-auto flex items-center justify-center py-4">
            <DynamicIconCloud slugs={data.icons} />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 xs:gap-10 justify-between mx-auto pt-8 pb-2 lg:px-0 md:px-0 px-1.5 xl:w-[82%] md:w-[86%] w-[100%]">
            {data.projectCard.map((data) => (
              <div key={data.id}>
                <ProjectCard
                  heading={data.heading}
                  img={data.img}
                  paragraph={data.paragraph}
                  privatesource
                  websiteLink={data.websiteLink}
                  technologies={data.technologies}
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="flex pt-10 justify-start max-w-[1100px] lg:px-0 md:px-0 px-1.5 2xl:w-[75%] xl:w-[82%] md:w-[86%] w-[100%] mx-auto">
        <SeeMoreButton text="See more projects..." goTo="/projects" />
      </div>
    </div>
  );
}
