"use client";

import { motion } from "motion/react";
import { ShieldAlert, BookOpen, Search, MonitorSmartphone, Key, QrCode, Lock, Globe, ServerCrash, Skull, ShieldCheck } from "lucide-react";

const studyTopics = [
  { name: "Ethical hacking fundamentals", icon: ShieldAlert },
  { name: "Network reconnaissance concepts", icon: Search },
  { name: "Payload delivery awareness", icon: ServerCrash },
  { name: "Mobile device security concepts", icon: MonitorSmartphone },
  { name: "Trojan-based attack awareness", icon: ShieldAlert },
  { name: "Password security & bypass awareness", icon: Key },
  { name: "QR-code phishing attacks", icon: QrCode },
  { name: "Social engineering techniques", icon: Lock },
  { name: "Command-and-control frameworks (e.g. Havoc)", icon: Globe },
  { name: "Threat actor methodologies", icon: Skull },
  { name: "Defensive cybersecurity strategies", icon: ShieldCheck },
];

export default function LearningJourney() {
  return (
    <section id="learning-journey" className="py-24 relative border-t border-slate-800/50 bg-[linear-gradient(to_bottom,theme(colors.slate.950),theme(colors.slate.900))]">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-emerald-500 font-bold text-xl">04.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Cybersecurity Learning Journey
            </h2>
            <div className="h-px bg-slate-800 flex-1 ml-4" />
          </div>
          <p className="mt-6 text-lg text-slate-400 max-w-3xl leading-relaxed">
            Outside of academic coursework, I regularly spend time watching cybersecurity and ethical hacking educational content on YouTube to expand my understanding of modern attack techniques and defensive security practices. This independent learning helps me understand how real-world threats work so I can better appreciate secure system design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
           <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
           >
              <h3 className="font-mono text-white text-xl mb-8 flex items-center gap-3 border-b border-slate-800 pb-4">
                <BookOpen className="w-6 h-6 text-emerald-500" />
                Active Study Topics
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                 {studyTopics.map((topic, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * (index % 5) }}
                      className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 transition-colors group flex items-start gap-3"
                    >
                      <div className="mt-0.5 opacity-50 group-hover:opacity-100 group-hover:text-emerald-400 transition-all">
                         <topic.icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-sm text-slate-300 leading-tight">
                        {topic.name}
                      </span>
                    </motion.div>
                 ))}
              </div>
           </motion.div>

           <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-center"
           >
              <div className="relative p-1 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden group">
                <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
                
                <div className="relative bg-slate-950 p-8 rounded-xl h-full flex flex-col justify-center">
                   <div className="w-16 h-16 rounded-full bg-emerald-950/50 border border-emerald-800/50 flex items-center justify-center mb-6">
                     <ShieldAlert className="w-8 h-8 text-emerald-500" />
                   </div>
                   <h4 className="text-2xl font-bold text-white mb-4">Educational Intent</h4>
                   <p className="text-slate-400 leading-relaxed">
                     <strong className="text-emerald-400 font-medium">My focus is on understanding these techniques for educational and defensive purposes only.</strong> The goal is to comprehend the adversary&apos;s mindset to better implement robust security architectures and mitigate modern vulnerabilities.
                   </p>
                </div>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
