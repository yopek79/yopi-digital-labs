import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { supabase } from "../../supabase";

export default function Contact({ language }) {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const texts = {
    EN: {
      label: "Contact",
      title: "Let's build something",
      highlight: " amazing.",
      description:
        "Whether you need AI automation, a modern website or a custom software solution, we'd love to hear about your project.",
      email: "Email",
      phone: "Phone",
      location: "Location",
      response: "Response",
      responseValue: "Within 24 hours",
      name: "Your Name",
      emailPlaceholder: "Email Address",
      company: "Company (optional)",
      message: "Tell us about your project...",
      button: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Something went wrong. Please try again.",
    },

    DE: {
      label: "Kontakt",
      title: "Lassen Sie uns etwas",
      highlight: " Großartiges bauen.",
      description:
        "Ob KI-Automatisierung, moderne Website oder individuelle Software – wir freuen uns auf Ihr Projekt.",
      email: "E-Mail",
      phone: "Telefon",
      location: "Standort",
      response: "Antwort",
      responseValue: "Innerhalb von 24 Stunden",
      name: "Ihr Name",
      emailPlaceholder: "E-Mail-Adresse",
      company: "Unternehmen (optional)",
      message: "Erzählen Sie uns von Ihrem Projekt...",
      button: "Nachricht senden",
      sending: "Wird gesendet...",
      success: "Nachricht erfolgreich gesendet!",
      error: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
    },

    HU: {
      label: "Kapcsolat",
      title: "Építsünk valami",
      highlight: " igazán nagyszerűt.",
      description:
        "Legyen szó AI automatizálásról, modern weboldalról vagy egyedi szoftverről, örömmel hallunk a projektedről.",
      email: "E-mail",
      phone: "Telefon",
      location: "Helyszín",
      response: "Válaszidő",
      responseValue: "24 órán belül",
      name: "Neved",
      emailPlaceholder: "E-mail cím",
      company: "Cég (opcionális)",
      message: "Mesélj a projektedről...",
      button: "Üzenet küldése",
      sending: "Küldés...",
      success: "Az üzenet sikeresen elküldve!",
      error: "Hiba történt. Kérlek, próbáld újra.",
    },
  };

  const t = texts[language] || texts.EN;

  const emailAddress = ["yopi", "@", "yopidigitallabs", ".ch"].join("");

const phoneNumber = [
  "+41",
  " ",
  "76",
  " ",
  "253",
  " ",
  "44",
  " ",
  "77",
].join("");

const [emailRevealed, setEmailRevealed] = useState(false);
const [phoneRevealed, setPhoneRevealed] = useState(false);

const contactInfo = [
  {
    icon: Mail,
    title: t.email,
    value: emailAddress,
    reveal: true,
  },
  {
    icon: Phone,
    title: t.phone,
    value: phoneNumber,
    reveal: true,
  },
  {
    icon: MapPin,
    title: t.location,
    value: "Switzerland",
  },
  {
    icon: Clock,
    title: t.response,
    value: t.responseValue,
  },
];

  const handleSubmit = async (event) => {
  event.preventDefault();

  const form = event.currentTarget;

  setSending(true);
  setSent(false);
  setError(false);

  try {
    await emailjs.sendForm(
      "hostpoint_smtp",
      "template_izepk3n",
      form,
      {
        publicKey: "kpfKz_t9pBv6rHssy",
      }
    );

    const { error: statsError } = await supabase.rpc("increment_contacts");

if (statsError) {
  console.error("Contact counter error:", statsError);
}

setSent(true);
form.reset();
  } catch (err) {
    console.error("EmailJS error:", err);
    setError(true);
  } finally {
    setSending(false);
  }
};

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
            {t.label}
          </p>

          <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
            {t.title}
            <span className="text-cyan-400">{t.highlight}</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-white/60">
            {t.description}
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

  const isEmail = item.icon === Mail;
  const isPhone = item.icon === Phone;

  const isRevealed =
    (isEmail && emailRevealed) ||
    (isPhone && phoneRevealed);

  const handleReveal = () => {
    if (isEmail) {
      setEmailRevealed(true);
    }

    if (isPhone) {
      setPhoneRevealed(true);
    }
  };

  return (
    <div
      key={index}
      onClick={item.reveal ? handleReveal : undefined}
      className={`flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:border-cyan-400/40 hover:bg-white/10 ${
        item.reveal ? "cursor-pointer" : ""
      }`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
        <Icon size={22} />
      </div>

      <div>
        <p className="text-sm text-white/50">
          {item.title}
        </p>

        <h3 className="text-lg font-semibold text-white">
          {isRevealed ? (
            item.value
          ) : item.reveal ? (
            <span className="text-white/50">
              {language === "HU"
                ? "Kattints a megjelenítéshez"
                : language === "DE"
                ? "Klicken zum Anzeigen"
                : "Click to reveal"}
            </span>
          ) : (
            item.value
          )}
        </h3>
      </div>
    </div>
  );
})}
          </motion.div>

          {/* RIGHT */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="grid gap-5">

              <input
                type="text"
                name="name"
                placeholder={t.name}
                required
                className="rounded-2xl border border-white/10 bg-[#0a1324] px-5 py-4 text-white outline-none transition focus:border-cyan-400"
              />

              <input
                type="email"
                name="email"
                placeholder={t.emailPlaceholder}
                required
                className="rounded-2xl border border-white/10 bg-[#0a1324] px-5 py-4 text-white outline-none transition focus:border-cyan-400"
              />

              <input
                type="text"
                name="company"
                placeholder={t.company}
                className="rounded-2xl border border-white/10 bg-[#0a1324] px-5 py-4 text-white outline-none transition focus:border-cyan-400"
              />

              <textarea
                name="message"
                rows={6}
                placeholder={t.message}
                required
                className="resize-none rounded-2xl border border-white/10 bg-[#0a1324] px-5 py-4 text-white outline-none transition focus:border-cyan-400"
              />

              <button
                type="submit"
                disabled={sending}
                className="group mt-2 flex h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,211,238,.35)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? t.sending : t.button}

                <Send
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              {sent && (
                <p className="text-center text-sm font-medium text-cyan-300">
                  {t.success}
                </p>
              )}

              {error && (
                <p className="text-center text-sm font-medium text-red-400">
                  {t.error}
                </p>
              )}

            </div>
          </motion.form>

        </div>
      </div>
    </section>
  );
}