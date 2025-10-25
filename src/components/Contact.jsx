import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Portfolio Contact');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:navdeepsinghdhangar@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_350px_at_90%_20%,rgba(34,197,94,0.1),transparent)]" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Get In Touch</h2>
            <p className="text-white/60 mt-2">Let’s collaborate on agentic AI, RAG systems, or scalable deployments.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.form onSubmit={onSubmit} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm text-white/70">Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-fuchsia-500/50" />
              </div>
              <div>
                <label className="text-sm text-white/70">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-fuchsia-500/50" />
              </div>
              <div>
                <label className="text-sm text-white/70">Message</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} className="mt-1 w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-fuchsia-500/50" />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 text-neutral-950 font-medium px-4 py-2">
                <Send className="h-4 w-4" /> Send Email
              </button>
            </div>
          </motion.form>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="h-5 w-5 text-emerald-300" />
              <h3 className="text-lg font-medium">Quick Links</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <a href="mailto:navdeepsinghdhangar@gmail.com" className="group rounded-xl bg-white/10 hover:bg-white/20 p-4 transition flex items-center gap-2">
                <Mail className="h-4 w-4 group-hover:-translate-y-0.5 transition" /> Email
              </a>
              <a href="https://github.com/nvdpsingh" target="_blank" rel="noreferrer" className="group rounded-xl bg-white/10 hover:bg-white/20 p-4 transition flex items-center gap-2">
                <Github className="h-4 w-4 group-hover:-translate-y-0.5 transition" /> GitHub
              </a>
              <a href="https://linkedin.com/in/navdeep-singh-398494b3" target="_blank" rel="noreferrer" className="group rounded-xl bg-white/10 hover:bg-white/20 p-4 transition flex items-center gap-2">
                <Linkedin className="h-4 w-4 group-hover:-translate-y-0.5 transition" /> LinkedIn
              </a>
              <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }} className="group rounded-xl bg-white/10 hover:bg-white/20 p-4 transition flex items-center gap-2">
                <span className="h-4 w-4 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 group-hover:scale-110 transition" /> Projects
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
