import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    text: "We learn about your business, goals and identify where AI can create the biggest impact.",
  },
  {
    number: "02",
    title: "Strategy",
    text: "We design the architecture and define the optimal workflow for your project.",
  },
  {
    number: "03",
    title: "Development",
    text: "We build your AI automation, website or custom software using modern technologies.",
  },
  {
    number: "04",
    title: "Launch",
    text: "After deployment we monitor, optimize and continuously improve your solution.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-40 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Our Process
          </p>

          <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
            From idea to
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              {" "}AI-powered reality.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Every successful solution starts with a clear roadmap and ends with
            measurable business results.
          </p>
        </motion.div>

        {/* Timeline */}
        
<div className="relative mx-auto mt-14 sm:mt-16 max-w-5xl">

  <div className="absolute left-6 top-0 h-full w-px bg-cyan-500/30" />

  <div className="space-y-8 sm:space-y-10">

    {steps.map((step, index) => (
      <motion.div
        key={step.number}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: index * 0.15,
        }}
        className="relative flex gap-10"
      >
        {/* Dot */}
        <div className="relative z-10 flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full border border-cyan-400/50 bg-[#08111f] shadow-[0_0_30px_rgba(34,211,238,.35)]">
          <div className="h-3 w-3 animate-pulse rounded-full bg-cyan-400" />
        </div>

        {/* Card */}
        <div className="group flex-1 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(34,211,238,.15)]">

          <div className="text-sm font-bold tracking-[0.3em] text-cyan-400">
            {step.number}
          </div>

          <h3 className="mt-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
            {step.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-white/60">
            {step.text}
          </p>

        </div>
      </motion.div>
    ))}

  </div>

</div>
            </div>
  </section>
  );
}