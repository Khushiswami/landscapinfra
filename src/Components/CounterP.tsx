"use client";
import { useEffect, useState } from "react";

interface CounterItem {
  value: number;
  label: string;
  suffix?: string; // like +, M, etc.
}

const counters: CounterItem[] = [
  { value: 1.2, label: "Sq. Ft. Area Delivered", suffix: "M" },
  { value: 55, label: "Global Clients", suffix: "+" },
  { value: 250, label: "Project Executed", suffix: "+" }, // updated
  { value: 5, label: "JV & Alliance Partners", suffix: "+" },
  { value: 15, label: "Years Manufacturing Experience", suffix: "+" }, // updated
];

export default function CounterP() {
  const [counts, setCounts] = useState(counters.map(() => 0));

  useEffect(() => {
    counters.forEach((counter, i) => {
      let start = 0;
      const end = counter.value;
      const duration = 2000; // total animation ms
      const stepTime = 20; // ms
      const increment = end / (duration / stepTime);

      const interval = setInterval(() => {
        start += increment;
        setCounts(prev => {
          const updated = [...prev];
          updated[i] = start >= end ? end : start;
          return updated;
        });
        if (start >= end) clearInterval(interval);
      }, stepTime);
    });
  }, []);

  return (
    <section className="py-12 px-6 bg-white text-center">
      <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-8">
        Leading the charge in industries that are shaping the future with Purposeful Agile Innovation.
      </h2>

      <div className="bg-[#061b49] rounded-2xl shadow-lg flex flex-col md:flex-row justify-around items-center py-10 px-6 gap-8">
        {counters.map((counter, i) => (
          <div key={i} className="text-center">
            <p className="text-4xl font-bold text-white transition-all duration-500">
              {counts[i].toFixed(counter.value % 1 !== 0 ? 1 : 0)}
              {counter.suffix || ""}
            </p>
            <p className="text-white text-sm mt-2">{counter.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
