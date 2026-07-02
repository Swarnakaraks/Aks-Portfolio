import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Award, AwardIcon, BadgeCheck } from "lucide-react";
import { GrView } from "react-icons/gr";
import { certs } from "../../data/data";

function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-black/40 backdrop-blur px-4 py-1.5 text-[11px] font-medium uppercase tracking-wider text-green-400 shadow-[0_0_5px_rgba(0,255,120,0.2)]"
          >
            <AwardIcon className="h-3.5 w-3.5" />
             Certifications & Credentials
          </motion.span>

          <h2 className="mt-5 text-4xl sm:text-5xl font-bold text-white">
            Verified{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
              Expertise
            </span>
          </h2>

          <p className="mt-4 text-gray-400 text-sm leading-6">
            Professional certifications demonstrating real-world development skills and continuous learning.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certs.map((item) => (
            <motion.div
              key={item.credentialId}
              initial={{ opacity: 0, y: 50}}
              whileInView={{ opacity: 1, y: 0}}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.8, 0.25, 1],
              }}
              whileHover={{ scale: 1.04, y: -8 }}
              
              className="group rounded-3xl border overflow-hidden border-green-500/10 bg-black/40 backdrop-blur-xl p-6 hover:border-green-400/30 transition-all"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">{item.issuer}</p>
                </div>

                <Award className="text-green-400" />
              </div>

              <div className="mt-4 space-y-1 text-sm text-gray-300 wrap-break-word">
                <p><span className="text-gray-400">Issued :</span> {item.issued}</p>
                <p><span className="text-gray-400">Credential ID :</span> {item.credentialId}</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-green-500/20 bg-green-400/10 px-3 py-1 text-xs text-green-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* VIEW BUTTON */}
              <div className="mt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCert(item)}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-green-500 px-4 py-2 text-sm font-medium text-black transition"
                >
                  <GrView className="h-4 w-4" />
                  View
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
         <div className="text-center mt-10">
        <a
          href="#certificates"
          className="group relative inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 font-medium text-black shadow-[0_0_10px_rgba(0,255,120,0.35)] hover:shadow-[0_0_20px_rgba(0,255,120,0.6)] transition"
        >
          View All Certificates
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
        </a>
        </div>
      </div>


      {/* MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 40 }}
              transition={{ type: "spring", stiffness: 180, damping: 20 }}
              className="w-[90%] h-2xl md:h-[90%] max-w-3xl rounded-2xl bg-white p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg text-black font-bold">
                  {selectedCert.title}
                </h2>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="text-black text-xl font-bold cursor-pointer active:scale-90"
                >
                  ✕
                </button>
              </div>
               
               <div className=" w-full flex justify-center items-center">
              <div className="w-3xl h-3xl bg-center bg-cover">
                <img src={selectedCert.link} alt="" />
                </div>

               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Certifications;