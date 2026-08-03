import { motion } from "framer-motion";
import {
  Search,
  PenTool,
  Code,
  Rocket,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Process() {
  const { language } = useLanguage();

  const content = {
    en: {
      badge: "OUR PROCESS",
      title: "How We",
      highlight: "Work",
      description:
        "A simple and transparent workflow from the first idea to the final launch.",

      steps: [
        {
          icon: <Search className="h-8 w-8 text-cyan-400" />,
          number: "01",
          title: "Discovery",
          text: "We learn about your business, goals and current workflow to identify the best AI opportunities.",
        },
        {
          icon: <PenTool className="h-8 w-8 text-cyan-400" />,
          number: "02",
          title: "Planning",
          text: "We design the solution, user experience and automation strategy before development begins.",
        },
        {
          icon: <Code className="h-8 w-8 text-cyan-400" />,
          number: "03",
          title: "Development",
          text: "We build your website, AI automations and integrations using modern technologies.",
        },
        {
          icon: <Rocket className="h-8 w-8 text-cyan-400" />,
          number: "04",
          title: "Launch & Support",
          text: "After launch we monitor, optimize and continuously improve your digital solution.",
        },
      ],
    },

    de: {
      badge: "UNSER PROZESS",
      title: "So",
      highlight: "arbeiten wir",
      description:
        "Ein klarer und transparenter Ablauf – von der ersten Idee bis zum erfolgreichen Launch.",

      steps: [
        {
          icon: <Search className="h-8 w-8 text-cyan-400" />,
          number: "01",
          title: "Analyse",
          text: "Wir analysieren Ihr Unternehmen, Ihre Ziele und erkennen die besten KI-Potenziale.",
        },
        {
          icon: <PenTool className="h-8 w-8 text-cyan-400" />,
          number: "02",
          title: "Planung",
          text: "Wir entwickeln das Konzept, die Benutzererfahrung und die passende Automatisierungsstrategie.",
        },
        {
          icon: <Code className="h-8 w-8 text-cyan-400" />,
          number: "03",
          title: "Entwicklung",
          text: "Wir entwickeln Ihre Website, KI-Lösungen und Integrationen mit modernster Technologie.",
        },
        {
          icon: <Rocket className="h-8 w-8 text-cyan-400" />,
          number: "04",
          title: "Launch & Support",
          text: "Nach dem Launch überwachen, optimieren und erweitern wir Ihre Lösung kontinuierlich.",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section className="mx-auto max-w-7xl px-8 py-28">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-20 text-center"
      >
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-400">
          {t.badge}
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">
          {t.title}{" "}
          <span className="text-cyan-400">
            {t.highlight}
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-slate-400">
          {t.description}
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {t.steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 transition group-hover:bg-cyan-500/20">
              {step.icon}
            </div>

            <span className="mb-3 block text-sm font-semibold tracking-widest text-cyan-400">
              {step.number}
            </span>

            <h3 className="mb-4 text-2xl font-bold text-white">
              {step.title}
            </h3>

            <p className="leading-7 text-slate-400">
              {step.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}