import { motion } from "framer-motion";
import { Bot, Code2, MessageSquare, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Automation",
    text: "Automate repetitive tasks and connect your business with intelligent AI workflows.",
  },
  {
    icon: Code2,
    title: "Web Development",
    text: "Modern, fast and SEO-optimized websites built for performance and growth.",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    text: "24/7 intelligent assistants that answer customers and generate leads.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    text: "Digital strategies that save time, reduce costs and increase revenue.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Our Services
          </p>

          <h2 className="mt-3 text-3xl font-black text-white sm:text-5xl">
            We build modern
            <span className="text-cyan-400"> digital solutions.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-white/60">
            From AI automation to custom software development, we create
            digital products that help businesses grow faster.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Icon size={24} />
                </div>

                <h3 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/60">
                  {service.text}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}