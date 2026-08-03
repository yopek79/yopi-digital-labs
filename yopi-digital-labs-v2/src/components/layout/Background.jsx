import { motion } from "framer-motion";

const particles = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  delay: Math.random() * 8,
  duration: 6 + Math.random() * 8,
  size: 2 + Math.random() * 3,
}));

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#060816]">
      {/* Base radial glow */}
      <div
        className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(59,167,255,.18) 0%, rgba(59,167,255,.08) 35%, transparent 70%)",
        }}
      />

      {/* Secondary glow */}
      <div
        className="absolute right-[-250px] top-[20%] h-[700px] w-[700px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(124,92,255,.10) 0%, transparent 70%)",
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Animated particles */}
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-cyan-300"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            opacity: [0.15, 0.8, 0.15],
            y: [-10, 10, -10],
            scale: [1, 1.6, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Bottom vignette */}
      <div
        className="absolute inset-x-0 bottom-0 h-[320px]"
        style={{
          background:
            "linear-gradient(to top, rgba(6,8,22,1), rgba(6,8,22,.65), transparent)",
        }}
      />
    </div>
  );
}