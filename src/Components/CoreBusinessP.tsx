// "use client";

// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import { useRef, useEffect, useState } from "react";
// import type { Swiper as SwiperType } from "swiper";
// import type { NavigationOptions } from "swiper/types";

// import { ChevronLeft, ChevronRight } from "lucide-react";

// import "swiper/css";
// import "swiper/css/navigation";

// export default function CoreBusiness() {
//   const prevRef = useRef<HTMLDivElement | null>(null);
//   const nextRef = useRef<HTMLDivElement | null>(null);
//   const swiperRef = useRef<SwiperType | null>(null);

//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   const coreBusinessData = [
//     {
//       title: "Industry Installation and Construction",
//       image: "/industry.jpg",
//     },
//     {
//       title: "Engineering and R&D services",
//       image: "/engineer.jpg",
//     },
//     {
//       title: "Renewable Energy Solution Provider",
//       image: "/renewable.jpg",
//     },
//     {
//       title: "Pre Engineered Building",
//       image: "/pebone.jpeg",
//     },
//     {
//       title: "Real Estate Development",
//       image: "/realstate.png",
//     },
//   ];

//   useEffect(() => {
//     if (
//       swiperRef.current &&
//       prevRef.current &&
//       nextRef.current &&
//       swiperRef.current.params.navigation &&
//       typeof swiperRef.current.params.navigation !== "boolean"
//     ) {
//       const navigation = swiperRef.current.params
//         .navigation as NavigationOptions;

//       navigation.prevEl = prevRef.current;
//       navigation.nextEl = nextRef.current;

//       swiperRef.current.navigation.destroy();
//       swiperRef.current.navigation.init();
//       swiperRef.current.navigation.update();
//     }
//   }, []);

//   return (
//     <section className="py-4 md:py-16 bg-white md:px-10">
//       <h2 className="text-2xl font-bold mt-5 text-center text-[#000080] mb-2 md:mb-12 md:text-3xl">
//         Core Business
//       </h2>

//       <div className="mx-auto px-4 relative">
//         <Swiper
//           modules={[Navigation]}
//           loop={true}
//           spaceBetween={30}
//           slidesPerView={1}
//           navigation={false}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 4 },
//           }}
//           onSwiper={(swiper) => (swiperRef.current = swiper)}
//         >
//           {coreBusinessData.map((item, idx) => (
//             <SwiperSlide key={idx}>
//               <div className="flex flex-col items-center justify-start">
//                 {/* Heading */}
//                 <h3
//                   className="relative  md:mb-4 text-[16px] font-[600px] text-black text-center w-full min-h-[48px]
//                           transition-colors duration-500 group-hover:text-[#000080] pb-2"
//                 >
//                   {item.title}
//                   <span className="absolute left-0 right-0 -bottom-1 mx-auto h-[2px] w-0 bg-[#8080FF] transition-all duration-500 group-hover:w-full"></span>
//                 </h3>

//                 {/* Image */}
//                 <div
//                   className="relative w-full  h-65 md:h-44 overflow-hidden cursor-pointer group"
//                   onClick={() =>
//                     setActiveIndex(activeIndex === idx ? null : idx)
//                   }
//                 >
//                   <Image
//                     src={item.image}
//                     alt={item.title}
//                     fill
//                     className={`object-cover transition-transform duration-500 ease-in-out
//                             ${
//                               activeIndex === idx ? "scale-90" : "scale-100"
//                             } group-hover:scale-90`}
//                   />
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Mobile arrows overlay */}
//         <div className=" mx-3 absolute inset-0 flex items-center justify-between px-2 md:hidden z-20">
//           <div
//             ref={prevRef}
//             className="bg-[#000080] rounded-full p-2 flex items-center justify-center cursor-pointer shadow-lg"
//           >
//             <ChevronLeft className="text-white w-6 h-6" />
//           </div>
//           <div
//             ref={nextRef}
//             className="bg-[#000080] rounded-full p-2 flex items-center justify-center cursor-pointer shadow-lg"
//           >
//             <ChevronRight className="text-white w-6 h-6" />
//           </div>
//         </div>

//         {/* Optional: desktop arrows below */}
//         <div className="hidden md:flex justify-center items-center gap-8 mt-4">
//           <div ref={prevRef} className="cursor-pointer">
//             <Image src="/leftArrow.png" alt="Previous" width={40} height={40} />
//           </div>
//           <div ref={nextRef} className="cursor-pointer">
//             <Image src="/rightArrow.png" alt="Next" width={40} height={40} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef, useEffect, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import type { NavigationOptions } from "swiper/types";

import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

export default function CoreBusiness() {
  const swiperRef = useRef<SwiperType | null>(null);

  // Separate refs for mobile and desktop arrows
  const prevMobileRef = useRef<HTMLDivElement | null>(null);
  const nextMobileRef = useRef<HTMLDivElement | null>(null);
  const prevDesktopRef = useRef<HTMLDivElement | null>(null);
  const nextDesktopRef = useRef<HTMLDivElement | null>(null);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const coreBusinessData = [
    { title: "Industry Installation and Construction", image: "/industry.jpg" },
    { title: "Engineering and R&D services", image: "/engineer.jpg" },
    { title: "Renewable Energy Solution Provider", image: "/renewable.jpg" },
    { title: "Pre Engineered Building", image: "/pebone.jpeg" },
    { title: "Real Estate Development", image: "/realstate.png" },
  ];

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiper = swiperRef.current;
    const navigation = swiper.params.navigation as NavigationOptions;

    // Pick arrows based on screen width
    const isMobile = window.innerWidth < 768;

    navigation.prevEl = isMobile
      ? prevMobileRef.current
      : prevDesktopRef.current;
    navigation.nextEl = isMobile
      ? nextMobileRef.current
      : nextDesktopRef.current;

    swiper.navigation.destroy();
    swiper.navigation.init();
    swiper.navigation.update();

    // Optional: update on resize to switch arrows dynamically
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      navigation.prevEl = mobile
        ? prevMobileRef.current
        : prevDesktopRef.current;
      navigation.nextEl = mobile
        ? nextMobileRef.current
        : nextDesktopRef.current;

      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-4 md:py-16 bg-white md:px-10">
      <h2 className="text-2xl font-bold mt-5 text-center text-[#000080] mb-2 md:mb-12 md:text-3xl">
        Core Business
      </h2>

      <div className="mx-auto px-4 relative">
        <Swiper
          modules={[Navigation]}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          navigation={false} // manually attach refs
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {coreBusinessData.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center justify-start">
                <h3 className="relative md:mb-4 text-[16px] font-[600px] text-black text-center w-full min-h-[48px] transition-colors duration-500 group-hover:text-[#000080] pb-2">
                  {item.title}
                  <span className="absolute left-0 right-0 -bottom-1 mx-auto h-[2px] w-0 bg-[#8080FF] transition-all duration-500 group-hover:w-full"></span>
                </h3>

                <div
                  className="relative w-full h-65 md:h-44 overflow-hidden cursor-pointer group"
                  onClick={() =>
                    setActiveIndex(activeIndex === idx ? null : idx)
                  }
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className={`object-cover transition-transform duration-500 ease-in-out ${
                      activeIndex === idx ? "scale-90" : "scale-100"
                    } group-hover:scale-90`}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Mobile arrows overlay */}
        <div className="mx-3 absolute inset-0 flex items-center justify-between px-2 md:hidden z-20">
          <div
            ref={prevMobileRef}
            className="bg-[#000080] rounded-full p-2 flex items-center justify-center cursor-pointer shadow-lg"
          >
            <ChevronLeft className="text-white w-6 h-6" />
          </div>
          <div
            ref={nextMobileRef}
            className="bg-[#000080] rounded-full p-2 flex items-center justify-center cursor-pointer shadow-lg"
          >
            <ChevronRight className="text-white w-6 h-6" />
          </div>
        </div>

        {/* Desktop arrows below */}
        <div className="hidden md:flex justify-center items-center gap-8 mt-4">
          <div ref={prevDesktopRef} className="cursor-pointer">
            <Image src="/leftArrow.png" alt="Previous" width={40} height={40} />
          </div>
          <div ref={nextDesktopRef} className="cursor-pointer">
            <Image src="/rightArrow.png" alt="Next" width={40} height={40} />
          </div>
        </div>
      </div>
    </section>
  );
}
