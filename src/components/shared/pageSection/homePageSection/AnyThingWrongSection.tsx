"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnyThingWorngLinks } from "@/constants";
import { IconType } from "react-icons/lib";

interface LinkItemProps {
  href: string;
  text: string;
  icon: IconType;
}

const LinkItem = ({ href, text, icon: Icon }: LinkItemProps) => {
  return (
    <li>
      <Button asChild variant="ghost" className="w-full justify-start">
        <Link href={href} className="flex items-center gap-2">
          <Icon className="w-4 h-4" />
          <span>{text}</span>
        </Link>
      </Button>
    </li>
  );
};

export default function AnyThingWrongSection() {
  return (
    <div className="max-w-[1350px] mx-auto px-4 md:px-16 lg:px-20 pb-20 xl:px-[122px]">
      <Card className="bg-background text-foreground">
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-edu-nsw text-primary">
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
