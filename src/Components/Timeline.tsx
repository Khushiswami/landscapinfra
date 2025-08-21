"use client";

import { useState } from "react";

interface TimelineItem {
  decade: string;
  title: string;
  description: string;
  video: string; // changed from img to video
  location?: string;
}

const timelineData: TimelineItem[] = [
  {
    decade: "1930s",
    title: "Early Beginnings",
    description: "Started small construction projects in Rajasthan, exploring opportunities in emerging cities.",
    video: "/video.mp4",
    location: "RAJASTHAN, INDIA",
  },
  {
    decade: "1940s",
    title: "Expansion",
    description: "Expanded rapidly across Maharashtra, taking on infrastructure and public works projects.",
    video: "/video.mp4",
    location: "MAHARASHTRA, INDIA",
  },
  {
    decade: "1950s",
    title: "Railway Development",
    description: "Worked on pioneering railway infrastructure in Delhi, connecting key urban centers.",
    video: "/video.mp4",
    location: "DELHI, INDIA",
  },
  {
    decade: "1960s",
    title: "Space & Tech Facilities",
    description: "Supported India’s early space and technology initiatives in Karnataka.",
    video: "/video.mp4",
    location: "KARNATAKA, INDIA",
  },
  {
    decade: "1970s",
    title: "Hydroelectric Projects",
    description: "Constructed major hydroelectric power plants in Himachal Pradesh to boost energy supply.",
    video: "/video.mp4",
    location: "HIMACHAL PRADESH, INDIA",
  },
  {
    decade: "1980s",
    title: "Urban Development",
    description: "Participated in urban infrastructure projects in Tamil Nadu, including roads and bridges.",
    video: "/video.mp4",
    location: "TAMIL NADU, INDIA",
  },
  {
    decade: "1990s",
    title: "Port & Shipping",
    description: "Developed modern port facilities in Gujarat, improving trade and connectivity.",
    video: "/video.mp4",
    location: "GUJARAT, INDIA",
  },
  {
    decade: "2000s",
    title: "IT & Industrial Parks",
    description: "Built large-scale IT and industrial parks in Telangana and Andhra Pradesh.",
    video: "/video.mp4",
    location: "TELANGANA, INDIA",
  },
  {
    decade: "2010s",
    title: "Smart Cities",
    description: "Contributed to smart city projects in Karnataka and Maharashtra, focusing on sustainable development.",
    video: "/video.mp4",
    location: "KARNATAKA & MAHARASHTRA, INDIA",
  },
  {
    decade: "2020s",
    title: "Renewable Energy",
    description: "Leading solar and wind energy infrastructure projects across Rajasthan and Gujarat.",
    video: "/video.mp4",
    location: "RAJASTHAN & GUJARAT, INDIA",
  },
];


export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <div className="flex flex-col lg:flex-row gap-12  mx-auto p-8">
      {/* Left Half: Text */}
      <div className="lg:w-1/2 space-y-4">
        <h3 className="text-4xl font-semibold">Creating a Lasting Legacy</h3>
        <p className="text-gray-700 text-lg">
          In 1898, Warren A. Bechtel left Peabody, Kansas in search of construction work and opportunity out West. It was the first chapter in a history that would go on to span 126 years, 160 countries, and 25,000 projects. What began as a small construction outfit evolved alongside the needs of a growing nation and a rapidly changing world.
        </p>
        <p className="text-gray-700 text-lg">
          While much has changed at Bechtel, the desire to explore new frontiers has remained a driving force. Our history is a history of being first to market, providing proof of concept, and going where no one has.
        </p>
        <p className="text-gray-700 text-lg">
          We built the first nuclear power plant to produce electricity. We constructed the first pipeline under the Arctic. We were one of the first American construction companies to establish a presence in Saudi Arabia. We built the facilities that produced the first U.S. LNG exports in more than 40 years.
        </p>
        <p className="text-gray-700 text-lg">
          We are one of the only companies in the world to lay railroad track and fiber optic cable; to build shipyards and semiconductor factories; to support NASA in its moonshot in the early 1960s and now its latest mission to send humans to Mars. Our history is best understood by the incredible projects that have shaped it. Take a journey through our most iconic work by visiting WaaTeeKaa, our company’s virtual museum experience.
        </p>
      </div>

      {/* Right Half: Timeline */}
      <div className="lg:w-1/2 flex gap-6">
        {/* Decades */}
      <div className="flex flex-col gap-3">
  {timelineData.map((item, index) => (
    <button
      key={item.decade}
      onClick={() => setActiveIndex(index)}
      className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
        activeIndex === index
          ? "bg-red-600 text-white"
          : "bg-white text-gray-700 hover:bg-red-100"
      }`}
    >
      {/* Dot */}
      <span
        className={`w-2 h-2 rounded-full mr-3 ${
          activeIndex === index ? "bg-white" : "bg-red-600"
        }`}
      ></span>

      {item.decade}
    </button>
  ))}
</div>


<div className="flex-1 rounded-xl overflow-hidden ">
  <div className="flex-1 rounded-xl overflow-hidden">
  <div className="relative w-full h-96 lg:h-[36rem]">
    <video
      src={timelineData[activeIndex].video}
      className="w-full h-full object-cover"
      autoPlay
      muted
      loop
    />

    <div className="absolute inset-0 bg-black/40"></div>

    <div className="absolute bottom-0 w-full p-6  text-white">
      {timelineData[activeIndex].location && (
        <p className="text-yellow-500 font-mono uppercase tracking-wide mb-2">
          {timelineData[activeIndex].location}
        </p>
      )}
      <h2 className="text-2xl font-bold mb-2">
        {timelineData[activeIndex].title}
      </h2>
      <p className="text-gray-200">{timelineData[activeIndex].description}</p>
    </div>
  </div>
</div>

</div>

      </div>
    </div>
  );
}
