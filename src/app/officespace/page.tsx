"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Industryheader from "yes/Components/Industryheader";
import Footer from "../../Components/Footer";
import Solarsector from "yes/Components/solarsector";
import ContactSection from "yes/Components/ContactSection";

export default function Officespace() {
  return (
    <>
      <Industryheader />
      <div className="w-full min-h-screen bg-white text-gray-800">
        {/* Hero Banner */}
        <div className="relative w-full h-[70vh] flex items-center justify-center bg-gray-900">
          <Image
            src="/images/banner.jpg"
            alt="Renewable Energy"
            fill
            className="object-cover opacity-60"
          />
          <div className="relative z-10 text-center text-white px-6">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold"
            >
              Office Space
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-4 text-lg md:text-xl"
            >
              Building a sustainable future with clean energy solutions
            </motion.p>
          </div>
        </div>
      </div>

      {/* Slider Section */}

      {/* Image + Text Section (moved below slider & responsive) */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            CREATING GREEN INFRASTRUCTURE <br /> COMPREHENSIVELY
          </h2>

          {/* Accent underline */}
          <div className="w-32 h-1 mt-3 mb-6 bg-[#000080]"></div>

          <p className="text-gray-700 leading-relaxed">
            We are one of the leading players in Solar PV installations with a
            track record of having built some of India’s largest solar plants
            thanks to our proven EPC capabilities to offer economically viable
            and technically superior solutions. Our{" "}
            <span className="font-semibold text-[#000080]">Renewables</span>{" "}
            business has over the years gained expertise in different solar
            technologies to design and execute solar power plants and our
            comprehensive range of design and construction services includes
            Grid Connected PV (Utility Scale), Concentrating Solar Power (CSP)
            and microgrids and mega rooftops.
          </p>

          <button className="mt-6 px-6 py-3 bg-[#000080] text-white font-medium rounded-lg shadow hover:bg-[#000060] transition">
            Read more
          </button>
        </div>

        {/* Image Content */}
        <div className="flex justify-center">
          <div className="relative border-4 border-[#000080] rounded-xl overflow-hidden shadow-lg w-full max-w-md">
            <Image
              src="/images/solar-sample.jpg"
              alt="Solar Plant"
              width={500}
              height={350}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </section>
      <Solarsector />
<ContactSection/>
      <Footer />
    </>
  );
}
