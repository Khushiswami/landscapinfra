// components/ExploreSection.tsx
"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const exploreItems = [
  {
    subtitle: "Industrial Real Estate",
    title: "🧭 Trusted by top logistics, FMCG, and manufacturing brands.",
    one: "Buy/Sell/Lease of Industrial Plots, Warehouses & Logistic Parks",
    two: "Built-to-Suit Solutions for Manufacturing Units",
    three: "Government-Approved Industrial Lands",
    image: "/realstate/",
  },
  {
    subtitle: "Commercial & Retail",
    title: "💡 Premium properties in top commercial zones.",
    one: "Leasing of High-Street Shops & Malls",
    two: "Office Spaces, Business Parks, Co-working Solution",
    three: "Corporate Expansion & Investment Opportunities",
    image: "/realstate/",
  },
  {
    subtitle: "Residential Brokerage",
    title: "🏡 Your dream home, simplified",
    one: "Luxury Apartments • Plots • Farmhouses",
    two: "Developer Tie-ups for New Launches & Pre-Sales",
    three: "Home Loan & Legal Assistance",
    image: "/realstate/",
  },
  {
    subtitle: "Land & Investment Advisory",
    title: "💰 Land that grows in value — every day.",
    one: "Investor Portfolio Management",
    two: "Market Research & ROI Analysis",
    three: "Land Acquisition / Joint Ventures / Builder Collaboration",
    image: "/realstate/",
  },
];

export default function Services() {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // ✅ Responsive itemsPerPage
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 1025) {
        setItemsPerPage(1); // Mobile + iPads
      } else {
        setItemsPerPage(4); // Desktop only
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev - itemsPerPage < 0
        ? exploreItems.length - itemsPerPage
        : prev - itemsPerPage
    );
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + itemsPerPage >= exploreItems.length ? 0 : prev + itemsPerPage
    );
  };

  const visibleItems = exploreItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section className="py-12 px-6 lg:px-23 relative">
      <h2 className="text-black text-3xl md:text-4xl font-bold mb-10 text-center">
        Our Services
      </h2>

      <div
        className={`grid gap-6 w-full mx-auto mb-6 ${
          itemsPerPage === 1 ? "grid-cols-1" : "grid-cols-4"
        }`}
      >
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden group cursor-pointer block"
          >
            <Image
              src={item.image}
              alt={item.subtitle}
              width={500}
              height={600}
              className="object-cover w-full h-[550px]  md:h-[430px] lg:h-[450px] transition-transform duration-500 group-hover:scale-105 "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
              <h4 className="text-white font-bold text-xl mb-2">
                {item.subtitle}
              </h4>

              {/* one, two, three — stacked vertically */}
              <ul className="text-gray-300 text-sm space-y-1 mb-3">
                {item.one && <li>• {item.one}</li>}
                {item.two && <li>• {item.two}</li>}
                {item.three && <li>• {item.three}</li>}
              </ul>
              <h4 className="text-white font-semibold text-lg mb-2">
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Prev/Next buttons */}
      <div className=" md:hidden flex justify-center gap-6">
        <button
          onClick={handlePrev}
          className="bg-black/60 hover:bg-black/80 p-3 rounded-full border-2 border-white shadow-lg transition-colors duration-300"
        >
          <ChevronLeft className="text-white" size={28} />
        </button>

        <button
          onClick={handleNext}
          className="bg-black/60 hover:bg-black/80 p-3 rounded-full border-2 border-white shadow-lg transition-colors duration-300"
        >
          <ChevronRight className="text-white" size={28} />
        </button>
      </div>
    </section>
  );
}
