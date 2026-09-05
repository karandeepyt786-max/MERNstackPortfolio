import React, { useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import { ArrowUpRight, Layers } from 'lucide-react';
import { projects, Project } from '../data/projects';
import LayeredProjectModal from './LayeredProjectModal';

export default function SelectedWorks() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Mouse position spring physics for floating preview card
  const springConfig = { damping: 25, stiffness: 200 };
  const mouseX = useSpring(-200, springConfig);
  const mouseY = useSpring(-200, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX + 20);
    mouseY.set(e.clientY + 20);
  };

  const activeProject = projects.find((p) => p.id === hoveredId);

  return (
    <section
      id="works"
      onMouseMove={handleMouseMove}
      className="relative py-28 max-w-7xl mx-auto px-6 border-b border-neutral-900 overflow-hidden"
    >
      {/* Floating Image Preview Card Following Cursor */}
      {activeProject && (
        <motion.div
          style={{ x: mouseX, y: mouseY }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed top-0 left-0 z-[60] w-64 h-40 rounded-lg overflow-hidden border border-neutral-700 shadow-2xl pointer-events-none hidden md:block bg-black"
        >
          <img
            src={activeProject.image}
            alt={activeProject.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-2 left-3 right-3 font-mono text-[10px] text-white flex items-center justify-between">
            <span className="font-bold uppercase truncate">{activeProject.title}</span>
            <span className="text-neutral-400">[{activeProject.year}]</span>
          </div>
        </motion.div>
      )}

      {/* Section Header */}
      <div className="mb-16">
        <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 uppercase tracking-widest mb-3">
          <Layers className="w-3.5 h-3.5 text-white" />
          <span>[ 01 // SELECTED WORKS INDEX ]</span>
        </div>
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tighter text-white"
          >
            ARCHITECTURAL <span className="text-neutral-500">PROJECTS.</span>
          </motion.h2>
        </div>
      </div>

      {/* Interactive Project List Table */}
      <div className="space-y-0 divide-y divide-neutral-900 border-y border-neutral-900">
        {projects.map((project) => {
          const isHovered = hoveredId === project.id;
          const isAnotherHovered = hoveredId !== null && hoveredId !== project.id;

          return (
            <motion.div
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedProject(project)}
              className={`py-8 px-4 sm:px-6 transition-all duration-300 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6 interactive-hover ${
                isAnotherHovered ? 'opacity-20' : 'opacity-100'
              } ${isHovered ? 'bg-neutral-950/80' : 'bg-transparent'}`}
            >
              {/* Left Index & Title */}
              <div className="flex items-center gap-6 sm:gap-10">
                <span className="font-mono text-xs sm:text-sm text-neutral-500 font-bold">
                  [{project.index}]
                </span>

                <h3
                  className={`text-xl sm:text-3xl font-extrabold uppercase tracking-tight transition-transform duration-300 ${
                    isHovered ? 'translate-x-3 text-white' : 'text-neutral-200'
                  }`}
                >
                  {project.title}
                </h3>
              </div>

              {/* Center/Right: Stack Tags & Year */}
              <div className="flex items-center gap-6 sm:gap-10 justify-between md:justify-end">
                <div className="hidden sm:flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 rounded text-[10px] font-mono transition-colors ${
                        isHovered
                          ? 'bg-white text-black font-bold'
                          : 'bg-neutral-950 border border-neutral-800 text-neutral-400'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="font-mono text-xs text-neutral-500 font-bold">{project.year}</span>

                <div
                  className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                    isHovered
                      ? 'border-white bg-white text-black scale-110'
                      : 'border-neutral-800 text-neutral-500'
                  }`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Project Detail Modal Drawer */}
      <LayeredProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
