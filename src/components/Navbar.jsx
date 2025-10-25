import React, { useEffect, useMemo, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'lab', label: 'AI Lab' },
  { id: 'experience', label: 'Experience' },
  { id: 'awards', label: 'Awards' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    handler();
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 }
    );

    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const indicator = useMemo(() => ({ key: active }), [active]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur bg-neutral-950/60 border-b border-white/10' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        <button onClick={() => scrollTo('home')} className="font-semibold tracking-tight text-white">Navdeep Singh</button>

        <div className="hidden md:flex items-center gap-1 relative">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className={`px-3 py-1.5 rounded-full text-sm transition-colors relative ${active === l.id ? 'text-white' : 'text-white/70 hover:text-white'}`}
            >
              {active === l.id && (
                <motion.span layoutId="active-pill" className="absolute inset-0 rounded-full bg-white/10" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />
              )}
              <span className="relative z-10">{l.label}</span>
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <a href="mailto:navdeepsinghdhangar@gmail.com" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition"><Mail className="h-4 w-4" /></a>
          <a href="https://github.com/nvdpsingh" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition"><Github className="h-4 w-4" /></a>
          <a href="https://linkedin.com/in/navdeep-singh-398494b3" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition"><Linkedin className="h-4 w-4" /></a>
        </div>

        <button className="md:hidden px-3 py-2 rounded-md bg-white/5" onClick={() => setOpen((v) => !v)}>
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <div className="h-0.5 w-6 bg-white" />
            <div className="h-0.5 w-6 bg-white/80" />
            <div className="h-0.5 w-6 bg-white/60" />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden border-t border-white/10 bg-neutral-950/90 backdrop-blur"
          >
            <div className="max-w-6xl mx-auto px-6 py-3 grid grid-cols-2 gap-2">
              {links.map((l) => (
                <button key={l.id} onClick={() => scrollTo(l.id)} className={`text-left px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 ${active === l.id ? 'ring-1 ring-white/20' : ''}`}>{l.label}</button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
