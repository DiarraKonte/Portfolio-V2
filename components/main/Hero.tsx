"use client";
import React, { useEffect } from 'react';
import { animate, useMotionValue, useMotionTemplate, motion } from 'framer-motion';
import { FiArrowDownRight } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

const COLORS = ["#13FFAA", "#1E67C6"];

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



    const textGradient = useMotionTemplate`linear-gradient(to right, ${textColor}, #FFFFFF)`;
    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

    return (
        <motion.section
            className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200"
        >

            <div className="z-10 flex flex-col items-center text-center">
                {/* Photo de profil */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="mb-8 rounded-full overflow-hidden w-32 h-32 sm:w-40 sm:h-40 border-4 border-white/10 shadow-2xl relative z-10"
                >
                    <Image
                        src="/PhotoCV2.png"
                        alt="Diarra Konte - Photo de profil"
                        width={160}
                        height={160}
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Titre */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-2"
                >
                    <h2 className="text-xl sm:text-2xl font-light">
                        <motion.span
                            style={{
                                backgroundImage: textGradient,
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent'
                            }}
                        >
                            Bonjour, je suis
                        </motion.span>
                    </h2>
                </motion.div>

                <h1 className="mb-4 text-5xl sm:text-7xl font-black tracking-tight">
                    <motion.span
                        style={{
                            backgroundImage: textGradient,
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent'
                        }}
                    >
                        Diarra Konte
                    </motion.span>
                </h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mb-6 h-1 w-24 bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-50"
                />

                <span className="mb-6 inline-block rounded-full bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 text-sm sm:text-base text-gray-300">
                    Étudiant en Informatique • À la recherche d&apos;une
                    <motion.span
                        style={{
                            backgroundImage: textGradient,
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent'
                        }}
                        className='font-bold ml-1'
                    >
                        alternance
                    </motion.span>
                </span>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mb-8 max-w-xl text-center text-gray-400 leading-relaxed"
                >
                    Troisième année de{' '}
                    <motion.span
                        style={{
                            backgroundImage: textGradient,
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent'
                        }}
                        className="font-semibold"
                    >
                        BUT Informatique
                    </motion.span>
                    {' '}à l&apos;IUT de la Sorbonne Paris Nord. J&apos;aime les nouvelles technologies, l&apos;
                    <motion.span
                        style={{
                            backgroundImage: textGradient,
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent'
                        }}
                        className="font-semibold"
                    >
                        intelligence artificielle
                    </motion.span>
                    , que je trouve fascinante et le{' '}
                    <motion.span
                        style={{
                            backgroundImage: textGradient,
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent'
                        }}
                        className="font-semibold"
                    >
                        développement web et mobile
                    </motion.span>
                    .
                </motion.p>

                {/* Boutons */}
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <motion.button
                        style={{
                            border: border,
                            boxShadow: boxShadow,
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex w-fit items-center gap-2 rounded-full px-6 py-3 bg-white/5 backdrop-blur-sm font-semibold transition-all hover:bg-white/10"
                        onClick={() => {
                            const link = document.createElement('a');
                            link.href = '/CV_KONTE_Diarra_BUT3_INFO.pdf';
                            link.download = 'CV_KONTE_Diarra_BUT3_INFO.pdf';
                            link.click();
                        }}
                    >
                        Télécharger mon CV
                        <FiArrowDownRight className="group-hover:translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </motion.button>

                    <div className="flex gap-4">
                        <motion.a
                            whileHover={{ y: -3, color: "#ffffff" }}
                            href="https://github.com/diarrakonte"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xl'
                        >
                            <FaGithub />
                        </motion.a>
                        <motion.a
                            whileHover={{ y: -3, color: "#0A66C2" }}
                            href="https://www.linkedin.com/in/diarra-konte-4a60762aa/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xl'
                        >
                            <FaLinkedin />
                        </motion.a>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Hero;