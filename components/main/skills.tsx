"use client";
import React from 'react';
import { motion } from "framer-motion";
import {
    SiRedux, SiPhp, SiMysql, SiPostgresql,
    SiFlutter, SiDart, SiDocker,
    SiTypescript, SiNextdotjs, SiTailwindcss
} from "react-icons/si";
import { FaReact, FaGithub, FaJava, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// Configuration des catégories
const skillsCategories = [
    {
        title: "Frontend",
        skills: [
            { id: 1, name: "Next.js", icon: SiNextdotjs, color: "#ffffff", stars: 3.5 },
            { id: 2, name: "React", icon: FaReact, color: "#61DAFB", stars: 3.5 },
            { id: 3, name: "TypeScript", icon: SiTypescript, color: "#007ACC", stars: 3.5 },
            { id: 4, name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", stars: 3.5 }, // Correction nom
            { id: 5, name: "Redux", icon: SiRedux, color: "#764ABC", stars: 2.5 },
        ]
    },
    {
        title: "Mobile",
        skills: [
            { id: 6, name: "Flutter", icon: SiFlutter, color: "#02569B", stars: 3 },
            { id: 7, name: "Dart", icon: SiDart, color: "#0175C2", stars: 3 },
        ]
    },
    {
        title: "Backend",
        skills: [
            { id: 8, name: "Node.js", icon: FaNodeJs, color: "#FF0000", stars: 2.5 }, // Red for visibility on dark
            { id: 9, name: "PHP", icon: SiPhp, color: "#4F5B93", stars: 2.5 },
            { id: 10, name: "Java", icon: FaJava, color: "#007396", stars: 3 },
            { id: 11, name: "PostgreSQL", icon: SiPostgresql, color: "#336791", stars: 3 },
            { id: 12, name: "MySQL", icon: SiMysql, color: "#4479A1", stars: 2.5 },
        ]
    },
    {
        title: "Outils & DevOps",
        skills: [
            { id: 13, name: "Docker", icon: SiDocker, color: "#2496ED", stars: 2.5 },
            { id: 14, name: "Git", icon: FaGitAlt, color: "#F05032", stars: 3.5 },
            { id: 15, name: "GitHub", icon: FaGithub, color: "#ffffff", stars: 4 },
        ]
    }
];

// Composant de notation par étoiles
const StarRating = ({ stars, color }: { stars: number; color: string }) => {
    const starsArray = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= stars) {
            starsArray.push(<FaStar key={i} className="text-sm md:text-base" style={{ color }} />);
        } else if (i === Math.ceil(stars) && !Number.isInteger(stars)) {
            starsArray.push(<FaStarHalfAlt key={i} className="text-sm md:text-base" style={{ color }} />);
        } else {
            starsArray.push(<FaRegStar key={i} className="text-sm md:text-base" style={{ color }} />);
        }
    }

    return <div className="flex mt-2 gap-1">{starsArray}</div>;
};

interface Skill {
    id: number;
    name: string;
    icon: React.ComponentType<{ className: string; style: React.CSSProperties }>;
    color: string;
    stars: number;
}

const SkillItem = ({ skill }: { skill: Skill }) => {
    return (
        <motion.div
            className="flex flex-col items-center justify-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 relative group"
        >
            <div className="relative z-10 flex flex-col items-center">
                {React.createElement(skill.icon, {
                    className: "w-10 h-10 md:w-12 md:h-12 mb-3",
                    style: { color: skill.color },
                })}
                <p className="font-medium text-gray-200 text-sm md:text-base">{skill.name}</p>
            </div>

            {/* Overlay avec étoiles au survol */}
            <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 rounded-xl z-20"
            >
                <p className="text-xs text-gray-400 mb-1">Niveau</p>
                <StarRating stars={skill.stars} color={skill.color} />
            </motion.div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section className="py-20 px-4 relative z-20" id='skills'>
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <h2 className="text-4xl sm:text-6xl font-bold text-gray-400">Skills</h2>
                </motion.div>

                <div className="flex flex-col gap-12">
                    {skillsCategories.map((category, idx) => (
                        <motion.div
                            key={baseKey + idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h3 className="text-xl md:text-2xl font-semibold text-gray-300 border-l-4 border-purple-500 pl-4">
                                {category.title}
                            </h3>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                                {category.skills.map((skill) => (
                                    <SkillItem key={skill.id} skill={skill} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Helper constant for keys
const baseKey = "cat";

export default Skills;
