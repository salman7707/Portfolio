import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import IMAGES from "../../../../public/images";
import { MdLockOutline } from "react-icons/md";
import { IoOpenOutline } from "react-icons/io5";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import { LuGithub } from "react-icons/lu";
import Link from "next/link";
import { useMyContext } from "@/contexts/MyContext";

interface projectCard {
  img?: string;
  heading?: string;
  privatesource?: boolean;
  sourceLink?: string;
  paragraph?: string;
  websiteLink?: string;
  technologies?: {
    id?: number;
    name?: string;
  }[];
}

export default function ProjectCard({
  img,
  heading,
  privatesource = false,
  sourceLink,
  paragraph,
  websiteLink,
  technologies,
}: projectCard) {
  const router = useRouter();
  const { theme } = useMyContext();
  return (
    <div
      className={` ${
        theme === "dark" ? "bg-[#09090b]" : "bg-white border border-gray-200"
      } group w-full overflow-hidden rounded-xl h-auto flex flex-col items-center justify-between hover:shadow-current transition-all duration-300 ease-linear`}
    >
      <div className={`w-full h-auto`}>
        <Image
          src={img || IMAGES.SAMPLE}
          width={1200}
          height={1200}
          className="w-full md:h-[240px] h-[250px] rounded-t-xl hover:scale-105 transition-all duration-300 ease-linear"
          alt="Project"
        />
      </div>
      <div className="h-auto pt-14 pb-6 md:px-7 px-4 w-full flex flex-col items-start justify-between gap-y-3">
        <div className="flex items-center justify-between w-full">
          <div>
            <h2
              className={`${
                theme === "dark" ? "text-white" : "text-[#19191C]"
              } text-xl font-semibold`}
            >
              {heading}
            </h2>
          </div>
          <div>
            {privatesource ? (
              <Button
                onClick={() => router.push("https://github.com/salman7707")}
                variant={"cardButton"}
                size={"cardbtn"}
                className={`rounded-[8px] ${
                  theme === "dark"
                    ? "text-white"
                    : "text-black border-gray-200 hover:bg-[#F4F4F5]"
                }`}
              >
                <MdLockOutline />
                Private source
              </Button>
            ) : (
              <Button
                onClick={() =>
                  router.push(sourceLink || "https://github.com/salman7707")
                }
                variant={"cardButton"}
                size={"cardbtn"}
                className="rounded-[8px]"
              >
                <LuGithub />
                Source
              </Button>
            )}
          </div>
        </div>
        <div className="">
          <h2
            className={` text-[#8D8D8D] group-hover:text-[#a1a0a0] text-[17px]`}
          >
            {paragraph}
          </h2>
        </div>
        <Link href={websiteLink || ""}>
          <h2
            className={`text-sm ${
              theme === "dark" ? "text-white" : "text-[#363639]"
            }  flex items-center justify-start hover:text-[#a8a3a3] cursor-pointer`}
          >
            Visit My Website... <IoOpenOutline />
          </h2>
        </Link>
        <div className="flex flex-wrap gap-2 pt-2">
          {technologies?.map((data) => (
            <Badge
              key={data.id}
              variant={"cardColors"}
              className={`${
                theme === "dark"
                  ? "text-white"
                  : "text-gray-700 bg-[#F4F4F5] hover:bg-[#e1e1e2]"
              }`}
            >
              {data.name}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
