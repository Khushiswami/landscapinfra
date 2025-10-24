"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CountUp } from "countup.js";
import { Ruler, Building2, Globe, Users } from "lucide-react";

export default function Renewableabout() {
  const stats = [
    {
      value: 50,
      suffix: "+",
      label: "MW Installed Capacity",
      icon: Ruler, // Ruler fits capacity / measurement
    },
    {
      value: 120,
      suffix: "+",
      label: "Industrial & Commercial Projects",
      icon: Building2, // Building icon fits commercial/industrial projects
    },
    {
      value: 10,
      suffix: "+",
      label: "Years of Team Experience",
      icon: Globe, // Globe works for global experience; optionally could use Users for team
    },
    {
      value: 98,
      suffix: "%",
      label: "Client Retention Rate",
      icon: Users, // Users icon better represents clients/people
    },
  ];

  const [hasAnimated, setHasAnimated] = useState(false);
  const numberRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting) && !hasAnimated) {
          stats.forEach((stat, i) => {
            if (numberRefs.current[i]) {
              const countUp = new CountUp(numberRefs.current[i]!, stat.value, {
                duration: 2,
                suffix: stat.suffix,
                separator: ",",
              });
              countUp.start();
            }
          });
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    numberRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [hasAnimated, stats]);

  return (
    <section className="relative py-16  overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-20 left-10 bg-[#f2f2f2] rounded-full blur-3xl animate-pulse hidden md:block"></div>
      <div className="absolute bottom-10 right-10 bg-[#f2f2f2] rounded-full blur-3xl animate-pulse hidden md:block"></div>

      <div className="relative container px-5  grid grid-cols-1 md:grid-cols-2 gap-8 items-start z-10 md:px-32">
        {/* Left Section - Video & Two Images */}
        <div className="space-y-6">
          {/* Video */}
          <div className="relative  rounded-lg mt-10 w-full h-64 sm:h-72 md:h-118 overflow-hidden  hover: transition-all duration-500">
            <video
              src="/homeslider.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Section - About Us */}
        <div>
          {/* <h5 className="text-xl sm:text-2xl font-bold text-[#000080] mb-1 mt-9 sm:mb-6">
            ABOUT US
          </h5> */}
          <h2 className="text-2xl sm:text-3xl font-bold text-[#000080] mb-4 mt-0 sm:mb-6">
            Building Tomorrow’s Energy Infrastructure — Today.
          </h2>

          <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
            Landsking Infra is a leading Solar EPC & Industrial Infrastructure
            company specializing in complete design-to-delivery solutions. We
            combine engineering precision, project management excellence, and
            green innovation to create reliable solar power systems for
            industrial, commercial, and residential clients.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-5">
            <h6 className="text-xl sm:text-2xl font-bold text-[#000080]">
              Core Values:
            </h6>
            <p className="text-gray-700 text-sm sm:text-base">
              Integrity | Innovation | Reliability | Sustainability
            </p>
          </div>

          {/* Stats with Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/80 backdrop-blur-lg p-3 sm:p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-500"
                >
                  <div className="p-2 sm:p-3 bg-[#000080] rounded-full text-white shadow-lg">
                    <Icon size={20} className="sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3
                      ref={(el) => {
                        numberRefs.current[i] = el;
                      }}
                      className="text-md sm:text-2xl font-bold text-[#000080]"
                    >
                      0
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
