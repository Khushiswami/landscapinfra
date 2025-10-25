// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// interface Highlight {
//   id: number;
//   value: string;
//   unit: string;
//   description: string;
//   icon: string;
// }

// const highlights: Highlight[] = [
//   {
//     id: 1,
//     value: "4.4",
//     unit: "mn",
//     description: "square metres residential development",
//     icon: "/icons/residential.svg", // replace with your actual icon
//   },
//   {
//     id: 2,
//     value: "3.1",
//     unit: "mn",
//     description: "square metres commercial & retail development",
//     icon: "/icons/commercial.svg",
//   },
//   {
//     id: 3,
//     value: "4.1",
//     unit: "mn",
//     description: "square metres commercial & retail development",
//     icon: "/icons/commercial.svg",
//   },
//   {
//     id: 4,
//     value: "5.1",
//     unit: "mn",
//     description: "square metres commercial & retail development",
//     icon: "/icons/commercial.svg",
//   },
// ];

// export default function Operational() {
//   const [index, setIndex] = useState(0);
//   const total = highlights.length;

//   const next = () => setIndex((prev) => (prev + 1) % total);
//   const prev = () => setIndex((prev) => (prev - 1 + total) % total);

//   // Optional: auto slide every 5 seconds
//   useEffect(() => {
//     const timer = setInterval(next, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="bg-white py-16 px-4 md:px-24 text-center relative overflow-hidden">
//       {/* Heading */}
//       <h2 className="text-3xl md:text-4xl font-bold text-[#000080] mb-8">
//         Operational Highlights
//       </h2>

//       {/* Description */}
//       <p className="max-w-4xl mx-auto text-gray-700 text-sm md:text-base leading-relaxed mb-14">
//         L&T Realty is committed to innovation and excellence and the essence of
//         this is seen in every project that we undertake. Our expertise in design
//         and construction along-with the cutting-edge technology has enabled us
//         to deliver top of the line residential, commercial and retail projects
//         across markets. Over the years, we have built an impeccable reputation
//         of setting industry standards and benchmarks. The many awards and
//         accolades that we have secured for individual projects as well as for
//         L&T Realty brand are a testament of our success.
//       </p>

//       {/* Desktop layout - show both */}
//       <div className="hidden md:flex justify-center items-center gap-24 relative">
//         {highlights.map((item) => (
//           <div key={item.id} className="flex flex-col items-center w-72">
//             <img src={item.icon} alt="" className="w-14 h-14 mb-4" />
//             <h3 className="flex items-baseline text-[#000080] font-extrabold text-6xl">
//               {item.value}
//               <span className="text-gray-700 text-xl font-semibold ml-1">
//                 {item.unit}
//               </span>
//             </h3>
//             <p className="text-gray-700 text-sm font-medium mt-2">
//               {item.description}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Mobile slider */}
//       <div className="md:hidden relative max-w-sm mx-auto">
//         <div className="overflow-hidden relative">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={index}
//               initial={{ x: 100, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               exit={{ x: -100, opacity: 0 }}
//               transition={{ duration: 0.4 }}
//               className="flex flex-col items-center justify-center"
//             >
//               <img
//                 src={highlights[index].icon}
//                 alt=""
//                 className="w-14 h-14 mb-4"
//               />
//               <h3 className="flex items-baseline text-[#000080] font-extrabold text-6xl">
//                 {highlights[index].value}
//                 <span className="text-gray-700 text-xl font-semibold ml-1">
//                   {highlights[index].unit}
//                 </span>
//               </h3>
//               <p className="text-gray-700 text-sm font-medium mt-2 max-w-[250px]">
//                 {highlights[index].description}
//               </p>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Prev Button */}
//         <button
//           onClick={prev}
//           className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full hover:bg-blue-50 transition"
//         >
//           <ChevronLeft className="text-[#000080] w-6 h-6" />
//         </button>

//         {/* Next Button */}
//         <button
//           onClick={next}
//           className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full hover:bg-blue-50 transition"
//         >
//           <ChevronRight className="text-[#000080] w-6 h-6" />
//         </button>

//         {/* Dots */}
//         <div className="flex justify-center gap-2 mt-8">
//           {highlights.map((_, i) => (
//             <span
//               key={i}
//               className={`w-2.5 h-2.5 rounded-full ${
//                 i === index ? "bg-[#fcb812]" : "bg-gray-300"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Building,
  Briefcase,
  Award,
} from "lucide-react";

interface Highlight {
  id: number;
  value: string;
  unit: string;
  description: string;
  icon: React.ReactNode; // now it's a React icon
}

const highlights: Highlight[] = [
  {
    id: 1,
    value: "4.4",
    unit: "mn",
    description: "square metres residential development",
    icon: <Home size={46} className="text-[#000080] mb-4" />,
  },
  {
    id: 2,
    value: "3.1",
    unit: "mn",
    description: "square metres commercial & retail development",
    icon: <Building size={46} className="text-[#000080] mb-4" />,
  },
  {
    id: 3,
    value: "4.1",
    unit: "mn",
    description: "square metres commercial & retail development",
    icon: <Briefcase size={46} className="text-[#000080] mb-4" />,
  },
  {
    id: 4,
    value: "5.1",
    unit: "mn",
    description: "square metres commercial & retail development",
    icon: <Award size={46} className="text-[#000080] mb-4" />,
  },
];

export default function Operational() {
  const [index, setIndex] = useState(0);
  const total = highlights.length;

  const next = () => setIndex((prev) => (prev + 1) % total);
  const prev = () => setIndex((prev) => (prev - 1 + total) % total);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py:15 md:py-16 px-4 md:px-20 text-center relative overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-[#000080] mb-8">
        Operational Highlights
      </h2>

      <p className="max-w-4xl mx-auto text-gray-700 text-sm md:text-base leading-relaxed mb-14">
        L&T Realty is committed to innovation and excellence and the essence of
        this is seen in every project that we undertake. Our expertise in design
        and construction along-with the cutting-edge technology has enabled us
        to deliver top of the line residential, commercial and retail projects
        across markets. Over the years, we have built an impeccable reputation
        of setting industry standards and benchmarks. The many awards and
        accolades that we have secured for individual projects as well as for
        L&T Realty brand are a testament of our success.
      </p>

      {/* Desktop layout */}
      <div className="hidden md:flex justify-center items-center gap-24 relative">
        {highlights.map((item) => (
          <div key={item.id} className="flex flex-col items-center w-72">
            {item.icon} {/* replaced <img> with icon */}
            <h3 className="flex items-baseline text-[#8080FF] font-extrabold  text-5xl md:text-6xl">
              {item.value}
              <span className="text-gray-700 text-xl font-semibold ml-1">
                {item.unit}
              </span>
            </h3>
            <p className="text-gray-700 text-sm font-medium mt-2">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile slider */}
      <div className="md:hidden relative max-w-sm mx-auto">
        <div className="overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center justify-center"
            >
              {highlights[index].icon} {/* replaced <img> */}
              <h3 className="flex items-baseline text-[#000080] font-extrabold text-6xl">
                {highlights[index].value}
                <span className="text-gray-700 text-xl font-semibold ml-1">
                  {highlights[index].unit}
                </span>
              </h3>
              <p className="text-gray-700 text-sm font-medium mt-2 max-w-[250px]">
                {highlights[index].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full hover:bg-blue-50 transition"
        >
          <ChevronLeft className="text-[#000080] w-6 h-6" />
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full hover:bg-blue-50 transition"
        >
          <ChevronRight className="text-[#000080] w-6 h-6" />
        </button>

        <div className="flex justify-center gap-2 mt-8">
          {highlights.map((_, i) => (
            <span
              key={i}
              className={`w-2.5 h-2.5 rounded-full ${
                i === index ? "bg-[#000080]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
