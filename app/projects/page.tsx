"use client";

import { FaGithub } from 'react-icons/fa'
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    category: "Full Stack",
    title: "DrahVentures Payment System",
    description: "A live business payment system built with Next.js and Paystack, supporting MTN MoMo, Telecel Cash and AirtelTigo payments in Ghana. Features a password-protected admin dashboard, transaction history, and Supabase database integration.",
    image: "/drahventures-payment.png",
    tech: ["Next.js", "TypeScript", "Paystack", "Supabase", "Tailwind CSS"],
    link: "https://drahventures-payment-bdiz.vercel.app/",
    github: "https://github.com/DHEBIT/drahventures-payment",
  },
  {
    id: 2,
    category: "AI Project",
    title: "AI Assistant",
    description: "An intelligent AI-powered assistant designed to help users with tasks, answer questions, and automate workflows. Currently in active development.",
    image: null,
    tech: ["Next.js", "TypeScript", "AI/ML", "Tailwind CSS"],
    link: "https://github.com/DHEBIT",
    github: "https://github.com/DHEBIT",
  },
  {
    id: 3,
    category: "E-Commerce",
    title: "Purple Shop — Insurance Merchandise Store",
    description: "A fully functional e-commerce store built for Bernardventures. Features product listings pulled from a live Supabase database, shopping cart with quantity controls, and Paystack payment integration. Built with Next.js and deployed on Vercel.",
    image: "/purple-shop.png",
    tech: ["Next.js", "React", "Tailwind CSS", "Supabase", "Paystack"],
    link: "https://purple-shop-1iss.vercel.app/",
    github: "https://github.com/DHEBIT/purple-shop",
  },
  {
    id: 4,
    category: "Full Stack",
    title: "Happy Hour — Lunch Tracker",
    description: "A weekly lunch ordering platform built for Hollard Insurance, replacing a manual WhatsApp-and-Excel workflow. Employees pick one meal per day from a rotating menu; admins upload the weekly menu, track orders, and export a caterer-ready sheet and monthly cost report. Includes role-based access, email/Google sign-in, and in-app notifications.",
    image: "/happy-hour.png",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "NextAuth", "Tailwind CSS"],
    link: "https://lunch-tracker-sand.vercel.app/",
    github: "https://github.com/DHEBIT/lunch-tracker",
  },
  {
    id: 5,
    category: "Full Stack",
    title: "Hollagram — Social Platform",
    description: "A social media application built with Next.js, featuring a secure authentication gateway with email and Google sign-in options. The platform restricts all core functionality including feeds, user profiles, and messaging to verified members only. Deployed on Vercel for optimal performance with server-side rendering capabilities.",
    image: "/hollagram.jpeg",
    tech: ["Next.js", "TypeScript", "NextAuth", "Tailwind CSS"],
    link: "https://hollagram.vercel.app/",
    github: "https://github.com/DHEBIT/hollagram",
  },
];

export default function ProjectsPage() {
  return (
    <section className="bg-white dark:bg-[#2e2929] px-6 py-20">
      <div className="h-24 w-full" />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-3">
            My <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-400" />
        </motion.div>

        {/* Projects Grid - 2 Columns like your screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-zinc-50 dark:bg-[#121212] rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-cyan-400 transition-colors duration-300 flex flex-col"
            >
              {/* Modern Landscape Image Placeholder or Actual Image */}
              <div className="relative w-full h-64 bg-zinc-200 dark:bg-zinc-800 overflow-hidden flex items-center justify-center">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  /* Sophisticated "Coming Soon" Gradient Placeholder */
                  <div className="w-full h-full bg-linear-to-br from-zinc-300 to-zinc-100 dark:from-zinc-700 dark:to-zinc-800 flex flex-col items-center justify-center text-gray-400 dark:text-gray-500">
                    <span className="text-5xl mb-2">🚧</span>
                    <span className="text-xs uppercase tracking-wider font-medium bg-black/10 dark:bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 gap-3">
                {/* Category Label (Matches your screenshot exactly) */}
                <span className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-medium">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="inline-flex items-center gap-4 mt-2">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    Case Study <span>&rarr;</span>
                  </Link>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-gray-700 dark:text-gray-300 hover:text-cyan-400 transition-colors text-xl"
                  >
                    <FaGithub />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}