import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Trophy } from 'lucide-react';

const awards = [
  {
    title: 'OSCAR Scholarship (2025)',
    desc: 'Awarded by CSU East Bay for outstanding AI/ML education research.',
    icon: Award,
  },
  {
    title: 'MESA Hackathon Winner (2025)',
    desc: 'Built agentic AI integrated into Canvas LMS to personalize STEM education.',
    icon: Trophy,
  },
  {
    title: 'CSU East Bay Datathon (2024)',
    desc: '2nd Runner-Up out of 40+ teams for advanced data-driven problem solving.',
    icon: Trophy,
  },
];

const education = [
  {
    school: 'California State University, East Bay',
    degree: 'M.S., Computer Science',
    time: 'Aug 2024 - May 2026',
  },
  {
    school: 'Bikaner Technical University',
    degree: 'B.Tech, Computer Science (GPA: 8.07)',
    time: 'Aug 2019 - May 2023',
  },
];

export default function Awards() {
  return (
    <section id="awards" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_90%_100%,rgba(99,102,241,0.1),transparent)]" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Awards & Education</h2>
            <p className="text-white/60 mt-2">Recognitions and academic journey.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
            {awards.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 hover:bg-white/10 transition"
              >
                <div className="flex items-center gap-3">
                  <a.icon className="h-5 w-5 text-amber-300" />
                  <h3 className="text-sm font-medium">{a.title}</h3>
                </div>
                <p className="text-sm text-white/70 mt-2">{a.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
            <div className="flex items-center gap-3 mb-3">
              <GraduationCap className="h-5 w-5 text-cyan-300" />
              <h3 className="text-lg font-medium">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((e) => (
                <div key={e.school} className="rounded-xl bg-white/5 p-4">
                  <div className="font-medium">{e.school}</div>
                  <div className="text-sm text-white/80">{e.degree}</div>
                  <div className="text-xs text-white/60 mt-1">{e.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
