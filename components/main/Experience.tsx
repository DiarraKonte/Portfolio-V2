'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { FaExternalLinkAlt } from 'react-icons/fa';

type Experience = {
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
};

const experiences: Experience[] = [
  {
    id: 4,
    place: 'Nanterre – La Défense',
    title: 'Assistant Développeur — Stage IFFP',
    description:
      "Conception et déploiement d'un système de backup automatisé (scripts + Rclone) supprimant toute intervention manuelle sur les sauvegardes quotidiennes. Audit des logs serveur, diagnostic et correction de bugs récurrents. Mission en cours : intégration d'une API LLM pour automatiser des flux métiers internes.",
    image: ['/IFFP.png'],
    years: 'Avril 2026 — Juin 2026',
    color: '#58a6ff',
    message: '',
    technologies: ['Linux', 'Windows Server', 'Rclone', 'Python', 'WordPress', 'Google Apps Script', 'API LLM', 'Bash'],
    externalLink: '',
  },
  {
    id: 3,
    place: 'Issy-les-Moulineaux',
    title: 'Stage chez ReeWayy',
    description:
      "Développement de l'espace personnel des apprenants sur la plateforme AriMayi en tant que développeur front-end. Prise en charge d'une user story complète en collaboration avec l'équipe back-end. Méthodologie Agile.",
    image: ['/arimayi.png', '/dashboard.png', '/jobsearch.png', '/details.png', '/cv.png', '/cv2.png', '/cv3.png', '/validate.png', '/redirect.png'],
    years: 'Janvier 2025 — Mars 2025',
    color: '#3fb950',
    message: 'Voir code GitHub',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux', 'I18N', 'ANT Design', 'Git', 'GitHub', 'Swagger', 'Agile'],
    externalLink: 'https://github.com/DiarraKonte/AriMayi-US-720/tree/main',
  },
  {
    id: 2,
    place: 'Argenteuil',
    title: 'Livreur indépendant Uber Eats',
    description: 'Livraison de repas pour des particuliers via la plateforme Uber Eats.',
    image: ['/ubereats.jpg'],
    years: 'Avril 2022 — aujourd\'hui',
    color: '#3fb950',
    message: '',
    technologies: ['Gestion des commandes', 'Relation client', 'Autonomie', 'Organisation'],
    externalLink: '',
  },
  {
    id: 1,
    place: 'Seine-Saint-Denis',
    title: 'Assistant technicien électronique',
    description:
      'Stage technicien en électronique : diagnostic de matériel, relation client, support technique.',
    image: ['/besmart.png'],
    years: 'Juin 2023 — Août 2023',
    color: '#e3b341',
    message: '',
    technologies: ['Relation client', 'Électronique'],
    externalLink: '',
  },
];

const TECH_COLORS: Record<string, string> = {
  React: '#61DAFB', TypeScript: '#3178c6', 'Next.js': '#ffffff', Python: '#3572A5',
  Linux: '#3fb950', Docker: '#2496ED', Git: '#F05032', GitHub: '#e6edf3',
  'Tailwind CSS': '#06B6D4', Redux: '#764ABC', default: '#58a6ff',
};
const techColor = (t: string) => TECH_COLORS[t] || TECH_COLORS.default;

const Experience = () => {
  const [selected, setSelected] = useState(experiences[0]);
  const [transitioning, setTransitioning] = useState(false);
  const [zoomedImg, setZoomedImg] = useState<string | null>(null);

  const handleSelect = (exp: Experience) => {
    if (selected.id === exp.id) return;
    setTransitioning(true);
    setTimeout(() => { setSelected(exp); setTransitioning(false); }, 200);
  };

  return (
    <motion.section
      id="experience"
      className="py-16 sm:py-24 px-4 text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="font-mono text-xs mb-2" style={{ color: '#8b949e' }}>
            <span style={{ color: '#3fb950' }}>$</span> gh issue list --repo diarrakonte/career
          </p>
          <h2 className="text-4xl sm:text-6xl font-bold font-mono" style={{ color: '#e6edf3' }}>
            Expériences
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left — Issues list */}
          <div>
            {/* Issues header */}
            <div
              className="flex items-center gap-4 px-4 py-2 rounded-t-lg font-mono text-xs"
              style={{ background: '#161b22', border: '1px solid #30363d' }}
            >
              <span style={{ color: '#e6edf3' }}>
                ◉ <span className="font-semibold">{experiences.length} Open</span>
              </span>
              <span style={{ color: '#8b949e' }}>✓ 0 Closed</span>
            </div>

            {/* Issue items */}
            <div style={{ border: '1px solid #30363d', borderTop: 'none' }}>
              {experiences.map((exp, idx) => {
                const isSelected = selected.id === exp.id;
                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                  >
                    <button
                      onClick={() => handleSelect(exp)}
                      className="w-full text-left transition-colors duration-150"
                      style={{
                        background: isSelected ? '#161b22' : 'transparent',
                        borderBottom: idx < experiences.length - 1 ? '1px solid #21262d' : 'none',
                      }}
                    >
                      <div className="flex gap-3 px-3 sm:px-4 py-3 sm:py-4">
                        {/* Open indicator */}
                        <span
                          className="mt-0.5 shrink-0 text-base"
                          style={{ color: '#3fb950' }}
                        >
                          ◉
                        </span>

                        <div className="flex-1 min-w-0">
                          {/* Title + ID */}
                          <div className="flex items-center gap-2 flex-wrap mb-1.5">
                            <span
                              className="font-semibold text-sm"
                              style={{ color: isSelected ? '#e6edf3' : '#8b949e' }}
                            >
                              {exp.title}
                            </span>
                            <span className="font-mono text-xs" style={{ color: '#30363d' }}>
                              #{exp.id}
                            </span>
                          </div>

                          {/* Tech labels */}
                          <div className="flex flex-wrap gap-1 mb-2">
                            {exp.technologies.slice(0, 4).map(t => (
                              <span
                                key={t}
                                className="font-mono text-[10px] px-1.5 py-0.5 rounded-full"
                                style={{
                                  background: `${techColor(t)}15`,
                                  color: techColor(t),
                                  border: `1px solid ${techColor(t)}30`,
                                }}
                              >
                                {t}
                              </span>
                            ))}
                            {exp.technologies.length > 4 && (
                              <span className="font-mono text-[10px]" style={{ color: '#8b949e' }}>
                                +{exp.technologies.length - 4}
                              </span>
                            )}
                          </div>

                          {/* Meta */}
                          <p className="font-mono text-xs" style={{ color: '#8b949e' }}>
                            {exp.place} · {exp.years}
                          </p>
                        </div>
                      </div>

                      {/* Expanded body */}
                      <AnimatePresence mode="wait">
                        {isSelected && !transitioning && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.22 }}
                            className="overflow-hidden"
                          >
                            <div
                              className="mx-3 sm:mx-4 mb-4 p-3 sm:p-4 rounded-lg text-xs sm:text-sm"
                              style={{ background: '#0d1117', border: '1px solid #30363d' }}
                            >
                              <p className="leading-relaxed mb-3" style={{ color: '#8b949e' }}>
                                {exp.description}
                              </p>
                              {/* All tech labels */}
                              <div className="flex flex-wrap gap-1.5 mb-3">
                                {exp.technologies.map(t => (
                                  <span
                                    key={t}
                                    className="font-mono text-[10px] px-2 py-0.5 rounded-full"
                                    style={{
                                      background: `${techColor(t)}15`,
                                      color: techColor(t),
                                      border: `1px solid ${techColor(t)}30`,
                                    }}
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                              {exp.externalLink && (
                                <a
                                  href={exp.externalLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 font-mono text-xs hover:underline"
                                  style={{ color: '#58a6ff' }}
                                >
                                  <FaExternalLinkAlt size={10} />
                                  {exp.message}
                                </a>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right — Image carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={`carousel-${selected.id}`}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3 }}
                className="rounded-lg overflow-hidden"
                style={{ border: '1px solid #30363d' }}
              >
                {/* Attachment header */}
                <div
                  className="flex items-center gap-2 px-4 py-2 font-mono text-xs"
                  style={{ background: '#161b22', borderBottom: '1px solid #30363d' }}
                >
                  <span style={{ color: '#8b949e' }}>
                    📎 {selected.image.length} attachment{selected.image.length > 1 ? 's' : ''}
                  </span>
                  <span style={{ color: '#30363d' }}>·</span>
                  <span style={{ color: selected.color }}>#{selected.id} {selected.title}</span>
                </div>

                <div style={{ background: '#0d1117' }}>
                  <Swiper
                    modules={[Pagination, Navigation]}
                    pagination={{ clickable: true }}
                    navigation={{
                      prevEl: '.swiper-prev-exp',
                      nextEl: '.swiper-next-exp',
                    }}
                    spaceBetween={0}
                    slidesPerView={1}
                    className="w-full"
                  >
                    {selected.image.map((img, i) => (
                      <SwiperSlide key={`${selected.id}-${i}`}>
                        <div
                          className="relative w-full flex items-center justify-center p-4 cursor-zoom-in"
                          style={{ minHeight: '360px' }}
                          onClick={() => setZoomedImg(img)}
                        >
                          <Image
                            src={img}
                            alt={`${selected.title} — capture ${i + 1}`}
                            width={600}
                            height={400}
                            className="w-full h-auto max-h-[360px] object-contain rounded"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Nav arrows */}
            {selected.image.length > 1 && (
              <>
                <button
                  className="swiper-prev-exp absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded flex items-center justify-center transition-colors"
                  style={{ background: '#161b22', border: '1px solid #30363d', color: '#8b949e' }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  className="swiper-next-exp absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded flex items-center justify-center transition-colors"
                  style={{ background: '#161b22', border: '1px solid #30363d', color: '#8b949e' }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Zoom modal */}
      {zoomedImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 cursor-zoom-out"
          onClick={() => setZoomedImg(null)}
        >
          <Image
            src={zoomedImg}
            alt="Vue agrandie"
            width={1200}
            height={800}
            className="object-contain max-h-full max-w-full rounded-lg"
          />
        </div>
      )}
    </motion.section>
  );
};

export default Experience;
