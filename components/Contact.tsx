"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Github, Linkedin, Send, Terminal, Phone, CheckCircle2, Loader2 } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus("submitting");

    setTimeout(() => {
      const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:shannjongaya03@gmail.com?subject=${subject}&body=${body}`;
      
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");

      setTimeout(() => setStatus("idle"), 3000);
    }, 800);
  };

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
                    <a href="tel:09154041735" className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors group/link">
                      <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center group-hover/link:border-cyan-500/50 group-hover/link:bg-cyan-950/30 transition-all">
                         <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-mono text-xs text-slate-500 mb-1 uppercase tracking-wider">Phone</p>
                        <p className="font-medium">09154041735</p>
                      </div>
                    </a>

                    <a href="mailto:shannjongaya03@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors group/link">
                      <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center group-hover/link:border-cyan-500/50 group-hover/link:bg-cyan-950/30 transition-all">
                         <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-mono text-xs text-slate-500 mb-1 uppercase tracking-wider">Email</p>
                        <p className="font-medium">shannjongaya03@gmail.com</p>
                      </div>
                    </a>

                    <a href="https://github.com/shann03" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors group/link">
                      <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center group-hover/link:border-cyan-500/50 group-hover/link:bg-cyan-950/30 transition-all">
                         <Github className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-mono text-xs text-slate-500 mb-1 uppercase tracking-wider">GitHub</p>
                        <p className="font-medium">github.com/shann03</p>
                      </div>
                    </a>

                    <a href="https://linkedin.com/in/shannjongaya" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors group/link">
                      <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center group-hover/link:border-cyan-500/50 group-hover/link:bg-cyan-950/30 transition-all">
                         <Linkedin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-mono text-xs text-slate-500 mb-1 uppercase tracking-wider">LinkedIn</p>
                        <p className="font-medium">Shann Jongaya</p>
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
            <form className="p-8 rounded-3xl glass border border-slate-800 space-y-6" onSubmit={handleSubmit}>
               <div className="space-y-4">
                 <div>
                   <label htmlFor="name" className="block text-sm font-mono text-slate-400 mb-2">Name</label>
                   <input 
                     type="text" 
                     id="name" 
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     required
                     className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors font-mono text-sm"
                     placeholder="John Doe"
                   />
                 </div>
                 <div>
                   <label htmlFor="email" className="block text-sm font-mono text-slate-400 mb-2">Email</label>
                   <input 
                     type="email" 
                     id="email" 
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     required
                     className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors font-mono text-sm"
                     placeholder="john@example.com"
                   />
                 </div>
                 <div>
                   <label htmlFor="message" className="block text-sm font-mono text-slate-400 mb-2">Message</label>
                   <textarea 
                     id="message" 
                     rows={4}
                     value={message}
                     onChange={(e) => setMessage(e.target.value)}
                     required
                     className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors font-mono text-sm resize-none"
                     placeholder="Hello, I'd like to talk about..."
                   />
                 </div>
               </div>
               <button 
                 type="submit" 
                 disabled={status !== "idle"}
                 className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 disabled:bg-slate-800 disabled:text-slate-500 text-cyan-950 font-bold font-mono text-sm rounded-xl transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] disabled:hover:shadow-none flex items-center justify-center gap-2"
               >
                 {status === "idle" && (
                   <>
                     <Send className="w-4 h-4" />
                     Send Message
                   </>
                 )}
                 {status === "submitting" && (
                   <>
                     <Loader2 className="w-4 h-4 animate-spin" />
                     Opening Email...
                   </>
                 )}
                 {status === "success" && (
                   <>
                     <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                     <span className="text-emerald-400">Draft Created!</span>
                   </>
                 )}
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
