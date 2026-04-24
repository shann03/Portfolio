"use client";

import { motion } from "motion/react";
import { Github, ExternalLink, Activity, Server, ShieldCheck } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Student Welfare and Digital Safety Management System",
    description: "A web-based application to manage and monitor student-related incidents, bullying reports, counseling records, and disciplinary actions centrally. Features role-based access for administrators, teachers, and counselors. Demo accounts available: admin/teacher/counselor@gmail.com with password '12345678'.",
    technologies: ["Web Development", "Role-Based Access", "Data Privacy"],
    icon: ShieldCheck,
    image: "/SWDSMS.jpg",
    color: "from-teal-900/40 to-slate-900/40",
    border: "group-hover:border-teal-500/50",
    liveUrl: "https://agent-6992f831417610303df2ba2b--web-safeeduu.netlify.app/",
  },
  {
    title: "CampusSHARE (Uniborrow)",
    description: "A peer-to-peer campus rental platform for students to borrow, lend, and securely exchange items. It integrates interactive campus safe-zone selection, real-time messaging, secure meetup scheduling, and a planned freemium model with PayMongo.",
    technologies: ["Next.js", "Supabase", "Google Maps API", "PayMongo"],
    icon: Activity,
    image: "/uniborrow.jpg",
    color: "from-blue-900/40 to-slate-900/40",
    border: "group-hover:border-blue-500/50",
    liveUrl: "https://uniborrowv2.netlify.app/",
  },
  {
    title: "Aegis Sentinel",
    description: "An ongoing cybersecurity-focused web application designed to strengthen security monitoring and user access management. It integrates secure authentication, RBAC, and centralized activity monitoring to improve the visibility of potential security events.",
    technologies: ["Full-Stack", "Cybersecurity", "Access Control"],
    icon: Server,
    image: "https://picsum.photos/seed/aegis/800/500",
    color: "from-purple-900/40 to-slate-900/40",
    border: "group-hover:border-purple-500/50",
  },
  {
    title: "AWS Production Infrastructure",
    description: "A learning project exploring secure and scalable AWS infrastructure deployment using VPC, EC2, Load Balancer, Auto Scaling, and RDS for educational purposes.",
    technologies: ["AWS", "EC2", "VPC", "Auto Scaling", "RDS"],
    icon: Server,
    image: "https://picsum.photos/seed/aws/800/500",
    color: "from-orange-900/40 to-slate-900/40",
    border: "group-hover:border-orange-500/50"
  },
  {
    title: "Security Monitoring Dashboard",
    description: "A student dashboard project developed to visualize suspicious login attempts, network events, and security alerts for better situational awareness and learning.",
    technologies: ["JavaScript", "HTML/CSS", "Python", "Security Logs"],
    icon: ShieldCheck,
    image: "https://picsum.photos/seed/dashboard/800/500",
    color: "from-blue-900/40 to-slate-900/40",
    border: "group-hover:border-blue-500/50"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative border-t border-slate-800/50 bg-slate-950/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-cyan-900/10 via-slate-950/0 to-slate-950/0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-cyan-500 font-bold text-xl">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Featured Projects
            </h2>
            <div className="h-px bg-slate-800 flex-1 ml-4" />
          </div>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center group`}
            >
              {/* Image Pane */}
              <div className="w-full lg:w-1/2 relative lg:h-[400px] h-[300px] rounded-2xl overflow-hidden glass border border-slate-800 transition-colors duration-500">
                <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} mix-blend-overlay z-10 opacity-60 group-hover:opacity-0 transition-opacity duration-500`} />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 border border-inset border-white/10 rounded-2xl z-20 pointer-events-none" />
              </div>

              {/* Content Pane */}
              <div className={`w-full lg:w-1/2 space-y-6 ${index % 2 !== 0 ? 'lg:text-right flex flex-col items-start lg:items-end' : 'flex flex-col items-start'}`}>
                <div className="space-y-2">
                  <div className="font-mono text-cyan-400 text-sm flex items-center gap-2">
                    <project.icon className="w-4 h-4" />
                    <span>Featured Project</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-50 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <div className="glass p-6 rounded-xl border border-slate-700/50 text-slate-300 relative z-10 shadow-xl">
                  <p className="leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <ul className={`flex flex-wrap gap-3 font-mono text-xs text-slate-400 ${index % 2 !== 0 ? 'lg:justify-end' : ''}`}>
                  {project.technologies.map((tech, i) => (
                    <li key={i} className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-4 pt-4">
                  {(project as any).githubUrl && (
                    <a href={(project as any).githubUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 flex items-center gap-2 bg-slate-900 border border-slate-700 hover:border-cyan-500 rounded-lg text-slate-300 hover:text-cyan-400 transition-all shadow-sm" aria-label="GitHub Repository">
                      <Github className="w-5 h-5" />
                      <span className="font-mono text-sm">Repository</span>
                    </a>
                  )}
                  {((project as any).liveUrl || !(project as any).githubUrl) && (
                    <a href={(project as any).liveUrl || "#"} target={(project as any).liveUrl ? "_blank" : "_self"} rel="noopener noreferrer" className="px-4 py-2 flex items-center gap-2 bg-cyan-950/30 border border-cyan-800/50 hover:bg-cyan-900/50 hover:border-cyan-500 rounded-lg text-cyan-400 transition-all shadow-sm" aria-label="Live Demo">
                      <ExternalLink className="w-5 h-5" />
                      <span className="font-mono text-sm max-w-[150px] sm:max-w-xs truncate">
                        {((project as any).liveUrl && (project as any).liveUrl.replace(/^https?:\/\//, '')) || "Live Demo"}
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
