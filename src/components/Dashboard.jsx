import { motion } from "framer-motion";
import { Bot, Activity, Cpu, Zap } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Dashboard() {
  const { language } = useLanguage();

  const content = {
    en: {
      badge: "LIVE AI PLATFORM",
      title: "Automation Dashboard",
      online: "Online",
      activity: "Live Automation Activity",
      stats: [
        {
          icon: <Bot size={20} />,
          title: "AI Requests Today",
          value: "1,284",
        },
        {
          icon: <Cpu size={20} />,
          title: "Active Workflows",
          value: "12",
        },
        {
          icon: <Zap size={20} />,
          title: "Automation Rate",
          value: "98%",
        },
        {
          icon: <Activity size={20} />,
          title: "Response Time",
          value: "0.7 sec",
        },
      ],
    },

    de: {
      badge: "LIVE KI-PLATTFORM",
      title: "Automatisierungs-Dashboard",
      online: "Online",
      activity: "Live-Automatisierungsaktivität",
      stats: [
        {
          icon: <Bot size={20} />,
          title: "KI-Anfragen heute",
          value: "1.284",
        },
        {
          icon: <Cpu size={20} />,
          title: "Aktive Workflows",
          value: "12",
        },
        {
          icon: <Zap size={20} />,
          title: "Automatisierungsrate",
          value: "98 %",
        },
        {
          icon: <Activity size={20} />,
          title: "Antwortzeit",
          value: "0,7 Sek.",
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
        className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_40px_rgba(34,211,238,0.08)]"
      >
        <div className="flex flex-col gap-6 border-b border-white/10 p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
              {t.badge}
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              {t.title}
            </h2>
          </div>

          <div className="flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 text-emerald-400">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400"></span>
            {t.online}
          </div>
        </div>

        <div className="grid gap-6 p-8 md:grid-cols-2 lg:grid-cols-4">
          {t.stats.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group rounded-2xl border border-white/10 bg-slate-900/40 p-6 transition duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition group-hover:bg-cyan-500/20">
                {item.icon}
              </div>

              <p className="text-sm text-slate-400">
                {item.title}
              </p>

              <h3 className="mt-3 text-3xl font-bold text-white">
                {item.value}
              </h3>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-white/10 p-8">
          <p className="mb-4 text-sm text-slate-400">
            {t.activity}
          </p>

          <div className="h-3 overflow-hidden rounded-full bg-slate-800">
            <motion.div
              className="h-full rounded-full bg-cyan-400"
              animate={{
                width: ["35%", "92%", "65%", "98%", "55%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}