"use client";

import { motion } from "motion/react";
import { GraduationCap, Target, Briefcase, Network } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative border-t border-slate-800/50 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-cyan-500 font-bold text-xl">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              About Me
            </h2>
            <div className="h-px bg-slate-800 flex-1 ml-4" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-6 text-slate-400 leading-relaxed text-lg"
          >
            <p>
              I am currently a 3rd-year <strong className="text-cyan-400 font-normal">Computer Engineering</strong> student at Eastern Samar State University specializing in <strong className="text-slate-200 font-normal">Systems and Network Administration</strong>.
            </p>
            <p>
              I am continuously improving my knowledge in cybersecurity, cloud computing, and secure network systems through academic projects, certifications, and self-directed learning.
            </p>
            <p>
              My goal is to build a strong foundation in information security and eventually become a <strong className="text-white font-medium">Chief Information Security Officer (CISO)</strong>.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-8">
              <div className="p-5 rounded-2xl glass border border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-950/50 border border-cyan-800 flex items-center justify-center text-cyan-400 mb-4">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-mono text-white font-semibold">Education</h3>
                <p className="text-sm text-slate-400">BS Computer Engineering<br/>Eastern Samar State Univ.<br/>3rd Year</p>
              </div>
              <div className="p-5 rounded-2xl glass border border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-blue-950/50 border border-blue-800 flex items-center justify-center text-blue-400 mb-4">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-mono text-white font-semibold">Career Goal</h3>
                <p className="text-sm text-slate-400">Aspiring Cybersecurity Professional / Future CISO</p>
              </div>
            </div>
          </motion.div>

          {/* Side Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="p-6 rounded-2xl glass border border-slate-800 sticky top-28">
              <h3 className="font-mono text-white font-semibold mb-6 flex items-center gap-2">
                <Network className="w-5 h-5 text-cyan-500" />
                Technical Interests
              </h3>
              
              <ul className="space-y-4">
                {[
                  "Cybersecurity",
                  "Ethical Hacking",
                  "Network Monitoring",
                  "Cloud Security",
                  "Secure Infrastructure"
                ].map((interest, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                    <span className="text-slate-300 font-mono text-sm">{interest}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-slate-800/50">
                 <h3 className="font-mono text-white font-semibold flex items-center gap-2 mb-4">
                  <Briefcase className="w-5 h-5 text-cyan-500" />
                  Specialization
                 </h3>
                 <p className="text-sm text-slate-400 font-mono leading-relaxed bg-slate-900/50 p-4 rounded-lg border border-slate-800">
                    <span className="text-cyan-500">const</span> specialization = <span className="text-blue-400">&quot;Systems and Network Administration&quot;</span>;
                 </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
