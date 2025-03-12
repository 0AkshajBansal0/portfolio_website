import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Education from "./components/Education";
import AboutSection from "./components/AboutSection";
import Experience from "./components/Experience";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import AchievementsSection from "./components/AchievementsSection";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
      <section id="hero">
          <HeroSection />
        </section>
        <AchievementsSection />
        <section id="about">
          <AboutSection />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="contact">
          <EmailSection />
        </section>
        <Footer />
      </div>
    </main>
  );
}
