import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, Rocket, Brain, Bot } from 'lucide-react';

const badges = [
  { icon: Rocket, label: 'RAG + Multi-Agent Systems' },
  { icon: Brain, label: 'LLMs & Adaptive Learning' },
  { icon: Bot, label: 'Prod AI Assistants on Azure/AWS' },
];

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.25),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-neutral-950" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-center">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end gap-6 md:gap-10"
          >
            <div>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
                Navdeep Singh
              </h1>
              <p className="mt-3 text-lg md:text-xl text-white/70 max-w-2xl">
                AI/ML Engineer specializing in LLMs, RAG, multi-agent systems, and scalable cloud deployments.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/70">
                <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Bay Area, CA</span>
                <a href="tel:5108267967" className="inline-flex items-center gap-2 hover:text-white transition-colors"><Phone className="h-4 w-4" /> 510-826-7967</a>
                <a href="mailto:navdeepsinghdhangar@gmail.com" className="inline-flex items-center gap-2 hover:text-white transition-colors"><Mail className="h-4 w-4" /> navdeepsinghdhangar@gmail.com</a>
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href="https://github.com/nvdpsingh"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors px-4 py-2"
                >
                  <Github className="h-5 w-5" /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/navdeep-singh-398494b3"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors px-4 py-2"
                >
                  <Linkedin className="h-5 w-5" /> LinkedIn
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 px-4 py-2 text-neutral-950 font-medium"
                >
                  View Projects
                </a>
              </div>
            </div>

            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:ml-auto"
            >
              {badges.map((b, i) => (
                <motion.li
                  key={b.label}
                  variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                >
                  <div className="flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur px-4 py-3">
                    <b.icon className="h-5 w-5 text-indigo-300" />
                    <span className="text-sm text-white/80">{b.label}</span>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
