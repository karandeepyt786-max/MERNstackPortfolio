import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Layers } from 'lucide-react';
import { skillGroups } from '../data/skills';

export default function SkillsMatrix() {
  return (
    <section id="skills" className="relative py-28 max-w-7xl mx-auto px-6 border-b border-neutral-900">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 uppercase tracking-widest mb-3">
            <Cpu className="w-3.5 h-3.5 text-white" />
            <span>[ 02 // TECHNICAL MATRIX ]</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tighter text-white">
            THE STACK <span className="text-neutral-500">ENGINE.</span>
          </h2>
        </div>

        <p className="text-xs font-mono text-neutral-500 max-w-xs uppercase">
          HOVER OVER SKILL BADGES TO FLIP COLOR INVERSION FROM DARK CHARCOAL TO SOLID WHITE.
        </p>
      </div>

      {/* 2-Column Grid Layout */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-6 rounded-lg bg-black border border-neutral-900 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between border-b border-neutral-900 pb-4 mb-4">
                <span className="font-mono text-xs text-neutral-500">[ 0{idx + 1} ]</span>
                <h3 className="font-bold text-base uppercase tracking-tight text-white">{group.category}</h3>
              </div>

              <p className="text-xs font-mono text-neutral-400 leading-relaxed mb-6">
                {group.subtitle}
              </p>

              {/* Inverted Skill Badges */}
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="px-3.5 py-2 rounded bg-neutral-950 border border-neutral-800 text-neutral-400 hover:bg-white hover:text-black hover:border-white font-mono text-xs transition-all duration-200 cursor-pointer interactive-hover flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-black transition-colors" />
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-[10px] opacity-60">/ {skill.badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
