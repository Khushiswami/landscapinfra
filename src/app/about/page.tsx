"use client";
import { useState, useEffect } from "react";
// import Pebexpertise from "../pebexpertise/page"
// import Aboutpeb from "../Aboutpeb/page";
// import Platform from "../platform/page"
// import Totalsolution from "../totalsolution/page"
import PlatformP from "../../Components/PlatformP";
import AboutPebP from "../../Components/AboutPebP";

import Footer from "../../Components/Footer";
// import PebCode from "../../Components/PebCode"

import { IoCallOutline } from "react-icons/io5";
// import ImageSlider from "../../Components/ImageSlider";
import ContactSection from "../../Components/ContactSection";
import TripleBottomAccordion from "../../Components/TripleBottomAccordion";
import ReviewsSection from "../../Components/ReviewsSection";
import Timeline from "../../Components/Timeline";
import ProjectSlider from "../../Components/ProjectSlider";
import KeyFeatures from "../../Components/KeyFeatures";
import ServicesSlider from "../../Components/ServicesSlider";
import PreEngineeredProducts from "../../Components/PreEngineeredProducts";
import BuildHistory from "../../Components/BuildHistory";
import Accolades from "../../Components/Accolades";
import Navbar from "yes/Components/Navbar";
import Renewableslider from "yes/Components/Renewable/Renewableslider";

const slides = [
  {
    title: "PRE ENGINEERED BUILDINGS",
    description: "WE DELIVER HIGH PERFORMANCE PRE ENGINEERED STEEL BUILDINGS.",
    video: "/video.mp4",
  },
  {
    title: "EPC Solutions",
    description:
      "Delivering end-to-end Engineering, Procurement, and Construction solutions, we turn ambitious visions into iconic structures with precision and innovation.",
    video: "/video.mp4",
  },
  {
    title: "Project Management Consultancy",
    description:
      "Providing expert project management guidance, we ensure projects are delivered on time, within budget, and to the highest standards of quality.",
    video: "/video.mp4",
  },
  {
    title: "Structural Engineering Services",
    description:
      "Offering innovative structural engineering solutions, we design safe, durable, and efficient frameworks that form the backbone of iconic projects.",
    video: "/homeslider.mp4",
  },
];

export default function About() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const slideTimer = setTimeout(() => {
      setActive((prevActive) => (prevActive + 1) % slides.length);
    }, 5000);

    return () => {
      clearTimeout(slideTimer);
    };
  }, [active]);

  return (
    <>
      <Navbar />
      <div className="w-full min-h-[500px] flex flex-col md:flex-row">
        <div
          className="flex-1 flex items-center justify-center p-8 bg-cover bg-center relative"
          style={{
            backgroundImage: `linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/aboutright.jpeg')`,
          }}
        >
          <div className="text-white text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold leading-snug tracking-wide">
              About Us
            </h1>
          </div>
        </div>
      </div>
      <AboutPebP />
      <TripleBottomAccordion />
      <Renewableslider />
      <ReviewsSection />
      <KeyFeatures />
      <BuildHistory />
      <Timeline />
      <ServicesSlider />
      <PlatformP />
      <PreEngineeredProducts />
      <ProjectSlider />
      {/* <PebExpertiseP /> */}
      <Accolades />
      {/* <TotalSolutionP/> */}
      {/* <Insights/> */}
      {/* <PebCode/> */}
      {/* <MediaP/> */}
      {/* <PebBrandP/> */}
      {/* <ImageSlider/> */}
      <ContactSection />

      <div className="bg-[#272727] bg-repeat py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-white">
          {/* Left text */}
          <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left mb-4 md:mb-0">
            COMMITTED TO YOUR SATISFACTION
          </h2>

          {/* Right call info */}
          <div className="flex items-center gap-4 bg-white text-[#000080] px-4 py-2 rounded-full shadow-lg">
            <div className="bg-[#000080] text-white p-3 rounded-full">
              <IoCallOutline />
            </div>
            <div>
              <p className="text-sm font-semibold">CALL US</p>
              <a
                href="tel:+918130444466"
                className="text-lg font-bold hover:underline"
              >
                +91 8130 444 466
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
