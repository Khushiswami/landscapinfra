"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    title: "Offsite manufacturing",
    desc: (
      <>
        <strong>
          We have invested in modern machines to create the Landsking Infra Centre of Excellence for Modern Construction in India.
        </strong>{" "}
        We believe in new tech-updated machinery that will produce lower carbon products for future projects.
      </>
    ),
  },
  {
    title: "Digital engineering",
    desc: (
      <>
        <strong>
          Thanks to our digital engineers, we build every project twice –
        </strong>{" "}
        virtually and then physically. This de-risks both design and construction phases and improves productivity on-site.
      </>
    ),
  },
  {
    title: "Direct delivery",
    desc: (
      <>
        <strong>
          Unlike our competitors in India, we have an integrated supply chain.
        </strong>{" "}
        This gives us better cost visibility, maximizes integration across disciplines, and minimizes risk.
      </>
    ),
  },
  {
    title: "Offsite manufacturing",
    desc: (
      <>
        <strong>
          We have invested in modern machines to create the Landsking Infra Centre of Excellence for Modern Construction in India.
        </strong>{" "}
        We believe in new tech-updated machinery that will produce lower carbon products for future projects.
      </>
    ),
  },
];

export default function ServicesSlider() {
  return (
    <section className="bg-[#d9d9d9] md:py-28 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-8 md:gap-10">
        {/* Left side text */}
        <div className="w-full md:w-2/6">
          <h2 className="text-3xl md:text-6xl font-bold text-[#000080] mb-4 md:mb-6">
            Services and delivery methods
          </h2>
          <p className="text-gray-700 text-md mb-4 md:mb-12">
            We deliver certainty for our clients based on an operating model that harnesses new technologies to maximise the use of pioneering modern methods of construction.
          </p>
          {/* Desktop arrows */}
          <div className="hidden md:flex gap-4">
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
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 3 },
            }}
          >
            {services.map((item, i) => (
              <SwiperSlide key={i} className="h-full">
                <div className="py-8 md:py-10 px-6 bg-[#d9d9d9] border-x border-gray-300 h-full flex flex-col">
                  <h3 className="text-xl md:text-3xl text-[#000080] font-bold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-black text-md flex-1">{item.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Mobile arrows below slider */}
          <div className="flex gap-4 justify-center mt-4 md:hidden">
            <button className="custom-prev border border-[#000080] text-[#000080] p-3 rounded hover:bg-blue-50">
              <ChevronLeft />
            </button>
            <button className="custom-next border border-[#000080] text-[#000080] p-3 rounded hover:bg-blue-50">
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
