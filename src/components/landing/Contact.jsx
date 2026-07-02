import { ArrowRight, Mail, Phone, MapPin, Send, Contact2Icon } from "lucide-react";
import { LiaLinkedin } from "react-icons/lia";
import { SiGithub } from "react-icons/si";
import {motion} from "framer-motion";
import { BsLinkedin } from "react-icons/bs";

function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 overflow-hidden">


      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-black/40 backdrop-blur px-4 py-1.5 text-[11px] font-medium uppercase tracking-wider text-green-400 shadow-[0_0_5px_rgba(0,255,120,0.2)]"
          >
            <Contact2Icon className="h-3.5 w-3.5" />
            Get In Touch
          </motion.span>

          <h2 className="mt-5 text-4xl sm:text-5xl font-bold text-white">
            Let's Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
              Together
            </span>
          </h2>

          <p className="mt-5 text-gray-400 leading-7">
            Have an exciting project? Whether it's a website, web application,
            or software idea, I'd love to hear about it.
          </p>
        </div>

        {/* Content */}
        <div className="mt-16 grid lg:grid-cols-5 gap-8">

           

          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="lg:col-span-3 rounded-2xl border border-green-400/10 bg-black/40 backdrop-blur-xl p-8"
          >
            <div className="grid sm:grid-cols-2 gap-5">

              <div>
                <label className="text-sm font-medium text-green-400">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="mt-2 w-full rounded-xl border border-green-500/30 bg-black/30 px-4 py-3 text-white placeholder-gray-500 outline-none transition duration-100 focus:border-green-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-green-400">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@gmail.com"
                  className="mt-2 w-full rounded-xl border border-green-500/30 bg-black/30 px-4 py-3 text-white placeholder-gray-500 outline-none transition duration-100 focus:border-green-400"
                />
              </div>

            </div>

            <div className="mt-5">
              <label className="text-sm font-medium text-green-400">
                Subject
              </label>
              <input
                type="text"
                placeholder="Project Subject"
                className="mt-2 w-full rounded-xl border border-green-500/30 bg-black/30 px-4 py-3 text-white placeholder-gray-500 outline-none transition duration-100 focus:border-green-400"
              />
            </div>

            <div className="mt-5">
              <label className="text-sm font-medium text-green-400">
                Message
              </label>
              <textarea
                rows={6}
                placeholder="Tell me about your project..."
                className="mt-2 w-full rounded-xl border border-green-500/30 bg-black/30 px-4 py-3 text-white placeholder-gray-500 outline-none transition duration-100 focus:border-green-400"
              />
            </div>

            <div className="w-full mt-10">
                    <a
                      href="#contact"
                      className="group relative inline-flex items-center gap-2 rounded-xl bg-green-500 px-6 py-3 font-medium text-black shadow-[0_0_10px_rgba(0,255,120,0.35)] hover:shadow-[0_0_20px_rgba(0,255,120,0.6)] transition"
                    >
                      Send Message
                      <Send className="h-4 w-4 group-hover:translate-x-1 transition" />
                    </a>
                  </div>
          </form>

            {/* Contact Info */}
          <div className="lg:col-span-2 space-y-5">

            {[
              {
                icon: Mail,
                title: "EMAIL",
                value: "abhisek@gmail.com",
              },
              {
                icon: Phone,
                title: "PHONE",
                value: "+977 9867589054",
              },
              {
                icon: MapPin,
                title: "LOCATION",
                value: "Biratnagar, Nepal",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-5 rounded-2xl border border-green-400/10 bg-black/40 backdrop-blur-xl p-5 hover:border-green-400/30 transition"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-400/10 text-green-400 border border-green-400/20">
                  <item.icon size={22} />
                </div>

                <div>
                  <p className="text-xs text-gray-500 tracking-wider">{item.title}</p>
                  <h3 className="text-white font-medium">{item.value}</h3>
                </div>
              </div>
            ))}

            <div className="rounded-3xl border border-green-400/10 bg-gradient-to-br from-green-400/10 to-transparent p-6 backdrop-blur-xl">
  <h3 className="text-xl font-bold text-white">Ready to start?</h3>

  <p className="mt-3 text-sm text-gray-400">
    I'm currently available for freelance projects, internships, startup collaborations, and full-stack development work.
  </p>

  <a
    href="#contact"
    className="mt-5 inline-flex items-center gap-2 text-green-400 font-medium hover:text-green-300 transition"
  >
    Let's Talk
    <ArrowRight className="h-4 w-4" />
  </a>
</div>

            {/* Social */}
            <div className="rounded-2xl border border-green-400/10 bg-black/40 backdrop-blur-xl p-6">

              <h3 className="text-white font-semibold">
                Follow Me
              </h3>

              <div className="mt-5 flex gap-4">

                {[SiGithub, BsLinkedin].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-green-400/10 bg-black/40 text-green-400 hover:border-green-400 hover:shadow-[0_0_20px_rgba(0,255,120,0.25)] transition"
                  >
                    <Icon size={20} />
                  </a>
                ))}

              </div>

            </div>

          </div>

         

        </div>
      </div>
    </section>
  );
}

export default Contact;