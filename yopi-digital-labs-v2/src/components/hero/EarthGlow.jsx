import { motion } from "framer-motion";

export default function EarthGlow() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="pointer-events-none absolute bottom-[-180px] left-1/2 -translate-x-1/2"
    >
      {/* Earth Horizon */}
      <div className="relative h-[260px] w-[900px] overflow-hidden">

        <div
          className="
            absolute
            left-1/2
            top-24
            h-[900px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            border
            border-cyan-300/20
            bg-gradient-to-t
            from-cyan-500/20
            via-blue-500/10
            to-transparent
            blur-[1px]
          "
        />

        {/* Horizon Glow */}

        <div
          className="
            absolute
            left-1/2
            top-[110px]
            h-4
            w-[600px]
            -translate-x-1/2
            rounded-full
            bg-cyan-300/80
            blur-xl
          "
        />

      </div>
    </motion.div>
  );
}