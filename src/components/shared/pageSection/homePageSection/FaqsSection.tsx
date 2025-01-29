"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { faqData } from "@/constants";
import { useMyContext } from "@/contexts/MyContext";

export default function FaqsSection() {
  const { theme } = useMyContext();

  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (value: string) => {
    setOpenItems((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <div
      className={` max-w-[1350px] mx-auto px-4 md:px-16 py-20 lg:px-20 xl:px-[122px] ${
        theme === "dark" ? "bg-[#09090B]" : "bg-white"
      } `}
    >
      <Card
        className={`${
          theme === "dark" ? "bg-[#09090B]" : "bg-white border-gray-200"
        }`}
      >
        <CardHeader>
          <CardTitle
            className={`text-[26px] md:text-4xl font-edu-nsw ${
              theme === "dark" ? "text-white" : " text-[#09090B]"
            } `}
          >
            FAQ&apos;s (Frequently Asked Questions)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion
            type="multiple"
            value={openItems}
            onValueChange={setOpenItems}
          >
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`${
                  theme === "dark" ? "" : "border-b-gray-200"
                }`}
              >
                <AccordionTrigger
                  className={`${
                    theme === "dark" ? "text-white" : " text-[#09090B]"
                  } `}
                  onClick={() => toggleItem(`item-${index}`)}
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent
                  className={`${
                    theme === "dark" ? "text-white" : " text-[#09090B]"
                  } `}
                >
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
