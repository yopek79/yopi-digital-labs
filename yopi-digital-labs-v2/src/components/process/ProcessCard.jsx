import { motion } from "framer-motion";

export default function ProcessCard({ step, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.12,
      }}
      className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10"
    >
      <div className="mb-6 text-5xl font-black text-cyan-400/25">
        {step.number}
      </div>

      <h3 className="text-2xl font-bold text-white">
        {step.title}
      </h3>

      <p className="mt-4 leading-7 text-white/60">
        {step.description}
      </p>
    </motion.div>
  );
}