"use client";

import { motion } from "framer-motion";

// 🌟 Divided into Finance and Tech skills
const skills = [
  // --- FINANCE SKILLS ---
  {
    id: 1,
    title: "Financial Analysis & Reporting",
    description: "Leveraging accounting principles and data to analyze business health, prepare budgets, and generate insightful financial statements for stakeholders.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Tax Compliance & Management",
    description: "Expertise in VAT, WHT, and Tourism Levy calculations. Ensuring full regulatory compliance and optimizing tax strategies for Ghanaian businesses.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Payment Operations & Reconciliation",
    description: "Managing seamless payment systems and data reconciliation. Bridging the gap between financial auditing and digital transaction flows.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  // --- TECH SKILLS ---
  {
    id: 4,
    title: "Frontend Web Development",
    description: "Creating beautiful, functional web experiences using React, Next.js, and modern CSS. Turning designs into interactive digital realities.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "AI Software Engineering",
    description: "Building intelligent AI-powered assistants and automation tools using Next.js, TypeScript, and OpenAI APIs to solve real-world business problems.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
        <line x1="9" y1="21" x2="15" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Performance & User-Centric Design",
    description: "Optimizing web apps for speed, accessibility, and seamless UX. Ensuring every interaction is fast, intuitive, and delightful for users.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

export default function SkillsPage() {
  return (
    <section className="min-h-screen bg-white dark:bg-[#0a0a0a] px-6 pb-20 pt-10">
      {/* 🛑 SPACER TO CLEAR THE FIXED NAVBAR */}
      <div className="h-[90px] w-full" />

      <div className="max-w-6xl mx-auto">
        
        {/* Header Section - WIDENED TO MATCH GRID */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-5xl mx-auto space-y-4" // <--- Changed from max-w-3xl to max-w-5xl
        >
          <span className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
            My Skills
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white">
            What I <span className="text-cyan-400">Do</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            I&apos;m not just a developer; I&apos;m a digital dreamweaver. Crafting immersive online experiences is not just a job but my calling. <br className="hidden md:block" />
            Discover below how I can help you.
          </p>
        </motion.div>

        {/* Skills Grid (3 Columns, 2 Rows) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group flex flex-col items-center text-center"
            >
              {/* Circular Icon */}
              <div className="w-16 h-16 rounded-full bg-zinc-800 dark:bg-zinc-700 flex items-center justify-center text-white transition-colors duration-300 group-hover:bg-cyan-400 group-hover:text-black mb-6 shadow-sm">
                {skill.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-black dark:text-white mb-3">
                {skill.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-sm">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}