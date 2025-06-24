"use client";
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useMotionTemplate, animate } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const saeContent = [
  {
    title: "Compétences et SAE",
    description: (
      <>
        <p className="text-gray-400">
          Dans le cadre de la formation intitulée <span className="font-bold text-white">BUT Informatique</span>, ancienmment DUT Informatique, est organisée autour de 6 grandes compétences utilisées pour valider l’année d’un étudiant. Chaque compétence est liée au métier de développeur, elle correspond à une qualité, un savoir-faire essentiel : développer (compétence 1), optimiser (compétence 2), administrer un système (compétence 3), gérer des données (compétence 4), gérer un projet (compétence 5), travailler en équipe (compétence 6).
        </p>
        <br />
        <p className="text-gray-400">
          Les <span className="font-bold text-white">Situations d’Apprentissage et d’Évaluation</span> (SAE) sont des projets de situation réelle d’enseignement et d’apprentissage axé sur la validation de plusieurs de ces compétences. Par exemple un projet de développement d’application fait travailler la compétence, tout à la fois compétence 1 (réalisation), compétence 4 (gestion des données), compétence 6 (le travail en équipe).
        </p>
        <br />
        <p className="text-gray-400">
          Ce mode d’apprentissage intégré permet de construire des savoir-faire techniques, mais aussi et de plus en plus des savoir-faire transversale, de plus en plus exigés par le monde du travail. Le BUT <span className="font-bold text-white">ne nous apprend pas seulement à coder</span>, comme le DUT.
        </p>
      </>
    ),
    projects: [
     
    ]
  },
  {
    title: "Mes Projets Académiques(SAE)",
    description: "",
    projects: [
      {
        title: "SAE 2.01",
        subtitle: "developpement d'une calculatrice Java",
        details: "Conception et développement d'une calculatrice Java avec des fonctionnalités de base."
      },
      {
        title: "SAE 3.01",
        subtitle: "developpement d'application",
        details: "Conception et développement d'une application de messagerie dyadique avec un système de stockage de messages, d'annotation de message et de collecte des annotations dans une base de données pour analyse."
      },
      {
        title: "SAE 3.02",
        subtitle: "optimisation d'application",
        details: "Analyse de l'existant pour améliorer l'application et la rendre plus performante."
      }
    ]
  },
  {
    title: "Bilan par Compétences",
    description: (
      <>
        <p className="text-gray-400">
          Voici un résumé des <span className="font-bold text-white">compétences développées</span> au cours des SAE 
          et projets réalisés dans le cadre de mon BUT Informatique.
        </p>
      </>
    ),
    projects: [
      {
        title: "Compétence 1 : Développement d'application",
        subtitle: "SAE 3.01, SAE 3.02, Développement d'une application de messagerie dyadique",
        details: "La SAE 3.01 et la SAE 3.02 ont permis de développer des compétences en développement d'application."
      },
      {
        title: "Compétence 2 : Optimisation des applications",
        subtitle: "SAE 3.02, Développement d'une application de messagerie dyadique",
        details: "La SAE 3.02 a permis de développer des compétences en optimisation d'application, on a dû analyser l'existant et améliorer l'application."
      },
      {
        title: "Compétence 3 : Administration des systèmes",
        subtitle: "SAE 3.01, SAE 3.02",
        details: "Ces SAE m'ont permis de développer des compétences en administration des systèmes, notamment la gestion des serveurs, avec ratchet, javascript et PHP."
      },
      {
        title: "Compétence 4 : Gestion des données",
        subtitle: "SAE 3.01, SAE 3.02, Développement d'une application de messagerie dyadique",
        details: "La SAE 3.01 m'as permis d'acquérir des compétences dans tout ce qui est gestion de données, notamment la gestion de base de données car j'ai eu a utliser SQL pour gerer le stockage des messages."
      },
      {
        title: "Compétence 5 : Gestion de projet",
        subtitle: "SAE 2.01, SAE 3.01, SAE 3.02",
        details: "Mes 3 SAE m'ont permis de développer des compétences en gestion de projet, notamment la gestion des tâches, la planification et le respect des délais. On a eu a utiliser la méthodologie Agile pour développer nos projets et des outils comme git pour gérer notre code, jira et google doc pour la gestion des tâches."
      },
      {
        title: "Compétence 6 : Travail en équipe",
        subtitle: "SAE 2.01, SAE 3.01, SAE 3.02",
        details: "Toute mes SAE ont ete realiser en equipe, cela m'a permis de développer des compétences en travail en equipe, notamment la gestion des conflits, la communication et la gestion, le partage des tâches."
      }
    ]
  }
];

const SAE = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const color = useMotionValue(COLORS[0]);
  
  useEffect(() => {
    const animation = animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror"
    });
    return () => animation.stop();
  }, [color]);

  const background = useMotionTemplate`radial-gradient(170% 120% at 50% 100%, #000 30%, ${color})`;
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % saeContent.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + saeContent.length) % saeContent.length);
  };

  const currentContent = saeContent[currentIndex];
  
  return (
    <motion.section
      id="sae"
      style={{ background }}
      className="relative min-h-screen py-24 px-4 text-gray-200"
    >
      <div className="max-w-6xl mx-auto">
        <div className="space-y-8">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-5xl font-bold mb-2">{currentContent.title}</h2>
            <div className="h-1 w-20 bg-white/50 mx-auto my-6"></div>
            <div className="text-xl leading-relaxed max-w-3xl mx-auto">
              {currentContent.description}
            </div>
          </motion.div>

          <motion.div
            key={`projects-${currentIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className={
              currentContent.title === "Mes Projets Académiques(SAE)"
                ? "flex flex-col gap-8 mt-12"
                : "grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
            }
          >
            {currentContent.projects.map((project, idx) => {
  const card = (
    <motion.div
      key={idx}
      whileHover={{ y: -5 }}
      className="p-6 bg-black/20 rounded-xl backdrop-blur-sm border border-white/10 cursor-pointer"
    >
      <h3 className="text-2xl font-bold text-[#13FFAA]">{project.title}</h3>
      <p className="text-lg mt-2">{project.subtitle}</p>
      <p className="text-gray-400 mt-4">{project.details}</p>
    </motion.div>
  );
  return currentContent.title === "Mes Projets Académiques(SAE)"
    ? <a href="#projects" key={idx} style={{textDecoration: 'none'}}>{card}</a>
    : card;
})}
          </motion.div>
          
          <div className="flex justify-center items-center space-x-16 mt-12">
            <button
              onClick={prevSlide}
              className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
              aria-label="Contenu précédent"
            >
              <ArrowLeft size={24} />
            </button>
            
            <div className="flex space-x-2">
              {saeContent.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${idx === currentIndex ? 'bg-white' : 'bg-white/30'}`}
                  aria-label={`Aller au contenu ${idx + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
              aria-label="Contenu suivant"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SAE;