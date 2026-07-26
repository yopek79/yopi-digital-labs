import { ShieldCheck, Bot, Cpu, Globe } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    icon: <Bot size={22} />,
    title: "AI Automation",
  },
  {
    icon: <Cpu size={22} />,
    title: "Modern Technology",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Secure Solutions",
  },
  {
    icon: <Globe size={22} />,
    title: "Swiss Quality",
  },
];

export default function Trusted() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
      >
        <p className="mb-8 text-center text-sm uppercase tracking-[0.35em] text-cyan-300">
          BUILT FOR MODERN BUSINESSES
        </p>

        <div className="grid gap-8 md:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 rounded-2xl bg-cyan-500/10 p-4 text-cyan-400">
                {item.icon}
              </div>

              <h3 className="font-semibold text-white">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}