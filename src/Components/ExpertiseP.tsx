// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import type { Swiper as SwiperType } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
// import { useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useRouter } from "next/navigation";

// export default function ExpertiseP() {
//   const prevRef = useRef<HTMLButtonElement>(null);
//   const nextRef = useRef<HTMLButtonElement>(null);
//   const router = useRouter();

//   // state for hover & click
//   const [hoverIndex, setHoverIndex] = useState<number | null>(null);
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   const [swiper, setSwiper] = useState<SwiperType | null>(null); // Store Swiper instance

//   const services = [
//     {
//       title: "Architecture & Design services",
//       image: "/expertiseimages/Architecture & Design services.png",
//       link: "/architecture",
//     },
//     {
//       title: "Cold Storage and warehouse",
//       image: "/expertiseimages/Cold Storage and warehouse.jpg",
//       link: "/coldstorageandwarehouse",
//     },
//     {
//       title: "Solar Plant Installation",
//       image: "/expertiseimages/Solar Plant Installation.jpg",
//       link: "/solar",
//     },
//     { title: "HVAC", image: "/expertiseimages/HVAC.jpg", link: "/hvac" },
//     {
//       title: "Fire and Safety",
//       image: "/industry.jpg",
//       link: "/fire-saftey",
//     },
//     {
//       title: "STRUCTURAL ENGINEERING SERVICES",
//       image: "/expertiseimages/STRUCTURAL ENGINEERING SERVICES.jpg",
//       link: "/architecture",
//     },
//     {
//       title: "Infrastructure, Energy & Materials Civil Services",
//       image:
//         "/expertiseimages/Infrastructure, Energy & Materials Civil Services.jpg",
//       link: "/energyandnaturalresource",
//     },
//     {
//       title: "Heavy Engineering",
//       image: "/expertiseimages/Heavy Engineering.jpg",
//       link: "/heavyengineering",
//     },
//     {
//       title: "Mining Metals",
//       image: "/expertiseimages/Mining Metals.jpg",
//       link: "/miningandmetals",
//     },
//     {
//       title: "Factories Installation",
//       image: "/expertiseimages/Factories Installation.jpg",
//       link: "/factoriesinstallation",
//     },
//     {
//       title: "Green buildings",
//       image: "/expertiseimages/Green buildings.png",
//       link: "/greenbuilding",
//     },
//     {
//       title: "PEB Erection and fabrication",
//       image: "/expertiseimages/PEB Erection and fabrication.jpg",
//       link: "/fabrication",
//     },
//     {
//       title: "Advisory & Auditing",
//       image: "/expertiseimages/Advisory & Auditing.jpg",
//       link: "/advisory-auditing",
//     },
//     {
//       title: "T&D Engineering & Simulation",
//       image: "/sectorimg/ste.webp",
//       link: "/engineeringsimulation",
//     },
//   ];

//   return (
//     <section className="py-12 px-8 bg-white mx-0 md:mx-1 lg:mx-1 md:px-13">
//       <div className="flex items-center justify-between mx-auto mb-8">
//         <h2 className="text-xl md:text-3xl font-bold text-[#061b49] text-center">
//           Our Expertise
//         </h2>
//         <div className="flex items-center gap-2">
//           {/* Prev Button */}
//           <button
//             ref={prevRef}
//             className="bg-[#1F4B9A] text-white p-2 rounded-full hover:bg-[#163b78] transition-transform duration-200 active:scale-90"
//             onClick={() => swiper?.slidePrev()}
//             aria-label="Previous Slide"
//           >
//             <ChevronLeft className="w-5 h-5" />
//           </button>
//           {/* Next Button */}
//           <button
//             ref={nextRef}
//             className="bg-[#1F4B9A] text-white p-2 rounded-full hover:bg-[#163b78] transition-transform duration-200 active:scale-90"
//             onClick={() => swiper?.slideNext()}
//             aria-label="Next Slide"
//           >
//             <ChevronRight className="w-5 h-5" />
//           </button>
//         </div>
//       </div>

//       {/* Swiper Slider */}
//       <div className=" mt-10 mx-auto">
//         <Swiper
//           modules={[Navigation, Autoplay]}
//           onSwiper={setSwiper} // Store the Swiper instance
//           navigation={{
//             prevEl: prevRef.current,
//             nextEl: nextRef.current,
//           }}
//           onBeforeInit={(swiper: SwiperType) => {
//             const nav = swiper.params.navigation;
//             if (nav && typeof nav !== "boolean") {
//               nav.prevEl = prevRef.current;
//               nav.nextEl = nextRef.current;
//             }
//           }}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           spaceBetween={20}
//           slidesPerView={1}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//             1280: { slidesPerView: 3 },
//           }}
//         >
//           {services.map((service, i) => (
//             <SwiperSlide key={i}>
//               <motion.div
//                 className={`relative bg-white rounded-xl overflow-hidden shadow-md cursor-pointer`}
//                 onMouseEnter={() => setHoverIndex(i)}
//                 onMouseLeave={() => setHoverIndex(null)}
//                 onClick={() => {
//                   setActiveIndex(i);
//                   service.link && router.push(service.link);
//                 }}
//               >
//                 {/* Image */}
//                 <div className="w-full h-70 md:h-80 overflow-hidden">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Title Bar */}
//                 <div className="bg-[#1F4B9A] flex items-center justify-between px-4 py-3 relative z-10">
//                   <p className="text-white font-semibold text-sm line-clamp-1">
//                     {service.title}
//                   </p>
//                   <div className="bg-white rounded-full p-1">
//                     <motion.div
//                       key={
//                         hoverIndex === i || activeIndex === i
//                           ? "chevron"
//                           : "arrow"
//                       }
//                       initial={{ opacity: 0, rotate: -90 }}
//                       animate={{ opacity: 1, rotate: 0 }}
//                       exit={{ opacity: 0, rotate: 90 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       {hoverIndex === i || activeIndex === i ? (
//                         <ChevronRight className="w-4 h-4 text-[#1F4B9A]" />
//                       ) : (
//                         <ArrowUpRight className="w-4 h-4 text-[#1F4B9A]" />
//                       )}
//                     </motion.div>
//                   </div>
//                 </div>

//                 {/* Hover Overlay */}
//                 <AnimatePresence>
//                   {hoverIndex === i && (
//                     <motion.div
//                       className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-20"
//                       style={{
//                         background:
//                           "linear-gradient(0deg, rgba(33, 71, 95, 0.8) 0%, rgba(22, 46, 68, 0.8) 100%)",
//                       }}
//                       initial={{ opacity: 0, y: 50 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: 50 }}
//                       transition={{ duration: 0.4 }}
//                     >
//                       <h3 className="text-white text-lg font-semibold">
//                         {service.title}
//                       </h3>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ExpertiseP() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const router = useRouter();

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Architecture & Design services",
      image: "/expertiseimages/Architecture & Design services.png",
      link: "/architecture",
    },
    {
      title: "Cold Storage and warehouse",
      image: "/expertiseimages/Cold Storage and warehouse.jpg",
      link: "/coldstorageandwarehouse",
    },
    {
      title: "Solar Plant Installation",
      image: "/expertiseimages/Solar Plant Installation.jpg",
      link: "/solar",
    },
    { title: "HVAC", image: "/expertiseimages/HVAC.jpg", link: "/hvac" },
    {
      title: "Fire and Safety",
      image: "/industry.jpg",
      link: "/fire-saftey",
    },
    {
      title: "STRUCTURAL ENGINEERING SERVICES",
      image: "/expertiseimages/STRUCTURAL ENGINEERING SERVICES.jpg",
      link: "/architecture",
    },
    {
      title: "Infrastructure, Energy & Materials Civil Services",
      image:
        "/expertiseimages/Infrastructure, Energy & Materials Civil Services.jpg",
      link: "/energyandnaturalresource",
    },
    {
      title: "Heavy Engineering",
      image: "/expertiseimages/Heavy Engineering.jpg",
      link: "/heavyengineering",
    },
    {
      title: "Mining Metals",
      image: "/expertiseimages/Mining Metals.jpg",
      link: "/miningandmetals",
    },
    {
      title: "Factories Installation",
      image: "/expertiseimages/Factories Installation.jpg",
      link: "/factoriesinstallation",
    },
    {
      title: "Green buildings",
      image: "/expertiseimages/Green buildings.png",
      link: "/greenbuilding",
    },
    {
      title: "PEB Erection and fabrication",
      image: "/expertiseimages/PEB Erection and fabrication.jpg",
      link: "/fabrication",
    },
    {
      title: "Advisory & Auditing",
      image: "/expertiseimages/Advisory & Auditing.jpg",
      link: "/advisory-auditing",
    },
    {
      title: "T&D Engineering & Simulation",
      image: "/sectorimg/ste.webp",
      link: "/engineeringsimulation",
    },
  ];

  // Ensure Swiper navigation updates after component mounts
  useEffect(() => {
    if (swiper) {
      // Navigation
      if (
        swiper.params.navigation &&
        typeof swiper.params.navigation !== "boolean"
      ) {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }

      // Pagination
      if (
        swiper.params.pagination &&
        typeof swiper.params.pagination !== "boolean"
      ) {
        swiper.params.pagination.el = paginationRef.current;
        swiper.pagination.init();
        swiper.pagination.update();
      }
    }
  }, [swiper]);

  return (
    <section className="py-12 px-6 bg-white mx-0 md:mx-1 lg:mx-1 md:px-13">
      {/* Heading + Arrows */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mx-auto mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#061b49] text-center">
          Our Expertise
        </h2>
        <div className="flex items-center justify-center gap-2 mt-4 md:mt-0">
          <button
            ref={prevRef}
            className="bg-[#1F4B9A] text-white p-2 rounded-full hover:bg-[#163b78] transition-transform duration-200 active:scale-90"
            onClick={() => swiper?.slidePrev()}
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            ref={nextRef}
            className="bg-[#1F4B9A] text-white p-2 rounded-full hover:bg-[#163b78] transition-transform duration-200 active:scale-90"
            onClick={() => swiper?.slideNext()}
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Swiper Slider */}
      <div className="mt-10 mx-auto">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          onSwiper={setSwiper}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          pagination={{
            el: paginationRef.current,
            clickable: true,
            dynamicBullets: true,
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
                className="relative bg-white rounded-xl overflow-hidden shadow-md cursor-pointer"
                onMouseEnter={() => setHoverIndex(i)}
                onMouseLeave={() => setHoverIndex(null)}
                onClick={() => {
                  setActiveIndex(i);
                  service.link && router.push(service.link);
                }}
              >
                <div className="w-full h-90 md:h-80 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="bg-[#1F4B9A] flex items-center justify-between px-4 py-3 relative z-10">
                  <p className="text-white font-semibold text-sm line-clamp-1">
                    {service.title}
                  </p>
                  <div className="bg-white rounded-full p-1">
                    <motion.div
                      key={
                        hoverIndex === i || activeIndex === i
                          ? "chevron"
                          : "arrow"
                      }
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      {hoverIndex === i || activeIndex === i ? (
                        <ChevronRight className="w-4 h-4 text-[#1F4B9A]" />
                      ) : (
                        <ArrowUpRight className="w-4 h-4 text-[#1F4B9A]" />
                      )}
                    </motion.div>
                  </div>
                </div>

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

        {/* Pagination dots outside */}
        <div ref={paginationRef} className="flex justify-center mt-4"></div>
      </div>

      {/* Scoped styles for pagination bullets */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: grey;
          opacity: 0.6;
          width: 10px;
          height: 10px;
          margin: 0 4px;
        }
        .swiper-pagination-bullet-active {
          background: #000080;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
