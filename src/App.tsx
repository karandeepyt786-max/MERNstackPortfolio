import React from 'react';
import { Toaster } from 'sonner';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import HeroEditorial from './components/HeroEditorial';
import SelectedWorks from './components/SelectedWorks';
import SkillsMatrix from './components/SkillsMatrix';
import AboutEditorial from './components/AboutEditorial';
import ContactEditorial from './components/ContactEditorial';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden selection:bg-white selection:text-black">
      {/* Top 1px Scroll Progress Line */}
      <ScrollProgress />

      {/* Custom Spring Physics Follower Cursor */}
      <CustomCursor />

      {/* Toast Notification Container */}
      <Toaster position="top-right" theme="dark" richColors />

      {/* Fixed Top Bar */}
      <Navbar />

      {/* Core Editorial Sections */}
      <main>
        {/* Hero Section */}
        <HeroEditorial />

        {/* Selected Works List (Row Focus Dimming & Floating Media Preview) */}
        <SelectedWorks />

        {/* Technical Skills Matrix (Inverted Pills) */}
        <SkillsMatrix />

        {/* About & Philosophy Story */}
        <AboutEditorial />

        {/* Contact & Footer */}
        <ContactEditorial />
      </main>
    </div>
  );
}
