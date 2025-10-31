"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Project programming services",
    desc: (
      <>
        <p className="font-medium">
          <span className="font-extrabold  ">
            We fast-track project success by comparing your plan against
            thousands of similar projects.
          </span>
          This information allows us to build a budget and plan that fits your
          needs, translates easily into design, and reduces costly rework. By
          leveraging proven insights, we help you make informed decisions
          quickly, ensuring your project stays on time and on budget.
        </p>
      </>
    ),
  },
  {
    title: "Design management",
    desc: (
      <>
        <p className="font-medium">
          <span className="font-extrabold block ">
            The earlier we get involved, the better the outcome—and design is
            where it all begins.
          </span>
          Using tried and true methods like integrated project delivery and
          design-build, we operate at a higher level and deliver a streamlined,
          stress-free process with your goals as our guide.
        </p>{" "}
      </>
    ),
  },
  {
    title: "Engineering services",
    desc: (
      <>
        <p className="font-medium">
          <span className="font-extrabold block ">
            Our engineers are prepared to come up with creative solutions and
            lead design-build efforts for complex projects.
          </span>
          By working with our construction teams, we are uniquely empowered to
          offer innovative solutions.
        </p>{" "}
      </>
    ),
  },
  {
    title: "Offsite manufacturing",
    desc: (
      <>
        <p className="font-medium">
          <span className="font-extrabold block ">
            Our engineers are prepared to come up with creative solutions and
            lead design-build efforts for complex projects.
          </span>
          We have invested in modern machines to create the Landsking Infra
          Centre of Excellence for Modern Construction in India. We believe in
          new tech-updated machinery that will produce lower carbon products for
          future projects.
        </p>
      </>
    ),
  },
  {
    title: "Modern Offsite Manufacturing",
    desc: (
      <>
        <p className="font-medium">
          <span className="font-extrabold block ">
            Revolutionizing construction with precision-engineered components,
            our offsite manufacturing facilities combine advanced machinery with
            sustainable practices.
          </span>
          This approach reduces onsite construction time, minimizes waste, and
          ensures consistent quality for every project. By leveraging technology
          and innovation, we deliver faster, smarter, and eco-friendly solutions
          tailored to your project needs.
        </p>
      </>
    ),
  },
];

export default function ServicesSlider() {
  return (
    <section className="bg-[#E8ECEC] md:py-28 py-12 overflow-x-hidden lg:px-10 px-6 font-sans">
      <div className="mx-auto flex flex-col md:flex-row relative md:border-t md:border-b border-gray-300">
        {/* Left Side Text */}
        <div className="w-full md:w-2/6 md:border-r md:border-gray-300 lg:pr-10 lg:pl-17">
          <h2 className="text-[#000080] text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 md:mt-15">
            Services
          </h2>
          <p className="text-[#000080] text-lg md:text-2xl leading-relaxed mb-12 max-w-md">
            In the intricate world of construction, your project deserves a
            general contractor with the flexibility and expertise to make your
            dreams a reality.
          </p>

          {/* Desktop Arrows */}
          <div className="hidden md:flex gap-4 mt-6">
            <button
              className="custom-prev border border-[#000080] text-[#000080] p-3 rounded-sm
               transition-all duration-300 ease-in-out hover:bg-blue-50 hover:text-black hover:scale-105"
            >
              <ArrowLeft size={38} />
            </button>
            <button
              className="custom-next border border-[#000080] text-[#000080] p-3 rounded-sm
               transition-all duration-300 ease-in-out hover:bg-blue-50 hover:text-black hover:scale-105"
            >
              <ArrowRight size={38} />
            </button>
          </div>
        </div>

        {/* Right Side Swiper */}
        <div className="w-full md:w-4/6 relative overflow-hidden md:pl-4">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            spaceBetween={40}
            slidesPerView="auto"
            centeredSlides={false}
            className="overflow-visible"
          >
            {services.map((item, i) => (
              <SwiperSlide
                key={i}
                className={`!w-[300px] md:!w-[360px] overflow-visible ${
                  i === services.length - 1 ? "mr-8 md:mr-12" : ""
                }`}
              >
                <div
                  className="group bg-[#E8ECEC] md:border-gray-300 md:border-r 
                             py-10 px-4 md:py-16 md:px-6 h-full flex flex-col 
                             transition-colors duration-300 hover:bg-white"
                >
                  <h3 className="text-[#000080] text-2xl md:text-4xl font-bold mb-4 md:mt-5 ">
                    {item.title}
                  </h3>
                  <p className="text-[#000080] text-base md:text-2xl font-semibold">
                    {item.desc}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Mobile Arrows */}
          <div className="flex gap-4 justify-between mt-6 md:hidden px-2">
            <button
              className="custom-prev border border-[#000080] text-[#000080] p-3 rounded-sm
               transition-all duration-300 ease-in-out hover:bg-blue-50 hover:text-black hover:scale-105"
            >
              <ArrowLeft />
            </button>
            <button
              className="custom-next border border-[#000080] text-[#000080] p-3 rounded-sm
               transition-all duration-300 ease-in-out hover:bg-blue-50 hover:text-black hover:scale-105"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
