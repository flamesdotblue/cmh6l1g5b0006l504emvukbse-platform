import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers, Cloud, BookOpen } from 'lucide-react';

const skillGroups = [
  {
    title: 'Languages',
    icon: Cpu,
    items: ['Python', 'C++', 'Java', 'SQL', 'JavaScript', 'HTML/CSS'],
  },
  {
    title: 'Frameworks',
    icon: Layers,
    items: ['FastAPI', 'Flask', 'React', 'TensorFlow', 'PyTorch', 'Hugging Face', 'LangChain', 'AutoGen'],
  },
  {
    title: 'Developer Tools',
    icon: Cloud,
    items: ['Git', 'Azure', 'AWS', 'Docker', 'Kubernetes', 'ONNX Runtime', 'VS Code'],
  },
  {
    title: 'Libraries',
    icon: BookOpen,
    items: ['pandas', 'NumPy', 'scikit-learn', 'Matplotlib', 'PyMuPDF', 'MCP'],
  },
];

export default function Skills() {
  return (
    <section className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_0%,rgba(124,58,237,0.1),transparent)]" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Technical Skills</h2>
            <p className="text-white/60 mt-2">Tools and technologies I use to build production-grade AI systems.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:translate-y-[-2px] transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <group.icon className="h-6 w-6 text-indigo-300" />
                <h3 className="text-lg font-medium">{group.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-white/80 bg-white/10 px-3 py-1.5 rounded-full hover:bg-white/20 transition">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
