"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiPhp, SiMysql, SiPostgresql,
  SiFlutter, SiDart, SiDocker,
  SiTypescript, SiNextdotjs, SiTailwindcss,
  SiPython, SiGnubash,
} from 'react-icons/si';
import { FaReact, FaGithub, FaJava, FaGitAlt, FaNodeJs } from 'react-icons/fa';

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
  level: number;
  label: 'AVANCÉ' | 'INTERMÉDIAIRE' | 'NOTIONS';
}

interface Category {
  key: string;
  color: string;
  skills: Skill[];
}

const CATEGORIES: Category[] = [
  {
    key: 'frontend',
    color: '#61DAFB',
    skills: [
      { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff', level: 70, label: 'AVANCÉ' },
      { name: 'React', icon: FaReact, color: '#61DAFB', level: 70, label: 'AVANCÉ' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178c6', level: 65, label: 'AVANCÉ' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 75, label: 'AVANCÉ' },
    ],
  },
  {
    key: 'mobile',
    color: '#02569B',
    skills: [
      { name: 'Flutter', icon: SiFlutter, color: '#54C5F8', level: 60, label: 'INTERMÉDIAIRE' },
      { name: 'Dart', icon: SiDart, color: '#0175C2', level: 55, label: 'INTERMÉDIAIRE' },
    ],
  },
  {
    key: 'backend',
    color: '#68a063',
    skills: [
      { name: 'Python', icon: SiPython, color: '#3572A5', level: 60, label: 'INTERMÉDIAIRE' },
      { name: 'Node.js', icon: FaNodeJs, color: '#68a063', level: 50, label: 'INTERMÉDIAIRE' },
      { name: 'PHP', icon: SiPhp, color: '#777BB4', level: 50, label: 'INTERMÉDIAIRE' },
      { name: 'Java', icon: FaJava, color: '#007396', level: 55, label: 'INTERMÉDIAIRE' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', level: 55, label: 'INTERMÉDIAIRE' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1', level: 50, label: 'INTERMÉDIAIRE' },
    ],
  },
  {
    key: 'devops',
    color: '#2496ED',
    skills: [
      { name: 'Git', icon: FaGitAlt, color: '#F05032', level: 75, label: 'AVANCÉ' },
      { name: 'GitHub', icon: FaGithub, color: '#e6edf3', level: 80, label: 'AVANCÉ' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED', level: 45, label: 'INTERMÉDIAIRE' },
      { name: 'Bash', icon: SiGnubash, color: '#3fb950', level: 50, label: 'INTERMÉDIAIRE' },
    ],
  },
];

const LABEL_COLOR: Record<string, string> = {
  AVANCÉ: '#3fb950',
  INTERMÉDIAIRE: '#e3b341',
  NOTIONS: '#58a6ff',
};

const Skills = () => {
  const [selected, setSelected] = useState<Skill | null>(null);

  return (
    <section id="skills" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="font-mono text-xs mb-2" style={{ color: '#8b949e' }}>
            <span style={{ color: '#3fb950' }}>$</span> cat skills.json
          </p>
          <h2 className="text-4xl sm:text-6xl font-bold font-mono" style={{ color: '#e6edf3' }}>
            Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left — JSON view */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden"
            style={{ border: '1px solid #30363d' }}
          >
            <div
              className="flex items-center gap-2 px-4 py-2"
              style={{ background: '#161b22', borderBottom: '1px solid #30363d' }}
            >
              <span className="font-mono text-xs" style={{ color: '#e3b341' }}>
                skills.json
              </span>
            </div>
            <div className="p-3 sm:p-4 font-mono text-xs sm:text-sm overflow-x-auto" style={{ background: '#0d1117' }}>
              <p style={{ color: '#8b949e' }}>{'{'}</p>
              {CATEGORIES.map((cat, ci) => (
                <div key={cat.key} className="ml-4">
                  <span style={{ color: '#7ee8a2' }}>&quot;{cat.key}&quot;</span>
                  <span style={{ color: '#8b949e' }}>: [</span>
                  <div className="ml-4">
                    {cat.skills.map((skill, si) => {
                      const isSelected = selected?.name === skill.name;
                      return (
                        <motion.button
                          key={skill.name}
                          onClick={() => setSelected(isSelected ? null : skill)}
                          className="block w-full text-left px-2 py-0.5 rounded transition-colors duration-100"
                          style={{
                            background: isSelected ? '#161b22' : 'transparent',
                            color: isSelected ? '#e6edf3' : '#ffa657',
                          }}
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.1 }}
                        >
                          &quot;{skill.name}&quot;
                          {si < cat.skills.length - 1 ? ',' : ''}
                          {isSelected && (
                            <span style={{ color: '#3fb950' }}>{' // selected'}</span>
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                  <p style={{ color: '#8b949e' }}>
                    ]{ci < CATEGORIES.length - 1 ? ',' : ''}
                  </p>
                </div>
              ))}
              <p style={{ color: '#8b949e' }}>{'}'}</p>
            </div>
          </motion.div>

          {/* Right — Detail panel */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden"
            style={{ border: '1px solid #30363d', minHeight: '320px' }}
          >
            <div
              className="flex items-center gap-2 px-4 py-2"
              style={{ background: '#161b22', borderBottom: '1px solid #30363d' }}
            >
              <span className="font-mono text-xs" style={{ color: '#8b949e' }}>
                {selected ? `// ${selected.name}` : '// hover to inspect'}
              </span>
            </div>

            <div
              className="flex items-center justify-center p-4 sm:p-8 h-full"
              style={{ background: '#0d1117', minHeight: '280px' }}
            >
              <AnimatePresence mode="wait">
                {selected ? (
                  <motion.div
                    key={selected.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.18 }}
                    className="w-full"
                  >
                    {/* Icon + name */}
                    <div className="flex items-center gap-4 mb-8">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center"
                        style={{ background: '#161b22', border: '1px solid #30363d' }}
                      >
                        {React.createElement(selected.icon, {
                          className: 'w-7 h-7',
                          style: { color: selected.color },
                        })}
                      </div>
                      <div>
                        <h3
                          className="text-lg font-bold font-mono"
                          style={{ color: '#e6edf3' }}
                        >
                          {selected.name}
                        </h3>
                        <span
                          className="font-mono text-[10px] px-2 py-0.5 rounded"
                          style={{
                            background: `${LABEL_COLOR[selected.label]}18`,
                            color: LABEL_COLOR[selected.label],
                            border: `1px solid ${LABEL_COLOR[selected.label]}40`,
                          }}
                        >
                          {selected.label}
                        </span>
                      </div>
                    </div>

                    {/* Progress */}
                    <div
                      className="font-mono text-xs flex justify-between mb-2"
                      style={{ color: '#8b949e' }}
                    >
                      <span>maîtrise</span>
                      <span style={{ color: selected.color }}>{selected.level}%</span>
                    </div>
                    <div
                      className="w-full h-1.5 rounded-full overflow-hidden"
                      style={{ background: '#21262d' }}
                    >
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: selected.color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${selected.level}%` }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                      />
                    </div>

                    {/* ASCII bar */}
                    <p className="font-mono text-xs mt-3" style={{ color: '#30363d' }}>
                      {'▓'.repeat(Math.floor(selected.level / 10))}
                      {'░'.repeat(10 - Math.floor(selected.level / 10))}
                      {' '}{selected.level}%
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center font-mono"
                  >
                    <p className="text-3xl mb-3" style={{ color: '#30363d' }}>{'{ }'}</p>
                    <p className="text-xs" style={{ color: '#8b949e' }}>
                      Cliquez sur un skill pour voir les détails
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
