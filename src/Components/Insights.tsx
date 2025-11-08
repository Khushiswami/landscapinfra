"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef, useEffect } from "react";
import type { Swiper as SwiperType } from "swiper";
import type { NavigationOptions } from "swiper/types";

import "swiper/css";
import "swiper/css/navigation";

const cards = [
  {
    id: 1,
    tag: "Whitepaper",
    title: "Transforming Infrastructure Through Innovation",
    description:
      "Landsking Infra explores how advanced engineering practices and sustainable design principles are redefining the modern infrastructure landscape—bridging technology with long-term societal value.",
    image: "/news2.jpeg",
  },
  {
    id: 2,
    tag: "Whitepaper",
    title: "The Future of Smart Cities: A Landsking Infra Perspective",
    description:
      "From intelligent transport systems to green construction, Landsking Infra delves into the role of digital transformation in building connected, efficient, and resilient urban ecosystems.",
    image: "/engineer.jpg",
  },
  {
    id: 3,
    tag: "Blog",
    title: "Engineering Excellence: Building Tomorrow’s Infrastructure Today",
    description:
      "At Landsking Infra, we combine data-driven design, automation, and sustainable materials to deliver infrastructure solutions that empower communities and drive progress.",
    image: "/new4.jpg",
  },
  {
    id: 4,
    tag: "Case Study",
    title:
      "Reimagining Urban Infrastructure: Landsking Infra’s Landmark Projects",
    description:
      "An in-depth look at how Landsking Infra is transforming skylines through innovative construction methods, smart resource management, and client-first collaboration.",
    image: "/industry.jpg",
  },
  {
    id: 5,
    tag: "Insight Report",
    title: "Sustainability and Infrastructure: The Landsking Infra Commitment",
    description:
      "This report highlights how Landsking Infra integrates sustainability into every phase of project development—ensuring environmental responsibility and operational efficiency.",
    image: "/new2.png",
  },
  {
    id: 6,
    tag: "Whitepaper",
    title:
      "Engineering the Future: Landsking Infra’s Vision for a Connected World",
    description:
      "Discover how Landsking Infra is leveraging innovation, technology, and strategic partnerships to redefine the possibilities of modern infrastructure on a global scale.",
    image: "/news2.jpeg",
  },
];

export default function Insights() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  // update navigation refs after mount
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
    <div className="relative px-6 lg:px-25 pb-6  md:py-10 md:px-15">
      {/* Heading */}
      <h1 className="text-center text-3xl font-bold my-10 text-[#000080]">
        Our Latest Insights
      </h1>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        loop={false}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="flex-shrink-0 bg-[#f3f6f4] relative w-full  rounded-md overflow-hidden cursor-pointer group">
              {/* Mobile version */}
              <div className="block sm:hidden p-4 bg-[#f3f6f4] rounded-md mb-6">
                <div className="inline-block px-3 py-1 rounded-full text-md bg-[#000080] text-[#fff] mb-2">
                  {card.tag}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-widest">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 tracking-widest mb-4">
                  {card.description}
                </p>
                <button className="mb-4 bg-[#000080] text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-800 transition">
                  Know More
                </button>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={500}
                  height={200}
                  className="w-full h-48 object-cover rounded-sm"
                />
              </div>

              {/* Desktop version with hover */}
              <div className="hidden sm:block h-[560px]">
                <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-md bg-[#000080] text-[#fff]">
                  {card.tag}
                </div>

                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0 rounded-md"
                />

                <div className="absolute bottom-4 left-4 right-4 text-white text-lg font-bold transition-opacity duration-500 group-hover:opacity-0 tracking-widest">
                  {card.title}
                </div>

                {/* Hover content */}
                <div className="absolute inset-0 bg-[#f8f8f8] flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-left rounded-md">
                  <div>
                    <h3 className="text-xl font-bold mt-17 mb-4 text-[#112868] ">
                      {card.title}
                    </h3>
                    <p className="text-[14px] text-black mb-6 ">
                      {card.description}
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-end">
                      <button
                        className="bg-[#000080] text-sm text-[#fff] px-4 py-2 rounded-lg font-medium 
                        hover:bg-[#] hover:text-[#000080] 
                        transition"
                      >
                        Know More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation arrows */}
      <div className="flex justify-end gap-3 md:mt-6">
        <button
          ref={prevRef}
          className="bg-white font-light border border-[#000080] text-[#000080] p-2 rounded-[3px] hover:bg-[#8080FF] "
        >
          <FaArrowLeft size={16} className="font-light" />
        </button>
        <button
          ref={nextRef}
          className="bg-white border border-[#000080] text-[#000080] p-2 rounded-[3px] hover:bg-[#8080FF]"
        >
          <FaArrowRight size={16} className="font-light" />
        </button>
      </div>
    </div>
  );
}
