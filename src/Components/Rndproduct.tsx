// components/ExploreSection.tsx
"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const exploreItems = [
  {
    title: "Fluids",
    subtitle: "Computational Fluids Dynamics Software",
    description:
      "CFD Fluids simulates fluid dynamics, enhancing engineering solutions for optimized performance.",
    image: "/industry.jpg",
  },
  {
    title: "Electronics",
    subtitle: "Multiphysics Analysis Solutions for Chips and 3D IC",
    description:
      "Create reliable and efficient designs with production-proven multiphysics analysis.",
    image: "/industry.jpg",
  },
  {
    title: "Structures",
    subtitle: "Structural Analysis & Simulation Software",
    description:
      "Ansys Structures provides robust structural analysis for engineering precision and durability.",
    image: "/industry.jpg",
  },
  {
    title: "Semiconductors",
    subtitle: "Semiconductor Design Software",
    description:
      "Semiconductor solutions to analyze, optimize, and reduce design risks.",
    image: "/industry.jpg",
  },
  {
    title: "Materials",
    subtitle: "Material Intelligence Software",
    description:
      "Accelerate innovation with trusted material data and modeling capabilities.",
    image: "/industry.jpg",
  },
  {
    title: "Systems",
    subtitle: "Systems Engineering & Simulation",
    description:
      "Optimize complex system designs with integrated simulation tools.",
    image: "/industry.jpg",
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

  const visibleItems = exploreItems.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="bg-black py-12 px-6 md:px-12 relative">
      <h2 className="text-white text-3xl md:text-4xl font-bold mb-10 text-center">
        Explore Ansys Possibilities
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
              alt={item.title}
              width={500}
              height={600}
              className="object-cover w-full h-[400px] transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-yellow-400 font-semibold text-lg">
                {item.title}
              </h3>
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
