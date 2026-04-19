'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { FaExternalLinkAlt, FaJava } from 'react-icons/fa';
import { SiNextdotjs, SiHtml5, SiPhp, SiReact, SiFlutter, SiPython } from 'react-icons/si';
import { Link } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string[];
  years: string;
  color: string;
  message: string;
  technologies: string[];
  externalLink?: string;
  demoLabel?: string;
  demoUrl?: string;
  icon?: React.ComponentType<{ className?: string }>;
};

const projet: Project[] = [
  {
    id: 1,
    title: 'Calculatrice Java (SAE 2.01)',
    description: 'Une calculatrice simple réalisée en Java dans le cadre d\'une SAE.',
    image: ['/Java.png', '/Java1.png', '/Java2.png'],
    years: 'Avril 2024',
    color: '#007396',
    message: 'Voir code GitHub',
    technologies: ['Java', 'Git', 'GitHub'],
    externalLink: 'https://github.com/DiarraKonte/SAE-Calculatrice',
    icon: FaJava,
  },
  {
    id: 2,
    title: 'Football Story',
    description: 'Site retraçant l\'histoire du football, ses grands joueurs et ses moments historiques. Projet personnel autour de ma passion.',
    image: ['/FS.png', '/FS2.png', '/FS3.png', '/FS4.png'],
    years: 'Juin 2024',
    color: '#33FF57',
    message: 'Voir le site',
    technologies: ['HTML', 'CSS', 'Git', 'GitHub'],
    externalLink: 'https://diarrakonte.github.io/FootballStory/',
    icon: SiHtml5,
  },
  {
    id: 3,
    title: 'Plateforme de discussion (SAE 3.01)',
    description: 'Application de messagerie et d\'annotation de messages en temps réel. Les utilisateurs commentent et classent des messages, les annotations sont collectées en BDD pour analyse.',
    image: ['/pingme.png', '/discussion.png', '/msg.png'],
    years: 'Octobre 2024 — Décembre 2024',
    color: '#58a6ff',
    message: 'Voir code GitHub',
    technologies: ['PHP', 'Node.js', 'WebSockets', 'Ratchet', 'MVC', 'MySQL', 'PostgreSQL', 'JavaScript'],
    externalLink: 'https://github.com/Cheick6/SAE_S1',
    icon: SiPhp,
  },
  {
    id: 4,
    title: 'Portfolio Next.js',
    description: 'Mon portfolio personnel, réalisé avec Next.js et Tailwind CSS. Il présente mes projets, mes compétences et mon parcours professionnel.',
    image: ['/Portfolio_Hero.png'],
    years: 'Mai 2025',
    color: '#3fb950',
    message: 'Voir code GitHub',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Next.js', 'TypeScript', 'Vercel'],
    externalLink: 'https://github.com/DiarraKonte/Portfolio-V2',
    icon: SiNextdotjs,
  },
  {
    id: 5,
    title: 'LumnPC',
    description: 'Site proposant des modules pour aider les débutants à choisir leur PC gaming, avec système de compte et paiement Stripe.',
    image: ['/lumn0.png', '/lumn0.5.png', '/Lumn1.png', '/Lumn2.png', '/Lumn3.png', '/Lumn4.png', '/Lumn5.png', '/Lumn6.png', '/LumnAccount.png'],
    years: 'Mai 2025',
    color: '#3fb950',
    message: 'Voir code GitHub',
    demoLabel: 'Voir le site',
    demoUrl: 'https://infobusiness-pc.vercel.app/',
    technologies: ['React', 'Next.js', 'TypeScript', 'Stripe', 'Firebase', 'Resend', 'Vercel', 'GoogleOAuth'],
    externalLink: 'https://github.com/DiarraKonte/Infobusiness-PC',
    icon: SiReact,
  },
  {
    id: 6,
    title: 'Repo Architect AI',
    description: 'Outil d\'audit logiciel automatisé avec IA locale. Pipeline ETL complet : extraction de métriques de code (LoC, extensions, volumétrie) via GitPython et analyse avec Pandas. LLM local Mistral 8B via Ollama pour détecter les risques d\'architecture — 100 % offline. Dashboard interactif Streamlit avec graphiques Seaborn / Matplotlib.',
    image: ['/repo_archi.png'],
    years: '2026',
    color: '#3572A5',
    message: 'Voir code GitHub',
    technologies: ['Python', 'Pandas', 'Streamlit', 'Ollama', 'GitPython', 'Seaborn', 'Matplotlib'],
    externalLink: 'https://github.com/DiarraKonte/Sante_Du_Code',
    icon: SiPython,
  },
  {
    id: 7,
    title: 'OtakuGO',
    description: 'Application mobile Flutter qui recommande des animes selon tes préférences.',
    image: ['/Otaku.png', '/Otaku1.png', '/Otaku2.png', '/Otaku3.png', '/Otaku4.png', '/Otaku5.png', '/Otaku6.png', '/Otaku7.png', '/Otaku8.png'],
    years: 'Octobre 2025 — Janvier 2026',
    color: '#e6d8ca',
    message: 'Voir le code GitHub',
    demoLabel: 'Voir la démo',
    demoUrl: 'https://diarrakonte.github.io/OtakuGO/',
    technologies: ['Flutter', 'Dart', 'GitHub Actions', 'Trello'],
    externalLink: 'https://github.com/DiarraKonte/OtakuGO',
    icon: SiFlutter,
  },
];

const TECH_COLORS: Record<string, string> = {
  React: '#61DAFB', TypeScript: '#3178c6', 'Next.js': '#ffffff', Flutter: '#54C5F8',
  Dart: '#0175C2', Java: '#007396', PHP: '#777BB4', 'Node.js': '#68a063',
  Git: '#F05032', GitHub: '#e6edf3', 'Tailwind CSS': '#06B6D4', Stripe: '#635BFF',
  Firebase: '#FFCA28', HTML: '#E34F26', CSS: '#1572B6',
  Python: '#3572A5', Pandas: '#150458', Streamlit: '#ff4b4b', Ollama: '#3fb950',
  GitPython: '#F05032', Seaborn: '#4c72b0', Matplotlib: '#11557c',
  default: '#58a6ff',
};
const techColor = (t: string) => TECH_COLORS[t] || TECH_COLORS.default;

const Projet = () => {
  const [selected, setSelected] = useState<Project>(projet[0]);
  const [transitioning, setTransitioning] = useState(false);
  const [zoomedImg, setZoomedImg] = useState<string | null>(null);

  const handleSelect = (p: Project) => {
    if (selected.id === p.id) return;
    setTransitioning(true);
    setTimeout(() => { setSelected(p); setTransitioning(false); }, 200);
  };

  return (
    <motion.section id="projects" className="py-16 sm:py-24 px-4 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="font-mono text-xs mb-2" style={{ color: '#8b949e' }}>
            <span style={{ color: '#3fb950' }}>$</span> gh repo list diarrakonte --limit 7
          </p>
          <h2 className="text-4xl sm:text-6xl font-bold font-mono" style={{ color: '#e6edf3' }}>
            Projets
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left — Repo / issue list */}
          <div>
            <div
              className="flex items-center gap-4 px-4 py-2 rounded-t-lg font-mono text-xs"
              style={{ background: '#161b22', border: '1px solid #30363d' }}
            >
              <span style={{ color: '#e6edf3' }}>
                ◉ <span className="font-semibold">{projet.length} Repos</span>
              </span>
            </div>

            <div style={{ border: '1px solid #30363d', borderTop: 'none' }}>
              {projet.map((p, idx) => {
                const isSelected = selected.id === p.id;
                return (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.07 }}
                  >
                    <button
                      onClick={() => handleSelect(p)}
                      className="w-full text-left transition-colors duration-150"
                      style={{
                        background: isSelected ? '#161b22' : 'transparent',
                        borderBottom: idx < projet.length - 1 ? '1px solid #21262d' : 'none',
                      }}
                    >
                      <div className="flex gap-3 px-3 sm:px-4 py-3 sm:py-4">
                        {/* Repo icon */}
                        <div
                          className="mt-0.5 shrink-0 w-5 h-5 flex items-center justify-center"
                          style={{ color: p.color }}
                        >
                          {p.icon && React.createElement(p.icon, { className: 'w-4 h-4' })}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-1.5">
                            <span
                              className="font-semibold text-sm"
                              style={{ color: isSelected ? '#58a6ff' : '#8b949e' }}
                            >
                              diarrakonte/
                              <span style={{ color: isSelected ? '#58a6ff' : '#e6edf3' }}>
                                {p.title}
                              </span>
                            </span>
                          </div>

                          <div className="flex flex-wrap gap-1 mb-2">
                            {p.technologies.slice(0, 4).map(t => (
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
                            {p.technologies.length > 4 && (
                              <span className="font-mono text-[10px]" style={{ color: '#8b949e' }}>
                                +{p.technologies.length - 4}
                              </span>
                            )}
                          </div>

                          <p className="font-mono text-xs" style={{ color: '#8b949e' }}>
                            {p.years}
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
                                {p.description}
                              </p>
                              <div className="flex flex-wrap gap-1.5 mb-3">
                                {p.technologies.map(t => (
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
                              <div className="flex gap-4 flex-wrap">
                                {p.externalLink && (
                                  <a
                                    href={p.externalLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 font-mono text-xs hover:underline"
                                    style={{ color: '#58a6ff' }}
                                  >
                                    <FaExternalLinkAlt size={10} />
                                    {p.message}
                                  </a>
                                )}
                                {p.demoLabel && p.demoUrl && (
                                  <a
                                    href={p.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 font-mono text-xs hover:underline"
                                    style={{ color: '#3fb950' }}
                                  >
                                    <Link size={10} />
                                    {p.demoLabel}
                                  </a>
                                )}
                              </div>
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
                <div
                  className="flex items-center gap-2 px-4 py-2 font-mono text-xs"
                  style={{ background: '#161b22', borderBottom: '1px solid #30363d' }}
                >
                  <span style={{ color: '#8b949e' }}>
                    📎 {selected.image.length} screenshot{selected.image.length > 1 ? 's' : ''}
                  </span>
                  <span style={{ color: '#30363d' }}>·</span>
                  <span style={{ color: selected.color }}>{selected.title}</span>
                </div>

                <div style={{ background: '#0d1117' }}>
                  <Swiper
                    modules={[Pagination, Navigation]}
                    pagination={{ clickable: true }}
                    navigation={{
                      prevEl: '.swiper-prev-proj',
                      nextEl: '.swiper-next-proj',
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

            {selected.image.length > 1 && (
              <>
                <button
                  className="swiper-prev-proj absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded flex items-center justify-center transition-colors"
                  style={{ background: '#161b22', border: '1px solid #30363d', color: '#8b949e' }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  className="swiper-next-proj absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded flex items-center justify-center transition-colors"
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

export default Projet;
