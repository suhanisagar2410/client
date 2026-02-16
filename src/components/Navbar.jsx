import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { NAV_LINKS } from '../utils/constants';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const activeSectionRef = useRef('');

  useEffect(() => {
    // Close mobile menu on page load
    setMobileMenuOpen(false);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = NAV_LINKS.map(link => link.href.slice(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            if (activeSectionRef.current !== section) {
              activeSectionRef.current = section;
              setActiveSection(section);
              window.history.replaceState(null, '', `#${section}`);
            }
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-slate-950/70 backdrop-blur-xl transition-all duration-300"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xs tracking-[0.4em] uppercase text-slate-300 hover:text-white transition-colors">
            Suhani Sagar
          </a>

          <div className="hidden md:flex items-center gap-8 text-xs">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`tracking-[0.25em] transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-slate-200 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            className="md:hidden mt-4 pb-4 space-y-2"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`block py-3 px-4 rounded-lg transition-all ${
                  activeSection === link.href.slice(1)
                    ? 'bg-white/10 text-white'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
                onClick={handleNavClick}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;