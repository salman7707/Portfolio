import ContactSection from "@/components/shared/pageSection/contactPageSection/ContactSection";
import AnyThingWrongSection from "@/components/shared/pageSection/homePageSection/AnyThingWrongSection";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Salman Dev | Contact",
  description: "",
};

export default function page() {
  return (
    <div>
      <ContactSection />
      <AnyThingWrongSection />
    </div>
  );
}
