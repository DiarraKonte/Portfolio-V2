"use client";
import About from "@/components/main/About";
import Contact from "@/components/main/Contact";
import Experience from "@/components/main/Experience";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import NavBar from "@/components/main/NavBar";
import Projet from "@/components/main/Projet";
import Skills from "@/components/main/skills";


export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <section>
        <About/>
      </section>
      <section className="bg-black">
        <Skills/>
      </section>
      <section>
        <Experience/>
      </section>
      <section>
        <Projet/>
      </section>
     
      <section className="bg-black">
        <Contact/>
      </section>
      <section>
        <Footer className="bg-black" />
      </section>
     
    </>
  );
}