import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Brain, Gauge, Network } from 'lucide-react';

export default function InteractiveLab() {
  const [rag, setRag] = useState(true);
  const [agents, setAgents] = useState(true);
  const [opt, setOpt] = useState(true);
  const [context, setContext] = useState(6);

  const savings = useMemo(() => {
    const base = 100;
    let s = 0;
    if (opt) s += 28; // optimized context windows
    if (agents) s += 9; // efficient multi-agent comms
    if (rag) s += 6; // retrieval reduces hallucination / retries
    return Math.min(45, s);
  }, [rag, agents, opt]);

  return (
    <section id="lab" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_350px_at_10%_100%,rgba(168,85,247,0.1),transparent)]" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Interactive AI Lab</h2>
            <p className="text-white/60 mt-2">Toggle features to visualize agent orchestration, RAG flow, and cost savings.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Controls */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
            <div className="flex items-center gap-3 mb-4">
              <Network className="h-5 w-5 text-cyan-300" />
              <h3 className="text-lg font-medium">Controls</h3>
            </div>
            <div className="space-y-4">
              <label className="flex items-center justify-between gap-4">
                <span className="text-sm text-white/80">RAG (Retriever + Vector DB)</span>
                <button onClick={() => setRag((v) => !v)} className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${rag ? 'bg-fuchsia-500/70' : 'bg-white/10'}`}>
                  <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${rag ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </label>
              <label className="flex items-center justify-between gap-4">
                <span className="text-sm text-white/80">Multi-Agent Orchestration</span>
                <button onClick={() => setAgents((v) => !v)} className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${agents ? 'bg-indigo-500/70' : 'bg-white/10'}`}>
                  <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${agents ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </label>
              <label className="flex items-center justify-between gap-4">
                <span className="text-sm text-white/80">Optimization (LoRA/Quant/Prompt)</span>
                <button onClick={() => setOpt((v) => !v)} className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${opt ? 'bg-amber-500/70' : 'bg-white/10'}`}>
                  <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${opt ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </label>

              <div className="pt-2">
                <label className="text-sm text-white/80">Context Window (k tokens)</label>
                <input type="range" min={2} max={32} value={context} onChange={(e) => setContext(Number(e.target.value))} className="w-full accent-fuchsia-500" />
                <div className="text-xs text-white/60 mt-1">{context}k tokens</div>
              </div>
            </div>
          </div>

          {/* Graph */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
            <div className="flex items-center gap-3 mb-4">
              <Bot className="h-5 w-5 text-fuchsia-300" />
              <h3 className="text-lg font-medium">Agent Graph</h3>
            </div>
            <div className="relative h-72">
              {/* Nodes */}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="absolute left-6 top-8">
                <div className="px-3 py-1.5 rounded-md bg-white/10 text-sm">User</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="absolute right-6 top-8">
                <div className="px-3 py-1.5 rounded-md bg-white/10 text-sm">LLM</div>
              </motion.div>

              {agents && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute left-1/2 -translate-x-1/2 top-28 grid grid-cols-3 gap-3">
                  {['Planner','Retriever','ToolExec'].map((n,i) => (
                    <motion.div key={n} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.15 + i*0.05 }} className="px-3 py-1.5 rounded-md bg-white/10 text-xs">{n}</motion.div>
                  ))}
                </motion.div>
              )}

              {rag && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute left-6 bottom-8">
                  <div className="px-3 py-1.5 rounded-md bg-white/10 text-sm">Vector DB</div>
                </motion.div>
              )}

              {/* Edges */}
              <svg className="absolute inset-0" viewBox="0 0 600 300" preserveAspectRatio="none">
                {/* User -> LLM */}
                <motion.path d="M80 50 C 200 80, 400 80, 520 50" stroke="rgba(255,255,255,0.35)" strokeWidth="2" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2 }} />
                {/* User -> Agents */}
                {agents && (
                  <motion.path d="M80 50 C 200 120, 300 140, 300 160" stroke="rgba(168,85,247,0.6)" strokeWidth="2" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
                )}
                {/* Agents -> LLM */}
                {agents && (
                  <motion.path d="M300 160 C 300 120, 420 80, 520 50" stroke="rgba(168,85,247,0.6)" strokeWidth="2" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2 }} />
                )}
                {/* Agents -> Vector DB */}
                {agents && rag && (
                  <motion.path d="M300 160 C 260 200, 160 230, 80 250" stroke="rgba(34,211,238,0.6)" strokeWidth="2" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.4 }} />
                )}
              </svg>
            </div>
          </div>

          {/* Savings */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
            <div className="flex items-center gap-3 mb-4">
              <Gauge className="h-5 w-5 text-amber-300" />
              <h3 className="text-lg font-medium">Cost Optimization</h3>
            </div>
            <p className="text-sm text-white/70">Toggle strategies to see impact. Real-world results achieved: 40%+ token/credit reduction.</p>
            <div className="mt-6">
              <div className="h-2 w-full rounded-full bg-white/10">
                <motion.div className="h-2 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400" initial={{ width: 0 }} animate={{ width: `${savings}%` }} transition={{ type: 'spring', stiffness: 120, damping: 20 }} />
              </div>
              <div className="mt-2 text-sm">
                Estimated savings: <span className="font-medium">{savings}%</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-xs">
              <div className="rounded-lg bg-white/10 p-3">
                <div className="text-white/60">Context</div>
                <div className="text-white">{context}k</div>
              </div>
              <div className="rounded-lg bg-white/10 p-3">
                <div className="text-white/60">Agents</div>
                <div className="text-white">{agents ? 'On' : 'Off'}</div>
              </div>
              <div className="rounded-lg bg-white/10 p-3">
                <div className="text-white/60">RAG</div>
                <div className="text-white">{rag ? 'On' : 'Off'}</div>
              </div>
            </div>

            <motion.div className="mt-6 text-xs text-white/60" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              Tip: Lower context windows, compress chats, and batch tools to slash latency and spend.
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
