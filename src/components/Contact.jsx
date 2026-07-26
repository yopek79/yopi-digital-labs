import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { language } = useLanguage();

  const content = {
    en: {
      badge: "CONTACT",
      title1: "Let's Build Your",
      title2: "Next AI Solution",
      description:
        "Whether you need AI automation, a modern website or a custom digital solution, we'd love to hear about your project.",

      email: "Email",
      phone: "Phone",
      location: "Location",

      placeholders: {
        name: "Your Name",
        email: "Your Email",
        company: "Company",
        message: "Tell us about your project...",
      },

      button: "Send Message",
    },

    de: {
      badge: "KONTAKT",
      title1: "Lassen Sie uns Ihre",
      title2: "nächste KI-Lösung entwickeln",
      description:
        "Ob KI-Automatisierung, moderne Website oder individuelle Softwarelösung – wir freuen uns darauf, mehr über Ihr Projekt zu erfahren.",

      email: "E-Mail",
      phone: "Telefon",
      location: "Standort",

      placeholders: {
        name: "Ihr Name",
        email: "Ihre E-Mail",
        company: "Unternehmen",
        message: "Erzählen Sie uns von Ihrem Projekt...",
      },

      button: "Nachricht senden",
    },
  };

  const t = content[language];

  const cards = [
    {
      icon: <Mail className="text-cyan-400" />,
      label: t.email,
      value: "hello@yopidigitallabs.ch",
    },
    {
      icon: <Phone className="text-cyan-400" />,
      label: t.phone,
      value: "+41 XX XXX XX XX",
    },
    {
      icon: <MapPin className="text-cyan-400" />,
      label: t.location,
      value: "Switzerland",
    },
  ];

  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-8 py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="grid gap-12 lg:grid-cols-2"
      >
        {/* Left */}
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-400">
            {t.badge}
          </p>

          <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            {t.title1}
            <br />
            <span className="text-cyan-400">
              {t.title2}
            </span>
          </h2>

          <p className="mb-10 max-w-xl text-slate-400 leading-7">
            {t.description}
          </p>

          <div className="space-y-5">
            {cards.map((card, index) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  x: 5,
                }}
                className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(34,211,238,0.12)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">
                  {card.icon}
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    {card.label}
                  </p>

                  <p className="font-medium text-white">
                    {card.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right */}
        <motion.form
          whileHover={{ y: -4 }}
          className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_0_35px_rgba(34,211,238,0.08)]"
        >
          <input
            type="text"
            placeholder={t.placeholders.name}
            className="w-full rounded-xl border border-white/10 bg-slate-900/40 p-4 text-white outline-none transition focus:border-cyan-400"
          />

          <input
            type="email"
            placeholder={t.placeholders.email}
            className="w-full rounded-xl border border-white/10 bg-slate-900/40 p-4 text-white outline-none transition focus:border-cyan-400"
          />

          <input
            type="text"
            placeholder={t.placeholders.company}
            className="w-full rounded-xl border border-white/10 bg-slate-900/40 p-4 text-white outline-none transition focus:border-cyan-400"
          />

          <textarea
            rows="6"
            placeholder={t.placeholders.message}
            className="w-full rounded-xl border border-white/10 bg-slate-900/40 p-4 text-white outline-none transition focus:border-cyan-400"
          />

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-4 font-semibold text-slate-950 transition duration-300 hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]"
          >
            {t.button}
            <ArrowRight size={18} />
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
}