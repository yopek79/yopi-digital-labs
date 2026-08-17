import { motion } from "framer-motion";

export default function EarthGlow() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="
        pointer-events-none
        absolute
        left-1/2
        bottom-[-8px]
        z-[5]
        w-[760px]
        -translate-x-1/2
      "
    >
      <img
        src="/earth-horizon.png"
        alt=""
        className="
          block
          w-full
          h-auto
          mix-blend-screen
        "
      />
    </motion.div>
  );
}