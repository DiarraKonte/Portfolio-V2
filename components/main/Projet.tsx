import React, { useEffect } from 'react';
import Image from 'next/image';
import { useMotionValue, motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaExternalLinkAlt } from "react-icons/fa";

// Mise à jour des chemins d'images avec des chemins relatifs
const projet = [
    {
        id: 2,
        year: 2023,
        place : "",
        title: "Portfolio next.js",
        description: "Mon portfolio personnel, réalisé avec Next.js et Tailwind CSS. Il présente mes projets, mes compétences et mon parcours professionnel.",
        image: ["/portfolio.png"],
        years: "Mai 2025 ",
        color: "#1dd396",
        message: "Voir code GitHub",
        technologies: ["React", "Tailwind CSS", "Framer Motion", "Next.js", "TypeScript", "Git", "GitHub"],
        externalLink: ''
    },
    {
        id: 3,
        place : "",
        year: 2023,
        title: "Football Story",
        description: "Un site retraçant l'histoire du football, ses grands joueurs et ses moments historiques. J'ai entrepris ce projet pour parler de ma passion pour le football.",
        image: ["/footballstory.png"],
        years: "Juin 2024 ",
        color: "#33FF57",
        message: "Voir le site",
        technologies: ["HTML", "CSS", "Git", "GitHub"],
        externalLink: "https://diarrakonte.github.io/FootballStory/",
    },
    {
        id: 4,
        year: 2023,
        place : "IUT Sorbonne Paris Nord",
        title: "Plateforme de discussion",
        description: "Développement, dans le cadre d'une SAE (Situation d’Apprentissage et d’Évaluation), d'une application de messagerie et d'annotation de messages en temps réel. Le projet consistait à permettre aux utilisateurs de commenter et classer des messages, puis à collecter les annotations dans une base de données pour analyse.",
        image: ["/pingme.png", "/discussion.png", "/msg.png"],
        years: "Octobre 2024 - Décembre 2024",
        color: "#1E67C6",
        message: "Voir code GitHub",
        technologies: ["Php", "Node.js", "WebSockets", "Ratchet", "MVC", "GitHub", "MySQL", "PostgreSQL", "XAMPP", "PhpMyAdmin", "JavaScript"],
        externalLink: "https://github.com/Cheick6/SAE_S1"
    }
];


const Projet = () => {
    const [selectedProject, setSelectedProject] = React.useState(projet[0]);
    const color = useMotionValue(selectedProject.color);

    useEffect(() => {
        color.set(selectedProject.color);
    }, [selectedProject, color]);

    const backgroundIMG = { background: `radial-gradient(140% 125% at 50% 0%, #000 40%, ${selectedProject.color} 100%)` };

    return (
        <motion.section style={backgroundIMG} id='projects' className='py-32 sm:py-32 md:py-32 sm:px-6 lg:px-28 text-white'>
            <div className='amx-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12'>
                <div>
                    <h2 className='text-6xl font-bold mb-10'><span className='text-gray-400'>Projets</span> </h2>
                    {projet.map((projet) => (
                        <div key={projet.id}
                             onClick={() => setSelectedProject(projet)}
                             className='cursor-pointer mb-8 group'>
                            <p className='text-gray-400 text-lg mb-2'>{projet.years}, <span className='font-bold'>{projet.place}</span></p>
                            <h3 className={`text-3xl font-semibold group-hover:text-gray-400 transition-colors 
                                        ${selectedProject.id === projet.id ? 'text-gray-200' : ''} duration-300`}>
                                {projet.title}
                            </h3>
                            {selectedProject.id === projet.id && (
                                <div className="border-b-2 border-gray-200 my-4"></div>
                            )}
                            {selectedProject.id === projet.id && (
                                <div className="text-gray-400 transition-all duration-500 ease-in-out">
                                    <p>{projet.description}</p>

                                    <a href={projet.externalLink} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-400 flex items-center gap-2">
                                        <span>{projet.message}</span>
                                        <FaExternalLinkAlt />
                                    </a>

                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {projet.technologies.map((tech) => (
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
                                height={500}
                                className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </motion.section>
    );
}

export default Projet;
