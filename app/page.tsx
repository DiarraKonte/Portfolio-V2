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

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <NavBar />
      <Hero />
      
      {/* Section About avec dégradé animé */}
      <section id="about" className="relative z-10">
        <About />
      </section>
      
      {/* Section SAE avec transition fluide */}
      <section id="sae" className="relative z-10 -mt-[1px]"> {/* Chevauchement de 1px pour la continuité */}
        <SAE />
      </section>
      
      {/* Section Skills avec fond noir fixe */}
      <section id="skills" className="relative z-0 bg-black">
        <Skills />
      </section>
      
      {/* Section Expérience */}
      <section id="experience" className="relative z-10 bg-black">
        <Experience />
      </section>
      
      {/* Section Projets */}
      <section id="projects" className="relative z-10">
        <Projects />
      </section>
      
      {/* Section Contact avec fond noir */}
      <section id="contact" className="relative z-10 bg-black">
        <Contact />
      </section>
      
      {/* Footer */}
      <section className="relative z-20">
        <Footer />
      </section>
    </div>
  );
}