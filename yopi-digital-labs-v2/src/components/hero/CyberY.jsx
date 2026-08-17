import { motion } from "framer-motion";

const depthLayers = Array.from({ length: 10 }, (_, i) => i);

function YLayer({ index, front }) {
  return (
    <svg
      viewBox="0 0 240 240"
      className="absolute inset-0 h-full w-full overflow-visible"
      style={{
        transform: `translateZ(${index * 1.2}px)`,
        
        transformStyle: "preserve-3d",
      }}
    >
      <defs>
        <linearGradient
          id={`frontGradient-${index}`}
          x1="10%"
          y1="0%"
          x2="90%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#f2feff" />
          <stop offset="25%" stopColor="#a5f3fc" />
          <stop offset="55%" stopColor="#22d3ee" />
          <stop offset="80%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>

        <linearGradient
          id={`sideGradient-${index}`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#155e75" />
          <stop offset="45%" stopColor="#075985" />
          <stop offset="100%" stopColor="#172554" />
        </linearGradient>

        <filter id={`glow-${index}`}>
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* A vastag 3D test */}
      <path
        d="
          M38 30
          L58 20
          L120 84
          L182 20
          L202 30
          L136 101
          L136 192
          L120 214
          L104 192
          L104 101
          Z
        "
        fill={
          front
            ? `url(#frontGradient-${index})`
            : `url(#sideGradient-${index})`
        }
      />

      {/* Csak a legelső rétegen rajzoljuk ki a részleteket */}
      {front && (
        <>
          {/* Belső sötét kivágás */}
          <path
            d="
              M57 39
              L65 35
              L120 91
              L175 35
              L183 39
              L127 100
              L127 187
              L120 198
              L113 187
              L113 100
              Z
            "
            fill="#050b18"
          />

          {/* Belső neon kontúr */}
          <path
            d="
              M57 39
              L65 35
              L120 91
              L175 35
              L183 39
              L127 100
              L127 187
            "
            fill="none"
            stroke="#d9fcff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Külső fényperem */}
          <path
            d="
              M38 30
              L58 20
              L120 84
              L182 20
              L202 30
              L136 101
              L136 192
            "
            fill="none"
            stroke="#f0feff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
    </svg>
  );
}

export default function CyberY() {
  return (
    <motion.div
      className="relative h-52 w-52"
      style={{
        perspective: "1100px",
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateY: [0, 360],
      }}
      transition={{
        duration: 16,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {/* Neon aura */}
      <div
        className="absolute inset-8 rounded-full bg-cyan-400/20 blur-3xl"
        style={{
          transform: "translateZ(-40px)",
        }}
      />

      {/* 3D extrusion */}
      {depthLayers.map((index) => (
        <YLayer
          key={index}
          index={index}
          front={index === depthLayers.length - 1}
        />
      ))}
    </motion.div>
  );
}