"use client";
import React, { useEffect } from 'react';
import { animate, useMotionValue, useMotionTemplate, motion } from 'framer-motion';
import { FiArrowDownRight } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const Hero = () => {
    const color = useMotionValue(COLORS[0]);
    const textColor = useMotionValue(COLORS[0]);

    useEffect(() => {
        const bgAnimation = animate(color, COLORS, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror"
        });

        const textAnimation = animate(textColor, COLORS, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror"
        });

        return () => {
            bgAnimation.stop();
            textAnimation.stop();
        };
    }, [color, textColor]);

    const backgroundIMG = useMotionTemplate`radial-gradient(170% 120% at 50% 100%, #000 30%, ${color})`;
    const textGradient = useMotionTemplate`linear-gradient(to right, ${textColor}, #FFFFFF)`;
    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

    return (
        <motion.section
            style={{ background: backgroundIMG }}
            className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200"
        >
            <div className="z-10 flex flex-col items-center text-center">
                {/* Photo de profil */}
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-8 rounded-full overflow-hidden w-32 h-32 sm:w-40 sm:h-40 border-4 border-white/20 shadow-xl"
                >
                    <Image
                        src="/Photmoi.jpg" // Mettez ici le chemin vers votre image dans /public/
                        alt="Diarra Konte - Photo de profil"
                        width={160}
                        height={160}
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Titre */}
                <motion.h1
                    style={{
                        backgroundImage: textGradient,
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent'
                    }}
                    className="text-6xl font-black"
                >
                    Je suis,
                </motion.h1>
                <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight text-transparent sm:text-3xl md:text-6xl">
                    Diarra Konte
                </h1>
                <span className="mb-1.5 inline-block rounded-full bg-gray-600/40 px-3 py-1.5 text-sm text-center">
                    Étudiant en Informatique, à la recherche d&apos;une
                    <motion.span
                        style={{
                            backgroundImage: textGradient,
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent'
                        }}
                        className='font-bold'
                    > alternance</motion.span>
                </span>
                <p className="my-6 max-w-xl text-center">
                    Étudiant de deuxième année en BUT Informatique à l&apos;IUT de la Sorbonne Paris Nord.
                </p>

                {/* Bouton CV */}
                <motion.button
                    style={{
                        border: border,
                        boxShadow: boxShadow,
                    }}
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.985 }}
                    className="flex w-fit items-center gap-2 rounded-full px-4 py-2"
                    onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/MONCV-ATS.pdf';
                        link.download = 'CV_Diarra_Konte.pdf';
                        link.click();
                    }}
                >
                    Télécharger mon CV
                    <FiArrowDownRight />
                </motion.button>

                {/* Réseaux sociaux */}
                <div className="mt-6 flex gap-6 text-3xl">
                    <a href="https://github.com/diarrakonte"  target="_blank" rel="noopener noreferrer" className='hover:text-gray-400 transition-colors'>
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/diarra-konte-4a60762aa/"  target="_blank" rel="noopener noreferrer" className='hover:text-gray-400 transition-colors'>
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </motion.section>
    );
};

export default Hero;