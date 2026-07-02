import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkle, Star } from "lucide-react";
import { stats } from "../../data/data";
import Typewrite from "../common/Typewrite";
import CodeWindow from "../Common/CodeWindow";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiGithub,
  SiJavascript,
} from "react-icons/si";
import { CgFramer } from "react-icons/cg";

 const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden z-20">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-20 pb-5 md:pb-28  flex flex-col lg:flex-row justify-between ">
        {/* LEFT CONTENT */}
        <div>
            <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-black/40 backdrop-blur px-4 py-1.5 text-[11px] font-medium uppercase tracking-wider text-green-400 shadow-[0_0_5px_rgba(0,255,120,0.2)]"
          >
            <Sparkle className="h-3.5 w-3.5" />
            Available for freelance · Open to opportunities
          </motion.span>
         
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[1.1]"
          >
            Hi, I'm Abhisek
          </motion.h1>

          {/* TYPEWRITER */}
          <div className="mt-3 h-[60px] sm:h-[70px] lg:h-[90px] flex items-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-400 drop-shadow-[0_0_0px_rgba(0,255,120,0.5)] leading-none">
              <Typewrite
                words={[
                  "Full-Stack MERN Engineer",
                  "UI/UX Designer",
                  "Frontend Architect",
                  "Backend Systems Builder",
                  "Creative Problem Solver",
                  "Performance Optimizer",
                ]}
              />
            </div>
          </div>

          {/* SMALL DESCRIPTION */}
          <p className="mt-4 text-sm sm:text-base text-gray-400 max-w-xl leading-relaxed">
            I build modern, scalable and high-performance web applications using
            React, Node.js and clean UI engineering principles.
          </p>

          {/* Button*/}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group flex relative items-center gap-2 rounded-full bg-green-500 px-6 py-3 font-medium text-black  hover:shadow-[0_0_10px_rgba(0,255,120,0.6)] transition"
            >
              View My Work
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </a>

            <a
              href="#"
              className="items-center flex gap-2 rounded-full border border-green-400/40 bg-black/30 px-6 py-3 font-medium text-green-300 hover:bg-green-500/10 hover:border-green-400 transition"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </motion.div>

          {/* STATS */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
            {stats.map((item, index) => (
              <motion.div
                key={item.l}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.08 }}
                className="p-4 rounded-xl border border-green-400/10 bg-black/30 backdrop-blur hover:border-green-400/30 transition"
              >
                <div className="text-2xl sm:text-3xl font-bold text-green-400 drop-shadow-[0_0_0px_rgba(0,255,120,0.4)]">
                  {item.v}
                </div>
                <div className="text-xs text-gray-400 mt-1">{item.l}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative flex justify-center items-center top-10">
          <div className="relative scale-[0.75] sm:scale-[0.9] lg:scale-100">
            <div className="relative w-125 h-125 ">
              {/* Background Glow */}
              <div className="absolute inset-0 rounded-full bg-green-500/10 blur-[100px] animate-pulse" />

              {/* Orbit Rings */}
              <div className="absolute inset-[90px] rounded-full border border-green-400/25" />
              <div className="absolute inset-[40px] rounded-full border border-green-400/15" />
              <div className="absolute inset-[140px] rounded-full border border-green-400/15" />
              <div className="absolute inset-0 rounded-full border border-green-400/10" />

              {/* Center Core */}
              <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-green-400/40 bg-black/80 backdrop-blur-xl flex items-center justify-center shadow-[0_0_60px_rgba(34,197,94,0.4)]">
                <div className="text-center">
                  <h3 className="text-4xl font-black text-green-400">
                    &lt;/&gt;
                  </h3>
                  <p className="text-xs text-green-300 mt-1">FULL STACK</p>
                </div>
              </div>

              {/* ORBIT 1 */}
              <div
                className="orbit-ring orbit-normal1"
                style={{
                  width: "220px",
                  height: "220px",
                  animationDuration: "10s",
                }}
              >
                <div
                  className="tech-icon text-cyan-400"
                  style={{
                    left: "50%",
                    top: "0",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <SiReact size={28} />
                </div>

                <div
                  className="tech-icon text-green-500"
                  style={{
                    left: "50%",
                    bottom: "0",
                    transform: "translate(-50%, 50%)",
                  }}
                >
                  <SiNodedotjs size={28} />
                </div>
              </div>

              {/* ORBIT 2 */}
              <div
                className="orbit-ring orbit-reverse"
                style={{
                  width: "320px",
                  height: "320px",
                  animationDuration: "25s",
                }}
              >
                <div
                  className="tech-icon text-green-400"
                  style={{
                    left: "50%",
                    top: "0",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <SiMongodb size={28} />
                </div>

                <div
                  className="tech-icon text-gray-300"
                  style={{
                    left: "50%",
                    bottom: "0",
                    transform: "translate(-50%, 50%)",
                  }}
                >
                  <SiExpress size={28} />
                </div>
              </div>

              {/* ORBIT 3 */}
              <div
                className="orbit-ring orbit-normal2"
                style={{
                  width: "400px",
                  height: "400px",
                  animationDuration: "10s",
                }}
              >
                <div
                  className="tech-icon text-yellow-500"
                  style={{
                    left: "50%",
                    top: "0",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <SiJavascript size={20} />
                </div>

                <div
                  className="tech-icon text-white"
                  style={{
                    left: "50%",
                    bottom: "0",
                    transform: "translate(-50%, 50%)",
                  }}
                >
                  <SiGithub size={28} />
                </div>
              </div>

              {/* ORBIT 4 */}
              <div
                className="orbit-ring orbit-normal4"
                style={{
                  width: "500px",
                  height: "500px",
                  animationDuration: "15s",
                }}
              >
                <div
                  className="tech-icon text-sky-400"
                  style={{
                    left: "50%",
                    top: "0",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <SiTailwindcss size={28} />
                </div>

                <div
                  className="tech-icon text-white"
                  style={{
                    left: "50%",
                    bottom: "0",
                    transform: "translate(-50%, 50%)",
                  }}
                >
                  <CgFramer size={28} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;