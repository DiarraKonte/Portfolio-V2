"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const commits = [
  {
    hash: 'f1e9b3c',
    refs: [
      { label: 'HEAD → main', color: '#3fb950' },
      { label: 'ESIEA-ING', color: '#ffa657' },
    ],
    title: 'Cycle Ingénieur — ESIEA',
    place: 'ESIEA, Paris',
    period: '2026 – 2029',
    detail: 'Cycle Ingénieur en apprentissage. Rythme : 2 semaines entreprise / 2 semaines école.',
    badge: { text: 'À VENIR', color: '#ffa657' },
    dotColor: '#ffa657',
  },
  {
    hash: 'a3f2c1e',
    refs: [
      { label: 'BUT-INFO', color: '#58a6ff' },
    ],
    title: 'BUT Informatique',
    place: 'Université Sorbonne Paris Nord, Villetaneuse',
    period: '2023 – 2026',
    detail: 'Spécialité : Réalisation d\'applications web et mobile.',
    badge: { text: 'EN COURS', color: '#3fb950' },
    dotColor: '#bc8cff',
  },
  {
    hash: '7b8e4df',
    refs: [],
    title: 'Baccalauréat Scientifique',
    place: 'Lycée Julie-Victoire Daubié, Argenteuil',
    period: '2020 – 2023',
    detail: 'Spécialités : Mathématiques, Physique-Chimie. Mention Assez Bien.',
    badge: null,
    dotColor: '#58a6ff',
  },
  {
    hash: '2d9f1ae',
    refs: [],
    title: 'Brevet des Collèges',
    place: 'Collège Claude Monet, Argenteuil',
    period: '2015 – 2019',
    detail: 'Mention Très Bien.',
    badge: null,
    dotColor: '#e3b341',
  },
];

const Parcours = () => {
  const [expanded, setExpanded] = useState<string>('f1e9b3c');

  return (
    <section id="parcours" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="font-mono text-xs mb-2" style={{ color: '#8b949e' }}>
            <span style={{ color: '#3fb950' }}>$</span> git log --oneline --graph
          </p>
          <h2 className="text-4xl sm:text-6xl font-bold font-mono" style={{ color: '#e6edf3' }}>
            Parcours
          </h2>
        </motion.div>

        <div className="font-mono">
          {commits.map((commit, i) => {
            const isOpen = expanded === commit.hash;
            return (
              <motion.div
                key={commit.hash}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                {/* Commit row */}
                <button
                  onClick={() => setExpanded(isOpen ? '' : commit.hash)}
                  className="w-full text-left group"
                >
                  <div className="flex items-start gap-3 py-1.5">
                    {/* Graph column */}
                    <div className="flex flex-col items-center w-5 shrink-0 pt-1.5">
                      <span
                        className="w-3 h-3 rounded-full border-2 transition-all duration-200 group-hover:scale-110"
                        style={{
                          background: isOpen ? commit.dotColor : 'transparent',
                          borderColor: commit.dotColor,
                          boxShadow: isOpen ? `0 0 8px ${commit.dotColor}60` : 'none',
                        }}
                      />
                      {i < commits.length - 1 && (
                        <span
                          className="w-px mt-1"
                          style={{
                            height: isOpen ? '12px' : '28px',
                            background: '#30363d',
                            transition: 'height 0.25s',
                          }}
                        />
                      )}
                    </div>

                    {/* Commit info */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 flex-1 min-w-0 pt-0.5">
                      <span className="text-xs shrink-0" style={{ color: '#e3b341' }}>
                        {commit.hash}
                      </span>
                      {commit.refs.map(ref => (
                        <span
                          key={ref.label}
                          className="text-[10px] px-1.5 py-0.5 rounded"
                          style={{
                            background: `${ref.color}18`,
                            color: ref.color,
                            border: `1px solid ${ref.color}40`,
                          }}
                        >
                          {ref.label}
                        </span>
                      ))}
                      <span
                        className="text-sm font-semibold transition-colors"
                        style={{ color: isOpen ? '#e6edf3' : '#8b949e' }}
                      >
                        {commit.title}
                      </span>
                      {commit.badge && (
                        <span
                          className="text-[10px] px-2 py-0.5 rounded-full"
                          style={{
                            background: `${commit.badge.color}18`,
                            color: commit.badge.color,
                            border: `1px solid ${commit.badge.color}40`,
                          }}
                        >
                          {commit.badge.text}
                        </span>
                      )}
                    </div>
                  </div>
                </button>

                {/* git show panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.22 }}
                      className="overflow-hidden"
                    >
                      <div
                        className="ml-8 mb-4 p-3 sm:p-4 rounded-lg text-xs"
                        style={{
                          background: '#161b22',
                          border: '1px solid #30363d',
                        }}
                      >
                        <div className="mb-1.5">
                          <span style={{ color: '#8b949e' }}>commit </span>
                          <span style={{ color: '#e3b341' }}>{commit.hash}...</span>
                        </div>
                        <div className="mb-1.5">
                          <span style={{ color: '#8b949e' }}>Author: </span>
                          <span style={{ color: '#e6edf3' }}>Diarra Konte</span>
                        </div>
                        <div className="mb-3">
                          <span style={{ color: '#8b949e' }}>Date:   </span>
                          <span style={{ color: '#e6edf3' }}>{commit.period}</span>
                        </div>
                        <div
                          className="pl-4 border-l-2"
                          style={{ borderColor: commit.dotColor }}
                        >
                          <p
                            className="font-semibold mb-1"
                            style={{ color: '#e6edf3' }}
                          >
                            {commit.title}
                          </p>
                          <p className="mb-0.5" style={{ color: '#8b949e' }}>
                            {commit.place}
                          </p>
                          <p style={{ color: '#8b949e' }}>{commit.detail}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Parcours;
