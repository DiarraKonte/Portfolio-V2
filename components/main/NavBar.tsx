"use client";
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import { motion } from 'framer-motion';

const NavLinks = [
    { name: 'Accueil', link: '#hero' },
    { name: 'À propos', link: '#about' },
    { name: 'Parcours', link: '#parcours' },
    { name: 'Skills', link: '#skills' },
    { name: 'Experience', link: '#experience' },
    { name: 'Projets', link: '#projects' },
    { name: 'Contact', link: '#contact' }
];

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    const toggleNav = () => {
        setNav(!nav);
    };

    const closeNav = () => {
        setNav(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = NavLinks.map(link => link.link.substring(1));

            // Special handling for Contact - check if it's in viewport at all
            const contactElement = document.getElementById('contact');
            if (contactElement) {
                const rect = contactElement.getBoundingClientRect();
                const isContactVisible = rect.top < window.innerHeight / 2 && rect.bottom > 0;

                if (isContactVisible) {
                    setActiveSection('contact');
                    return;
                }
            }

            // Regular detection for other sections
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        handleScroll(); // Call once on mount
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='z-50 fixed flex justify-center w-full text-white font-semibold'>
            {/* Desktop Navigation */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="border border-white/5 bg-black/10 backdrop-blur-md mt-6 rounded-full
                        hidden md:flex items-center justify-between px-6 py-3 max-w-[850px] mx-auto shadow-lg"
            >
                <ul className='flex flex-row space-x-1'>
                    {NavLinks.map((link, index) => {
                        const sectionId = link.link.substring(1);
                        const isActive = activeSection === sectionId;

                        return (
                            <li key={index}>
                                <Link
                                    href={link.link}
                                    className={`relative px-4 py-2 rounded-full transition-all duration-300 ease-in-out block
                                        ${isActive
                                            ? 'text-white bg-white/5'
                                            : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                                        }`}
                                >
                                    {link.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeSection"
                                            className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full -z-10"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                onClick={toggleNav}
                className='md:hidden fixed top-6 right-6 z-50 p-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10'
            >
                {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </motion.div>

            {/* Mobile Menu */}
            <div className={`fixed left-0 top-0 w-full bg-black/95 backdrop-blur-xl transform transition-transform duration-300
                    ${nav ? 'translate-x-0' : '-translate-x-full'} md:hidden h-screen z-40`}>
                <ul className='flex flex-col items-center justify-center space-y-8 h-full'>
                    {NavLinks.map((link, index) => {
                        const sectionId = link.link.substring(1);
                        const isActive = activeSection === sectionId;

                        return (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: nav ? 1 : 0, x: nav ? 0 : -50 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    href={link.link}
                                    onClick={closeNav}
                                    className={`text-2xl transition-colors duration-300
                                        ${isActive ? 'text-white font-bold' : 'text-gray-400 hover:text-white'}`}
                                >
                                    {link.name}
                                </Link>
                            </motion.li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;