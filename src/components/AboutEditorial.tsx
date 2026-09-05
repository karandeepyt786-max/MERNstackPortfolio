import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, GraduationCap, Briefcase, Code2, Eye, CheckCircle2 } from 'lucide-react';

export default function AboutEditorial() {
  const [viewMode, setViewMode] = useState<'code' | 'visual'>('code');

  const timelineEvents = [
    {
      year: '2022 - PRESENT',
      title: 'FULL-STACK MERN ENGINEER',
      subtitle: 'Production Applications & Systems Architecture',
      description: 'Building end-to-end web applications with React, Node.js, Express, and MongoDB. Integrating secure JWT authentication, OAuth 2.0 PKCE, and payment gateways with automated webhooks.',
    },
    {
      year: '2021 - 2024',
      title: 'BACHELOR OF COMPUTER APPLICATIONS (BCA)',
      subtitle: 'Computer Science & Software Systems Foundation',
      description: 'Solid academic foundation in Data Structures, Algorithms, Relational Database Management Systems (RDBMS), Operating Systems, and Object-Oriented Programming principles.',
    },
    {
      year: '2020 - 2021',
      title: 'SELF-TAUGHT MERN ARCHITECTURE',
      subtitle: 'Modern JavaScript & Full-Stack Mastery',
      description: 'Mastered asynchronous JavaScript (ES6+), React component lifecycles, Node.js non-blocking I/O event loops, and MongoDB document indexing.',
    },
  ];

  const controllerSnippet = `// Production Controller: Microservice Order Dispatch
export const handleOrderCheckout = async (req: Request, res: Response) => {
  const { items, userId, paymentMethod } = req.body;

  // 1. Verify User & JWT Claim Token
  const user = await User.findById(userId);
  if (!user) return res.status(401).json({ error: "Unauthorized" });

  // 2. Execute Payment SDK Gateway Transaction
  const paymentOrder = await razorpay.orders.create({
    amount: items.reduce((acc: number, item: any) => acc + item.price, 0) * 100,
    currency: "INR",
    receipt: \`rcpt_\${Date.now()}\`
  });

  // 3. Atomically Commit Order Schema to MongoDB Cloud
  const newOrder = await Order.create({
    userId,
    items,
    status: "PAID",
    transactionId: paymentOrder.id
  });

  return res.status(200).json({ status: "SUCCESS", order: newOrder });
};`;

  return (
    <section id="about" className="relative py-28 max-w-7xl mx-auto px-6 border-b border-neutral-900">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 uppercase tracking-widest mb-3">
            <Terminal className="w-3.5 h-3.5 text-white" />
            <span>[ 03 // STORY & PHILOSOPHY ]</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tighter text-white">
            THE LOGIC & <span className="text-neutral-500">THE CODE.</span>
          </h2>
        </div>

        <p className="text-xs font-mono text-neutral-500 max-w-xs uppercase">
          BRIDGING COMPUTER SCIENCE ACADEMICS WITH MODERN FULL-STACK PRODUCTION CODE.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 items-start">
        {/* Left: Timeline (7 Cols) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="border-l border-neutral-800 ml-4 space-y-10 pl-6">
            {timelineEvents.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative group"
              >
                {/* Dot */}
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-white group-hover:bg-white transition-colors" />

                <div className="p-6 rounded-lg bg-black border border-neutral-900 space-y-2">
                  <div className="flex items-center justify-between font-mono text-xs text-neutral-500">
                    <span className="text-white font-bold">{item.year}</span>
                    <span>[ ENTRY 0{idx + 1} ]</span>
                  </div>

                  <h3 className="text-lg font-bold uppercase tracking-tight text-white">{item.title}</h3>
                  <div className="text-xs font-mono text-neutral-400">{item.subtitle}</div>
                  <p className="text-xs text-neutral-400 leading-relaxed font-normal pt-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Code Snippet vs Visual Result (5 Cols) */}
        <div className="lg:col-span-5">
          <div className="sticky top-28 p-6 rounded-lg bg-black border border-neutral-900 space-y-6">
            <div className="flex items-center justify-between border-b border-neutral-900 pb-4">
              <span className="font-mono text-xs text-neutral-500 uppercase flex items-center gap-2">
                <Code2 className="w-4 h-4 text-white" />
                <span>EXPRESS CONTROLLER</span>
              </span>

              <div className="flex items-center gap-1 p-1 bg-neutral-950 border border-neutral-800 rounded font-mono text-xs">
                <button
                  onClick={() => setViewMode('code')}
                  className={`px-2.5 py-1 rounded transition-all ${
                    viewMode === 'code' ? 'bg-white text-black font-bold' : 'text-neutral-400'
                  }`}
                >
                  RAW CODE
                </button>
                <button
                  onClick={() => setViewMode('visual')}
                  className={`px-2.5 py-1 rounded transition-all ${
                    viewMode === 'visual' ? 'bg-white text-black font-bold' : 'text-neutral-400'
                  }`}
                >
                  EXECUTION
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {viewMode === 'code' ? (
                <motion.div
                  key="code"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-4 rounded bg-neutral-950 border border-neutral-900 font-mono text-[11px] text-neutral-300 overflow-x-auto"
                >
                  <pre className="whitespace-pre">{controllerSnippet}</pre>
                </motion.div>
              ) : (
                <motion.div
                  key="visual"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-6 rounded bg-neutral-950 border border-neutral-900 text-center space-y-4 font-mono text-xs"
                >
                  <CheckCircle2 className="w-8 h-8 text-white mx-auto" />
                  <div className="text-white font-bold uppercase">ORDER DISPATCH COMMITTED</div>
                  <div className="text-neutral-400 text-[11px]">
                    MongoDB document created in 38ms. Payment token verified via Razorpay SDK.
                  </div>
                  <div className="p-3 bg-black border border-neutral-900 text-left text-[10px] text-neutral-400 space-y-1">
                    <div>HTTP STATUS: <strong className="text-white">200 OK</strong></div>
                    <div>TXN ID: <strong className="text-white">pay_N9x2kL80sQ</strong></div>
                    <div>LATENCY: <strong className="text-white">38ms</strong></div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
