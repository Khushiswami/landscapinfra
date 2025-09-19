
// "use client";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { ArrowLeft, ArrowRight } from "lucide-react";

// const sectors = [
//   {
//     id: 1,
//     title: "Buildings and Infrastructure",
//     image: "/industry.jpg",
//     url: "/manufacturing",
//     description:
//       "We deliver cutting-edge buildings and infrastructure solutions. From design to execution, we ensure safety, sustainability, and efficiency. Our projects redefine skylines and enable modern living.",
//   },
//   {
//     id: 2,
//     title: "Warehouses",
//     image: "/industry.jpg",
//     url: "/urban",
//     description:
//       "We construct modern warehouses optimized for logistics. Our designs maximize space, reduce costs, and improve supply chain efficiency. Durable structures for today and tomorrow’s needs.",
//   },
//   {
//     id: 3,
//     title: "Building Information Modeling",
//     image: "/industry.jpg",
//     url: "/advanced",
//     description:
//       "We leverage BIM to transform construction workflows. Digital twins enhance planning, reduce errors, and streamline operations. Smarter, faster, and more cost-effective builds.",
//   },
//   {
//     id: 4,
//     title: "PLANT & PRODUCT ENGINEERING SERVICES",
//     image: "/industry.jpg",
//     url: "/oil",
//     description:
//       "Our engineering services cover every aspect of plant and product development. We deliver tailored solutions for oil, gas, and industrial sectors. Innovation meets precision engineering.",
//   },
//   {
//     id: 5,
//     title: "Water",
//     image: "/industry.jpg",
//     url: "/water",
//     description:
//       "We provide advanced water management solutions. From treatment to distribution, our expertise ensures sustainability. Protecting resources for future generations.",
//   },
// ];

// export default function RenewableSector() {
//   const [current, setCurrent] = useState(0);
//   const [itemsPerView, setItemsPerView] = useState(3);
//   const [mobileOverlay, setMobileOverlay] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);

//   // Responsive itemsPerView
//   useEffect(() => {
//     const updateItems = () => {
//       if (window.innerWidth < 768) setItemsPerView(1);
//       else setItemsPerView(3);
//     };
//     updateItems();
//     window.addEventListener("resize", updateItems);
//     return () => window.removeEventListener("resize", updateItems);
//   }, []);

//   // Clone slides for seamless loop
//   const extendedSectors = [
//     ...sectors.slice(-itemsPerView),
//     ...sectors,
//     ...sectors.slice(0, itemsPerView),
//   ];

//   const total = sectors.length;
//   const startIndex = itemsPerView; // start in the middle (first real slide)
//   const [position, setPosition] = useState(startIndex);

//   // Animate to next
//   const nextSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setPosition((p) => p + 1);
//   };

//   // Animate to prev
//   const prevSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setPosition((p) => p - 1);
//   };

//   // Handle seamless loop
//   useEffect(() => {
//     if (!isAnimating) return;
//     const timer = setTimeout(() => {
//       let newPos = position;
//       if (position >= total + itemsPerView) newPos = startIndex;
//       if (position < itemsPerView) newPos = total + startIndex - 1;
//       if (newPos !== position) setPosition(newPos);
//       setIsAnimating(false);
//     }, 500); // match transition duration
//     return () => clearTimeout(timer);
//   }, [position, isAnimating, total, itemsPerView]);

//   return (
//     <div className="w-full py-12 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-bold text-[#000080] md:text-3xl">Sectors</h2>
//           <button className="text-[#000080] font-semibold hover:underline">
//             Explore Sectors →
//           </button>
//         </div>

//         {/* Desktop layout with arrows on the side */}
//         <div className="hidden md:flex items-center gap-4">
//           {/* Left Arrow (desktop) */}
//           <button
//             onClick={prevSlide}
//             className="hidden md:flex items-center justify-center   rounded-full text-[#000080]"
//           >
//             <ArrowLeft className="w-13 h-6" />
//           </button>

//           {/* Carousel */}
//           <div className="relative overflow-hidden flex-1">
//             <motion.div
//               className="flex transition-transform duration-500"
//               style={{
//                 width: `${(extendedSectors.length * 100) / itemsPerView}%`,
//                 transform: `translateX(-${
//                   (position * 100) / extendedSectors.length
//                 }%)`,
//               }}
//             >
//               {extendedSectors.map((sector, idx) => (
//                 <div
//                   key={idx}
//                   style={{ minWidth: `${100 / extendedSectors.length}%` }}
//                   className="px-2"
//                 >
//                   <div className="relative group overflow-hidden cursor-pointer">
//                     <img
//                       src={sector.image}
//                       alt={sector.title}
//                       className="w-full h-60 object-cover"
//                     />
//                     <div className="absolute bottom-0 w-full bg-blue-600/90 text-white py-2 text-center text-sm font-semibold">
//                       {sector.title}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </motion.div>
//           </div>

//           {/* Right Arrow (desktop) */}
//           <button
//             onClick={nextSlide}
//             className="hidden md:flex items-center justify-center   rounded-full text-[#000080]"
//           >
//             <ArrowRight className="w-13 h-6" />
//           </button>
//         </div>

//         {/* Mobile layout with arrows overlay */}
//         <div className="md:hidden relative">
//           <div
//             className="relative group cursor-pointer w-full"
//             onClick={() => setMobileOverlay(!mobileOverlay)}
//           >
//             <img
//               src={sectors[position % total].image}
//               alt={sectors[position % total].title}
//               className="w-full h-60 object-cover"
//             />
//             <div className="absolute bottom-0 w-full bg-blue-600/90 text-white py-2 text-center text-sm font-semibold">
//               {sectors[position % total].title}
//             </div>
//             {mobileOverlay && (
//               <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center p-4">
//                 <h3 className="text-lg font-bold text-white mb-2">
//                   {sectors[position % total].title}
//                 </h3>
//                 <p className="text-sm text-gray-200 mb-4">
//                   {sectors[position % total].description}
//                 </p>
//                 <a
//                   href={sectors[position % total].url}
//                   className="px-3 py-1 bg-white text-blue-600 rounded-sm font-semibold hover:bg-gray-200 transition"
//                 >
//                   Know More
//                 </a>
//               </div>
//             )}
//           </div>

//           {/* Mobile Arrows overlay */}
//          <button
//             onClick={prevSlide}
//             className="absolute top-1/2 left-2 -translate-y-1/2 z-20 md:bg-transparent md:p-0"
//           >
//             <ArrowLeft className="w-6 h-6 text-[#000080]" />
//           </button>
//           <button
//             onClick={nextSlide}
//             className="absolute top-1/2 right-2 -translate-y-1/2 z-20 md:bg-transparent md:p-0"
//           >
//             <ArrowRight className="w-6 h-6 text-[#000080]" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Power",
    description:
      "Tata Projects provides customized turnkey solutions for thermal power plants such as total EPC, comprehensive Balance of Plant (BOP), and Flue-gas desulfurization (FGD) solutions. With rich experience in coal and gas-based plants, super and subcritical technologies, we have executed several large and complex projects.",
    image: "/realstate/three.webp",
  },
  {
    id: 2,
    title: "Water",
    description:
      "Tata Projects offers end-to-end industrial and municipal water treatment solutions across the value chain; river rejuvenation, water supply system, sewage system, treatment plants including desalination and effluent treatment Plants.",
    image: "/realstate/two.jpg",
  },
  {
    id: 3,
    title: "Advanced Technology Facilities",
    description:
      "Tata Projects offers end-to-end industrial and municipal water treatment solutions across the value chain; river rejuvenation, water supply system, sewage system, treatment plants including desalination and effluent treatment Plants.",
    image: "/realstate/one.webp",
  },
  {
    id: 4,
    title: "Metals & Minerals",
    description:
      "Tata Projects offers end-to-end industrial and municipal water treatment solutions across the value chain; river rejuvenation, water supply system, sewage system, treatment plants including desalination and effluent treatment Plants.",
    image: "/realstate/fourS.webp",
  },
  {
    id: 5,
    title: "Oil, Gas and Hydrocarbon",
    description:
      "Tata Projects offers end-to-end industrial and municipal water treatment solutions across the value chain; river rejuvenation, water supply system, sewage system, treatment plants including desalination and effluent treatment Plants.",
    image: "/realstate/fiveS.webp",
  },
];

export default function RenewableSector() {
  const [activeOverlay, setActiveOverlay] = useState<number | null>(null);

  const handleOverlayToggle = (id: number) => {
    if (activeOverlay === id) setActiveOverlay(null);
    else setActiveOverlay(id);
  };

  return (
    <section className="text-center px-4 sm:px-6 md:px-12 pt-12 md:pt-16 bg-white">
      <section className="w-full py-8 md:pt-16 bg-white relative">
        <div className="mx-auto px-2 sm:px-4 relative">
          <h2 className="text-xl md:text-3xl font-bold text-start text-blue-900 mb-6">
            Sectors
          </h2>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            centeredSlides={false} // default false
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 0, centeredSlides: false },
              640: { slidesPerView: 1.5, spaceBetween: 20, centeredSlides: true },
              768: { slidesPerView: 2.2, spaceBetween: 24, centeredSlides: true },
              1024: { slidesPerView: 3, spaceBetween: 30, centeredSlides: true },
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                {({ isActive }) => (
                  <div
                    className={`relative text-center transition-all duration-500 group ${
                      isActive ? "scale-105" : "scale-90 opacity-70"
                    }`}
                  >
                    <div className="relative w-full h-48 sm:h-56 md:h-64 flex justify-center">
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover w-full h-full rounded-lg"
                        />

                        {/* Bottom title bar */}
                        <div className="absolute bottom-0 w-full bg-blue-600/90 text-white py-2 text-center text-sm font-semibold">
                          {project.title}
                        </div>

                        {/* Overlay */}
                        <div
                          onClick={() => handleOverlayToggle(project.id)}
                          className={`
                            absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-4 
                            rounded-lg transition-opacity duration-500 cursor-pointer
                            ${
                              activeOverlay === project.id
                                ? "opacity-100"
                                : "opacity-0"
                            }
                            md:opacity-0 md:group-hover:opacity-100 md:cursor-default
                          `}
                        >
                          <h3 className="text-md md:text-sm font-semibold mb-2">
                            {project.title}
                          </h3>
                          <p className="text-base md:text-xs mb-4 line-clamp-3">
                            {project.description}
                          </p>
                          <button className="px-4 py-2 text-xs bg-white text-blue-700 font-semibold shadow-md hover:bg-gray-200 transition">
                            Know More
                          </button>
                        </div>

                        {/* Mobile arrows */}
                        <div className="custom-prev absolute top-1/2 left-2 -translate-y-1/2 z-30 bg-white/80 p-1  cursor-pointer md:hidden">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="#000080"
                            strokeWidth="1.5"
                          >
                            <line x1="20" y1="12" x2="4" y2="12" />
                            <polyline points="12 4 4 12 12 20" />
                          </svg>
                        </div>

                        <div className="custom-next absolute top-1/2 right-2 -translate-y-1/2 z-30 bg-white/80 p-1  cursor-pointer md:hidden">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="#1c398e"
                            strokeWidth="1.5"
                          >
                            <line x1="4" y1="12" x2="20" y2="12" />
                            <polyline points="12 4 20 12 12 20" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Desktop arrows */}
          <div className="custom-prev absolute top-1/2 -translate-y-1/2 left-2 md:-left-0 z-20 cursor-pointer hidden md:flex items-center justify-center rounded-full p-2 md:p-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 md:h-8 md:w-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#000080"
              strokeWidth="1.5"
            >
              <line x1="20" y1="12" x2="4" y2="12" />
              <polyline points="12 4 4 12 12 20" />
            </svg>
          </div>

          <div className="custom-next absolute top-1/2 -translate-y-1/2 right-2 md:-right-0 z-20 cursor-pointer hidden md:flex items-center justify-center rounded-full p-2 md:p-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 md:h-8 md:w-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#1c398e"
              strokeWidth="1.5"
            >
              <line x1="4" y1="12" x2="20" y2="12" />
              <polyline points="12 4 20 12 12 20" />
            </svg>
          </div>
        </div>
      </section>
    </section>
  );
}


