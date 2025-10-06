"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RNDMechanicalCom() {
  const slides = [
    {
      title: "Next-Generation Mechanical Design & Engineering Solutions",
      desc: "Transform concepts into high-performance products with advanced CAD, FEA, and thermal modeling. Our mechanical design expertise ensures precise engineering, seamless manufacturability, and optimized system performance.",
      video: "/homeslider.mp4",
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

  const activeSlide = slides[active];

  return (
    <section className="relative w-full h-[500px] sm:h-[380px] md:h-[70vh] overflow-hidden flex items-center justify-center text-center">
      {/* Background Video */}
      <video
        src={activeSlide.video}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Black Blur Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[3px]" />

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-10 md:px-20 max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg leading-snug">
              {activeSlide.title}
            </h1>
            <p className="text-sm sm:text-lg md:text-lg text-gray-200 mb-6 leading-relaxed drop-shadow-md">
              {activeSlide.desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
    
  );
}
