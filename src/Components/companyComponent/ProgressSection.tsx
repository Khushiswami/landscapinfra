// components/ProgressSection.tsx
"use client";

import Image from "next/image";

export default function ProgressSection() {
  return (
    <section className="w-full  mx-auto px-5 py-6 md:px-25">
      <div className="grid md:grid-cols-4 gap-4 items-stretch">
        {/* Left Card */}
        <div className="bg-gray-100 rounded-lg p-6 shadow-sm flex flex-col justify-center">
          <h3 className="text-lg md:text-xl font-bold mb-3 leading-snug">
            Addressing todays societal <br /> and environmental challenges
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Starting in 2020, Dassault Systèmes set off to demonstrate how
            everyday people can harness imagination and innovation to break
            boundaries and shape a more sustainable future.
          </p>
        </div>

        {/* Right Card */}
        <div className="relative md:col-span-3 rounded-lg overflow-hidden flex">
          <Image
            src="/company/about.webp"
            alt="The Only Progress is Human"
            width={1200}
            height={500}
            className="w-full h-80 object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0  flex flex-col justify-center p-6 md:p-10">
            <p className="text-white font-semibold uppercase mb-1 text-xs md:text-sm">
              Acting on the world’s challenges
            </p>
            <h2 className="text-2xl  text-[#000080] md:text-3xl font-bold mb-3 leading-tight">
              The Only Progress is Human
            </h2>
            <p className="text-white text-sm md:text-base mb-4 max-w-xl">
              Discover our dynamic series that highlights 10 of humanity’s most
              significant challenges, exploring how human ingenuity is fueling
              bold ideas and actions to create a brighter, more sustainable
              world, all while honoring and preserving our shared legacy.
            </p>
            <button className="bg-white text-[#000080] font-semibold px-5 py-1.5 text-sm rounded-full shadow hover:bg-blue-100 transition w-fit">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
