// components/ExploreSection.tsx
"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const exploreItems = [
  {
    title: "Semiconductors 💡",
    subtitle: "Smart Design for the Brain of Technology",
    description:
      "Advanced semiconductor tools act like a strategist for microchips—analyzing, optimizing, and reducing risks so integrated circuits perform with precision and power.",
    image: "/industry.jpg",
  },
  {
    title: "Materials 🔬",
    subtitle: "Material Intelligence: The DNA of Innovation",
    description:
      "Material platforms unlock the hidden properties of metals, polymers, and composites, giving engineers the data and models they need to build stronger, smarter products.",
    image: "/industry.jpg",
  },
  {
    title: "Systems ⚙️",
    subtitle: "Engineering Harmony in Complex Systems",
    description:
      "Like a conductor guiding an orchestra, systems engineering software ensures every mechanical, digital, and electronic component works in sync—delivering efficiency before the first prototype is built.",
    image: "/industry.jpg",
  },
  {
    title: "Fluids 🌊",
    subtitle: "Mastering the Invisible Language of Flow",
    description:
      "CFD software turns the unseen movements of air and liquids into precise insights, helping engineers refine designs for better aerodynamics, cooling, and performance.",
    image: "/industry.jpg",
  },
  {
    title: "Electronics ⚡",
    subtitle: "Reliable Electronics Through Multiphysics Precision",
    description:
      "Chips and 3D ICs behave like ecosystems where heat, electricity, and mechanics collide. Multiphysics tools reveal these interactions, ensuring efficient and resilient designs.",
    image: "/industry.jpg",
  },
  {
    title: "Structures 🏗️",
    subtitle: "Strength You Can Simulate Before You Build",
    description:
      "Structural analysis software predicts how bridges, towers, and machines will endure stress and strain, giving engineers the confidence to design for safety and durability.",
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
