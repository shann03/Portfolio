"use client";

import { motion } from "motion/react";
import { FileCode2, GitBranch, Cpu, LockKeyhole, Server } from "lucide-react";

const processSteps = [
  {
    icon: LockKeyhole,
    title: "1. Problem & Risk Analysis",
    desc: "Identifying vulnerabilities and requirements for secure architecture.",
  },
  {
    icon: GitBranch,
    title: "2. Methodology",
    desc: "Planning the network topology, security policies, and deployment pipeline.",
  },
  {
    icon: Cpu,
    title: "3. Implementation",
    desc: "Configuring AWS components, Linux servers, and deploying monitoring tools.",
  },
  {
    icon: FileCode2,
    title: "4. Outcomes & Documentation",
    desc: "Generating reports, analyzing logs, and documenting lessons learned.",
  }
];

export default function TechnicalPortfolio() {
  return (
    <section id="portfolio" className="py-24 relative border-t border-slate-800/50 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-cyan-500 font-bold text-xl">03.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Technical Documentation
            </h2>
            <div className="h-px bg-slate-800 flex-1 ml-4" />
          </div>
          <p className="text-slate-400 max-w-2xl text-lg">
            A glimpse into my development process, architecture planning, and security implementation methodologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Process Flow */}
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl glass border border-slate-800 flex gap-4 group hover:border-cyan-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0 text-cyan-500 group-hover:bg-cyan-950/30 transition-colors">
                  <step.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Architecture Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl glass border border-slate-800 p-2 h-full min-h-[400px] flex flex-col"
          >
             <div className="flex items-center justify-between p-3 border-b border-slate-800/80">
                <div className="font-mono text-xs text-slate-500">aws-vpc-architecture.drawio</div>
             </div>
             <div className="flex-1 bg-slate-900/50 rounded-b-xl flex items-center justify-center relative overflow-hidden p-8">
                {/* Simulated Architecture Diagram Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]" />
                
                <div className="relative z-10 w-full max-w-sm aspect-video border-2 border-dashed border-cyan-500/30 rounded-xl flex items-center justify-center bg-cyan-950/10 backdrop-blur-sm group">
                   <div className="text-center group-hover:scale-105 transition-transform duration-500">
                     <Server className="w-12 h-12 text-cyan-500/50 mx-auto mb-2" />
                     <p className="font-mono text-cyan-400 text-sm">Architecture Diagram<br/>Coming Soon</p>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
