import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface TextRollLinkProps {
  href: string;
  label: string;
}

function TextRollLink({ href, label }: TextRollLinkProps) {
  return (
    <a
      href={href}
      className="relative inline-block overflow-hidden font-mono text-xs text-neutral-400 hover:text-white uppercase tracking-widest group px-1 py-1 interactive-hover"
    >
      <div className="relative overflow-hidden flex flex-col h-4">
        <span className="transform transition-transform duration-300 ease-out group-hover:-translate-y-full">
          {label}
        </span>
        <span className="absolute top-0 left-0 transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 text-white font-bold">
          {label}
        </span>
      </div>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'py-4 bg-black/90 backdrop-blur-md border-neutral-900 shadow-2xl'
          : 'py-6 bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Left: Brand Name */}
        <a href="#home" className="flex items-center gap-3 group interactive-hover">
          <span className="font-mono text-xs tracking-tighter text-neutral-500 group-hover:text-white transition-colors">
            [ 00 ]
          </span>
          <span className="font-bold text-sm tracking-widest text-white uppercase group-hover:underline">
            KARANDEEP SINGH
          </span>
        </a>

        {/* Center: Live Status Telemetry Badge (Desktop) */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-950 border border-neutral-800 font-mono text-[10px]">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse inline-block" />
          <span className="text-neutral-400">AVAILABLE FOR FREELANCE & FULL-STACK ROLES</span>
        </div>

        {/* Center/Right: Text Roll Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <TextRollLink href="#works" label="[ WORKS ]" />
          <TextRollLink href="#skills" label="[ SKILLS ]" />
          <TextRollLink href="#about" label="[ ABOUT ]" />
        </nav>

        {/* Right: CTA Button */}
        <a
          href="#contact"
          className="flex items-center gap-2 px-4 py-2 rounded-md bg-white text-black hover:bg-neutral-200 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 interactive-hover"
        >
          <span>GET IN TOUCH</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </header>
  );
}
