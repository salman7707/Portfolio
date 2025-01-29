import AnyThingWrongSection from "@/components/shared/pageSection/homePageSection/AnyThingWrongSection";
import NotableProjects from "@/components/shared/pageSection/homePageSection/NotableProjects";
import React from "react";

export default function page() {
  return (
    <div>
      <NotableProjects projectsPage />
      <AnyThingWrongSection />
    </div>
  );
}
