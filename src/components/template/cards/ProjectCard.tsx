import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import IMAGES from "../../../../public/images";
import { MdLockOutline } from "react-icons/md";
import { IoOpenOutline } from "react-icons/io5";
import { Badge } from "@/components/ui/badge";

export default function ProjectCard() {
  return (
    <div className="bg-[#09090b] group w-full overflow-hidden rounded-xl h-auto flex flex-col items-center justify-between hover:shadow-current transition-all duration-300 ease-linear">
      <div className={`w-full h-auto`}>
        <Image
          src={IMAGES.SAMPLE}
          width={700}
          height={700}
          className="w-full md:h-[240px] rounded-t-xl hover:scale-105 transition-all duration-300 ease-linear"
          alt="Project"
        />
      </div>
      <div className="h-auto pt-14 pb-6 md:px-7 px-4 w-full flex flex-col items-start justify-between gap-y-3">
        <div className="flex items-center justify-between w-full">
          <div>
            <h2 className="text-white text-xl font-semibold">ONG Website</h2>
          </div>
          <div>
            <Button
              variant={"cardButton"}
              size={"cardbtn"}
              className="rounded-[8px]"
            >
              <MdLockOutline />
              Private source
            </Button>
          </div>
        </div>
        <div className="">
          <h2 className="text-[#8D8D8D] group-hover:text-[#a1a0a0] text-[17px] ">
            A professional and user-friendly website tailored for NGOs to
            showcase their mission, activities, and impact. Designed to enhance
            engagement and communication with stakeholders.
          </h2>
        </div>
        <div>
          <h2 className="text-sm text-white flex items-center justify-start hover:text-[#a8a3a3] cursor-pointer">
            Visit My Website... <IoOpenOutline />
          </h2>
        </div>
        <div className="flex flex-wrap gap-2 pt-2">
          <Badge variant={"cardColors"}>nextjs</Badge>
          <Badge variant={"cardColors"}>i18n</Badge>
          <Badge variant={"cardColors"}>reactjs</Badge>
          <Badge variant={"cardColors"}>tailwindcss</Badge>
        </div>
      </div>
    </div>
  );
}
