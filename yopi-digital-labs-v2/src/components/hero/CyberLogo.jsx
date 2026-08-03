import { motion } from "framer-motion";
import OrbitalRings from "./OrbitalRings";
import EarthGlow from "./EarthGlow";
import CyberY from "./CyberY";
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
      <div className="absolute h-80 w-80 rounded-full bg-cyan-400/20 blur-[90px] animate-pulse" />

      <EarthGlow />

<OrbitalRings />

<div className="relative z-10 flex h-64 w-64 items-center justify-center rounded-full border border-cyan-300/40 bg-[radial-gradient(circle_at_center,#0f2038_0%,#071120_70%,#050814_100%)] shadow-[0_0_80px_rgba(34,211,238,0.25)] backdrop-blur-xl">
        <CyberY />

      </div>
    </motion.div>
  );
}