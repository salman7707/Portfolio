"use client"
import React, { useRef } from "react";
import { SkillsCardSection } from "@/constants";
import { useMyContext } from "@/contexts/MyContext";
import { motion, useInView } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function ExpertiseSection() {
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
          Expertise
        </motion.h1>
        
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            425:{
              slidesPerView:2,
              spaceBetween:20,
            },
            768:{
              slidesPerView:3,
              spaceBetween:30,
            },
            1024: {
              slidesPerView:4,
              spaceBetween:30,
            },
            1280:{
              slidesPerView:6,
              spaceBetween:40,
            },
          }}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {SkillsCardSection.map((data) => (
            <SwiperSlide key={data.id}>
              <div
                className={`border ${theme === "dark"? "bg-gray-900 border-slate-800 hover:bg-gray-950" 
                : "bg-white hover:bg-gray-100 border-gray-300" } group transition-all duration-500 
                ease-linear py-7 xs-375:px-10 px-7 rounded-2xl flex flex-col items-center gap-2`}
              >
                <div>
                  <Image
                    src={data.icon}
                    alt={data.title}
                    width={100}
                    height={100}
                    className={`object-cover h-[4rem] group-hover:scale-105 w-[4rem] rounded-full border border-white bg-white transition-all duration-300 ease-linear`}
                  />
                </div>
                <div>
                  <h2 className={`text-lg font-semibold ${theme === "dark"?"text-white":"text-gray-900"}`}>
                    {data.title}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
      </div>
    </div>
  );
}
