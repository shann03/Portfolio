"use client";

import { motion } from "motion/react";
import { Mail, Github, Linkedin, Send, Terminal } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative border-t border-slate-800/50 bg-slate-950">
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-[radial-gradient(ellipse_at_bottom,var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950/0 to-slate-950/0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="font-mono text-cyan-500 font-bold text-lg mb-4 inline-block">06. What&apos;s Next?</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            I am currently open to new opportunities, internships, and collaborations. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="p-8 rounded-3xl glass border border-slate-800 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10 transform scale-150 group-hover:rotate-12 transition-transform duration-500">
                  <Terminal className="w-32 h-32 text-cyan-500" />
               </div>
               <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6">Connect with me</h3>
                  
                  <div className="space-y-6">
                    <a href="mailto:shann.jongaya@essu.edu.ph" className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors group/link">
                      <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center group-hover/link:border-cyan-500/50 group-hover/link:bg-cyan-950/30 transition-all">
                         <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-mono text-xs text-slate-500 mb-1 uppercase tracking-wider">Email</p>
                        <p className="font-medium">shann.jongaya@essu.edu.ph</p>
                      </div>
                    </a>

                    <a href="https://github.com/shannjongaya" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors group/link">
                      <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center group-hover/link:border-cyan-500/50 group-hover/link:bg-cyan-950/30 transition-all">
                         <Github className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-mono text-xs text-slate-500 mb-1 uppercase tracking-wider">GitHub</p>
                        <p className="font-medium">github.com/shannjongaya</p>
                      </div>
                    </a>

                    <a href="https://linkedin.com/in/shannjongaya" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors group/link">
                      <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center group-hover/link:border-cyan-500/50 group-hover/link:bg-cyan-950/30 transition-all">
                         <Linkedin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-mono text-xs text-slate-500 mb-1 uppercase tracking-wider">LinkedIn</p>
                        <p className="font-medium">linkedin.com/in/shannjongaya</p>
                      </div>
                    </a>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form className="p-8 rounded-3xl glass border border-slate-800 space-y-6" onSubmit={(e) => e.preventDefault()}>
               <div className="space-y-4">
                 <div>
                   <label htmlFor="name" className="block text-sm font-mono text-slate-400 mb-2">Name</label>
                   <input 
                     type="text" 
                     id="name" 
                     className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors font-mono text-sm"
                     placeholder="John Doe"
                   />
                 </div>
                 <div>
                   <label htmlFor="email" className="block text-sm font-mono text-slate-400 mb-2">Email</label>
                   <input 
                     type="email" 
                     id="email" 
                     className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors font-mono text-sm"
                     placeholder="john@example.com"
                   />
                 </div>
                 <div>
                   <label htmlFor="message" className="block text-sm font-mono text-slate-400 mb-2">Message</label>
                   <textarea 
                     id="message" 
                     rows={4}
                     className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors font-mono text-sm resize-none"
                     placeholder="Hello, I'd like to talk about..."
                   />
                 </div>
               </div>
               <button type="submit" className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-cyan-950 font-bold font-mono text-sm rounded-xl transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] flex items-center justify-center gap-2">
                 <Send className="w-4 h-4" />
                 Send Message
               </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 py-8 border-t border-slate-800/50 text-center relative z-10">
        <p className="font-mono text-xs text-slate-500">
          &copy; {new Date().getFullYear()} SHANN ERROL J. JONGAYA | Cybersecurity Portfolio
        </p>
      </footer>
    </section>
  );
}
