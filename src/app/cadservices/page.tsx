"use client";

import { useRef, useState, ReactNode } from "react";
import { FaWarehouse, FaIndustry, FaSnowflake } from "react-icons/fa";
import { MdOutlineCleanHands } from "react-icons/md";
import Image from "next/image";
import Rndheader from "yes/Components/Rndheader";
import Rndfooter from "yes/Components/Rndfooter";

// Card Props Type
type CardProps = {
  image: string;
  icon: ReactNode;
  title: string;
  description: string;
};

// ✅ Card Component
function Card({ image, icon, title, description }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col group transition-all duration-500 hover:shadow-lg">
      {/* Image */}
      <div className="relative w-full h-56 overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-0 bg-black opacity-0 transition-all duration-500 group-hover:w-[88%] group-hover:opacity-100"></div>
      </div>

      {/* Icon */}
      <div className="relative -mt-8 ml-auto mr-4 bg-blue-900 p-3 rounded shadow-lg flex items-center justify-center">
        {icon}
      </div>

      {/* Text */}
      <div className="px-5 pb-6 flex-1 flex flex-col">
        <h3 className="text-lg sm:text-xl font-bold tracking-wide mb-3">
          {title}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base tracking-wide mb-5 flex-1">
          {description}
        </p>

        <a
          href="#"
          className="relative border border-blue-900 text-sm sm:text-lg tracking-wider text-black px-4 sm:px-5 py-2 font-semibold w-fit overflow-hidden"
        >
          <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
            READ MORE
          </span>
          <span className="absolute left-0 top-0 h-full w-0 bg-blue-900 transition-all duration-500 ease-out group-hover:w-full"></span>
        </a>
      </div>
    </div>
  );
}

// ✅ Main Page Component
export default function Rndexplore() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const areas = [
  {
    id: 1,
    title: "Static Analysis",
    subtitle: "Structural Performance Evaluation",
    description:
      "Ensures accurate prediction of stresses, deformations, and safety margins under steady loading conditions for robust product designs.",
    image: "/industry.jpg",
  },
  {
    id: 2,
    title: "Implicit Dynamic Analysis",
    subtitle: "Time-Dependent Simulation",
    description:
      "Analyzes slow, time-varying loads and vibrations with high numerical stability, ideal for structures under realistic service conditions.",
    image: "/industry.jpg",
  },
  {
    id: 3,
    title: "Explicit Dynamic Analysis",
    subtitle: "High-Speed Event Simulation",
    description:
      "Models short-duration, nonlinear events such as impacts, crashes, and blast scenarios with precise dynamic response predictions.",
    image: "/industry.jpg",
  },
  {
    id: 4,
    title: "Fatigue / Durability",
    subtitle: "Life Cycle Prediction",
    description:
      "Evaluates material fatigue and durability under cyclic loads, helping extend product lifespan and prevent early failures.",
    image: "/industry.jpg",
  },
  {
    id: 5,
    title: "Manufacturing Solutions",
    subtitle: "Process Simulation & Optimization",
    description:
      "Covers forming, welding, machining, and casting simulations to minimize defects and enhance manufacturing efficiency.",
    image: "/industry.jpg",
  },
  {
    id: 6,
    title: "NVH Analysis",
    subtitle: "Noise, Vibration & Harshness",
    description:
      "Reduces unwanted vibrations and acoustic issues, improving comfort, safety, and overall product quality.",
    image: "/industry.jpg",
  },
  {
    id: 7,
    title: "Thermal Analysis",
    subtitle: "Heat Transfer Simulation",
    description:
      "Assesses conduction, convection, and radiation effects to ensure effective thermal management of systems and components.",
    image: "/industry.jpg",
  },
  {
    id: 8,
    title: "Multi-Body Dynamic Simulation",
    subtitle: "Motion & Kinematics",
    description:
      "Simulates interaction of rigid and flexible bodies, predicting real-world motion behavior of mechanical systems.",
    image: "/industry.jpg",
  },
];

  const [selectedId, setSelectedId] = useState(3);
  const [open, setOpen] = useState(false);

  const selectedArea = areas.find((area) => area.id === selectedId);

  return (
    <>
<Rndheader/>
      {/* Hero Section */}
      <section className="w-full min-h-[400px] md:min-h-[500px] flex flex-col md:flex-row">
        <div
          className="flex-1 flex items-center justify-center p-6 sm:p-8 bg-cover bg-center relative"
          style={{
            backgroundImage: `linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/aboutright.jpeg')`,
          }}
        >
          <div className="text-white text-center relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-snug tracking-wide">
              CFD & CAE Services
            </h1>
          </div>
        </div>
      </section>

      {/* Company Intro Section */}
      <section className="w-full bg-white py-12 px-4 sm:px-8 md:px-12">
        <div className="container mx-auto px-4">
            
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold leading-snug max-w-4xl mx-auto">
Precision CFD & CAE Services            </h2>
            <div className="w-12 h-1 bg-blue-900 mt-3 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-64 sm:h-80 md:h-[450px]">
              <Image
                src="/sectorimg/ins.jpg"
                alt="Industrial Building"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                Stand out from the competition with cutting-edge and visually
                appealing Pre-Engineered Institutional Building Solutions from
                Landsking Infra.
              </p>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                Our comprehensive range of structures delivers unmatched
                strength, durability, and elegance. We serve a wide array of
                sectors, including large-scale Pre-Engineered School Buildings,
                Hostel Complexes, Hospitals, Office Facilities, Exhibition
                Halls, and more.
              </p>

              <div className="flex items-center gap-4">
                <button className="border text-blue-900 border-blue-900 px-4 sm:px-6 py-2 text-sm sm:text-base hover:bg-blue-900 hover:text-white transition">
                  GET A QUOTE
                </button>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* SLIDER */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
Advanced  CFD & CAE Services
     </h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Menu */}
          <div className="w-full md:w-1/4">
            {/* Mobile Dropdown */}
            <div className="md:hidden mb-4">
              <button
                onClick={() => setOpen(!open)}
                className="w-full p-3 border border-gray-300 rounded-lg text-blue-900 font-semibold flex justify-between items-center bg-white"
              >
                {areas.find((a) => a.id === selectedId)?.title}
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={open ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                  />
                </svg>
              </button>

              {open && (
                <div className="mt-2 w-full bg-white border border-gray-300 rounded-lg shadow">
                  {areas.map((area) => (
                    <button
                      key={area.id}
                      onClick={() => {
                        setSelectedId(area.id);
                        setOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 hover:bg-blue-100 transition ${
                        selectedId === area.id ? "bg-blue-50 font-semibold" : ""
                      }`}
                    >
                      {area.title}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex flex-col bg-blue-900 text-white rounded-lg">
              {areas.map((area, idx) => (
                <button
                  key={area.id}
                  onClick={() => setSelectedId(area.id)}
                  className={`flex items-center gap-3 px-5 py-4 text-left transition ${
                    selectedId === area.id
                      ? "bg-blue-800 font-bold"
                      : "hover:bg-blue-800 text-gray-300"
                  }`}
                >
                  <span className="text-sm opacity-70">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span>{area.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Content */}
          {selectedArea && (
            <div className="flex flex-col md:flex-row bg-white rounded-lg shadow overflow-hidden w-full">
              {/* Text Content */}
              <div className="p-6 flex flex-col justify-center w-full md:w-1/2">
                <h3 className="text-2xl font-semibold text-blue-900 mb-3">
                  {selectedArea.subtitle}
                </h3>
                <p className="text-gray-700 mb-5">{selectedArea.description}</p>
                <button className="flex items-center gap-2 text-blue-900 font-semibold hover:underline">
                  VER MÁS
                  <span className="bg-yellow-400 p-1 rounded-full text-black">
                    →
                  </span>
                </button>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={selectedArea.image}
                  alt={selectedArea.subtitle}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </section>
      {/* END SLIDER */}

      {/* ✅ Cards Section */}
      <main className="bg-white px-4 sm:px-6 md:px-12">
        <section className=" py-12 px-4 sm:px-6 md:px-12">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              image="/industry.jpg"
              icon={<FaIndustry size={38} className="text-white" />}
              title="External & Internal Supersonic Flows"
              description="Simulation and analysis of high-speed supersonic flow behavior."
            />
            <Card
              image="/industry.jpg"
              icon={<FaWarehouse size={38} className="text-white" />}
              title="Transonic / Subsonic Flows"
              description="Efficient modeling of transonic and subsonic aerodynamic conditions."
            />
            <Card
              image="/industry.jpg"
              icon={<MdOutlineCleanHands size={38} className="text-white" />}
              title="Multi-Species / Multiphase Flows"
              description="Advanced analysis of multiphase and chemically reacting flows."
            />
            <Card
              image="/industry.jpg"
              icon={<FaIndustry size={38} className="text-white" />}
              title="Particle Tracking"
              description="Accurate particle trajectory simulations in complex flow domains."
            />
            <Card
              image="/industry.jpg"
              icon={<FaSnowflake size={38} className="text-white" />}
              title="Fluid Structure Interaction"
              description="Coupled FSI simulations for durability and performance optimization."
            />
            <Card
              image="/industry.jpg"
              icon={<FaIndustry size={38} className="text-white" />}
              title="Thermal Cooling of Electronics"
              description="Efficient thermal management solutions for electronic components."
            />
            <Card
              image="/industry.jpg"
              icon={<FaWarehouse size={38} className="text-white" />}
              title="Combustion"
              description="Combustion modeling for engines, power plants, and energy systems."
            />
            <Card
              image="/industry.jpg"
              icon={<MdOutlineCleanHands size={38} className="text-white" />}
              title="Electronic Thermal Management"
              description="Reliable heat dissipation and cooling strategies for electronics."
            />
            <Card
              image="/industry.jpg"
              icon={<FaIndustry size={38} className="text-white" />}
              title="Aerodynamic Analysis"
              description="CFD-based aerodynamic studies for vehicles and aerospace systems."
            />
            <Card
              image="/industry.jpg"
              icon={<FaWarehouse size={38} className="text-white" />}
              title="HVAC and Hydraulic Systems"
              description="Simulation-driven design of HVAC and hydraulic flow systems."
            />
            <Card
              image="/industry.jpg"
              icon={<FaSnowflake size={38} className="text-white" />}
              title="Rotating Systems"
              description="Performance optimization of turbomachinery and rotating equipment."
            />
          </div>
        </section>
      </main>

      {/* Info Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-8 md:px-16 text-center mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide text-black uppercase">
Empowering Innovation Through Precision Engineering        </h2>
        <div className="w-12 h-[2px] bg-blue-900 mx-auto mt-3 mb-6 relative">
          <span className="absolute -bottom-[3px] left-0 w-6 h-[2px] bg-blue-900"></span>
        </div>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
        Unlock the full potential of your designs with our advanced CFD & CAE services. From structural analysis to thermal management, we provide the tools and expertise to bring complex engineering concepts to life. Experience efficiency, accuracy, and innovation in every simulation.
        </p>
      </section>
      <Rndfooter/>
    </>
  );
}
