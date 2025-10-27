"use client";

import { useState } from "react";

const areas = [
  {
    id: 1,
    title: "Feasibility & Assessment (E-Phase)",
    subtitle: "Feasibility & Assessment (E-Phase)",
    description:
      " Engineering (E) Phase starts with a detailed site inspection and energy analysis to figure out the best technical plan. We then calculate the Return on Investment (ROI) and Payback Period (PBP) to prove the financial benefit, making sure the entire project is set up for success and complies with all regulations.",
    image: "/preimages/photovoltaic-system-2742304_1280.jpg",
  },
  {
    id: 2,
    title: "Design & Engineering (E-Phase)",
    subtitle: "Design & Engineering (E-Phase)",
    description:
      "Our engineering specialists craft comprehensive electrical, structural, and mechanical plans specific to your energy needs. We use advanced simulation tools to accurately forecast the energy yield, calculate your Return on Investment (ROI), and define clear payback schedules. This step guarantees your EPC solution is perfectly designed, both technically and financially optimized.",
    image:
      "/preimages/Solar Farm Electrical Testing and Commissioning_ Checklist and Procedures.jpg",
  },
  {
    id: 3,
    title: "Procurement & Logistics (P-Phase)",
    subtitle: "Procurement & Logistics (P-Phase)",
    description:
      "The Procurement (P) Phase focuses on securing Tier-1 components at highly competitive prices. We implement rigorous quality control and manage a secure supply chain, optimizing logistics to ensure all equipment arrives safely and precisely when needed.",
    image: "/green.png",
  },
  {
    id: 4,
    title: "Construction & Installation (C-Phase)",
    subtitle: "Construction & Installation (C-Phase)",
    description:
      "The Construction (C) Phase ensures professional execution by our certified teams. We manage the installation safely and efficiently on-site, strictly following all industrial safety and rigorous quality standards until the system is successfully energized.",
    image: "/preimages/construction Phase.jpeg",
  },
  {
    id: 5,
    title: "Testing & Commissioning",
    subtitle: "Testing & Commissioning",
    description:
      "This stage involves rigorous Testing & Commissioning. Our experts conduct comprehensive performance ratio (PR) and energy yield tests to validate efficiency metrics against the design, followed by seamless grid synchronization. This phase culminates with securing the final necessary certification from regulatory bodies, officially clearing the system for commercial operation.",
    image: "/preimages/testing.png",
  },
  {
    id: 6,
    title: "Operation & Maintenance (O&M)",
    subtitle: "Operation & Maintenance (O&M)",
    description:
      "The final step, Operation and Maintenance (O&M), ensures your asset's longevity. This involves long-term management and preventive maintenance, supported by remote monitoring to maximize power output and guarantee performance throughout the system's lifespan",
    image:
      "/preimages/ES Foundry to Supply 300MW of US-Made Solar Cells to Bila Solar.jpg",
  },
];

export default function Explore() {
  const [selectedId, setSelectedId] = useState(3);
  const [open, setOpen] = useState(false); // for mobile dropdown

  const selectedArea = areas.find((area) => area.id === selectedId);

  return (
    <section className=" mx-auto px-4 py-10 md:px-28">
      <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-8">
        Landsking Infra EPC Process{" "}
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Menu */}
        <div className="w-full md:w-1/4">
          {/* Mobile Dropdown */}
          <div className="md:hidden mb-0">
            <button
              onClick={() => setOpen(!open)}
              className="w-full p-3 rounded-t-lg text-white font-semibold flex justify-between items-center bg-[#000080]"
            >
              {areas.find((a) => a.id === selectedId)?.title}
              <svg
                className="w-5 h-5 text-[#8080FF]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={open ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                />
              </svg>
            </button>

            {open && (
              <div className="mt-0 w-full bg-[#000080] rounded-b-lg shadow">
                {areas.map((area) => (
                  <button
                    key={area.id}
                    onClick={() => {
                      setSelectedId(area.id);
                      setOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 text-[#8080FF]  ${
                      selectedId === area.id ? "text-white font-semibold" : ""
                    }`}
                  >
                    {area.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Menu */}
          {/* <div className="hidden md:flex flex-col bg-[#000080] text-white rounded-lg p-3"> */}
          <div className="hidden md:flex flex-col bg-[#000080] text-white rounded-lg pt-[27px] pb-[27px] px-[5px]">
            {areas.map((area, idx) => (
              <button
                key={area.id}
                onClick={() => setSelectedId(area.id)}
                className={`flex items-center gap-3 px-5 py-4 text-left transition ${
                  selectedId === area.id ? " font-bold" : "hover: text-gray-300"
                }`}
              >
                <span className="text-sm opacity-70">
                  {/* {String(idx + 1).padStart(2, "0")} */}
                </span>
                <span>{area.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Content */}
        {selectedArea && (
          // *** CHANGE HERE: flex-col-reverse on mobile, md:flex-row on desktop ***
          <div className="flex flex-col-reverse md:flex-row bg-white rounded-lg shadow overflow-hidden w-full">
            <div
              className="
    p-6 flex flex-col justify-center w-full md:w-1/2
    rounded-lg                
    md:rounded-none          
    md:rounded-tl-lg md:rounded-bl-lg
    shadow border border-[#808080] md:border-r-0
  "
            >
              <h3 className="text-2xl font-semibold text-[#000080] mb-3">
                {selectedArea.subtitle}
              </h3>
              <p className="text-gray-700 mb-5">{selectedArea.description}</p>
              <button className="flex items-center text-md md:text-xl gap-2 text-[#000080] font-semibold ">
                Contact{" "}
                <span className=" p-1 rounded-full text-[#000080]">→</span>
              </button>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={selectedArea.image}
                alt={selectedArea.subtitle}
                className="w-full h-64 md:h-139 object-cover "
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
