import React from "react";
import { motion } from "framer-motion";
import { services } from "../../data/data";
import { BriefcaseBusiness } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="relative py-28 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-black/40 backdrop-blur px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-green-400 shadow-[0_0_5px_rgba(0,255,120,0.2)]">
            <BriefcaseBusiness className="h-3.5 w-3.5" />
            What I Offer
          </span>

          <h2 className="mt-5 text-4xl sm:text-5xl font-bold text-white leading-tight">
            Built for innovation.
            <br />
            Designed for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
              results.
            </span>
          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
            End-to-end development services focused on performance, scalability,
            user experience, and business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.8, 0.25, 1],
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
                transition: { duration: 0.25 },
              }}
              className="group relative overflow-hidden rounded-3xl border border-green-400/10 bg-black/30 backdrop-blur-xl p-7 hover:border-green-400/40 transition-all duration-300"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-green-400/10 blur-3xl" />
              </div>

              {/* Number */}
              <div className="absolute top-6 right-6 text-5xl font-bold text-green-400/10">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="relative">
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-green-400/20 bg-green-400/10 text-green-400 shadow-[0_0_10px_rgba(0,255,120,0.15)] group-hover:shadow-[0_0_20px_rgba(0,255,120,0.35)] transition">
                  <service.icon className="h-6 w-6" />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-semibold text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {service.desc}
                </p>

                {/* Bottom Line */}
                <div className="mt-6 h-px w-full bg-gradient-to-r from-green-400/40 via-green-400/10 to-transparent" />

              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-20 rounded-3xl border border-green-400/10 bg-black/30 backdrop-blur-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white">
            Need a custom solution?
          </h3>

          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            Whether it's a startup MVP, enterprise dashboard, SaaS platform, or
            complete business system, I can help turn your idea into a scalable
            digital product.
          </p>
           
           <a href="#contact">
          <button className="mt-6 rounded-full bg-green-500 px-7 py-3 font-medium text-black hover:shadow-[0_0_10px_rgba(0,255,120,0.6)] transition">
            Start a Project
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;