"use client";

import { motion } from "framer-motion";

// ----- DATA: 4 Education Cards -----
const educationData = [
  {
    date: "November 2025",
    title: "Bachelor of Science Accounting",
    subtitle: "University of Ghana",
  },
  {
    date: "July 2022",
    title: "Online Computer Essential Certification",
    subtitle: "Atangi.com",
  },
  {
    date: "2019 - 2021",
    title: "WASSCE Certified",
    subtitle: " Senior High School",
  },
  {
    date: "2026 - Present",
    title: "AI Software Engineering Certification",
    subtitle: "Cortexx GH",
  },
];

// ----- DATA: 4 Experience Cards -----
const experienceData = [
  {
    date: "Oct 2022 - Jan 2023",
    title: "Finance offier",
    subtitle: "Hollard Insurance GH",
  },
  {
    date: "Nov 2025 - Present",
    title: "Finance Officer",
    subtitle: "ECG (Electricity Company of Ghana)",
  },
  {
    date: "Apr 2026 - Present",
    title: "AI Software Engineer",
    subtitle: "Cortexx GH",
  },
  {
    date: "jan 2025 - March 2025",
    title: "Developer",
    subtitle: "Headstarter GH",
  },
];

// ----- SVG Calendar Icon Component -----
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export default function ExperiencePage() {
  return (
    <section className="min-h-screen bg-white dark:bg-[#0a0a0a] px-6 pb-20">
      {/* 🛑 SPACER TO CLEAR THE FIXED NAVBAR */}
      <div className="h-[90px] w-full" />

      <div className="max-w-6xl mx-auto">
        
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-3">
            My <span className="text-cyan-400">Journey</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto md:mx-0" />
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg max-w-xl mx-auto md:mx-0">
            Education meets real-world experience.
          </p>
        </motion.div>

        {/* 2-Column Grid (Education Left, Experience Right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          
          {/* ----- LEFT COLUMN: EDUCATION ----- */}
          <div>
            <h3 className="text-xl font-bold text-black dark:text-white uppercase tracking-wider mb-6 pl-2 border-l-4 border-cyan-400">
              Education
            </h3>
            <div className="flex flex-col gap-5">
              {educationData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-zinc-50 dark:bg-[#121212] rounded-xl p-6 border border-zinc-200 dark:border-zinc-800 hover:border-cyan-400 hover:shadow-lg dark:hover:shadow-cyan-400/5 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                    <CalendarIcon />
                    <span>{item.date}</span>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-cyan-400">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {item.subtitle}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ----- RIGHT COLUMN: EXPERIENCE ----- */}
          <div>
            <h3 className="text-xl font-bold text-black dark:text-white uppercase tracking-wider mb-6 pl-2 border-l-4 border-cyan-400">
              Experience
            </h3>
            <div className="flex flex-col gap-5">
              {experienceData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-zinc-50 dark:bg-[#121212] rounded-xl p-6 border border-zinc-200 dark:border-zinc-800 hover:border-cyan-400 hover:shadow-lg dark:hover:shadow-cyan-400/5 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                    <CalendarIcon />
                    <span>{item.date}</span>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-cyan-400">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {item.subtitle}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}