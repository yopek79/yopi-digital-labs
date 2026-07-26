import { motion } from "framer-motion";

export default function Background() {
  return (
    <>
      {/* Base background */}
      <div className="fixed inset-0 -z-50 bg-slate-950" />

      {/* Top radial light */}
      <div
        className="fixed inset-0 -z-50"
        style={{
          background:
            "radial-gradient(circle at top, rgba(34,211,238,0.08), transparent 45%)",
        }}
      />

      {/* Center glow */}
      <motion.div
        className="fixed left-1/2 top-0 -z-40 h-[750px] w-[750px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[190px]"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Left glow */}
      <motion.div
        className="fixed bottom-[-120px] left-[-120px] -z-40 h-[550px] w-[550px] rounded-full bg-sky-500/10 blur-[170px]"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Right glow */}
      <motion.div
        className="fixed right-[-80px] top-24 -z-40 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[150px]"
        animate={{
          x: [0, -40, 0],
          y: [0, 35, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bottom glow */}
      <motion.div
        className="fixed bottom-[-250px] left-1/2 -z-40 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-cyan-600/5 blur-[220px]"
        animate={{
          opacity: [0.15, 0.35, 0.15],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Large grid */}
      <div
        className="fixed inset-0 -z-30 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.22) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.22) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Fine grid */}
      <div
        className="fixed inset-0 -z-20 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "12px 12px",
        }}
      />

      {/* Soft vignette */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle, transparent 55%, rgba(2,6,23,.55) 100%)",
        }}
      />
    </>
  );
}