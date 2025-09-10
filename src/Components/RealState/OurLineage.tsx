"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

const projects = [
  {
    id: 1,
    title: "World's LONGEST cross country conveyor, India-Bangladesh",
    image: "/realstate/three.webp",
  },
  {
    id: 2,
    title: "World's most iconic places of worship, Delhi",
    image: "/realstate/two.jpg",
  },
  {
    id: 3,
    title: "World's largest PPP in the metro sector, Hyderabad",
    image: "/realstate/one.webp",
  },
  {
    id: 4,
    title: "Mega real estate township project",
    image: "/realstate/fourS.webp",
  },
  {
    id: 5,
    title: "Sustainable smart city initiative",
    image: "/realstate/fiveS.webp",
  },
];

export default function OurLineage() {
  return (
    <section className="text-center px-4 sm:px-6 md:px-20 pt-12 md:pt-16 bg-white">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-black tracking-wide text-blue-900 uppercase mb-6 md:mb-8">
        Our Lineage
      </h2>

      {/* Paragraph */}
      <p className="text-sm sm:text-base md:text-lg text-blue-800 leading-relaxed max-w-6xl mx-auto mb-8 md:mb-10 text-justify md:text-center">
        Landscap Infra is a trusted name in the field of infrastructure, real
        estate and urban development. With years of expertise and a
        forward-looking vision, we have consistently delivered projects that
        combine innovation, quality and sustainability. Our presence spans
        across key sectors such as residential developments, commercial spaces,
        infrastructure projects, and green initiatives that contribute to
        shaping modern communities.
        <br />
        <br />
        Guided by strong values, professional excellence and a commitment to
        customer satisfaction, Landscap Infra continues to create landmarks that
        redefine city skylines and improve quality of life. Our legacy is built
        on trust, long-term relationships and a passion for building the future
        responsibly.
      </p>

      {/* Button */}
      <button className="relative inline-flex items-center border-2 border-blue-700 text-blue-700 font-semibold px-4 sm:px-6 py-2 text-sm sm:text-base hover:bg-blue-700 hover:text-white transition-colors duration-300 group mb-8">
        Know More
        <span className="ml-2 text-yellow-500 text-lg sm:text-xl transform transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </button>

      {/* Projects Slider */}
      <section className="w-full py-8 md:pt-16 bg-white relative">
        <div className="max-w-6xl mx-auto px-2 sm:px-4 relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="text-center">
                  <div className="relative w-full h-48 sm:h-56 md:h-64 flex justify-center">
                    <div className="relative w-[85%] sm:w-[90%] md:w-full h-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 mt-2 md:mt-3 px-2">
                    {project.title}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="custom-prev absolute -left-4 sm:-left-6 md:-left-10 top-1/2 -translate-y-1/2 z-20 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12"
              fill="#1c398e"
              viewBox="0 0 24 24"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </div>
          <div className="custom-next absolute -right-4 sm:-right-6 md:-right-10 top-1/2 -translate-y-1/2 z-20 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12"
              fill="#1c398e"
              viewBox="0 0 24 24"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </div>
        </div>
      </section>
    </section>
  );
}
