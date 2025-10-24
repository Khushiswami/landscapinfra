// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import Image from "next/image";
// import { ArrowLeft, ArrowRight } from "lucide-react";

// const projects = [
//   { title: "Parliament Building", image: "/realstate/slider.webp" },
//   { title: "Metro Tunnel", image: "/realstate/silder1.webp" },
//   { title: "Construction Site", image: "/realstate/slider2.webp" },
//   { title: "Highway Project", image: "/realstate/slider3.webp" },
//   { title: "Mumbai Trans Harbour Link", image: "/realstate/slider.webp" },
// ];

// export default function LandmarkProjects() {
//   return (
//     <section className="bg-gray-100 py-12 md:pl-25">
//       <div className=" ml-auto pr-6 pl-6 md:pr-0 md:pl-0">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-8">
//           <h2 className="text-2xl md:text-3xl font-bold text-[#000080]">
//             Landmark Projects
//           </h2>
//           <a
//             href="#"
//             className="text-[#000080] font-medium flex items-center gap-2 hover:underline"
//           >
//             Explore Projects →
//           </a>
//         </div>

//         {/* Swiper */}
//         <div className="relative">
//           <Swiper
//             modules={[Navigation, Autoplay]}
//             navigation={{
//               nextEl: ".custom-next",
//               prevEl: ".custom-prev",
//             }}
//             autoplay={{
//               delay: 2500,
//               disableOnInteraction: false,
//             }}
//             loop={true}
//             spaceBetween={20}
//             slidesPerView={1}
//             breakpoints={{
//               640: { slidesPerView: 2, spaceBetween: 15 },
//               1024: { slidesPerView: 4, spaceBetween: 20 },
//             }}
//             className="pb-10"
//           >
//             {projects.map((project, i) => (
//               <SwiperSlide key={i}>
//                 <div className="relative group  overflow-hidden shadow-md">
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     width={400}
//                     height={500}
//                     className="w-full h-[370px] object-cover"
//                   />

//                   {/* Hover Overlay */}
//                   <div className="absolute inset-0 bg-blue-900/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                     <div className="absolute inset-6 border border-white opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500 ease-in-out"></div>
//                     <p className="text-white text-lg font-semibold text-center px-2 break-words opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                       {project.title}
//                     </p>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Navigation Buttons */}
//           <button className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded z-10">
//             <ArrowLeft className="text-blue-700" />
//           </button>
//           <button className="custom-next absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded z-10">
//             <ArrowRight className="text-blue-700" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const projects = [
  { title: "Parliament Building", image: "/realstate/slider.webp" },
  { title: "Metro Tunnel", image: "/realstate/silder1.webp" },
  { title: "Construction Site", image: "/realstate/slider2.webp" },
  { title: "Highway Project", image: "/realstate/slider3.webp" },
  { title: "Mumbai Trans Harbour Link", image: "/realstate/slider.webp" },
];

export default function LandmarkProjects() {
  return (
    <section className="bg-gray-100 py-12 md:pl-25">
      <div className="ml-auto pr-6 pl-6 md:pr-0 md:pl-0">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#000080]">
            Landmark Projects
          </h2>

          {/* Desktop Explore Button */}
          <a
            href="#"
            className="hidden md:flex text-[#000080] font-medium items-center gap-2 underline"
          >
            Explore Projects →
          </a>
        </div>

        {/* Swiper */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1} // full width on mobile
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 15 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
            }}
            className="pb-10"
          >
            {projects.map((project, i) => (
              <SwiperSlide key={i}>
                <div className="relative group overflow-hidden shadow-md">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={500}
                    className="w-full h-[370px] object-cover"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-blue-900/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-6 border border-white opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500 ease-in-out"></div>
                    <p className="text-white text-lg font-semibold text-center px-2 break-words opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {project.title}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded z-10">
            <ArrowLeft className="text-blue-700" />
          </button>
          <button className="custom-next absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded z-10">
            <ArrowRight className="text-blue-700" />
          </button>
        </div>

        {/* Mobile Explore Button below slider */}
        <div className="flex justify-center mt-6 md:hidden">
          <a
            href="#"
            className="text-[#000080] font-medium flex items-center gap-2 hover:underline"
          >
            Explore Projects →
          </a>
        </div>
      </div>
    </section>
  );
}
