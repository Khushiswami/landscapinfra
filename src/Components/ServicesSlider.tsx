
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    title: "Project programming services",
    desc: (
      <>
        We fast-track project success by comparing your plan against thousands of similar projects. This information allows us to build a budget and plan that fits your needs, translates easily into design, and reduces costly rework.
        By leveraging proven insights, we help you make informed decisions quickly, ensuring your project stays on time and on budget.
      </>
    ),
  },
  {
    title: "Design management",
    desc: (
      <>
        The earlier we get involved, the better the outcome—and design is where it all begins. Using tried and true methods like integrated project delivery and design-build, we operate at a higher level and deliver a streamlined, stress-free process with your goals as our guide.
      </>
    ),
  },
  {
    title: "Engineering services",
    desc: (
      <>
        Our engineers are prepared to come up with creative solutions and lead design-build efforts for complex projects. By working with our construction teams, we are uniquely empowered to offer innovative solutions.
      </>
    ),
  },
  {
    title: "Offsite manufacturing",
    desc: (
      <>
        Our engineers are prepared to come up with creative solutions and lead design-build efforts for complex projects. By working with our construction teams, we are uniquely empowered to offer innovative solutions.

        We have invested in modern machines to create the Landsking Infra Centre of Excellence for Modern Construction in India. We believe in new tech-updated machinery that will produce lower carbon products for future projects.
      </>
    ),
  },
  {
  title: "Modern Offsite Manufacturing",
  desc: (
    <>
      Revolutionizing construction with precision-engineered components, our offsite manufacturing facilities combine advanced machinery with sustainable practices.  
      This approach reduces onsite construction time, minimizes waste, and ensures consistent quality for every project.  

      By leveraging technology and innovation, we deliver faster, smarter, and eco-friendly solutions tailored to your project needs.
    </>
  ),
}

];

export default function ServicesSlider() {
  return (
    <section className="bg-[#E8ECEC] md:py-28 py-10 overflow-x-hidden md:px-12">
      <div className="mx-auto px-6 flex flex-col md:flex-row gap-8 md:gap-10 relative md:border-t md:border-b border-gray-300">
        {/* Left Side Text */}
 <div className="w-full md:w-2/6 md:border-r md:border-gray-300">
          <h2 className="text-4xl md:text-5xl pt-15 font-bold text-[#000080] mb-4 md:mb-6">
            Services and delivery methods
          </h2>
          <p className="text-gray-700 text-md mb-4 md:mb-12">
            In the intricate world of construction, your project deserves a general contractor with the flexibility and expertise to make your dreams a reality.
          </p>
          {/* Desktop Arrows */}
        <div className="hidden md:flex gap-4">
  <button
    className="custom-prev border border-[#000080] text-[#000080] p-3 
               transition-all duration-300 ease-in-out
               hover:bg-blue-50 hover:text-black hover:scale-110"
  >
    <ChevronLeft />
  </button>
  <button
    className="custom-next border border-[#000080] text-[#000080] p-3 
               transition-all duration-300 ease-in-out
               hover:bg-blue-50 hover:text-black hover:scale-110"
  >
    <ChevronRight />
  </button>
</div>

        </div>

        {/* Right Side Swiper */}
        <div className="w-full md:w-4/6 relative overflow-hidden">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            spaceBetween={20}
            slidesPerView="auto"
            centeredSlides={false}
            className="overflow-visible"
          >
            {services.map((item, i) => (
              <SwiperSlide
                key={i}
                className={`!w-[300px] md:!w-[340px] overflow-visible ${
                  i === services.length - 1 ? "mr-8 md:mr-12" : ""
                }`}
              >
                <div
  className={`
    group 
    py-8 px-2 md:py-15 px-2 
    bg-[#E8ECEC] 
    md:border-gray-300
    md:border-r
    h-full flex flex-col 
    transition-colors duration-300 
    hover:bg-white
  `}
>

                  <h3 className="text-2xl md:text-3xl text-[#000080] font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#000] text-md flex-1">{item.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Mobile Arrows */}
          <div className="flex gap-4 justify-between mt-0 md:hidden px-2">
            <button
    className="custom-prev border border-[#000080] text-[#000080] p-3 
               transition-all duration-300 ease-in-out
               hover:bg-blue-50 hover:text-black hover:scale-110"
  >
    <ChevronLeft />
  </button>
  <button
    className="custom-next border border-[#000080] text-[#000080] p-3 
               transition-all duration-300 ease-in-out
               hover:bg-blue-50 hover:text-black hover:scale-110"
  >
    <ChevronRight />
  </button>

          </div>
         
        </div>
      </div>
    </section>
  );
}
