"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

type ContactLine = {
  id: number;
  type: 'command' | 'output' | 'item' | 'blank';
  text: string;
  href?: string;
  action?: () => void;
};

const sleep = (ms: number) => new Promise<void>(r => setTimeout(r, ms));

const Contact = () => {
  const [lines, setLines] = useState<(ContactLine & { displayText: string })[]>([]);
  const [done, setDone] = useState(false);
  const startedRef = useRef(false);
  const cancelledRef = useRef(false);
  const sectionRef = useRef<HTMLElement>(null);
  const hasTriggered = useRef(false);

  const SCRIPT: ContactLine[] = [
    { id: 1, type: 'command', text: 'ping diarra.dev' },
    { id: 2, type: 'output', text: 'PONG — Disponible pour alternance · Septembre 2026' },
    { id: 3, type: 'blank', text: '' },
    { id: 4, type: 'command', text: './connect.sh' },
    { id: 5, type: 'output', text: 'Choisissez un canal :' },
    { id: 6, type: 'blank', text: '' },
    { id: 7, type: 'item', text: '[1]  Email      diarrakontepro@gmail.com', href: 'mailto:diarrakontepro@gmail.com' },
    { id: 8, type: 'item', text: '[2]  Téléphone  +33 7 51 45 86 85', href: 'tel:+33751458685' },
    { id: 9, type: 'item', text: '[3]  GitHub     github.com/diarrakonte', href: 'https://github.com/diarrakonte' },
    { id: 10, type: 'item', text: '[4]  LinkedIn   linkedin.com/in/diarra-konte', href: 'https://www.linkedin.com/in/diarra-konte-4a60762aa/' },
    { id: 11, type: 'blank', text: '' },
    { id: 12, type: 'output', text: 'Localisation : Argenteuil, Île-de-France (75, 92, 93, 94, 95)' },
  ];

  const runAnimation = async () => {
    if (startedRef.current) return;
    startedRef.current = true;
    cancelledRef.current = false;

    await sleep(300);

    for (const line of SCRIPT) {
      if (cancelledRef.current) return;

      if (line.type === 'command') {
        setLines(prev => [...prev, { ...line, displayText: '' }]);
        await sleep(150);
        for (let i = 1; i <= line.text.length; i++) {
          if (cancelledRef.current) return;
          setLines(prev =>
            prev.map(l => l.id === line.id ? { ...l, displayText: line.text.slice(0, i) } : l)
          );
          await sleep(40);
        }
        await sleep(250);
      } else if (line.type === 'blank') {
        setLines(prev => [...prev, { ...line, displayText: '' }]);
        await sleep(60);
      } else {
        await sleep(100);
        if (cancelledRef.current) return;
        setLines(prev => [...prev, { ...line, displayText: line.text }]);
      }
    }
    setDone(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true;
          runAnimation();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      cancelledRef.current = true;
      startedRef.current = false;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const PROMPT_FULL = 'diarra@portfolio:~$';
  const PROMPT_SHORT = '~$';

  const renderLine = (line: ContactLine & { displayText: string }, idx: number) => {
    const isLast = idx === lines.length - 1;

    if (line.type === 'blank') return <div key={line.id} className="h-3" />;

    if (line.type === 'command') {
      return (
        <div key={line.id} className="flex items-baseline gap-2 mb-0.5 leading-6 flex-wrap">
          <span className="hidden sm:inline shrink-0" style={{ color: '#3fb950' }}>{PROMPT_FULL}</span>
          <span className="inline sm:hidden shrink-0" style={{ color: '#3fb950' }}>{PROMPT_SHORT}</span>
          <span style={{ color: '#e6edf3' }}>{line.displayText}</span>
          {isLast && !done && <span className="terminal-cursor" />}
        </div>
      );
    }

    if (line.type === 'output') {
      return (
        <div key={line.id} className="mb-0.5 leading-6 pl-2" style={{ color: '#8b949e' }}>
          {line.displayText}
        </div>
      );
    }

    if (line.type === 'item') {
      const spaceIdx = line.displayText.indexOf('  ');
      const label = spaceIdx > -1 ? line.displayText.slice(0, spaceIdx) : line.displayText;
      const value = spaceIdx > -1 ? line.displayText.slice(spaceIdx).trim() : '';

      return (
        <div key={line.id} className="leading-6 pl-2 mb-0.5 flex items-baseline gap-2 flex-wrap">
          <span style={{ color: '#8b949e' }}>{label}</span>
          {line.href ? (
            <a
              href={line.href}
              target={line.href.startsWith('http') ? '_blank' : undefined}
              rel={line.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="hover:underline transition-colors"
              style={{ color: '#58a6ff' }}
            >
              {value}
            </a>
          ) : (
            <span style={{ color: '#e6edf3' }}>{value}</span>
          )}
        </div>
      );
    }

    return null;
  };

  return (
    <motion.section
      id="contact"
      ref={sectionRef}
      className="py-24 px-4 min-h-screen flex items-center"
    >
      <div className="max-w-3xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="font-mono text-xs mb-2" style={{ color: '#8b949e' }}>
            <span style={{ color: '#3fb950' }}>$</span> ./contact.sh
          </p>
          <h2 className="text-4xl sm:text-6xl font-bold font-mono" style={{ color: '#e6edf3' }}>
            Contact
          </h2>
        </motion.div>

        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-lg overflow-hidden"
          style={{ border: '1px solid #30363d' }}
        >
          {/* Chrome */}
          <div
            className="flex items-center gap-2 px-4 py-3"
            style={{ background: '#21262d', borderBottom: '1px solid #30363d' }}
          >
            <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
            <span className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
            <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
            <span className="flex-1 text-center font-mono text-xs" style={{ color: '#8b949e' }}>
              bash — contact.sh
            </span>
          </div>

          {/* Body */}
          <div
            className="p-3 sm:p-6 font-mono text-[11px] sm:text-sm"
            style={{ background: '#0d1117', minHeight: '280px' }}
          >
            {lines.map(renderLine)}

            {done && (
              <div className="flex items-baseline gap-2 mt-3 leading-6">
                <span className="hidden sm:inline shrink-0" style={{ color: '#3fb950' }}>{PROMPT_FULL}</span>
                <span className="inline sm:hidden shrink-0" style={{ color: '#3fb950' }}>{PROMPT_SHORT}</span>
                <span className="terminal-cursor" />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
