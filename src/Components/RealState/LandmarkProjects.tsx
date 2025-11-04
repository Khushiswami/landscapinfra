// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import Image from "next/image";
// import { ArrowLeft, ArrowRight } from "lucide-react";

// const projects = [
//   {
//     title: "Industrial Real Estate & Logistics ",
//     image: "/realstate/slider.webp",
//     description:
//       " We deliver government-approved lands and built-to-suit solutions, trusted by top logistics, FMCG, and manufacturing brands. Acquire, divest, or lease industrial plots, warehouses, and logistic parks",
//   },
//   {
//     title: "Commercial & Retail",
//     image: "/realstate/silder1.webp",
//     description:
//       "Secure your presence in top commercial zones, from high-street shops to premium mall spaces. We source offices, business parks, and co-working solutions to power your corporate expansion and investments.",
//   },
//   {
//     title: "Residential Brokerage ",
//     image: "/realstate/slider2.webp",
//     description:
//       "From luxury apartments and plots to farmhouses, we simplify your dream home journey. Access exclusive developer tie-ups for new launches, pre-sales, and complete home loan/legal assistance.",
//   },
//   {
//     title: "Land & Investment Advisory",
//     image: "/realstate/slider3.webp",
//     description:
//       "Specialized advisory for land acquisition, joint ventures, and builder collaborations. We offer comprehensive investor portfolio management, backed by market research and ROI analysis to maximize your wealth.",
//   },
// ];

// export default function LandmarkProjects() {
//   return (
//     <section className="bg-gray-100 py-12 md:pl-25">
//       <div className="ml-auto pr-6 pl-6 md:pr-0 md:pl-0">
//         {/* Header */}
//         <div className="mb-8 text-center md:text-left">
//           {" "}
//           <h2 className="text-2xl md:text-3xl font-bold text-[#000080]">
//             Landmark Projects
//           </h2>
//           <p>
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
//           {/* Desktop Explore Button */}
//           <a
//             href="#"
//             className="hidden md:flex text-[#000080] font-medium items-center gap-2 underline"
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
//             slidesPerView={1} // full width on mobile
//             breakpoints={{
//               640: { slidesPerView: 2, spaceBetween: 15 },
//               1024: { slidesPerView: 4, spaceBetween: 20 },
//             }}
//             className="pb-10"
//           >
//             {projects.map((project, i) => (
//               <SwiperSlide key={i}>
//                 <div className="relative group overflow-hidden shadow-md">
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     width={400}
//                     height={500}
//                     className="w-full h-[370px] object-cover"
//                   />

//                   {/* Hover Overlay */}
//                   <div className="absolute inset-0 bg-[#000080]/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                     <div className="absolute inset-6 border border-white opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500 ease-in-out"></div>
//                     <p className="text-white text-lg font-semibold text-center px-2 break-words opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                       {project.title}
//                     </p>
//                     <p className="text-white text-md font-semibold group-hover:opacity-100 transition-opacity duration-500">
//                       {project.description}
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

//         {/* Mobile Explore Button below slider */}
//         <div className="flex justify-center mt-6 md:hidden">
//           <a
//             href="#"
//             className="text-[#000080] font-medium flex items-center gap-2 hover:underline"
//           >
//             Explore Projects →
//           </a>
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
  {
    title: "Industrial Real Estate & Logistics ",
    image: "/realstate/slider.webp",
    description:
      "We deliver government-approved lands and built-to-suit solutions, trusted by top logistics, FMCG, and manufacturing brands. Acquire, divest, or lease industrial plots, warehouses, and logistic parks.",
  },
  {
    title: "Commercial & Retail",
    image: "/realstate/silder1.webp",
    description:
      "Secure your presence in top commercial zones, from high-street shops to premium mall spaces. We source offices, business parks, and co-working solutions to power your corporate expansion and investments.",
  },
  {
    title: "Residential Brokerage ",
    image: "/realstate/slider2.webp",
    description:
      "From luxury apartments and plots to farmhouses, we simplify your dream home journey. Access exclusive developer tie-ups for new launches, pre-sales, and complete home loan/legal assistance.",
  },
  {
    title: "Land & Investment Advisory",
    image: "/realstate/slider3.webp",
    description:
      "Specialized advisory for land acquisition, joint ventures, and builder collaborations. We offer comprehensive investor portfolio management, backed by market research and ROI analysis to maximize your wealth.",
  },
];

export default function LandmarkProjects() {
  return (
    <section className="bg-gray-100 py-12 lg:pl-20 md:pl-15">
      <div className="ml-auto pr-6 pl-6 md:pr-0 md:pl-0">
        {/* ✅ Header (Stacked Layout) */}
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-center text-3xl font-bold text-[#000080] mb-10">
            Brokerage Services: Expert Transaction Management
          </h2>

          <p className="text-gray-700  text-base md:text-lg  ">
            Engaging a qualified expert is critical for any successful property
            acquisition or disposition. Our professionals are product
            specialists and local market authorities, fluent in all sectors from
            industrial to residential townships. You can rely on Landsking
            Infra's team to deploy verified data and cross-sector knowledge to
            solve complex challenges. We manage everything—sourcing,
            negotiation, and closure—with precision and legal clarity. This
            guarantees you make the most informed decision possible, turning
            challenges into opportunity.
          </p>
          {/* Desktop Explore Button */}
          {/* <div className="hidden md:flex mt-4">
            <a
              href="#"
              className="text-[#000080] font-medium items-center gap-2 underline flex"
            >
              Explore Projects →
            </a>
          </div> */}
        </div>

        {/* ✅ Swiper Slider */}
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
            slidesPerView={1}
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

                  {/* ✅ Hover Overlay */}
                  <div className=" hover:absolute inset-0 bg-[#000080]/70">
                    <div className="absolute inset-4   bg-[#000080]/70 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500 px-4">
                      <h3 className="text-white text-lg font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ✅ Navigation Buttons */}
          <button className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded z-10">
            <ArrowLeft className="text-[#000080]" />
          </button>
          <button className="custom-next absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded z-10">
            <ArrowRight className="text-[#000080]" />
          </button>
        </div>

        {/* ✅ Mobile Explore Button */}
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
