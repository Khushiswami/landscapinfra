"use client";
import Image from "next/image";
import { useState } from "react";

export default function CoreBusiness() {
  const coreBusinessData = [
    {
      title: "Industry Installation ",
      image: "/industry.jpg",
      description:
        "Quality Construction Project Delivery on time with customer Satisfaction",
    },
    {
      title: "Engineering and R&D Services",
      image: "/engineer.jpg",
      description:
        "Committed to advancing innovation, fairness, equity, measurement quality in assessment , learning Materials.",
    },
    {
      title: "Renewable Energy ",
      image: "/renewable.jpg",
      description:
        "Committed to providing affordable, clean and abundant power with Renewable Energy Solutions.",
    },
    {
      title: "Real Estate Development",
      image: "/realstate.png",
      description:
        "Landsking Infra's Real Estate Division specializes in unlocking high-value industrial and premium real estate deals across India's emerging growth corridors. From industrial plots, townships, mega-farmhouses",
    },
  ];

  // Track which image is zoomed out
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    // Toggle zoom for the clicked image
    setZoomedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-16 bg-white md:mx-15 lg:mx-19">
      <h2 className="text-3xl font-bold text-center text-[#000080] mb-12">
        Core Business
      </h2>
      <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {coreBusinessData.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <h3 className="mb-4 text-[15px] font-medium text-black text-center  w-full">
              {item.title}
            </h3>
            <div
              onClick={() => handleImageClick(idx)}
              className={`relative w-full h-48 sm:h-40 md:h-36 lg:h-44 xl:h-52 rounded-lg overflow-hidden shadow-md cursor-pointer
              transition-transform duration-500 ease-in-out
              ${zoomedIndex === idx ? "scale-90" : "scale-100"}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                priority={true}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
