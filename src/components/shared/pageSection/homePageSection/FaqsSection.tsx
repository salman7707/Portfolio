"use client";

import { useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { faqData } from "@/constants";
import { useMyContext } from "@/contexts/MyContext";
import { motion, useInView } from "framer-motion";

export default function FaqsSection() {
  const { theme } = useMyContext();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (value: string) => {
    setOpenItems((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ delay: 0.5 }}
      className={`  px-4 md:px-16 py-20 lg:px-20 xl:px-[122px] ${
        theme === "dark" ? "bg-[#09090B]" : "bg-white"
      } `}
    >
      <Card
        className={`${
          theme === "dark" ? "bg-[#09090B]" : "bg-white border-gray-200"
        } max-w-[1350px] mx-auto`}
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
                className={`${theme === "dark" ? "" : "border-b-gray-200"}`}
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
    </motion.div>
  );
}
