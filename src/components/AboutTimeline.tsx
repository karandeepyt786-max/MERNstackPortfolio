import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Code2, Eye, Terminal, CheckCircle2, UserCheck, MapPin } from 'lucide-react';

export default function AboutTimeline() {
  const [viewMode, setViewMode] = useState<'code' | 'visual'>('code');

  const timelineEvents = [
    {
      year: '2022 - Present',
      title: 'Full-Stack MERN Mastery & Independent Engineering',
      type: 'Engineering Journey',
      icon: Briefcase,
      color: '#4F46E5',
      description: 'Architecting scalable web applications, RESTful microservices, and client-side interfaces. Developed production e-commerce platforms with JWT/OAuth auth & payment SDK integrations.',
    },
    {
      year: '2021 - 2024',
      title: 'Bachelor of Computer Applications (BCA)',
      type: 'Academic Foundation',
      icon: GraduationCap,
      color: '#38BDF8',
      description: 'Gained solid ground in Data Structures, Algorithms, Database Management Systems (DBMS), Operating Systems, and Object-Oriented Programming (OOP).',
    },
    {
      year: '2020 - 2021',
      title: 'Web Architecture & Modern JavaScript Exploration',
      type: 'Self-Taught Mastery',
      icon: Award,
      color: '#10B981',
      description: 'Dived deep into asynchronous JavaScript (ES6+), React component lifecycles, Node.js event loops, and MongoDB document database design.',
    },
  ];

  const sampleCode = `// Express Controller: Product Order Processing Engine
export const processOrder = async (req, res) => {
  const { cartItems, userId, paymentToken } = req.body;
  
  // 1. Verify User Session & JWT Claim
  const user = await User.findById(userId);
  if (!user) return res.status(401).json({ error: 'Unauthorized' });

  // 2. Execute Payment Gateway Transaction
  const paymentResult = await razorpay.orders.create({
    amount: cartItems.reduce((acc, item) => acc + item.price, 0) * 100,
    currency: "INR",
    receipt: \`rcpt_\${Date.now()}\`
  });

  // 3. Atomically Commit Order to MongoDB Schema
  const order = await Order.create({
    userId,
    items: cartItems,
    paymentStatus: 'PAID',
    transactionId: paymentResult.id
  });

  return res.status(200).json({ status: 'SUCCESS', order });
};`;

  return (
    <section id="about" className="relative py-28 lg:py-36 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-white/10 font-mono text-xs text-emerald-terminal mb-4">
            <UserCheck className="w-3.5 h-3.5" /> 03 // THE LOGIC & THE CANVAS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-heading tracking-tight mb-4">
            Engineering Story & <span className="gradient-text-indigo">The Dual Code</span>
          </h2>
          <p className="text-muted text-sm sm:text-base leading-relaxed">
            Bridging rigorous BCA computer science fundamentals with modern self-taught MERN architecture. Toggle the code card to see raw logic transformed into visual reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Timeline Story (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-xl font-bold text-heading font-mono flex items-center gap-2 mb-6">
              <Terminal className="w-5 h-5 text-indigo-glow" /> // CARREER & ACADEMIC TIMELINE
            </h3>

            <div className="relative border-l border-white/10 ml-4 space-y-10 pl-6">
              {timelineEvents.map((evt, idx) => (
                <motion.div
                  key={evt.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div
                    className="absolute -left-[31px] top-1.5 w-6 h-6 rounded-full bg-surface border-2 flex items-center justify-center group-hover:scale-125 transition-transform"
                    style={{ borderColor: evt.color }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: evt.color }} />
                  </div>

                  <div className="hairline-card rounded-2xl p-6 hairline-card-hover">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono font-bold text-sky-accent">{evt.year}</span>
                      <span className="text-[10px] font-mono text-muted uppercase tracking-wider px-2 py-0.5 rounded bg-black/40 border border-white/5">
                        {evt.type}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-heading mb-2">{evt.title}</h4>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">{evt.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Code Snippet vs Visual Result Card (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 hairline-card rounded-2xl p-6 shadow-2xl overflow-hidden">
              {/* Card Header with View Switcher */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2 font-mono text-xs text-heading">
                  <Code2 className="w-4 h-4 text-indigo-glow" />
                  <span>LOGIC VS CANVAS</span>
                </div>

                <div className="flex items-center gap-1 p-1 bg-surface border border-white/10 rounded-xl font-mono text-xs">
                  <button
                    onClick={() => setViewMode('code')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg transition-all ${
                      viewMode === 'code'
                        ? 'bg-indigo-glow text-white font-bold'
                        : 'text-muted hover:text-heading'
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Raw Code View</span>
                  </button>
                  <button
                    onClick={() => setViewMode('visual')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg transition-all ${
                      viewMode === 'visual'
                        ? 'bg-emerald-terminal text-black font-bold'
                        : 'text-muted hover:text-heading'
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Visual Result</span>
                  </button>
                </div>
              </div>

              {/* View Content */}
              <AnimatePresence mode="wait">
                {viewMode === 'code' ? (
                  <motion.div
                    key="code"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl bg-black/80 border border-white/10 font-mono text-[11px] text-sky-accent/90 overflow-x-auto"
                  >
                    <pre className="whitespace-pre">{sampleCode}</pre>
                  </motion.div>
                ) : (
                  <motion.div
                    key="visual"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-6 rounded-xl bg-surface border border-indigo-glow/30 text-center space-y-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-terminal/20 text-emerald-terminal flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-heading font-mono">Order Successfully Processed</h4>
                    <p className="text-xs text-muted">
                      MongoDB document committed & Razorpay transaction verified in 34ms.
                    </p>
                    <div className="p-3 rounded-lg bg-black/40 border border-white/10 text-left font-mono text-[11px] space-y-1 text-muted">
                      <div>STATUS: <strong className="text-emerald-terminal">200 OK</strong></div>
                      <div>TXN ID: <strong className="text-sky-accent">pay_N9x2kL80sQ</strong></div>
                      <div>LATENCY: <strong className="text-indigo-glow">34ms</strong></div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
