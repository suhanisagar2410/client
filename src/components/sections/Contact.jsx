import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { submitContactForm } from '../../utils/api';
import { SOCIAL_LINKS } from '../../utils/constants';

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 20%'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.7]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const response = await submitContactForm(formData);
      if (response.success) {
        setStatus({ type: 'success', message: 'Thanks for reaching out. I’ll respond within 24–48 hours.' });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus({ type: 'error', message: 'Something went wrong. Please email me directly.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section ref={ref} id="contact" className="section" style={{ scale, opacity }}>
      <div className="container">
        <motion.div
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">Contact</p>
          <h2 className="heading mt-4">Let’s build something remarkable.</h2>
          <p className="subheading mt-3 max-w-2xl">
            Tell me about your product, timeline, and the impact you’re after.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-300">
            <a href={`mailto:${SOCIAL_LINKS.email}`} className="hover:text-white">
              {SOCIAL_LINKS.email}
            </a>
            <span className="text-slate-600">•</span>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              LinkedIn
            </a>
            <span className="text-slate-600">•</span>
            <a href={SOCIAL_LINKS.github || '#'} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              GitHub
            </a>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className="glass-panel mt-10 w-full rounded-3xl p-8 text-left md:p-10"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 focus:border-white/30 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 focus:border-white/30 focus:outline-none"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Project details"
                required
                rows={5}
                className="md:col-span-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 focus:border-white/30 focus:outline-none"
              />
            </div>

            <div className="mt-6 flex flex-col items-center gap-3 text-center">
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-white/10 px-6 py-3 text-xs uppercase tracking-[0.3em] text-white transition-all duration-300 hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
              >
                {loading ? 'Sending…' : 'Send message'}
              </button>

              {status.message && (
                <p
                  className={`text-sm ${
                    status.type === 'success' ? 'text-slate-300' : 'text-rose-400'
                  }`}
                >
                  {status.message}
                </p>
              )}
            </div>
          </motion.form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;