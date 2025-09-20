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
//     title: "Site Assessment & Feasibility Study",
//     images: ["/industry.jpg", "/about.png", "/about.png"],
//     description:
//       " Every project begins with a detailed site survey to evaluate solar potential, land or rooftop conditions, and shading impact. We review electricity usage patterns, structural stability, and compliance requirements, including permits and DISCOM approvals. This step lays the technical and regulatory foundation for a sustainable and profitable solar  power project",
//   },
//   {
//     title: "System Design & Financial Modelling",
//     images: ["/about.png", "/about.png", "/about.png"],
//     description:
//       "Our engineering team prepares optimized layouts for electrical, structural, and mechanical integration. Using advanced simulation tools, we forecast energy generation, design system capacity, and calculate ROI. We provide clear payback timelines, ensuring your project is both technically robust and financially rewarding.",
//   },
//   {
//     title: "Procurement & Logistics",
//     images: ["/about.png", "/about.png"],
//     description:
//       "As one of the reliable solar EPC companies in India, LandscapInfra maintains strong vendor networks for Tier-1 panels, inverters, and BOS equipment. Our procurement strategy ensures certified quality components, while our logistics team manages delivery schedules efficiently—so every project remains on track without unnecessary delays.",
//   },
//   {
//     title: "Construction & Commissioning",
//     images: ["/about.png", "/about.png"],
//     description:
//       "Our expert site team executes civil works, racking structures, cabling, inverter setup, and grid synchronization with strict adherence to IEC and safety standards. Each installation undergoes thorough quality testing to ensure long-term durability and stable energy output. We hand over a system that is reliable from day one.",
//   },
//   {
//     title: "Monitoring & Maintenance",
//     images: ["/about.png", "/about.png"],
//     description:
//       "Our responsibility doesn’t end at commissioning. With advanced monitoring platforms, clients get real-time insights into system performance. Our AMC packages include preventive maintenance, module cleaning, system audits, and timely troubleshooting. LandscapInfra ensures your solar plant delivers consistent results year after year.",
//   },
// ];

// export default function Renewableslider() {
//   const [activeCategory, setActiveCategory] = useState<Category>(categories[0]);
//   const swiperRef = useRef<SwiperType | null>(null);

//   useEffect(() => {
//     if (swiperRef.current) swiperRef.current.slideTo(0);
//   }, [activeCategory]);

//   return (
//     <div className="px-auto py-8 mt-6 bg-[#f0f1f5]">
//       {/* Component-scoped styles for mobile arrow size & color */}
//       <style jsx>{`
//         ${categories
//           .map(
//             (_, idx) => `
//           .swiper-next-mobile-${idx}::after,
//           .swiper-prev-mobile-${idx}::after {
//             color: white;       /* White arrows */
//             font-size: 17px;    /* Smaller size */
//             font-weight: 500;   /* Medium */
//           }
//         `
//           )
//           .join("\n")}
//       `}</style>

//       {/* Section Title */}
//       <div className="text-center mb-12">
//         <p className="text-sm uppercase tracking-widest text-gray-500">
//           Our Process{" "}
//         </p>
//         <h2 className="text-xl font-bold text-[#000080] md:text-3xl">
//           Solar Process
//         </h2>
//         <div className="w-16 h-1 bg-[#000080] mx-auto mt-3" />
//       </div>

//       <div className="mx-auto my-8 px-4 md:mx-10">
//         {/* Mobile Slider */}
//         <div className="lg:hidden space-y-2">
//           {categories.map((cat, idx) => (
//             <div
//               key={idx}
//               className="rounded-lg shadow-md overflow-hidden relative"
//             >
//               <Swiper
//                 navigation={{
//                   nextEl: `.swiper-next-mobile-${idx}`,
//                   prevEl: `.swiper-prev-mobile-${idx}`,
//                 }}
//                 modules={[Navigation]}
//                 spaceBetween={0}
//                 className="w-full h-64 rounded-md overflow-hidden"
//               >
//                 {cat.images.map((img, i) => (
//                   <SwiperSlide key={i}>
//                     <div
//                       className="w-full h-64 bg-cover bg-center relative"
//                       style={{ backgroundImage: `url(${img})` }}
//                     >
//                       <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
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
//                 className={`flex-1 p-8 text-left text-xl font-medium transition-all duration-300 transition-colors
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
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

interface Category {
  title: string;
  images: string[];
  description: string;
}

const categories: Category[] = [
  {
    title: "Site Assessment & Feasibility Study",
    images: ["/industry.jpg", "/about.png", "/about.png"],
    description:
      "Every project begins with a detailed site survey to evaluate solar potential, land or rooftop conditions, and shading impact. We review electricity usage patterns, structural stability, and compliance requirements, including permits and DISCOM approvals. This step lays the technical and regulatory foundation for a sustainable and profitable solar power project",
  },
  {
    title: "System Design & Financial Modelling",
    images: ["/about.png", "/about.png", "/about.png"],
    description:
      "Our engineering team prepares optimized layouts for electrical, structural, and mechanical integration. Using advanced simulation tools, we forecast energy generation, design system capacity, and calculate ROI. We provide clear payback timelines, ensuring your project is both technically robust and financially rewarding.",
  },
  {
    title: "Procurement & Logistics",
    images: ["/about.png", "/about.png"],
    description:
      "As one of the reliable solar EPC companies in India, LandscapInfra maintains strong vendor networks for Tier-1 panels, inverters, and BOS equipment. Our procurement strategy ensures certified quality components, while our logistics team manages delivery schedules efficiently—so every project remains on track without unnecessary delays.",
  },
  {
    title: "Construction & Commissioning",
    images: ["/about.png", "/about.png"],
    description:
      "Our expert site team executes civil works, racking structures, cabling, inverter setup, and grid synchronization with strict adherence to IEC and safety standards. Each installation undergoes thorough quality testing to ensure long-term durability and stable energy output. We hand over a system that is reliable from day one.",
  },
  {
    title: "Monitoring & Maintenance",
    images: ["/about.png", "/about.png"],
    description:
      "Our responsibility doesn’t end at commissioning. With advanced monitoring platforms, clients get real-time insights into system performance. Our AMC packages include preventive maintenance, module cleaning, system audits, and timely troubleshooting. LandscapInfra ensures your solar plant delivers consistent results year after year.",
  },
];

export default function Renewableslider() {
  const [activeCategory, setActiveCategory] = useState<Category>(categories[0]);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current) swiperRef.current.slideTo(0);
  }, [activeCategory]);

  return (
    <div className="px-auto py-8 mt-6 bg-[#f0f1f5]">
      {/* Mobile arrow style */}
      <style jsx>{`
        ${categories
          .map(
            (_, idx) => `
          .swiper-next-mobile-${idx}::after,
          .swiper-prev-mobile-${idx}::after {
            color: white;
            font-size: 17px;
            font-weight: 500;
          }
        `
          )
          .join("\n")}
      `}</style>

      {/* Section Title */}
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-widest text-gray-500">
          Our Process{" "}
        </p>
        <h2 className="text-xl font-bold text-[#000080] md:text-3xl">
          Solar Process
        </h2>
        <div className="w-16 h-1 bg-[#000080] mx-auto mt-3" />
      </div>

      <div className="mx-auto my-8 px-4 md:mx-10">
        {/* Mobile Slider */}
        <div className="lg:hidden space-y-2">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-lg shadow-md overflow-hidden relative"
            >
              <Swiper
                navigation={{
                  nextEl: `.swiper-next-mobile-${idx}`,
                  prevEl: `.swiper-prev-mobile-${idx}`,
                }}
                modules={[Navigation]}
                spaceBetween={0}
                className="w-full h-64 rounded-md overflow-hidden"
              >
                {cat.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <div
                      className="w-full h-64 bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${img})` }}
                    >
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <h3 className="text-lg font-bold text-white text-center px-2">
                          {cat.title}
                        </h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

                {/* Mobile arrows */}
                <div
                  className={`swiper-button-next swiper-next-mobile-${idx}`}
                />
                <div
                  className={`swiper-button-prev swiper-prev-mobile-${idx}`}
                />
              </Swiper>
            </div>
          ))}
        </div>

        {/* Desktop Slider */}
        <div className="hidden lg:flex w-full min-h-[450px] overflow-hidden">
          {/* Left Tabs */}
          <div className="w-1/4 bg-white flex flex-col border border-gray-300 overflow-y-auto">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(cat)}
                className={`w-full p-6 text-left text-base md:text-lg font-medium break-words whitespace-normal leading-snug transition-all duration-300
                  ${
                    activeCategory.title === cat.title
                      ? "bg-white text-black shadow-inner"
                      : " text-gray-700 hover:bg-[#000080] hover:text-white"
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
          <div className="w-3/4 relative">
            <Swiper
              navigation={true}
              modules={[Navigation, EffectFade]}
              effect="fade"
              className="w-full h-full"
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {activeCategory.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div
                    className="w-full h-full bg-cover bg-center relative transition-all duration-700"
                    style={{ backgroundImage: `url(${img})` }}
                  >
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-11/12">
                      <div className="p-8 text-white shadow-lg transition-all duration-700 bg-black/40 rounded-lg">
                        <h3 className="text-2xl font-bold mb-3 text-center">
                          {activeCategory.title}
                        </h3>
                        <p className="text-sm mb-3 text-center">
                          {activeCategory.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* Desktop arrows */}
              <div className="swiper-button-next !text-white" />
              <div className="swiper-button-prev !text-white" />
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
