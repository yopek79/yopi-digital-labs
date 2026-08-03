import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@yopidigitallabs.ch",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+41 XX XXX XX XX",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Switzerland",
  },
  {
    icon: Clock,
    title: "Response",
    value: "Within 24 hours",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-5 py-20 sm:px-6 lg:px-8"
    >
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
            Let's build something
            <span className="text-cyan-400"> amazing.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-white/60">
            Whether you need AI automation, a modern website or a custom software
            solution, we'd love to hear about your project.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >

            {contactInfo.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:border-cyan-400/40 hover:bg-white/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                    <Icon size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-white/50">
                      {item.title}
                    </p>

                    <h3 className="text-lg font-semibold text-white">
                      {item.value}
                    </h3>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* RIGHT */}

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="grid gap-5">
                          <input
                type="text"
                placeholder="Your Name"
                className="rounded-2xl border border-white/10 bg-[#0a1324] px-5 py-4 text-white outline-none transition focus:border-cyan-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="rounded-2xl border border-white/10 bg-[#0a1324] px-5 py-4 text-white outline-none transition focus:border-cyan-400"
              />

              <input
                type="text"
                placeholder="Company (optional)"
                className="rounded-2xl border border-white/10 bg-[#0a1324] px-5 py-4 text-white outline-none transition focus:border-cyan-400"
              />

              <textarea
                rows={6}
                placeholder="Tell us about your project..."
                className="resize-none rounded-2xl border border-white/10 bg-[#0a1324] px-5 py-4 text-white outline-none transition focus:border-cyan-400"
              />

              <button
                type="submit"
                className="group mt-2 flex h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,211,238,.35)]"
              >
                Send Message

                <Send
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </motion.form>

        </div>
      </div>
    </section>
  );
}    
