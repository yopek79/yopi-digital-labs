import { motion } from "framer-motion";

export default function OrbitalRings() {
  return (
    <>
      {/* OUTER RING */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[340px] w-[340px] rounded-full border border-cyan-300/20"
      >
        <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_30px_#67e8f9]" />

        <div className="absolute bottom-6 left-6 h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_18px_#67e8f9]" />
      </motion.div>

      {/* MIDDLE RING */}

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[270px] w-[270px] rounded-full border border-blue-400/15"
      >
        <div className="absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-blue-400 shadow-[0_0_25px_#60a5fa]" />

        <div className="absolute left-10 top-8 h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_16px_#60a5fa]" />
      </motion.div>

      {/* INNER RING */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[210px] w-[210px] rounded-full border border-cyan-200/10"
      >
        <div className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-white shadow-[0_0_25px_white]" />
      </motion.div>
    </>
  );
}