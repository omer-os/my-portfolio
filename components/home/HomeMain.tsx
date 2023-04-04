import React from "react";
import BackgroundGradient from "./components/BackgroundGradient";
import HomeFirstSection from "./components/HomeFirstSection";
import HomeSkillsSection from "./components/HomeSkillsSection";
import LastestBlogs from "./components/LastestBlogs";
import LastestProjects from "./components/LastestProjects";
import ScrollToTopButton from "./components/ScrollToTopButton";

export default function HomeMain() {
  return (
    <div>
      <BackgroundGradient />
      <div className="flex max-w-5xl px-6 flex-col mx-auto">
        <HomeFirstSection />
        <HomeSkillsSection />
        {/* @ts-ignore */}
        <LastestProjects />
        {/* @ts-ignore */}
        <LastestBlogs />
      </div>

      <ScrollToTopButton />
    </div>
  );
}
