import { motion } from "framer-motion";
import Glow from "./Glow";
import YopiSymbol from "./YopiSymbol";

export default function YopiCore() {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative flex h-[260px] w-[260px] items-center justify-center sm:h-[320px] sm:w-[320px] lg:h-[520px] lg:w-[520px]"
    >
      <Glow />

      {/* Outer Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[220px] w-[220px] rounded-full border border-cyan-400/20 sm:h-[280px] sm:w-[280px] lg:h-[440px] lg:w-[440px]"
      >
        <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_20px_#67e8f9]" />

        <div className="absolute bottom-0 left-8 h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_16px_#60a5fa]" />

        <div className="absolute right-8 top-10 h-2.5 w-2.5 rounded-full bg-cyan-200 shadow-[0_0_12px_#a5f3fc]" />
      </motion.div>

      {/* Inner Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[170px] w-[170px] rounded-full border border-blue-400/20 sm:h-[220px] sm:w-[220px] lg:h-[330px] lg:w-[330px]"
      >
        <div className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-cyan-300" />

        <div className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-blue-400" />
      </motion.div>

      {/* Middle Halo */}
      <motion.div
        animate={{
          scale: [1, 1.04, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute h-28 w-28 rounded-full border border-cyan-300/30 sm:h-36 sm:w-36 lg:h-52 lg:w-52"
      />

      {/* Core */}
      <motion.div
        animate={{
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="relative z-10 flex items-center justify-center"
      >
        <YopiSymbol />
      </motion.div>
    </motion.div>
  );
}