import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import InteractiveLab from './components/InteractiveLab';
import Experience from './components/Experience';
import Awards from './components/Awards';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="lab"><InteractiveLab /></section>
        <section id="experience"><Experience /></section>
        <section id="awards"><Awards /></section>
        <section id="contact"><Contact /></section>
      </main>
      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Navdeep Singh. All rights reserved.</p>
          <div className="text-sm text-white/60">
            Built with React, Tailwind, Framer Motion, and Spline.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
