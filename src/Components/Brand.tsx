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
  return (
    <>
      <section className="section-footer-cta mb-7 pt-10 pb-10 md:pt-20 md:pb-20 md:mb-0 md:px-18">
        <div className=" mx-auto flex flex-col md:flex-row items-left justify-between text-white px-4 md:items-center ">
          {/* Left text */}
          <h2 className="text-2xl md:text-4xl font-bold text-left md:text-center mb-4 md:mb-0">
            COMMITTED TO YOUR SATISFACTION
          </h2>

          {/* Right call info */}
          <div className="flex items-left gap-4  text-[#FFF] px-2 py-2 md:items-center md:px-4  ">
            <div className=" text-black p-3 rounded-full bg-white ">
              <IoCallOutline size={26} className="shadow-lg rounded-xl" />
            </div>
            <div>
              <p className="text-sm font-semibold md:text-md">CALL US</p>
              <a
                href="tel:+918130444466"
                className="text-xl  font-bold md:text-2xl"
              >
                +91 8130 444 466
              </a>
            </div>
          </div>
        </div>
      </section>

      <ClientP />
    </>
  );
}
