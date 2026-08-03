import { motion } from "framer-motion";
import {
  BrainCircuit,
  Zap,
  ShieldCheck,
  Headset,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "AI Expertise",
    text: "We build practical AI solutions that automate workflows and improve efficiency.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    text: "Modern development methods allow us to deliver high-quality projects quickly.",
  },
  {
    icon: ShieldCheck,
    title: "Swiss Quality",
    text: "Reliable, secure and scalable solutions built with long-term business value in mind.",
  },
  {
    icon: Headset,
    title: "Long-Term Support",
    text: "We stay with you after launch to optimize, improve and support your systems.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="why"
      className="relative px-5 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-2xl font-black leading-tight text-white sm:text-5xl">
            Why businesses
            <span className="text-cyan-400"> choose Yopi.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/60 sm:mt-6 sm:max-w-2xl sm:text-base">
            We combine AI, automation and modern software development
            to build solutions that create measurable business value.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Icon size={24} />
                </div>

                <h3 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/60">
                  {feature.text}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}