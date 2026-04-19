"use client";
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import { motion } from 'framer-motion';

const NavLinks = [
  { file: 'hero.tsx', label: 'Accueil', link: '#hero', ext: 'tsx' },
  { file: 'about.md', label: 'À propos', link: '#about', ext: 'md' },
  { file: 'parcours.md', label: 'Parcours', link: '#parcours', ext: 'md' },
  { file: 'skills.json', label: 'Skills', link: '#skills', ext: 'json' },
  { file: 'experience.ts', label: 'Expérience', link: '#experience', ext: 'ts' },
  { file: 'projects.ts', label: 'Projets', link: '#projects', ext: 'ts' },
  { file: 'contact.sh', label: 'Contact', link: '#contact', ext: 'sh' },
];

const EXT_COLORS: Record<string, string> = {
  tsx: '#61DAFB',
  md: '#89d185',
  json: '#e3b341',
  ts: '#3178c6',
  sh: '#3fb950',
};

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = NavLinks.map(l => l.link.substring(1));
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        const r = contactEl.getBoundingClientRect();
        if (r.top < window.innerHeight / 2 && r.bottom > 0) {
          setActiveSection('contact');
          return;
        }
      }
      const scrollPos = window.scrollY + 200;
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(s);
          break;
        }
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="z-50 fixed top-0 left-0 right-0">
      {/* Desktop tab bar */}
      <motion.div
        initial={{ y: -44, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="hidden md:flex items-stretch h-11"
        style={{ background: '#161b22', borderBottom: '1px solid #30363d' }}
      >
        {/* Logo */}
        <div
          className="flex items-center gap-2 px-5 shrink-0"
          style={{ borderRight: '1px solid #30363d' }}
        >
          <span className="w-2 h-2 rounded-full" style={{ background: '#3fb950' }} />
          <span className="font-mono text-xs font-semibold" style={{ color: '#e6edf3' }}>
            diarra.dev
          </span>
        </div>

        {/* Tabs */}
        <div className="flex items-stretch overflow-x-auto">
          {NavLinks.map(link => {
            const sectionId = link.link.substring(1);
            const isActive = activeSection === sectionId;
            const color = EXT_COLORS[link.ext] || '#8b949e';

            return (
              <Link
                key={link.file}
                href={link.link}
                className="relative flex items-center gap-1.5 px-4 text-xs font-mono whitespace-nowrap transition-colors duration-150"
                style={{
                  borderRight: '1px solid #30363d',
                  background: isActive ? '#0d1117' : 'transparent',
                  color: isActive ? '#e6edf3' : '#8b949e',
                }}
              >
                <span className="text-[10px]" style={{ color }}>●</span>
                {link.file}
                {isActive && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px]"
                    style={{ background: '#3fb950' }}
                    transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </motion.div>

      {/* Mobile menu button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        onClick={() => setNav(!nav)}
        aria-label={nav ? 'Fermer le menu' : 'Ouvrir le menu'}
        className="md:hidden fixed top-3 right-4 z-50 p-2 rounded font-mono"
        style={{ background: '#161b22', border: '1px solid #30363d', color: '#e6edf3' }}
      >
        {nav ? <AiOutlineClose size={18} /> : <AiOutlineMenu size={18} />}
      </motion.button>

      {/* Mobile full-screen menu */}
      <motion.div
        initial={false}
        animate={{ opacity: nav ? 1 : 0, x: nav ? 0 : '-100%' }}
        transition={{ duration: 0.25 }}
        className="md:hidden fixed inset-0 z-40 flex flex-col font-mono"
        style={{ background: '#0d1117', pointerEvents: nav ? 'auto' : 'none' }}
      >
        <div
          className="flex items-center gap-3 px-6 pt-14 pb-4"
          style={{ borderBottom: '1px solid #30363d' }}
        >
          <span className="w-2 h-2 rounded-full" style={{ background: '#3fb950' }} />
          <span className="text-xs" style={{ color: '#8b949e' }}>
            diarra@portfolio:~$
          </span>
          <span className="text-xs" style={{ color: '#e6edf3' }}>ls -la</span>
        </div>
        <ul className="flex flex-col px-6 py-4 gap-0.5">
          {NavLinks.map((link, i) => {
            const sectionId = link.link.substring(1);
            const isActive = activeSection === sectionId;
            const color = EXT_COLORS[link.ext] || '#8b949e';
            return (
              <motion.li
                key={link.file}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: nav ? 1 : 0, x: nav ? 0 : -16 }}
                transition={{ delay: i * 0.04 }}
              >
                <Link
                  href={link.link}
                  onClick={() => setNav(false)}
                  className="flex items-center gap-3 py-2 text-sm"
                  style={{ color: isActive ? '#e6edf3' : '#8b949e' }}
                >
                  <span className="text-xs" style={{ color }}>●</span>
                  <span>./{link.file}</span>
                  {isActive && (
                    <span className="text-xs" style={{ color: '#3fb950' }}>← active</span>
                  )}
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
};

export default NavBar;
