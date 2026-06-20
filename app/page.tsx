"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const animatedTexts = [
  "Finance Officer",
  "Developer",
  "AI Software Engineer",
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % animatedTexts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-white dark:bg-[#0a0a0a] px-6 pb-20 flex items-center">
      {/* 🛑 SPACER TO CLEAR THE FIXED NAVBAR */}
      <div className="h-[90px] w-full absolute top-0 left-0 pointer-events-none" />

      {/* 👇 CHANGED: flex-col-reverse for mobile, md:flex-row for desktop */}
      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-16 pt-10">
        
        {/* Left Column: Text, Bio, Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 flex flex-col gap-6"
        >
          {/* Heading */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white leading-tight mb-4">
              Hello, I&apos;m <br />
              <span className="text-cyan-400">Bernard Tetteh Drah</span>
            </h1>

            {/* Animated Title */}
            <div className="h-10 overflow-hidden mt-1">
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl text-cyan-400 font-semibold"
              >
                {animatedTexts[currentIndex]}
              </motion.p>
            </div>
          </div>

          {/* Bio */}
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-lg">
            I&apos;m a finance professional turned software engineer based in Ghana. 
            I strive to build immersive and beautiful web applications through carefully 
            crafted code and user-centric design.
          </p>

          {/* "Say Hello!" Button */}
          <div className="mt-2">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition-colors duration-200"
            >
              Say Hello!
            </Link>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 divide-x divide-zinc-200 dark:divide-zinc-800 bg-zinc-50 dark:bg-[#121212] rounded-xl overflow-hidden max-w-lg mt-6 shadow-sm">
            <div className="py-5 text-center flex flex-col items-center">
              <span className="text-2xl font-bold text-black dark:text-white">2+</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">Experience</span>
            </div>
            <div className="py-5 text-center flex flex-col items-center">
              <span className="text-2xl font-bold text-black dark:text-white">10+</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">Projects</span>
            </div>
            <div className="py-5 text-center flex flex-col items-center">
              <span className="text-2xl font-bold text-black dark:text-white">5+</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">Happy Clients</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Photo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          {/* 🖥️ LARGE RECTANGLE IMAGE (Only on Desktop) */}
          <div className="hidden md:block relative w-full max-w-sm md:max-w-md aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 shadow-xl border border-zinc-200 dark:border-zinc-800">
            <Image
              src="/bernard.jpeg"
              alt="Bernard Tetteh Drah"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* 📱 CIRCULAR AVATAR (Only on Mobile - with Cyan Border) */}
          <div className="block md:hidden relative w-40 h-40 rounded-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 shadow-lg border-4 border-cyan-400">
            <Image
              src="/bernard.jpeg"
              alt="Bernard Tetteh Drah"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}