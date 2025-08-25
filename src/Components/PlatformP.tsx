// components/PlatformSection.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const TABS = [
  {
    title: "Pre Engineered Buildings",
    headline: "High-Performance Pre-Engineered Steel Buildings",
    body: "LandsKingInfra Pvt. Ltd. delivers modern, durable, and cost-efficient pre-engineered buildings. Each structure is designed for strength, flexibility, and long-lasting performance, tailored to meet diverse industrial and commercial needs.",
    img: "/about.png",
    buttonText: "VIEW MORE",
    url: "/menupage",
  },
  {
    title: "EPC Solutions",
    headline: "End-to-End EPC Solutions",
    body: "From concept to commissioning, our EPC solutions ensure seamless project execution with a strong focus on quality, cost-efficiency, and sustainability. We integrate advanced technologies and global standards to deliver world-class infrastructure.",
    img: "/solution/stell.jpg",
    buttonText: "VIEW MORE",
    url: "/epcsolutions",
  },
  {
    title: "Structural Engineering Services",
    headline: "Excellence in Structural Engineering",
    body: "Our expert engineers provide innovative structural design and analysis services. With advanced tools and decades of expertise, we ensure the highest safety, efficiency, and performance standards for every project we deliver.",
    img: "/industry.png",
    buttonText: "VIEW MORE",
    url: "/structural-engineering",
  },
  {
    title: "Project Consultancy & Management",
    headline: "Trusted Project Consultancy & Management",
    body: "We provide end-to-end project consultancy and management services, helping clients optimize planning, execution, and delivery. With proven methodologies, we ensure timely, cost-effective, and high-quality project outcomes.",
    img: "/project.jpg",
    buttonText: "VIEW MORE",
    url: "/project-consultancy",
  },
];

export default function PlatformP() {
  const [active, setActive] = useState(0);
  const router = useRouter();

  return (
    <section className="w-full">
      {/* Top heading + subheading */}
      <div className="max-w-4xl mx-auto px-4 pt-12 text-center">
        <h1 className="text-3xl text-[#000080] md:text-4xl font-semibold tracking-tight">
          Comprehensive Infrastructure Solutions
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-600">
          From design and engineering to execution and management, we deliver
          integrated solutions that shape industries and build a stronger
          future.
        </p>
      </div>

      {/* Tabs */}
      <div className="mt-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative flex items-center justify-center gap-6 md:gap-10 overflow-x-auto">
            {TABS.map((t, i) => (
              <button
                key={t.title}
                onClick={() => setActive(i)}
                className={`pb-3 text-sm md:text-base font-medium transition-colors whitespace-nowrap
                  ${
                    active === i
                      ? "text-[#272727]"
                      : "text-gray-600 hover:text-[#000080]"
                  }`}
              >
                {t.title}
              </button>
            ))}
          </div>
          {/* Active underline */}
          <div className="relative mx-auto mt-0.5 h-px max-w-5xl bg-gray-200">
            <span
              className="absolute -top-[1px] block h-0.5 bg-[#000080] transition-all duration-300"
              style={{
                width: `${100 / TABS.length}%`,
                left: `calc(${(100 / TABS.length) * active}% )`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Content Card */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="mt-8 relative rounded-xl overflow-hidden shadow-lg">
          <div className="relative w-full h-[340px] md:h-[460px]">
            <Image
              src={TABS[active].img}
              alt={TABS[active].title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="w-full p-6 md:p-10">
                <div className="max-w-2xl text-white text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
                    {TABS[active].headline}
                  </h2>
                  <p className="mt-4 text-sm md:text-base text-gray-200">
                    {TABS[active].body}
                  </p>
                  <button
                    className="mt-6 bg-[#000080] hover:bg-[#272727] text-white font-semibold px-4 py-2 rounded-md"
                    onClick={() => router.push(TABS[active].url)}
                  >
                    {TABS[active].buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}