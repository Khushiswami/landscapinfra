"use client";
import React from "react";
import Rndfooter from "yes/Components/Rndfooter";
import Rndheader from "yes/Components/Rndheader";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Caeaccordion from "yes/Components/Caeaccordion";
import Caesector from "yes/Components/Caesector";
import Caetabs from "yes/Components/Caetabs";
import Rndtestimonial from "yes/Components/Rndtestimonial";
import Caeaccordionone from "yes/Components/Caeaccordionone";
import Caetabtwo from "yes/Components/Caetabtwo";

const Caesimulation = () => {
  const router = useRouter();

  const slides = [
    {
      title: "Motion Simulation",
      desc: "Modeling and analyzing movement dynamics to optimize mechanical systems and improve performance.",
      image: "/servicecivil/bk.jpg",
      link: "/rnd-contact",
    },
    {
      title: "Thermal Simulation",
      desc: "Simulating heat transfer and temperature effects to enhance safety, efficiency, and product reliability.",
      image: "/servicecivil/bantwo.jpg",
      link: "/rnd-contact",
    },
    {
      title: "Precision Mesh Generation",
      desc: "Creating high-quality computational meshes to ensure accurate simulations and faster design iterations.",
      image: "/servicecivil/banone.jpg",
      link: "/rnd-contact",
    },

    {
      title: "Crash Analysis",
      desc: "Simulating real-world impact scenarios to enhance vehicle safety and structural integrity using advanced FEA tools.",
      image: "/civil/",
      link: "/rnd-contact",
    },
    {
      title: "Managing Noise, Vibration, and Harshness (NVH)",
      desc: "Reducing unwanted sound and vibration through acoustic simulation and modal analysis for optimal comfort and performance.",
      image: "/civil/product.mp4",
      link: "/rnd-contact",
    },
    {
      title: "Multi-Physics Simulation",
      desc: "Integrating structural, thermal, and fluid analyses to accurately predict real-world product performance and reliability.",
      image: "/civil/product.mp4",
      link: "/rnd-contact",
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
    <>
      <Rndheader />
      {/* rnd banner */}
      <section className="relative w-full   h-[60vh] sm:h-[99vh] overflow-hidden">
        {/* Background Video */}
        <img
          src={slides[active].image}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Slide Content */}
        <div className="relative z-10 flex flex-col justify-center h-full  mx-auto px-6  text-left md:px-16">
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
                <span>Contact</span>
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
      {/* end rnd banner */}
      <section className="bg-white py-12 px-4 md:px-15">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#000080] leading-snug  ">
              CAE Certainty: Engineering Excellence for Product Development
            </h2>
            <div className="w-20 h-[3px] bg-[#272727] mt-3 mb-6"></div>

            <p className="text-gray-700 mb-4 leading-relaxed">
              CAE is where every great product begins—not with physical tests,
              but with a fundamental question: Can this be designed better,
              faster, and smarter? As one of the world's foremost technical
              simulation companies, we leverage advanced Computer-Aided
              Engineering (CAE) to answer that question before any material is
              sourced. By utilizing the power of simulation, we eliminate the
              reliance on expensive, slow physical testing and development. This
              insight-first philosophy translates directly into tangible
              benefits for our clients: reduced costs, shorter lead times, and
              demonstrably superior results compared to traditional engineering
              practices. .
            </p>
            <ul className="grid grid-cols-2 list-disc pl-5 gap-2">
              <li>Finite Element Analysis (FEA)</li>
              <li>Structural Analysis</li>
              <li>Optimisation</li>
              <li>Fluid Dynamics</li>
              <li>Thermal Analysis</li>
              <li>Vibration Analysis</li>
              <li>Finite Element Method (FEM)</li>
              <li>Computer-Aided Engineering (CAE)</li>
            </ul>

            <Link href="/rnd-contact">
              <button className="border border-[#000080]  mt-9 px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
                GET A QUOTE
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <img
              src="/menupageimg/mod13.jpg"
              alt="EPACK Prefab Industrial Building"
              className="rounded-md shadow-md w-[600px] h-[400px] object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            />
          </div>
        </div>
      </section>
      <Caeaccordion />
      <Caesector />
      <Caetabs />
      <Caeaccordionone />
      <Caetabtwo />
      <Rndtestimonial />
      <Rndfooter />
    </>
  );
};

export default Caesimulation;
