"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// 🔥 BUILT-IN SVG ICONS
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const contactDetails = [
  {
    label: "Email",
    value: "drahbernard5@gmail.com",
    href: "mailto:drahbernard5@gmail.com",
    icon: MailIcon,
  },
  {
    label: "Phone",
    value: "+233559583093",
    href: "tel:+233559583093",
    icon: PhoneIcon,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/bernard-drah",
    href: "https://www.linkedin.com/in/bernard-drah-808069241",
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    value: "github.com/CREDIT-DRAH",
    href: "https://github.com/CREDIT-DRAH",
    icon: GithubIcon,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = 
      "mailto:drahbernard5@gmail.com?subject=Message from " + 
      encodeURIComponent(formData.name) + 
      "&body=" + 
      encodeURIComponent(formData.message) + 
      "%0A%0AFrom: " + 
      encodeURIComponent(formData.name) + 
      "%0AEmail: " + 
      encodeURIComponent(formData.email);

    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <section className="min-h-screen bg-white dark:bg-[#0a0a0a] px-6 pt-5 pb-20">
      {/* 🛑 SPACER TO CLEAR THE FIXED NAVBAR */}
      <div className="h-[90px] w-full" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-3">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-400 mb-4 mx-auto md:mx-0" />
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl mx-auto md:mx-0">
            I&apos;m open to internships, collaborations, and exciting opportunities — short or long term. Let&apos;s talk.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-zinc-50 dark:bg-[#121212] rounded-2xl p-8 md:p-12 shadow-xl border border-zinc-200 dark:border-zinc-800 grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Left: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-xl font-bold text-black dark:text-white">Contact Info</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-2">
              Feel free to reach out via any of the platforms below. I respond within 24 hours.
            </p>

            <div className="flex flex-col gap-4 mt-2">
              {contactDetails.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group p-3 -ml-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-[#1e1e1e] transition-colors duration-200"
                  >
                    <div className="w-12 h-12 rounded-full bg-white dark:bg-[#1e1e1e] border border-zinc-300 dark:border-zinc-700 flex items-center justify-center group-hover:border-cyan-400 group-hover:text-cyan-400 transition-colors duration-200 text-gray-600 dark:text-gray-400 shrink-0 shadow-sm">
                      <Icon />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-cyan-400 transition-colors duration-200 text-sm font-medium">
                      {item.value}
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-8">
                <span className="text-7xl drop-shadow-lg">🎉</span>
                <h3 className="text-2xl font-bold text-black dark:text-white">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-xs">
                  Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", message: "" }); }}
                  className="mt-4 px-8 py-3 bg-cyan-400 text-black font-bold rounded-full hover:bg-cyan-300 transition-colors duration-200 text-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-widest mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-5 py-4 rounded-xl bg-zinc-100 dark:bg-[#1e1e1e] border border-zinc-300 dark:border-zinc-700 text-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200 text-sm shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-widest mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 rounded-xl bg-zinc-100 dark:bg-[#1e1e1e] border border-zinc-300 dark:border-zinc-700 text-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200 text-sm shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Bernard, I'd like to connect..."
                    rows={4}
                    className="w-full px-5 py-4 rounded-xl bg-zinc-100 dark:bg-[#1e1e1e] border border-zinc-300 dark:border-zinc-700 text-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200 resize-none text-sm shadow-sm"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full py-4 bg-cyan-400 text-black font-bold rounded-xl hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 text-base tracking-wide"
                >
                  Send Message &rarr;
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>

      <footer className="max-w-6xl mx-auto mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
        <p>
          &copy; {new Date().getFullYear()} Bernard Drah. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-xs md:text-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block"></span>
          Built with Next.js &amp; Tailwind CSS
        </div>
      </footer>
    </section>
  );
}