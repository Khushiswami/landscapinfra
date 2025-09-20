"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function Renewablebanner() {
  const router = useRouter();

  const slides = [
    {
      title: "Rooftop Solar",
      desc: "Turn your rooftop into a clean energy source and cut electricity costs.",
      video: "/video.mp4",
      link: "/contact",
    },
    {
      title: "Ground-Mounted Solar",
      desc: "Harness open land to generate large-scale, cost-effective solar power.",
      video: "/video.mp4",
      link: "/contact",
    },
    {
      title: "On-Grid & Hybrid Solar",
      desc: "Blend grid power with solar for reliable, sustainable energy solutions.",
      video: "/video.mp4",
      link: "/contact",
    },
    {
      title: "Net Metering & Open Access",
      desc: "Export surplus solar power and save through net metering benefits.",
      video: "/video.mp4",
      link: "/contact",
    },
    {
      title: "Battery-Integrated Solar",
      desc: "Store excess solar energy for round-the-clock power and resilience.",
      video: "/video.mp4",
      link: "/contact",
    },
  ];

  const [active, setActive] = useState(0);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[70vh] sm:h-[99vh] overflow-hidden">
      {/* Background Video */}
      <video
        src={slides[active].video}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Slide Content */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-6 text-left">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[active].title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 leading-snug">
              {slides[active].title}
            </h1>
            <p className="text-base md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              {slides[active].desc}
            </p>

            <button
              onClick={() => router.push(slides[active].link)}
              className="px-6 py-3 bg-white text-[#000080] font-semibold rounded-md shadow-lg hover:bg-[#000080]  hover:text-white transition flex items-center gap-2"
            >
              <span>More</span>
              <IoIosArrowForward className="w-5 h-5" />
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 w-full ">
        <div className="max-w-7xl mx-auto flex justify-center sm:justify-start gap-6 px-6 py-4 overflow-x-auto">
          {/* Desktop Tabs */}
          <div className="hidden sm:flex gap-6">
            {slides.map((s, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`pb-1 text-sm sm:text-base font-medium border-b-2 transition ${
                  active === i
                    ? "text-[#8080FF] border-[#8080FF]"
                    : "text-gray-300 border-transparent hover:text-white"
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>

          {/* Mobile Dots */}
          <div className="flex sm:hidden justify-center w-full gap-2">
            {slides.map((_, i) => (
              <span
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full cursor-pointer transition ${
                  active === i ? "bg-#8080FF" : "bg-[#fff]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
