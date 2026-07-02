import React from "react";
import { Mail, ArrowUpRight, Phone, MapPin, ArrowRight, MailIcon,} from "lucide-react";
import { LiaLinkedin } from "react-icons/lia";

import { SiGithub} from "react-icons/si";
import { motion } from "framer-motion";
import { nav } from "../../data/data";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {

 const socials = [
  { Icon: SiGithub, link: "https://github.com/Swarnakaraks" },
  { Icon: BsLinkedin, link: "https://www.linkedin.com/in/swarnakaraks" },
  { Icon: MailIcon, link: "mailto:abhisek@gmail.com" }
];

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "abhisek@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+977 9856390615",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Biratnagar, Nepal",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-black border-t border-green-400/10">
      {/* Grid */}
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(0,255,120,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,120,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-emerald-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Main Footer */}
        <div className="grid gap-12 py-16 md:grid-cols-3 xl:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold">
              <span className="text-green-400">&lt;</span>
              <span className="bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                AKS
              </span>
              <span className="text-green-400">/&gt;</span>
            </div>

            <p className="mt-5 max-w-md text-gray-400 leading-relaxed">
              Full-Stack MERN Developer focused on building scalable web
              applications, smooth user experiences, and clean, maintainable
              code.
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              {socials.map(({ Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-green-400/10 bg-black/40 text-green-400 hover:border-green-400 hover:shadow-[0_0_20px_rgba(0,255,120,0.25)] transition"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 font-semibold text-white">Navigation</h3>

            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-gray-400 transition hover:text-green-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side */}
          <div className=" space-y-3">
             {/* top badge */}
          <span className="relative inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-black/40 px-3 py-1 text-[11px] text-green-400 uppercase tracking-widest">
            Available for Work
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
          </span>

          <div className="pl-4">abhisek@gmail.com</div>
          <div className="pl-4">Biratnagar, Nepal</div>

          </div>
        </div>

      
        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-green-400/10 py-6 text-sm text-gray-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Abhisek. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;