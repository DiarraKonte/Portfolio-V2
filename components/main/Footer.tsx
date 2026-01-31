import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative py-12 mt-[-2px] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-4">
            <motion.a
              whileHover={{ y: -3, scale: 1.1 }}
              href="https://github.com/diarrakonte"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-colors text-xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, scale: 1.1 }}
              href="https://www.linkedin.com/in/diarra-konte-4a60762aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-blue-400 hover:border-blue-400/20 transition-colors text-xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </motion.a>
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Diarra Konte. Tous droits réservés.
            </p>
            <p className="text-xs text-gray-500 flex items-center gap-1 justify-center">
              Conçu avec Next.js et Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
