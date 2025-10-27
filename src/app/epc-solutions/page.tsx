"use client";

import React, { useState } from "react";
import Footer from "yes/Components/Footer";
import Renewableheader from "yes/Components/Renewableheader";
import Epc from "yes/Components/Epc";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useRouter } from "next/navigation";
import {
  ArrowUpRight,
  PencilRuler,
  Building2,
  ShieldCheck,
  Layers,
} from "lucide-react";
import {
  FaTools,
  FaBolt,
  FaShieldAlt,
  FaLeaf,
  FaCogs,
  FaExpand,
} from "react-icons/fa";

export default function Epcsolutions() {
  const [activeTab, setActiveTab] = useState(1);
  const [animateArrow, setAnimateArrow] = useState(false);
  const router = useRouter();

  // ✅ FIXED: close function properly
  const handleClick = () => {
    setAnimateArrow(!animateArrow);
    router.push("/system");
  };

  // ✅ Moved slides & features outside of handleClick
  const slides = [
    {
      image: "/preimages/office.jpg",
      title: "Pre-fab Office",
      link: "/prefabricatedSite",
    },
    {
      image: "/preimages/industrial-enclosure.jpg",
      title: "Industrial Enclosures",
      link: "/industrialEnclosures",
    },
    {
      image: "/preimages/railway-shelter.jpg",
      title: "Railway Shelters",
      link: "/railwayShelters",
    },
    {
      image: "/preimages/control-room.jpg",
      title: "Control Room",
      link: "/controlRoom",
    },
    {
      image: "/preimages/cleanroomk.jpg",
      title: "Clean Room",
      link: "/cleanRoom",
    },
    {
      image: "/preimages/acoustic.jpg",
      title: "Acoustic Enclosure",
      link: "/acousticEnclosure",
    },
  ];

  const features = [
    {
      title: "Custom-Built Design",
      description:
        "Fully tailored to your operational and architectural requirements, ensuring precision and efficiency.",
      icon: <FaCogs className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Quick Installation",
      description:
        "Factory-engineered components allow rapid onsite assembly, saving both time and labor costs.",
      icon: <FaTools className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Cost-Efficient Construction",
      description:
        "Optimized designs reduce material waste and overall construction expenses.",
      icon: <FaBolt className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Durable and Low Maintenance",
      description:
        "Built to withstand harsh weather and seismic conditions with minimal upkeep.",
      icon: <FaShieldAlt className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Energy Efficient",
      description:
        "Insulated wall and roof panels provide excellent temperature control and energy savings.",
      icon: <FaLeaf className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Expandable & Flexible",
      description:
        "Easily scalable and adaptable to meet future growth and business requirements.",
      icon: <FaExpand className="text-[#000080] text-3xl mb-4" />,
    },
  ];

  return (
    <>
      <Renewableheader />

      {/* ===== Hero Section ===== */}
      <section className="relative min-h-screen flex items-center text-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/modular.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div className="text-center lg:text-left mt-16 lg:mt-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-snug mb-4">
              Modular Building Solutions
            </h1>
            <p className="text-lg max-w-md mx-auto lg:mx-0">
              Build your project offsite with precision and speed. Enjoy faster
              completion and effortless on-site assembly for seamless results.
            </p>
          </div>

          {/* Swiper Section */}
          <div className="flex justify-center mt-8 lg:mt-0">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
              className="pb-10 max-w-[280px]"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white text-black rounded-xl shadow-lg overflow-hidden flex flex-col items-center">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-56 object-cover"
                    />
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold">{slide.title}</h3>
                      <a
                        href={slide.link}
                        className="mt-2 inline-block text-[#000080] hover:underline"
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
      <section className="w-full bg-white py-12 px-4 sm:px-6 md:px-12">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug max-w-4xl mx-auto">
              Landsking Infra Fabrication Solutions
            </h2>
            <div className="w-12 h-1 bg-[#000080] mt-3 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                Landsking Infra delivers sturdy and cost-efficient
                <span className="text-[#000080] font-semibold">
                  {" "}
                  Fabrication Solutions{" "}
                </span>
                Landsking Infra delivers precision-engineered fabrication
                services for industrial, commercial, and infrastructure
                projects, ensuring strength, accuracy, and long-lasting
                performance. Our expertise covers heavy steel structures,
                customized sheet metal works, and complex assemblies tailored to
                client requirements. Equipped with an ISO-compliant fabrication
                facility, we maintain stringent quality standards while ensuring
                timely project delivery and smooth onsite erection. Our team of
                skilled welders and certified fabrication engineers works
                closely with civil and structural teams to guarantee seamless
                project execution. From design coordination to final
                installation, Landsking Infra provides reliable, efficient, and
                high-quality fabrication solutions that meet industry standards
                and project timelines.
              </p>

              <div className="flex items-center justify-center md:justify-start gap-4">
                <button className="border text-[#000080] border-blue-900 px-6 py-2 text-sm sm:text-base hover:bg-[#000080] hover:text-white transition">
                  GET A QUOTE
                </button>
              </div>
            </div>

            <div className="relative w-full h-64 sm:h-80 md:h-[450px]">
              <img
                src="/Industrial-Buildings-Construction.webp"
                alt="Industrial Building"
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <Epc />

      {/* ===== Steps Section ===== */}
      <div className="hidden md:grid bg-[#d9d9d9] px-[60px] grid-cols-2 md:grid-cols-7 text-sm md:text-base font-medium text-gray-800">
        {[
          "Conceptual Design",
          "Proposal Drawings",
          "Contract Awarded",
          "Detail Drawings",
          "Fabrication",
          "Erection",
          "Warranty",
        ].map((step, idx) => (
          <button
            key={idx}
            className="px-3 py-8 text-center font-semibold text-[#000000]"
          >
            {idx + 1}. {step}
          </button>
        ))}
      </div>

      {/* ===== Example Step Section ===== */}
      <div className="flex items-center justify-center bg-[#f2f2f2] px-9 py-12 md:px-19">
        <div className="grid md:grid-cols-2 gap-12 w-full">
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-9xl font-bold text-[#000080]">
              {activeTab.toString().padStart(2, "0")}
            </h1>
            <h2 className="mt-2 text-4xl md:text-6xl font-semibold text-[#000080]">
              Conceptual Design
            </h2>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4">
              Turn your ideas into reality
            </h3>
            <p className="text-[#737373] mb-6">
              We begin with your ideas, then propose a fast and binding plan in
              terms of design, fabrication, erection, costs, and timeframe.
            </p>
            <div className="flex gap-10 mb-6">
              <div className="flex flex-col items-center">
                <div className="px-8 py-6 bg-[#000080] text-white">
                  <PencilRuler className="w-11 h-11 mb-2" />
                </div>
                <span className="font-medium mt-2 text-xl">
                  Standard Design
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="px-8 py-6 bg-[#000080] text-white">
                  <Building2 className="w-11 h-11 mb-2" />
                </div>
                <span className="font-medium mt-2 text-xl">
                  Premium Products
                </span>
              </div>
            </div>
            <img
              src="/product/s3.jpg"
              alt="Conceptual Design"
              className="w-full h-52 object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-[#fff] px-9 py-12 md:px-19">
        <div className="grid md:grid-cols-2 gap-12  w-full">
          {/* Left */}
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-9xl font-bold text-[#000080]">02</h1>

            <span className="mt-2  font-semibold text-[#000080] text-4xl  md:text-6xl">
              Proposal <br /> Drawings
            </span>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h3 className="font-medium text-[23px] text-[#000000]">
                ▪ Optimum Solutions
              </h3>
              <p className="text-[#a6a6a6] text-[23px]">
                Energy efficiency and resistance to corrosion and severe weather
                conditions.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-[23px] text-[#000000]">
                ▪ Optimum Construction Costs
              </h3>
              <p className="text-[#a6a6a6] text-[23px]">
                For a clear view of the details of your buildings.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-[23px] text-[#000000]">
                ▪ A Committed Schedule
              </h3>
              <p className="text-[#a6a6a6] text-[23px]">
                For the best utilization of your budget and project management.
              </p>
            </div>
            <div className="mt-6 mb-3">
              <img
                src="/product/s1.jpg"
                alt="Proposal Drawings"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 03 - Contract Awarded */}
      <div className="flex items-center justify-center bg-[#f2f2f2] px-9 py-12 md:px-19">
        <div className="grid md:grid-cols-2 gap-12  w-full">
          {/* Left */}
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-9xl font-bold text-[#000080]">03</h1>
            <span className="mt-2  font-semibold text-[#000080] text-4xl  md:text-6xl">
              Contract <br /> Awarded
            </span>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-center space-y-6">
            <h3 className="font-semibold text-[30px] text-black">
              Signing of contract to execute the construction
            </h3>
            <div className="mt-1 mb-3">
              <img
                src="/service.jpg"
                alt="Contract Awarded"
                className="w-full h-69 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 04 - Detail Drawings */}
      <div className="flex items-center justify-center bg-[#fff] px-9 py-12 md:px-19">
        <div className="grid md:grid-cols-2 gap-12  w-full">
          {/* Left */}
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-9xl font-bold text-[#000080]">04</h1>
            <span className="mt-2  font-semibold text-[#000080] text-4xl  md:text-6xl">
              Detail <br /> Drawings
            </span>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-center space-y-6 mt-8">
            <h3 className="font-medium text-[23px] text-[#000000]">
              ▪ Outstanding Design Ability
            </h3>
            <h3 className="font-medium text-[23px] text-[#000000]">
              ▪ High Engineering Capabilities
            </h3>
            <h3 className="font-medium text-[23px] text-[#000000]">
              ▪ 100+ Talented In-house Engineers
            </h3>
          </div>
        </div>
      </div>
      {/* ===== CTA Section ===== */}

      {/* ===== Key Features ===== */}
      <section className="w-full bg-white py-12 px-4 sm:px-6 md:px-12">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug max-w-4xl mx-auto">
              Landsking Infra Fabrication Solutions
            </h2>
            <div className="w-12 h-1 bg-[#000080] mt-3 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                Landsking Infra delivers sturdy and cost-efficient
                <span className="text-[#000080] font-semibold">
                  {" "}
                  Fabrication Solutions{" "}
                </span>
                Landsking Infra delivers precision-engineered fabrication
                services for industrial, commercial, and infrastructure
                projects, ensuring strength, accuracy, and long-lasting
                performance. Our expertise covers heavy steel structures,
                customized sheet metal works, and complex assemblies tailored to
                client requirements. Equipped with an ISO-compliant fabrication
                facility, we maintain stringent quality standards while ensuring
                timely project delivery and smooth onsite erection. Our team of
                skilled welders and certified fabrication engineers works
                closely with civil and structural teams to guarantee seamless
                project execution. From design coordination to final
                installation, Landsking Infra provides reliable, efficient, and
                high-quality fabrication solutions that meet industry standards
                and project timelines.
              </p>

              <div className="flex items-center justify-center md:justify-start gap-4">
                <button className="border text-[#000080] border-blue-900 px-6 py-2 text-sm sm:text-base hover:bg-[#000080] hover:text-white transition">
                  GET A QUOTE
                </button>
              </div>
            </div>

            <div className="relative w-full h-64 sm:h-80 md:h-[450px]">
              <img
                src="/Industrial-Buildings-Construction.webp"
                alt="Industrial Building"
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
