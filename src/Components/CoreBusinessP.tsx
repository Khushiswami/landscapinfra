"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef, useEffect, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import type { NavigationOptions } from "swiper/types";

import "swiper/css";
import "swiper/css/navigation";

export default function CoreBusiness() {
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const coreBusinessData = [
    {
      title: "Industry Installation and Construction",
      image: "/industry.jpg",
      description:
        "Quality Construction Project Delivery on time with customer Satisfaction",
    },
    {
      title: "Engineering and R&D services",
      image: "/engineer.jpg",
      description:
        "Committed to advancing innovation, fairness, equity, measurement quality in assessment, learning materials.",
    },
    {
      title: "Renewable Energy Solution Provider",
      image: "/renewable.jpg",
      description:
        "Committed to providing affordable, clean and abundant power with Renewable Energy Solutions.",
    },
    {
      title: "Pre Engineered Building",
      image: "/pebone.jpeg",
      description:
        "Committed to providing affordable, clean and abundant power with Renewable Energy Solutions.",
    },
    {
      title: "Real Estate Development",
      image: "/realstate.png",
      description:
        "Landsking Infra's Real Estate Division specializes in unlocking high-value industrial and premium real estate deals across India's emerging growth corridors.",
    },
  ];

  useEffect(() => {
    if (
      swiperRef.current &&
      prevRef.current &&
      nextRef.current &&
      swiperRef.current.params.navigation &&
      typeof swiperRef.current.params.navigation !== "boolean"
    ) {
      const navigation = swiperRef.current.params
        .navigation as NavigationOptions;

      navigation.prevEl = prevRef.current;
      navigation.nextEl = nextRef.current;

      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className="py-4 md:py-16 bg-white md:px-10">
      <h2 className="text-2xl font-bold text-center text-[#000080] mb-2 md:mb-12 md:text-4xl">
        Core Business
      </h2>

      <div className="mx-auto px-6 relative ">
        <Swiper
          modules={[Navigation]}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          navigation={false}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {coreBusinessData.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center justify-start">
                {/* Heading */}
                <h3
                  className="relative mb-4 text-[16px] font-[600px] text-black text-center w-full min-h-[48px]
                    transition-colors duration-500 group-hover:text-[#000080] pb-2"
                >
                  {item.title}
                  <span className="absolute left-0 right-0 -bottom-1 mx-auto h-[2px] w-0 bg-[#8080FF] transition-all duration-500 group-hover:w-full"></span>
                </h3>

                {/* Image */}
                <div
                  className="relative w-full h-44 overflow-hidden cursor-pointer group"
                  onClick={() =>
                    setActiveIndex(activeIndex === idx ? null : idx)
                  }
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className={`object-cover transition-transform duration-500 ease-in-out
                      ${
                        activeIndex === idx ? "scale-90" : "scale-100"
                      } group-hover:scale-90`}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation arrows */}
        <div className="flex justify-center items-center gap-8 mt-6">
          <div ref={prevRef} className="cursor-pointer !block">
            <Image
              src="/leftArrow.png"
              alt="Previous"
              width={40}
              height={40}
              className="hover:scale-110 transition-transform duration-200"
            />
          </div>
          <div ref={nextRef} className="cursor-pointer !block">
            <Image
              src="/rightArrow.png"
              alt="Next"
              width={40}
              height={40}
              className="hover:scale-110 transition-transform duration-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
