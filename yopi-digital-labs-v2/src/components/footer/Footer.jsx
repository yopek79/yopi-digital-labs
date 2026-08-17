import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

export default function Footer({ language }) {
  const texts = {
    EN: {
      description:
        "Building intelligent AI automations, custom software and high-performance websites for modern businesses.",
      quickLinks: "Quick Links",
      home: "Home",
      services: "Services",
      process: "Process",
      contact: "Contact",
      location: "Switzerland",
      bottom: "Built with AI in Switzerland.",
    },

    DE: {
      description:
        "Wir entwickeln intelligente KI-Automatisierungen, individuelle Software und leistungsstarke Websites für moderne Unternehmen.",
      quickLinks: "Schnellzugriff",
      home: "Startseite",
      services: "Leistungen",
      process: "Prozess",
      contact: "Kontakt",
      location: "Schweiz",
      bottom: "Mit KI in der Schweiz entwickelt.",
    },

    HU: {
      description:
        "Intelligens AI automatizálásokat, egyedi szoftvereket és nagy teljesítményű weboldalakat készítünk modern vállalkozások számára.",
      quickLinks: "Gyorslinkek",
      home: "Kezdőlap",
      services: "Szolgáltatások",
      process: "Folyamat",
      contact: "Kapcsolat",
      location: "Svájc",
      bottom: "AI segítségével fejlesztve Svájcban.",
    },
  };

  const t = texts[language] || texts.EN;

  const links = [
  { label: t.home, href: "#" },
  { label: t.services, href: "#services" },
  { label: t.process, href: "#process" },
  { label: t.contact, href: "#contact" },
];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050814] px-5 pt-24 pb-16 sm:px-6 lg:px-8">

      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-3">

        {/* Brand */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-black text-white">
            <span className="text-cyan-400">Yopi</span> Digital Labs
          </h2>

          <p className="mt-5 max-w-sm leading-7 text-white/60">
            {t.description}
          </p>
        </motion.div>

        {/* Links */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="mb-5 text-lg font-semibold text-white">
            {t.quickLinks}
          </h3>

          <div className="space-y-3">
  {links.map((link) => (
    <a
      key={link.href}
      href={link.href}
      onClick={(e) => {
        if (link.href === "#") {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
      }}
      className="block text-white/60 transition hover:text-cyan-300"
    >
      {link.label}
    </a>
  ))}
</div>
        </motion.div>

        {/* Contact */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="mb-5 text-lg font-semibold text-white">
            {t.contact}
          </h3>

          <div className="space-y-4">

            <div className="flex items-center gap-3 text-white/60">
              <Mail size={18} className="text-cyan-400" />
              yopi@yopidigitallabs.ch
            </div>

            <div className="flex items-center gap-3 text-white/60">
              <MapPin size={18} className="text-cyan-400" />
              {t.location}
            </div>

          </div>
        </motion.div>

      </div>

      <div className="relative mx-auto mt-16 max-w-7xl border-t border-white/10 pt-8 pb-8 text-center text-sm text-white/40">
        © 2026 Yopi Digital Labs. {t.bottom}
      </div>

    </footer>
  );
}