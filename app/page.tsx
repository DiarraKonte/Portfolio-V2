"use client";
import dynamic from "next/dynamic";
import About from "@/components/main/About";
import Contact from "@/components/main/Contact";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import NavBar from "@/components/main/NavBar";
import Parcours from "@/components/main/Parcours";
import Skills from "@/components/main/skills";
import ScrollToTop from "@/components/main/ScrollToTop";
import BackgroundGrid from "@/components/main/BackgroundGrid";

// Swiper accesses localStorage at module load time — must be client-only
const Experience = dynamic(() => import("@/components/main/Experience"), { ssr: false });
const Projects = dynamic(() => import("@/components/main/Projet"), { ssr: false });

export default function Home() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      <BackgroundGrid />
      <NavBar />

      <section id="hero">
        <Hero />
      </section>

      <section id="about" className="relative z-10">
        <About />
      </section>

      <section id="parcours" className="relative z-10">
        <Parcours />
      </section>

      <section id="skills" className="relative z-0">
        <Skills />
      </section>

      <section id="experience" className="relative z-10">
        <Experience />
      </section>

      <section id="projects" className="relative z-10">
        <Projects />
      </section>

      <section id="contact" className="relative z-10">
        <Contact />
      </section>

      <section className="relative z-20">
        <Footer />
      </section>

      <ScrollToTop />
    </div>
  );
}