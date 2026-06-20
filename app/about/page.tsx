"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen bg-white dark:bg-[#0a0a0a] px-6 pb-20">
      {/* 🛑 SPACER TO CLEAR THE FIXED NAVBAR */}
      <div className="h-[90px] w-full" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center md:items-start">
        
        {/* Left Column: Image & Social Links */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-[40%] flex flex-col gap-6"
        >
          {/* Large Rectangle Image */}
          <div className="relative w-full h-[300px] md:h-[450px] rounded-xl overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
            <Image
              src="/bernard.jpeg" 
              alt="Bernard Tetteh Drah"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Social Icons (Immediately below image) */}
          <div className="flex items-center gap-6 justify-center md:justify-start">
            {/* LinkedIn */}
            <Link href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-cyan-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </Link>
            {/* GitHub */}
            <Link href="https://github.com/CREDIT-DRAH" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-cyan-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </Link>
            {/* Instagram */}
            <Link href="https://instagram.com/ben_tetteh_ae" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-cyan-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Text & Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full md:w-[60%] flex flex-col justify-center space-y-6"
        >
          {/* Big Bold Headline */}
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white leading-tight">
            Building modern <br />
            digital experiences from <span className="text-cyan-400">Ghana.</span>
          </h2>

          {/* Bio Paragraphs */}
          <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            <p>
              I&apos;m <span className="text-cyan-400 font-semibold">Bernard Tetteh Drah</span>, an Accounting graduate from the University of Ghana turned AI Software Engineer. I bridge the gap between finance and technology by building robust web applications and AI-powered tools.
            </p>
            <p>
              With a strong foundation in financial analysis, tax compliance, and a deep passion for frontend development, I specialize in creating seamless, user-centric digital solutions that solve real-world business problems.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <Link
              href="/projects"
              className="px-8 py-3 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition-colors duration-200"
            >
              My Projects
            </Link>
            
            {/* Download CV with Icon */}
            <Link
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-colors duration-200"
            >
              {/* Download Icon SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}