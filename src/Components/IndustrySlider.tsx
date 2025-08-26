"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// ✅ Main Categories (Power, Transportation, Water, Industrial)
const categories = [
  {
    title: "Power",
    images: ["/industry.jpg", "/industry.jpg", "/industry.jpg"],
    description:
      "We deliver end-to-end power projects including hydro, nuclear, and thermal power. Our expertise ensures reliable, efficient, and sustainable energy solutions for the future.",
  },
  {
    title: "Transportation",
    images: ["/industry.jpg", "/industry.jpg", "/industry.jpg"],

    description:
      "Comprehensive transportation infrastructure covering highways, roads, bridges, railways, metros, and ports. Our solutions drive connectivity and modern mobility.",
  },
  {
    title: "Water",
    images: ["/industry.jpg", "/industry.jpg", "/industry.jpg"],
    description:
      "Advanced water management including water supply, sanitation, and irrigation systems. We enable sustainable use of water resources for urban and rural development.",
  },
  {
    title: "Industrial",
    images: ["/industry.jpg", "/industry.jpg", "/industry.jpg"],
    description:
      "Industrial and building solutions including process plants, commercial complexes, institutional facilities, and smart cities. Driving growth through modern infrastructure.",
  },
];

export default function IndustrySlider() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="px-auto py-8 mt-6 bg-gray-50">
      {/* Section Title */}
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-widest text-gray-500">
          Our Expertise
        </p>
        <h2 className="text-xl font-bold text-[#000080] leading-snug md:text-4xl">
          Shaping the Future of Multiple Sectors
        </h2>
        <div className="w-16 h-1 bg-[#000080] mx-auto mt-3 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto my-8 px-4">
        {/* ✅ Mobile & Tablet View (Tabs + Description Only) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:hidden gap-4">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(cat)}
              className={`p-4 rounded-lg border text-sm font-medium transition-all duration-300 ${
                activeCategory.title === cat.title
                  ? "bg-[#000080] text-white shadow-lg"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* ✅ Mobile & Tablet Description */}
        <div className="lg:hidden mt-6 bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-semibold text-[#000080] mb-3">
            {activeCategory.title}
          </h3>
          <p className="text-gray-600 text-sm">{activeCategory.description}</p>
        </div>

        {/* ✅ Desktop View: Left Tabs + Right Image Slider */}
        <div className="hidden lg:flex w-full h-[500px] rounded-xl overflow-hidden">
          {/* Left Tabs */}
          <div className="w-1/4 bg-white flex flex-col rounded-tl-xl rounded-bl-xl border border-gray-300">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(cat)}
                className={`flex-1 p-6 text-left transition-all duration-300 hover:bg-gray-100 ${
                  activeCategory.title === cat.title
                    ? "bg-white font-semibold shadow-inner"
                    : ""
                } ${
                  index !== categories.length - 1
                    ? "border-b border-gray-300"
                    : ""
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Right Image Slider */}
          <div className="w-3/4 relative">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="w-full h-full"
            >
              {activeCategory.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div
                    className="w-full h-full bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${img})` }}
                  >
                    {/* Overlay */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-11/12">
                      <div className="bg-black/40 p-8 rounded-lg text-white shadow-lg">
                        <h3 className="text-2xl font-bold mb-3 text-center">
                          {activeCategory.title}
                        </h3>
                        <p className="text-sm mb-3 text-center">
                          {activeCategory.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
