"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type ContentBlock =
  | { type: 'h1'; text: string }
  | { type: 'p'; text: string }
  | { type: 'blockquote'; text: string }
  | { type: 'stat'; key: string; value: string };

const files: { name: string; content: ContentBlock[] }[] = [
  {
    name: 'me.md',
    content: [
      { type: 'h1', text: 'À propos de moi' },
      {
        type: 'p',
        text: "J'étais initialement peu attiré par le **développement**. C'est en découvrant l'univers de l'**informatique**, des **nouvelles technologies** et de l'**intelligence artificielle** que ma passion s'est éveillée.",
      },
      {
        type: 'p',
        text: "Aujourd'hui en **3ème année de BUT Informatique** à l'**IUT Sorbonne Paris Nord**, je me spécialise dans la réalisation d'applications web et mobile.",
      },
      { type: 'stat', key: 'années d\'études', value: '3 ans en informatique' },
      { type: 'stat', key: 'spécialité', value: 'Réalisation d\'applications' },
    ],
  },
  {
    name: 'journey.md',
    content: [
      { type: 'h1', text: 'Mon Parcours' },
      {
        type: 'blockquote',
        text: "Ne venant pas d'un parcours informatique, mes premiers pas ont été difficiles.",
      },
      {
        type: 'p',
        text: "En **BUT 1**, je découvrais les **outils**, les **langages de programmation** et les **méthodes** de travail qui m'étaient totalement inconnus.",
      },
      {
        type: 'p',
        text: "C'est progressivement à travers les **projets scolaires (SAE)** et mes projets personnels que j'ai réalisé que l'informatique était un monde sans limite — et ça me **passionne**.",
      },
    ],
  },
  {
    name: 'goals.md',
    content: [
      { type: 'h1', text: 'Mon But' },
      {
        type: 'p',
        text: "Mon objectif est de toucher à tout : **front-end**, **back-end**, **mobile**, **IA**. Je veux avoir une vision large de ce que l'informatique peut offrir.",
      },
      { type: 'stat', key: 'technologies', value: '8+ maîtrisées' },
      { type: 'stat', key: 'frameworks', value: 'React, Next.js, Flutter' },
    ],
  },
  {
    name: 'ambitions.md',
    content: [
      { type: 'h1', text: 'Ambitions' },
      {
        type: 'p',
        text: "Après le BUT, je souhaite intégrer l'**ESIEA en cycle ingénieur**, puis me spécialiser davantage via un **master**.",
      },
      {
        type: 'p',
        text: "Mon objectif à long terme : devenir **développeur fullstack** pour créer ma propre **startup** ou travailler en tant que **freelance** sur des projets innovants.",
      },
      { type: 'stat', key: 'envie d\'apprendre', value: '∞' },
      { type: 'stat', key: 'motivation', value: '100%' },
    ],
  },
];

const renderBlock = (block: ContentBlock, idx: number) => {
  if (block.type === 'h1') {
    return (
      <div key={idx} className="mb-5">
        <span className="font-mono text-lg font-bold" style={{ color: '#3fb950' }}>
          #
        </span>{' '}
        <span className="font-mono text-lg font-bold" style={{ color: '#e6edf3' }}>
          {block.text}
        </span>
      </div>
    );
  }
  if (block.type === 'p') {
    const parts = block.text.split(/\*\*(.*?)\*\*/g);
    return (
      <p key={idx} className="mb-4 text-sm leading-7" style={{ color: '#8b949e' }}>
        {parts.map((p, i) =>
          i % 2 === 1 ? (
            <span key={i} className="font-semibold" style={{ color: '#e6edf3' }}>
              {p}
            </span>
          ) : (
            p
          )
        )}
      </p>
    );
  }
  if (block.type === 'blockquote') {
    return (
      <blockquote
        key={idx}
        className="pl-4 mb-4 text-sm italic"
        style={{ borderLeft: '3px solid #58a6ff', color: '#8b949e' }}
      >
        {block.text}
      </blockquote>
    );
  }
  if (block.type === 'stat') {
    return (
      <div key={idx} className="flex items-center gap-2 mb-2 font-mono text-xs">
        <span style={{ color: '#58a6ff' }}>&quot;{block.key}&quot;</span>
        <span style={{ color: '#30363d' }}>:</span>
        <span style={{ color: '#e3b341' }}>&quot;{block.value}&quot;</span>
      </div>
    );
  }
  return null;
};

const About = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="font-mono text-xs mb-2" style={{ color: '#8b949e' }}>
            <span style={{ color: '#3fb950' }}>~/portfolio</span>/about/
          </p>
          <h2 className="text-4xl sm:text-6xl font-bold font-mono" style={{ color: '#e6edf3' }}>
            À<span style={{ color: '#3fb950' }}>_</span>propos
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="rounded-lg overflow-hidden"
          style={{ border: '1px solid #30363d' }}
        >
          {/* Editor chrome */}
          <div
            className="flex items-center gap-2 px-4 py-2"
            style={{ background: '#161b22', borderBottom: '1px solid #30363d' }}
          >
            <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
            <span className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
            <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
            <span className="font-mono text-xs ml-2" style={{ color: '#8b949e' }}>
              about/{files[selected].name}
            </span>
          </div>

          {/* Mobile: horizontal tab bar */}
          <div
            className="flex md:hidden overflow-x-auto"
            style={{ borderBottom: '1px solid #30363d', background: '#161b22' }}
          >
            {files.map((f, i) => (
              <button
                key={f.name}
                onClick={() => setSelected(i)}
                className="shrink-0 px-4 py-2 font-mono text-xs transition-colors duration-150 whitespace-nowrap"
                style={{
                  color: selected === i ? '#e6edf3' : '#8b949e',
                  borderBottom: selected === i ? '2px solid #3fb950' : '2px solid transparent',
                  background: selected === i ? '#0d1117' : 'transparent',
                }}
              >
                {f.name}
              </button>
            ))}
          </div>

          <div className="flex" style={{ background: '#0d1117', minHeight: '320px' }}>
            {/* Desktop: file tree sidebar */}
            <div
              className="hidden md:block w-44 shrink-0 py-3"
              style={{ borderRight: '1px solid #30363d' }}
            >
              <p
                className="px-4 pb-2 font-mono text-xs uppercase tracking-widest"
                style={{ color: '#30363d' }}
              >
                EXPLORER
              </p>
              <div>
                <p className="px-4 py-1 font-mono text-xs" style={{ color: '#8b949e' }}>
                  📁 about/
                </p>
                {files.map((f, i) => (
                  <button
                    key={f.name}
                    onClick={() => setSelected(i)}
                    className="w-full text-left px-6 py-1.5 font-mono text-xs flex items-center gap-2 transition-colors duration-150"
                    style={{
                      background: selected === i ? '#1f2937' : 'transparent',
                      color: selected === i ? '#e6edf3' : '#8b949e',
                      borderRight: selected === i ? '2px solid #3fb950' : '2px solid transparent',
                    }}
                  >
                    <span>📄</span>
                    <span>{f.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.18 }}
                className="flex-1 flex gap-4 p-4 sm:p-6"
              >
                {/* Line numbers — desktop only */}
                <div
                  className="hidden sm:block font-mono text-xs text-right shrink-0 select-none leading-7 pt-[2px]"
                  style={{ color: '#30363d' }}
                >
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </div>
                {/* File content */}
                <div className="flex-1 pt-[2px] min-w-0">
                  {files[selected].content.map(renderBlock)}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
