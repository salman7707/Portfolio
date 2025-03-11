"use client";
import SeeMoreButton from "@/components/template/button/seeMoreButton";
import ProjectCard from "@/components/template/cards/ProjectCard";
import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { NotableProjectsData } from "@/constants";
import { useMyContext } from "@/contexts/MyContext";
import { motion, useInView } from "framer-motion";

const DynamicIconCloud = dynamic(() => import("@/components/ui/icon-cloud"), {
  ssr: false,
});

interface NotableProjectsSectionTypes {
  projectsPage?: boolean;
}
export default function NotableProjects({
  projectsPage = false,
}: NotableProjectsSectionTypes) {
  const { theme } = useMyContext();
  const headingRef = useRef(null);
  const InHeadingView = useInView(headingRef);
  return (
    <div
      className={`w-full ${
        theme === "dark" ? "bg-[#111827]" : "bg-white"
      } h-full py-10 px-2.5`}
    >
      <motion.div
        ref={headingRef}
        initial={{ opacity: 0, y: -50 }}
        animate={InHeadingView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 50 }}
        className=""
      >
        <h2
          className={`md:text-5xl text-4xl font-semibold text-center ${
            theme === "dark" ? "text-white" : "text-[#172554]"
          }`}
        >
          Notable Projects
        </h2>
      </motion.div>
      {NotableProjectsData.map((data) => (
        <div key={data.id} className="max-w-[1350px] mx-auto overflow-hidden">
          <div className="m-auto flex items-center justify-center py-4">
            <DynamicIconCloud slugs={data.icons} />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 xs:gap-10 justify-between mx-auto pt-8 pb-2 lg:px-0 md:px-0 px-1.5 xl:w-[82%] md:w-[86%] w-[100%] h-full">
            {projectsPage
              ? data.ProjectCard.map((projectData) => (
                  <div key={projectData.id}>
                    <ProjectCard
                      id={projectData.id}
                      heading={projectData.heading}
                      img={projectData.img}
                      paragraph={projectData.paragraph}
                      privatesource
                      websiteLink={projectData.websiteLink}
                      technologies={projectData.technologies}
                    />
                  </div>
                ))
              : data.homeProjectCard.map((homeData) => (
                  <div key={homeData.id}>
                    <ProjectCard
                      id={homeData.id}
                      heading={homeData.heading}
                      img={homeData.img}
                      paragraph={homeData.paragraph}
                      privatesource
                      websiteLink={homeData.websiteLink}
                      technologies={homeData.technologies}
                    />
                  </div>
                ))}
          </div>
        </div>
      ))}
      {!projectsPage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={`flex pt-10 justify-start max-w-[1100px] lg:px-0 md:px-0 px-1.5 2xl:w-[75%] xl:w-[82%] md:w-[86%] w-[100%] mx-auto`}
        >
          <SeeMoreButton text="See more projects..." goTo="/projects" />
        </motion.div>
      )}
    </div>
  );
}
