"use client";

import { useState } from "react";

const areas = [
  {
    id: 1,
    title: "Site Assessment & Feasibility Study",
    subtitle: "Site Assessment & Feasibility Study",
    description:
      " Every project begins with a detailed site survey to evaluate solar potential, land or rooftop conditions, and shading impact. We review electricity usage patterns, structural stability, and compliance requirements, including permits and DISCOM approvals. This step lays the technical and regulatory foundation for a sustainable and profitable solar  power project",
    image: "/green.png",
  },
  {
    id: 2,
    title: "System Design & Financial Modelling",
    subtitle: "System Design & Financial Modelling",
    description:
      "Our engineering team prepares optimized layouts for electrical, structural, and mechanical integration. Using advanced simulation tools, we forecast energy generation, design system capacity, and calculate ROI. We provide clear payback timelines, ensuring your project is both technically robust and financially rewarding.",
    image: "/green.png",
  },
  {
    id: 3,
    title: "Procurement & Logistics",
    subtitle: "Procurement & Logistics",
    description:
      "As one of the reliable solar EPC companies in India, LandscapInfra maintains strong vendor networks for Tier-1 panels, inverters, and BOS equipment. Our procurement strategy ensures certified quality components, while our logistics team manages delivery schedules efficiently—so every project remains on track without unnecessary delays.",
    image: "/green.png",
  },
  {
    id: 4,
    title: "Construction & Commissioning",
    subtitle: "Construction & Commissioning",
    description:
      "Our expert site team executes civil works, racking structures, cabling, inverter setup, and grid synchronization with strict adherence to IEC and safety standards. Each installation undergoes thorough quality testing to ensure long-term durability and stable energy output. We hand over a system that is reliable from day one.",
    image: "/green.png",
  },
  {
    id: 5,
    title: "Monitoring & Maintenance",
    subtitle: "Monitoring & Maintenance",
    description:
      "Our responsibility doesn’t end at commissioning. With advanced monitoring platforms, clients get real-time insights into system performance. Our AMC packages include preventive maintenance, module cleaning, system audits, and timely troubleshooting. LandscapInfra ensures your solar plant delivers consistent results year after year.",
    image: "/green.png",
  },
];

export default function Explore() {
  const [selectedId, setSelectedId] = useState(3);
  const [open, setOpen] = useState(false); // for mobile dropdown

  const selectedArea = areas.find((area) => area.id === selectedId);

  return (
    <section className=" mx-auto px-4 py-10 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
        Our Process as a Solar EPC Contractors
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
                  {String(idx + 1).padStart(2, "0")}
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
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">
                {selectedArea.subtitle}
              </h3>
              <p className="text-gray-700 mb-5">{selectedArea.description}</p>
              <button className="flex items-center gap-2 text-blue-900 font-semibold hover:underline">
                More <span className=" p-1 rounded-full text-[#000080]">→</span>
              </button>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={selectedArea.image}
                alt={selectedArea.subtitle}
                className="w-full h-64 md:h-70 object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
