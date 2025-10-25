import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Bot, Layers, Rocket } from 'lucide-react';

const projects = [
  {
    title: 'Canvas LMS AI Integration',
    icon: Layers,
    points: [
      'AI-powered LMS to generate structured notes from lectures (slides, videos, PDFs).',
      'Context-aware Q&A chatbot and adaptive reinforcement learning mode for learning styles.',
      'MCP + DuckDuckGo integration to suggest external resources and fill knowledge gaps.',
    ],
  },
  {
    title: 'AskMeBot',
    icon: Bot,
    href: 'https://ask-me-bot.vercel.app/',
    points: [
      'Multi-LLM agent that switches between DeepSeek, Mistral, and LLaMA via Groq APIs.',
      'Persistent memory, PDF extraction, and web search for context-aware answers.',
    ],
  },
  {
    title: 'FiveM Car Recommender',
    icon: Rocket,
    points: [
      'Metadata-driven recommendation engine for modding with admin dashboard.',
      'TensorFlow/Keras embeddings, 85%+ top-3 accuracy with multi-input deep learning.',
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_90%_0%,rgba(34,211,238,0.1),transparent)]" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Highlighted Projects</h2>
            <p className="text-white/60 mt-2">Production-grade agents, RAG systems, and adaptive learning tools.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <p.icon className="h-6 w-6 text-fuchsia-300" />
                  <h3 className="text-lg font-medium">{p.title}</h3>
                </div>
                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
                  >
                    Live <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
              <ul className="mt-4 space-y-2">
                {p.points.map((pt) => (
                  <li key={pt} className="text-sm text-white/80 leading-relaxed">• {pt}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
