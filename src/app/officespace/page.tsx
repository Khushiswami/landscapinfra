"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Industryheader from "yes/Components/Industryheader";
import Footer from "../../Components/Footer";
import ContactSection from "yes/Components/ContactSection";

const sectors = [
  {
    id: 1,
    title: "Integrated Design & Fit-outs",
    image: "/industry.jpg",
    url: "/manufacturing",
    description:
      "We handle all space planning, interior finishes, and seamless integration of all mechanical, electrical, and plumbing systems.",
  },
  {
    id: 2,
    title: "Smart Automation",
    image: "/industry.jpg",
    url: "/urban",
    description:
      "We install smart systems for lighting, HVAC, and access control to create efficient and automated offices.",
  },
  {
    id: 3,
    title: "Specialized Interiors",
    image: "/industry.jpg",
    url: "/advanced",
    description:
      "We provide modular partitions, acoustic designs, and energy-efficient solutions for a functional and comfortable workspace.",
  },
  {
    id: 4,
    title: "Sustainable Green Offices",
    image: "/industry.jpg",
    url: "/oil",
    description:
      "We develop green offices that are certified by LEED and IGBC, focusing on eco-friendly and healthy environments.",
  },
];

export default function Officespace() {
  const [current, setCurrent] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else {
        setItemsPerView(3);
      }
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  // Autoplay (only for desktop)
  useEffect(() => {
    if (itemsPerView > 1) {
      const timer = setInterval(() => {
        setCurrent((c) => (c + 1) % sectors.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [itemsPerView]);

  const prevSlide = () =>
    setCurrent((c) => (c - 1 + sectors.length) % sectors.length);
  const nextSlide = () => setCurrent((c) => (c + 1) % sectors.length);

  return (
    <>
      <Industryheader />

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

      {/* Image + Text Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            CREATING MODERN <br />
            OFFICE SPACES
          </h2>

          <div className="w-32 h-1 mt-3 mb-6 bg-[#000080]"></div>

          <p className="text-gray-700 leading-relaxed">
            Building your dream office shouldn&apos;t be a nightmare. At Landsking Infra, we turn the complex process of creating a modern workspace into a simple, stress-free journey. We design and build flexible offices that not only reflect your brand&apos;s unique identity but also boost your team&apos;s productivity and well-being. <br />
            We manage the entire process, from BIM-based visualization and 3D walkthroughs to the final handover. This &quot;design to handover under one roof&quot; approach ensures timely delivery and cost transparency. Our dedicated in-house team handles every detail, ensuring your project complies with all major codes like NBC and ASHRAE. By focusing on employee wellness and sustainable operations, we create inspiring spaces where your people can thrive.
          </p>

          <button className="mt-6 px-6 py-3 bg-[#000080] text-white font-medium rounded-lg shadow hover:bg-[#000060] transition">
            Read more
          </button>
        </div>

        <div className="flex justify-center">
          <div className="relative border-4 border-[#000080] rounded-xl overflow-hidden shadow-lg w-full max-w-md">
            <Image
              src="/images/solar-sample.jpg"
              alt="Office Sample"
              width={500}
              height={350}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Sectors Carousel */}
      <div className="w-full py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-blue-600">Sectors</h2>
            <button className="text-blue-600 font-semibold hover:underline">
              Explore Sectors →
            </button>
          </div>

          <div className="relative overflow-hidden">
            {itemsPerView > 1 ? (
              <motion.div
                className="flex transition-transform duration-700"
                style={{
                  transform: `translateX(-${current * (100 / itemsPerView)}%)`,
                }}
              >
                {sectors.map((sector, idx) => {
                  const centerIndex = (current + 1) % sectors.length;
                  const isCenter = idx === centerIndex;

                  return (
                    <div
                      key={sector.id}
                      className="px-2"
                      style={{ minWidth: `${100 / itemsPerView}%` }}
                    >
                      <div className="relative group overflow-hidden rounded-lg cursor-pointer">
                        <Image
                          src={sector.image}
                          alt={sector.title}
                          width={500}
                          height={240}
                          className={`w-full h-60 object-cover transition-opacity ${
                            isCenter ? "opacity-100" : "opacity-50"
                          }`}
                        />

                        <div className="absolute bottom-0 w-full bg-blue-600/90 text-white py-2 text-center text-sm font-semibold">
                          {sector.title}
                        </div>

                        {isCenter && (
                          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-center p-4 transition-opacity duration-300">
                            <h3 className="text-lg font-bold text-white mb-2">
                              {sector.title}
                            </h3>
                            <p className="text-sm text-gray-200 mb-4 line-clamp-3">
                              {sector.description}
                            </p>
                            <a
                              href={sector.url}
                              className="px-3 py-1 bg-white text-blue-600 rounded-sm font-semibold hover:bg-gray-200 transition"
                            >
                              Know More
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            ) : (
              <div className="flex justify-center">
                <div className="relative group overflow-hidden rounded-lg cursor-pointer w-full">
                  <Image
                    src={sectors[current].image}
                    alt={sectors[current].title}
                    width={500}
                    height={240}
                    className="w-full h-60 object-cover"
                  />

                  <div className="absolute bottom-0 w-full bg-blue-600/90 text-white py-2 text-center text-sm font-semibold">
                    {sectors[current].title}
                  </div>
                </div>
              </div>
            )}

            {/* Arrows */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {sectors.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full ${
                  current === i ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <ContactSection />
      <Footer />
    </>
  );
}
