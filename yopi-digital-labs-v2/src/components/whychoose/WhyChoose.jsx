import { motion } from "framer-motion";
import {
  BrainCircuit,
  Zap,
  ShieldCheck,
  Headset,
} from "lucide-react";
import { translations } from "../../translations";

const icons = [
  BrainCircuit,
  Zap,
  ShieldCheck,
  Headset,
];

export default function WhyChoose({ language }) {
  const t =
    translations[language]?.whyChoose ||
    translations.EN?.whyChoose;

  return (
    <section
      id="why"
      className="relative overflow-hidden px-5 py-24 sm:px-6 lg:px-8"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            {t.label}
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Built for{" "}
            <span className="text-cyan-400">
              real business value.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            {t.description}
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2">

          {t.features.map((feature, index) => {
            const Icon = icons[index];

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.12)] sm:p-7"
              >

                {/* Card glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/20" />

                {/* Top line */}
                <div className="absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Icon */}
                <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.08)] transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/15 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.18)]">
                  <Icon size={27} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
                    {feature.title}
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-7 text-white/60">
                    {feature.text}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="mt-7 h-px w-12 bg-cyan-400/40 transition-all duration-300 group-hover:w-20 group-hover:bg-cyan-400" />

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}