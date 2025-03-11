"use client";
import { useMyContext } from "@/contexts/MyContext";
import React, { useEffect, useState } from "react";

export default function Cursor() {
  const { theme } = useMyContext();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handlecursor = (e: MouseEvent) => {
      const PX = e.clientX;
      const PY = e.clientY;
      setTimeout(() => {
        setPosition({ x: PX, y: PY });
      }, 50);
    };

    window.addEventListener("mousemove", handlecursor);
    return () => {
      window.removeEventListener("mousemove", handlecursor);
    };
  }, [position]);
  return (
    <>
      <div
        style={{
          translate: `${position.x - 8}px ${position.y - 4}px`,
        }}
        className={`lg:block hidden cursor ${
          theme === "dark" ? "bg-white" : "bg-black"
        } `}
      ></div>
    </>
  );
}
