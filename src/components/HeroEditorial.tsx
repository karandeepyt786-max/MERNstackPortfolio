import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Terminal } from 'lucide-react';

export default function HeroEditorial() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 max-w-7xl mx-auto border-b border-neutral-900 overflow-hidden"
    >
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-grid-editorial opacity-25 pointer-events-none z-0" />

      {/* Top Telemetry / Header Badge */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-3 py-1.5 rounded-md bg-neutral-950 border border-neutral-800 text-xs font-mono text-neutral-400 mb-8"
        >
          <Terminal className="w-3.5 h-3.5 text-white" />
          <span>FULL-STACK MERN ARCHITECT // INDIA</span>
        </motion.div>
      </div>

      {/* Center Giant Editorial Headline with Text Mask Reveals */}
      <div className="relative z-10 my-auto py-12">
        <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block mb-4">
          // SPECIALIZING IN SCALABLE WEB SYSTEMS & AWWWARDS-GRADE UI
        </span>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] font-extrabold uppercase tracking-tighter leading-[0.85] text-white"
          >
            FULL-STACK <br />
            <span className="text-neutral-500">ENGINEER.</span>
          </motion.h1>
        </div>

        {/* Sub-headline & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 grid md:grid-cols-12 gap-8 items-end"
        >
          <p className="md:col-span-8 text-base sm:text-xl text-neutral-400 font-normal leading-relaxed max-w-3xl">
            Architecting production-grade MERN web applications with{' '}
            <strong className="text-white font-medium">Node.js</strong> &{' '}
            <strong className="text-white font-medium">MongoDB</strong> databases, paired with precision-engineered{' '}
            <strong className="text-white font-medium">React</strong> &{' '}
            <strong className="text-white font-medium">TypeScript</strong> interfaces.
          </p>

          <div className="md:col-span-4 flex flex-col items-start md:items-end gap-4">
            <a
              href="#works"
              className="group flex items-center gap-3 px-6 py-3 bg-white text-black hover:bg-neutral-200 font-mono text-xs font-bold uppercase tracking-widest rounded-md transition-all duration-200 interactive-hover"
            >
              <span>SELECTED WORKS</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer Info Row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="relative z-10 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-neutral-500"
      >
        <div className="flex items-center gap-6">
          <span>01 / MERN STACK</span>
          <span>02 / TYPESCRIPT</span>
          <span>03 / REST APIS</span>
        </div>

        <a
          href="#works"
          className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
        >
          <span className="uppercase tracking-widest">SCROLL DOWN</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-white" />
        </a>
      </motion.div>
    </section>
  );
}
