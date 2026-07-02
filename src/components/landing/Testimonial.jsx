import React, { useEffect, useRef, useState } from "react";
import { testimonials } from "../../data/data";
import { Star, Quote, ChevronLeft, ChevronRight, QuoteIcon } from "lucide-react";
import {motion} from 'framer-motion'

const Testimonial = () => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  const [index, setIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [cardWidth, setCardWidth] = useState(320);

 
  useEffect(() => {
    const updateWidth = () => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.offsetWidth + 16);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const scrollToIndex = (i, smooth = true) => {
    const container = containerRef.current;
    if (!container) return;

    const total = testimonials.length - 1;
    const newIndex = (i + total) % total;

    container.scrollTo({
      left: newIndex * cardWidth,
      behavior: smooth ? "smooth" : "auto",
    });

    setIndex(newIndex);
  };

  const next = () => scrollToIndex(index + 1);
  const prev = () => scrollToIndex(index - 1);

  // autoplay
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      scrollToIndex(index + 1);
    }, 3500);

    return () => clearInterval(interval);
  }, [index, autoPlay, cardWidth]);

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-black/40 px-4 py-1.5 text-[11px] text-green-400 uppercase tracking-widest shadow-[0_0_10px_rgba(0,255,120,0.2)]">
            <QuoteIcon className="h-3.5 w-3.5" />
            Testimonials
          </span>

          <h2 className="mt-5 text-4xl sm:text-5xl font-bold text-white">
            Trusted by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
              clients
            </span>
          </h2>
        </div>

        {/* CAROUSEL */}
        <div className="mt-12 sm:mt-16 flex items-center justify-center gap-3 sm:gap-4">

          {/* LEFT */}
          <button
            onClick={() => {
              setAutoPlay(false);
              prev();
            }}
            className="p-2 sm:p-3 rounded-xl border border-green-400/20 bg-black/40 text-green-400 hover:border-green-400 transition"
          >
            <ChevronLeft />
          </button>

          {/* TRACK */}
          <div
            ref={containerRef}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 sm:px-10 lg:px-16 no-scrollbar"
          >

            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                ref={i === 0 ? cardRef : null}
                whileHover={{scale:1.05}}
                transition={{duration:0.3 }}
                className="snap-center flex-shrink-0 
                  w-[60vw] sm:w-[300px] md:w-[340px]
                  h-[260px] sm:h-[300px]
                  relative flex flex-col rounded-2xl
                  border border-green-400/10 bg-black/40
                  backdrop-blur-xl p-5 sm:p-6 my-5">
                {/* glow */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-green-400/5 blur-2xl" />

                <div className="relative flex flex-col h-full">

                  <Quote className="h-7 w-7 sm:h-9 sm:w-9 text-green-400/40" />

                  {/* stars */}
                  <div className="mt-3 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 fill-green-400" />
                    ))}
                  </div>

                  {/* quote */}
                  <p className="mt-3 text-gray-300 text-xs sm:text-sm leading-relaxed">
                    "{t.quote}"
                  </p>

                  {/* footer */}
                  <div className="mt-auto flex items-center gap-3 border-t border-green-400/10 pt-4">

                    <img
                      src={t.image}
                      className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-green-400/30 object-cover"
                      alt={t.name}
                    />

                    <div>
                      <h4 className="text-white font-semibold text-sm">
                        {t.name}
                      </h4>
                      <p className="text-green-400 text-xs">
                        {t.role}
                      </p>
                    </div>

                  </div>

                </div>
              </motion.div>
            ))}

          </div>

          {/* RIGHT */}
          <button
            onClick={() => {
              setAutoPlay(false);
              next();
            }}
            className="p-2 sm:p-3 rounded-xl border border-green-400/20 bg-black/40 text-green-400 hover:border-green-400 transition"
          >
            <ChevronRight />
          </button>

        </div>

        {/* DOTS */}
        <div className="mt-6 sm:mt-8 flex justify-center gap-2  cursor-pointer">
          {testimonials.slice(0, testimonials.length - 1).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setAutoPlay(false);
                scrollToIndex(i);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === index
                  ? "w-6 bg-green-400 shadow-[0_0_10px_rgba(0,255,120,0.6)]"
                  : "w-2.5 bg-green-400/20"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonial;