import React from 'react';
import { motion } from 'framer-motion';
import { Award, School, Cloud, Layers } from 'lucide-react';

const experiences = [
  {
    org: 'California State University, East Bay',
    role: 'Research Assistant',
    time: 'Sep 2025 - Present • Hayward, CA',
    points: [
      'Research on LLMs, RAG, and Multi-Agent Systems for next-gen educational platforms.',
      'Built intelligent tutoring and contextual AI assistants for personalized, scalable learning.',
      'Awarded the OSCAR Scholarship (2025) for excellence in AI/ML education research.',
    ],
    icon: School,
  },
  {
    org: 'Oatmeal AI',
    role: 'AI/ML Engineer Intern',
    time: 'May 2025 - Present • Remote',
    points: [
      'Led development of Agent Charlie with sub-agent orchestration using Microsoft AutoGen.',
      'Reduced token and credit usage by 40% via context window optimization and efficient communication.',
      'Deployed Azure-based agents for plant nutrition, user data interaction, and cross-agent collaboration.',
    ],
    icon: Cloud,
  },
  {
    org: 'YoungGates',
    role: 'SDE Intern',
    time: 'Jun 2025 - Aug 2025 • Bay Area, CA',
    points: [
      'Designed transformer-based Q&A models surpassing GPT-3.5 by 18% with LoRA + quantization.',
      'Built scalable ONNX Runtime inference engine reducing latency for edge deployments.',
      'Deployed curriculum clustering using Siamese networks to boost content accuracy.',
    ],
    icon: Layers,
  },
  {
    org: 'LC Customs',
    role: 'AI Engineer',
    time: 'Jan 2022 - May 2024 • India',
    points: [
      'Developed TensorFlow-based recommendation system for personalized FiveM car mods.',
      'Achieved 85%+ top-3 accuracy with multi-input deep learning and Keras embeddings.',
      'Led 14-person 3D modeling team, increasing delivery efficiency by 70% via automation.',
    ],
    icon: Award,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_350px_at_50%_100%,rgba(251,146,60,0.08),transparent)]" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Experience</h2>
            <p className="text-white/60 mt-2">Research, internships, and leadership across AI engineering.</p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-white/10" />
          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.org}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start"
              >
                <div className={`order-2 sm:order-${idx % 2 === 0 ? '1' : '2'} sm:text-right`}>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                    <exp.icon className="h-4 w-4" />
                    {exp.time}
                  </div>
                </div>
                <div className={`order-1 sm:order-${idx % 2 === 0 ? '2' : '1'} relative`}> 
                  <div className="absolute -left-6 sm:left-[-1.125rem] top-2 h-3 w-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-amber-400 shadow-[0_0_24px_rgba(255,255,255,0.35)]" />
                  <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/10 transition">
                    <h3 className="text-xl font-medium">{exp.role} • <span className="text-white/80">{exp.org}</span></h3>
                    <ul className="mt-3 space-y-2">
                      {exp.points.map((p) => (
                        <li key={p} className="text-sm text-white/80 leading-relaxed">• {p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
