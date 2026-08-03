import { motion } from "framer-motion";

const nodes = [
  { x: 50, y: 25 },
  { x: 25, y: 55 },
  { x: 75, y: 55 },
  { x: 50, y: 90 },
];

export default function YopiSymbol() {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className="h-36 w-36"
      animate={{ rotate: [0, 2, -2, 0] }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Connections */}
      <motion.line
        x1="50"
        y1="48"
        x2="25"
        y2="55"
        stroke="#67e8f9"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2 }}
      />

      <motion.line
        x1="50"
        y1="48"
        x2="75"
        y2="55"
        stroke="#67e8f9"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      />

      <motion.line
        x1="50"
        y1="48"
        x2="50"
        y2="90"
        stroke="#67e8f9"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      />

      {/* Nodes */}
      {nodes.map((node, index) => (
        <motion.circle
          key={index}
          cx={node.x}
          cy={node.y}
          r="4"
          fill="#22d3ee"
          animate={{
            r: [4, 5.5, 4],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: index * 0.25,
          }}
        />
      ))}

      {/* Core */}
      <motion.circle
        cx="50"
        cy="48"
        r="7"
        fill="#38bdf8"
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
    </motion.svg>
  );
}