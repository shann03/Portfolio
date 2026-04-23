"use client";

import { motion } from "motion/react";
import { HardDrive, Monitor, Globe, TerminalSquare, Cloud, ShieldAlert, Cpu, FileCode2 } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Networking",
      icon: Globe,
      skills: ["Basic Network Configuration", "IP Addressing", "Subnetting Basics", "Router and Switch Basics", "Basic Troubleshooting"],
      colSpan: "lg:col-span-2 lg:row-span-2"
    },
    {
      title: "Cybersecurity",
      icon: ShieldAlert,
      skills: ["Introduction to Cybersecurity", "Basic Threat Detection", "Security Awareness", "Log Monitoring Fundamentals"],
      colSpan: "lg:col-span-2 lg:row-span-1"
    },
    {
      title: "Cloud",
      icon: Cloud,
      skills: ["AWS Fundamentals", "EC2 Basics", "IAM Basics", "VPC Concepts"],
      colSpan: "lg:col-span-1"
    },
    {
      title: "Linux",
      icon: TerminalSquare,
      skills: ["Basic Linux Commands", "File Management", "Terminal Navigation", "User Management Basics"],
      colSpan: "lg:col-span-1"
    },
    {
      title: "Programming / Web",
      icon: FileCode2,
      skills: ["Python (Beginner)", "HTML & CSS", "Basic JavaScript", "SQL Basics", "Logic Building", "Problem Solving"],
      colSpan: "lg:col-span-2"
    },
    {
      title: "Tools & Soft Skills",
      icon: Cpu,
      skills: ["Cisco Packet Tracer", "Wireshark", "GitHub", "VS Code", "AWS Console", "Time Management", "Communication Skills", "Adaptability", "Cooperation", "Willingness to Learn"],
      colSpan: "lg:col-span-3"
    }
  ];

  return (
    <section id="skills" className="py-24 relative border-t border-slate-800/50 bg-slate-950/80">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-950/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-cyan-500 font-bold text-xl">04.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Skills & Tools
            </h2>
            <div className="h-px bg-slate-800 flex-1 ml-4" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-3xl glass border border-slate-800 hover:border-cyan-500/30 transition-all group ${category.colSpan}`}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {category.title}
                </h3>
                <category.icon className="w-6 h-6 text-slate-500 group-hover:text-cyan-500 transition-colors" />
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full bg-cyan-500/50 group-hover:bg-cyan-500 transition-colors" />
                    <span className="text-sm font-mono text-slate-400 group-hover:text-slate-300 transition-colors">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
