import { motion } from "framer-motion";

export default function CyberY() {
  return (
    <motion.svg
      viewBox="0 0 240 240"
      className="h-44 w-44 sm:h-52 sm:w-52"
      animate={{
        filter: [
          "drop-shadow(0 0 12px rgba(34,211,238,.45))",
          "drop-shadow(0 0 24px rgba(34,211,238,.85))",
          "drop-shadow(0 0 12px rgba(34,211,238,.45))",
        ],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <defs>
        <linearGradient id="cyberGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d8fbff" />
          <stop offset="45%" stopColor="#67e8f9" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>

      {/* Left arm */}
      <path
        d="M45 45 L105 105"
        stroke="url(#cyberGradient)"
        strokeWidth="22"
        strokeLinecap="round"
      />

      {/* Right arm */}
      <path
        d="M195 45 L135 105"
        stroke="url(#cyberGradient)"
        strokeWidth="22"
        strokeLinecap="round"
      />

      {/* Stem */}
      <path
        d="M120 105 L120 195"
        stroke="url(#cyberGradient)"
        strokeWidth="22"
        strokeLinecap="round"
      />

      {/* Core */}
      <circle
        cx="120"
        cy="105"
        r="9"
        fill="#baf7ff"
      />
    </motion.svg>
  );
}