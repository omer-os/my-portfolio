import BackgroundGradient from "@/components/home/BackgroundGradient";
import HomeContactMeCircle from "@/components/home/ScrollToTopButton";
import HomeFirstSection from "@/components/home/HomeFirstSection";
import HomeSkillsSection from "@/components/home/HomeSkillsSection";
import LastestBlogs from "@/components/home/LastestBlogs";
import ScrollToTopButton from "@/components/home/ScrollToTopButton";
import LastestProjects from "@/components/home/LastestProjects";

export default function page() {
  return (
    <div className="mt-6">
      <BackgroundGradient />
      <div className="flex flex-col smaller-content-width mx-auto">
        <HomeFirstSection />
        <HomeSkillsSection />
        <LastestProjects />
        <LastestBlogs />
      </div>

      <ScrollToTopButton />
    </div>
  );
}
