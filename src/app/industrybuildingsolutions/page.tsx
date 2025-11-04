"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  FaIndustry,
  FaBuilding,
  FaHospital,
  FaRoad,
  FaStamp,
} from "react-icons/fa"; // ✅ Added relevant icons

import Footer from "../../Components/Footer";
import Brand from "yes/Components/Brand";
import Navbar from "yes/Components/Navbar";
import Industrybrand from "yes/Components/Industrybrand";

export default function Industrybuildingsolutions() {
  const features = [
    {
      title: "Industrial Building Construction",
      description:
        "We construct factories, warehouses, and logistics hubs with robust structures, efficient layouts, and compliance with industrial standards for smooth operations.",
      icon: <FaIndustry className="text-[#000080] text-6xl mb-4" />, // 🏭
    },
    {
      title: "Commercial Complexes",
      description:
        "Design and build multi-storey offices and commercial complexes, ensuring functional layouts, aesthetic appeal, and operational efficiency for businesses.",
      icon: <FaBuilding className="text-[#000080] text-6xl mb-4" />, // 🏢
    },
    {
      title: "Institutional Infrastructure",
      description:
        "Develop schools, hospitals, and R&D centers with safe, sustainable, and fully compliant infrastructure supporting education, healthcare, and research activities.",
      icon: <FaHospital className="text-[#000080] text-6xl mb-4" />, // 🏥
    },
    {
      title: "Public Infrastructure",
      description:
        "Plan and execute roads, bridges, drains, and utilities, enhancing urban connectivity, safety, and long-term public service efficiency.",
      icon: <FaRoad className="text-[#000080] text-6xl mb-4" />, // 🛣️
    },
    {
      title: "PE Stamping Services",
      description:
        "We offer licensed P.E. stamping and sealing for engineering documents including reports, calculations, and construction drawings across various jurisdictions.",
      icon: <FaStamp className="text-[#000080] text-6xl mb-4" />, // 🧾
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center text-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left mt-16">
            <h1 className="text-2xl md:text-5xl font-bold leading-snug mb-4">
              Building & Infrastructure Industry Building Solutions
            </h1>
            <p className="text-sm md:text-lg max-w-sm mx-auto lg:mx-0">
              Pre-Engineered Buildings (PEBs) are modern steel structures
              designed, fabricated, and assembled using standardized components
              for faster construction.
            </p>
          </div>

          {/* Slider */}
          <div className="w-full relative flex justify-center">
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

      {/* Features Section with Icons */}
      <section className="w-full bg-white py-12 px-6 md:px-12 lg:px-20">
        <div className=" mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-6">
            Building & Infrastructure / Industry Building Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Landsking Infra provides end-to-end construction and infrastructure
            solutions across industrial, commercial, institutional, and public
            sectors, delivering precise engineering, structural integrity, and
            timely execution while tailoring multidisciplinary solutions to meet
            each project’s unique requirements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 hover:bg-gray-100 rounded-2xl shadow-md transition-all duration-300 flex flex-col items-center text-center"
              >
                {feature.icon}
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

      <Industrybrand />
      <Footer />
    </>
  );
}
