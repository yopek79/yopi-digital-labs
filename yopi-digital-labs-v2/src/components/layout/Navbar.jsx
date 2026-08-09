import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  Globe,
  ChevronDown,
} from "lucide-react";
const languages = [
  { code: "EN", flag: "🇬🇧" },
  { code: "DE", flag: "🇩🇪" },
  { code: "HU", flag: "🇭🇺" },
];

const links = [
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState("EN");
const [languageOpen, setLanguageOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="sticky top-0 z-50 w-full px-5 pt-5"
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border transition-all duration-300 ${
            scrolled
              ? "border-white/15 bg-white/10 backdrop-blur-xl shadow-2xl"
              : "border-white/10 bg-white/5 backdrop-blur-lg"
          } px-6 py-4`}
        >
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 select-none"
          >
            <motion.div
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/30"
            >
              <span className="text-lg font-bold text-white">
                Y
              </span>
            </motion.div>

            <div className="block">
              <div className="text-sm font-semibold tracking-wide text-white sm:text-base">
  Yopi Digital Labs
</div>

<div className="hidden text-xs text-white/50 sm:block">
  Digital Innovation Studio
</div>
            </div>
          </a>

          {/* Desktop */}
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-white/70 transition hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          {/* Desktop Right */}

<div className="hidden flex-shrink-0 items-center gap-3 lg:flex">

  <div className="relative">

  <button
    onClick={() => setLanguageOpen(!languageOpen)}
    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-cyan-400/40 hover:bg-white/10"
  >
    <Globe size={16} />

    {language}

    <ChevronDown
      size={16}
      className={`transition ${
        languageOpen ? "rotate-180" : ""
      }`}
    />
  </button>

  <AnimatePresence>

    {languageOpen && (

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 8 }}
        transition={{ duration: 0.2 }}
        className="absolute right-0 mt-3 w-44 overflow-hidden rounded-2xl border border-white/10 bg-[#0B1020]/95 backdrop-blur-xl"
      >

        {[
          ["EN", "🇬🇧 English"],
          ["DE", "🇩🇪 Deutsch"],
          ["HU", "🇭🇺 Magyar"],
        ].map(([code, label]) => (

          <button
            key={code}
            onClick={() => {
              setLanguage(code);
              setLanguageOpen(false);
            }}
            className="w-full px-4 py-3 text-left text-white/80 transition hover:bg-cyan-500/10 hover:text-cyan-300"
          >
            {label}
          </button>

        ))}

      </motion.div>

    )}

  </AnimatePresence>

</div>

  <button
    className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:scale-105"
  >
    Start Your Project

    <ArrowUpRight
      size={16}
      className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
    />
  </button>

</div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white md:hidden"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="fixed left-5 right-5 top-24 z-40 rounded-3xl border border-white/10 bg-[#0B1020]/95 p-6 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-6">
  {links.map((link) => (
    <a
      key={link.name}
      href={link.href}
      onClick={() => setMobileOpen(false)}
      className="text-lg text-white/80 transition hover:text-white"
    >
      {link.name}
    </a>
  ))}

  {/* Mobile Language Selector */}
  <div className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-2">
    {[
      ["EN", "🇬🇧"],
      ["DE", "🇩🇪"],
      ["HU", "🇭🇺"],
    ].map(([code, flag]) => (
      <button
        key={code}
        onClick={() => setLanguage(code)}
        className={`rounded-full px-4 py-2 text-sm transition ${
          language === code
            ? "bg-cyan-500/20 text-cyan-300"
            : "text-white/60 hover:bg-white/10 hover:text-white"
        }`}
      >
        <span className="mr-1">{flag}</span>
        {code}
      </button>
    ))}
  </div>

  <button
    className="mt-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-semibold text-white"
  >
    Start Your Project
  </button>
</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}