"use client";

import { ShieldCheck, Layers, PencilRuler, Building2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { ArrowRight } from "lucide-react";
import Rndheader from "yes/Components/Rndheader";
import Rndfooter from "yes/Components/Rndfooter";

export default function Productengineering() {
  const [activeTab, setActiveTab] = useState(1);
  const [animateArrow, setAnimateArrow] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setAnimateArrow(!animateArrow);
    router.push("/system");
  };

  const sections = [
    {
      id: "01",
      title: "Design and Engineering",
      description:
        "Development to quickly take a product from concept phases through to full production. From design space layout [packaging] to detailed design for manufacture.",
      image: "/rndimages/Design and Engineering.jpg",
    },
    {
      id: "02",
      title: "Durability Analysis",
      description:
        "Highlight and eliminate weak points, reveal weight/cost optimization opportunities, minimize physical tests and reduce warranty claims. Analysis ranges from individual abuse tests to full-life fatigue.",
      image: "/rndimages/Durability Analysis.jpeg",
    },
    {
      id: "03",
      title: "Multi-Body System Simulation",
      description:
        "Simulate kinematic systems to check mechanism motion and forces. Forces can then be applied to components to check stress levels and suitability.",
      image: "/rndimages/Multi-Body System Simulation.jpg",
    },
    {
      id: "04",
      title: "Optimisation",
      description:
        "Make a component fulfill objectives without exceeding weight/cost unnecessarily. Includes material, shape, size, and manufacturing constraints. Multi-disciplinary optimization (MDO) can consider NVH, strength, durability, and more.",
      image:
        "/rndimages/equipment-data-center-workplace-used-monitoring-performance.jpg",
    },
    {
      id: "05",
      title: "Dynamic Simulation",
      description:
        "Analyse dynamic, high-energy, or highly non-linear events to assess component or system performance. Examples include impact analysis and user safety during collisions.",
      image: "/rndimages/Gemini_Generated_Image_slbcwrslbcwrslbc.png",
    },
    {
      id: "06",
      title: "NVH (Noise, Vibration & Harshness)",
      description:
        "Predict occupant experience regarding feel and noise, including road vibrations, squeak & rattle, and aeroacoustics. Develop products to minimize undesirable effects.",
      image:
        "/rndimages/technologist-protective-uniform-operating-industrial-machine-factory-production-line.jpg",
    },
    {
      id: "07",
      title: "Computational Fluid Dynamics (CFD)",
      description:
        "Calculate fluid and heat flow over or through a vehicle/component, including aerodynamics, powertrain heat management, HVAC, brake cooling, defrosting/de-icing, water fording, and contamination simulations.",
      image: "/rndimages/Material Intelligence.jpg",
    },
    {
      id: "08",
      title: "Coupled / Multi-Physics Simulation",
      description:
        "Join multiple simulation types so outputs from one affect another, e.g., CFD pressure applied to structural model and fed back. Can include MBS, structural, and particle models.",
      image: "/rndimages/Gemini_Generated_Image_h0dp20h0dp20h0dp.png",
    },
    {
      id: "09",
      title: "System Simulation",
      description:
        "Examine complex systems where multiple components/sub-systems interact. Ensure optimal performance for interactions like electrical control of cooling systems.",
      image: "/rndimages/System Simulation.jpg",
    },
    {
      id: "10",
      title: "Virtual Benchmarking",
      description:
        "Compare competitors’ full products, vehicle components, and sub-systems. Provide CAE models for direct comparison to identify performance targets and reduce development costs.",
      image: "/rndimages/virtual bookmaking.png",
    },
  ];

  return (
    <>
      <Rndheader />

      {/* Hero Section */}
      <section className="w-full min-h-[400px] md:min-h-[500px] flex flex-col md:flex-row">
        <div
          className="flex-1 flex items-center justify-center p-6 sm:p-8 bg-cover bg-center relative"
          style={{
            backgroundImage: `linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/rndimages/Global infra.jpeg')`,
          }}
        >
          <div className="text-white text-center relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-snug tracking-wide">
              Product Engineering
            </h1>
          </div>
        </div>
      </section>
      <section className="w-full bg-white py-12 px-4 sm:px-8 md:px-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold leading-snug max-w-4xl mx-auto">
              We turn raw concepts into refined, market-ready products through
              structured engineering.{" "}
            </h2>
            <div className="w-12 h-1 bg-blue-900 mt-3 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-1 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                Every stage, from design to lifecycle, is handled with precision
                and adaptability. Our process minimizes risks, controls costs,
                and accelerates delivery. The result—solutions that inspire
                trust, drive innovation, and create long-term impact.
              </p>

              <div className="flex items-center gap-4">
                <button className="border rounded-md text-blue-900 border-blue-900 px-4 sm:px-6 py-2 text-sm sm:text-base hover:bg-blue-900 hover:text-white transition">
                  GET A QUOTE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section className="bg-white">
        <div className=" ">
          <div className="text-center mt-5 py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Landsking’s Core Expertise for this Industry Includes:
            </h2>
          </div>

          {/* Sections 1–10 */}
          {sections.map((sec, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-center ${
                idx % 2 === 0 ? "bg-[#f2f2f2]" : "bg-[#fff]"
              } px-9 py-12 md:px-19`}
            >
              <div className="grid md:grid-cols-2 gap-12 w-full">
                <div className="flex flex-col items-start justify-center">
                  <h1 className="text-7xl font-bold text-[#000080]">
                    {String(idx + 1).padStart(2, "0")}
                  </h1>
                  <span className="mt-2 font-semibold text-[#000080] text-3xl md:text-5xl">
                    {sec.title}
                  </span>
                </div>
                <div className="flex flex-col justify-center space-y-6">
                  <p className="text-[#737373] text-lg md:text-[18px]">
                    {sec.description}
                  </p>
                  <img
                    src={sec.image}
                    alt={sec.title}
                    className="w-full h-52 md:h-64 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section
        className="relative w-full h-[420px] md:h-[450px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/rndimages/gn.jpeg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 md:px-20 max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Engineering Brilliance at Your Fingertips
          </h1>
          <p className="text-white text-lg md:text-xl mb-6">
            Transform your ideas into innovative products with precision, speed,
            and reliability.
          </p>

          <div className="inline-flex items-center gap-3">
            <button className="border-2 border-white  rounded-lg hover: text-white font-semibold px-5 py-2 rounded-md transition flex items-center gap-3">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <Rndfooter />
    </>
  );
}
