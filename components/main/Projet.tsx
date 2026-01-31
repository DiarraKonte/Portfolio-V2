'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { FaExternalLinkAlt, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiHtml5, SiPhp, SiReact, SiFlutter } from "react-icons/si";
import { Link } from 'lucide-react';

// Liste de couleurs cycliques pour le fond


type Project = {
  id: number;
  place: string;
  title: string;
  description: string;
  image: string[];
  years: string;
  color: string;
  message: string;
  technologies: string[];
  externalLink?: string;
  Link?: string;
  demoUrl?: string;
  icon?: React.ComponentType<{ className: string }>;
};

const projet: Project[] = [
  {
    id: 1,
    place: "",
    title: "Calculatrice Java(SAE 2.01)",
    description: "Une calculatrice simple réalisée en Java.",
    image: ["/Java.png", "/Java1.png", "/Java2.png"],
    years: "avril 2024 ",
    color: "#1dd396",
    message: "Voir code GitHub",
    technologies: ["Java", "Git", "GitHub"],
    externalLink: 'https://github.com/DiarraKonte/SAE-Calculatrice',
    icon: FaJava
  },
  {
    id: 2,
    place: "",
    title: "Football Story",
    description: "Un site retraçant l'histoire du football, ses grands joueurs et ses moments historiques. J'ai entrepris ce projet pour parler de ma passion pour le football.",
    image: ["/FS.png", "/FS2.png", "/FS3.png", "/FS4.png"],
    years: "Juin 2024 ",
    color: "#33FF57",
    message: "Voir le site",
    technologies: ["HTML", "CSS", "Git", "GitHub"],
    externalLink: "https://diarrakonte.github.io/FootballStory/",
    icon: SiHtml5
  },
  {
    id: 3,
    place: "IUT Sorbonne Paris Nord",
    title: "Plateforme de discussion(SAE 3.01)",
    description: "Développement, dans le cadre d'une SAE (Situation d'Apprentissage et d'Évaluation), d'une application de messagerie et d'annotation de messages en temps réel. Le projet consistait à permettre aux utilisateurs de commenter et classer des messages, puis à collecter les annotations dans une base de données pour analyse.",
    image: ["/pingme.png", "/discussion.png", "/msg.png"],
    years: "Octobre 2024 - Décembre 2024",
    color: "#1E67C6",
    message: "Voir code GitHub",
    technologies: ["Php", "Node.js", "WebSockets", "Ratchet", "MVC", "GitHub", "MySQL", "PostgreSQL", "XAMPP", "PhpMyAdmin", "JavaScript"],
    externalLink: "https://github.com/Cheick6/SAE_S1",
    icon: SiPhp
  },
  {
    id: 4,
    place: "",
    title: "Portfolio next.js",
    description: "Mon portfolio personnel, réalisé avec Next.js et Tailwind CSS. Il présente mes projets, mes compétences et mon parcours professionnel.",
    image: ["/portfolio.png"],
    years: "Mai 2025 ",
    color: "#1dd396",
    message: "Voir code GitHub",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Next.js", "TypeScript", "Git", "GitHub"],
    externalLink: 'https://github.com/DiarraKonte/Portfolio-V2',
    icon: SiNextdotjs
  },
  {
    id: 5,
    place: "",
    title: "LumnPC",
    description: "Site proposant des modules pour aider les débutants à choisir leur PC gaming, avec un système de compte et un moyen de paiement par Stripe.",
    image: ["/lumn0.png", "/lumn0.5.png", "/Lumn1.png", "/Lumn2.png", "/Lumn3.png", "/Lumn4.png", "/Lumn5.png", "/Lumn6.png", "/LumnAccount.png"],
    years: "Mai 2025 ",
    color: "#1dd396",
    message: "Voir code GitHub",
    Link: "Le site",
    demoUrl: "https://infobusiness-pc.vercel.app/",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Next.js", "TypeScript", "Stripe", "Git", "GitHub", "Vercel", "OVH", "Resend", "Firebase", "Firestore", "GoogleOAuth"],
    externalLink: 'https://github.com/DiarraKonte/Infobusiness-PC',
    icon: SiReact
  },
  {
    id: 6,
    place: "",
    title: "OtakuGO",
    description: "Une application mobile qui te recommande des animes",
    image: ["/Otaku.png", "/Otaku1.png", "/Otaku2.png", "/Otaku3.png", "/Otaku4.png", "/Otaku5.png", "/Otaku6.png", "/Otaku7.png", "/Otaku8.png"],
    years: "Octobre 2025 - Janvier 2026 ",
    color: "#e6d8ca",
    message: "Voir le code GitHub",
    Link: "Voir la démo",
    demoUrl: "https://diarrakonte.github.io/OtakuGO/",
    technologies: ["Flutter", "Dart", "Git", "GitHub", "GitHub Actions", "JSON", "Trello"],
    externalLink: 'https://github.com/DiarraKonte/OtakuGO',
    icon: SiFlutter
  }
];

const Projet = () => {
  const [selectedProject, setSelectedProject] = useState<Project>(projet[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Valeur animée pour la couleur


  const handleProjectChange = (project: Project) => {
    if (selectedProject.id === project.id) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedProject(project);
      setIsTransitioning(false);
    }, 200);
  };

  // Variantes d'animation
  const detailsVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 }
    },
    exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.2, ease: "easeIn" } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } }
  };

  const techVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.3, ease: "easeOut" }
    })
  };

  const carouselVariants = {
    hidden: { opacity: 0, scale: 0.9, rotateY: 15 },
    visible: { opacity: 1, scale: 1, rotateY: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.9, rotateY: -15, transition: { duration: 0.3, ease: "easeIn" } }
  };

  return (
    <motion.section
      id="projects"
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
            <span className="text-gray-400">Projets</span>
          </motion.h2>

          <div className="relative border-l-2 border-gray-800 ml-3 md:ml-6 pl-8 md:pl-12 space-y-12">
            {projet.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                onClick={() => handleProjectChange(project)}
                className="cursor-pointer group relative"
              >
                {/* Timeline Dot */}
                <div className={`absolute -left-[41px] md:-left-[59px] top-1 w-5 h-5 rounded-full border-4 border-black transition-colors duration-300 ${selectedProject.id === project.id ? 'bg-purple-500 scale-125' : 'bg-gray-700 group-hover:bg-gray-500'}`} />

                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <p className="text-gray-400 text-sm sm:text-lg mb-1 flex items-center gap-2">
                    <span className="text-purple-400 font-mono">{project.years}</span>
                    {project.place && (
                      <>
                        <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                        <span className="font-bold text-gray-300">{project.place}</span>
                      </>
                    )}
                  </p>
                  <motion.h3
                    className={`text-xl sm:text-3xl font-bold mb-2 transition-colors duration-300 flex items-center gap-3 ${selectedProject.id === project.id ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}
                  >
                    {project.icon && React.createElement(project.icon, { className: "text-xl sm:text-2xl" })}
                    {project.title}
                  </motion.h3>
                </motion.div>

                <AnimatePresence mode="wait">
                  {selectedProject.id === project.id && !isTransitioning && (
                    <motion.div
                      variants={detailsVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="overflow-hidden"
                    >
                      <motion.p variants={itemVariants} className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                        {project.description}
                      </motion.p>

                      {project.externalLink && (
                        <motion.a
                          variants={itemVariants}
                          href={project.externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-400 hover:text-purple-300 flex items-center gap-2 text-sm font-medium mb-2"
                          whileHover={{ x: 5 }}
                        >
                          <span>{project.message}</span>
                          <FaExternalLinkAlt size={12} />
                        </motion.a>
                      )}

                      {project.Link && project.demoUrl && (
                        <motion.a
                          variants={itemVariants}
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-400 hover:text-purple-300 flex items-center gap-2 text-sm font-medium mb-4"
                          whileHover={{ x: 5 }}
                        >
                          <span>{project.Link}</span>
                          <Link size={14} />
                        </motion.a>
                      )}

                      <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
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

        {/* Colonne de droite : carrousel d'images */}
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
                  prevEl: '.swiper-button-prev-custom',
                  nextEl: '.swiper-button-next-custom',
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
              <button className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group">
                <svg className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group">
                <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Indice de scroll sur mobile uniquement */}
          <AnimatePresence>
            {selectedProject.image.length > 1 && (
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
          {selectedImage && (
            <div
              className="fixed inset-0 z-50 bg-black bg-opacity-90 flex justify-center items-center cursor-pointer"
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

export default Projet;