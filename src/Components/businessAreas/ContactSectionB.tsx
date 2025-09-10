"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface Testimonial {
  name: string;
  location: string;
  img: string;
  text: string;
  quoteLink?: string;
}

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  bgImage?: string;
  testimonials?: Testimonial[];
}

export default function ContactSectionB({
  title = "Landsking Infra Pvt Ltd",
  subtitle = "Get in touch with us – we are always ready to help with your project.",
  description = "Whether you need a basic or elaborate steel building, we will ensure your project is designed, manufactured, and delivered on time.",
  buttonText = "Contact Us",
  buttonLink = "/contact",
  bgImage = "/product/s3.jpg",
  testimonials = [],
}: ContactSectionProps) {
  return (
    <div className="relative text-white pt-6 ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg font-semibold text-white mb-3">{subtitle}</p>
          <div className="h-1 w-full bg-yellow-500 mb-4"></div>
          <p className="mb-6 text-gray-200">{description}</p>

          <a href={buttonLink}>
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-bold flex items-center gap-3 hover:bg-yellow-400 transition">
              {buttonText}
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="white"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
          </a>
        </div>

        {/* Right Slider */}
        <div className="relative hidden md:block">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 4000 }}
            loop
            className="rounded-2xl overflow-hidden"
          >
            {testimonials.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="grid grid-cols-1 md:grid-cols-2 bg-black/50 text-white rounded-2xl overflow-hidden relative h-[320px]">
                  {/* Left Image */}
                  <div className="relative h-full">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover opacity-90"
                    />
                  </div>

                  {/* Right Content */}
                  <div className="p-6 flex flex-col justify-center h-full">
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-200 mb-2">
                      {item.location}
                    </p>
                    <span className="text-yellow-400 text-sm font-semibold mb-3">
                      ★ Verified Customer
                    </span>
                    <p className="italic text-gray-100 mb-4 line-clamp-4">
                      “{item.text}”
                    </p>
                    <a
                      href={item.quoteLink || "/quote"}
                      className="text-sm font-semibold text-yellow-400 hover:underline"
                    >
                      Get A Quote →
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}