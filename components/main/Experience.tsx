'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { FaExternalLinkAlt } from "react-icons/fa";



type Experience = {
  id: number;
  year: number;
  place: string;
  title: string;
  description: string;
  image: string[];
  years: string;
  color: string;
  message: string;
  technologies: string[];
  externalLink?: string;
};

const experiences: Experience[] = [
  {
    id: 2,
    year: 2024,
    place: "Argenteuil",
    title: "Livreur indépendant Uber Eats",
    description: "Livraison de repas pour des particuliers via la plateforme Uber Eats.",
    image: ["/ubereats.jpg"],
    years: "Avril 2022 - aujourd'hui",
    color: "#13FFAA",
    message: "",
    technologies: ["Gestion des commandes", "Relation client", "Autonomie", "Organisation", "Responsabilité"],
    externalLink: "",
  },
  {
    id: 1,
    year: 2023,
    place: "Seine-Saint-Denis",
    title: "Assistant technicien électronique",
    description: "Participation au développement de l'espace personnel des apprenants sur la plateforme AriMayi. Collaboration avec l'équipe back-end pour implémenter des fonctionnalités spécifiques et résoudre des problèmes complexes.",
    image: ["/besmart.png"],
    years: "Juin 2023 - Août 2023",
    color: "#FFFF00",
    message: "",
    technologies: ["Relation client", "Électronique"],
    externalLink: ""
  },
  {
    id: 3,
    year: 2023,
    place: "Issy-les-Moulineaux",
    title: "Stage chez ReeWayy",
    description: "Développement de l'espace personnel des apprenants sur la plateforme AriMayi en tant que développeur front-end, avec la prise en charge d'une user story, tout en travaillant en collaboration avec l'équipe back-end. Workflow présenté sous forme d'images.",
    image: [
      "/arimayi.png",
      "/dashboard.png",
      "/jobsearch.png",
      "/details.png",
      "/cv.png",
      "/cv2.png",
      "/cv3.png",
      "/validate.png",
      "/redirect.png"
    ],
    years: "Janvier 2025 - Mars 2025",
    color: "#FFFFFF",
    message: "Voir code GitHub",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "I18N", "ANT Design", "Git", "GitHub", "Swagger", "Méthodologie Agile"],
    externalLink: "https://github.com/DiarraKonte/AriMayi-US-720/tree/main"
  }
];


const Experience = () => {
  const [selectedProject, setSelectedProject] = useState(experiences[0]);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);



  const handleProjectChange = (exp: Experience) => {
    if (selectedProject.id === exp.id) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedProject(exp);
      setIsTransitioning(false);
    }, 200);
  };

  const detailsVariants = { hidden: { opacity: 0, y: 20, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 } }, exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.2, ease: "easeIn" } } };
  const itemVariants = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } } };
  const techVariants = { hidden: { opacity: 0, scale: 0.8, y: 10 }, visible: (i: number) => ({ opacity: 1, scale: 1, y: 0, transition: { delay: i * 0.05, duration: 0.3, ease: "easeOut" } }) };
  const carouselVariants = { hidden: { opacity: 0, scale: 0.9, rotateY: 15 }, visible: { opacity: 1, scale: 1, rotateY: 0, transition: { duration: 0.6, ease: "easeOut" } }, exit: { opacity: 0, scale: 0.9, rotateY: -15, transition: { duration: 0.3, ease: "easeIn" } } };

  return (
    <motion.section
      id="experience"
      className="py-16 sm:py-24 md:py-32 px-4 text-white"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Colonne de gauche */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-6xl font-bold mb-10"
          >
            <span className="text-gray-400">Expériences</span>
          </motion.h2>

          <div className="relative border-l-2 border-gray-800 ml-3 md:ml-6 pl-8 md:pl-12 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                onClick={() => handleProjectChange(exp)}
                className="cursor-pointer group relative"
              >
                {/* Timeline Dot */}
                <div className={`absolute -left-[41px] md:-left-[59px] top-1 w-5 h-5 rounded-full border-4 border-black transition-colors duration-300 ${selectedProject.id === exp.id ? 'bg-purple-500 scale-125' : 'bg-gray-700 group-hover:bg-gray-500'}`} />

                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <p className="text-gray-400 text-sm sm:text-lg mb-1 flex items-center gap-2">
                    <span className="text-purple-400 font-mono">{exp.years}</span>
                    <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                    <span className="font-bold text-gray-300">{exp.place}</span>
                  </p>
                  <motion.h3
                    className={`text-xl sm:text-3xl font-bold mb-2 transition-colors duration-300 ${selectedProject.id === exp.id ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}
                  >
                    {exp.title}
                  </motion.h3>
                </motion.div>

                <AnimatePresence mode="wait">
                  {selectedProject.id === exp.id && !isTransitioning && (
                    <motion.div variants={detailsVariants} initial="hidden" animate="visible" exit="exit" className="overflow-hidden">
                      <motion.p variants={itemVariants} className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                        {exp.description}
                      </motion.p>
                      {exp.externalLink && (
                        <motion.a
                          variants={itemVariants}
                          href={exp.externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-400 hover:text-purple-300 flex items-center gap-2 text-sm font-medium mb-4"
                          whileHover={{ x: 5 }}
                        >
                          <span>{exp.message}</span>
                          <FaExternalLinkAlt size={12} />
                        </motion.a>
                      )}
                      <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <motion.span
                            key={tech}
                            custom={i}
                            variants={techVariants}
                            className="inline-block bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-xs text-gray-300 hover:bg-white/10 transition-colors"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Colonne de droite */}
        <div className="relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={`carousel-${selectedProject.id}`}
              variants={carouselVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full"
            >
              <Swiper
                modules={[Pagination, Navigation]}
                pagination={{ clickable: true }}
                navigation={{
                  prevEl: '.swiper-button-prev-custom-exp',
                  nextEl: '.swiper-button-next-custom-exp',
                }}
                spaceBetween={10}
                slidesPerView={1}
                className="w-full"
              >
                {selectedProject.image.map((img, index) => (
                  <SwiperSlide
                    key={`${selectedProject.id}-${index}`}
                    className="flex justify-center"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                      onClick={() => setSelectedImage(img)}
                      className="relative w-full rounded-2xl border border-white/10 p-6 min-h-[400px] flex items-center justify-center cursor-pointer"
                      style={{
                        background: `linear-gradient(135deg, ${selectedProject.color}10, rgba(255,255,255,0.02))`
                      }}
                    >
                      <Image
                        src={img}
                        alt={`${selectedProject.title} image ${index + 1}`}
                        width={600}
                        height={400}
                        className="w-full h-auto max-h-[400px] object-contain rounded-lg"
                      />
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </AnimatePresence>

          {/* Custom Navigation Arrows - Only show when more than one image */}
          {selectedProject.image.length > 1 && (
            <>
              <button className="swiper-button-prev-custom-exp absolute left-2 top-[60%] -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group">
                <svg className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="swiper-button-next-custom-exp absolute right-2 top-[60%] -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group">
                <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Indice défilement mobile */}
          <AnimatePresence>
            {showScrollHint && selectedProject.image.length > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-center lg:hidden"
              >

                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="w-1 h-8 bg-white/50 mx-auto rounded-full"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* 🖼️ Modal Image plein écran */}
          {selectedImage && (
            <div
              className="fixed inset-0 z-50 bg-black bg-opacity-90 flex justify-center items-center"
              onClick={() => setSelectedImage(null)}
            >
              <Image
                src={selectedImage}
                alt="Image agrandie"
                width={1000}
                height={800}
                className="object-contain max-h-full max-w-full rounded-lg"
              />
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
