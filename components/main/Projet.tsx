'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useMotionValue, useMotionTemplate, motion, animate, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from 'lucide-react';

// Liste de couleurs cycliques pour le fond
const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

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
    externalLink: 'https://github.com/DiarraKonte/SAE-Calculatrice' 
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
    externalLink: "https://github.com/Cheick6/SAE_S1" 
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
    externalLink: 'https://github.com/DiarraKonte/Portfolio-V2' 
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
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Next.js", "TypeScript", "Stripe", "Git", "GitHub", "Vercel", "OVH", "Resend", "Firebase", "Firestore", "GoogleOAuth"],
    externalLink: 'https://github.com/DiarraKonte/Infobusiness-PC' 
  }
];

const Projet = () => {
  const [selectedProject, setSelectedProject] = useState<Project>(projet[0]);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Valeur animée pour la couleur
  const color = useMotionValue(COLORS[0]);

  // Dégradé animé basé sur la couleur
  const backgroundIMG = useMotionTemplate`radial-gradient(170% 120% at 50% 100%, #000 30%, ${color})`;

  useEffect(() => {
    const animation = animate(color, COLORS, {
      ease: "easeInOut",
      duration: 12,
      repeat: Infinity,
      repeatType: "mirror"
    });

    setShowScrollHint(true);
    const timer = setTimeout(() => setShowScrollHint(false), 3000);

    return () => {
      animation.stop();
      clearTimeout(timer);
    };
  }, [color]);

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
    visible: (i : number ) => ({
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
      style={{ background: backgroundIMG }}
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

          {projet.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              onClick={() => handleProjectChange(project)}
              className="cursor-pointer mb-8 group relative"
            >
              <motion.div whileHover={{ x: 10 }} transition={{ duration: 0.2 }}>
                <p className="text-gray-400 text-sm sm:text-lg mb-2">
                  {project.years} <span className="font-bold">{project.place}</span>
                </p>
                <motion.h3
                  className={`text-xl sm:text-3xl font-semibold group-hover:text-gray-400 transition-colors duration-300 ${
                    selectedProject.id === project.id ? 'text-gray-200' : ''
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
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
                    <motion.div variants={itemVariants} className="border-b border-gray-600 my-4" />
                    <motion.p variants={itemVariants} className="text-gray-300 text-sm sm:text-base">
                      {project.description}
                    </motion.p>

                    {project.externalLink && (
                      <motion.a
                        variants={itemVariants}
                        href={project.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-200 hover:text-gray-400 flex items-center gap-2 mt-2 text-sm"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span>{project.message}</span>
                        <FaExternalLinkAlt />
                      </motion.a>
                    )}

                    {project.Link && (
                      <motion.a
                        variants={itemVariants}
                        href="https://infobusiness-pc.vercel.app/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-200 hover:text-gray-400 flex items-center gap-2 mt-2 text-sm"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span>{project.Link}</span>
                        <Link size={14} />
                      </motion.a>
                    )}

                    <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech, i) => (
                        <motion.span
                          key={tech}
                          custom={i}
                          variants={techVariants}
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(156, 163, 175, 0.6)" }}
                          transition={{ duration: 0.2 }}
                          className="inline-block bg-gray-600/40 rounded-full px-2 py-1 text-xs sm:text-sm text-center"
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
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={10}
              slidesPerView={1}
              className="w-full"
            >
              {selectedProject.image.map((img, index) => (
                <SwiperSlide
                  key={`${selectedProject.id}-${index}`}
                  className="flex justify-center cursor-pointer"
                  onClick={() => setSelectedImage(img)}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Image
                      src={img}
                      alt={`${selectedProject.title} image ${index + 1}`}
                      width={600}
                      height={400}
                      className="w-full h-auto max-h-[400px] object-contain rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl"
                    />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            </motion.div>
          </AnimatePresence>

          {/* Indice de scroll sur mobile uniquement */}
          <AnimatePresence>
            {showScrollHint && selectedProject.image.length > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-center lg:hidden"
              >
                <motion.span
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="block text-sm text-white mb-1 bg-black/30 px-3 py-2 rounded-full backdrop-blur-sm"
                >
                  Faites défiler
                </motion.span>
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