"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    title: " Offsite manufacturing",
    desc: (
      <>
        <strong>
        we have invested Modern New technology Machines to create the Landsking Infra Centre 
of Excellence for Modern Construction in India.
        </strong>{" "}
         We Believe in New techupdated   Machineries and  In the future, 
it will produce lower carbon products for more of our projects.
      </>
    ),
  },
  {
    title: "Digital engineering",
    desc: (
      <>
        <strong>
           thanks to our digital engineers, we build every project twice – 
        </strong>{" "}
        virtually and then physically. 
This allows us to de-risk both the design and construction phases of projects, and once we are on site our digital 
work packs link models to construction activity to improve productivity.
      </>
    ),
  },
  {
    title: " Direct delivery ",
    desc: (
      <>
        <strong>
           unlike our competitors in the India we have an integrated supply chain. 
        </strong>{" "}
       This gives us greater 
visibility of costs, maximizes integration across disciplines
 and minimizes risk through the delivery process. We 
retain the knowledge learned on a project and use it to deliver certainty for our next client
      </>
    ),
  },
    {
    title: " Offsite manufacturing",
    desc: (
      <>
        <strong>
        we have invested Modern New technology Machines to create the Landsking Infra Centre 
of Excellence for Modern Construction in India.
        </strong>{" "}
         We Believe in New techupdated   Machineries and  In the future, 
it will produce lower carbon products for more of our projects.
      </>
    ),
  },
//   {
//     title: "Construction",
//     desc: (
//       <>
//         <strong>
//           We provide end-to-end construction services with strong project
//           management.
//         </strong>{" "}
//         Ensuring safety, quality, and timely delivery for every client.
//       </>
//     ),
//   },
//   {
//     title: "Sustainability",
//     desc: (
//       <>
//         <strong>
//           Focused on green building solutions and eco-friendly practices.
//         </strong>{" "}
//         Delivering projects with minimal environmental impact.
//       </>
//     ),
//   },
];

export default function ServicesSlider() {
  return (
    <section className="bg-[#d9d9d9] py-28"> 
      <div className="mx-auto px-6 flex flex-col md:flex-row gap-10">
        {/* Left side text */}
        <div className="w-full md:w-2/6">
          <h2 className="text-3xl md:text-6xl font-bold text-[#000080] mb-6">
            Services and delivery methods
          </h2>
          <p className="text-gray-700 text-md mb-12">
             We deliver certainty for our clients based on an operating model that harnesses new technologies to 
maximise the use of pioneering modern methods of construction.
          </p>
          {/* Swiper Navigation buttons */}
          <div className="flex gap-4">
            <button className="custom-prev border border-[#000080] text-[#000080] p-3 rounded hover:bg-blue-50">
              <ChevronLeft />
            </button>
            <button className="custom-next border border-[#000080] text-[#000080] p-3 rounded hover:bg-blue-50">
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="w-full md:w-4/6">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            spaceBetween={0}
            breakpoints={{
              0: { slidesPerView: 1 }, 
              768: { slidesPerView: 3 }, 
            }}
          >
            {services.map((item, i) => (
             <SwiperSlide key={i} className="h-full">
  <div className="py-10 px-6 bg-[#f2f2f2] border-x border-gray-300 h-full flex flex-col">
    <h3 className="text-xl md:text-3xl font-bold mb-3">{item.title}</h3>
    <p className="text-black text-md flex-1">{item.desc}</p>
  </div>
</SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
