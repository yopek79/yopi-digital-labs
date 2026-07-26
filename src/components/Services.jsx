import { motion } from "framer-motion";
import {
  Bot,
  Globe,
  Workflow,
  PenTool,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Services() {
  const { language } = useLanguage();

  const content = {
    en: {
      subtitle: "WHAT WE DO",
      title: "Our",
      highlight: "Services",
      description:
        "We help businesses grow faster with practical AI solutions and modern digital experiences.",
      learnMore: "Learn More",
      services: [
        {
          icon: <Workflow className="h-10 w-10 text-cyan-400" />,
          title: "AI Automation",
          description:
            "Automate repetitive business processes and save valuable time.",
        },
        {
          icon: <Bot className="h-10 w-10 text-cyan-400" />,
          title: "AI Chatbots",
          description:
            "24/7 intelligent assistants for customer support and lead generation.",
        },
        {
          icon: <Globe className="h-10 w-10 text-cyan-400" />,
          title: "Web Development",
          description:
            "Modern, responsive websites built for speed and conversions.",
        },
        {
          icon: <PenTool className="h-10 w-10 text-cyan-400" />,
          title: "AI Content",
          description:
            "Professional AI-powered content for websites, blogs and marketing.",
        },
      ],
    },

    de: {
      subtitle: "UNSERE LEISTUNGEN",
      title: "Unsere",
      highlight: "Services",
      description:
        "Wir unterstützen Unternehmen mit praktischen KI-Lösungen und modernen digitalen Erlebnissen beim Wachstum.",
      learnMore: "Mehr erfahren",
      services: [
        {
          icon: <Workflow className="h-10 w-10 text-cyan-400" />,
          title: "KI-Automatisierung",
          description:
            "Automatisieren Sie wiederkehrende Geschäftsprozesse und sparen Sie wertvolle Zeit.",
        },
        {
          icon: <Bot className="h-10 w-10 text-cyan-400" />,
          title: "KI-Chatbots",
          description:
            "Intelligente Assistenten für Kundensupport und Leadgenerierung – rund um die Uhr.",
        },
        {
          icon: <Globe className="h-10 w-10 text-cyan-400" />,
          title: "Webentwicklung",
          description:
            "Moderne, responsive Websites für maximale Geschwindigkeit und mehr Kunden.",
        },
        {
          icon: <PenTool className="h-10 w-10 text-cyan-400" />,
          title: "KI-Content",
          description:
            "Professionelle KI-gestützte Inhalte für Websites, Blogs und Marketing.",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section
      id="services"
      className="mx-auto max-w-7xl px-8 py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16 text-center"
      >
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-400">
          {t.subtitle}
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">
          {t.title}{" "}
          <span className="text-cyan-400">
            {t.highlight}
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-slate-400">
          {t.description}
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {t.services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 transition group-hover:bg-cyan-500/20">
              {service.icon}
            </div>

            <h3 className="mb-4 text-2xl font-bold text-white">
              {service.title}
            </h3>

            <p className="mb-8 leading-7 text-slate-400">
              {service.description}
            </p>

            <button className="flex items-center gap-2 font-medium text-cyan-400 transition-all duration-300 group-hover:gap-4">
              {t.learnMore}
              <ArrowRight size={18} />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}