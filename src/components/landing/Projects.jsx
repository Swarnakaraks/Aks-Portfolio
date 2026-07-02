import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, GitBranch, ArrowRight, Code2 } from "lucide-react";
import { projects } from "../../data/data";

const Projects = () => {
  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-black/40 backdrop-blur px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-green-400 shadow-[0_0_10px_rgba(0,255,120,0.2)]">
            <Code2 className="h-3.5 w-3.5" />
            Featured Projects
          </span>

          <h2 className="mt-5 text-4xl sm:text-5xl font-bold text-white">
            Recent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 ">
              Work
            </span>
          </h2>

          <p className="mt-5 text-gray-400">
            A collection of products, platforms, and experiences I've designed
            and developed.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-16 grid lg:grid-cols-2 content-between gap-10 items-stretch">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
              }}
               whileHover={{
                scale: 1.02,
                transition: { duration: 0.25 },
              }}
              className="group relative h-full overflow-hidden rounded-3xl border border-green-400/10 hover:border-green-400/40  bg-black/30 backdrop-blur-xl"
            >
              <div className="">
                {/* LEFT IMAGE */}
                <div className="relative min-h-[320px] overflow-hidden border-b lg:border-b-0 lg:border-r border-green-400/10">
                  {/* Image */}
                  <motion.div
                  whileHover={{
                    scale: 1.04,
                    transition: {duration: 0.25}
                  }}
                  className="absolute inset-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover opacity-90 "
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40" />
                  </motion.div>

                  {/* Tag */}
                  <div className="absolute top-6 left-6 z-10 rounded-full border border-green-400/20 bg-black/60 backdrop-blur px-3 py-1 text-xs font-medium text-green-400">
                    {project.tag}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white">
                      {project.title}
                    </h3>

                    <span className="text-5xl font-bold text-green-400/10">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mt-4 text-gray-400 leading-relaxed">
                    {project.desc}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs font-medium text-green-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Metric */}
                  <div className="mt-6 flex items-center gap-2 text-green-400">
                    <Sparkles className="h-4 w-4" />
                    <span className="text-sm">{project.metric}</span>
                  </div>

                  {/* Buttons */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    <button className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-5 py-3 font-medium text-black shadow-[0_0_10px_rgba(0,255,120,0.35)] hover:shadow-[0_0_20px_rgba(0,255,120,0.6)] transition">
                      Live Demo
                      <ArrowUpRight className="h-4 w-4" />
                    </button>

                    <button className="inline-flex items-center gap-2 rounded-xl border border-green-400/20 bg-black/40 px-5 py-3 text-green-400 hover:border-green-400/50 transition">
                      <GitBranch className="h-4 w-4" />
                      Source Code
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-10">
        <a
          href="#projects"
          className="group relative inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 font-medium text-black shadow-[0_0_10px_rgba(0,255,120,0.35)] hover:shadow-[0_0_20px_rgba(0,255,120,0.6)] transition"
        >
          View all Project
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
        </a>
      </div>
    </section>
  );
};

export default Projects;