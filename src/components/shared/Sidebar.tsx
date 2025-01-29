"use client";
import { SideBarNavLinks } from "@/constants";
import { useMyContext } from "@/contexts/MyContext";
import Link from "next/link";
import React, { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuSunDim } from "react-icons/lu";

export default function Sidebar() {
  const { theme, setTheme } = useMyContext();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [Hover, setHover] = useState<{
    id: null | number;
    open: boolean;
    value: string;
  }>({ id: null, open: false, value: "" });
  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div
      className={`bg-transparent fixed top-0 left-0 px-4 py-2 ${
        sidebarOpen ? "w-10" : "w-[285px] bg-blur"
      }  h-screen z-50 `}
    >
      <div className="flex flex-col gap-y-6 items-center justify-between w-full ">
        <div className="flex items-center justify-between w-full">
          {!sidebarOpen ? <div className="text-3xl text-white">Logo</div> : ""}
          <div
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={` ${
              theme === "dark"
                ? "hover:bg-[#27272A] bg-[#27272A]"
                : "hover:bg-[#F4F4F5] bg-transparent"
            } md:bg-transparent  px-2 py-2 mt-2 rounded-[8px]`}
          >
            <GiHamburgerMenu
              className={`${
                theme === "dark" ? "text-[#B4B4B5]" : "text-gray-800"
              }  text-base`}
            />
          </div>
        </div>
        <div className=" flex flex-col items-center justify-between w-full gap-2 drop-shadow-2xl">
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
              } justify-center w-full rounded-[5px] hover:bg-[#1F2937] ${
                sidebarOpen ? "ml-[25px] pl-2 pr-7 hidden md:flex " : "px-2"
              } py-2 ${theme === "dark" ? "text-white" : "text-black hover:text-white"} `}
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
                <div className="absolute left-16 bg-white px-2 py-2 w-28 rounded-[6px] text-gray-700 flex items-center justify-center text-xs font-semibold">
                  <h2>{Hover.value}</h2>
                </div>
              )}
            </Link>
          ))}
        </div>
        <div
          className={` ${
            sidebarOpen ? "md:flex hidden" : "flex"
          } items-center justify-start w-full`}
        >
          <div
            onClick={() => handleClick()}
            className={`${
              theme === "dark" ? "hover:bg-[#27272A]" : "hover:bg-[#F4F4F5]"
            }  ${
              theme === "dark" ? "text-white" : "text-black"
            }  bg-transparent px-2 py-2 rounded-[6px]`}
          >
            {theme === "dark" ? (
              <BsFillMoonStarsFill />
            ) : (
              <LuSunDim className="text-xl" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
