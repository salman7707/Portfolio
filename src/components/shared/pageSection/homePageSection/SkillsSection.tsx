"use client";

import SkillsCard from "@/components/template/cards/SkillsCard";
import React from "react";
import { skillCard } from "@/constants";

export default function SkillsSection() {
  return (
    <div
      id="Skills"
      className=" md:px-12 lg:px-20 xl:px-32 bg-[#111827]  text-black px-4 dark:text-white py-10 flex items-center flex-col justify-center "
    >
      <div className="mx-auto lg:w-full md:w-[95%] w-full max-w-[1350px]">
        <h1
          className={`font-orbitron text-center font-bold  text-white text-5xl pb-10 my-4`}
        >
          Skills
        </h1>
        <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 xs:gap-10 justify-between mx-auto pt-8 pb-2 lg:px-0 md:px-0 px-1.5 w-[100%] max-w-[1110px]">
          {skillCard.map((data) => (
            <div key={data.id}>
              <SkillsCard
                title={data.title}
                desc={data.desc}
                icon={data.icon.source}
                bgcolor={data.icon.bg}
                textcolor={data.icon.color}
                toolIcons={data.toolIcons}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
