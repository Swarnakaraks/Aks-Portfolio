import React from "react";
import { motion } from "framer-motion";
import { skills } from "../../data/data";
import { Zap } from "lucide-react";

const Skills = () => {
  return (
    <section id="skills" className="relative py-28 overflow-hidden ">
  
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-black/40 backdrop-blur px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-green-400 shadow-[0_0_5px_rgba(0,255,120,0.2)]">
            <Zap className="h-3.5 w-3.5" />
            Tech Stack
          </span>

          <h2 className="mt-5 text-4xl sm:text-5xl font-bold text-white leading-tight">
            Tools I use to build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
              great products
            </span>
          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
            A carefully selected technology stack focused on performance,
            scalability, maintainability, and developer experience.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.8, 0.25, 1],
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="group relative overflow-hidden rounded-2xl border border-green-400/10 bg-black/30 backdrop-blur-xl p-5 transition-all"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-green-400/5 blur-2xl" />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-400/10 border border-green-400/20 shadow-[0_0_10px_rgba(0,255,120,0.15)]">
                    <skill.icon className="h-6 w-6 text-green-400" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">{skill.name}</h3>

                    <p className="text-xs text-gray-500">Proficiency</p>
                  </div>

                  <span className="ml-auto text-sm font-bold text-green-400">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress */}
                <div className="mt-5">
                  <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.2,
                        delay: index * 0.05,
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-green-700 to-green-400 shadow-[0_0_15px_rgba(0,255,120,0.7)]"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ["15+", "Technologies"],
            ["20+", "Projects Built"],
            ["1+", "Years Experience"],
            ["100%", "Passion Level"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-2xl border border-green-400/10 bg-black/30 backdrop-blur-xl p-6 text-center hover:border-green-400/30 transition"
            >
              <div className="text-3xl font-bold text-green-400">
                {value}
              </div>

              <div className="mt-2 text-sm text-gray-400">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;