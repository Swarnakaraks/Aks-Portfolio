import React from "react";
import { motion } from "framer-motion";
import { Code2, Sparkles, Rocket, Palette, User } from "lucide-react";
import { cards, stats2 } from "../../data/data";

const About = () => {
  return (
    <section id="about" className="relative py-28 overflow-hidden ">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-start">
        {/* LEFT CONTENT */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-black/40 backdrop-blur px-4 py-1.5 text-[11px] font-medium uppercase tracking-wider text-green-400 shadow-[0_0_5px_rgba(0,255,120,0.2)]"
          >
            <User className="h-3.5 w-3.5" />
            About Me
          </motion.span>

          <h2 className="mt-5 text-4xl sm:text-5xl font-bold leading-tight">
            Designing & building
            <br />
            high-performance web{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
              experiences that matter.
            </span>
          </h2>

          <div className="mt-6 space-y-5 text-gray-300 dark:text-gray-400 leading-relaxed max-w-xl">
            <p>
               I'm a passionate full-stack developer focused on building modern,
               responsive, and high-performance web applications using the MERN stack.
            </p>

            <p>
              I enjoy working across the entire development process — from UI design
              in React to backend APIs with Node.js and Express, along with database
              integration using MongoDB.
            </p>

            <p>
              I continuously learn new technologies, explore open-source projects,
              and improve my skills in system design and modern UI engineering.
            </p>
          </div>

          {/* STATS */}
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {stats2.map((item, index) => (
              <motion.div
                key={item.l}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-xl border border-green-400/10 bg-black/30 backdrop-blur p-4 hover:border-green-400/30 transition"
              >
                <div className="text-xl font-bold text-green-400 ">
                  {item.v}
                </div>
                <div className="text-[11px] text-gray-400 mt-1">{item.l}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid sm:grid-cols-2 gap-5">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.8, 0.25, 1],
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="group relative rounded-2xl border border-green-400/10 bg-black/30 backdrop-blur p-6 hover:border-green-400/40 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,120,0.05)]"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-green-400/5 blur-2xl" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-400/10 border border-green-400/20 shadow-[0_0_10px_rgba(0,255,120,0.15)]">
                  <card.icon className="h-5 w-5" />
                </div>

                <h3 className="mt-4 font-semibold text-white">{card.title}</h3>

                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
