import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Cpu, Layout, Server, Database, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Project } from '../data/projects';

interface LayeredProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function LayeredProjectModal({ project, onClose }: LayeredProjectModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture'>('overview');

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-black border border-neutral-800 rounded-lg shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between p-6 border-b border-neutral-900 bg-neutral-950">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-neutral-500">[ PROJECT DETAILS // {project.index} ]</span>
              <span className="font-bold text-sm tracking-wider text-white uppercase">{project.title}</span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors interactive-hover"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Tabs & Body */}
          <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
            {/* Tab Switcher */}
            <div className="flex items-center gap-2 mb-8 border-b border-neutral-900 pb-4 font-mono text-xs">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeTab === 'overview'
                    ? 'bg-white text-black font-bold'
                    : 'text-neutral-400 hover:text-white bg-neutral-950 border border-neutral-800'
                }`}
              >
                [ OVERVIEW & PREVIEW ]
              </button>

              <button
                onClick={() => setActiveTab('architecture')}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeTab === 'architecture'
                    ? 'bg-white text-black font-bold'
                    : 'text-neutral-400 hover:text-white bg-neutral-950 border border-neutral-800'
                }`}
              >
                [ ENGINE & ARCHITECTURE ]
              </button>
            </div>

            {/* Content Area */}
            <AnimatePresence mode="wait">
              {activeTab === 'overview' ? (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="space-y-6"
                >
                  <div className="relative rounded-lg overflow-hidden border border-neutral-800 aspect-video bg-neutral-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="text-neutral-300 text-sm leading-relaxed font-normal">
                    {project.longDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded bg-neutral-950 border border-neutral-800 font-mono text-xs text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 pt-6 border-t border-neutral-900">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded bg-white text-black hover:bg-neutral-200 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all interactive-hover"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>LAUNCH LIVE APPLICATION</span>
                    </a>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded bg-neutral-950 text-white border border-neutral-800 hover:border-neutral-600 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all interactive-hover"
                      >
                        <Github className="w-4 h-4" />
                        <span>SOURCE REPOSITORY</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="architecture"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-6 font-mono text-xs"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Frontend */}
                    <div className="p-4 rounded bg-neutral-950 border border-neutral-900 space-y-2">
                      <div className="text-white font-bold flex items-center gap-2 border-b border-neutral-900 pb-2">
                        <Layout className="w-4 h-4 text-white" /> FRONTEND LAYER
                      </div>
                      <ul className="space-y-1.5 text-neutral-400">
                        {project.architecture.frontend.map((item, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Backend */}
                    <div className="p-4 rounded bg-neutral-950 border border-neutral-900 space-y-2">
                      <div className="text-white font-bold flex items-center gap-2 border-b border-neutral-900 pb-2">
                        <Server className="w-4 h-4 text-white" /> BACKEND LAYER
                      </div>
                      <ul className="space-y-1.5 text-neutral-400">
                        {project.architecture.backend.map((item, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Database */}
                    <div className="p-4 rounded bg-neutral-950 border border-neutral-900 space-y-2">
                      <div className="text-white font-bold flex items-center gap-2 border-b border-neutral-900 pb-2">
                        <Database className="w-4 h-4 text-white" /> DATABASE LAYER
                      </div>
                      <ul className="space-y-1.5 text-neutral-400">
                        {project.architecture.database.map((item, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Security */}
                    <div className="p-4 rounded bg-neutral-950 border border-neutral-900 space-y-2">
                      <div className="text-white font-bold flex items-center gap-2 border-b border-neutral-900 pb-2">
                        <ShieldCheck className="w-4 h-4 text-white" /> SECURITY & AUTH
                      </div>
                      <ul className="space-y-1.5 text-neutral-400">
                        {project.architecture.security.map((item, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {project.metrics && (
                    <div className="p-4 rounded bg-neutral-950 border border-neutral-800 grid grid-cols-3 gap-4 text-center">
                      {project.metrics.map((m, i) => (
                        <div key={i}>
                          <div className="text-neutral-500 text-[10px] uppercase">{m.label}</div>
                          <div className="text-white text-sm font-bold font-mono mt-1">{m.value}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
