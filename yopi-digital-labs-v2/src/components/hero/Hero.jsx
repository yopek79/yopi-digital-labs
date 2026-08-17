import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { translations } from "../../translations";
import HeroBackground from "./HeroBackground";
import { supabase } from "../../supabase";

export default function Hero({ language }) {
  const t = (translations[language] || translations.EN).hero;

  const [stats, setStats] = useState({
    views: 0,
    contacts: 0,
  });

  const viewCounted = useRef(false);

  useEffect(() => {
  const loadStats = async () => {
    try {
      await supabase.rpc("increment_views");

      const { data, error } = await supabase.rpc("get_site_stats");

      if (error) {
        console.error("Stats error:", error);
        return;
      }

      if (data?.[0]) {
        setStats({
          views: Number(data[0].views),
          contacts: Number(data[0].contacts),
        });
      }
    } catch (error) {
      console.error("Stats loading error:", error);
    }
  };

  loadStats();
}, []);
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden">
      
      <HeroBackground />

      {/* HERO CONTENT */}
      <div
        className="
          relative
          mx-auto
          flex
          min-h-[calc(100svh-96px)]
          w-full
          max-w-7xl
          flex-col
          px-5
          pb-12
          pt-20
          sm:px-6
          sm:pb-14
          lg:grid
          lg:grid-cols-2
          lg:items-start
          lg:gap-10
          lg:px-8
          lg:pt-32
          lg:pb-20
        "
      >
        {/* ================================================== */}
        {/* LEFT SIDE */}
        {/* ================================================== */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-1 w-full min-w-0"
        >
          {/* Badge */}
          <div
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-500/10
              px-3
              py-1.5
              text-[11px]
              font-medium
              text-cyan-300
              sm:mb-5
              sm:px-4
              sm:py-2
              sm:text-sm
            "
          >
            <Sparkles size={14} />
            {t.badge}
          </div>

          {/* Heading */}
          <h1
            className="
              max-w-[560px]
              pt-2
              text-5xl
              font-black
              leading-[1.05]
              tracking-tight
              text-white
              sm:pt-0
              sm:text-6xl
              lg:text-7xl
              lg:leading-[1.02]
            "
          >
            {t.titleLine1}
            <br />
            {t.titleLine2}{" "}
            <span
              className="
                bg-gradient-to-r
                from-cyan-300
                to-blue-500
                bg-clip-text
                text-transparent
              "
            >
              {t.titleHighlight}
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-6
              max-w-[560px]
              text-base
              leading-7
              text-white/70
              sm:mt-7
              sm:text-lg
              sm:leading-7
            "
          >
            {t.description}
          </p>

          {/* CTA */}
          <div
            className="
              mt-6
              flex
              flex-col
              gap-2.5
              sm:mt-8
              sm:flex-row
              sm:gap-3
            "
          >
            {/* Book Free Consultation */}
            <button
              onClick={() => scrollToSection("contact")}
              className="
                group
                flex
                h-12
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                via-sky-500
                to-blue-600
                px-6
                text-sm
                font-semibold
                text-white
                transition-all
                duration-500
                hover:-translate-y-1
                hover:scale-[1.02]
                hover:shadow-[0_0_40px_rgba(34,211,238,.45)]
                sm:h-14
                sm:w-auto
                sm:px-8
              "
            >
              {t.consultation}

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            {/* View Services */}
            <button
              onClick={() => scrollToSection("services")}
              className="
                flex
                h-12
                w-full
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/5
                px-6
                text-sm
                font-semibold
                text-white
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400/30
                hover:bg-white/10
                sm:h-14
                sm:w-auto
                sm:px-8
              "
            >
              {t.servicesButton}
            </button>
          </div>

          {/* Stats */}
<div
  className="
    mt-10
    grid
    grid-cols-2
    gap-4
    border-t
    border-white/10
    pt-6
  "
>
  <div>
    <h3 className="text-xl font-bold text-white sm:text-2xl">
      {stats.views}
    </h3>

    <p className="mt-1 text-xs text-white/60 sm:text-sm">
      {language === "DE"
        ? "Website-Aufrufe"
        : language === "HU"
        ? "Weboldal-megtekintések"
        : "Website Views"}
    </p>
  </div>

  <div>
    <h3 className="text-xl font-bold text-white sm:text-2xl">
      {stats.contacts}
    </h3>

    <p className="mt-1 text-xs text-white/60 sm:text-sm">
      {language === "DE"
        ? "Kontaktaufnahmen"
        : language === "HU"
        ? "Kapcsolatfelvételek"
        : "Contact Requests"}
    </p>
  </div>
</div>
        </motion.div>

        {/* ================================================== */}
        {/* RIGHT SIDE – YOPI HERO IMAGE */}
        {/* ================================================== */}

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="
            order-2
            relative
            flex
            w-full
            items-start
            justify-center
            lg:justify-end
            lg:mt-7
            lg:translate-x-0
          "
        >
          <div
            className="
              relative
              mt-0
              w-full
              max-w-[560px]
              mix-blend-screen
              after:pointer-events-none
              after:content-['']
              after:absolute
              after:inset-0
              after:z-10
              after:bg-[linear-gradient(to_right,#060816_0%,transparent_18%,transparent_82%,#060816_100%),linear-gradient(to_bottom,#060816_0%,transparent_18%,transparent_82%,#060816_100%)]
            "
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 88% 86% at 50% 50%, black 28%, rgba(0,0,0,0.94) 50%, rgba(0,0,0,0.55) 70%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 88% 86% at 50% 50%, black 28%, rgba(0,0,0,0.94) 50%, rgba(0,0,0,0.55) 70%, transparent 100%)",
            }}
          >
            <img
              src="/hero kész.png"
              alt="Yopi Digital Labs"
              className="
                block
                h-auto
                w-full
                object-contain
              "
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-48
          bg-gradient-to-t
          from-[#060816]
          to-transparent
        "
      />
    </section>
  );
}