import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-[#060816]" />

      {/* Main cyan atmosphere */}
      <motion.div
        className="
          absolute
          left-[8%]
          top-[18%]
          h-[520px]
          w-[520px]
          rounded-full
          bg-cyan-400/[0.07]
          blur-[150px]
        "
        animate={{
          x: [0, 100, 40, -30, 0],
          y: [0, -45, 55, 20, 0],
          scale: [1, 1.12, 0.96, 1.08, 1],
          opacity: [0.55, 0.8, 0.6, 0.75, 0.55],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blue atmosphere */}
      <motion.div
        className="
          absolute
          right-[5%]
          top-[5%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-blue-600/[0.08]
          blur-[170px]
        "
        animate={{
          x: [0, -90, -30, 60, 0],
          y: [0, 60, -35, 35, 0],
          scale: [1, 0.94, 1.08, 0.98, 1],
          opacity: [0.5, 0.7, 0.55, 0.75, 0.5],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Central soft glow */}
      <motion.div
        className="
          absolute
          left-1/2
          top-[45%]
          h-[420px]
          w-[760px]
          -translate-x-1/2
          rounded-full
          bg-sky-400/[0.05]
          blur-[150px]
        "
        animate={{
          x: ["-50%", "-43%", "-56%", "-47%", "-50%"],
          y: [0, -25, 20, -15, 0],
          scale: [1, 1.06, 0.97, 1.04, 1],
          opacity: [0.4, 0.65, 0.45, 0.6, 0.4],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Slow horizontal light sweep */}
      <motion.div
        className="
          absolute
          left-[-30%]
          top-[52%]
          h-[180px]
          w-[80%]
          rotate-[-7deg]
          rounded-full
          bg-cyan-300/[0.04]
          blur-[100px]
        "
        animate={{
          x: ["0%", "55%", "95%", "40%", "0%"],
          opacity: [0.15, 0.45, 0.25, 0.4, 0.15],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating particles */}
      <motion.div
        className="absolute left-[12%] top-[24%] h-[3px] w-[3px] rounded-full bg-cyan-200"
        animate={{
          x: [0, 45, 15, -30, 0],
          y: [0, -20, 30, 10, 0],
          opacity: [0.15, 0.7, 0.25, 0.55, 0.15],
          scale: [1, 1.5, 1, 1.3, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute left-[34%] top-[16%] h-[2px] w-[2px] rounded-full bg-blue-200"
        animate={{
          x: [0, -35, 25, 8, 0],
          y: [0, 35, -20, 15, 0],
          opacity: [0.1, 0.6, 0.2, 0.5, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute right-[17%] top-[26%] h-[3px] w-[3px] rounded-full bg-cyan-200"
        animate={{
          x: [0, -40, -8, 32, 0],
          y: [0, -25, 25, -10, 0],
          opacity: [0.1, 0.7, 0.2, 0.55, 0.1],
          scale: [1, 1.4, 1, 1.25, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute right-[31%] top-[58%] h-[2px] w-[2px] rounded-full bg-blue-200"
        animate={{
          x: [0, 40, -20, 28, 0],
          y: [0, 20, -25, 5, 0],
          opacity: [0.1, 0.55, 0.15, 0.5, 0.1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />

      <motion.div
        className="absolute left-[24%] top-[68%] h-[3px] w-[3px] rounded-full bg-cyan-200"
        animate={{
          x: [0, 35, -20, 15, 0],
          y: [0, -20, 25, -5, 0],
          opacity: [0.1, 0.5, 0.15, 0.45, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Very subtle vignette */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_30%,rgba(3,6,18,0.38)_100%)]
        "
      />

      {/* Bottom fade */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-40
          bg-gradient-to-t
          from-[#060816]
          to-transparent
        "
      />
    </div>
  );
}