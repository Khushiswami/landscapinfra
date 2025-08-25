
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Servicesone() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Pre Engineered Buildings",
      desc: "Customized steel structures designed for quick assembly and durability, ideal for warehouses, factories, and commercial spaces.",
      image: "expertise/firstexpertise.png",
    },
    {
      title: "Prefabricated Structures",
      desc: "Modular buildings constructed off-site for applications like site offices, classrooms, and healthcare facilities.",
      image: "expertise/second.png",
    },
    {
      title: "Light Gauge Steel Framing",
      desc: "Lightweight steel structures suitable for residential and commercial buildings, offering design flexibility and rapid construction.",
      image: "expertise/third.png",
    },
    {
      title: "Sandwich Panels",
      desc: "Insulated panels used for walls and roofs, providing thermal efficiency and structural strength.",
      image: "expertise/fourth.png",
    },
    {
      title: "Standard Modular Solutions",
      desc: "Ready-to-use modular units like porta cabins and liftable cabins for immediate deployment.",
      image: "expertise/fifth.png",
    },
  ];

  return (
    <section className="py-12 px-6 bg-white">
      <div className="flex items-center justify-between max-w-7xl mx-auto mb-8">
        <h2 className="text-xl md:text-3xl font-bold text-[#061b49]">
          Explore Our Comprehensive Prefabricated Building Solutions{" "}
        </h2>

        {/* Custom navigation buttons */}
        <div className="flex items-center gap-2">
          <button
            ref={prevRef}
            className="bg-[#1F4B9A] text-white p-2 rounded-full hover:bg-[#163b78] transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            ref={nextRef}
            className="bg-[#1F4B9A] text-white p-2 rounded-full hover:bg-[#163b78] transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mt-10 mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper: SwiperType) => {
            const nav = swiper.params.navigation;
            if (nav && typeof nav !== "boolean") {
              nav.prevEl = prevRef.current;
              nav.nextEl = nextRef.current;
            }
          }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
        >
          {services.map((service, i) => (
            <SwiperSlide key={i}>
              <motion.div
                className="relative bg-white rounded-xl overflow-hidden shadow-md cursor-pointer"
                onMouseEnter={() => setHoverIndex(i)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                {/* Image */}
                <div className="w-full h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bottom strip (default view) */}
                <div className="bg-[#1F4B9A] flex items-center justify-between px-4 py-3 relative z-10">
                  <p className="text-white font-semibold text-sm">
                    {service.title}
                  </p>
                  <div className="bg-white rounded-full p-1">
                    <ArrowUpRight className="w-4 h-4 text-[#1F4B9A]" />
                  </div>
                </div>

                {/* Hover overlay */}
                <AnimatePresence>
                  {hoverIndex === i && (
                    <motion.div
                      className="absolute inset-0 bg-[#000080]/35 flex flex-col items-center justify-center text-center p-4 z-20"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 50 }}
                      transition={{ duration: 0.4 }}
                    >
                      <h3 className="text-white text-lg font-semibold">
                        {service.title}
                      </h3>
                      <p className="text-white text-sm mt-2">{service.desc}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}