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
  FaAward,
  FaGlobeAsia,
  FaCertificate,
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

import Brand from "yes/Components/Brand";
import PebSlider from "yes/Components/PebSlider";
import PlatformP from "yes/Components/PlatformP";
import ContactSection from "yes/Components/ContactSection";
import IndustryHeader from "yes/Components/Industryheader";

export default function Defenceinstallation() {
  interface FAQ {
    question: string;
    answer: string;
  }

  // ===== Data =====
  
  
       const slides = [
    {
      image: "/expertise/third.png",
      title: "Prefabricated Multi-Storey Building Manufacturer",
      link: "#",
    },
    { image: "/expertise/third.png", title: "Industrial Enclosures", link: "#" },
    { image: "/expertise/third.png", title: "Cold Storage & Cold Room Manufacturer", link: "#" },
    { image: "/expertise/third.png", title: "Factory Building", link: "#" },
    { image: "/expertise/third.png", title: "Warehouse", link: "#" },
  ];

  

  return (
    <>
<IndustryHeader/>
  <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
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

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative z-10 text-center px-4 sm:px-8 lg:px-12">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-4 sm:mb-6">
      Defence Installation
    </h1>
    <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
      Pre-Engineered Buildings (PEBs) are modern steel structures designed, fabricated, and assembled using standardized components for faster construction.
    </p>
  </div>
</section>


      {/* description */}
      <section className="bg-white py-12 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#000080] leading-snug  ">
                Defence Installation
            </h2>
            <div className="w-20 h-[3px] bg-[#272727] mt-3 mb-6"></div>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Landsking Infra Pvt. Ltd. is one of India’s leading manufacturers
              of Pre-Engineered Buildings (PEBs), delivering complete solutions
              for industrial, commercial, and institutional structures. Our
              buildings are designed with advanced engineering and
              prefabrication technology, ensuring faster project delivery, cost
              efficiency, and customized designs for diverse applications.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              What is a Pre-Engineered Building?{" "}
              <span className="font-bold">Landsking Infra pvt.ltd</span> A
              Pre-Engineered Building (PEB) is a steel structure based on a
              structural framework of primary framing (columns and rafters),
              secondary framing (purlins and girts), along with roof and wall
              sheeting, and other components. All parts are pre-fabricated in
              factories and assembled on-site, drastically reducing construction
              time compared to conventional methods.
            </p>

            <button className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
              GET A QUOTE
            </button>
          </div>
          <div className="flex justify-center">
            <img
              src="/menupageimg/peb2.jpg"
              alt="EPACK Prefab Industrial Building"
              className="rounded-md shadow-md w-[600px] h-[400px] object-cover"
            />
          </div>
        </div>
      </section>
      {/* end description */}
   <ContactSection/>
      <Footer />
    </>
  );
}