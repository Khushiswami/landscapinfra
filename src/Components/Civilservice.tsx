"use client";

import { useState } from "react";

const areas = [
  {
    id: 1,
    title: "Construction Support Services",
    subtitle: "Construction Support Services",
    description:
      "Our experienced engineers deliver accurate and timely construction support services using the latest modeling and analysis tools. Whether it’s reviewing blueprints, providing on-site technical guidance, or leveraging next-gen engineering tools, we help your project move forward smoothly. ",
    image: "/tabs/construction service.png",
  },
  {
    id: 2,
    title: "Storm and Sewer Drainage Design",
    subtitle: "Storm and Sewer Drainage Design",
    description:
      "We design efficient storm and sewer drainage systems that minimize flooding and environmental impact.Our engineers blend innovation with practicality, ensuring your drainage design performs flawlessly under real-world conditions. we create cost-effective and eco-friendly drainage solutions. Trust our team for reliable storm and sewer drainage design that ensures long-term resilience and regulatory compliance.",
    image: "/tabs/drainage.jpg",
  },
  {
    id: 3,
    title: "Highway Engineering Services",
    subtitle: "Highway Engineering Services",
    description:
      "From expressways to pedestrian systems, our highway engineering services deliver safety, efficiency, and future-readiness. We design highway routes, pedestrian lighting, and interstate signage with a focus on performance and safety. Backed by years of infrastructure experience, we deliver practical, standards-compliant, and sustainable highway engineering solutions that improve mobility and minimize maintenance costs.",
    image: "/tabs/highway.jpg",
  },
  {
    id: 4,
    title: "Land Development Designing Solutions",
    subtitle: "Land Development Designing Solutions",
    description:
      "We provide sustainable land development design solutions that include site planning, due diligence, and master layout design.From master planning to site layout, we ensure every plot evolves into a functional, compliant, and beautiful space. With a focus on sustainability, efficiency, and local regulations, our land development design services turn your vision into reality—responsibly and effectively.",
    image: "/tabs/Land Development Designing.jpg",
  },
  {
    id: 5,
    title: "BIM for Civil and Infrastructure Projects",
    subtitle: "BIM for Civil and Infrastructure Projects",
    description:
      "We integrate BIM for civil and infrastructure projects to streamline construction from design to execution.We use progressive Building Information Modeling (BIM) tools to create accurate 3D models for bridges, roads, and urban structures. This enables efficient coordination, clash detection, and streamlined construction workflows. ",
    image: "/tabs/",
  },
  {
    id: 6,
    title: "Product Data, Compliance & Lifecycle Management Services",
    subtitle: "Product Data, Compliance & Lifecycle Management Services",
    description:
      "We deliver fatigue and durability analysis to predict product lifespan under repeated stresses, ensuring long-term reliability. Using stress-life, strain-life, crack growth, and vibration fatigue methods, we help prevent failures and extend component life.",
    image: "/tabs/Product Data, Compliance.jpg",
  },
  {
    id: 7,
    title: "Efficient, Compliant & Sustainable Product Design",
    subtitle: "Efficient, Compliant & Sustainable Product Design",
    description:
      "We provide value engineering and sustainability services focused on cost-efficient, high-performance designs. Our expertise includes design optimization, lightweighting, material substitution, and energy efficiency improvements. We ensure compliance with environmental standards such as RoHS and REACH. By integrating sustainability into engineering processes, we help reduce costs, improve performance, and support environmentally responsible product development.",
    image: "/tabs/",
  },
];

export default function Civilservice() {
  const [selectedId, setSelectedId] = useState(3);
  const [open, setOpen] = useState(false);

  const selectedArea = areas.find((area) => area.id === selectedId);

  return (
    <section className=" mx-auto px-4 py-10 md:px-19">
      <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-8">
        Infrastructure Engineering Solutions
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
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
              <h3 className="text-2xl font-semibold text-[#000080] mb-3  md:text-left">
                {selectedArea.subtitle}
              </h3>
              <p className="text-gray-600 text-justify mb-5 text-center md:text-left">
                {selectedArea.description}
              </p>
              <div className="flex justify-center md:justify-start">
                <button className="flex items-center gap-2 text-[#000080] font-semibold hover:underline">
                  {/* More{" "}
                  <div className="bg-[#000080] rounded-full p-1.5 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-[#1a1aff]">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div> */}
                  <a
                    href="/renewable-contact"
                    className="flex items-center text-md md:text-xl gap-2 text-[#000080] font-semibold "
                  >
                    Contact{" "}
                    <span className="p-1 rounded-full text-[#000080]">→</span>
                  </a>
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
