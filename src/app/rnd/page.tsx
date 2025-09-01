"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";
import Rndheader from "yes/Components/Rndheader";
import AboutPebP from "yes/Components/AboutPebP";
import Rndproduct from "yes/Components/Rndproduct";
import Rndservice from "yes/Components/Rndservice";
import ExploreP from "yes/Components/ExploreP";
import Rndplatform from "yes/Components/Rndplatform";
import Rndexplore from "yes/Components/Rndexplore";
import QuickLinks from "../../Components/businessAreas/QuickLinks";
import { GraduationCap, Users, Lightbulb, Wrench } from "lucide-react";
import Rndslider from"yes/Components/Rndslider";
import Brand from "yes/Components/Brand";
import PebBrandP from "yes/Components/PebBrandP";
import Rndsolution from "yes/Components/Rndsolution";
import Rndstories from "yes/Components/Rndstories";
import Rndfooter from "yes/Components/Rndfooter";
export default function Rnd() {
  const router = useRouter();

  const links = [
    {
      title: "CADFEM Service",
      subtitle: "SUPPORT & ENGINEERING",
      icon: <Wrench size={20} />,
      url: "/service",
    },
    {
      title: "Simulation-Trends",
      subtitle: "DIE ZUKUNFT ENTDECKEN",
      icon: <Lightbulb size={20} />,
      url: "/trends",
    },
    {
      title: "Studenten-Portal",
      subtitle: "DEIN GRATIS ANGEBOT",
      icon: <GraduationCap size={20} />,
      url: "/students",
    },
    {
      title: "Starkes Netzwerk",
      subtitle: "WELTWEIT SIMULIEREN",
      icon: <Users size={20} />,
      url: "/network",
    },
  ];

  const slides = [
    {
      title: "Industry Installation and Construction",
      desc: "Quality Construction Project Delivery on time with customer satisfaction.",
      image: "/industry.jpg",
      link: "/industryinstallation",
    },
    {
      title: "Real Estate",
      desc: "Innovative real estate solutions designed for modern needs and sustainable growth.",
      image: "/industry.jpg",
      link: "/real-estate",
    },
    {
      title: "Engineering & RND Services",
      desc: "Committed to advancing innovation, fairness, equity, and quality in assessment.",
      image: "/industry.jpg",
      link: "/preEngineeredBuildings",
    },
    {
      title: "Renewable Energy Solution Provider",
      desc: "Explore innovation in industrial equipment with green technologies.",
      image: "/industry.jpg",
      link: "/renewable-energy",
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
  }, [isPlaying, slides.length]);

  return (
    <>
    <Rndheader/>
    {/* rnd banneer */}
    <section className="relative w-full h-[94vh] overflow-hidden px-30">
      {/* Background Image with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.img
          key={slides[active].image}
          src={slides[active].image}
          alt={slides[active].title}
          className="absolute top-0 left-0 w-full h-full object-cover"
          initial={{ opacity: 0, y: 50 }}   // start lower
          animate={{ opacity: 1, y: 0 }}     // move up into place
          exit={{ opacity: 0, y: -50 }}      // fade & slide out up
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Slide Content */}
      <div className="relative z-10 flex flex-col justify-center h-full  mx-auto px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[active].title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-3xl md:text-md font-bold text-white mb-6 drop-shadow-lg">
              {slides[active].title}
            </h1>
            <p className="text-base md:text-5xl text-gray-200 mb-6 max-w-4xl leading-relaxed">
              {slides[active].desc}
            </p>

           <button
  onClick={() => router.push(slides[active].link)}
  className="flex items-center gap-3 text-white font-semibold text-lg group"
>
  <span>Launch the experience</span>
  <span className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-white ">
    <IoIosArrowForward className="w-4 h-4" />
  </span>
</button>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Navigation Progress + Controls */}
     {/* Bottom Navigation Progress + Controls */}
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full px-6 z-10">
  <div className="flex gap-4 md:gap-8 justify-center items-center relative">
    {slides.map((s, i) => (
      <div
        key={i}
        onClick={() => {
          if (i !== active) setActive(i);
        }}
        className="cursor-pointer w-32 md:w-62 flex flex-col items-center"
      >
        {/* Progress Bar */}
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
          className={`text-xs md:text-sm font-medium leading-snug ${
            active === i ? "text-white" : "text-gray-300"
          } text-center`}
        >
          {s.title}
        </p>
      </div>
    ))}

    {/* Play / Pause Button */}
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
    
    {/* end banner */}
    <Rndproduct/>
    <AboutPebP/>
    <Rndservice/>
    <Rndexplore/>
    <Rndsolution/>
    <Rndplatform/>
    <Rndstories/>
      <QuickLinks heading="Quick Links" links={links} />
      <Rndslider/>
      <PebBrandP/>
      <Rndfooter/>

    </>
  );
}
