import { motion } from "framer-motion";
import OrbitalRings from "./OrbitalRings";
import EarthGlow from "./EarthGlow";

export default function CyberLogo() {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative flex h-[420px] w-[420px] items-center justify-center"
    >
      {/* Central glow */}
      <div className="absolute h-80 w-80 rounded-full bg-cyan-400/20 blur-[90px] animate-pulse" />

      {/* Earth glow */}
      <EarthGlow />

      {/* Orbiting rings + particles */}
      <OrbitalRings />

      {/* Original Yopi GIF */}
      <div className="relative z-10 flex h-72 w-72 items-center justify-center">
        <img
          src="/yopi-neon-y-transparent.gif"
          alt="Yopi Digital Labs"
          className="h-full w-full object-contain mix-blend-screen"
        />
      </div>
    </motion.div>
  );
}