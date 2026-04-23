"use client";

import { motion } from "motion/react";
import { BadgeCheck, ShieldCheck, CloudLightning, CircleCheckBig, Clock } from "lucide-react";
import Image from "next/image";

const certifications = [
  {
    title: "Introduction to CIP",
    issuer: "OPSWAT Academy",
    status: "Completed",
    icon: ShieldCheck,
    image: "/opswat.jpg",
    color: "text-blue-400"
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    status: "Completed",
    icon: BadgeCheck,
    image: "/cisco.jpg",
    color: "text-emerald-400"
  },
  {
    title: "AWS Academy Graduate",
    issuer: "Cloud Foundations",
    status: "Completed",
    icon: CloudLightning,
    image: "/aws.jpg",
    color: "text-orange-400"
  },
  {
    title: "CC Domain 1: Security Principles",
    issuer: "ISC2",
    status: "Completed",
    icon: Clock,
    image: "/ISC2Domain1.jpg",
    color: "text-yellow-400"
  },
  {
    title: "CC Domain 2: Incident Response",
    issuer: "ISC2",
    status: "Completed",
    icon: Clock,
    image: "/ISC2Domain2.jpg",
    color: "text-yellow-400"
  },
  {
    title: "CC Domain 3: Access Control",
    issuer: "ISC2",
    status: "Completed",
    icon: Clock,
    image: "/ISC2Domain3.jpg",
    color: "text-yellow-400"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative border-t border-slate-800/50 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-cyan-500 font-bold text-xl">05.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Certifications & Progress
            </h2>
            <div className="h-px bg-slate-800 flex-1 ml-4" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 rounded-3xl transform group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform duration-300" />
              <div className="relative h-full p-6 rounded-3xl glass border border-slate-800 flex flex-col bg-slate-900 w-full transform group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-300 group-hover:border-cyan-500/30">
                <div className={`w-full h-32 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 mb-6 relative overflow-hidden ${cert.color}`}>
                  {cert.image ? (
                    <Image src={cert.image} alt={cert.title} fill className="object-contain p-2" />
                  ) : (
                    <cert.icon className="w-8 h-8 opacity-50" />
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                  {cert.title}
                </h3>
                <p className="font-mono text-xs text-slate-400 mb-6">
                  {cert.issuer}
                </p>

                <div className="mt-auto pt-4 border-t border-slate-800/50">
                  <div className="flex items-center gap-2 mb-2">
                     {cert.status === "Completed" ? (
                       <CircleCheckBig className="w-4 h-4 text-emerald-500" />
                     ) : (
                       <Clock className="w-4 h-4 text-yellow-500" />
                     )}
                     <span className="font-mono text-xs font-semibold text-slate-300 uppercase shrink-0">
                       {cert.status}
                     </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
