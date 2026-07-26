import { motion } from "framer-motion";
import {
  Zap,
  Brain,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function WhyChooseUs() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Why Choose",
      highlight: "Yopi Digital Labs",
      description: "AI solutions built for real businesses.",
      items: [
        {
          icon: <Zap className="h-10 w-10 text-cyan-400" />,
          title: "Fast Delivery",
          text: "We build AI solutions quickly without compromising quality.",
        },
        {
          icon: <Brain className="h-10 w-10 text-cyan-400" />,
          title: "Latest AI Technology",
          text: "Powered by today's most advanced AI models.",
        },
        {
          icon: <TrendingUp className="h-10 w-10 text-cyan-400" />,
          title: "Business Growth",
          text: "Automation that saves time and increases profit.",
        },
        {
          icon: <ShieldCheck className="h-10 w-10 text-cyan-400" />,
          title: "Reliable Support",
          text: "We stay with you after launch and keep improving.",
        },
      ],
    },

    de: {
      title: "Warum",
      highlight: "Yopi Digital Labs",
      description: "KI-Lösungen für echte Unternehmen.",
      items: [
        {
          icon: <Zap className="h-10 w-10 text-cyan-400" />,
          title: "Schnelle Umsetzung",
          text: "Wir entwickeln KI-Lösungen schnell und ohne Qualitätsverlust.",
        },
        {
          icon: <Brain className="h-10 w-10 text-cyan-400" />,
          title: "Modernste KI",
          text: "Basierend auf den leistungsfähigsten KI-Modellen von heute.",
        },
        {
          icon: <TrendingUp className="h-10 w-10 text-cyan-400" />,
          title: "Mehr Wachstum",
          text: "Automatisierungen sparen Zeit und steigern Ihren Unternehmenserfolg.",
        },
        {
          icon: <ShieldCheck className="h-10 w-10 text-cyan-400" />,
          title: "Zuverlässiger Support",
          text: "Auch nach dem Launch begleiten wir Sie weiter und entwickeln Ihre Lösungen kontinuierlich weiter.",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-8 py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16 text-center"
      >
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

      <div className="grid gap-8 md:grid-cols-2">
        {t.items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 35 }}
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
            className="group rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 transition group-hover:bg-cyan-500/20">
              {item.icon}
            </div>

            <h3 className="mb-4 text-2xl font-bold text-white">
              {item.title}
            </h3>

            <p className="leading-7 text-slate-400">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}