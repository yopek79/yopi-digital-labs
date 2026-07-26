import { motion } from "framer-motion";
import AICore from "./AICore";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { language } = useLanguage();

  const content = {
    en: {
      badge: "⚡ AI Automation • Web Development • Switzerland",
      title: "Build the Future with",
      description:
        "We create intelligent AI automations, chatbots and high-performance websites that help businesses save time, reduce costs and grow faster.",
      consultation: "Book Free Consultation",
      services: "View Services",
    },
    de: {
      badge: "⚡ KI-Automatisierung • Webentwicklung • Schweiz",
      title: "Gestalten Sie die Zukunft mit",
      description:
        "Wir entwickeln intelligente KI-Automatisierungen, Chatbots und leistungsstarke Websites, die Unternehmen helfen, Zeit zu sparen, Kosten zu senken und schneller zu wachsen.",
      consultation: "Kostenlose Beratung",
      services: "Leistungen ansehen",
    },
  };

  const t = content[language];

  return (
    <section className="relative mx-auto flex min-h-screen max-w-7xl items-center px-8">
      <div className="grid w-full items-center gap-16 lg:grid-cols-2">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            {t.badge}
          </div>

          <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
            {t.title}{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              AI
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-xl text-slate-400">
            {t.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-400">
              {t.consultation}
            </button>

            <button className="rounded-xl border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400">
              {t.services}
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center"
        >
          <AICore />
        </motion.div>
      </div>
    </section>
  );
}