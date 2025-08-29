"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

export default function Brand() {
  const images: string[] = [
    "/clientlogo1.png",
    "/client2.jpeg",
    "/client3.jpeg",
    "/client4.jpeg",
    "/client5.jpeg",
    "/client6.jpeg",
    "/client7.jpeg",
    "/client8.jpeg",
    "/client9.jpeg",
    "/client10.jpeg",
    "/client11.jpeg",
  ];

  const renderRow = (reverse: boolean) => (
    <Swiper
      modules={[Autoplay, FreeMode]}
      spaceBetween={20}
      slidesPerView={2}
      loop={true}
      freeMode={{
        enabled: true,
        momentum: false, // stops sudden pauses
      }}
      autoplay={{
        delay: 0, // no delay (continuous scroll)
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        reverseDirection: reverse,
      }}
      speed={6000} // higher speed = smoother continuous scroll
      allowTouchMove={false} // disable manual swipe for smooth autoplay
      breakpoints={{
        320: { slidesPerView: 2, spaceBetween: 10 },
        640: { slidesPerView: 3, spaceBetween: 15 },
        768: { slidesPerView: 4, spaceBetween: 15 },
        1024: { slidesPerView: 6, spaceBetween: 20 },
      }}
    >
      {images.map((src, i) => (
        <SwiperSlide key={i}>
          <div className="bg-white border border-gray-200 shadow-sm rounded-lg flex items-center justify-center h-28 w-full p-2">
            <img
              src={src}
              alt={`Brand ${i + 1}`}
              className="h-18 w-full object-contain"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <section className="py-12 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#000080] mb-8">
        Meet Our Clients
      </h2>
      <div className="space-y-4">
        {renderRow(false)}
        {renderRow(true)}
      </div>
    </section>
  );
}
