// "use client";

// import { useState, useRef, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, EffectFade } from "swiper/modules";
// import type { Swiper as SwiperType } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-fade";

// interface Category {
//   title: string;
//   images: string[];
//   description: string;
// }

// const categories: Category[] = [
//   {
//     title: "Industry Installation",
//     images: ["/industryhome/Institutional Sector (1).jpg", "/industryhome/"],
//     description:
//       "LandsKingInfra Pvt.Ltd offers durable, custom-designed Pre-Engineered Buildings (PEBs) to protect and enhance your organization. We design, manufacture, and build infrastructure solutions that support long-term business growth and deliver strong returns on investment.",
//   },
//   {
//     title: "Water",
//     images: [
//       "/industryhome/water.jpeg",
//       "/industryhome/water (5).jpg",
//       "/industryhome/Water Supply & Sanitation.jpg",
//     ],
//     description:
//       "We design and deliver high-quality sports complexes, stadiums, and recreational facilities. Our prefabricated solutions ensure modern aesthetics, fast construction, and durability, creating spaces that encourage active and healthy lifestyles.",
//   },
//   {
//     title: "Transport ",
//     images: [
//       "/industryhome/Transport (3) (1).jpg",
//       "/industryhome/Transport (5).JPG",
//       "/industryhome/Transport (4).jpg",
//     ],
//     description:
//       "We specialize in large institutional buildings such as schools, hospitals, and offices. Prefabrication is increasingly recognized as a reliable alternative to traditional construction, offering faster delivery, cost efficiency, and enhanced sustainability.",
//   },
//   {
//     title: "Industrial & Buildings",
//     images: [
//       "/industry.jpg",
//       "/industryhome/Industrial & Buildings (2) (1).jpg",
//     ],

//     description:
//       "From landmark structures to custom-designed special-purpose buildings, our solutions combine modern engineering with sustainability. We deliver unique projects that stand out for their design, durability, and environmental responsibility.",
//   },
// ];

// export default function Renewableslider() {
//   const [activeCategory, setActiveCategory] = useState<Category>(categories[0]);
//   const swiperRef = useRef<SwiperType | null>(null);

//   useEffect(() => {
//     if (swiperRef.current) swiperRef.current.slideTo(0);
//   }, [activeCategory]);

//   return (
//     <div className="px-auto py-5 mt-6 bg-[#f0f1f5]">
//       {/* Component-scoped styles for mobile arrow size & color */}
//       <style jsx>{`
//         /* Force white arrows + full opacity on mobile */
//         ${categories
//           .map(
//             (_, idx) => `
//         /* arrow icon */
//         .swiper-next-mobile-${idx}::after,
//         .swiper-prev-mobile-${idx}::after {
//           color: white;
//           font-size: 19px;
//           font-weight: 500;
//           opacity: 1 !important;
//         }

//         /* arrow container */
//         .swiper-next-mobile-${idx},
//         .swiper-prev-mobile-${idx} {
//           opacity: 1 !important;
//         }

//         /* also override disabled state completely */
//         .swiper-next-mobile-${idx}.swiper-button-disabled,
//         .swiper-prev-mobile-${idx}.swiper-button-disabled {
//           opacity: 1 !important;
//           pointer-events: auto; /* optional: keep clickable */
//         }
//         .swiper-next-mobile-${idx}.swiper-button-disabled::after,
//         .swiper-prev-mobile-${idx}.swiper-button-disabled::after {
//           opacity: 1 !important;
//         }
//       `
//           )
//           .join("\n")}
//       `}</style>

//       {/* Section Title */}
//       <div className=" hidden text-center mb-12 md:hidden">
//         <p className="text-sm uppercase tracking-widest text-gray-500">
//           Our Expertise
//         </p>
//         <h2 className="text-xl font-bold text-[#000080] md:text-3xl">
//           Shaping the Future of Multiple Sectors
//         </h2>
//         <div className="w-16 h-1 bg-[#000080] mx-auto mt-3" />
//       </div>

//       <div className="mx-auto md:my-7 px-4 lg:px-31 my-1 md:px-20">
//         {/* Mobile Slider */}
//         <div className="lg:hidden space-y-2">
//           {categories.map((cat, idx) => (
//             <div key={idx} className=" shadow-md overflow-hidden relative">
//               <Swiper
//                 navigation={{
//                   nextEl: `.swiper-next-mobile-${idx}`,
//                   prevEl: `.swiper-prev-mobile-${idx}`,
//                 }}
//                 modules={[Navigation]}
//                 spaceBetween={0}
//                 className="w-full h-45  overflow-hidden"
//               >
//                 {cat.images.map((img, i) => (
//                   <SwiperSlide key={i}>
//                     <div
//                       className="w-full h-64 bg-cover bg-center relative"
//                       style={{ backgroundImage: `url(${img})` }}
//                     >
//                       <div className="absolute inset-0  flex items-center justify-center">
//                         <h3 className="text-lg font-bold text-white text-center px-2">
//                           {cat.title}
//                         </h3>
//                       </div>
//                     </div>
//                   </SwiperSlide>
//                 ))}

//                 {/* Mobile arrows */}
//                 <div
//                   className={`swiper-button-next swiper-next-mobile-${idx}`}
//                 />
//                 <div
//                   className={`swiper-button-prev swiper-prev-mobile-${idx}`}
//                 />
//               </Swiper>
//             </div>
//           ))}
//         </div>

//         {/* Desktop Slider */}
//         <div className="hidden lg:flex w-full h-[500px] overflow-hidden">
//           {/* Left Tabs */}
//           <div className="w-1/4 bg-white flex flex-col border border-gray-300">
//             {categories.map((cat, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveCategory(cat)}
//                 className={`flex-1 text-lg p-8 text-left md:text-[19px] font-medium transition-all duration-300 transition-colors
//                   ${
//                     activeCategory.title === cat.title
//                       ? "bg-white text-black shadow-inner"
//                       : " text-gray-700 hover:bg-[#000080] hover:text-white"
//                   }
//                   ${
//                     index !== categories.length - 1
//                       ? "border-b border-gray-300"
//                       : ""
//                   }`}
//               >
//                 {cat.title}
//               </button>
//             ))}
//           </div>

//           {/* Right Image Slider */}
//           <div className="w-3/4 relative">
//             <Swiper
//               navigation={true}
//               modules={[Navigation, EffectFade]}
//               effect="fade"
//               className="w-full h-full"
//               onSwiper={(swiper) => (swiperRef.current = swiper)}
//             >
//               {activeCategory.images.map((img, idx) => (
//                 <SwiperSlide key={idx}>
//                   <div
//                     className="w-full h-full bg-cover bg-center relative transition-all duration-700"
//                     style={{ backgroundImage: `url(${img})` }}
//                   >
//                     <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-11/12">
//                       <div className="p-8 text-white shadow-lg transition-all duration-700">
//                         <h3 className="text-2xl font-bold mb-3 text-center">
//                           {activeCategory.title}
//                         </h3>
//                         <p className="text-sm mb-3 text-center">
//                           {activeCategory.description}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               ))}

//               {/* Desktop arrows */}
//               <div className="swiper-button-next !text-white" />
//               <div className="swiper-button-prev !text-white" />
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Category {
  title: string;
  images: string[];
  description: string;
}

const categories: Category[] = [
  {
    title: "Industry Installation",
    images: ["/industryhome/Institutional Sector (1).jpg", "/industryhome/"],
    description:
      "LandsKingInfra Pvt.Ltd offers durable, custom-designed Pre-Engineered Buildings (PEBs) to protect and enhance your organization. We design, manufacture, and build infrastructure solutions that support long-term business growth and deliver strong returns on investment.",
  },
  {
    title: "Water",
    images: [
      "/industryhome/water.jpeg",
      "/industryhome/water (5).jpg",
      "/industryhome/Water Supply & Sanitation.jpg",
    ],
    description:
      "We design and deliver high-quality sports complexes, stadiums, and recreational facilities. Our prefabricated solutions ensure modern aesthetics, fast construction, and durability, creating spaces that encourage active and healthy lifestyles.",
  },
  {
    title: "Transport ",
    images: [
      "/industryhome/Transport (3) (1).jpg",
      "/industryhome/Transport (5).JPG",
      "/industryhome/Transport (4).jpg",
    ],
    description:
      "We specialize in large institutional buildings such as schools, hospitals, and offices. Prefabrication is increasingly recognized as a reliable alternative to traditional construction, offering faster delivery, cost efficiency, and enhanced sustainability.",
  },
  {
    title: "Industrial & Buildings",
    images: [
      "/industry.jpg",
      "/industryhome/Industrial & Buildings (2) (1).jpg",
    ],

    description:
      "From landmark structures to custom-designed special-purpose buildings, our solutions combine modern engineering with sustainability. We deliver unique projects that stand out for their design, durability, and environmental responsibility.",
  },
];

export default function Industryslider() {
  const [activeCategory, setActiveCategory] = useState<Category>(categories[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === activeCategory.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? activeCategory.images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  return (
    <div className="px-auto py-5 mt-6 mb-5 bg-[#f0f1f5] md:mb-0">
      {/* Section Title */}
      <div className="text-center mb-6"></div>

      <div className="mx-auto my-8 px-4 lg:px-20 md:px-15">
        {/* ✅ Mobile Slider */}
        <div className="lg:hidden space-y-2">
          {categories.map((cat, idx) => {
            const [mobIndex, setMobIndex] = useState(0);

            const nextMob = () =>
              setMobIndex((p) => (p === cat.images.length - 1 ? 0 : p + 1));
            const prevMob = () =>
              setMobIndex((p) => (p === 0 ? cat.images.length - 1 : p - 1));

            return (
              <div key={idx} className="shadow-md overflow-hidden relative">
                <div className="relative w-full h-64">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={mobIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${cat.images[mobIndex]})`,
                      }}
                    />
                  </AnimatePresence>

                  {/* Overlay Text */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <h3 className="text-lg font-bold text-white text-center px-2">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Arrows */}
                  <button
                    onClick={prevMob}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-white hover:scale-110 transition-transform"
                  >
                    <ChevronLeft size={36} strokeWidth={2.2} />
                  </button>
                  <button
                    onClick={nextMob}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:scale-110 transition-transform"
                  >
                    <ChevronRight size={36} strokeWidth={2.2} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* ✅ Desktop Section */}
        <div className="hidden lg:flex w-full h-[550px] overflow-hidden">
          {/* Left Tabs */}
          <div className="w-1/4 bg-white flex flex-col border border-gray-300">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(cat)}
                className={`flex-1 text-lg p-8 text-left md:text-[19px] font-medium transition-all duration-300
                  ${
                    activeCategory.title === cat.title
                      ? "bg-white text-black shadow-inner"
                      : "text-gray-700 hover:bg-[#000080] hover:text-white"
                  }
                  ${
                    index !== categories.length - 1
                      ? "border-b border-gray-300"
                      : ""
                  }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Right Image Slider */}
          <div className="w-3/4 relative flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${activeCategory.images[currentIndex]})`,
                }}
              >
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-11/12">
                  <div className="p-8 text-white shadow-lg ">
                    <h3 className="text-2xl font-bold mb-3 text-center">
                      {activeCategory.title}
                    </h3>
                    <p className="text-sm mb-3 text-center">
                      {activeCategory.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 text-white hover:scale-110 transition-transform"
            >
              <ChevronLeft size={46} strokeWidth={2.3} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 text-white hover:scale-110 transition-transform"
            >
              <ChevronRight size={46} strokeWidth={2.3} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
