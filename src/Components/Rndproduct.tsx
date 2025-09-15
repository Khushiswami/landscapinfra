// components/ExploreSection.tsx
"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const exploreItems = [
  {
    subtitle: "Mechanical Engineering Design",
    description:
      "From custom machinery to piping layouts, we bring concepts to life with cutting-edge CAD/CAM tools. Ever wondered how Indian industries keep scaling with precision? The answer lies in smart engineering like this.",
    image: "/rndimages/semiconductor.jpg",
  },
  {
    subtitle: "Civil Engineering Design",
    description:
      "Safe, sustainable, and future-ready—our civil designs balance strength with environmental care. From Indore’s growing roads to India s urban skylines, structural integrity is not just a choice, it s a necessity.",
    image: "/rndimages/Material Intelligence.jpg",
  },
  {
    subtitle: "CAE Simulation Services",
    description:
      "Why wait for failures when you can predict them early? With FEA, CFD, and advanced simulations, we help Indian manufacturers optimize products, cut costs, and stay ahead in a competitive market.",
    image: "/rndimages/systems engineering software.jpg",
  },
];

export default function ExploreSection() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev - itemsPerPage < 0
        ? exploreItems.length - itemsPerPage
        : prev - itemsPerPage
    );
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + itemsPerPage >= exploreItems.length ? 0 : prev + itemsPerPage
    );
  };

  const visibleItems = exploreItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section className="bg-black py-12 px-6 md:px-12 relative">
      <h2 className="text-white text-3xl md:text-4xl font-bold mb-10 text-center">
        Explore Services
      </h2>

      {/* Cards row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto mb-6">
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden group cursor-pointer"
          >
            <Image
              src={item.image}
              alt={item.subtitle}
              width={500}
              height={600}
              className="object-cover w-full h-[400px] transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
              <h4 className="text-white font-bold text-xl mb-2">
                {item.subtitle}
              </h4>
              <p className="text-gray-300 text-sm mb-3">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Prev/Next buttons row */}
      {/* Prev/Next buttons row */}
      <div className="flex justify-center gap-6">
        <button
          onClick={handlePrev}
          className="bg-black/60 hover:bg-black/80 p-3 rounded-full border-2 border-white shadow-lg transition-colors duration-300"
        >
          <ChevronLeft className="text-white" size={28} />
        </button>

        <button
          onClick={handleNext}
          className="bg-black/60 hover:bg-black/80 p-3 rounded-full border-2 border-white shadow-lg transition-colors duration-300"
        >
          <ChevronRight className="text-white" size={28} />
        </button>
      </div>
    </section>
  );
}
