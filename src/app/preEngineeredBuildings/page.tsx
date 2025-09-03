"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import PlatformP from "../../Components/PlatformP";
import AboutPebP from "../../Components/AboutPebP";
import TotalSolutionP from "../../Components/TotalSolutionP";
import MediaP from "../../Components/MediaP";
import PebBrandP from "../../Components/PebBrandP";
import Insights from "../../Components/Insights";
import PebSlider from "../../Components/PebSlider";
import ContactSection from "../../Components/ContactSection";
import Servicesone from "yes/Components/Servicesone";
import Footer from "../../Components/Footer";
import Pebheader from "yes/Components/Pebheader";
const slides = [
  {
    title: "PRE ENGINEERED BUILDINGS",
    description: "WE DELIVER HIGH PERFORMANCE PRE ENGINEERED STEEL BUILDINGS.",
    video: "/video.mp4",
    url: "/menupage",
  },
  {
    title: "EPC Solutions",
    description:
      "Delivering end-to-end Engineering, Procurement, and Construction solutions, we turn ambitious visions into iconic structures with precision and innovation.",
    video: "/video.mp4",
    url: "/epcsolutions",
  },
  {
    title: "Project Management Consultancy",
    description:
      "Providing expert project management guidance, we ensure projects are delivered on time, within budget, and to the highest standards of quality.",
    video: "/video.mp4",
    url: "/projectmanagementconsultancy",
  },
  {
    title: "Structural Engineering Services",
    description:
      "Offering innovative structural engineering solutions, we design safe, durable, and efficient frameworks that form the backbone of iconic projects.",
    video: "/homeslider.mp4",
    url: "/buildingandinfrastructure",
  },
];

export default function PreEngineeredBuildings() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setProgress(0);

    const progressTimer = setInterval(() => {
      setProgress((prev) => Math.min(prev + 2, 100));
    }, 100);

    const slideTimer = setTimeout(() => {
      setActive((prevActive) => (prevActive + 1) % slides.length);
    }, 5000);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(slideTimer);
    };
  }, [active]);

  return (
    <>
      <Pebheader />

      <div className="relative w-full h-[70vh] sm:h-[100vh] overflow-hidden">
        {/* Background Video */}
        <video
          key={slides[active].video}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          autoPlay
          loop
          muted
        >
          <source src={slides[active].video} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-8 md:px-20 text-white">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug sm:leading-tight max-w-full md:max-w-3xl">
            {slides[active].title}
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg max-w-full md:max-w-2xl">
            {slides[active].description}
          </p>

          {/* Learn More button */}
          <button
            onClick={() => router.push(slides[active].url)}
            className=" sm:inline-block mt-5 mb-8 sm:mb-10 w-fit sm:max-w-[50%] md:max-w-[20%] px-5 sm:px-6 py-2 text-sm sm:text-base font-semibold text-blue-600 bg-white rounded-full shadow-md hover:bg-blue-100 transition"
          >
            Learn more
          </button>

          {/* Bottom Navigation */}
          {/* 👉 Mobile: Dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 sm:hidden">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  active === index ? "bg-blue-500 scale-110" : "bg-white/70"
                }`}
              ></button>
            ))}
          </div>

          {/* 👉 Desktop: Tabs */}
          <div className="hidden sm:flex absolute bottom-0 left-0 right-0 flex-col sm:flex-row gap-3 sm:gap-6 px-4 sm:px-8 md:px-20 pb-6">
            {slides.map((slide, index) => (
              <div key={index} className="relative w-full sm:w-auto">
                {active === index && (
                  <div
                    className="absolute -top-1 left-0 h-1 bg-blue-500 rounded"
                    style={{
                      width: `${progress}%`,
                      transition: "width 0.1s linear",
                    }}
                  ></div>
                )}
                <button
                  onClick={() => router.push(slide.url)}
                  className={`pt-4 sm:pt-8 text-left sm:text-center transition-all duration-300 break-words 
                    ${
                      active === index
                        ? "text-white"
                        : "text-white/80 hover:text-white"
                    }`}
                >
                  {slide.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rest of content */}
      <AboutPebP />
      <Servicesone />
      <PlatformP />
      <TotalSolutionP />
      <PebSlider />
      {/* <ImageSlider /> */}
      <Insights />
      <MediaP />
      <PebBrandP />
      <ContactSection />
      <Footer />
    </>
  );
}
