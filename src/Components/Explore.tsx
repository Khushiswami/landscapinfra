"use client";

import {
  Layers,
  Grid,
  Columns,
  Home,
  Building2,
  Warehouse,
} from "lucide-react";

const solutions = [
  {
    icon: <Layers size={30} strokeWidth={1.5} />,
    title: "Wall",
    highlight: "Solution",
  },
  {
    icon: <Grid size={30} strokeWidth={1.5} />,
    title: "Ceiling",
    highlight: "Solution",
  },
  {
    icon: <Columns size={30} strokeWidth={1.5} />,
    title: "Floor",
    highlight: "Solution",
  },
  {
    icon: <Home size={30} strokeWidth={1.5} />,
    title: "Cladding or Facade",
    highlight: "",
  },
  {
    icon: <Building2 size={30} strokeWidth={1.5} />,
    title: "Roofing",
    highlight: "",
  },
  {
    icon: <Warehouse size={30} strokeWidth={1.5} />,
    title: "Pre-Engineered",
    highlight: "Buildings",
  },
];

export default function Explore() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-12">
          Explore{" "}
          <span className="text-[#000080] font-light">Building Solutions</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 border-t border-gray-200 pt-12">
          {solutions.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center space-y-3"
            >
              {/* Outline Icon */}
              <div className="text-gray-600">{item.icon}</div>

              {/* Title */}
              <p className="text-gray-700 font-light text-base">
                {item.title}{" "}
                <span className="text-[#000080] font-light">
                  {item.highlight}
                </span>
              </p>

              {/* Link */}
              <a
                href="#"
                className="text-sm text-gray-800 underline hover:text-red-600 transition font-light"
              >
                Explore
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
