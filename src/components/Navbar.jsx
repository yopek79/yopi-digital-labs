import { useState } from "react";
import { Menu, X, Globe, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { language, setLanguage, t } = useLanguage();

  const links = [
    { name: t.home, href: "#" },
    { name: t.services, href: "#services" },
    { name: t.about, href: "#about" },
    { name: t.contact, href: "#contact" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "de" : "en");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 text-2xl font-bold tracking-tight"
        >
          <Sparkles className="text-cyan-400" size={22} />

          <span className="text-cyan-400">Yopi</span>

          <span className="text-white">Digital Labs</span>
        </motion.a>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ y: -2 }}
              className="text-slate-300 transition hover:text-cyan-400"
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Right */}
        <div className="hidden items-center gap-4 md:flex">

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={toggleLanguage}
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm transition hover:border-cyan-400"
          >
            <Globe size={16} />
{language === "en" ? "🇬🇧 EN" : "🇩🇪 DE"}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold shadow-[0_0_25px_rgba(34,211,238,0.35)] transition hover:bg-cyan-400"
          >
            {t.heroButton}
          </motion.button>

        </div>

        {/* Mobile Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/10 bg-slate-950/95 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-5 p-6">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={toggleLanguage}
              className="rounded-xl border border-white/10 bg-white/5 p-3 text-left"
            >
              🌍 🌐 {language === "en" ? "🇬🇧 EN" : "🇩🇪 DE"}
            </button>

            <button className="rounded-xl bg-cyan-500 p-3 font-semibold">
              {t.heroButton}
            </button>

          </div>
        </motion.div>
      )}
    </header>
  );
}