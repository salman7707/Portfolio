"use client";

import SkillsCard from "@/components/template/cards/SkillsCard";
import React, { useRef } from "react";
import { skillCard } from "@/constants";
import { useMyContext } from "@/contexts/MyContext";
import { motion, useInView } from "framer-motion";

export default function SkillsSection() {
  const { theme } = useMyContext();
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <div
      id="Skills"
      className={`md:px-12 lg:px-20 xl:px-32 ${
        theme === "dark" ? "bg-[#111827]" : "bg-white"
      } px-4 py-10 flex items-center flex-col justify-center overflow-hidden`}
    >
      <div className="mx-auto lg:w-full md:w-[95%] w-full max-w-[1350px]">
        <motion.h1
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.5 }}
          className={`font-orbitron text-center font-bold ${
            theme === "dark" ? "text-white" : "text-[#19191C]"
          } md:text-5xl text-4xl md:pb-10 my-4`}
        >
          Skills
        </motion.h1>
        <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 xs:gap-10 justify-between mx-auto pt-8 pb-2 lg:px-0 md:px-0 px-1.5 w-[100%] max-w-[1110px]">
          {skillCard.map((data) => (
            <div key={data.id}>
              <SkillsCard
                id={data.id}
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
