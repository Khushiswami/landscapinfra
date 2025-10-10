"use client";

import { useState } from "react";

export default function Caetabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = [
    {
      title: "Crash Analysis ",
      heading: "Crash Analysis (Dynamic Simulation)",
      paragraph:
        "Dynamic simulation is essential for testing vehicle crashworthiness and aviation safety—scenarios that are impractical to test repeatedly in the physical world. For cars, our analysis accurately models everything from passenger dummies and restraints to fuel systems and airbags, achieving near-perfect real-world validation. In aerospace, this ensures the structural resilience of aircraft under various flight conditions, including the extreme stress of an emergency landing.",
      image: "/industry.jpg",
    },
    {
      title: "Managing Noise, Vibration, Harshness",
      heading: "Managing Noise, Vibration, Harshness (NVH)",
      paragraph:
        "LandsKingInfra delivers vital Computer-Aided Engineering (CAE) insight that boosts product comfort, long-term dependability, and market perception. Our NVH service reliably pinpoints and resolves disruptive noise and vibration issues within mechanical systems. We move from initial analysis to advanced simulation to uncover the root cause of these disturbances, then develop effective strategies to reduce or eliminate them entirely.",
      image: "/industry.jpg",
    },
    {
      title: "The Power of Model-Based Definition ",
      heading: "The Power of Model-Based Definition (MBD)",
      paragraph:
        "The core purpose of Model-Based Definition (MBD) is to establish a singular, authoritative digital record utilized across the entire product lifecycle—from initial concept through production, quality control, and servicing. This unified digital stream greatly improves team collaboration, drastically cuts down on manufacturing errors caused by misread drawings, and streamlines the whole production process. MBD is a leading component of the industry's shift to digital modernization, a field where LandsKingInfra is pioneering practices like the Digital Twin.",
      image: "/industry.jpg",
    },
    {
      title: "Precision Mesh Generation",
      heading: "Precision Mesh Generation",
      paragraph:
        "LandsKingInfra excels at generating accurate and efficient meshes that perfectly conform to the intricate shapes of any project, guaranteeing the highest possible reliability in your simulations. We handle all types of meshes—structured, unstructured, hybrid, or adaptive—using the newest methods to customize the process for your specific requirements. Since a top-tier mesh is the bedrock of successful simulation, our commitment is to provide unmatched precision and effectiveness for all your engineering challenges.",
      image: "/industry.jpg",
    },
  ];

  return (
    <div className="mx-auto px-6 py-12 md:px-18">
      <div className="mx-auto px-4 pt-12 pb-8 text-center">
        <h1 className="text-2xl text-[#000080] md:text-3xl font-bold tracking-tight">
          Our Expertise
        </h1>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-between gap-2 border-b border-gray-300 mb-6">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`py-2 px-4 md:px-6 font-medium transition-all duration-200 text-sm sm:text-base rounded-md
              ${
                activeIndex === index
                  ? "bg-[#000080] text-white md:bg-transparent md:text-[#000080] md:border-b-2 md:border-[#000080]"
                  : "bg-gray-200 text-gray-700 hover:bg-[#000080] hover:text-white"
              }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#000080]">
          {tabs[activeIndex].heading}
        </h2>
        <p className="text-[#000] text-base md:text-lg">
          {tabs[activeIndex].paragraph}
        </p>
        <img
          src={tabs[activeIndex].image}
          alt={tabs[activeIndex].heading}
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>
    </div>
  );
}
