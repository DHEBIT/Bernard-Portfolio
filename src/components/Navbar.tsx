"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={"fixed top-0 left-0 w-full z-50 transition-all duration-300 " + (isScrolled ? "bg-white/95 dark:bg-[#0a0a0a]/90 backdrop-blur-md shadow-md" : "bg-white/70 dark:bg-transparent border-b border-gray-200/50 dark:border-gray-800/50")}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link href="/" className="text-cyan-400 font-bold text-xl tracking-widest">
          BTD
        </Link>

        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={"text-sm font-medium transition-colors duration-200 " + (pathname === link.href ? "text-cyan-400 font-semibold" : "text-gray-800 dark:text-gray-300 hover:text-cyan-400")}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          
          {/* Modern Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:text-cyan-400 transition-colors duration-200 text-gray-800 dark:text-white"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                // Sun Icon (shown in Dark Mode)
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                // Moon Icon (shown in Light Mode)
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          )}

          {/* Modern Hamburger Menu (With rounded edges for a polished look) */}
          <button
            className="md:hidden flex flex-col gap-1.5 cursor-pointer p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={"block w-6 h-0.5 bg-gray-800 dark:bg-white rounded-full transition-all duration-300 " + (menuOpen ? "rotate-45 translate-y-2.5" : "")} />
            <span className={"block w-6 h-0.5 bg-gray-800 dark:bg-white rounded-full transition-all duration-300 " + (menuOpen ? "opacity-0" : "")} />
            <span className={"block w-6 h-0.5 bg-gray-800 dark:bg-white rounded-full transition-all duration-300 " + (menuOpen ? "-rotate-45 -translate-y-2.5" : "")} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 dark:bg-[#0a0a0a]/95 px-6 pb-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setMenuOpen(false)} className={"text-sm font-medium transition-colors duration-200 " + (pathname === link.href ? "text-cyan-400 font-semibold" : "text-gray-800 dark:text-gray-300 hover:text-cyan-400")}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}