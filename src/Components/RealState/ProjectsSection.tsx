"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

const projects = [
  { id: 1, title: "Rejuve 360", status: "Ongoing", image: "/realstate/three.webp", location: "Mulund, Mumbai" },
  { id: 2, title: "West Square", status: "Ongoing", image: "/realstate/two.jpg", location: "Seawoods, Navi Mumbai" },
  { id: 3, title: "Veridian", status: "Completed", image: "/realstate/one.webp", location: "Powai, Mumbai" },
];

export default function ProjectsSection() {
  return (
    <section className="w-full py-16 bg-white relative">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-10">
        DISCOVER OUR PROJECTS
      </h2>

      <div className="max-w-6xl mx-auto px-4 relative">
        <Swiper
          modules={[Navigation]}          // ✅ directly use modules prop
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-blue-900">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4">({project.status})</p>

                <div className="relative w-full h-64">
                  <Image src={project.image} alt={project.title} fill className="object-cover rounded-lg" />
                  <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-blue-900 font-semibold px-4 py-2 border-2 border-blue-900 hover:bg-blue-900 hover:text-white transition">
                    KNOW MORE
                  </button>
                </div>

                <p className="text-gray-700 mt-3">{project.location}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        <div className="custom-prev absolute -left-10 top-1/2 -translate-y-1/2 z-20 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="#1c398e" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </div>
        <div className="custom-next absolute -right-10 top-1/2 -translate-y-1/2 z-20 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="#1c398e" viewBox="0 0 24 24">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </div>
      </div>
    </section>
  );
}
