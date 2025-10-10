"use client";

import { useState } from "react";

export default function Caeaccordionone() {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = [
    {
      title: "Dynamic Simulation",
      heading: "Dynamic Simulation: Testing the Unthinkable",
      paragraph:
        "Dynamic simulation is how we model your product's performance against real-world chaos, like high-speed impacts or intense, time-varying forces. We generate precise digital replays of these events, offering engineers immediate, deep insight into system behavior. This capability is used to test and refine critical components—like engines and drivetrains—before any physical materials are committed. By catching flaws early, we slash prototype costs and rapidly confirm your product's reliability and safety across diverse industries.",
      image: "/industry.jpg",
    },
    {
      title: "Finite Element Analysis (FEA)",
      heading: "Finite Element Analysis (FEA): Guaranteeing Strength",
      paragraph:
        "Finite Element Analysis (FEA) is the cornerstone of structural validation, predicting exactly how your design will endure forces like heat, vibration, and static loads. This method meticulously dissects complex geometries into a precise digital mesh, allowing us to calculate and map out every point of stress, strain, and displacement. FEA doesn't just check designs; it optimizes them. We use the results to guide material removal for lighter components and eliminate hidden failure risks, ensuring your products are robust and cost-effective from the outset.",
      image: "/industry.jpg",
    },
    {
      title: "Multi-Body Simulation",
      heading: "Multi-Body Simulation (MBS): Mastering Interconnected Systems",
      paragraph:
        "Multi-Body Simulation (MBS) solves the puzzle of complex mechanical systems that have multiple moving, linked parts. By defining components as rigid bodies connected by specific joints and constraints, MBS accurately forecasts motion, forces, and internal stresses as the system operates. This predictive modeling is non-negotiable for refining automotive suspensions, robotics, and complex machinery. MBS empowers engineers to fine-tune performance, comfort, and safety characteristics virtually, guaranteeing reliable function in the final product.",
      image: "/industry.jpg",
    },
    {
      title: "Optimisation",
      heading: "Optimisation: Engineering for Peak Efficiency",
      paragraph:
        "Optimisation uses advanced mathematical intelligence to create the best possible version of your product. Instead of settling for “good enough,” we apply powerful algorithms that simultaneously enhance performance, reduce costs, and minimize risk. This scientific approach identifies the perfect balance among design parameters, resulting in superior efficiency—products that are faster to develop and more cost-effective to operate—while maintaining exceptional quality through early detection of potential weaknesses. The outcome is a design that ensures lasting reliability and is inherently robust against failure.",
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
