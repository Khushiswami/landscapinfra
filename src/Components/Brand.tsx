
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { IoCallOutline } from "react-icons/io5";
import ClientP from "../Components/ClientP";

import "swiper/css";
import "swiper/css/autoplay";
import Client from "yes/app/client/page";

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
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: reverse,
      }}
      speed={4000}
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
      {/* Section with animated gradient background */}
      <section className="section-footer-cta">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-white px-4">
          {/* Left text */}
          <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left mb-4 md:mb-0">
            COMMITTED TO YOUR SATISFACTION
          </h2>

          {/* Right call info */}
          <div className="flex items-center gap-4  text-[#FFF] px-4 py-2 ">
            <div className=" text-black p-3 rounded-full bg-white ">
              <IoCallOutline size={26} className="shadow-lg rounded-xl" />
            </div>
            <div>
              <p className="text-md font-semibold">CALL US</p>
              <a
                href="tel:+918130444466"
                className="text-2xl font-bold "
              >
                +91 8130 444 466
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
     <ClientP/>

      {/* Local CSS (scoped, not global) */}
      <style jsx>{`
        .section-footer-cta {
            background-color: #272727; /* dark base */
          background-color: #272727; /* dark base */
    background-image: repeating-linear-gradient(
      -45deg,
      #ffffff,
      #ffffff 10px,
      rgb(230, 230, 230) 10px,
      rgb(230, 230, 230) 20px
    );
           background-blend-mode: overlay; /* mix with dark background */

          background-size: 200% 200%;
          -webkit-animation: barberpole 50s linear infinite;
          animation: barberpole 50s linear infinite;
          padding-top: 4rem;
          padding-bottom: 4rem;
        }

        @keyframes barberpole {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 100% 100%;
          }
        }
      `}</style>
    </>
  );
}

