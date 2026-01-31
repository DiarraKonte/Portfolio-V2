"use client";
import About from "@/components/main/About";
import Contact from "@/components/main/Contact";
import Experience from "@/components/main/Experience";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import NavBar from "@/components/main/NavBar";
import Projects from "@/components/main/Projet"; // Renommé pour cohérence
import Skills from "@/components/main/skills";
import SAE from "@/components/main/SAE";
import Stage from "@/components/main/stage";
import ScrollToTop from "@/components/main/ScrollToTop";

import BackgroundGrid from "@/components/main/BackgroundGrid";

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

      <section id="sae" className="relative z-10 -mt-[1px]">
        <SAE />
      </section>

      <section id="stage" className="relative z-10 -mt-[1px]">
        <Stage />
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