"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type LineType = 'command' | 'output' | 'json' | 'blank' | 'link';

interface TerminalLine {
  id: number;
  type: LineType;
  text: string;
  href?: string;
  isCV?: boolean;
}

interface DisplayLine extends TerminalLine {
  displayText: string;
}

const PROMPT_FULL = 'diarra@portfolio:~$';
const PROMPT_SHORT = '~$';

const SCRIPT: TerminalLine[] = [
  { id: 1, type: 'command', text: 'whoami' },
  { id: 2, type: 'output', text: 'Diarra Konte — Développeur Fullstack' },
  { id: 3, type: 'blank', text: '' },
  { id: 4, type: 'command', text: 'cat status.json' },
  { id: 5, type: 'json', text: '{' },
  { id: 6, type: 'json', text: '  "statut": "Disponible pour alternance",' },
  { id: 7, type: 'json', text: '  "formation": "BUT Info → ESIEA Ingénieur",' },
  { id: 8, type: 'json', text: '  "rythme": "2 sem / 2 sem"' },
  { id: 9, type: 'json', text: '}' },
  { id: 10, type: 'blank', text: '' },
  { id: 11, type: 'command', text: './links.sh' },
  { id: 12, type: 'link', text: '[1] GitHub   github.com/diarrakonte', href: 'https://github.com/diarrakonte' },
  { id: 13, type: 'link', text: '[2] LinkedIn   linkedin.com/in/diarra', href: 'https://www.linkedin.com/in/diarra-konte-4a60762aa/' },
  { id: 14, type: 'link', text: '[3] CV       télécharger_cv.sh', isCV: true },
];

const sleep = (ms: number) => new Promise<void>(r => setTimeout(r, ms));

export default function Hero() {
  const [lines, setLines] = useState<DisplayLine[]>([]);
  const [done, setDone] = useState(false);
  const startedRef = useRef(false);
  const cancelledRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    cancelledRef.current = false;

    const run = async () => {
      await sleep(500);

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
            await sleep(42);
          }
          await sleep(280);
        } else if (line.type === 'blank') {
          setLines(prev => [...prev, { ...line, displayText: '' }]);
          await sleep(60);
        } else if (line.type === 'json') {
          await sleep(70);
          if (cancelledRef.current) return;
          setLines(prev => [...prev, { ...line, displayText: line.text }]);
        } else {
          await sleep(130);
          if (cancelledRef.current) return;
          setLines(prev => [...prev, { ...line, displayText: line.text }]);
        }
      }
      setDone(true);
    };

    run();

    return () => {
      cancelledRef.current = true;
      startedRef.current = false;
    };
  }, []);

  const downloadCV = () => {
    const a = document.createElement('a');
    a.href = '/CV_KONTE_Diarra_BUT_3_INFO.pdf';
    a.download = 'CV_KONTE_Diarra_BUT_3_INFO.pdf';
    a.click();
  };

  const renderLine = (line: DisplayLine, idx: number) => {
    const isLastVisible = idx === lines.length - 1;

    if (line.type === 'blank') return <div key={line.id} className="h-3" />;

    if (line.type === 'command') {
      return (
        <div key={line.id} className="flex items-baseline gap-2 mb-0.5 leading-6 flex-wrap">
          <span className="hidden sm:inline shrink-0" style={{ color: '#3fb950' }}>{PROMPT_FULL}</span>
          <span className="inline sm:hidden shrink-0" style={{ color: '#3fb950' }}>{PROMPT_SHORT}</span>
          <span style={{ color: '#e6edf3' }}>{line.displayText}</span>
          {isLastVisible && !done && <span className="terminal-cursor" />}
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

    if (line.type === 'json') {
      const text = line.displayText;
      const match = text.match(/^(\s*"[^"]+")(:)(.+)$/);
      if (match) {
        return (
          <div key={line.id} className="leading-5 pl-2">
            <span style={{ color: '#7ee8a2' }}>{match[1]}</span>
            <span style={{ color: '#e6edf3' }}>{match[2]}</span>
            <span style={{ color: '#ffa657' }}>{match[3]}</span>
          </div>
        );
      }
      return (
        <div key={line.id} className="leading-5 pl-2" style={{ color: '#8b949e' }}>
          {text}
        </div>
      );
    }

    if (line.type === 'link') {
      const spaceIdx = line.displayText.indexOf('   ');
      const label = spaceIdx > -1 ? line.displayText.slice(0, spaceIdx) : line.displayText;
      const value = spaceIdx > -1 ? line.displayText.slice(spaceIdx).trim() : '';

      if (line.isCV) {
        return (
          <div key={line.id} className="leading-6 pl-2 mb-0.5 flex items-baseline gap-1 flex-wrap">
            <span style={{ color: '#8b949e' }}>{label}</span>
            <button
              onClick={downloadCV}
              className="hover:underline transition-all text-left"
              style={{ color: '#58a6ff' }}
            >
              {value}
            </button>
          </div>
        );
      }
      return (
        <div key={line.id} className="leading-6 pl-2 mb-0.5 flex items-baseline gap-1 flex-wrap">
          <span style={{ color: '#8b949e' }}>{label}</span>
          <a
            href={line.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline transition-all"
            style={{ color: '#58a6ff' }}
          >
            {value}
          </a>
        </div>
      );
    }

    return null;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-3 sm:px-4 pt-11 py-12">
      <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-4 items-stretch">

        {/* Photo panel — desktop only */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="hidden lg:flex lg:w-72 shrink-0 rounded-lg overflow-hidden flex-col"
          style={{ border: '1px solid #30363d' }}
        >
          {/* Panel chrome */}
          <div
            className="flex items-center gap-2 px-3 py-2.5"
            style={{ background: '#21262d', borderBottom: '1px solid #30363d' }}
          >
            <span className="w-3 h-3 rounded-full shrink-0" style={{ background: '#ff5f57' }} />
            <span className="w-3 h-3 rounded-full shrink-0" style={{ background: '#febc2e' }} />
            <span className="w-3 h-3 rounded-full shrink-0" style={{ background: '#28c840' }} />
            <span className="font-mono text-[10px] sm:text-xs ml-1 truncate" style={{ color: '#e3b341' }}>
              PhotoCV2.png
            </span>
          </div>

          {/* Photo */}
          <div
            className="relative flex flex-col"
            style={{ background: '#0d1117' }}
          >
            <div className="relative w-full overflow-hidden">
              <Image
                src="/PhotoCV2.png"
                alt="Diarra Konte"
                width={400}
                height={500}
                priority
                className="w-full h-56 sm:h-72 lg:h-80 object-cover object-top"
              />
              {/* Gradient overlay at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-20"
                style={{
                  background: 'linear-gradient(to top, #0d1117 0%, transparent 100%)',
                }}
              />
            </div>

            {/* Info below photo */}
            <div className="px-4 pb-4 pt-2 font-mono">
              <p className="text-sm font-bold" style={{ color: '#e6edf3' }}>Diarra Konte</p>
              <p className="text-xs mt-0.5" style={{ color: '#3fb950' }}>Développeur Fullstack</p>
              <div className="mt-3 space-y-1">
                <p className="text-[10px] flex items-center gap-1.5" style={{ color: '#8b949e' }}>
                  <span style={{ color: '#58a6ff' }}>📍</span> Argenteuil, Île-de-France
                </p>
                <p className="text-[10px] flex items-center gap-1.5" style={{ color: '#8b949e' }}>
                  <span style={{ color: '#58a6ff' }}>🎓</span> IUT Sorbonne Paris Nord
                </p>
                <p className="text-[10px] flex items-center gap-1.5" style={{ color: '#8b949e' }}>
                  <span style={{ color: '#e3b341' }}>⚡</span> Open to work
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mobile identity badge — hidden on lg */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex lg:hidden items-center gap-4 px-4 py-3 rounded-lg"
          style={{ background: '#161b22', border: '1px solid #30363d' }}
        >
          <div className="w-16 h-16 rounded-md overflow-hidden shrink-0" style={{ border: '2px solid #3fb950' }}>
            <Image
              src="/PhotoCV2.png"
              alt="Diarra Konte"
              width={64}
              height={64}
              priority
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="font-mono min-w-0">
            <p className="text-sm font-bold truncate" style={{ color: '#e6edf3' }}>Diarra Konte</p>
            <p className="text-xs truncate mt-0.5" style={{ color: '#3fb950' }}>Développeur Fullstack</p>
            <p className="text-[11px] truncate mt-1" style={{ color: '#8b949e' }}>📍 Argenteuil · ⚡ Open to work</p>
          </div>
        </motion.div>

        {/* Terminal panel */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          className="flex-1 rounded-lg overflow-hidden"
          style={{ border: '1px solid #30363d' }}
        >
          {/* Window chrome */}
          <div
            className="flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3"
            style={{ background: '#21262d', borderBottom: '1px solid #30363d' }}
          >
            <span className="w-3 h-3 rounded-full shrink-0" style={{ background: '#ff5f57' }} />
            <span className="w-3 h-3 rounded-full shrink-0" style={{ background: '#febc2e' }} />
            <span className="w-3 h-3 rounded-full shrink-0" style={{ background: '#28c840' }} />
            <span className="flex-1 text-center font-mono text-[10px] sm:text-xs truncate" style={{ color: '#8b949e' }}>
              bash — diarra@portfolio: ~
            </span>
          </div>

          {/* Terminal body */}
          <div
            className="p-3 sm:p-6 font-mono text-[11px] sm:text-sm overflow-x-auto h-full"
            style={{
              background: '#0d1117',
              minHeight: '340px',
            }}
          >
            {lines.map(renderLine)}

            {done && (
              <div className="flex items-baseline gap-2 mt-2 leading-6">
                <span className="hidden sm:inline shrink-0" style={{ color: '#3fb950' }}>{PROMPT_FULL}</span>
                <span className="inline sm:hidden shrink-0" style={{ color: '#3fb950' }}>{PROMPT_SHORT}</span>
                <span className="terminal-cursor" />
              </div>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
