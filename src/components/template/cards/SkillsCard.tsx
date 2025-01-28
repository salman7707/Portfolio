import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IconType } from "react-icons/lib";

interface ToolIcon {
  name: string;
  source: IconType;
  color: string;
}

interface SkillsCardProps {
  title: string;
  desc: string;
  bgcolor: string;
  textcolor: string;
  icon: IconType;
  toolIcons: ToolIcon[];
}
export default function SkillsCard({
  icon: Icon,
  title,
  desc,
  bgcolor,
  textcolor,
  toolIcons,
}: SkillsCardProps) {
  if (bgcolor === "bg-sky-200") {
    bgcolor = "bg-sky-200";
  } else if (bgcolor === "bg-red-200") {
    bgcolor = "bg-red-200";
  } else if (bgcolor === "bg-gray-200") {
    bgcolor = "bg-gray-200";
  } else if (bgcolor === "bg-green-200") {
    bgcolor = "bg-green-200";
  }

  if (textcolor === "text-sky-600") {
    textcolor = "text-sky-600";
  } else if (textcolor === "text-red-600") {
    textcolor = "text-red-600";
  } else if (textcolor === "text-gray-600") {
    textcolor = "text-gray-600";
  } else if (textcolor === "text-green-600") {
    textcolor = "text-green-600";
  }

  return (
    <Card className="hover:shadow-xl h-full w-full mx-auto overflow-hidden transition-shadow duration-300">
      <CardHeader className="flex flex-col items-center text-center">
        <div
          className={`p-6 rounded-full inline-flex items-center justify-center text-4xl shadow-lg ${bgcolor} ${textcolor}`}
        >
          <Icon size={60} className="" />
        </div>
        <CardTitle className="text-2xl mt-4 font-semibold text-primary">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        {toolIcons && (
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <TooltipProvider >
              {toolIcons.map((item, index) => (
                <Tooltip
                  
                  key={index}
                >
                  <TooltipTrigger>
                    <div
                      className={`rounded-full  hover:scale-110 transition-transform duration-200 border-2 p-3 shadow-md flex items-center justify-center text-lg ${
                        item.color === "text-sky-800"
                          ? "text-sky-800"
                          : item.color === "text-orange-700"
                          ? "text-orange-700"
                          : item.color === "text-yellow-900"
                          ? "text-yellow-900"
                          : item.color === "text-green-700"
                          ? "text-green-700"
                          : item.color === "text-yellow-600"
                          ? "text-yellow-600"
                          : item.color === "text-sky-800"
                          ? "text-sky-800"
                          : item.color === "text-orange-800"
                          ? "text-orange-800"
                          : item.color === "text-sky-400"
                          ? "text-sky-400"
                          : item.color === "text-gray-900"
                          ? "text-gray-900"
                          : item.color === "text-sky-700"
                          ? "text-sky-700"
                          : item.color === "text-red-600"
                          ? "text-red-600"
                          : item.color === "text-yellow-600"
                          ? "text-yellow-600"
                          : item.color === "text-gray-700"
                          ? "text-gray-700"
                          : item.color === "text-pink-800"
                          ? "text-pink-800"
                          : ""
                      } `}
                    >
                      <item.source className="text-3xl" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-sm">{item.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>
        )}
        <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
      </CardContent>
    </Card>
  );
}
