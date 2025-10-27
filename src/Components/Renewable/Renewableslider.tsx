"use client";

import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

interface Category {
  title: string;
  images: string[];
  description: string;
}

const categories: Category[] = [
  {
    title: "Solar EPC Solutions",
    images: ["/industry.jpg", "/about.png", "/about.png"],
    description:
      " We provide complete turnkey Solar EPC services, managing everything from design and procurement to construction, testing, and commissioning for projects ranging between 10 kW and multi-megawatt scale. Backed by optimized engineering, top-tier components, and a focus on long-term performance, our solar systems are designed for reliability and sustainability.",
  },
  {
    title: "Commercial Solar Installation",
    images: ["/about.png", "/about.png", "/about.png"],
    description:
      " Enhance your businesss energy efficiency with tailor-made solar setups for factories, offices, hospitals, and logistics centers. Offering net metering, zero-down payment options, and 24×7 monitoring, our solutions make solar adoption simple, profitable, and future-focused.",
  },
  {
    title: "Industrial Turnkey Solar Projects",
    images: ["/about.png", "/about.png"],
    description:
      " Fuel industrial growth with large-scale, fully integrated solar installations covering civil, mechanical, and electrical works. Whether grid-tied or off-grid, our projects deliver seamless execution, high performance, and long-term operational savings.",
  },
  {
    title: "Residential Solar",
    images: ["/about.png", "/about.png"],
    description:
      "Bring clean energy home with our smart rooftop solar systems, designed for efficiency, affordability, and ease of use. With flexible financing, remote tracking, and smart metering, we make switching to solar effortless and cost-effective.",
  },
  {
    title: "Infrastructure & Maintenance",
    images: ["/about.png", "/about.png"],
    description:
      " We handle every aspect of solar site infrastructure — from civil and electrical works to landscaping — along with annual maintenance, cleaning, and monitoring. Our team ensures your EPC and industrial projects run smoothly, safely, and efficiently all year round.",
  },
];

export default function Renewableslider() {
  const [activeCategory, setActiveCategory] = useState<Category>(categories[0]);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current) swiperRef.current.slideTo(0);
  }, [activeCategory]);

  return (
    <div className="px-auto py-5 mt-6 mb-5 bg-[#f0f1f5] md:mb-0">
      {/* Component-scoped styles for mobile arrow size & color */}
      <style jsx>{`
        /* Force white arrows + full opacity on mobile */
        ${categories
          .map(
            (_, idx) => `
         arrow icon
        .swiper-next-mobile-${idx}::after,
        .swiper-prev-mobile-${idx}::after {
          color: white;
          font-size: 19px;
          font-weight: 500;
          opacity: 1 !important;
        }

        /* arrow container */
        .swiper-next-mobile-${idx},
        .swiper-prev-mobile-${idx} {
          opacity: 1 !important;
        }

        /* also override disabled state completely */
        .swiper-next-mobile-${idx}.swiper-button-disabled,
        .swiper-prev-mobile-${idx}.swiper-button-disabled {
          opacity: 1 !important;
          pointer-events: auto; /* optional: keep clickable */
        }
        .swiper-next-mobile-${idx}.swiper-button-disabled::after,
        .swiper-prev-mobile-${idx}.swiper-button-disabled::after {
          opacity: 1 !important;
        }
      `
          )
          .join("\n")}
      `}</style>

      {/* Section Title */}
      <div className=" hidden text-center mb-12 md:hidden">
        <p className="text-sm uppercase tracking-widest text-gray-500">
          Our Expertise
        </p>
        <h2 className="text-xl font-bold text-[#000080] md:text-3xl">
          Shaping the Future of Multiple Sectors
        </h2>
        <div className="w-16 h-1 bg-[#000080] mx-auto mt-3" />
      </div>

      <div className="mx-auto my-8 px-4 md:px-28">
        {/* Mobile Slider */}
        <div className="lg:hidden space-y-2">
          {categories.map((cat, idx) => (
            <div key={idx} className=" shadow-md overflow-hidden relative">
              <Swiper
                navigation={{
                  nextEl: `.swiper-next-mobile-${idx}`,
                  prevEl: `.swiper-prev-mobile-${idx}`,
                }}
                modules={[Navigation]}
                spaceBetween={0}
                className="w-full h-45  overflow-hidden"
              >
                {cat.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <div
                      className="w-full h-64 bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${img})` }}
                    >
                      <div className="absolute inset-0  flex items-center justify-center">
                        <h3 className="text-lg font-bold text-white text-center px-2">
                          {cat.title}
                        </h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

                {/* Mobile arrows */}
                <div
                  className={`swiper-button-next swiper-next-mobile-${idx}`}
                />
                <div
                  className={`swiper-button-prev swiper-prev-mobile-${idx}`}
                />
              </Swiper>
            </div>
          ))}
        </div>

        {/* Desktop Slider */}
        <div className="hidden lg:flex w-full h-[500px] overflow-hidden">
          {/* Left Tabs */}
          <div className="w-1/4 bg-white flex flex-col border border-gray-300">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(cat)}
                className={`flex-1 text-lg p-8 text-left md:text-[19px] font-medium transition-all duration-300 transition-colors
                  ${
                    activeCategory.title === cat.title
                      ? "bg-white text-black shadow-inner"
                      : " text-gray-700 hover:bg-[#000080] hover:text-white"
                  }
                  ${
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
              modules={[Navigation, EffectFade]}
              effect="fade"
              className="w-full h-full"
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {activeCategory.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div
                    className="w-full h-full bg-cover bg-center relative transition-all duration-700"
                    style={{ backgroundImage: `url(${img})` }}
                  >
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-11/12">
                      <div className="p-8 text-white shadow-lg transition-all duration-700">
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

              {/* Desktop arrows */}
              <div className="swiper-button-next !text-white" />
              <div className="swiper-button-prev !text-white" />
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
