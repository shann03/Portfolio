"use client";

import { motion } from "motion/react";
import { Terminal, Download, Github, Mail, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-cyan-600/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 font-mono text-xs text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              SYSTEMS & NETWORK ADMIN
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                Shann Errol <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Jongaya
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-slate-300 font-mono">
                &gt; Computer Engineering Student
                <br />
                &gt; Cybersecurity Learner
              </h2>
            </div>

            <p className="text-slate-400 max-w-lg leading-relaxed">
              A Computer Engineering student passionate about cybersecurity, network administration, cloud systems, and secure infrastructure.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#projects"
                className="px-6 py-3 font-mono text-sm font-semibold text-cyan-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] flex items-center gap-2"
              >
                <Terminal className="w-4 h-4" />
                View Projects
              </Link>
              <a
                href="#"
                className="px-6 py-3 font-mono text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
              <div className="flex items-center gap-2 ml-auto sm:ml-0">
                <a
                  href="https://github.com/shann03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800/50 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors text-slate-300 hover:text-cyan-400"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <Link
                  href="#contact"
                  className="p-3 bg-slate-800/50 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors text-slate-300 hover:text-cyan-400"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/50 flex flex-wrap gap-4 font-mono text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <span className="text-cyan-500">#</span> Network Security
              </span>
              <span className="flex items-center gap-1">
                <span className="text-cyan-500">#</span> AWS Cloud
              </span>
              <span className="flex items-center gap-1">
                <span className="text-cyan-500">#</span> Linux Admin
              </span>
              <span className="flex items-center gap-1">
                <span className="text-cyan-500">#</span> Cybersecurity
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-md mx-auto aspect-[3/4]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-3xl transform rotate-3 scale-105" />
            <div className="absolute inset-0 border border-slate-700/50 rounded-3xl transform -rotate-3" />
            <div className="relative w-full h-full rounded-3xl overflow-hidden glass border border-slate-700 p-2 bg-slate-900/80 backdrop-blur-sm flex flex-col">
              <div className="flex items-center gap-2 p-2 border-b border-slate-800">
                 <div className="flex gap-1.5">
                   <div className="w-3 h-3 rounded-full bg-red-500/80" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                   <div className="w-3 h-3 rounded-full bg-green-500/80" />
                 </div>
                 <div className="font-mono text-xs text-slate-500 mx-auto">profile.sh</div>
              </div>
              <div className="flex-1 relative bg-slate-950 rounded-b-xl overflow-hidden flex items-center justify-center group">
                 {/* Image Placeholder */}
                 <Image
                   src="/profile.jpg"
                   alt="Shann Errol J. Jongaya"
                   fill
                   className="object-cover"
                   referrerPolicy="no-referrer"
                   unoptimized={true}
                 />
                 <div className="absolute inset-0 border border-inset border-slate-800/50 rounded-b-xl pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
         <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest text-center">Scroll</span>
         <ChevronDown className="w-4 h-4 text-slate-500" />
      </div>
    </section>
  );
}
