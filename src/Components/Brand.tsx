"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { IoCallOutline } from "react-icons/io5";

import "swiper/css";
import "swiper/css/autoplay";

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
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={2}
      loop={true}
      autoplay={{
        delay: 0, // continuous scrolling
        disableOnInteraction: false,
        reverseDirection: reverse, // change direction for second row
      }}
      speed={4000} // slow, smooth slide
      breakpoints={{
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
      }}
    >
      {images.map((src, i) => (
        <SwiperSlide key={i}>
          <div className="bg-white border-2 border-gray-300 shadow-md rounded flex items-center justify-center p-4 h-24">
            <img
              src={src}
              alt={`Brand ${i + 1}`}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <>
      <div className="bg-[#272727]  bg-repeat py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-white">
          {/* Left text */}
          <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left mb-4 md:mb-0">
            COMMITTED TO YOUR SATISFACTION
          </h2>

          {/* Right call info */}
          <div className="flex items-center gap-4 bg-white text-[#000080] px-4 py-2 rounded-full shadow-lg">
            <div className="bg-[#000080] text-white p-3 rounded-full">
              <IoCallOutline />
            </div>
            <div>
              <p className="text-sm font-semibold">CALL US</p>
              <a
                href="tel:+918130444466"
                className="text-lg font-bold hover:underline"
              >
                +91 8130 444 466
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="py-10 bg-white">
        <h2 className="text-4xl font-bold text-center text-[#000080] mb-6">
          Meet Our Clients
        </h2>
        <div className="space-y-1">
          {renderRow(false)}
          {renderRow(true)}
        </div>
      </section>
    </>
  );
}
