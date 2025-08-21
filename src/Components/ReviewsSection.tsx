"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { AiFillStar } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    img: "/slider/image_9.webp",
    text: `"I purchased my building in September of 2012, and had it delivered by December 2012. I bought a 3000 sq..."`,
    name: "Jim F.",
    location: "Hockley, Texas",
  },
  {
    img: "/slider/image_10.webp",
    text: `"I am very satisfied and would use Armstrong again as the end result was a good building. Thanks to the..."`,
    name: "Derek L.",
    location: "Woolwich, Maine",
  },
  {
    img: "/slider/image_11.webp",
    text: `"As I began searching for a steel barn, there was one company in particular that went out of their way..."`,
    name: "Jean S.",
    location: "Houlton, Wisconsin",
  },
  {
    img: "/slider/image_12.webp",
    text: `"We initially sent a building deposit to a well-known steel building company in Denver who we later learned had an..."`,
    name: "Loris Z.",
    location: "Denver, Colorado",
  },
  {
    img: "/slider/image_13.webp",
    text: `"The quality of my Armstrong Building was excellent. The builder I used had not put up a pre-cut building before..."`,
    name: "Karla M.",
    location: "Plainview, Texas",
  },
  {
    img: "/slider/image_14.webp",
    text: `"Timing was an extremely important factor for us and we knew no one in America could get a steel building..."`,
    name: "Adam J.",
    location: "Waco, Texas",
  },
  {
    img: "/slider/image_15.webp",
    text: `"Timing was an extremely important factor for us and we knew no one in America could get a steel building..."`,
    name: "Adam J.",
    location: "Waco, Texas",
  },
  {
    img: "/slider/image_16.webp",
    text: `"Timing was an extremely important factor for us and we knew no one in America could get a steel building..."`,
    name: "Adam J.",
    location: "Waco, Texas",
  },
  {
    img: "/slider/image_9.webp",
    text: `"Timing was an extremely important factor for us and we knew no one in America could get a steel building..."`,
    name: "Adam J.",
    location: "Waco, Texas",
  },
  {
    img: "/slider/washington-steel-building-3.webp",
    text: `"Timing was an extremely important factor for us and we knew no one in America could get a steel building..."`,
    name: "Adam J.",
    location: "Waco, Texas",
  },
];

export default function ReviewsSection() {
  return (
    <section className="bg-white text-white py-16 px-4 relative">
      {/* Blue Top Section */}
      <div className="bg-[#0B1444] text-white min-h-[550px] px-4 relative z-10 flex flex-col items-center">
        {/* content stays at top */}
        <div className="flex flex-col items-center text-center mt-10">
          <h2 className="text-4xl font-bold mb-8">
            See why we’re rated <span className="italic text-blue-500">(almost)</span> 5-stars!
          </h2>

          <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-center gap-24">
            {/* Left: Heading */}
            <div className="text-center lg:text-left">
              <p className="mt-2 text-yellow-400 text-2xl font-semibold">
                7,462,865 customers
              </p>
              <p className="text-white mt-1">just like you have connected with us online!</p>
            </div>

            {/* Middle: Stars & Rating */}
            <div className="flex flex-col items-center mt-4 lg:mt-0">
              <div className="flex space-x-1 mb-1">
                {Array(5).fill(0).map((_, i) => (
                  <AiFillStar key={i} className="w-8 h-8 text-yellow-400" />
                ))}
              </div>
              <p className="font-bold text-2xl">4.9 out of 5</p>
            </div>

            {/* Right: Buttons */}
            <div className="flex flex-col items-center mt-4 lg:mt-0 space-y-2">
              <button className="border border-white text-white px-20 py-4 rounded-full hover:bg-white hover:text-[#0B1444] transition">
                Read our reviews
              </button>
              <a href="#" className="text-white text-sm ">
                Browse Customer Stories
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Overlapping Blue Section */}
      <div className="max-w-8xl mx-auto relative -mt-40 z-20 px-4">
     {/* Slider Overlapping Blue Section */}
<div className="max-w-8xl mx-auto relative -mt-64 z-20 px-4">
  <Swiper
    modules={[Autoplay, Pagination]}
    spaceBetween={30}
    slidesPerView={1}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    pagination={{ clickable: true }}
    breakpoints={{
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 4 },
    }}
  >
    {reviews.map((review, idx) => (
      <SwiperSlide key={idx}>
        <div className="bg-white text-gray-800 shadow-lg overflow-hidden">
          <div className="h-48 relative">
            <Image
              src={review.img}
              alt={review.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex mb-2">
              {Array(5).fill(0).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm mb-4">{review.text}</p>
            <p className="font-semibold">{review.name}</p>
            <p className="text-gray-500 text-xs">{review.location}</p>
            <span className="mt-2 inline-block bg-blue-900 text-white px-2 py-1 rounded text-xs">
              Verified Customer
            </span>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

      </div>
    </section>
  );
}
