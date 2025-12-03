"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef, useEffect, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import type { NavigationOptions } from "swiper/types";

import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

export default function CoreBusiness() {
  const swiperRef = useRef<SwiperType | null>(null);

  const prevMobileRef = useRef<HTMLDivElement | null>(null);
  const nextMobileRef = useRef<HTMLDivElement | null>(null);
  const prevDesktopRef = useRef<HTMLDivElement | null>(null);
  const nextDesktopRef = useRef<HTMLDivElement | null>(null);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const coreBusinessData = [
    {
      title: "Industry Installation and Construction",
      image: "/home/industry installation.jpeg",
    },
    { title: "Engineering and R&D Services", image: "/engineer.jpg" },
    { title: " Solar Renewable Energy Solution ", image: "/renewable.jpg" },
    { title: "Real Estate Development", image: "/home/real estate.jpeg" },
  ];

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiper = swiperRef.current;
    const navigation = swiper.params.navigation as NavigationOptions;

    const isMobile = window.innerWidth < 768;
    navigation.prevEl = isMobile
      ? prevMobileRef.current
      : prevDesktopRef.current;
    navigation.nextEl = isMobile
      ? nextMobileRef.current
      : nextDesktopRef.current;

    swiper.navigation.destroy();
    swiper.navigation.init();
    swiper.navigation.update();

    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      navigation.prevEl = mobile
        ? prevMobileRef.current
        : prevDesktopRef.current;
      navigation.nextEl = mobile
        ? nextMobileRef.current
        : nextDesktopRef.current;

      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-4 md:py-16 bg-white md:px-15">
      <h2 className="text-2xl font-bold  text-center text-[#000080] mb-5 md:mb-12 md:text-3xl">
        Core Business
      </h2>

      <div className="mx-auto px-4 relative">
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
              <div className="flex flex-col items-center justify-start group cursor-pointer">
                {/* ✅ Image */}
                <div
                  className="relative w-full h-[200px] md:h-[180px] overflow-hidden rounded-lg"
                  onClick={() =>
                    setActiveIndex(activeIndex === idx ? null : idx)
                  }
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className={`object-cover transition-transform duration-500 ease-in-out ${
                      activeIndex === idx ? "scale-90" : "scale-100"
                    } group-hover:scale-90`}
                  />
                </div>

                {/* ✅ Title + Circular Arrow below image */}
                <div className="flex items-center justify-center gap-3 mt-3">
                  <h3 className="text-[15px] font-bold text-black text-center transition-colors duration-500 group-hover:text-[#000080]">
                    {item.title}
                  </h3>

                  <div className=" hidden md:block bg-[#000080] rounded-full p-1.5 flex items-center justify-center transition-colors duration-300 group-hover:bg-[#1a1aff] w-8 h-8">
                    {/* Default icon */}
                    <ArrowUpRight className="w-4 h-4 text-white group-hover:hidden" />
                    {/* Hover icon */}
                    <ChevronRight className="w-4 h-4 text-white hidden group-hover:block" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ Mobile arrows overlay */}
        {/* Mobile arrows overlay */}
        <div className="md:hidden">
          {/* Prev Arrow */}
          <div
            ref={prevMobileRef}
            className="absolute top-1/2 left-2 transform -translate-y-3/2 bg-[#000080] rounded-full p-2 flex items-center justify-center cursor-pointer shadow-lg z-20"
          >
            <ChevronLeft className="text-white w-5 h-5" />
          </div>

          {/* Next Arrow */}
          <div
            ref={nextMobileRef}
            className="absolute top-1/2 right-2 transform -translate-y-3/2 bg-[#000080] rounded-full p-2 flex items-center justify-center cursor-pointer shadow-lg z-20"
          >
            <ChevronRight className="text-white w-5 h-5" />
          </div>
        </div>

        {/* ✅ Desktop arrows below */}
        <div className="hidden md:flex justify-center items-center gap-8 mt-4">
          <div ref={prevDesktopRef} className="cursor-pointer">
            <Image src="/leftArrow.png" alt="Previous" width={40} height={40} />
          </div>
          <div ref={nextDesktopRef} className="cursor-pointer">
            <Image src="/rightArrow.png" alt="Next" width={40} height={40} />
          </div>
        </div>
      </div>
    </section>
  );
}
