import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div className="container mx-auto px-6 py-8">
        <section className="min-h-screen flex items-center justify-center">
          <HeroSection />
        </section>

        {/* AboutSection takes full screen height */}
        <section
          id="about"
          className="min-h-screen flex items-center justify-center"
        >
          <AboutSection />
        </section>
        <section
          id="projects"
          className="min-h-screen items-center justify-center"
        >
          <ProjectsSection />
        </section>
      </div>
    </main>
  );
}
