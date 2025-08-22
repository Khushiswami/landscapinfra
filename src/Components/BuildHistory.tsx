"use client";

import { ArrowRight } from "lucide-react";

export default function BuildHistory() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
      {/* Left Side */}
      <div className="space-y-6">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-800">
          We Build History
        </h2>
        <button className="flex items-center gap-2 text-red-600 font-semibold hover:underline">
          <span className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
            <ArrowRight className="text-white w-5 h-5" />
          </span>
          Explore More Projects
        </button>
      </div>

      {/* Right Side */}
      <div className="text-gray-700 space-y-6">
        <p>
          The 21st century and beyond will be shaped by the world’s ability to
          work at speed and at scale to meet fast-evolving needs for
          infrastructure, energy, advanced manufacturing, critical resources,
          environmental protection, and national security.
        </p>
        <p>
          For more than 126 years, we have risen to the occasion. With our
          unique expertise and experience, Bechtel is purpose-built to tackle
          these challenges.
        </p>
      </div>
    </section>
  );
}
