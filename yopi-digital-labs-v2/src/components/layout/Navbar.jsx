import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          <div className="hidden md:block">
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

              <button
                className="mt-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-semibold text-white"
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