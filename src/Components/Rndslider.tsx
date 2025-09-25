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
    title: "Infrastructure Sector",
    images: ["/industry.jpg", "/about.png", "/about.png"],
    description:
      "LandsKingInfra Pvt.Ltd offers durable, custom-designed Pre-Engineered Buildings (PEBs) to protect and enhance your organization. We design, manufacture, and build infrastructure solutions that support long-term business growth and deliver strong returns on investment.",
  },
  {
    title: "Sports & Leisure",
    images: ["/about.png", "/about.png", "/about.png"],
    description:
      "We design and deliver high-quality sports complexes, stadiums, and recreational facilities. Our prefabricated solutions ensure modern aesthetics, fast construction, and durability, creating spaces that encourage active and healthy lifestyles.",
  },
  {
    title: "Institutional Sector",
    images: ["/about.png", "/about.png"],
    description:
      "We specialize in large institutional buildings such as schools, hospitals, and offices. Prefabrication is increasingly recognized as a reliable alternative to traditional construction, offering faster delivery, cost efficiency, and enhanced sustainability.",
  },
  {
    title: "Special Buildings",
    images: ["/about.png", "/about.png"],
    description:
      "From landmark structures to custom-designed special-purpose buildings, our solutions combine modern engineering with sustainability. We deliver unique projects that stand out for their design, durability, and environmental responsibility.",
  },
  {
    title: "Industrial Buildings Construction",
    images: ["/about.png", "/about.png"],
    description:
      "We deliver robust industrial buildings and factories designed for efficiency and long-term performance. With advanced prefabrication technology and landscaping integration, our solutions ensure operational excellence and sustainable growth.",
  },
];

export default function Rndslider() {
  const [activeCategory, setActiveCategory] = useState<Category>(categories[0]);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current) swiperRef.current.slideTo(0);
  }, [activeCategory]);

  return (
    <div className="px-auto py-8 mt-6 bg-[#f0f1f5]">
      {/* Component-scoped styles for mobile arrow size & color */}
      <style jsx>{`
        ${categories
          .map(
            (_, idx) => `
          .swiper-next-mobile-${idx}::after,
          .swiper-prev-mobile-${idx}::after {
            color: white;       /* White arrows */
            font-size: 17px;    /* Smaller size */
            font-weight: 500;   /* Medium */
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

      <div className="mx-auto my-8 px-4 md:px-25">
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
                className="w-full h-64  overflow-hidden"
              >
                {cat.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <div
                      className="w-full h-54 bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${img})` }}
                    >
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
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
                className={`flex-1 p-8 text-left text-xl font-medium transition-all duration-300 transition-colors
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
