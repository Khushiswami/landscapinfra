// "use client";

// import React from "react";

// export default function Pebbrand() {
//   const images: string[] = [
//     "/clientlogo1.png",
//     "/client2.jpeg",
//     "/client3.jpeg",
//     "/client4.jpeg",
//     "/client5.jpeg",
//     "/client6.jpeg",
//     "/client7.jpeg",
//     "/client8.jpeg",
//     "/client9.jpeg",
//     "/client10.jpeg",
//     "/client11.jpeg",
//   ];

//   // Duplicate the array so the marquee has no empty gap
//   const doubledImages: string[] = [...images, ...images];

//   type RowMarqueeProps = {
//     reverse: boolean;
//   };

//   const RowMarquee: React.FC<RowMarqueeProps> = ({ reverse }) => (
//     <div className="overflow-hidden w-full">
//       <div
//         className={`flex ${
//           reverse ? "animate-marquee-reverse" : "animate-marquee"
//         }`}
//       >
//         {doubledImages.map((src, i) => (
//           <div
//             key={i}
//             className="flex-none w-1/3 md:w-1/6 p-2"
//           >
//             <div className="bg-white border-2 border-gray-300 shadow-md rounded flex items-center justify-center p-4 h-24">
//               <img
//                 src={src}
//                 alt={`Client ${i + 1}`}
//                 className="max-h-full max-w-full object-contain"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <section className="py-10 bg-white">
//       <h2 className="text-4xl font-bold text-center text-[#000080] mb-6 sm:text-4xl">
//         Meet Our Clients
//       </h2>

//       <div className="space-y-4">
//         <RowMarquee reverse={false} />
//         <RowMarquee reverse={true} />
//       </div>
//     </section>
//   );
// }
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

export default function Brand() {
  const images: string[] = [
    "/client/adani.jpg",
    "/client/dilip.png",
    "/client/dv.png",
    "/client/indore.png",
    "/client/pp.jpg",
    "/client/mega.png",
    "/client/mp.jpg",
    "/client/praj.png",
    "/client/tata.jpg",
  ];

  const renderRow = (reverse: boolean) => (
    <Swiper
      modules={[Autoplay, FreeMode]}
      spaceBetween={20}
      slidesPerView={2}
      loop={true}
      freeMode={{
        enabled: true,
        momentum: false, // stops sudden pauses
      }}
      autoplay={{
        delay: 0, // no delay (continuous scroll)
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        reverseDirection: reverse,
      }}
      speed={6000} // higher speed = smoother continuous scroll
      allowTouchMove={false} // disable manual swipe for smooth autoplay
      breakpoints={{
        320: { slidesPerView: 2, spaceBetween: 10 },
        640: { slidesPerView: 3, spaceBetween: 15 },
        768: { slidesPerView: 4, spaceBetween: 15 },
        1024: { slidesPerView: 6, spaceBetween: 20 },
      }}
    >
      {images.map((src, i) => (
        <SwiperSlide key={i}>
          <div className="bg-white border border-gray-200 shadow-sm rounded-lg flex items-center justify-center h-35 w-full p-2">
            <img
              src={src}
              alt={`Brand ${i + 1}`}
              className="h-20 w-full object-contain md:h-28"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <section className="md:py-12 bg-white">
      <h2 className="text-3xl md:text-3xl font-bold text-center text-[#000080] mb-8">
        Meet Our Clients
      </h2>
      <div className="space-y-4">
        {renderRow(false)}
        {renderRow(true)}
      </div>
    </section>
  );
}
