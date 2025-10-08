"use client";

import { useState } from "react";

export default function Caetabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = [
    {
      title: "FEA",
      heading: "Finite Element Analysis (FEA)",
      paragraph:
        "Finite Element Analysis (FEA) is a computational technique used to simulate how products will respond to real-world physical effects such as vibration, heat, fluid flow, and other external forces. It enables engineers to identify weak points, predict material behavior, and validate designs before physical prototyping. By leveraging FEA, businesses can minimize production costs, accelerate product development, and ensure higher reliability in demanding applications.",
      image: "/images/fea.jpg",
    },
    {
      title: "Optimisation",
      heading: "Design Optimisation",
      paragraph:
        "Design Optimisation focuses on improving a product’s performance, efficiency, and sustainability by fine-tuning design parameters. Engineers use computational models and algorithms to identify the most effective combination of materials, geometry, and manufacturing processes. This results in lightweight yet robust designs that meet functional requirements while minimizing resource usage and cost. Optimisation ultimately leads to innovation and competitive advantage in the market.",
      image: "/industry.jpg",
    },
    {
      title: "Structural",
      heading: "Structural Analysis",
      paragraph:
        "Structural Analysis evaluates how loads and forces affect the strength, stability, and integrity of structures and components. Using advanced simulation tools, engineers can study stress distribution, deformation, and potential failure points. This process helps ensure that products and buildings can withstand real-world conditions such as pressure, temperature changes, and dynamic forces. Structural analysis is crucial in civil, automotive, and aerospace engineering for ensuring safety and performance.",
      image: "/industry.jpg",
    },
    {
      title: "Fluid",
      heading: "Fluid Dynamics",
      paragraph:
        "Fluid Dynamics involves studying the movement of liquids and gases to predict their impact on product design and performance. Engineers apply Computational Fluid Dynamics (CFD) simulations to analyze flow rates, pressure distribution, turbulence, and heat transfer. This enables the development of efficient cooling systems, aerodynamic surfaces, and energy-optimized equipment. Fluid dynamics is essential across industries such as HVAC, automotive, marine, and renewable energy.",
      image: "/industry.jpg",
    },
    {
      title: "Thermal",
      heading: "Thermal Analysis",
      paragraph:
        "Thermal Analysis examines temperature distribution, heat transfer, and thermal stresses in systems and components. Engineers use thermal simulation to ensure optimal heat management, energy efficiency, and material longevity. It helps prevent overheating, thermal expansion, and performance degradation in electronic devices, engines, and industrial machinery. Through accurate thermal modeling, engineers can enhance product reliability and operational safety across multiple industries.",
      image: "/industry.jpg",
    },
  ];

  return (
    <div className=" mx-auto px-6 py-12 md:px-18">
      <div className="mx-auto px-4 pt-12 pb-8 text-center">
        <h1 className="text-2xl text-[#000080] md:text-3xl font-bold tracking-tight">
          Comprehensive Infrastructure Solutions
        </h1>
        <p className="mt-4 text-[14px] font-light md:text-[16px] text-black">
          From design and engineering to execution and management, we deliver
          integrated solutions that shape industries and build a stronger
          future.
        </p>
      </div>
      <div className="flex flex-wrap justify-between border-b border-gray-300 mb-6">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`py-2 px-4 md:px-6 font-medium transition-colors text-sm sm:text-base ${
              activeIndex === index
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          {tabs[activeIndex].heading}
        </h2>
        <p className="text-gray-700 text-base md:text-lg">
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
