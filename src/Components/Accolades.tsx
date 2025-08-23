"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

type Card = {
  id: number;
  title: string;
  desc: string;
};

const cards: Card[] = [
  {
    id: 1,
    title: "Best Organizations for Women 2022",
    desc: "Brigade Group was recognised as one of the Best Organizations for Women by The Economic Times.",
  },
  {
    id: 2,
    title: "Idea Video/TVC Campaign of the Year 2022",
    desc: '"We Make Room" campaign won at the Realty+ Indian Digital Excellence Awards.',
  },
  {
    id: 3,
    title: "Pradhan Mantri Awas Yojana Award",
    desc: "Brigade El Dorado won for affordable housing projects at PMAY - Empowering India Awards 2022.",
  },
  {
    id: 4,
    title: "Sustainability Champion 2022",
    desc: "Awarded for outstanding commitment towards sustainable and eco-friendly construction practices.",
  },
  {
    id: 5,
    title: "Customer Experience Excellence Award",
    desc: "Recognised for delivering best-in-class customer experience across projects in 2022.",
  },
];

export default function Accolades() {
  return (
    <div className="max-w-[1400px] mx-auto py-12 px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-widest text-gray-500">
          Our Accolades
        </p>
        <div className="w-16 h-1 bg-[#000080] mx-auto mt-3 rounded-full" />
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        spaceBetween={24}
        slidesPerView={1}
        autoHeight={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="bg-white rounded-xl shadow-lg p-8 h-[250px] sm:h-[300px] flex flex-col justify-start">
              {/* Icon */}
              <div className="mb-4">
                <span className="inline-block text-yellow-500 text-3xl">⭐</span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm">{card.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 sm:gap-6 mt-8">
        <button className="custom-prev bg-[#000080] rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white text-lg hover:bg-[#0000a0] transition-colors">
          ‹
        </button>
        <button className="custom-next bg-[#000080] rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white text-lg hover:bg-[#0000a0] transition-colors">
          ›
        </button>
      </div>
    </div>
  );
}
