"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";
import Link from "next/link";
import { HeroSectionData } from "@/constants";
import Button from "@/components/template/button/Button";

export default function HeroSection() {
  return (
    <div className="xl:h-full  relative max-w-[1350px] mx-auto bg-[#09090B] flex lg:items-center md:items-start justify-center py-11 overflow-x-hidden">
      {/* Background Circles */}
      <div className="absolute inset-0 flex items-center justify-center h-full w-full z-0">
        <motion.div
          initial={{ x: 0, y: 0 }}
          animate={{ y: [0, -20, -50, -40, 0], x: [0, 20, 0] }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity }}
          className="bg-[#1C1C1E] blur-lg w-[380px] h-[380px] brightness-90 rounded-full absolute left-52 bottom-10 z-20 "
        ></motion.div>
        <motion.div
          initial={{ x: 0, y: 0 }}
          animate={{ y: [0, -55, 0, 30, 0], x: [0, -40, 20, 0] }}
          transition={{ duration: 7, ease: "linear", repeat: Infinity }}
          className="bg-[#0F141F] blur-lg brightness-90 w-[380px] h-[380px] rounded-full absolute left-[35%] top-14 z-10"
        ></motion.div>
        <motion.div
          initial={{ x: 0, y: 0 }}
          animate={{ y: [0, -30, 0], x: [0, -30, 0] }}
          transition={{ duration: 8, ease: "linear", repeat: Infinity }}
          className="bg-[#14101D] blur-lg brightness-90 w-[380px] h-[380px] rounded-full absolute right-[20%] bottom-0"
        ></motion.div>
      </div>
      {/* Front on the background circles */}
      <div className="relative border-[#27272A] max-w-[1150px] mx-auto border h-auto xl:w-[85%] z-10 lg:w-[89%] md:w-[85%] w-[90%] rounded-xl md:mx-auto m-auto lg:m-auto overflow-hidden">
        {HeroSectionData.map((data) => (
          <div
            key={data.id}
            className="relative z-40 w-full h-full flex md:flex-row flex-col items-start justify-between px-2"
          >
            {/* First Section */}
            {data.firstSection.map((firstdata) => (
              <div
                key={firstdata.id}
                className="lg:w-[40%] md:w-[45%] w-full h-full flex flex-col md:items-start items-center justify-center  py-10 md:justify-start gap-8 lg:px-10 px-4"
              >
                {/* Avatar */}
                <div className="relative w-[260px] h-[260px] group">
                  <div className="absolute w-[250px] h-[250px] blur-sm inset-0 bg-gradient-to-tr group-hover:bg-transparent from-[#7B61B6]/10 via-violet-500 to-blue-500 transition duration-500 rounded-full flex items-center justify-center z-0"></div>
                  <div className="absolute blur-md brightness-75 -rotate-[125deg] inset-0 bg-gradient-to-tr to-[#fefeff] via-violet-500/10 from-blue-500 transition w-[260px] h-[260px] duration-500 rounded-full group-hover:brightness-[1.75] flex items-center justify-center z-10"></div>
                  <div className="relative w-full h-full rounded-full flex items-center justify-center z-20">
                    <Image
                      src={firstdata.Avatar}
                      width={260}
                      height={260}
                      alt="Profile"
                      className=" hover:scale-105 transition-all hover:rounded-full  duration-150 ease-linear bg-transparent"
                    />
                  </div>
                </div>
                {/* Icons Section */}
                <div className="flex flex-wrap items-center md:justify-start justify-center lg:gap-4 gap-2 w-full">
                  {firstdata.links.map((linksdata) => (
                    <Link
                      href={"/"}
                      key={linksdata.id}
                      className="bg-[#0C0C0F] md:w-12 md:h-12 w-10 h-10 rounded-full flex items-center justify-center group"
                    >
                      <linksdata.ICON className="text-white md:text-2xl text-lg group-hover:scale-110 transition-all duration-200 ease-linear" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Second Section */}
            {data.secondSection.map((seconddata) => (
              <div
                key={seconddata.id}
                className="lg:w-[60%] md:w-[55%] h-full md:py-10 flex flex-col md:items-start md:justify-start items-center justify-center gap-4 lg:pl-4 lg:pr-6 pb-4"
              >
                <div>
                  <h2 className="md:text-3xl text-2xl text-center">
                    <span
                      className={`bg-gradient-to-r from-white to-violet-500 bg-clip-text text-transparent`}
                    >
                      {seconddata.smallHeading}
                    </span>
                  </h2>
                </div>
                <div>
                  <h2 className="lg:text-8xl md:text-6xl text-5xl">
                    <span className="bg-gradient-to-r from-white via-violet-500 to-blue-500 bg-clip-text text-transparent">
                      {seconddata.heading}
                    </span>
                  </h2>
                </div>
                <div className="">
                  <p className="text-[#95959E] md:text-xl text-lg pt-4 md:text-left text-center md:px-0 px-4">
                    {seconddata.paragraph}
                  </p>
                </div>
                <div className="text-[#95959E] flex items-center justify-center gap-3 pb-11">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse m-auto"></span>
                  {seconddata.points}
                </div>
                <div className="w-full h-full flex lg:flex-row flex-col items-center justify-center gap-6">
                  <div className="buttongradient lg:w-[40%] md:w-[60%] w-[75%] h-auto rounded-[25px]">
                    <Button>Download Resume</Button>
                  </div>
                  <div>
                    <button className="border-[#27272A] border rounded-[8px] px-4 py-1 bg-[#09090B] flex items-center justify-center gap-2 group text-base text-white">
                      More About Me
                      <LuArrowRight className="text-lg group-hover:translate-x-1 font-light transition-all duration-150 ease-linear" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
