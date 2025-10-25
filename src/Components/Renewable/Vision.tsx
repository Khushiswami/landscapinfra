// "use client";

// import Image from "next/image";
// import { Eye, Target, Diamond } from "lucide-react";

// export default function Vision() {
//   const items = [
//     {
//       id: 1,
//       title: "VISION",
//       icon: <Eye size={68} color="#000080 " />, // Lucide Eye icon
//       description:
//         "Be the most respected realty developer, sustainably delivering customer delight and well being for our communities and environment",
//     },
//     {
//       id: 2,
//       title: "MISSION",
//       icon: <Target size={68} color="#000080" />, // Lucide Eye icon
//       description:
//         "Positive Customer Experience at every touch point\nOperational Excellence\nDesign Innovation and Digitization\nTeam and Group synergy leverage",
//     },
//     {
//       id: 3,
//       title: "VALUES",
//       icon: <Diamond size={68} color="#000080" />, // Lucide Eye icon
//       description:
//         "Customer Focus\nInnovation\nDelivering Promises\nSynergy\nEthics and Transparency",
//     },
//   ];

//   return (
//     <section className="bg-white py-16 px-4 md:px-24 text-center relative">
//       {/* Heading */}
//       <h2 className="text-[#000080] text-2xl md:text-3xl font-extrabold uppercase tracking-wide mb-14">
//         Vision and Mission
//       </h2>

//       {/* Boxes */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20  mx-auto">
//         {items.map((item) => (
//           <div
//             key={item.id}
//             className="relative border-l-3 border-[#000080] border-r-3 border-t-3 border-b-3 rounded-none pt-10 pb-10 px-6 text-left bg-white"
//           >
//             {/* Icon overlapping left border */}
//             <div className="absolute -left-10 top-6 w-19 h-30  flex items-center justify-center   ">
//               <div className="mb-4 bg-white">{item.icon}</div>
//             </div>

//             <h3 className="text-[#000080] font-extrabold text-lg mb-4 uppercase tracking-wide text-left">
//               {item.title}
//             </h3>

//             <p className="text-gray-700 text-sm md:text-base leading-relaxed whitespace-pre-line text-left">
//               {item.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
"use client";

import { Eye, Target, Diamond } from "lucide-react";

export default function Vision() {
  const items = [
    {
      id: 1,
      title: "VISION",
      icon: <Eye size={60} color="#000080" strokeWidth={2.5} />,
      description:
        "Be the most respected realty developer, sustainably delivering customer delight and well being for our communities and environment",
    },
    {
      id: 2,
      title: "MISSION",
      icon: <Target size={60} color="#000080" strokeWidth={2.5} />,
      description:
        "Positive Customer Experience at every touch point\nOperational Excellence\nDesign Innovation and Digitization\nTeam and Group synergy leverage",
    },
    {
      id: 3,
      title: "VALUES",
      icon: <Diamond size={60} color="#000080" strokeWidth={2.5} />,
      description:
        "Customer Focus\nInnovation\nDelivering Promises\nSynergy\nEthics and Transparency",
    },
  ];

  return (
    <section className="bg-white py-15 md:py-20 px-4 md:px-37 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#000080] mb-8 md:mb-15">
        Vision and Mission
      </h2>

      {/* Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 mx-auto px-10 md:px-0">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative bg-white  border-t border-b border-r border-[#000080] border-l-[2px] border-l-[#000080] px-6 py-6 md:px-8 md:py-10 text-left"
          >
            {/* Icon - aligned on left near border */}
            <div className="absolute -left-12 top-10 bg-white flex items-center justify-center">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-[#000080] font-extrabold text-lg mb-4 uppercase tracking-wide">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-700 text-sm md:text-base leading-relaxed whitespace-pre-line">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
