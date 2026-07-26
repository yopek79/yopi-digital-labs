import { Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  const content = {
    en: {
      description:
        "We build AI-powered websites, automation systems and digital solutions that help businesses grow faster.",
      quickLinks: "Quick Links",
      contact: "Contact",
      home: "Home",
      services: "Services",
      about: "About",
      process: "Process",
      copyright: "All rights reserved.",
    },

    de: {
      description:
        "Wir entwickeln KI-gestützte Websites, Automatisierungslösungen und digitale Produkte, die Unternehmen nachhaltig wachsen lassen.",
      quickLinks: "Schnellzugriff",
      contact: "Kontakt",
      home: "Startseite",
      services: "Leistungen",
      about: "Über uns",
      process: "Prozess",
      copyright: "Alle Rechte vorbehalten.",
    },
  };

  const t = content[language];

  return (
    <footer className="border-t border-white/10 bg-slate-950/60 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-8 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h2 className="mb-4 text-2xl font-bold">
              <span className="text-cyan-400">Yopi</span>{" "}
              <span className="text-white">Digital Labs</span>
            </h2>

            <p className="leading-7 text-slate-400">
              {t.description}
            </p>
          </div>

          <div>
            <h3 className="mb-5 font-semibold text-white">
              {t.quickLinks}
            </h3>

            <div className="space-y-3 text-slate-400">
              <a
                href="#"
                className="block transition hover:text-cyan-400"
              >
                {t.home}
              </a>

              <a
                href="#about"
                className="block transition hover:text-cyan-400"
              >
                {t.about}
              </a>

              <a
                href="#services"
                className="block transition hover:text-cyan-400"
              >
                {t.services}
              </a>

              <a
                href="#process"
                className="block transition hover:text-cyan-400"
              >
                {t.process}
              </a>

              <a
                href="#contact"
                className="block transition hover:text-cyan-400"
              >
                {t.contact}
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 font-semibold text-white">
              {t.contact}
            </h3>

            <motion.a
              whileHover={{
                y: -4,
                scale: 1.05,
              }}
              href="mailto:hello@yopidigitallabs.ch"
              className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]"
            >
              <Mail size={22} className="text-cyan-400" />
            </motion.a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Yopi Digital Labs. {t.copyright}
          </p>

          <motion.a
            whileHover={{
              y: -4,
              scale: 1.08,
            }}
            href="#"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
          >
            <ArrowUp size={18} className="text-cyan-400" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}