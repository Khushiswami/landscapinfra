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

import Brand from "../../Components/Brand";
import Pebheader from "yes/Components/Pebheader";

import Footer from "../../Components/Footer";

import Link from "next/link";

export default function Epcsolutions() {
  interface FAQ {
    question: string;
    answer: string;
  }
  const areas = [
    {
      id: 1,
      title: " Engineering & Design ",
      subtitle: " Engineering & Design",
      description:
        "We offer detailed project planning, thorough structural analysis, and innovative design solutions tailored to project requirements. Leveraging advanced engineering tools such as BIM and 3D modeling, we ensure precision, efficiency, and seamless coordination. All our processes strictly adhere to both national and international quality and safety standards.",
      image: "/industry.jpg",
    },
    {
      id: 2,
      title: "Construction & Execution",
      subtitle: "Construction & Execution",
      description:
        "Our end-to-end site management and project coordination ensure smooth execution at every stage. Using modern construction techniques, we enable efficient and fast-track installations. With minimal on-site disruptions, we guarantee quick project turnaround without compromising quality or safety.",
      image: "/expertise/third.png",
    },
    {
      id: 3,
      title: "Procurement & Manufacturing",
      subtitle: "Procurement & Manufacturing",
      description:
        "We source only high-quality raw materials and components to ensure reliability from the ground up. Our in-house manufacturing capabilities cover PEB structures, prefabricated buildings, and sandwich panels—delivering consistent quality and faster timelines. We prioritize sustainable, cost-effective materials that offer long-term durability and performance.",
      image: "/expertise/third.png",
    },
    {
      id: 4,
      title: "Quality & Safety Compliance",
      subtitle: "Quality & Safety Compliance",
      description:
        "We implement stringent quality control measures at every stage of the project to ensure flawless execution and reliable performance. All our processes comply with ISO, IS, and global safety standards, reflecting our commitment to excellence. With a strong focus on sustainable construction, we utilize eco-friendly materials to minimize environmental impact while maximizing long-term value.",
      image: "/expertise/third.png",
    },
  ];

  const possibilities = [
    {
      subtitle: "🏭 Industrial & Manufacturing Units",
      description:
        "Robust structures designed to support heavy-duty industrial operations and production lines.",
      image: "/industry.jpg",
    },
    {
      subtitle: "🏢 Commercial & Institutional Buildings",
      description:
        "Modular spaces for offices, educational institutions, healthcare, and retail environments.",
      image: "/industry.jpg",
    },
    {
      subtitle: "🏗️ Warehouses & Logistics Parks",
      description:
        "Efficient storage and distribution facilities built for scalability and fast operations.",
      image: "/industry.jpg",
    },
    {
      subtitle: "🌱 Agro & Cold Storage Solutions",
      description:
        "Temperature-controlled, durable structures for agricultural produce and perishable goods.",
      image: "/industry.jpg",
    },
    {
      subtitle: "⚡ Power & Energy Sector Infrastructure",
      description:
        "Custom-built solutions for power plants, substations, and energy sector facilities.",
      image: "/industry.jpg",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 4; // Show 4 cards per row

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev === 0 ? possibilities.length - visibleCards : prev - 1
    );
  };

  const nextSlide = () => {
    setStartIndex((prev) =>
      prev + visibleCards >= possibilities.length ? 0 : prev + 1
    );
  };

  // Slice visible cards and wrap around if needed
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
  const [selectedId, setSelectedId] = useState(3);
  const [open, setOpen] = useState(false);

  const selectedArea = areas.find((area) => area.id === selectedId);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const slides = [
    {
      image: "/expertise/third.png",
      title: "Prefabricated Structure",
      link: "#",
    },

    {
      image: "/expertise/third.png",
      title: "Labor Hutment",
      link: "#",
    },
    {
      image: "/expertise/third.png",
      title: "Control Room",
      link: "#",
    },
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const stats = [
    {
      label: "Years of Expertise",
      value: 20,
      suffix: "+",
      icon: <FaAward className="text-[#000080] text-xl" />,
    },
    {
      label: "Projects Delivered",
      value: 500,
      suffix: "+",
      icon: <FaProjectDiagram className="text-[#000080] text-xl" />,
    },
    {
      label: "Nationwide Presence",
      value: 25,
      suffix: "+ States",
      icon: <FaGlobeAsia className="text-[#000080] text-xl" />,
    },
    {
      label: "Certified Processes",
      value: 100,
      suffix: "%",
      icon: <FaCertificate className="text-[#000080] text-xl" />,
    },
  ];

  return (
    <>
      <Pebheader />
      <section className="relative h-screen flex items-center text-white overflow-hidden">
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
          <div className="text-center mt-20 lg:text-left ">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug mb-4 sm:mb-6 max-w-md mx-auto lg:mx-0">
              EPC Solutions
            </h1>
            <p className="text-sm sm:text-base md:text-lg max-w-sm mx-auto lg:mx-0">
              Prefabricated structures are buildings or components manufactured
              in a factory and then transported to the site for quick assemblly.{" "}
            </p>
          </div>

          {/* Right Slider */}
          <div className="w-full relative mt-10">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              className="pb-10"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white text-black rounded-xl shadow-lg overflow-hidden flex flex-col items-center mx-auto w-[250px]">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-72 object-cover"
                    />
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold">{slide.title}</h3>
                      <a
                        href={slide.link}
                        className="mt-3 inline-block text-[#000080] hover:underline"
                      >
                        Read more →
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* Navigation Buttons */}
              {/* <div className="swiper-button-prev !text-white !top-1/2 !-translate-y-1/2 !left-0"></div>
            <div className="swiper-button-next !text-white !top-1/2 !-translate-y-1/2 !right-0"></div> */}
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
              EPC Solutions – Comprehensive Turnkey Project Management by
              Ladsking Infra{" "}
            </h2>
            <div className="w-20 h-[3px] bg-[#272727] mt-3 mb-6"></div>

            <p className="text-gray-700 mb-4 leading-relaxed">
              At Ladsking Infra, we deliver complete EPC (Engineering,
              Procurement, and Construction) solutions, ensuring a smooth
              process from concept to completion. As a trusted leader in
              prefabrication and PEB systems across India, we provide tailored
              turnkey solutions for industrial, commercial, and infrastructure
              projects.{" "}
            </p>

            <Link href="/contact">
              <button className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
                GET A QUOTE
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <img
              src="/industry.jpg"
              alt="Landsking Infra Pvt Ltd Prefab Industrial Building"
              className="rounded-md shadow-md w-[600px] h-[400px] object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            />
          </div>
        </div>
      </section>
      {/* end description */}
      {/* capiablites */}
      <section className="w-full bg-white py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="absolute -bottom-4 -right-4 w-full h-full   rounded-2xl"></div>
            <img
              src="/PEB.jpg" // replace with your real factory image
              alt="Manufacturing Facility"
              width={700}
              height={450}
              className="rounded-md shadow-md w-[600px] h-[400px] object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            />
          </div>

          {/* Right Side - Content */}
          <div>
            <div className="flex items-center mb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-[#000080]">
                Ladsking Infra’s EPC Expertise: Delivering End-to-End Solutions
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              Our comprehensive project management handles every phase of the
              construction process, enabling clients to concentrate on their
              core business while we manage execution. With integrated design,
              manufacturing, and on-site capabilities, we deliver
              cost-efficient, high-quality, and timely solutions.
            </p>

            <button className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
              GET A QUOTE
            </button>
          </div>
        </div>
      </section>
      {/* endcapill */}
      <section className="max-w-7xl mx-auto px-5 py-10">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
          Our EPC Service Offerings
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Menu */}
          <div className="w-full md:w-1/4">
            {/* Mobile Dropdown */}
            <div className="md:hidden mb-4 bg-[#000080]">
              <button
                onClick={() => setOpen(!open)}
                className="w-full p-3 border bg-[#000080] border-gray-300 rounded-lg text-white font-semibold flex justify-between items-center"
              >
                {areas.find((a) => a.id === selectedId)?.title}
                <svg
                  className="w-5 h-5 text-white"
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
                <div className="mt-2 w-full bg-[#000080] border border-gray-300 rounded-lg shadow">
                  {areas.map((area) => (
                    <button
                      key={area.id}
                      onClick={() => {
                        setSelectedId(area.id);
                        setOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 transition font-medium ${
                        selectedId === area.id
                          ? "text-blue-400 bg-blue-900"
                          : "text-white hover:bg-blue-800"
                      }`}
                    >
                      {area.title}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex flex-col bg-blue-900 text-white rounded-lg">
              {areas.map((area, idx) => (
                <button
                  key={area.id}
                  onClick={() => setSelectedId(area.id)}
                  className={`flex items-center gap-3 px-5 py-4 text-left transition ${
                    selectedId === area.id
                      ? "bg-blue-800 font-bold"
                      : "hover:bg-blue-800 text-gray-300"
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
            <div className="flex flex-col md:flex-row bg-white rounded-lg shadow overflow-hidden w-full">
              {/* Text Content */}
              <div className="p-6 flex flex-col justify-center w-full md:w-1/2">
                <h3 className="text-2xl font-semibold text-blue-900 mb-3">
                  {selectedArea.subtitle}
                </h3>
                <p className="text-gray-700 mb-5">{selectedArea.description}</p>
                <button className="flex items-center gap-2 text-blue-900 font-semibold hover:underline">
                  More
                  <span className="bg-yellow-400 p-1 rounded-full text-black">
                    →
                  </span>
                </button>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2 ">
                <img
                  src={selectedArea.image}
                  alt={selectedArea.subtitle}
            className="w-full h-64 md:h-67 object-cover pt-5 " 
                />
              </div>
            </div>
          )}
        </div>
      </section>
      {/* explore content */}
      {/* business benifts */}
      <section className="bg-[#000080] text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Industries We Serve:
          </h2>

          {/* Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {cardsToShow.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
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
              className="bg-white p-2 rounded-full shadow hover:bg-black"
            >
              <ChevronLeft className="w-6 h-6 text-[#000080] hover:text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white p-2 rounded-full shadow hover:bg-black"
            >
              <ChevronRight className="w-6 h-6 text-[#000080] hover:text-white" />
            </button>
          </div>
        </div>
      </section>
      {/* benefits end */}
      {/* special section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#000080] text-center mb-8">
            Why Choose Ladsking Infra for Your EPC Projects?
            <span className="block w-20 h-[2px] bg-[#000080] mx-auto mt-2"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Image Section (Left Side) */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#000080] z-10"></div>
              <img
                src="/industry.jpg"
                alt="PUF panels in industrial shed"
                width={600}
                height={400}
                className="rounded-md shadow-md w-[600px] h-[400px] object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
              />
            </div>

            {/* Text Section (Right Side) */}
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>✔ End-to-End Solutions:</strong> We offer single-point
                responsibility from design to execution, ensuring seamless
                project management.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>✔ Cost & Time Efficiency</strong>Our fast-track approach
                enables timely delivery while keeping costs optimized.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>✔ Industry Expertise </strong> With over 25 years of
                experience in PEB and prefabrication, we bring deep industry
                knowledge to every project.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>✔ Customization & Scalability </strong> Our modular
                solutions are tailored to meet the unique needs of various
                sectors and can scale as required.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>✔ Pan-India Presence </strong> A strong nationwide
                supply chain and project execution capability allow us to serve
                clients across India efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* end special section */}
      {/* why choose us */}
      <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-6 flex items-center">
              Why Choose Landsking Infra Pvt. Ltd for PEBs?
            </h2>

            <p>
              15 Years of Expertise in prefabricated and steel building
              solutions Nationwide Presence with a strong logistics and project
              execution network In-House Design & Engineering powered by 3D
              modeling and load optimization Certified Manufacturing Standards
              ensuring compliance with IS codes and quality benchmarks Timely
              Project Delivery backed by structured planning and skilled
              professionals End-to-End Turnkey Solutions covering design,
              fabrication, delivery, and installation
            </p>

            {/* Animated Counters */}
            {/* <div
              ref={ref}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center bg-white shadow-lg p-3 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-blue-600 text-base">{stat.icon}</div>
                  <h3 className="text-base font-extrabold text-gray-900 mt-2">
                    {inView && (
                      <CountUp
                        end={stat.value}
                        duration={2}
                        suffix={stat.suffix}
                      />
                    )}
                  </h3>
                  <p className="text-[14px] text-gray-600 mt-1 text-center">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div> */}
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute -bottom-4 -left-4 w-full h-full border-4 border-[#000080] rounded-2xl"></div>
            <img
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
      <Brand /> <Footer />
    </>
  );
}
