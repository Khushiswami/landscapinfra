"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function Banner() {
  const router = useRouter();

  const slides = [
    {
      title: "Industry Installation and Construction",
      desc: "Quality Construction Project Delivery on time with customer satisfaction.",
      video: "/homeslider.mp4",
      link: "/industryinstallation",
    },
    {
      title: "Engineering & RND Services",
      desc: "Committed to advancing innovation, fairness, equity, and quality in assessment.",
      video: "/homeslider.mp4",
      link: "/rnd",
    },
    {
      title: "Renewable Energy Solution Provider",
      desc: "Explore innovation in industrial equipment with green technologies.",
      video: "/homeslider.mp4",
      link: "/renewableenergy",
    },
    {
      title: "Pre-Engineered Buildings",
      desc: "Modular and pre-engineered structures tailored for efficiency and scalability.",
      video: "/homeslider.mp4",
      link: "/preEngineeredBuildings",
    },
    {
      title: "Real Estate Development",
      desc: "Innovative real estate solutions designed for modern needs and sustainable growth.",
      video: "/homeslider.mp4",
      link: "/realStateDevlopment",
    },
  ];

  const [active, setActive] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  // Mobile tabs grouping
  const groupSize = 2;
  const startIndex = isMobile ? Math.floor(active / groupSize) * groupSize : 0;
  const visibleTabs = isMobile
    ? slides.slice(startIndex, startIndex + groupSize)
    : slides;

  const activeSlide = slides[active];

  return (
    <section className="relative w-full h-[500px] sm:h-[380px] md:h-[100vh] overflow-hidden">
      {/* Background Video */}
      <video
        src={activeSlide.video}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Slide Content */}
      <div className="relative z-10 flex flex-col justify-center h-full mx-auto px-6 sm:px-16 text-left ">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg leading-snug">
              {activeSlide.title}
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-gray-200 mb-6 max-w-xl leading-relaxed">
              {activeSlide.desc}
            </p>
            <button
              onClick={() => router.push(activeSlide.link)}
              className="px-6 py-3 bg-white text-[#000080] font-semibold rounded-full shadow-lg hover:bg-blue-100 transition flex items-center gap-2 text-sm sm:text-base"
            >
              <IoIosArrowForward className="w-5 h-5 text-[#000080]" />
              <span>Start now</span>
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-6 left-0 sm:left-1/2 sm:-translate-x-1/2 w-full px-6 z-10">
        <div
          className={`flex gap-4 sm:gap-8 justify-start sm:justify-center items-center ${
            !isMobile ? "flex-nowrap" : ""
          }`}
        >
          {visibleTabs.map((s, idx) => {
            const realIndex = isMobile ? startIndex + idx : idx;
            return (
              <div
                key={realIndex}
                onClick={() => setActive(realIndex)}
                className={`cursor-pointer ${
                  isMobile ? "flex-1" : "flex-1 sm:w-auto"
                }`}
              >
                {/* Progress Bar */}
                <div className="h-[3px] w-full bg-gray-500/40 rounded-full mb-1 relative overflow-hidden">
                  <motion.div
                    key={`progress-${realIndex}`}
                    initial={{ width: 0 }}
                    animate={{ width: active === realIndex ? "100%" : "0%" }}
                    transition={{
                      duration: active === realIndex ? 6 : 0,
                      ease: "linear",
                    }}
                    className="h-full bg-[#8080FF] absolute left-0 top-0"
                  />
                </div>

                {/* Tab Title */}
                <p
                  className={`text-[10px] sm:text-lg font-medium text-center min-h-[24px] leading-snug truncate ${
                    active === realIndex ? "text-white" : "text-gray-300"
                  }`}
                  title={s.title}
                >
                  {s.title}
                </p>
              </div>
            );
          })}

          {/* Play/Pause */}
          <div className="absolute -top-12 right-0 sm:right-6">
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
