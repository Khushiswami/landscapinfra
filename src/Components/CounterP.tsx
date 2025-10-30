// "use client";
// import { useEffect, useState } from "react";

// interface CounterItem {
//   value: number;
//   label: string;
//   suffix?: string;
// }

// const counters: CounterItem[] = [
//   { value: 55, label: "Global Clients", suffix: "+" },
//   { value: 5, label: " Partners", suffix: "+" },

//   { value: 250, label: "Project Executed", suffix: "+" },

//   { value: 15, label: "Years Experience", suffix: "+" },
//   { value: 1.2, label: "Sq. Ft. Area Structured", suffix: "M" },
// ];

// export default function CounterP() {
//   const [counts, setCounts] = useState(counters.map(() => 0));

//   useEffect(() => {
//     counters.forEach((counter, i) => {
//       let start = 0;
//       const end = counter.value;
//       const duration = 2000;
//       const stepTime = 20;
//       const increment = end / (duration / stepTime);

//       const interval = setInterval(() => {
//         start += increment;
//         setCounts((prev) => {
//           const updated = [...prev];
//           updated[i] = start >= end ? end : start;
//           return updated;
//         });
//         if (start >= end) clearInterval(interval);
//       }, stepTime);
//     });
//   }, []);

//   return (
//     <section className="py-12 bg-cover bg-center md:px-40">
//       {" "}
//       <div className=" mx-[20px] px-5">
//         <h2
//           className="text-xl md:text-[30px] font-bold text-[#000080] mb-8 "
//           style={{
//             fontFamily: "'Poppins', Arial, sans-serif",
//           }}
//         >
//           Leading industries toward a smarter future with focused and adaptable
//           innovation.
//         </h2>

//         {/* Counter Grid */}
//         <div
//           className="
//             bg-[#000080] rounded-xl shadow-lg py-5 px-10 md:py-6 md:px-30
//             grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5
//            md:gap-y-10 gap-x-0 justify-items-center gap-y-7
//           "
//         >
//           {counters.map((counter, i) => (
//             <div
//               key={i}
//               className={`text-center min-w-[120px] ${
//                 // make the last item span full row on mobile
//                 i === counters.length - 1 ? "col-span-2 sm:col-span-1" : ""
//               }`}
//             >
//               <p className=" text-[25px] font-bold text-white transition-all duration-500 md:text-[52px]">
//                 {counts[i].toFixed(counter.value % 1 !== 0 ? 2 : 0)}
//                 {counter.suffix || ""}
//               </p>
//               <p
//                 className=" text-[#8080FF]  text-[16px] md:text-[21px] mt-0"
//                 // style={{
//                 //   fontFamily: "'Figtree', sans-serif",
//                 // }}
//               >
//                 {counter.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import { useEffect, useState } from "react";

interface CounterItem {
  value: number;
  label: string;
  suffix?: string;
}

const counters: CounterItem[] = [
  { value: 55, label: "Global Clients", suffix: "+" },
  { value: 5, label: " Partners", suffix: "+" },
  { value: 250, label: "Project Executed", suffix: "+" },
  { value: 15, label: "Years Experience", suffix: "+" },
  { value: 1.2, label: "Sq. Ft. Area Structured", suffix: "M" },
];

export default function CounterP() {
  const [counts, setCounts] = useState(counters.map(() => 0));

  useEffect(() => {
    counters.forEach((counter, i) => {
      let start = 0;
      const end = counter.value;
      const duration = 2000;
      const stepTime = 20;
      const increment = end / (duration / stepTime);

      const interval = setInterval(() => {
        start += increment;
        setCounts((prev) => {
          const updated = [...prev];
          updated[i] = start >= end ? end : start;
          return updated;
        });
        if (start >= end) clearInterval(interval);
      }, stepTime);
    });
  }, []);

  return (
    <section className="py-12 bg-cover bg-center md:px-20 lg:px-40">
      <div className="mx-[20px] px-5">
        <h2
          className="text-xl md:text-[30px] font-bold text-[#000080] mb-8"
          style={{ fontFamily: "'Poppins', Arial, sans-serif" }}
        >
          Leading industries toward a smarter future with focused and adaptable
          innovation.
        </h2>

        {/* Counter Grid */}
        <div
          className="
            bg-[#000080] rounded-xl shadow-lg py-5 px-10 md:py-6 md:px-20 lg:px-40
            grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5
            gap-y-7 justify-items-center
          "
        >
          {counters.map((counter, i) => (
            <div
              key={i}
              className={`text-center min-w-[120px] ${
                i === counters.length - 1 ? "col-span-2 lg:col-span-1" : ""
              }`}
            >
              <p className="text-[25px] font-bold text-white transition-all duration-500 md:text-[52px]">
                {counts[i].toFixed(counter.value % 1 !== 0 ? 2 : 0)}
                {counter.suffix || ""}
              </p>
              <p className="text-[#8080FF] text-[16px] md:text-[21px] mt-0">
                {counter.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
