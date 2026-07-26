import { motion } from "framer-motion";

export default function AICore() {
  return (
    <div className="relative flex h-[450px] w-[450px] items-center justify-center">

      {/* Háttér glow */}
      <div className="absolute h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"></div>

      {/* Külső forgó gyűrű */}
      <motion.div
        className="absolute h-80 w-80 rounded-full border border-cyan-400/20"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
      />

      {/* Belső forgó gyűrű */}
      <motion.div
        className="absolute h-64 w-64 rounded-full border border-cyan-300/30"
        animate={{ rotate: -360 }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      />

      {/* AI Core */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          scale: [1, 1.03, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="relative flex h-52 w-52 items-center justify-center rounded-full border border-cyan-400/40 bg-slate-900/80 backdrop-blur-xl shadow-[0_0_80px_rgba(34,211,238,0.35)]"
      >
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-cyan-300">
            Yopi
          </p>

          <h2 className="mt-2 text-5xl font-bold text-white">
            AI
          </h2>

          <p className="mt-2 text-slate-400">
            Digital Core
          </p>
        </div>
      </motion.div>

    </div>
  );
}