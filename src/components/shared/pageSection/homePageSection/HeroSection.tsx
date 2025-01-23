"use client";
import Image from "next/image";
import React from "react";
import IMAGES from "../../../../../public/images";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative border-[#27272A] border h-[85%] w-[85%] rounded-xl m-auto">
      <div className="absolute inset-0 flex items-center justify-center h-full w-full z-0">
        <motion.div
          initial={{ x: 0, y: 0 }}
          animate={{ y: [0, -40, -60, -40, 0], x: [0, 20, 0] }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity }}
          className="bg-[#1C1C1E] blur-md w-[380px] h-[380px] brightness-90 rounded-full absolute left-52 bottom-10 z-20 "
        ></motion.div>
        <motion.div
          initial={{ x: 0, y: 0 }}
          animate={{ y: [0, -55, 0, 30, 0], x: [0, -20, 0] }}
          transition={{ duration: 7, ease: "linear", repeat: Infinity }}
          className="bg-[#0F141F] blur-md brightness-90 w-[380px] h-[380px] rounded-full absolute left-[35%] top-14 z-10"
        ></motion.div>
        <motion.div
          initial={{ x: 0, y: 0 }}
          animate={{ y: [0, -30, 0], x: [0, -30, 0] }}
          transition={{ duration: 8, ease: "linear", repeat: Infinity }}
          className="bg-[#14101D] blur-md brightness-90 w-[380px] h-[380px] rounded-full absolute right-[20%] bottom-0"
        ></motion.div>
      </div>
      <div className="relative z-40 w-full h-full">
        <div className="w-[50%] h-full flex items-start py-10 justify-start px-10">
          <div className="relative w-[260px] h-[260px] group">
            <div className="absolute blur-sm inset-0 bg-gradient-to-tr group-hover:bg-transparent from-[#7B61B6]/10 via-violet-500 to-blue-500 transition duration-500 rounded-full group-hover:brightness-200 flex items-center justify-center"></div>
            <div className="relative w-full h-full rounded-full flex items-center justify-center">
              <Image
                src={IMAGES.PROFILE}
                width={240}
                height={240}
                alt="Profile"
                className=" hover:scale-105 transition-all hover:rounded-full  duration-150 ease-linear bg-transparent"
              />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
