import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Code, FolderOpen, Map, MessageSquare, Menu, X } from "lucide-react";
import { nav } from "../../data/data";

const iconMap = {
  About: User,
  Skills: Code,
  Projects: FolderOpen,
  Journey: Map,
  Contact: MessageSquare,
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TOP BAR */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="relative flex h-16 items-center justify-between rounded-2xl border border-green-400/15 bg-black/50 backdrop-blur-2xl px-5 sm:px-6 shadow-[0_0_40px_rgba(0,255,120,0.08)]">

            <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-green-400/5 via-transparent to-emerald-500/5 pointer-events-none" />

            {/* Logo */}
            <a href="#" className="relative flex items-center gap-1 text-lg font-bold">
              <span className="text-green-400">&lt;</span>
              <span className="bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                AKS
              </span>
              <span className="text-green-400">/&gt;</span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group relative text-sm font-medium text-gray-300 transition"
                >
                  <span className="group-hover:text-green-400">
                    {item.label}
                  </span>
                  <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-green-400 transition-all group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Hamburger (mobile only) */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-gray-300 hover:text-green-400 transition"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {open && (
          <>
            {/* Background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
            />

            {/* Menu */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed top-20 left-4 right-4 z-50 md:hidden rounded-2xl border border-green-400/10 bg-black/90 backdrop-blur-xl shadow-[0_0_30px_rgba(0,255,120,0.08)]"
            >
              <div className="py-4">
                {nav.map((item) => {
                  const Icon = iconMap[item.label];

                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 px-5 py-3 text-gray-300 hover:text-green-400 hover:bg-white/5 transition"
                    >
                      <Icon size={18} />
                      <span className="text-sm">{item.label}</span>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;