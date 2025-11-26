"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const areas = [
  {
    id: 1,
    title: "Steel & Cement Plants",
    subtitle: "Steel & Cement Plants",
    description:
      "We undertake the construction of heavy-duty industrial plants designed to support large-scale and continuous operations. Our expertise includes structural steel fabrication, equipment foundations, material handling infrastructure, and utility systems. With precise planning and on-site coordination, we deliver robust, safe, and workflow-optimized production environments.",
    image: "/civil/high-rise building design.jpeg",
  },
  {
    id: 2,
    title: "Food & Beverages",
    subtitle: "Food & Beverage",

    description:
      "We build hygiene-compliant production facilities for food and beverage processing, ensuring sterile layouts, contamination-free material flow, and temperature-controlled environments. Our construction approach aligns with FSSAI and industry quality norms, enabling efficient operations and long-term facility sustainability.",
    image: "/civil/Structural Design Services.jpeg",
  },
  {
    id: 3,
    title: "Pharma & Chemical Units",
    subtitle: "Pharma & Chemical Units",

    description:
      "We construct high-standard manufacturing units, cleanrooms, laboratories, and utility blocks that adhere to GMP, ISO, and regulated safety protocols. Our systems ensure controlled environments, chemical handling safety, waste management, and seamless integration with production equipment for reliable operational performance.",
    image: "/civil/Industrial Structure Design.jpeg",
  },

  {
    id: 4,
    title: "Oil & Gas",
    subtitle: "Oil & Gas",

    description:
      "Landsking Infra undertakes construction for refineries, terminals, storage tanks, and pipeline support infrastructure. With strict compliance to HSE (Health, Safety & Environment) standards, we ensure secure execution under high-risk conditions. Our approach focuses on structural stability, fire protection systems, and operational safety integrity.",
    image: "/civil/Structural Shop Drawing Services.jpeg",
  },
  {
    id: 5,
    title: "Power Plants (Thermal / Solar / Hydro)",
    subtitle: "Power Plants (Thermal / Solar / Hydro)",

    description:
      "We execute the civil, structural, and equipment installation works required for power generation facilities. Our capabilities include foundation works, turbine & boiler structures, cooling systems, PV panel infrastructure, and hydro support structures. We ensure high reliability and performance efficiency throughout the plant lifecycle.",
    image: "/civil/Industrial Structure Design.jpeg",
  },
  {
    id: 6,
    title: "Warehouses & Logistic Parks",
    subtitle: "Warehouses & Logistic Parks",

    description:
      "We develop large-scale logistics infrastructure with optimized internal layouts, high load-bearing structures, dock levels, internal roads, stormwater systems, and racking compatibility. Our warehouses are built for efficient movement, safety compliance, and future expansion, meeting modern supply chain demands.",
    image: "/civil/Fabrication Drawing.JPG",
  },
  {
    id: 7,
    title: "Real Estate & Industrial Parks",

    subtitle: "Real Estate & Industrial Parks",

    description:
      "We plan and construct residential, commercial, and multi-industry development zones with integrated infrastructure facilities including roads, drainage, utilities, landscaping, and building structures. Our execution ensures sustainable development, organized layouts, and long-term asset value for developers and end users.",
    image: "/civil/Facade .jpeg",
  },
];

export default function Industryservice() {
  const [selectedId, setSelectedId] = useState(3);
  const [open, setOpen] = useState(false);

  const selectedArea = areas.find((area) => area.id === selectedId);

  return (
    <section className=" mx-auto px-4 py-10 md:px-19">
      <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-8">
        Infrastructure Engineering Solutions
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Menu */}
        <div className="w-full md:w-2/4">
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
                className="w-full max-w-[500px] h-64 md:h-80 object-cover rounded-lg md:rounded-none"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
