import AnyThingWrongSection from "@/components/shared/pageSection/homePageSection/AnyThingWrongSection";
import AboutMeSection from "@/components/shared/pageSection/MyStoryPageSection/AboutMeSection";
import React from "react";

export default function page() {
  return (
    <div className="bg-gray-800">
      <AboutMeSection />
      <AnyThingWrongSection bgColor="story" />
    </div>
  );
}
