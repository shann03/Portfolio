import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import TechnicalPortfolio from "@/components/TechnicalPortfolio";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 selection:bg-cyan-500/30 selection:text-cyan-200 text-slate-300">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <TechnicalPortfolio />
      <Skills />
      <Certifications />
      <Contact />
    </main>
  );
}
