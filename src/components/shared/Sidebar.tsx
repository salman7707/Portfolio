"use client";
import { SideBarNavLinks } from "@/constants";
import Link from "next/link";
import React, { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [Hover, setHover] = useState<{
    id: null | number;
    open: boolean;
    value: string;
  }>({ id: null, open: false, value: "" });
  return (
    <div
      className={`bg-transparent  fixed top-0 left-0 px-4 py-2 ${
        sidebarOpen ? "w-10" : "w-[285px] bg-blur"
      }  h-screen z-50 `}
    >
      <div className="flex flex-col gap-y-6 items-center justify-between w-full ">
        <div className="flex items-center justify-between w-full">
          {!sidebarOpen ? <div className="text-3xl">Logo</div> : ""}
          <div
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`hover:bg-[#27272A] md:bg-transparent bg-[#27272A] px-2 py-2 mt-2 rounded-md`}
          >
            <GiHamburgerMenu className="text-[#B4B4B5] text-base" />
          </div>
        </div>
        <div className=" flex flex-col items-center justify-between w-full gap-2 ">
          {SideBarNavLinks.map((data) => (
            <Link
              onMouseEnter={() =>
                setHover({ id: data.id, open: true, value: data.title })
              }
              onMouseLeave={() =>
                setHover({ id: null, open: false, value: "" })
              }
              href={data.url}
              key={data.id}
              className={`flex items-center ${
                data.id === 3 && "mt-5"
              } justify-center w-full rounded-md hover:bg-[#1F2937] ${
                sidebarOpen ? "ml-[25px] pl-2 pr-7 hidden md:flex " : "px-2"
              } py-2`}
            >
              <div className={`${!sidebarOpen ? "w-[14%]" : "w-full"}`}>
                <data.ICON className="text-xl m-0 mb-[2px]" />
              </div>
              <div
                className={`${
                  sidebarOpen ? "hidden" : "flex"
                } w-[86%] flex items-center justify-start text-sm font-semibold `}
              >
                {data.title}
              </div>
              {sidebarOpen && Hover.open && Hover.id === data.id && (
                <div className="absolute left-16 bg-white px-2 py-2 w-28 rounded-md text-gray-700 flex items-center justify-center text-xs font-semibold">
                  <h2>{Hover.value}</h2>
                </div>
              )}
            </Link>
          ))}
        </div>
        <div
          className={`md:flex hidden items-center justify-start w-full`}
        >
          <div className=" hover:bg-[#27272A]  bg-transparent px-2 py-2 rounded-md">
            <BsFillMoonStarsFill />
          </div>
        </div>
      </div>
    </div>
  );
}
