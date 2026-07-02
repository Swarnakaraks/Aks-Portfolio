import React from "react";
import { motion } from "framer-motion";
import { timeline } from "../../data/data";
import { Route } from "lucide-react";

const Journey = () => {
  return (
    <section id="journey" className="relative py-28 overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-black/40 backdrop-blur px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-green-400 shadow-[0_0_10px_rgba(0,255,120,0.2)]">
            <Route className="h-3.5 w-3.5" />
            My Journey
          </span>

          <h2 className="mt-5 text-4xl sm:text-5xl font-bold text-white">
            Academic &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
              Career Path
            </span>
          </h2>

         <p className="mt-5 text-gray-400">
  A journey of continuous learning, hands-on development, academic growth, and building real-world full-stack projects as a MERN developer.
</p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Center Line */}
          <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-green-400 to-transparent shadow-[0_0_15px_rgba(0,255,120,0.6)]" />

          <div className="space-y-2">
            {timeline.map((item, index) => {
              const left = index % 2 === 0;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.25, 0.8, 0.25, 1],
                  }}
                  style={{ transformOrigin: "center" }}
                  className={`relative grid md:grid-cols-2 gap-8 ${
                    !left ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Content Card */}
                  <div
                    className={`pl-16 md:pl-0 ${left ? "md:pr-16 md:text-right" : "md:pl-16"}`}
                  >
                    <div className="group relative overflow-hidden rounded-3xl border border-green-400/10 bg-black/30 backdrop-blur-xl p-7">
                      {/* Glow */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                        <div className="absolute inset-0 bg-green-400/5 blur-xl" />
                      </div>

                      <div className="relative">
                        {/* Year */}
                        <span className="inline-flex rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs font-medium text-green-400">
                          {item.year}
                        </span>

                        <h3 className="mt-4 text-xl font-bold text-white">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-green-400 text-sm">
                          {item.org}
                        </p>

                        <p className="mt-4 text-sm leading-relaxed text-gray-400">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block" />

                  {/* Timeline Node */}
                  <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 top-7 md:top-1/2 md:-translate-y-1/2">
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-green-400 bg-black shadow-[0_0_10px_rgba(0,255,120,0.5)]">
                      <div className="absolute inset-0 rounded-full bg-green-900/20" />

                      <item.icon className="relative h-5 w-5 text-green-400" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;