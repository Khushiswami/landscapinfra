// "use client";

// import { useState } from "react";

// export type Area = {
//   id: number;
//   title: string;
//   subtitle: string;
//   description: string;
//   image: string;
// };

// interface PreEngineeredProductsProps {
//   heading?: string;
//   subheading?: string;
//   description?: string;
//   areas: Area[];
// }

// export default function PreEngineeredProducts({
//   heading = "Our Activities",
//   subheading = "What We Do",
//   description = "Explore our wide range of prefabricated solutions, engineered with precision to deliver durability, efficiency, and cost-effectiveness across industries.",
//   areas,
// }: PreEngineeredProductsProps) {
//   const [selectedId, setSelectedId] = useState<number>(areas[0]?.id || 0);

//   const selectedArea = areas.find((a) => a.id === selectedId);

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-14">
//       {/* Heading */}
//       <div className="text-center mb-10">
//         <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
//           {subheading}
//         </p>
//         <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
//           {heading}
//         </h2>
//         <p className="text-gray-600 mt-3 max-w-2xl mx-auto">{description}</p>
//         <div className="w-20 h-1 bg-blue-900 mx-auto mt-4 rounded-full" />
//       </div>

//       <div className="flex flex-col md:flex-row gap-6">
//         {/* Left Menu */}
//         <div className="bg-blue-900 text-white rounded-lg flex flex-col w-full md:w-1/4">
//           {areas.map((area, idx) => (
//             <button
//               key={area.id}
//               onClick={() => setSelectedId(area.id)}
//               className={`flex items-center gap-3 px-5 py-4 text-left transition ${
//                 selectedId === area.id
//                   ? "bg-blue-800 font-bold"
//                   : "hover:bg-blue-800 text-gray-300"
//               }`}
//             >
//               <span className="text-sm opacity-70">
//                 {String(idx + 1).padStart(2, "0")}
//               </span>
//               <span>{area.title}</span>
//             </button>
//           ))}
//         </div>

//         {/* Right Content */}
//         {selectedArea && (
//           <div className="flex flex-col md:flex-row bg-white rounded-lg shadow overflow-hidden w-full">
//             {/* Text Content */}
//             <div className="p-6 flex flex-col justify-center w-full md:w-1/2">
//               <h3 className="text-2xl font-semibold text-blue-900 mb-3">
//                 {selectedArea.subtitle}
//               </h3>
//               <p className="text-gray-700 mb-5">{selectedArea.description}</p>
//               <button className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
//                 GET A QUOTE
//               </button>
//             </div>

//             {/* Image */}
//             <div className="w-full md:w-1/2">
//               <img
//                 src={selectedArea.image}
//                 alt={selectedArea.subtitle}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
"use client";

import { useState } from "react";

export type Area = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

interface PreEngineeredProductsProps {
  heading?: string;
  subheading?: string;
  description?: string;
  areas: Area[];
}

export default function PreEngineeredProducts({
  heading = "Our Products",
  subheading = "",
  description = "",
  areas,
}: PreEngineeredProductsProps) {
  const [selectedId, setSelectedId] = useState<number>(areas[0]?.id || 0);
  const [open, setOpen] = useState<boolean>(false);

  const selectedArea = areas.find((a) => a.id === selectedId);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
        {heading}
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Menu */}
        <div className="w-full md:w-1/4">
          {/* Mobile Dropdown */}
          <div className="md:hidden mb-4 bg-[#000080]">
            <button
              onClick={() => setOpen(!open)}
              className="w-full p-3 border bg-[#000080] border-gray-300 rounded-lg text-white font-semibold flex justify-between items-center"
            >
              {areas.find((a) => a.id === selectedId)?.title}
              <svg
                className="w-5 h-5 text-white"
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
              <div className="mt-2 w-full bg-[#000080] border border-gray-300 rounded-lg shadow">
                {areas.map((area) => (
                  <button
                    key={area.id}
                    onClick={() => {
                      setSelectedId(area.id);
                      setOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 transition font-medium ${
                      selectedId === area.id
                        ? "text-blue-400 bg-blue-900"
                        : "text-white hover:bg-blue-800"
                    }`}
                  >
                    {area.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-col bg-blue-900 text-white rounded-lg">
            {areas.map((area, idx) => (
              <button
                key={area.id}
                onClick={() => setSelectedId(area.id)}
                className={`flex items-center gap-3 px-5 py-4 text-left transition ${
                  selectedId === area.id
                    ? "bg-blue-800 font-bold"
                    : "hover:bg-blue-800 text-gray-300"
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
          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow overflow-hidden w-full">
            {/* Text Content */}
            <div className="p-6 flex flex-col justify-center w-full md:w-1/2">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">
                {selectedArea.subtitle}
              </h3>
              <p className="text-gray-700 mb-5">{selectedArea.description}</p>
              <button className="flex items-center gap-2 text-blue-900 font-semibold hover:underline">
                More
                <span className=" p-1 rounded-full text-[#000080]">→</span>
              </button>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={selectedArea.image}
                alt={selectedArea.subtitle}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
