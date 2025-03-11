import AnyThingWrongSection from "@/components/shared/pageSection/homePageSection/AnyThingWrongSection";
import NotableProjects from "@/components/shared/pageSection/homePageSection/NotableProjects";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Salman Dev | Projects",
  description: "",
};

export default function page() {
  return (
    <div>
      <NotableProjects projectsPage />
      <AnyThingWrongSection />
    </div>
  );
}
