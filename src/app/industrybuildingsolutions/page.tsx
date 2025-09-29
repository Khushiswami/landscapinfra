"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  FaTools,
  FaBolt,
  FaShieldAlt,
  FaLeaf,
  FaCogs,
  FaExpand,
} from "react-icons/fa";
import {
  FaAward,
  FaGlobeAsia,
  FaDraftingCompass,
  FaCertificate,
  FaClock,
  FaProjectDiagram,
} from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "../../Components/Footer";
import Pebheader from "yes/Components/Pebheader";
import Brand from "yes/Components/Brand";
import { motion } from "framer-motion";
import Navbar from "yes/Components/Navbar";

export default function Industrybuildingsolutions() {
  const features = [
    {
      title: "Industrial Building Construction",
      description:
        " We construct factories, warehouses, and logistics hubs with robust structures, efficient layouts, and compliance with industrial standards for smooth operations.",
      image: "/industry.jpg",
    },
    {
      title: "Commercial Complexes",
      description:
        " Design and build multi-storey offices and commercial complexes, ensuring functional layouts, aesthetic appeal, and operational efficiency for businesses.",
      image: "/industry.jpg",
    },
    {
      title: "Institutional Infrastructure",
      description:
        " Develop schools, hospitals, and R&D centers with safe, sustainable, and fully compliant infrastructure supporting education, healthcare, and research activities.",
      image: "/industry.jpg",
    },
    {
      title: "Public Infrastructure",
      description:
        " Plan and execute roads, bridges, drains, and utilities, enhancing urban connectivity, safety, and long-term public service efficiency.",
      image: "/industry.jpg",
    },
    {
      title: "PE Stamping Services",
      description:
        "We offer licensed P.E. stamping and sealing for engineering documents including reports, calculations, and construction drawings across various jurisdictions.",
      image: "/industry.jpg",
    },
  ];

  const slides = [
    {
      image: "/expertise/third.png",
      title: "Prefabricated Multi-Storey Building Manufacturer",
      link: "#",
    },
    {
      image: "/expertise/third.png",
      title: "Industrial Enclosures",
      link: "#",
    },
    {
      image: "/expertise/third.png",
      title: "Cold Storage & Cold Room Manufacturer",
      link: "#",
    },
    {
      image: "/expertise/third.png",
      title: "Factory Building",
      link: "#",
    },
    {
      image: "/expertise/third.png",
      title: "Warehouse",
      link: "#",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="relative min-h-screen sm:min-h-screen flex items-center text-white overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <div className="text-center lg:text-left order-1 mt-16 sm:mt-12 md:mt-16 lg:mt-0">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug mb-4 sm:mb-6 max-w-md mx-auto lg:mx-0">
              Building & Infrastructure/ Industry Building Solutions
            </h1>
            <p className="text-sm sm:text-base md:text-lg max-w-sm mx-auto lg:mx-0">
              Pre-Engineered Buildings (PEBs) are modern steel structures
              designed, fabricated, and assembled using standardized components
              for faster construction.
            </p>
          </div>

          {/* Slider */}
          <div className="w-full relative order-2 mt-8 lg:mt-0 mb-4 flex justify-center">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
              className="pb-10 max-w-[240px] sm:max-w-sm"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white text-black rounded-xl shadow-lg overflow-hidden flex flex-col items-center mx-auto w-[220px] sm:w-[280px]">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-48 sm:h-72 object-cover"
                    />
                    <div className="p-3 text-center">
                      <h3 className="text-base sm:text-lg font-semibold">
                        {slide.title}
                      </h3>
                      <a
                        href={slide.link}
                        className="mt-2 inline-block text-[#000080] hover:underline text-sm sm:text-base"
                      >
                        Read more →
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="w-full bg-white py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000080] mb-6">
            Building & Infrastructure/ Industry Building Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Landsking Infra provides end-to-end construction and infrastructure
            solutions across industrial, commercial, institutional, and public
            sectors, delivering precise engineering, structural integrity, and
            timely execution while tailoring multidisciplinary solutions to meet
            each project’s scale, complexity, and unique requirements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 hover:bg-gray-100 rounded-2xl shadow-md transition-all duration-300 flex flex-col items-center text-center"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-40 h-40 object-contain mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Brand />
      <Footer />
    </>
  );
}
