"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnyThingWorngLinks } from "@/constants";
import { IconType } from "react-icons/lib";
import { usePathname } from "next/navigation";
import { useMyContext } from "@/contexts/MyContext";

interface LinkItemProps {
  href: string;
  text: string;
  icon: IconType;
}

const LinkItem = ({ href, text, icon: Icon }: LinkItemProps) => {
  const { theme } = useMyContext();
  return (
    <li>
      <Button
        asChild
        variant="ghost"
        className={`w-full rounded-[6px] justify-start ${
          theme === "dark" ? "" : "hover:bg-gray-100 hover:text-[#09090B]"
        } transition-colors`}
      >
        <Link href={href} className="flex items-center gap-2">
          <Icon className="w-4 h-4" />
          <span>{text}</span>
        </Link>
      </Button>
    </li>
  );
};

interface AnyThingWrongSectionTypes {
  bgColor?: string;
}
export default function AnyThingWrongSection({
  bgColor,
}: AnyThingWrongSectionTypes) {
  const { theme } = useMyContext();
  const pathname = usePathname();
  return (
    <div
      className={`${
        theme === "dark"
          ? bgColor === "story"
            ? "bg-gray-800"
            : " bg-[#09090B]"
          : "bg-white"
      }  max-w-[1350px] mx-auto px-4 md:px-16 lg:px-20 pb-20 xl:px-[122px] ${
        pathname === "/projects" && "py-14"
      }`}
    >
      <Card
        className={`${
          theme === "dark"
            ? "bg-background text-white "
            : "bg-white text-[#09090B] border-gray-200"
        }`}
      >
        <CardHeader>
          <CardTitle
            className={`text-[20.9px] md:text-4xl font-edu-nsw text-primary ${
              theme === "dark" ? "text-white" : "text-[#09090B]"
            }`}
          >
            Anything wrong with this page?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {AnyThingWorngLinks.map((link, index) => (
              <LinkItem
                key={index}
                icon={link.icon}
                text={link.text}
                href={link.href}
              />
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
