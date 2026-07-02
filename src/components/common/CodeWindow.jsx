import React from "react";
import { motion } from "framer-motion";

const CodeWindow = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: -8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="relative w-full max-w-2xl mx-auto"
    >
      {/* Neon Glow */}
      <div className="absolute -inset-8 bg-green-400/10 blur-[120px] rounded-full animate-pulse" />

      {/* Outer Frame */}
      <div className="relative rounded-3xl border border-green-400/20 bg-black/60 backdrop-blur-2xl shadow-[0_0_80px_rgba(0,255,120,0.08)] overflow-hidden">

        {/* Top Bar */}
        <div className="flex items-center gap-2 px-5 py-3 border-b border-green-400/10 bg-black/40">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-green-400/80" />

          <div className="ml-4 flex items-center gap-2 text-xs text-gray-400 font-mono">
            <span className="text-green-400">~/</span>
            portfolio
            <span className="text-gray-600">/</span>
            <span className="text-white">dev.js</span>
          </div>

          <div className="ml-auto text-[10px] text-green-400/70 font-mono">
            ● LIVE
          </div>
        </div>

        {/* Code Area */}
        <pre className="relative font-mono text-[13px] sm:text-sm leading-7 px-6 py-6 text-gray-200 overflow-hidden">

          {/* Scanline Effect */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,255,120,0.3)_50%,transparent_100%)] animate-pulse" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Line n={1}>
              <span className="text-pink-400">const</span>{" "}
              <span className="text-green-400">developer</span> = {"{"}
            </Line>

            <Line n={2}>
              {"  "}name:{" "}
              <span className="text-amber-300">'Alex Carter'</span>,
            </Line>

            <Line n={3}>
              {"  "}stack: [
              <span className="text-emerald-300">'React'</span>,{" "}
              <span className="text-emerald-300">'Node'</span>,{" "}
              <span className="text-emerald-300">'MongoDB'</span>],
            </Line>

            <Line n={4}>
              {"  "}role: [
              <span className="text-emerald-300">'Full Stack'</span>,{" "}
              <span className="text-emerald-300">'UI/UX'</span>],
            </Line>

            <Line n={5}>
              {"  "}coffee:{" "}
              <span className="text-sky-300">true</span>,
            </Line>

            <Line n={6}>
              {"  "}build: () =&gt;{" "}
              <span className="text-amber-300">'scalable-products'</span>,
            </Line>

            <Line n={7}>{"};"}</Line>

            <Line n={8}>
              <span className="text-green-400/60">
                // build → deploy → repeat
              </span>

              {/* Cursor */}
              <span className="ml-2 inline-block w-2 h-4 bg-green-400 animate-pulse" />
            </Line>
          </motion.div>
        </pre>

        {/* Bottom Glow Strip */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-green-400/40 to-transparent blur-sm" />
      </div>
    </motion.div>
  );
};

export default CodeWindow;

/* Line Component */
function Line({ children, n }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 + n * 0.07 }}
      className="flex"
    >
      <span className="w-7 select-none text-green-400/30 text-right pr-3">
        {n}
      </span>
      <span>{children}</span>
    </motion.div>
  );
}