import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="relative py-8 px-6"
      style={{ borderTop: '1px solid #30363d' }}
    >
      <div className="max-w-7xl mx-auto font-mono">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Terminal exit message */}
          <div>
            <p className="text-xs mb-1" style={{ color: '#8b949e' }}>
              <span style={{ color: '#3fb950' }}>$</span> exit
            </p>
            <p className="text-xs" style={{ color: '#30363d' }}>
              Connection closed · © {new Date().getFullYear()} Diarra Konte
            </p>
            <p className="text-xs" style={{ color: '#30363d' }}>
              Built with Next.js · Tailwind CSS · Framer Motion
            </p>
          </div>

          {/* Social links */}
          <div className="flex gap-3">
            <a
              href="https://github.com/diarrakonte"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center gap-2 px-3 py-1.5 rounded text-xs transition-colors"
              style={{
                background: '#161b22',
                border: '1px solid #30363d',
                color: '#8b949e',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#e6edf3')}
              onMouseLeave={e => (e.currentTarget.style.color = '#8b949e')}
            >
              <FaGithub size={14} />
              <span>diarrakonte</span>
            </a>
            <a
              href="https://www.linkedin.com/in/diarra-konte-4a60762aa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-2 px-3 py-1.5 rounded text-xs transition-colors"
              style={{
                background: '#161b22',
                border: '1px solid #30363d',
                color: '#8b949e',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#58a6ff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#8b949e')}
            >
              <FaLinkedin size={14} />
              <span>diarra-konte</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
