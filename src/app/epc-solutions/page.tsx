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
import Link from "next/link";

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
              Our Solar EPC Solutions for a Greener Tomorrow
            </h1>
            <p className="text-lg max-w-md mx-auto lg:mx-0">
              LandsKing Infra delivers advanced solar EPC solutions, from
              ideation to commissioning, driving renewable energy innovation.
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
                Landsking Infra delivers sturdy and cost-efficient Landsking
                Infra delivers precision-engineered fabrication services for
                industrial, commercial, and infrastructure projects, ensuring
                strength, accuracy, and long-lasting performance. Our expertise
                covers heavy steel structures, customized sheet metal works, and
                complex assemblies tailored to client requirements. Equipped
                with an ISO-compliant fabrication facility, we maintain
                stringent quality standards while ensuring timely project
                delivery and smooth onsite erection. Our team of skilled welders
                and certified fabrication engineers works closely with civil and
                structural teams to guarantee seamless project execution. From
                design coordination to final installation, Landsking Infra
                provides reliable, efficient, and high-quality fabrication
                solutions that meet industry standards and project timelines.
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

      <div className="text-center mx-auto  mb-6 md:mb-8 md:mt-7">
        <h2 className="text-xl text-[#000080] md:text-3xl font-bold ">
          Steps of EPC Approach
        </h2>
      </div>

      {/* ===== Example Step Section ===== */}
      <div className="flex items-center justify-center bg-[#f2f2f2] px-9 py-12 md:px-19">
        <div className="grid md:grid-cols-2 gap-12 w-full">
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-6xl font-bold text-[#000080]">
              {activeTab.toString().padStart(2, "0")}
            </h1>
            <h2 className="mt-2 text-3xl  md:text-5xl font-semibold text-[#000080]">
              Solar Project Analysis Services
            </h2>
          </div>
          <div>
            <p className="text-[#737373] mb-6 text-[19px]">
              At LandsKing Infra, every successful solar project begins with
              precision planning. Our expert business development team
              thoroughly assesses your energy requirements, identifies the most
              efficient site locations, and evaluates multiple performance
              scenarios. We then create a detailed preliminary site plan,
              propose optimal capital investment options, and assist you in
              drafting clear, result-driven contracts for a seamless project
              kickoff.
            </p>

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
            <h1 className="text-6xl font-bold text-[#000080]">02</h1>

            <span className="mt-2  font-semibold text-[#000080] text-3xl  md:text-5xl">
              System Designs
            </span>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <p className="text-[#000000] text-[19px]">
                We transform insights into intelligent solar design. Using
                advanced simulation software, our engineers optimize every
                system parameter to ensure maximum energy output and long-term
                reliability. From selecting premium modules and inverters to
                finalizing cables and components, our design process is built
                for efficiency, precision, and performance before moving into
                procurement.
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
            <h1 className="text-6xl font-bold text-[#000080]">03</h1>
            <span className="mt-2  font-semibold text-[#000080]text-3xl  md:text-5xl">
              Construction{" "}
            </span>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-[#000000] text-[19px]">
              Built with precision, powered by expertise. Once the layout is
              finalized, our construction team prepares the site, installs
              mounting structures, and integrates all system components
              according to the engineered design. Each stage of
              installation—right from groundwork to final wiring—is executed
              under strict quality and safety standards to ensure flawless
              delivery.
            </p>
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
            <h1 className="text-6xl font-bold text-[#000080]">04</h1>
            <span className="mt-2  font-semibold text-[#000080] text-3xl  md:text-5xl">
              Testing and
              <br /> Commissioning
            </span>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-center space-y-6 mt-8">
            <p className="text-[#000000] text-[19px]">
              We ensure every system performs at its peak from day one.After
              installation, our specialists conduct thorough mechanical and
              electrical testing, including checks on structural integrity,
              grounding, and connectivity. Once verified, the system is
              seamlessly integrated with the grid (or off-grid network),
              ensuring stable, safe, and optimized energy flow for years to
              come.
            </p>
          </div>
        </div>
      </div>
      {/* ===== CTA Section ===== */}

      {/* ===== Key Features ===== */}
      <section className="w-full bg-white py-12 px-4 sm:px-6 md:px-12">
        <div className="container mx-auto">
          <div className="text-center mb-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-xl md:mb-5 sm:text-2xl md:text-3xl font-bold leading-snug max-w-4xl mx-auto">
                Why Choose Landsking Infra for Solar EPC?
              </h2>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                Building Tomorrows Energy Infrastructure — Today. We specialize
                in complete design-to-delivery solutions backed by engineering
                precision, project management excellence, and sustainable
                innovation. With over 50+ MW of installed capacity, 120+
                completed projects, and a 98% client retention rate, we deliver
                reliability and performance you can trust
              </p>

              <div className="flex items-center justify-center md:justify-start gap-4">
                <Link href="/solar-contact">
                  <button className="border text-[#000080] border-blue-900 px-6 py-2 text-sm sm:text-base hover:bg-[#000080] hover:text-white transition">
                    GET A QUOTE
                  </button>
                </Link>
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
