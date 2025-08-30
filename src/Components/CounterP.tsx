"use client";
import { useEffect, useState } from "react";

interface CounterItem {
  value: number;
  label: string;
  suffix?: string;
}

const counters: CounterItem[] = [
  { value: 1.2, label: "Sq. Ft. Area Delivered", suffix: "M" },
  { value: 55, label: "Global Clients", suffix: "+" },
  { value: 250, label: "Project Executed", suffix: "+" },
  { value: 5, label: "JV & Alliance Partners", suffix: "+" },
  { value: 15, label: "Years Manufacturing Experience", suffix: "+" },
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
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#09306b] mb-8 leading-snug">
          Leading industries toward a smarter future with focused and adaptable
          innovation.
        </h2>
{/* <h1 style={{ fontFamily: "'NewPanam Skyline', 'DM Sans', Arial, sans-serif" }}>
        Mediumg 500 Normal
      </h1>

      <h1 style={{ fontFamily: "NewPanam Skyline", fontWeight: 500, fontStyle: "italic" }}>
        Mediumg 500 Italic
      </h1>

      <h1 style={{ fontFamily: "NewPanam Skyline", fontWeight: 700 }}>
        Boldg 700 Normal
      </h1>

      <h1 style={{ fontFamily: "NewPanam Skyline", fontWeight: 700, fontStyle: "italic" }}>
        Boldg 700 Italic
      </h1>

      <h1 style={{ fontFamily: "NewPanam Skyline", fontWeight: 900 }}>
        Black g900 Normal
      </h1>

      <h1 style={{ fontFamily: "NewPanam Skyline", fontWeight: 900, fontStyle: "italic" }}>
        Blackg 900 Italic
      </h1> */}
        <div
          className="bg-[#09306b] rounded-2xl shadow-lg py-10 px-6 
          flex flex-wrap justify-center gap-y-10 gap-x-6 
         grid grid-cols-2 gap-y-10 gap-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center"
        >
          {counters.map((counter, i) => (
            <div key={i} className="text-center min-w-[120px]">
              <p className="text-4xl font-bold text-cyan-400 transition-all duration-500">
                {counts[i].toFixed(counter.value % 1 !== 0 ? 2 : 0)}
                {counter.suffix || ""}
              </p>
              <p className="text-white text-sm mt-2">{counter.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
