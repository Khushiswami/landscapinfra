"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { IoIosArrowForward } from "react-icons/io";

export default function BannerP() {
  const slides = [
    {
      title: "Innovation at the Heart of Baking's Future",
      heading: "Virtual Worlds for Real Life",
      desc: "Our business is innovation. Through virtual universes, we help businesses and people create sustainable products and services to shape a better future.",
    },
    {
      title: "Shaping Shanghais Infrastructure with Digital Innovation",
      heading: "Shaping the Future",
      desc: "We create cutting-edge digital solutions for smarter cities and sustainable growth.",
    },
    {
      title: "Improving Aerostructures Inspection with AR & AI",
      heading: "Innovation in Aerospace",
      desc: "Revolutionizing inspections with AI-driven augmented reality tools.",
    },
    {
      title: "3D Models to Expand Sales Opportunities",
      heading: "Expanding Opportunities",
      desc: "Driving sales with immersive 3D product experiences.",
    },
    {
      title: "Improving Aerostructures Inspection with AR & AI",
      heading: "Innovation in Aerospace",
      desc: "Revolutionizing inspections with AI-driven augmented reality tools.",
    },
    {
      title: "3D Models to Expand Sales Opportunities",
      heading: "Expanding Opportunities",
      desc: "Driving sales with immersive 3D product experiences.",
    },
  ];

  const [active, setActive] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length, isPlaying]);

  return (
    <section className="relative w-full h-[94vh] overflow-hidden"> 

      <video
        src="/homeslider.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-6xl mx-auto px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[active].heading}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              {slides[active].heading}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              {slides[active].desc}
            </p>

           <button className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:bg-blue-100 transition flex items-center gap-2">
  <IoIosArrowForward className="w-5 h-5 text-blue-700" />
  <span>Start now</span>
</button>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full px-6 z-10">
        <div className="flex gap-8 justify-center items-end relative">
          {slides.map((s, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className="cursor-pointer w-52"
            >
              {/* Progress Line */}
              <div className="h-[3px] w-full bg-gray-500/40 rounded-full mb-2 relative overflow-hidden">
                <motion.div
                  key={active === i ? `active-${i}` : `inactive-${i}`}
                  initial={{ width: 0 }}
                  animate={{
                    width: active === i ? "100%" : "0%",
                  }}
                  transition={{
                    duration: active === i ? 6 : 0,
                    ease: "linear",
                  }}
                  className="h-full bg-blue-600 absolute left-0 top-0"
                />
              </div>
              <p
                className={`text-xs md:text-xs font-medium leading-snug ${
                  active === i ? "text-white" : "text-gray-300"
                }`}
              >
                {s.title}
              </p>
            </div>
          ))}

          <div className="absolute -top-14 right-0">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/50 hover:bg-white/10 transition"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-white" />
              ) : (
                <Play className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
