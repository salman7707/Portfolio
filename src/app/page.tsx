import AnyThingWrongSection from "@/components/shared/pageSection/homePageSection/AnyThingWrongSection";
import FaqsSection from "@/components/shared/pageSection/homePageSection/FaqsSection";
import HeroSection from "@/components/shared/pageSection/homePageSection/HeroSection";
import NotableProjects from "@/components/shared/pageSection/homePageSection/NotableProjects";
import SkillsSection from "@/components/shared/pageSection/homePageSection/SkillsSection";

export default function Home() {
  return (
    <div className="w-full max-w-[1350px] m-auto">
      <HeroSection />
      <NotableProjects />
      <SkillsSection />
      <FaqsSection />
      <AnyThingWrongSection />
      {/* <FormAndWhatNextAndCopyRightSection /> */}
    </div>
  );
}
