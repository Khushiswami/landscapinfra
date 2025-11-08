// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import Image from "next/image";
// import { useState } from "react";
// import "swiper/css";
// import "swiper/css/navigation";

// interface Project {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
// }

// const projects: Project[] = [
//   {
//     id: 1,
//     title: "Industrial ",
//     description:
//       "Commercial construction include industrial construction, warehouse, water treatment plant and intake well construction.",
//     image: "/realstate/commercial construction.jpg",
//   },
//   {
//     id: 2,
//     title: "Multifamily",
//     description:
//       "Project Consultancy includes Architectural and structural design, Interior, Supervision, Project management consultancy.",
//     image: "/realstate/project concutancy.jpg",
//   },
//   {
//     id: 3,
//     title: "Office",
//     description:
//       "Real estate includes Sales, Purchase, Consultancy for Residential, commercial, industrial and agriculture land.",
//     image: "/realstate/real estate.jpg",
//   },
//   {
//     id: 4,
//     title: "Retail",
//     description:
//       "This includes Bungalow Construction, Farmhouse, Row houses, villa construction including conventional and modern technologies both.",
//     image: "/realstate/residentail construction.jpg",
//   },
//   {
//     id: 5,
//     title: "Corporate Solutions",
//     description:
//       "This includes Bungalow Construction, Farmhouse, Row houses, villa construction including conventional and modern technologies both.",
//     image: "/realstate/residentail construction.jpg",
//   },
//   {
//     id: 6,
//     title: "Data Centers",
//     description:
//       "This includes Bungalow Construction, Farmhouse, Row houses, villa construction including conventional and modern technologies both.",
//     image: "/realstate/residentail construction.jpg",
//   },
//   {
//     id: 7,
//     title: "Healthcare",
//     description:
//       "This includes Bungalow Construction, Farmhouse, Row houses, villa construction including conventional and modern technologies both.",
//     image: "/realstate/residentail construction.jpg",
//   },
//   {
//     id: 8,
//     title: "Investment",
//     description:
//       "This includes Bungalow Construction, Farmhouse, Row houses, villa construction including conventional and modern technologies both.",
//     image: "/realstate/residentail construction.jpg",
//   },
// ];

// export default function SectorSlider() {
//   const [activeOverlay, setActiveOverlay] = useState<number | null>(null);

//   const handleOverlayToggle = (id: number) => {
//     if (activeOverlay === id) setActiveOverlay(null);
//     else setActiveOverlay(id);
//   };

//   return (
//     <section className="text-center px-4 sm:px-6 md:px-15 lg:px-20 pt-1 md:pt-16 bg-white">
//       <section className="w-full py-8 md:pt-16 bg-white relative">
//         <div className="mx-auto px-2 sm:px-4 relative">
//           <h2 className="text-center text-3xl font-bold text-[#000080] mb-20">
//             Brokerage Services: Expert Transaction Management
//           </h2>
//           <p className="text-gray-700  text-base md:text-lg  ">
//             Engaging a qualified expert is critical for any successful property
//             acquisition or disposition. Our professionals are product
//             specialists and local market authorities, fluent in all sectors from
//             industrial to residential townships. You can rely on Landsking
//             Infra's team to deploy verified data and cross-sector knowledge to
//             solve complex challenges. We manage everything—sourcing,
//             negotiation, and closure—with precision and legal clarity. This
//             guarantees you make the most informed decision possible, turning
//             challenges into opportunity.
//           </p>
//           <Swiper
//             modules={[Navigation, Autoplay]}
//             navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
//             autoplay={{ delay: 2500, disableOnInteraction: false }}
//             loop={true}
//             centeredSlides={false}
//             breakpoints={{
//               0: {
//                 slidesPerView: 1,
//                 spaceBetween: 10,
//               },
//               640: {
//                 slidesPerView: 2,
//                 spaceBetween: 16,
//               },
//               1024: {
//                 slidesPerView: 3,
//                 spaceBetween: 24,
//               },
//             }}
//           >
//             {projects.map((project) => (
//               <SwiperSlide key={project.id}>
//                 {({ isActive }) => (
//                   <div
//                     className={`relative text-center transition-all duration-500 group ${
//                       isActive ? "scale-105" : "scale-90 opacity-70"
//                     }`}
//                   >
//                     <div className="relative w-full h-48 sm:h-56 md:h-64 flex justify-center">
//                       <div className="relative w-full h-full">
//                         <Image
//                           src={project.image}
//                           alt={project.title}
//                           fill
//                           className="object-cover w-full h-full rounded-lg"
//                         />

//                         {/* Bottom title bar */}
//                         <div className="absolute bottom-0 w-full bg-[#000080] text-white py-2 px-4 md:px-0 text-center text-sm font-semibold">
//                           {project.title}
//                         </div>

//                         {/* Overlay */}
//                         <div
//                           onClick={() => handleOverlayToggle(project.id)}
//                           className={`
//                             absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-4
//                             rounded-lg transition-opacity duration-500 cursor-pointer
//                             ${
//                               activeOverlay === project.id
//                                 ? "opacity-100"
//                                 : "opacity-0"
//                             }
//                             md:opacity-0 md:group-hover:opacity-100 md:cursor-default
//                           `}
//                         >
//                           <h3 className="text-sm md:text-lg font-semibold mb-2">
//                             {project.title}
//                           </h3>
//                           {/* <p className="text-[10px] md:text-[17px] mb-4 ">
//                             {project.description}
//                           </p> */}
//                           {/* <button className="px-4 py-2 text-xs bg-white text-blue-700 font-semibold shadow-md hover:bg-gray-200 transition">
//                             Know More
//                           </button> */}
//                         </div>

//                         {/* Mobile arrows */}
//                         <div className="custom-prev absolute top-1/2 left-2 -translate-y-1/2 z-30 bg-white/80 p-1  cursor-pointer md:hidden">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-5 w-5"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="#000080"
//                             strokeWidth="1.5"
//                           >
//                             <line x1="20" y1="12" x2="4" y2="12" />
//                             <polyline points="12 4 4 12 12 20" />
//                           </svg>
//                         </div>

//                         <div className="custom-next absolute top-1/2 right-2 -translate-y-1/2 z-30 bg-white/80 p-1  cursor-pointer md:hidden">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-5 w-5"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="#1c398e"
//                             strokeWidth="1.5"
//                           >
//                             <line x1="4" y1="12" x2="20" y2="12" />
//                             <polyline points="12 4 20 12 12 20" />
//                           </svg>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Desktop arrows */}
//           <div className="custom-prev absolute top-1/2 -translate-y-1/2 left-2 md:-left-0 z-20 cursor-pointer hidden md:flex items-center justify-center rounded-full p-2 md:p-0">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6 md:h-8 md:w-9"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="#000080"
//               strokeWidth="1.5"
//             >
//               <line x1="20" y1="12" x2="4" y2="12" />
//               <polyline points="12 4 4 12 12 20" />
//             </svg>
//           </div>

//           <div className="custom-next absolute top-1/2 -translate-y-1/2 right-2 md:-right-0 z-20 cursor-pointer hidden md:flex items-center justify-center rounded-full p-2 md:p-0">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6 md:h-8 md:w-9"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="#1c398e"
//               strokeWidth="1.5"
//             >
//               <line x1="4" y1="12" x2="20" y2="12" />
//               <polyline points="12 4 20 12 12 20" />
//             </svg>
//           </div>
//         </div>
//       </section>
//     </section>
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
    title: "Commercial Construction",
    description:
      "Commercial construction include industrial construction, warehouse, water treatment plant and intake well construction.",
    image: "/realstate/commercial construction.jpg",
  },
  {
    id: 2,
    title: "Project Consultancy",
    description:
      "Project Consultancy includes Architectural and structural design, Interior, Supervision, Project management consultancy.",
    image: "/realstate/project concutancy.jpg",
  },
  {
    id: 3,
    title: "Real Estate",
    description:
      "Real estate includes Sales, Purchase, Consultancy for Residential, commercial, industrial and agriculture land.",
    image: "/realstate/real estate.jpg",
  },
  {
    id: 4,
    title: "Residential Construction",
    description:
      "This includes Bungalow Construction, Farmhouse, Row houses, villa construction including conventional and modern technologies both.",
    image: "/realstate/residentail construction.jpg",
  },
];

export default function SectorSlider() {
  const [activeOverlay, setActiveOverlay] = useState<number | null>(null);

  const handleOverlayToggle = (id: number) => {
    setActiveOverlay(activeOverlay === id ? null : id);
  };

  return (
    <section className="text-center px-4 sm:px-6 md:px-15 lg:px-20 pt-1 md:pt-16 bg-white">
      <section className="w-full py-8 md:pt-16 bg-white relative">
        <div className="mx-auto px-2 sm:px-4 relative">
          <h2 className="text-center text-3xl font-bold text-[#000080] mb-10 md:mb-10">
            Brokerage Services: Expert Transaction Management
          </h2>

          <p className="text-gray-700 text-base md:text-lg mb-10">
            Engaging a qualified expert is critical for any successful property
            acquisition or disposition. Our professionals are product
            specialists and local market authorities, fluent in all sectors from
            industrial to residential townships. You can rely on Landsking
            Infra's team to deploy verified data and cross-sector knowledge to
            solve complex challenges. We manage everything—sourcing,
            negotiation, and closure— with precision and legal clarity. This
            guarantees you make the most informed decision possible, turning
            challenges into opportunity.
          </p>

          {/* Swiper Slider */}
          <div className="relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              centeredSlides={false}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 16,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
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
                          <div className="absolute bottom-0 w-full bg-[#000080] text-white py-2 px-4 text-center text-sm font-semibold">
                            {project.title}
                          </div>

                          {/* Overlay (on click for mobile, hover for desktop) */}
                          <div
                            onClick={() => handleOverlayToggle(project.id)}
                            className={`absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-4 
                            rounded-lg transition-opacity duration-500 cursor-pointer
                            ${
                              activeOverlay === project.id
                                ? "opacity-100"
                                : "opacity-0"
                            }
                            md:opacity-0 md:group-hover:opacity-100 md:cursor-default`}
                          >
                            <h3 className="text-sm md:text-lg font-semibold mb-2">
                              {project.title}
                            </h3>
                            {/* <p className="text-xs md:text-sm">{project.description}</p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Desktop Navigation Arrows */}
            <div className="custom-prev absolute inset-y-0 left-0 flex items-center justify-center z-20 cursor-pointer hidden md:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 md:h-10 md:w-10  rounded-full p-1   transition"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#000080"
                strokeWidth="1.5"
              >
                <line x1="20" y1="12" x2="4" y2="12" />
                <polyline points="12 4 4 12 12 20" />
              </svg>
            </div>

            <div className="custom-next absolute inset-y-0 right-0 flex items-center justify-center z-20 cursor-pointer hidden md:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 md:h-10 md:w-10  rounded-full p-1   transition"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#1c398e"
                strokeWidth="1.5"
              >
                <line x1="4" y1="12" x2="20" y2="12" />
                <polyline points="12 4 20 12 12 20" />
              </svg>
            </div>

            {/* Mobile Arrows */}
            <div className="custom-prev absolute top-1/2 left-2 -translate-y-1/2 z-30  p-1 rounded-full cursor-pointer md:hidden">
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

            <div className="custom-next absolute top-1/2 right-2 -translate-y-1/2 z-30  p-1 rounded-full cursor-pointer md:hidden">
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
      </section>
    </section>
  );
}
