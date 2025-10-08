"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const areas = [
  {
    id: 1,
    title: "Comprehensive Mechanical Design & Development Solutions",
    subtitle: "Comprehensive Mechanical Design & Development Solutions",
    description:
      "We provide end-to-end mechanical design and development solutions, combining innovation, precision, and engineering expertise. Our offerings include mechanical concept design, detailed CAD design and development, machine and sheet metal design, as well as advanced 3D modeling using SolidWorks, Autodesk Inventor, and CATIA. We specialize in assembly modeling, parametric 3D design, and the creation of tools, jigs, and fixtures to streamline manufacturing. Additionally, we support legacy data conversion, product lifecycle management, and weldment and frame design, ensuring every project achieves optimal performance, manufacturability, and reliability.",
    image: "/rndimages/Mechanical/coreMachanical.webp",
  },
  {
    id: 2,
    title: "Virtual Testing & Performance Analysis Services",
    subtitle: "Virtual Testing & Performance Analysis Services",
    description:
      "We deliver comprehensive simulation, analysis, and virtual testing services to ensure optimal product performance and reliability. Our expertise covers finite element analysis (FEA), fatigue, crash, impact, and structural stress analysis, along with computational fluid dynamics, thermal modeling, vibration analysis, and tolerance assessments. Through virtual prototyping, failure analysis, and load testing simulations, we help engineers predict performance, identify risks, and optimize designs before physical production, saving time and reducing costly errors.",
    image: "/rndimages/Mechanical/specialist.jpg",
  },
  {
    id: 3,
    title: "End-to-End Industrial Design & Automation Services",
    subtitle: "End-to-End Industrial Design & Automation Services",
    description:
      "We provide comprehensive industrial design and engineering automation services to streamline manufacturing and optimize production processes. Our offerings include casting and vacuum casting design, process planning and automation, CNC programming, tooling and die design, and assembly line optimization. We also support engineering fabrication, production cost estimation, proposal review, bid management, engineering change orders, and tolerance analysis for machining. Leveraging advanced project management tools and industrial automation, we help businesses improve efficiency, reduce errors, and achieve high-quality, cost-effective manufacturing outcomes.",
    image: "/rndimages/Mechanical/industrial.jpeg",
  },
  {
    id: 4,
    title: "Comprehensive Piping, Plant & HVAC Design",
    subtitle: "Comprehensive Piping, Plant & HVAC Design",
    description:
      "We deliver end-to-end plant, piping, and HVAC design services, ensuring efficient and compliant facility layouts. Our expertise includes plant design engineering, modular plant services, and piping design and drafting. We also provide HVAC ducting, plumbing, firefighting, and fire protection engineering solutions. With precise design and coordination, we help optimize operations and enhance system reliability.",
    image: "/rndimages/Mechanical/plant.jpeg",
  },
  {
    id: 5,
    title: "Tailored Design Solutions for Specialized Sectors",
    subtitle: "Tailored Design Solutions for Specialized Sectors",
    description:
      "We provide specialized design services for diverse sectors, including tower engineering, ship deck drafting, and consumer electronics product design. Our solutions combine precision, compliance, and innovative approaches to meet unique industry requirements. Deliver high-quality, optimized designs that enhance performance and functionality across specialized applications.",
    image: "/rndimages/Mechanical/specialist.jpg",
  },
  {
    id: 6,
    title: "Product Data, Compliance & Lifecycle Management Services",
    subtitle: "Product Data, Compliance & Lifecycle Management Services",
    description:
      "We deliver fatigue and durability analysis to predict product lifespan under repeated stresses, ensuring long-term reliability. Using stress-life, strain-life, crack growth, and vibration fatigue methods, we help prevent failures and extend component life.",
    image: "/rndimages/Mechanical/plm.jpeg",
  },
  {
    id: 7,
    title: "Efficient, Compliant & Sustainable Product Design",
    subtitle: "Efficient, Compliant & Sustainable Product Design",
    description:
      "We provide value engineering and sustainability services focused on cost-efficient, high-performance designs. Our expertise includes design optimization, lightweighting, material substitution, and energy efficiency improvements. We ensure compliance with environmental standards such as RoHS and REACH. By integrating sustainability into engineering processes, we help reduce costs, improve performance, and support environmentally responsible product development.",
    image: "/rndimages/Mechanical/value.jpg",
  },
];

export default function Rndexplore() {
  const [selectedId, setSelectedId] = useState(3);
  const [open, setOpen] = useState(false);

  const selectedArea = areas.find((area) => area.id === selectedId);

  return (
    <section className=" mx-auto px-4 py-10 md:px-19">
      <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-8">
        Engineering Solutions
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
              <h3 className="text-2xl font-semibold text-blue-900 mb-3 text-center md:text-left">
                {selectedArea.subtitle}
              </h3>
              <p className="text-gray-700 mb-5 text-center md:text-left">
                {selectedArea.description}
              </p>
              <div className="flex justify-center md:justify-start">
                <button className="flex items-center gap-2 text-blue-900 font-semibold hover:underline">
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
