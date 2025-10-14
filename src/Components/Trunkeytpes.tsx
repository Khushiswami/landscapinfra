"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
const areas = [
  {
    id: 1,
    title: "Manufacturing Plant Setup",
    subtitle: "End-to-End Industrial Manufacturing Plant Solutions",
    description:
      "We deliver complete turnkey manufacturing plant solutions. Our service covers every stage, from initial site selection and detailed design to final equipment installation and full commissioning. We integrate advanced automation, robotics, and IoT systems to ensure your plant achieves efficient, real-time production performance.",
    image: "/platform/manfone.jpg",
  },
  {
    id: 2,
    title: "Process Plant Construction",
    subtitle: "Specialized Process Plant Engineering & Construction",
    description:
      "We ensure comprehensive expertise in designing and building advanced process plants. Our offerings assist the demanding requirements of the chemical, pharma, and food sectors. By incorporating modular and AI-driven systems, we make sure that clients achieve top-tier quality, operational flexibility, and maximized resource efficiency in their facilities.",
    image: "/platform/process.jpg",
  },
  {
    id: 3,
    title: "Godown & Logistics Facility Development",
    subtitle: "Warehousing and Logistics Infrastructure Solutions",
    description:
      "We possess specialized competence in establishing high-capacity warehouses and logistics hubs. Our design philosophy incorporates sophisticated technologies like AS/RS, AMRs, and WMS platforms. This technical integration guarantees clients achieve streamlined storage, maximum operational automation, and highly accurate, intelligent inventory control.",
    image: "/platform/Logistics.jpg",
  },
  {
    id: 4,
    title: "Basic Structure Development",
    subtitle: "Comprehensive Infrastructure & Utility Development",
    description:
      "We are providing complete utility solutions encompassing necessary services like power distribution, potable water supply, and comprehensive waste management systems. Our foundational design strategy champions sustainability, integrating modern features such as renewable energy sources, smart grid technology, and state-of-the-art recycling platforms to future-proof your capital investments.",
    image: "/platform/development.jpg",
  },
];

export default function Trunkeytpes() {
  const [selectedId, setSelectedId] = useState(3);
  const [open, setOpen] = useState(false);

  const selectedArea = areas.find((area) => area.id === selectedId);

  return (
    <section className=" mx-auto px-4 py-10 md:px-19">
      <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-8">
        Types of Industrial Turnkey Projects
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Menu */}
        <div className="w-full md:w-2/4">
          {/* Mobile Dropdown */}
          <div className="md:hidden mb-0">
            <button
              onClick={() => setOpen(!open)}
              className="w-full p-3 rounded-t-lg text-white font-semibold flex justify-between items-left bg-[#000080]"
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
              <div className="mt-0 w-full bg-[#000080] rounded-b-lg ">
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
          <div className="hidden md:flex flex-col py-9 bg-[#000080] text-white rounded-lg pt-[27px] pb-[27px] px-[5px]">
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
        {/* Right Content */}
        {selectedArea && (
          <div className="flex flex-col-reverse md:flex-row bg-white rounded-lg border border-[#808080] overflow-hidden w-full items-center">
            {/* ✅ Left Text Section */}
            <div
              className="
           p-6 flex flex-col justify-center w-full md:w-1/2
           rounded-lg md:rounded-none md:rounded-tl-lg md:rounded-bl-lg
         "
            >
              <h3 className="text-2xl font-semibold text-[#000080] mb-3 text-center md:text-left">
                {selectedArea.subtitle}
              </h3>
              <p className="text-gray-700 mb-5 text-center md:text-left">
                {selectedArea.description}
              </p>
              <div className="flex justify-center md:justify-start">
                <button className="flex items-center gap-2 text-[#000080] font-semibold hover:underline">
                  More{" "}
                  <div className="bg-[#000080] rounded-full p-1.5 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-[#1a1aff]">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </button>
              </div>
            </div>

            {/* ✅ Image Section (centered vertically) */}
            <div className="w-full md:w-1/2 flex  bg-white pe-2">
              <img
                src={selectedArea.image}
                alt={selectedArea.subtitle}
                className="w-full max-w-[500px] h-64 md:h-70 object-cover rounded-lg md:rounded-none"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
