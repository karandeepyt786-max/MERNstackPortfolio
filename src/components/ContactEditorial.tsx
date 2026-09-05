import React, { useState } from 'react';
import { ArrowUpRight, Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactEditorial() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please complete all required fields.');
      return;
    }

    setSubmitted(true);
    toast.success('Message dispatched successfully! Karandeep will connect shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative py-28 max-w-7xl mx-auto px-6">
      {/* Section Header */}
      <div className="mb-16">
        <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 uppercase tracking-widest mb-3">
          <Mail className="w-3.5 h-3.5 text-white" />
          <span>[ 04 // CONTACT & DISPATCH ]</span>
        </div>
        <h2 className="text-3xl sm:text-6xl font-extrabold uppercase tracking-tighter text-white">
          LET'S WORK <span className="text-neutral-500">TOGETHER.</span>
        </h2>
      </div>

      {/* Large Expanding Underline Email CTA */}
      <div className="mb-20 text-center py-12 border-y border-neutral-900">
        <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block mb-4">
          // DIRECT DISPATCH EMAIL
        </span>
        <a
          href="mailto:karandeepyt786@gmail.com"
          className="hover-underline-expand text-2xl sm:text-5xl lg:text-6xl font-extrabold font-mono tracking-tighter text-white uppercase inline-block interactive-hover"
        >
          karandeepyt786@gmail.com
        </a>
      </div>

      {/* Grid: Details & Form */}
      <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">
        {/* Left: Contact Info (5 Cols) */}
        <div className="lg:col-span-5 space-y-6 font-mono text-xs">
          <div className="p-6 rounded-lg bg-black border border-neutral-900 space-y-6">
            <h3 className="font-bold text-sm uppercase text-white tracking-wider">[ DIRECT CONTACT METRICS ]</h3>

            <div className="space-y-4 text-neutral-400">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-white" />
                <span>LOCATION: Rauni, Ludhiana, Punjab, India</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white" />
                <a href="tel:+919779759526" className="hover:text-white transition-colors">
                  PHONE: +91 9779759526
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white" />
                <a href="mailto:karandeepyt786@gmail.com" className="hover:text-white transition-colors">
                  EMAIL: karandeepyt786@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Clean Contact Form (7 Cols) */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-lg bg-black border border-neutral-900 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block font-mono text-xs text-neutral-400 uppercase mb-2">
                  YOUR NAME *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jane Doe"
                  className="w-full px-4 py-3 rounded bg-neutral-950 border border-neutral-800 text-white font-mono text-xs focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-mono text-xs text-neutral-400 uppercase mb-2">
                  YOUR EMAIL *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jane@example.com"
                  className="w-full px-4 py-3 rounded bg-neutral-950 border border-neutral-800 text-white font-mono text-xs focus:outline-none focus:border-white transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block font-mono text-xs text-neutral-400 uppercase mb-2">
                SUBJECT
              </label>
              <input
                id="subject"
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Full-Stack Opportunity / Project Consultation"
                className="w-full px-4 py-3 rounded bg-neutral-950 border border-neutral-800 text-white font-mono text-xs focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-mono text-xs text-neutral-400 uppercase mb-2">
                MESSAGE *
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe your engineering goals or team requirements..."
                className="w-full px-4 py-3 rounded bg-neutral-950 border border-neutral-800 text-white font-mono text-xs focus:outline-none focus:border-white transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 rounded bg-white text-black hover:bg-neutral-200 font-mono text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all interactive-hover"
            >
              <Send className="w-3.5 h-3.5" />
              <span>DISPATCH MESSAGE</span>
            </button>
          </form>
        </div>
      </div>

      {/* Editorial Footer Row */}
      <footer className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-500">
        <div>© 2026 KARANDEEP SINGH. ALL RIGHTS RESERVED.</div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/karandeepyt786-max"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1 interactive-hover"
          >
            <span>GITHUB</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1 interactive-hover"
          >
            <span>LINKEDIN</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          <a
            href="mailto:karandeepyt786@gmail.com"
            className="hover:text-white transition-colors flex items-center gap-1 interactive-hover"
          >
            <span>EMAIL</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </footer>
    </section>
  );
}
