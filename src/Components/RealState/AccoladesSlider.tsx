"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

export default function AccoladesSlider() {
  const awards = [
    {
      title: "Commercial High-Rise Development Award 2023-24",
      description:
        "Brigade Group won for their project, Brigade Tech Gardens, at The Asia Pacific Property Awards 23-24.",
    },
    {
      title: "Client One Achievement",
      description: "We delivered innovative digital solutions for Client One.",
    },
    {
      title: "Client Two Excellence",
      description: "Specialized in web development and app design services.",
    },
    {
      title: "Client Three Recognition",
      description: "Provided branding, strategy, and technology consulting.",
    },
    {
      title: "Client Four Award",
      description: "Implemented scalable software and cloud infrastructure.",
    },
    {
      title: "Client Five Innovation",
      description: "Delivered seamless e-commerce and retail solutions.",
    },
  ];

  return (
    <section className="bg-[#efeee4] py-16 relative">
      <h2 className="text-3xl md:text-6xl font-bold text-center text-[#dddbc3] mb-12">
        Our Accolades
      </h2>

      <div className="relative pb-12"> 
        <Swiper
          modules={[Autoplay, FreeMode, Pagination]}
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          freeMode={{ enabled: false }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          speed={1000}
          breakpoints={{
            320: { slidesPerView: 1.2, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 3, spaceBetween: 15 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
          }}
          className="px-4"
        >
          {awards.map((award, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white border border-gray-100 p-6 h-[320px] md:h-[350px] flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col items-start mb-4">
                  <div className="rounded-full p-2 mb-4 w-16 h-16 flex items-center justify-center">
                    <img
                      src="/realstate/accolades.svg"
                      alt="Award Icon"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-md md:text-lg font-semibold text-[#2c2c2c]">
                    {award.title}
                  </h3>
                  <p className="text-sm text-[#4d4d4d] leading-relaxed mt-4">
                    {award.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx global>{`
          .swiper-pagination {
            bottom: -5px !important; /* dots bilkul niche */
          }
        `}</style>
      </div>
    </section>
  );
}
