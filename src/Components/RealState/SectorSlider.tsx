"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation ,Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

const projects = [
  {
    id: 1,
    title: "Power",
    description:
      "Tata Projects provides customized turnkey solutions for thermal power plants such as total EPC, comprehensive Balance of Plant (BOP), and Flue-gas desulfurization (FGD) solutions. With rich experience in coal and gas-based plants, super and subcritical technologies, we have executed several large and complex projects.",
    image: "/realstate/three.webp",
  },
  {
    id: 2,
    title: "Water",
    description:
      "Tata Projects offers end-to-end industrial and municipal water treatment solutions across the value chain; river rejuvenation, water supply system, sewage system, treatment plants including desalination and effluent treatment Plants.",
    image: "/realstate/two.jpg",
  },
  {
    id: 3,
    title: "Advanced Technology Facilities",
    description:
      "Tata Projects offers end-to-end industrial and municipal water treatment solutions across the value chain; river rejuvenation, water supply system, sewage system, treatment plants including desalination and effluent treatment Plants.",
    image: "/realstate/one.webp",
  },
  {
    id: 4,
    title: "Metals & Minerals",
    description:
      "Tata Projects offers end-to-end industrial and municipal water treatment solutions across the value chain; river rejuvenation, water supply system, sewage system, treatment plants including desalination and effluent treatment Plants.",
    image: "/realstate/fourS.webp",
  },
  {
    id: 5,
    title: "Oil, Gas and Hydrocarbon",
    description:
      "Tata Projects offers end-to-end industrial and municipal water treatment solutions across the value chain; river rejuvenation, water supply system, sewage system, treatment plants including desalination and effluent treatment Plants.",
    image: "/realstate/fiveS.webp",
  },
];

export default function SectorSlider() {
  return (
    <section className="text-center px-4 sm:px-6 md:px-20 pt-12 md:pt-16 bg-white">
      <section className="w-full py-8 md:pt-16 bg-white relative">
        <div className="max-w-6xl mx-auto px-2 sm:px-4 relative">
          {/* Heading aligned with slider */}
          <h2 className="text-xl md:text-3xl font-bold text-start text-blue-900 mb-6">
            Sectors
          </h2>

          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            autoplay={{
          delay: 2500, 
          disableOnInteraction: false,
        }}
            spaceBetween={20}
            slidesPerView={1.3}
            centeredSlides={true}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              768: { slidesPerView: 2.2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                {({ isActive }) => (
                  <div
                    className={`relative text-center transition-all duration-500 group ${
                      isActive ? "scale-105 " : "scale-90 opacity-70"
                    }`}
                  >
                    {/* Image */}
                    <div className="relative w-full h-48 sm:h-56 md:h-64 flex justify-center">
                      <div className="relative w-[85%] sm:w-[90%] md:w-full h-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover rounded-lg"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg">
                          <h3 className="text-lg md:text-sm font-semibold mb-2">
                            {project.title}
                          </h3>
                          <p className="text-sm md:text-xs mb-4 line-clamp-3">
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

          {/* Custom Navigation Buttons */}
          <div className="custom-prev absolute -left-8 md:-left-12 top-1/2 -translate-y-1/2 z-20 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#1c398e"
              strokeWidth="1.5"
            >
              <line x1="20" y1="12" x2="4" y2="12" />
              <polyline points="12 4 4 12 12 20" />
            </svg>
          </div>

          <div className="custom-next absolute -right-8 md:-right-12 top-1/2 -translate-y-1/2 z-20 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
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
  );
}
