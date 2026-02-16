import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="border-t border-white/10 py-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
          <p className="text-sm text-slate-400">© {currentYear} Suhani Sagar</p>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Designed & built with intention</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;