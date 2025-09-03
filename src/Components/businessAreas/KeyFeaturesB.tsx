"use client";

import Image from "next/image";

interface Feature {
  title: string;
  description: string;
}

interface KeyFeaturesProps {
  heading?: string;
  highlight?: string;
  subHeading?: string;
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  description?: string;
  features?: Feature[];
}

export default function KeyFeaturesB({
  heading = "KEY FEATURES",
  highlight = "OF LANDSKING INFRA PVT LTD COLD STORAGE & COLD ROOM SOLUTIONS",
  image = {
    src: "/industry.jpg",
    alt: "Cold Storage by LANDSKING INFRA",
    width: 600,
    height: 400,
  },
  description = `At LANDSKING INFRA PVT LTD, we deliver state-of-the-art cold storage systems and energy-efficient cold rooms. 
  Our solutions are designed to maintain product freshness, reduce energy costs, and ensure long-lasting durability 
  for industries like food processing, pharmaceuticals, agriculture, and logistics.`,
  features = [],
}: KeyFeaturesProps) {
  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-20">
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 sm:mb-10 leading-snug">
        <span className="text-[#000080] block sm:inline px-3 py-1 rounded-md mr-0 sm:mr-2">
          {heading}
        </span>
        <span className="block sm:inline">{highlight}</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
        {/* Left Image */}
        <div className="w-full">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width || 600}
            height={image.height || 400}
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
            {description}
          </p>

          {/* Feature Points */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index}>
                <h4 className="font-semibold text-gray-800 text-base sm:text-lg">
                  • {feature.title}
                </h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
