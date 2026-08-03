import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

const links = [
  "Home",
  "Services",
  "Process",
  "Contact",
];

export default function Footer() {
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
            Building intelligent AI automations, custom software and
            high-performance websites for modern businesses.
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
            Quick Links
          </h3>

          <div className="space-y-3">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block text-white/60 transition hover:text-cyan-300"
              >
                {link}
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
            Contact
          </h3>

          <div className="space-y-4">

            <div className="flex items-center gap-3 text-white/60">
              <Mail size={18} className="text-cyan-400" />
              hello@yopidigitallabs.ch
            </div>

            <div className="flex items-center gap-3 text-white/60">
              <MapPin size={18} className="text-cyan-400" />
              Switzerland
            </div>

          </div>
        </motion.div>

      </div>

      <div className="relative mx-auto mt-16 max-w-7xl border-t border-white/10 pt-8 pb-8 text-center text-sm text-white/40">
        © 2026 Yopi Digital Labs. Built with AI in Switzerland.
      </div>

    </footer>
  );
}