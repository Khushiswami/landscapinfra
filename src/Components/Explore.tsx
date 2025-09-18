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
  { icon: <Layers size={30} strokeWidth={1.5} />, title: "Wall", highlight: "Solution" },
  { icon: <Grid size={30} strokeWidth={1.5} />, title: "Ceiling", highlight: "Solution" },
  { icon: <Columns size={30} strokeWidth={1.5} />, title: "Floor", highlight: "Solution" },
  { icon: <Home size={30} strokeWidth={1.5} />, title: "Cladding or Facade", highlight: "Facade" },
  { icon: <Building2 size={30} strokeWidth={1.5} />, title: "Roofing", highlight: "" },
  { icon: <Warehouse size={30} strokeWidth={1.5} />, title: "Pre-Engineered", highlight: "Buildings" },
];

export default function Explore() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-12">
          Explore{" "}
          <span className="text-[#000080] font-bold">Building Solutions</span>
        </h2>

        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-6 gap-10 border-gray-200 pt-12">
          {solutions.map((item, idx) => (
           <div
  key={idx}
  className="group flex flex-col items-center text-center space-y-3 
             border-gray-300 md:border-r last:border-r-0
             p-4 rounded transition-colors duration-300 hover:bg-[#000080]"
>
  {/* Icon */}
  <div className="text-gray-600 group-hover:text-white">{item.icon}</div>

  {/* Title */}
  <p className="text-gray-700 group-hover:text-white font-light text-base">
    {item.title}{" "}
    <span className="text-[#000080] group-hover:text-white font-light">
      {item.highlight}
    </span>
  </p>

  {/* Link */}
  <a
    href="#"
    className="text-sm text-gray-800 group-hover:text-white underline transition font-light"
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
