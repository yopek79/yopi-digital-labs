import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const nav = {
    en: {
      services: "Services",
      process: "Process",
      contact: "Contact",
      button: "Free Consultation",
    },
    de: {
      services: "Leistungen",
      process: "Prozess",
      contact: "Kontakt",
      button: "Kostenlose Beratung",
    },
  };

  const t = nav[language];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 font-bold text-slate-950">
            Y
          </div>

          <div className="leading-tight">
            <h1 className="text-lg font-bold text-white">
              Yopi
            </h1>

            <p className="hidden text-xs text-slate-400 sm:block">
              Digital Labs
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 lg:flex">
          <a href="#services" className="text-slate-300 hover:text-cyan-400">
            {t.services}
          </a>

          <a href="#process" className="text-slate-300 hover:text-cyan-400">
            {t.process}
          </a>

          <a href="#contact" className="text-slate-300 hover:text-cyan-400">
            {t.contact}
          </a>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">

          <button
            onClick={() =>
              setLanguage(language === "en" ? "de" : "en")
            }
            className="rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300"
          >
            {language.toUpperCase()}
          </button>

          <button className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">
            {t.button}
          </button>

        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          {open ? (
            <X size={28} color="white" />
          ) : (
            <Menu size={28} color="white" />
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950 lg:hidden">
          <nav className="flex flex-col px-6 py-6">

            <a
              href="#services"
              className="py-3 text-slate-300"
            >
              {t.services}
            </a>

            <a
              href="#process"
              className="py-3 text-slate-300"
            >
              {t.process}
            </a>

            <a
              href="#contact"
              className="py-3 text-slate-300"
            >
              {t.contact}
            </a>

            <button
              onClick={() =>
                setLanguage(language === "en" ? "de" : "en")
              }
              className="mt-6 rounded-lg border border-slate-700 py-3 text-slate-300"
            >
              {language.toUpperCase()}
            </button>

            <button className="mt-4 rounded-xl bg-cyan-500 py-3 font-semibold text-slate-950">
              {t.button}
            </button>

          </nav>
        </div>
      )}
    </header>
  );
}