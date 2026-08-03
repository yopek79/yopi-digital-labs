import { motion } from "framer-motion";

export default function Glow() {
  return (
    <>
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.45, 0.7, 0.45],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-80 w-80 rounded-full bg-cyan-500/20 blur-[90px]"
      />

      <motion.div
        animate={{
          scale: [1.05, 0.95, 1.05],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-56 w-56 rounded-full bg-blue-600/20 blur-[70px]"
      />

      <div className="absolute h-32 w-32 rounded-full bg-cyan-400/25 blur-3xl" />
    </>
  );
}