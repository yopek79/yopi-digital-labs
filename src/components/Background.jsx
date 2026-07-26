import { motion } from "framer-motion";

export default function Background() {
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <>
      {/* Base background */}
      <div className="fixed inset-0 -z-50 bg-slate-950" />

      {/* Top radial light */}
      <div
        className="fixed inset-0 -z-50"
        style={{
          background:
            "radial-gradient(circle at top, rgba(34,211,238,.08), transparent 45%)",
        }}
      />

      {/* Main glow */}
      <motion.div
        className="fixed left-1/2 top-0 -z-40 -translate-x-1/2 rounded-full bg-cyan-500/10"
        style={{
          width: isMobile ? 420 : 700,
          height: isMobile ? 420 : 700,
          filter: `blur(${isMobile ? 80 : 160}px)`,
          willChange: "transform, opacity",
        }}
        animate={
          isMobile
            ? { opacity: [0.35, 0.5, 0.35] }
            : {
                scale: [1, 1.05, 1],
                opacity: [0.35, 0.6, 0.35],
              }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Left glow - desktop only */}
      {!isMobile && (
        <motion.div
          className="fixed bottom-[-120px] left-[-120px] -z-40 h-[520px] w-[520px] rounded-full bg-sky-500/10"
          style={{
            filter: "blur(140px)",
            willChange: "transform",
          }}
          animate={{
            x: [0, 40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Right glow - desktop only */}
      {!isMobile && (
        <motion.div
          className="fixed right-[-80px] top-24 -z-40 h-[420px] w-[420px] rounded-full bg-cyan-400/10"
          style={{
            filter: "blur(120px)",
            willChange: "transform",
          }}
          animate={{
            x: [0, -30, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Grid */}
      <div
        className="fixed inset-0 -z-30 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Vignette */}
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