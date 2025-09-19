"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // ✅ import router
import Footer from "../../Components/Footer";
import Industryheader from "yes/Components/Industryheader";
import Sectors from "yes/Components/Sectors";
import Industryplatform from "yes/Components/Industryplatform";
import IndustrySlider from "yes/Components/IndustrySlider";
import IndustryaboutUs from "yes/Components/Industryabout";
import ServicesSlider from "yes/Components/ServicesSlider";
import Explore from "yes/Components/Explore";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import IndustrySector from "yes/Components/Industrysectors";
const slides = [
  {
    title: "Power",
    desc:
      "Delivering cutting-edge power generation and transmission solutions that ensure energy efficiency, reliability, and sustainable growth for industries and communities.",
    video: "/video.mp4",
    link: "/menupage",
  },
  {
    title: "Transportation",
     desc:
      "Building world-class highways, railways, metros, and airports that redefine connectivity, reduce travel time, and power economic development.",
    video: "/video.mp4",
   link: "/epcsolutions",
  },
  {
    title: "Water",
    desc:
      "Designing and implementing smart water supply, wastewater treatment, and desalination projects to secure clean water and sustainable management for the future.",
    video: "/video.mp4",
   link: "/project-management",
  },
  {
    title: "Industrial & Buildings",
     desc:
      "Creating advanced industrial plants, commercial complexes, and iconic building projects with innovative engineering, safety, and modern design standards.",
    video: "/homeslider.mp4",
   link: "/solutionservice",
  },
];

export default function Industryinstallation() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const router = useRouter(); // ✅ initialize router

 useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <Industryheader />
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
      <div className="relative z-10 flex flex-col justify-center h-full  mx-auto px-6 text-left md:px-20">
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
              <span>Learn More</span>
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
      <IndustrySector/>
      <Industryplatform />
      <IndustryaboutUs />
      <IndustrySlider />
      <ServicesSlider />
      <Explore />
      <Footer />
    </>
  );
}
