import { motion } from "framer-motion";
import AICore from "./AICore";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { language } = useLanguage();

  const content = {
    en: {
      badge: "AI Automation • Web Development • Switzerland",
      title1: "Build the Future with",
      title2: "AI",
      description:
        "We create intelligent AI automations, chatbots and high-performance websites that help businesses save time, reduce costs and grow faster.",
      consultation: "Book Free Consultation",
      services: "View Services",
    },

    de: {
      badge: "KI-Automatisierung • Webentwicklung • Schweiz",
      title1: "Gestalten Sie die Zukunft mit",
      title2: "AI",
      description:
        "Wir entwickeln intelligente KI-Automatisierungen, Chatbots und leistungsstarke Websites, die Unternehmen helfen, Zeit zu sparen, Kosten zu senken und schneller zu wachsen.",
      consultation: "Kostenlose Beratung",
      services: "Leistungen ansehen",
    },
  };

  const t = content[language];

  return (
    <section className="relative flex min-h-screen w-full items-center">
      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-16 px-6 py-16 lg:flex-row lg:justify-between">

        {/* TEXT */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-xl text-center lg:text-left"
        >
          <div className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs text-cyan-300 sm:text-sm">
            {t.badge}
          </div>

          <h1 className="mt-8 text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
            {t.title1}
            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              {t.title2}
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-slate-400 lg:mx-0 lg:text-lg">
            {t.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row lg:justify-start">

            <button className="rounded-xl bg-cyan-500 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">
              {t.consultation}
            </button>

            <button className="rounded-xl border border-slate-700 px-7 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400">
              {t.services}
            </button>

          </div>
        </motion.div>

        {/* AI */}

        <motion.div
          initial={{ opacity: 0, scale: .9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .8 }}
          className="flex w-full justify-center"
        >
          <AICore />
        </motion.div>

      </div>
    </section>
  );
}