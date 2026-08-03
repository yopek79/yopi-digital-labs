import { motion } from "framer-motion";

export default function AICore() {
  return (
    <div className="relative flex h-[300px] w-[300px] items-center justify-center sm:h-[380px] sm:w-[380px] lg:h-[450px] lg:w-[450px]">

      {/* Háttér glow */}
      <div className="absolute h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl sm:h-80 sm:w-80 lg:h-96 lg:w-96"></div>

      {/* Külső forgó gyűrű */}
      <motion.div
        className="absolute h-56 w-56 rounded-full border border-cyan-400/20 sm:h-72 sm:w-72 lg:h-80 lg:w-80"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
      />

      {/* Belső forgó gyűrű */}
      <motion.div
        className="absolute h-44 w-44 rounded-full border border-cyan-300/30 sm:h-56 sm:w-56 lg:h-64 lg:w-64"
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
        className="relative flex h-40 w-40 items-center justify-center rounded-full border border-cyan-400/40 bg-slate-900/80 backdrop-blur-xl shadow-[0_0_80px_rgba(34,211,238,0.35)] sm:h-48 sm:w-48 lg:h-52 lg:w-52"
      >
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.45em] text-cyan-300 sm:text-xs">
            Yopi
          </p>

          <h2 className="mt-2 text-4xl font-bold text-white sm:text-5xl">
            AI
          </h2>

          <p className="mt-2 text-sm text-slate-400 sm:text-base">
            Digital Core
          </p>
        </div>
      </motion.div>

    </div>
  );
}