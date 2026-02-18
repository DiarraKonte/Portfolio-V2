"use client";

import React from "react";
import { motion } from "framer-motion";


const parcours = [
    {
        period: "2015 - 2019",
        title: "Brevet des Collèges",
        place: "Collège Claude Monet, Argenteuil",
        detail: "Obtention du brevet avec mention Très Bien.",
        color: "from-blue-400 to-blue-500",
        dot: "bg-blue-500",
    },
    {
        period: "2020 - 2023",
        title: "Baccalauréat Scientifique",
        place: "Lycée Julie-Victoire Daubié, Argenteuil",
        detail: "Spécialité : Mathématiques – Physique-Chimie. Mention Assez Bien.",
        color: "from-blue-500 to-cyan-400",
        dot: "bg-blue-500",
    },
    {
        period: "2023 - 2026",
        title: "BUT Informatique",
        place: "Université Sorbonne Paris Nord, Villetaneuse",
        detail: "Spécialité : Réalisation d'applications web et mobile",
        badge: "En cours",
        color: "from-purple-500 to-pink-500",
        dot: "bg-purple-500",
    },
];

const Parcours = () => {
    return (
        <section className="pt-4 pb-16 relative" id="parcours">
            <div className="max-w-7xl mx-auto px-4">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl sm:text-6xl font-bold mb-10"
                >
                    <span className="text-gray-400">Parcours</span>
                </motion.h2>

                {/* Horizontal Timeline */}
                <div className="relative flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-0">


                    {parcours.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="relative flex-1 flex flex-col items-center text-center px-4"
                        >

                            {/* Card */}
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 w-full max-w-sm hover:border-white/20 transition-all duration-300 group h-full min-h-[180px] flex flex-col justify-center">
                                <span className={`inline-block text-xs font-semibold tracking-wide bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}>
                                    {item.period}
                                </span>
                                {item.badge && (
                                    <span className="ml-2 text-[10px] font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30 px-2 py-0.5 rounded-full">
                                        {item.badge}
                                    </span>
                                )}
                                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-1">{item.place}</p>
                                <p className="text-gray-500 text-xs">{item.detail}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Parcours;