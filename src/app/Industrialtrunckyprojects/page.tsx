"use client";

import { useState } from "react";
import React from "react";
import Footer from "yes/Components/Footer";
import Industryheader from "yes/Components/Industryheader";
import Trunkey from "yes/Components/Trunkey";
import Link from "next/link";
import Trunkeytpes from "yes/Components/Trunkeytpes";
import Industryplatformtab from "yes/Components/Industryplatformtab";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Rooftop Solar for Manufacturing",
    description:
      "Transform your idle roof space into a high-performance asset. Slash your operational costs and reduce reliance on the grid with a custom rooftop solar system built for your manufacturing facility.",
    image: "/realstate/three.webp",
  },
  {
    id: 2,
    title: "Ground-Mounted Solar for Industrial Estates",
    description:
      "Get uninterrupted, large-scale power with our ground-mounted solar solutions, designed for the vast energy needs of industrial estates.",
    image: "/realstate/two.jpg",
  },
  {
    id: 3,
    title: "On-Grid & Hybrid Solar Installations",
    description:
      "Choose a solar system that fits your power needs and business goals. Our on-grid systems sync with the utility grid, allowing you to benefit from net metering. For ultimate power reliability, our hybrid installations combine grid power with battery backup, ensuring your operations never stop, even during a blackout.",
    image: "/realstate/one.webp",
  },
  {
    id: 4,
    title: "Net Metering & Open Access Support",
    description:
      "Navigating the complexities of solar regulations is our job. We provide expert support with net metering and open access policies, handling all the paperwork, government approvals, and utility company coordination to ensure a smooth and hassle-free setup.",
    image: "/realstate/fourS.webp",
  },
  {
    id: 5,
    title: "Battery-Integrated Solar for Power Reliability",
    description:
      "Ensure continuous power for your business with a smart, battery-integrated solar system. Store excess energy to eliminate peak-hour costs and protect your operations from unexpected outages.",
    image: "/realstate/fiveS.webp",
  },
];

// ✅ FIXED: Function name starts with uppercase (React component)
const Page = () => {
  const [activeOverlay, setActiveOverlay] = useState<number | null>(null);

  const handleOverlayToggle = (id: number) => {
    setActiveOverlay((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <Industryheader />
      <Trunkey />

      {/* Intro Section */}
      <section className="bg-white py-12 px-4 md:px-15">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#000080] leading-snug">
              Industrial Turnkey Projects
            </h2>
            <div className="w-20 h-[3px] bg-[#272727] mt-3 mb-6"></div>

            <p className="text-gray-700 mb-4 leading-relaxed">
              At Landsking Infrarem Pvt. Ltd., we are recognized across the
              industry for our expertise in both traditional and advanced
              construction techniques. Our approach blends innovative thinking
              with precision-driven delivery processes, always centered around
              fulfilling our clients unique needs.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Since our inception, we have upheld the highest standards of
              quality, customer-centric values, modern engineering excellence,
              ethical business practices, and transparency in every aspect of
              our operations. These principles have earned us the reputation of
              being a trusted and preferred construction partner.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our goal is to lead the commercial and industrial construction
              sector by offering personalized, end-to-end solutions across
              various domains of construction and infrastructure management.
              Landsking Infrarem Pvt. Ltd. provides turnkey solutions to
              industrial projects with expertise in Minerals & Metals, Power,
              Bulk Material Handling Facilities in Ports & Mines, Fertilizers,
              Petrochemicals, Chemical Plants, Cement, Green Energy and other
              Industrial Plants.
            </p>

            <Link href="/industry-contact">
              <button className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
                GET A QUOTE
              </button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <Image
              src="/menupageimg/mod13.jpg"
              alt="EPACK Prefab Industrial Building"
              className="rounded-md shadow-md w-[600px] h-[400px] object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            />
          </div>
        </div>
      </section>

      <Industryplatformtab />
      <Trunkeytpes />

      {/* Services Section */}
      <section className="text-center px-4 sm:px-6 md:px-12 pt-1 md:pt-16 bg-white">
        <section className="w-full py-8 md:pt-16 bg-white relative">
          <div className="mx-auto px-2 sm:px-4 relative">
            <h2 className="text-2xl md:text-3xl font-bold text-start text-[#000080] mb-6">
              Services
            </h2>

            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              centeredSlides={false}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 0 },
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                  centeredSlides: true,
                },
                768: {
                  slidesPerView: 2.2,
                  spaceBetween: 24,
                  centeredSlides: true,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                  centeredSlides: true,
                },
              }}
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  {({ isActive }) => (
                    <div
                      className={`relative text-center transition-all duration-500 group ${
                        isActive ? "scale-105" : "scale-90 opacity-70"
                      }`}
                    >
                      <div className="relative w-full h-48 sm:h-56 md:h-64 flex justify-center">
                        <div className="relative w-full h-full">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover w-full h-full rounded-lg"
                          />

                          {/* Title bar */}
                          <div className="absolute bottom-0 w-full bg-[#000080] text-white py-2 text-center text-sm font-semibold">
                            {project.title}
                          </div>

                          {/* Overlay */}
                          <div
                            onClick={() => handleOverlayToggle(project.id)}
                            className={`absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-4 
                              rounded-lg transition-opacity duration-500 cursor-pointer
                              ${
                                activeOverlay === project.id
                                  ? "opacity-100"
                                  : "opacity-0"
                              }
                              md:opacity-0 md:group-hover:opacity-100 md:cursor-default`}
                          >
                            <h3 className="text-sm md:text-sm font-semibold mb-2">
                              {project.title}
                            </h3>
                            <p className="text-[10px] md:text-xs mb-4 line-clamp-3">
                              {project.description}
                            </p>
                            <button className="px-4 py-2 text-xs bg-white text-blue-700 font-semibold shadow-md hover:bg-gray-200 transition">
                              Know More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Desktop arrows */}
            <div className="custom-prev absolute top-1/2 -translate-y-1/2 left-2 z-20 hidden md:flex cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#000080"
                strokeWidth="1.5"
              >
                <line x1="20" y1="12" x2="4" y2="12" />
                <polyline points="12 4 4 12 12 20" />
              </svg>
            </div>

            <div className="custom-next absolute top-1/2 -translate-y-1/2 right-2 z-20 hidden md:flex cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#1c398e"
                strokeWidth="1.5"
              >
                <line x1="4" y1="12" x2="20" y2="12" />
                <polyline points="12 4 20 12 12 20" />
              </svg>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </>
  );
};

// ✅ Export the renamed component
export default Page;
