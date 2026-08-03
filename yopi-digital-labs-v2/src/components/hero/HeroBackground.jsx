import { motion } from "framer-motion";

const stars = Array.from({ length: 45 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: Math.random() * 2 + 1,
  delay: Math.random() * 5,
  duration: 4 + Math.random() * 4,
}));

export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* Top Glow */}

      <div
        className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,.18) 0%, rgba(56,189,248,.08) 45%, transparent 75%)",
        }}
      />

      {/* Left Glow */}

      <div
        className="absolute -left-40 top-40 h-[500px] w-[500px] rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,.12) 0%, transparent 75%)",
        }}
      />

      {/* Right Glow */}

      <div
        className="absolute -right-48 top-24 h-[600px] w-[600px] rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,.10) 0%, transparent 75%)",
        }}
      />

      {/* Stars */}

      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="absolute rounded-full bg-cyan-300"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.15, 0.8, 0.15],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
            {/* Digital Grid */}

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "90px 90px",
        }}
      />

      {/* Bottom Horizon */}

      <div
        className="absolute bottom-0 left-1/2 h-[420px] w-[1200px] -translate-x-1/2 rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(34,211,238,.18) 0%, rgba(34,211,238,.06) 45%, transparent 75%)",
        }}
      />

      {/* Top Vignette */}

      <div
        className="absolute inset-x-0 top-0 h-40"
        style={{
          background:
            "linear-gradient(to bottom, rgba(6,8,22,.65), transparent)",
        }}
      />

      {/* Bottom Vignette */}

      <div
        className="absolute inset-x-0 bottom-0 h-64"
        style={{
          background:
            "linear-gradient(to top, rgba(6,8,22,.95), transparent)",
        }}
      />

    </div>
  );
}