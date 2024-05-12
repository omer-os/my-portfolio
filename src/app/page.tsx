import Link from "next/link";
import HomeBlogsSection from "~/components/custom/sections/home-blogs-section";
import HomeHeroSection from "~/components/custom/sections/home-hero-section";
import HomeProjectsSection from "~/components/custom/sections/home-projects-section";
import HomeSkillsSection from "~/components/custom/sections/home-skills-section";
import { Separator } from "~/components/ui/separator";

export default function HomePage() {
  return (
    <div className="container">
      <HomeHeroSection />
      <Separator className="my-4" />
      <HomeSkillsSection />
      <Separator className="my-4" />
      <HomeProjectsSection />
      <Separator className="my-4" />
      <HomeBlogsSection />
    </div>
  );
}
