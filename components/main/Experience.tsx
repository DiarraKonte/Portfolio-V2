import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useMotionValue, motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaExternalLinkAlt } from "react-icons/fa";

const experiences = [
    {
        id: 2,
        year: 2024,
        place : "Argenteuil",
        title: "Livreur independant Uber Eats",
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
      place : "Seine-Saint-Denis",
      title: "Assistant technicien electronique ",
      description: "Participation au développement de l'espace personnel des apprenants sur la plateforme AriMayi. Collaboration avec l'équipe back-end pour implémenter des fonctionnalités spécifiques et résoudre des problèmes complexes.",
      image: ["/besmart.png"],
      years: "Juin 2023 - Aout 2023",
      color: "#FFFF00",
      message: "",
      technologies: ["Relation client", "Electronique"],
      externalLink: ""
    },
    {
        id: 3,
        year: 2023,
        place : "Issy-les-Moulineaux",
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
        technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "I18N", "ANT design", "Git", "GitHub", "Swagger", "Méthodologie Agile"],
        externalLink: "https://github.com/DiarraKonte/AriMayi-US-720/tree/main",
    },
];


const Experience = () => {
    const [selectedProject, setSelectedProject] = useState(experiences[0]);
    const [showScrollHint, setShowScrollHint] = useState(true);
    const color = useMotionValue(selectedProject.color);
  
    useEffect(() => {
      color.set(selectedProject.color);
      setShowScrollHint(true);
      const timer = setTimeout(() => {
        setShowScrollHint(false);
      }, 3000);
      return () => clearTimeout(timer);
    }, [selectedProject, color]);
  
    const backgroundIMG = { 
      background: `radial-gradient(140% 125% at 50% 100%, #000 40%, ${selectedProject.color} 100%)`
    };
  
    return (
      <motion.section style={backgroundIMG} id='experience' className='py-32 sm:py-32 md:py-32 sm:px-6 lg:px-28 text-white'>
        <div className='amx-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12'>
          <div>
            <h2 className='text-6xl font-bold mb-10'>
              <span className='text-gray-400'>Expériences</span>
            </h2>
            
            {experiences.map((exp) => (
              <div key={exp.id} 
                   onClick={() => setSelectedProject(exp)}
                   className='cursor-pointer mb-8 group'>
                <p className='text-gray-400 text-lg mb-2'>{exp.years}, <span className='font-bold'>{exp.place}</span></p>
                <h3 className={`text-3xl font-semibold group-hover:text-gray-400 transition-colors 
                            ${selectedProject.id === exp.id ? 'text-gray-200' : ''} duration-300`}>
                  {exp.title}
                </h3>
                
                {selectedProject.id === exp.id && (
                  <div className="border-b-2 border-gray-200 my-4"></div>
                )}
                
                {selectedProject.id === exp.id && (
                  <div className="text-gray-400 transition-all duration-500 ease-in-out">
                    <p>{exp.description}</p>

                    {exp.externalLink && ( 
                      <a href={exp.externalLink} target="_blank" rel="noopener noreferrer"
                        className="text-gray-200 hover:text-gray-400 flex items-center gap-2 mt-2">
                        <span>{exp.message}</span>
                        <FaExternalLinkAlt />
                      </a>
                    )}
                     
                    <div className="flex flex-wrap gap-2 mt-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="inline-block bg-gray-600/40 rounded-full px-3 py-1.5 text-sm text-center mr-2 mb-2">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
  
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
            className="max-w-[800px] w-full"
          >
            {selectedProject.image.map((img, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <Image
                  src={img}
                  alt={`${selectedProject.title} image ${index + 1}`}
                  width={800}
                  height={800}
                  className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          
          {showScrollHint && selectedProject.image.length > 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-center lg:hidden"
            >
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="block text-sm text-white mb-1"
              >
                Faites défiler
              </motion.span>
            </motion.div>
          )}
        </div>
      </motion.section>
    );
};

export default Experience;
