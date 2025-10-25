import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Hero />
      <Skills />
      <Projects />
      <Experience />
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
