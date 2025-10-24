"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  FaAward,
  FaGlobeAsia,
  FaCertificate,
  FaProjectDiagram,
  FaUsers,
  FaSearch,
  FaLightbulb,
} from "react-icons/fa";
// import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Footer from "../../Components/Footer";
import ContactSection from "yes/Components/ContactSection";
import Navbar from "yes/Components/Navbar";

export default function Hvac() {
  interface FAQ {
    question: string;
    answer: string;
  }

  // ===== FAQ =====

  // ===== Pre-engineered product possibilities =====
  const possibilities = [
    {
      subtitle: "Centralized HVAC Systems",
      description:
        "Efficient centralized HVAC systems provide consistent climate control across large commercial and industrial facilities.",
      image: "/industry.jpg",
    },
    {
      subtitle: "VRF/VRV Technology",
      description:
        " Advanced VRF/VRV systems offer flexible, energy-efficient heating and cooling for varied spaces",
      image: "/industry.jpg",
    },
    {
      subtitle: "Chillers and Cooling Towers",
      description:
        "High-performance chillers and cooling towers ensure reliable temperature regulation and optimized energy usage.",
      image: "/industry.jpg",
    },
    {
      subtitle: "AHUs and Ventilation Systems",
      description:
        " Air handling units and ventilation systems maintain air quality and comfortable indoor environments.",
      image: "/industry.jpg",
    },
  ];

  // ===== Features =====
  const features = [
    {
      title: "Customized, Scalable HVAC Solutions",
      description:
        " Tailored HVAC systems designed to meet diverse facility and operational needs.",
      icon: <FaUsers className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Advanced BIM Support for Seamless Integration",
      description:
        "BIM-driven design ensures precise planning, integration, and project coordination.",
      icon: <FaSearch className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Certified Engineers and Technicians",
      description:
        "Skilled professionals manage installation, commissioning, and maintenance for reliable performance.",
      icon: <FaLightbulb className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Energy Audits & Retrofit Recommendations",
      description:
        " Optimize existing HVAC systems to save energy, costs, and enhance efficiency.",
      icon: <FaProjectDiagram className="text-[#000080] text-3xl mb-4" />,
    },
  ];

  // ===== Slides for Swiper =====
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
    { image: "/expertise/third.png", title: "Factory Building", link: "#" },
    { image: "/expertise/third.png", title: "Warehouse", link: "#" },
  ];

  // ===== Areas for dropdown =====
  const areas = [
    {
      id: 1,
      title: "System Design & 3D Modeling",
      subtitle: "System Design & 3D Modeling",
      description:
        "We create precise HVAC system designs using 3D modeling, enabling accurate visualization, seamless integration, and efficient planning for diverse commercial and industrial projects.",
      image: "/menupageimg/peb3.jpg",
    },
    {
      id: 2,
      title: "Energy-Efficient System Integration",
      subtitle: "Energy-Efficient System Integration",
      description:
        " Our solutions integrate high-performance, energy-efficient HVAC systems that reduce operational costs, improve climate control, and optimize indoor air quality across facilities",
      image: "/menupageimg/peb4.png",
    },
    {
      id: 3,
      title: "Installation & Commissioning",
      subtitle: "Installation & Commissioning",
      description:
        "Certified engineers handle professional installation and commissioning of HVAC systems, ensuring reliability, compliance with standards, and smooth, hassle-free project execution",
      image: "/menupageimg/peb5.png",
    },
    {
      id: 4,
      title: "AMC & Performance Monitoring",
      subtitle: "AMC & Performance Monitoring",
      description:
        " We provide annual maintenance contracts (AMC) and continuous performance monitoring to maintain efficiency, prevent downtime, and extend the lifespan of HVAC systems",
      image: "/menupageimg/peb8.jpg",
    },
  ];

  // ===== States =====
  const [selectedId, setSelectedId] = useState(areas[0].id);
  const selectedArea = areas.find((a) => a.id === selectedId);
  const [open, setOpen] = useState(false);

  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 4;

  const prevSlide = () =>
    setStartIndex((prev) =>
      prev === 0 ? possibilities.length - visibleCards : prev - 1
    );
  const nextSlide = () =>
    setStartIndex((prev) =>
      prev + visibleCards >= possibilities.length ? 0 : prev + 1
    );

  const cardsToShow = possibilities
    .slice(startIndex, startIndex + visibleCards)
    .concat(
      startIndex + visibleCards > possibilities.length
        ? possibilities.slice(
            0,
            (startIndex + visibleCards) % possibilities.length
          )
        : []
    );

  // const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // const toggleFAQ = (index: number) =>
  //   setOpenIndex(openIndex === index ? null : index);

  // const stats = [
  //   {
  //     label: "Years of Expertise",
  //     value: 20,
  //     suffix: "+",
  //     icon: <FaAward className="text-[#000080] text-xl" />,
  //   },
  //   {
  //     label: "Projects Delivered",
  //     value: 500,
  //     suffix: "+",
  //     icon: <FaProjectDiagram className="text-[#000080] text-xl" />,
  //   },
  //   {
  //     label: "Nationwide Presence",
  //     value: 25,
  //     suffix: "+ States",
  //     icon: <FaGlobeAsia className="text-[#000080] text-xl" />,
  //   },
  //   {
  //     label: "Certified Processes",
  //     value: 100,
  //     suffix: "%",
  //     icon: <FaCertificate className="text-[#000080] text-xl" />,
  //   },
  // ];

  return (
    <>
      <Navbar />
      <section className="relative h-[75vh] sm:min-h-screen flex items-center text-white overflow-hidden">
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
        <div className="relative z-10 container mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Text */}
          <div className="text-center mt-10 lg:text-left order-1">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold  mb-4 sm:mb-6 max-w-md mx-auto lg:mx-0 md:mt-10">
              HVAC SERVICES
            </h1>
            <p className="text-sm sm:text-base md:text-lg max-w-sm mx-auto lg:mx-0">
              Landsking Infra provides advanced HVAC (Heating, Ventilation, and
              Air Conditioning) solutions for commercial, industrial, and
              institutional spaces, delivering precise climate control, improved
              air quality, and energy efficiency.
            </p>
          </div>

          {/* Right Slider */}
          <div className="w-full relative order-2 mt-6 lg:mt-13 mb-2 flex justify-center">
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
                      className="w-full h-50 sm:h-72 object-cover"
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
      {/* description */}
      <section className="bg-white py-12 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#000080] leading-snug  ">
              HVAC SERVICES{" "}
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed mt-3">
              Landsking Infra provides advanced HVAC (Heating, Ventilation, and
              Air Conditioning) solutions for commercial, industrial, and
              institutional spaces, delivering precise climate control, improved
              air quality, and energy efficiency. Our customized, scalable
              systems cater to diverse facilities, including offices, industrial
              plants, educational institutions, and healthcare centers. Using
              BIM (Building Information Modeling), we ensure accurate planning,
              seamless integration, and efficient execution. Our certified
              engineers and skilled technicians manage installation,
              commissioning, and maintenance to guarantee reliable, safe, and
              long-lasting performance. We also offer energy audits and
              retrofits to optimize existing systems, reduce costs, and enhance
              sustainability. At Landsking Infra, we combine technology,
              expertise, and client-focused solutions to create HVAC systems
              that are efficient, compliant, and future-ready, providing
              comfortable and productive environments across industries
            </p>

            <Link href="/contact">
              <button className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
                GET A QUOTE
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <Image
              src="/menupageimg/peb2.jpg"
              alt="EPACK Prefab Industrial Building"
              className="rounded-md shadow-md w-[600px] h-[400px] object-cover"
            />
          </div>
        </div>
      </section>
      {/* end description */}
      {/* keyfetaure */}
      <section className="w-full bg-white py-12 px-6 md:px-16 lg:px-20">
        <div className=" mx-auto text-center md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Why Choose{" "}
            <span className="text-[#000080]">Landsking Infra Pvt. Ltd.</span>
          </h2>

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
      {/* explore conettt */}
      <section className=" mx-auto px-4 py-10 md:px-23">
        <h2 className="text-3xl md:text-4xl font-bold text-[#000080] mb-8">
          Our Services
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Menu */}
          <div className="w-full md:w-1/4">
            {/* Mobile Dropdown */}
            <div className="md:hidden mb-0">
              <button
                onClick={() => setOpen(!open)}
                className="w-full p-3 rounded-t-lg text-white font-semibold flex justify-between items-center bg-[#000080]"
              >
                {areas.find((a) => a.id === selectedId)?.title}
                <svg
                  className="w-5 h-5 text-[#8080FF]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={open ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                  />
                </svg>
              </button>

              {open && (
                <div className="mt-0 w-full bg-[#000080] rounded-b-lg shadow">
                  {areas.map((area) => (
                    <button
                      key={area.id}
                      onClick={() => {
                        setSelectedId(area.id);
                        setOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-[#8080FF]  ${
                        selectedId === area.id ? "text-white font-semibold" : ""
                      }`}
                    >
                      {area.title}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Desktop Menu */}
            {/* <div className="hidden md:flex flex-col bg-[#000080] text-white rounded-lg p-3"> */}
            <div className="hidden md:flex flex-col bg-[#000080] text-white rounded-lg pt-[27px] pb-[27px] px-[5px]">
              {areas.map((area, idx) => (
                <button
                  key={area.id}
                  onClick={() => setSelectedId(area.id)}
                  className={`flex items-center gap-3 px-5 py-4 text-left transition ${
                    selectedId === area.id
                      ? " font-bold"
                      : "hover: text-gray-300"
                  }`}
                >
                  <span className="text-sm opacity-70">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span>{area.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Content */}
          {selectedArea && (
            // *** CHANGE HERE: flex-col-reverse on mobile, md:flex-row on desktop ***
            <div className="flex flex-col-reverse md:flex-row bg-white rounded-lg shadow overflow-hidden w-full">
              <div
                className="
    p-6 flex flex-col justify-center w-full md:w-1/2
    rounded-lg                
    md:rounded-none          
    md:rounded-tl-lg md:rounded-bl-lg
    shadow border border-[#808080] md:border-r-0
  "
              >
                <h3 className="text-2xl font-semibold text-[#000080] mb-3">
                  {selectedArea.subtitle}
                </h3>
                <p className="text-gray-700 mb-5">{selectedArea.description}</p>
                <button className="flex items-center gap-2 text-[#000080] font-semibold hover:underline">
                  More{" "}
                  <span className=" p-1 rounded-full text-[#000080]">→</span>
                </button>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2">
                <Image
                  src={selectedArea.image}
                  alt={selectedArea.subtitle}
                  className="w-full h-64 md:h-98 object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </section>
      {/* explore content */}

      {/* endcapill */}
      {/* business benifts */}
      <section className="bg-[#000080] text-white py-10 md:px-35">
        <div className=" mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Key Features Of HVAC
          </h2>

          {/* Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {cardsToShow.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img src={item.image} className="w-full h-44 object-cover" />
                <div className="p-4">
                  <p className="text-sm text-black font-semibold mb-2 md:text-xl">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-black">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons Below */}
          <div className="flex justify-center mt-6 gap-4">
            <button
              onClick={prevSlide}
              className="bg-white p-2 rounded-full shadow hover:bg-gray-700"
            >
              <ChevronLeft className="w-6 h-6 text-black" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white p-2 rounded-full shadow hover:bg-gray-700"
            >
              <ChevronRight className="w-6 h-6 text-black" />
            </button>
          </div>
        </div>
      </section>
      {/* benefits end */}
      {/* special section */}

      {/* end special section */}

      {/* why choose us */}
      <section className="w-full bg-white py-16 px-6  lg:px-20 md:px-20">
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-6 flex items-center">
              Become a Customer
            </h2>

            <p>
              Landsking Infra Pvt. Ltd. is your one-stop solution for all
              building and infrastructure requirements. Our pre-engineered steel
              buildings are carefully designed and fabricated to match your
              specific needs. Each structure is built in strict adherence to
              international standards, with components meticulously engineered
              for seamless compatibility. This ensures durability, efficiency,
              and performance across every project we deliver.
            </p>
            <Link href="/contact">
              <button className="border border-[#000080] mt-4 px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
                GET A QUOTE
              </button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute -bottom-4 -left-4 w-full h-full border-4 border-[#000080] rounded-2xl"></div>
            <Image
              src="/industry.jpg" // replace with your image
              alt="Why Choose Us"
              width={700}
              height={450}
              className="relative rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>
      {/* end why choose us */}

      <ContactSection />

      <Footer />
    </>
  );
}
