import AnyThingWrongSection from "@/components/shared/pageSection/homePageSection/AnyThingWrongSection";
import FaqsSection from "@/components/shared/pageSection/homePageSection/FaqsSection";
import HeroSection from "@/components/shared/pageSection/homePageSection/HeroSection";
import NotableProjects from "@/components/shared/pageSection/homePageSection/NotableProjects";
import ExpertiseSection from "@/components/shared/pageSection/homePageSection/ExpertiseSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Salman Dev | MERN Stack developer",
  description: "",
};

export default function Home() {
  return (
    <div className="w-full mx-auto">
      <HeroSection />
      <NotableProjects />
      <ExpertiseSection />
      <FaqsSection />
      <AnyThingWrongSection />
    </div>
  );
}
