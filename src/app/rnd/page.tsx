"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { Wrench, Lightbulb, Puzzle, Network } from "lucide-react";

import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";

import Rndheader from "yes/Components/Rndheader";
import Rndproduct from "yes/Components/Rndproduct";
import Rndservice from "yes/Components/Rndservice";
import Rndplatform from "yes/Components/Rndplatform";
import Rndexplore from "yes/Components/Rndexplore";
import QuickLinks from "../../Components/businessAreas/QuickLinks";
import Rndslider from "yes/Components/Rndslider";
import PebBrandP from "yes/Components/PebBrandP";
import Rndsolution from "yes/Components/Rndsolution";
import Rndstories from "yes/Components/Rndstories";
import Rndfooter from "yes/Components/Rndfooter";
import Rndaboutus from "yes/Components/Rndaboutus";
import RndServicesNew from "yes/Components/RndServicesNew";

export default function Rnd() {
  const router = useRouter();

  const links = [
    {
      title: "CASE STUDY",
      subtitle: "Engineering in Action",
      icon: <Wrench size={20} />, // Wrench = Engineering / Practical Work
      url: "/casestudy",
    },
    {
      title: "TRENDS & INSIGHTS",
      subtitle: "Future. Innovation. Now.",
      icon: <Lightbulb size={20} />, // Lightbulb = Ideas / Innovation
      url: "/trends",
    },
    {
      title: "OUR SOLUTIONS",
      subtitle: "Smart. Simple. Effective.",
      icon: <Puzzle size={20} />, // Puzzle = Solutions / Problem-Solving
      url: "/solutions",
    },
    {
      title: "STRONG NETWORK",
      subtitle: "Global. Connected. Strong.",
      icon: <Network size={20} />, // Network = Connections / Collaboration
      url: "/network",
    },
  ];

  const slides = [
    {
      title: "Engineering Services",
      desc: "Providing innovative and sustainable engineering solutions tailored to modern real estate and infrastructure challenges.",
      image: "/rndimages/analog-city-landscape-with-buildings-daylight.jpg",
      link: "/civil-engineering",
    },
    {
      title: "Mechanical Service",
      desc: "Empowering industries with precision-driven mechanical design, fabrication, and automation solutions using cutting-edge technologies.",
      image: "/rndimages/Construction Sector.jpg",
      link: "/mechanical",
    },
    {
      title: "CAE Simulation",
      desc: "Enhancing product performance and reliability through advanced computer-aided engineering simulations and virtual testing.",
      image: "/rndimages/Construction Sector.jpg",
      link: "/cae-simulation",
    },
    {
      title: "Product Engineering",
      desc: "Transforming ideas into market-ready products through innovative design, analysis, and manufacturing excellence.",
      image: "/rndimages/Construction Sector.jpg",
      link: "/productengineering",
    },
  ];

  const [active, setActive] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  return (
    <>
      <Rndheader />

      {/* Banner Section */}
      <section className="relative w-full h-[55vh] md:h-[96vh] overflow-hidden md:px-17">
        {/* Background Image */}
        <AnimatePresence mode="wait">
          <motion.img
            key={slides[active].image}
            src={slides[active].image}
            alt={slides[active].title}
            className="absolute top-0 left-0 w-full h-full object-cover"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Slide Content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-4 md:px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[active].title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.7 }}
              className="text-left"
            >
              <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-6 drop-shadow-lg">
                {slides[active].title}
              </h1>

              <p className="text-xs sm:text-base md:text-lg lg:text-2xl text-gray-200 mb-4 md:mb-6 leading-relaxed md:max-w-4xl">
                {slides[active].desc}
              </p>

              <div className="flex justify-start">
                <button
                  onClick={() => router.push(slides[active].link)}
                  className="flex items-center gap-3 text-white font-semibold text-xs sm:text-base md:text-lg group"
                >
                  <span>Launch the experience</span>
                  <span className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full border-2 border-white">
                    <IoIosArrowForward className="w-3 h-3 sm:w-4 sm:h-4" />
                  </span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Navigation + Controls */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full md:px-20 z-10 px-3">
          <div className="flex gap-2 md:gap-8 relative">
            {slides.map((s, i) => (
              <div
                key={i}
                onClick={() => i !== active && setActive(i)}
                className="cursor-pointer w-24 md:w-62 flex flex-col items-center"
              >
                <div className="h-[2px] w-full bg-gray-500/40 rounded-full mb-1 relative overflow-hidden">
                  <motion.div
                    key={active === i ? `active-${i}` : `inactive-${i}`}
                    initial={{ width: 0 }}
                    animate={{ width: active === i ? "100%" : "0%" }}
                    transition={{
                      duration: active === i ? 6 : 0,
                      ease: "linear",
                    }}
                    className="h-full bg-[#8080FF] absolute left-0 top-0"
                  />
                </div>
                <p
                  className={`text-[10px] sm:text-xs md:text-sm font-medium leading-snug ${
                    active === i ? "text-white" : "text-gray-300"
                  } text-center`}
                >
                  {s.title}
                </p>
              </div>
            ))}

            {/* Play / Pause Button */}
            <div className="absolute -top-10 right-0">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-white/50 hover:bg-white/10 transition"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                ) : (
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <Rndproduct />
      <Rndaboutus />
      {/* <Rndservice /> */}
      <RndServicesNew />
      <Rndexplore />
      {/* <Rndsolution /> */}
      <Rndplatform />
      <Rndstories />
      <QuickLinks heading="Quick Links" links={links} />
      {/* <Rndslider /> */}
      <PebBrandP />
      <Rndfooter />
    </>
  );
}
