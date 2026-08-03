import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import CyberLogo from "./CyberLogo";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <HeroBackground />
      <div className="mx-auto flex min-h-[calc(100svh-96px)] w-full max-w-7xl flex-col justify-center px-5 pb-12 sm:px-6 sm:pb-14 lg:grid lg:grid-cols-2 lg:items-center lg:gap-32 lg:px-8 lg:pt-32 lg:pb-20">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-1 w-full min-w-0"
        >
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1.5 text-[11px] font-medium text-cyan-300 sm:mb-5 sm:px-4 sm:py-2 sm:text-sm">
            <Sparkles size={14} />
            AI Automation • Switzerland
          </div>

          {/* Heading */}
          <h1 className="max-w-xl pt-2 text-5xl font-black leading-[1.05] tracking-tight text-white sm:pt-0 sm:text-6xl sm:leading-[1.05] lg:text-7xl lg:leading-[1.02]">
  Build the Future
  <br />
  with{" "}
  <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
    AI
  </span>
</h1>

          {/* Description */}
          <p className="mt-5 max-w-md text-sm leading-6 text-white/70 sm:mt-6 sm:max-w-xl sm:text-base lg:text-lg">
            We create intelligent AI automations, custom software and
            high-performance websites that help businesses save time,
            reduce costs and grow faster.
          </p>

          {/* CTA */}
          <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:gap-3">
            <button className="group flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 px-6 text-sm font-semibold text-white transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(34,211,238,.45)] sm:h-14 sm:w-auto sm:px-8">
              Book Free Consultation

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <button className="flex h-12 w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10 sm:h-14 sm:w-auto sm:px-8">
              View Services
            </button>
          </div>
                    {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
            <div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                50+
              </h3>
              <p className="mt-1 text-xs text-white/60 sm:text-sm">
                Projects
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                100%
              </h3>
              <p className="mt-1 text-xs text-white/60 sm:text-sm">
                Custom
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                24/7
              </h3>
              <p className="mt-1 text-xs text-white/60 sm:text-sm">
                Support
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-2 mt-8 flex justify-center sm:mt-10 lg:mt-0"
        >
          <div className="-mt-6 scale-[0.72] sm:-mt-4 sm:scale-[0.85] lg:mt-0 lg:scale-100">
  <CyberLogo />
</div>
        </motion.div>
              </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#060816] to-transparent" />
    </section>
  );
}