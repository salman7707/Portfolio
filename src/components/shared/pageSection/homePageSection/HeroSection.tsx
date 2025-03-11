"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";
import Link from "next/link";
import { HeroSectionData } from "@/constants";
import Button from "@/components/template/button/Button";
import { useMyContext } from "@/contexts/MyContext";

export default function HeroSection() {
  const { theme } = useMyContext();
  return (
    <div
      className={`xl:h-full relative  ${
        theme === "dark" ? "bg-[#09090B]" : "bg-white"
      }  flex lg:items-center md:items-start justify-center py-11 overflow-x-hidden`}
    >
      {/* Background Circles */}
      <div
        className={`absolute ${
          theme === "dark" ? "opacity-100" : "opacity-0"
        } inset-0 flex items-center justify-center h-full w-full z-0`}
      >
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
      <div
        className={`relative ${
          theme === "dark"
            ? "border-[#27272A]"
            : "border-gray-200 drop-shadow-2xl"
        }  max-w-[1150px] mx-auto border h-auto xl:w-[85%] z-10 lg:w-[89%] md:w-[85%] w-[90%] rounded-xl md:mx-auto m-auto lg:m-auto overflow-hidden`}
      >
        {HeroSectionData.map((data) => (
          <div
            key={data.id}
            className={`relative ${
              theme === "dark" ? "bg-transparent" : "bg-white"
            } z-40 w-full h-full flex md:flex-row flex-col items-start justify-between px-2`}
          >
            {/* First Section */}
            {data.firstSection.map((firstdata) => (
              <div
                key={firstdata.id}
                className="lg:w-[40%] md:w-[45%] w-full h-full flex flex-col md:items-start items-center justify-center  py-10 md:justify-start gap-8 lg:px-10 px-4"
              >
                {/* Avatar */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="relative w-[260px] h-[260px] group"
                >
                  <div
                    className={`absolute w-[250px] h-[250px] blur-sm inset-0 ${
                      theme === "dark"
                        ? "bg-gradient-to-tr from-[#7B61B6]/10 via-violet-500 to-blue-500"
                        : "bg-gradient-to-tr from-black/5 via-violet-500 to-blue-500"
                    }  group-hover:bg-transparent  transition duration-500 rounded-full flex items-center justify-center z-0`}
                  ></div>
                  <div
                    className={`absolute blur-md brightness-75 -rotate-[125deg] inset-0 ${
                      theme === "dark"
                        ? "bg-gradient-to-tr to-[#fefeff] via-violet-500/10 from-blue-500"
                        : "bg-gradient-to-tr to-black via-violet-500/10 from-blue-500"
                    }  transition w-[260px] h-[260px] duration-500 rounded-full group-hover:brightness-[1.75] flex items-center justify-center z-10
                  `}
                  ></div>
                  <div className="relative w-[250px] h-[250px] rounded-full flex items-center justify-center z-20">
                    <Image
                      src={firstdata.Avatar}
                      width={260}
                      height={260}
                      alt="Profile"
                      className="rounded-full object-cover hover:scale-105 transition-all hover:rounded-full duration-150 ease-linear bg-transparent"
                    />
                  </div>
                </motion.div>
                {/* Icons Section */}
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap items-center md:justify-center justify-center lg:gap-4 gap-2 w-[260px]"
                >
                  {firstdata.links.map((linksdata) => (
                    <Link
                      href={linksdata.link || "/"}
                      key={linksdata.id}
                      className={` ${
                        theme === "dark"
                          ? "bg-[#0C0C0F]"
                          : "bg-white drop-shadow-sm hover:bg-[#0C0C0F]"
                      } md:w-12 md:h-12 w-10 h-10 rounded-full flex items-center justify-center group transition-all duration-100 ease-linear`}
                    >
                      <linksdata.ICON
                        className={`${
                          theme === "dark"
                            ? "text-white"
                            : "text-black group-hover:text-white"
                        } md:text-2xl text-lg group-hover:scale-110 transition-all duration-100 ease-linear`}
                      />
                    </Link>
                  ))}
                </motion.div>
              </div>
            ))}

            {/* Second Section */}
            {data.secondSection.map((seconddata) => (
              <div
                key={seconddata.id}
                className="lg:w-[60%] md:w-[55%] h-full md:py-10 flex flex-col md:items-start md:justify-start items-center justify-center gap-4 lg:pl-4 lg:pr-6 pb-4"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 70 }}
                >
                  <h2 className="md:text-3xl text-2xl text-center">
                    <span
                      className={`bg-gradient-to-r ${
                        theme === "dark"
                          ? "bg-gradient-to-r from-white to-violet-500"
                          : "bg-gradient-to-r from-black to-violet-500"
                      } bg-clip-text text-transparent`}
                    >
                      {seconddata.smallHeading}
                    </span>
                  </h2>
                </motion.div>
                <motion.div
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 70 }}
                >
                  <h2 className="lg:text-8xl md:text-6xl text-5xl">
                    <span
                      className={`${
                        theme === "dark"
                          ? "bg-gradient-to-r from-white via-violet-500 to-blue-500 bg-clip-text text-transparent"
                          : "bg-gradient-to-r from-black via-violet-500 to-blue-500 bg-clip-text text-transparent"
                      } `}
                    >
                      {seconddata.heading}
                    </span>
                  </h2>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className=""
                >
                  <p className="text-[#95959E] md:text-xl text-lg pt-4 md:text-left text-center md:px-0 px-4">
                    {seconddata.paragraph}
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-[#95959E] flex items-center justify-center gap-3 pb-11"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse m-auto"></span>
                  {seconddata.points}
                </motion.div>
                <div className="w-full h-full flex lg:flex-row flex-col items-center justify-center gap-6">
                  <motion.div
                    initial={{ x: -130, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
                    className="buttongradient lg:w-[40%] md:w-[60%] w-[75%] h-auto rounded-[25px]"
                  >
                    <Link href={seconddata.downloadbuttonhref || ""}>
                      <Button>Download Resume</Button>
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ x: 130, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
                  >
                    <button
                      className={`border-[#27272A] ${
                        theme === "dark"
                          ? "bg-[#09090B] text-white"
                          : "bg-white text-black font-medium text-sm border-gray-200"
                      } border rounded-[8px] px-4 py-1  flex items-center justify-center gap-2 group text-base `}
                    >
                      More About Me
                      <LuArrowRight className="text-lg group-hover:translate-x-1 font-light transition-all duration-150 ease-linear" />
                    </button>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
