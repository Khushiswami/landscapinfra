
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Servicesone() {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const router = useRouter();
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Pre Engineered Buildings",
      desc: "Customized steel structures designed for quick assembly and durability, ideal for warehouses, factories, and commercial spaces.",
      image: "expertise/firstexpertise.png",
            link: "/menupage",

    },
    {
      title: "Prefabricated Structures",
      desc: "Modular buildings constructed off-site for applications like site offices, classrooms, and healthcare facilities.",
      image: "expertise/second.png",
            link: "/modular",

    },
    {
      title: "Light Gauge Steel Framing",
      desc: "Lightweight steel structures suitable for residential and commercial buildings, offering design flexibility and rapid construction.",
      image: "expertise/third.png",
            link: "/lightGaugeSteelFraming",

    },
    {
      title: "Sandwich Panels",
      desc: "Insulated panels used for walls and roofs, providing thermal efficiency and structural strength.",
      image: "expertise/fourth.png",
            link: "/sandwichpanels",

    },
    {
      title: "Standard Modular Solutions",
      desc: "Ready-to-use modular units like porta cabins and liftable cabins for immediate deployment.",
      image: "expertise/fifth.png",
            link: "/standardmodular",

    },
  ];
const handleArrowClick = (direction: "prev" | "next") => {
    // Navigate to a new URL (adjust to your desired path)
    const url = direction === "prev" ? "/prev-slide" : "/next-slide";
    window.location.href = url;
  };
  const handleRedirect = (type: "prev" | "next") => {
    if (type === "prev") {
      router.push("/previous-slide"); // Replace with actual route
    } else {
      router.push("/next-slide"); // Replace with actual route
    }
  };
  return (
   <section className="py-12 px-10 bg-white mx-0 md:mx-12 lg:mx-20">
      {/* Heading + Controls */}
      <div className="flex items-center justify-between max-w-7xl mx-auto mb-8">
        <h2 className="text-xl md:text-3xl font-bold text-[#061b49]">
          Explore Our Comprehensive Prefabricated Building Solutions
        </h2>

        <div className="flex items-center gap-2">
          <button
            ref={prevRef}
            className="bg-[#1F4B9A] text-white p-2 rounded-full hover:bg-[#163b78] transition-transform duration-200 active:scale-90"
            onClick={() => handleRedirect("prev")}
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            ref={nextRef}
            className="bg-[#1F4B9A] text-white p-2 rounded-full hover:bg-[#163b78] transition-transform duration-200 active:scale-90"
            onClick={() => handleRedirect("next")}
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Swiper Slider */}
      <div className="max-w-7xl mt-10 mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
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
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
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
                className={`relative bg-white rounded-xl overflow-hidden shadow-md cursor-pointer`}
                onMouseEnter={() => setHoverIndex(i)}
                onMouseLeave={() => setHoverIndex(null)}
                onClick={() => service.link && router.push(service.link)}
              >
                {/* Image */}
                <div className="w-full h-70 md:h-80 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title Bar */}
                <div className="bg-[#1F4B9A] flex items-center justify-between px-4 py-3 relative z-10">
                  <p className="text-white font-semibold text-sm line-clamp-1">
                    {service.title}
                  </p>
                  <div className="bg-white rounded-full p-1">
                    <ArrowUpRight className="w-4 h-4 text-[#1F4B9A]" />
                  </div>
                </div>

                {/* Hover Overlay */}
                <AnimatePresence>
                  {hoverIndex === i && (
                    <motion.div
                      className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-20"
                      style={{
                        background:
                          "linear-gradient(0deg, rgba(33, 71, 95, 0.8) 0%, rgba(22, 46, 68, 0.8) 100%)",
                      }}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 50 }}
                      transition={{ duration: 0.4 }}
                    >
                      <h3 className="text-white text-lg font-semibold">
                        {service.title}
                      </h3>
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