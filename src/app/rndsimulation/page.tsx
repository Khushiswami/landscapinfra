"use client";

import { useRef, useState, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import Rndfooter from "yes/Components/Rndfooter";
import Rndheader from "yes/Components/Rndheader";
import Image from "next/image";

// Card Props Type
type CardProps = {
  image: string;
  icon: ReactNode;
  title: string;
  description: string;
};



// ✅ Main Page Component
export default function Rndsimulation() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

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
Simulation Design for Manufacturing
            </h1>
          </div>
        </div>
      </section>

      {/* Company Intro Section */}
      <section className="w-full bg-white py-12 px-4 sm:px-8 md:px-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold leading-snug max-w-4xl mx-auto">
Simulation Design for Manufacturing
            </h2>
            <div className="w-12 h-1 bg-blue-900 mt-3 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-1 gap-8 items-center">
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
                Halls, and more. At Landsking Infra, we collaborate closely with
                you to develop designs that strike the perfect balance of space,
                functionality, and flexibility—tailored to meet your
                institutional and commercial needs.
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

     {/* new section */}
     <section className="bg-gray-50 py-16 px-4 sm:px-8 md:px-16">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
      Our Simulation Services
    </h2>

    {/* Grid Container */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Column 1 */}
      <div className="flex flex-col items-left text-left bg-white p-6 shadow-md rounded-lg h-full">
        <img
          src="/Profiles/PebWall.png"
          alt="Design and Engineering"
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">Design and Engineering</h3>
        <p className="text-gray-700 text-sm sm:text-base">
          Development to quickly take a product from concept phases through to full production. From design space layout [packaging] to detailed design for manufacture.
        </p>
      </div>

      {/* Column 2 */}
      <div className="flex flex-col items-left text-left bg-white p-6 shadow-md rounded-lg h-full">
        <img
          src="/Profiles/PebWall.png"
          alt="Durability Analysis"
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">Durability Analysis</h3>
        <p className="text-gray-700 text-sm sm:text-base">
          Highlight and eliminate weak points, reduce physical tests, and prevent warranty claims. Analysis from individual abuse tests through full-life fatigue.
        </p>
      </div>

      {/* Column 3 */}
      <div className="flex flex-col items-left text-left bg-white p-6 shadow-md rounded-lg h-full">
        <img
          src="/Profiles/PebWall.png"
          alt="Multi-Body System Simulation"
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">Multi-Body System Simulation</h3>
        <p className="text-gray-700 text-sm sm:text-base">
          Simulate kinematic systems, check forces, and evaluate component stress and suitability for various use cases.
        </p>
      </div>

      {/* Column 4 */}
      <div className="flex flex-col items-left text-left bg-white p-6 shadow-md rounded-lg h-full">
        <img
          src="/Profiles/PebWall.png"
          alt="Optimisation"
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">Optimisation</h3>
        <p className="text-gray-700 text-sm sm:text-base">
          Optimize components for weight, cost, and performance while considering manufacturing constraints and multi-disciplinary requirements.
        </p>
      </div>

      {/* Column 5 */}
      <div className="flex flex-col items-left text-left bg-white p-6 shadow-md rounded-lg h-full">
        <img
          src="/Profiles/PebWall.png"
          alt="Dynamic Simulation"
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">Dynamic Simulation</h3>
        <p className="text-gray-700 text-sm sm:text-base">
          Analyze high-energy or non-linear events to predict impact on components and assemblies, reducing prototype costs and time to market.
        </p>
      </div>

      {/* Column 6 */}
      <div className="flex flex-col items-left text-left bg-white p-6 shadow-md rounded-lg h-full">
        <img
          src="/Profiles/PebWall.png"
          alt="NVH Analysis"
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">NVH (Noise, Vibration & Harshness)</h3>
        <p className="text-gray-700 text-sm sm:text-base">
          Predict what occupants experience in terms of feel and noise, then develop the product to minimize undesirable effects.
        </p>
      </div>

      {/* Column 7 */}
      <div className="flex flex-col items-center text-center bg-white p-6 shadow-md rounded-lg h-full">
        <img
          src="/Profiles/PebWall.png"
          alt="CFD"
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">Computational Fluid Dynamics (CFD)</h3>
        <p className="text-gray-700 text-sm sm:text-base">
          Calculate fluid and heat flow over or through components, from aerodynamics to HVAC systems, brake cooling, and more.
        </p>
      </div>

      {/* Column 8 */}
      <div className="flex flex-col items-left text-left bg-white p-6 shadow-md rounded-lg h-full">
        <img
          src="/Profiles/PebWall.png"
          alt="Multi-Physics Simulation"
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">Coupled / Multi-Physics Simulation</h3>
        <p className="text-gray-700 text-sm sm:text-base">
          Join multiple simulations together so outputs from one can affect another, e.g., CFD + structural or MBS + structural simulations.
        </p>
      </div>

      {/* Column 9 */}
      <div className="flex flex-col items-left text-left bg-white p-6 shadow-md rounded-lg h-full">
        <img
          src="/Profiles/PebWall.png"
          alt="System Simulation"
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">System Simulation & Virtual Benchmarking</h3>
        <p className="text-gray-700 text-sm sm:text-base">
          Examine complex systems and benchmark against competitors using CAE models to improve product development efficiency and performance.
        </p>
      </div>
    </div>
  </div>
</section>

     {/* end new section */}
{/* image content */}
    <section className="w-full bg-white py-12 px-4 sm:px-8 md:px-12">
          <div className="container mx-auto px-4">
           
  
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                  <h2 className="text-2xl md:text-3xl font-bold leading-snug max-w-4xl mx-auto">
                    Landsking Solutions for Advanced Manufacturing
              </h2>
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
                  Halls, and more. At Landsking Infra, we collaborate closely with
                  you to develop designs that strike the perfect balance of space,
                  functionality, and flexibility—tailored to meet your
                  institutional and commercial needs.
                </p>
  
                <div className="flex items-center gap-4">
                  <button className="border text-blue-900 border-blue-900 px-4 sm:px-6 py-2 text-sm sm:text-base hover:bg-blue-900 hover:text-white transition">
                    GET A QUOTE
                  </button>
                </div>
              </div>
  
              <div className="relative w-full h-64 sm:h-80 md:h-[450px]">
                <Image
                  src="/sectorimg/ins.jpg"
                  alt="Industrial Building"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
{/* end image content */}
      {/* Info Section */}
   <section
  className="relative w-full py-16 px-4 sm:px-8 md:px-16 text-center mb-12 bg-cover bg-center"
  style={{
    backgroundImage: "url('/industry.jpg')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content */}
  <div className="relative z-10">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide text-white uppercase">
      Get in Touch
    </h2>
    <div className="w-12 h-[2px] bg-blue-900 mx-auto mt-3 mb-6 relative">
      <span className="absolute -bottom-[3px] left-0 w-6 h-[2px] bg-blue-900"></span>
    </div>
    <p className="text-white text-sm sm:text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
      We had love to hear from you. Here is how you can reach us.
    </p>
     <div className="inline-flex items-center gap-3">
      <button className="border-2 border-white  rounded-lg hover: text-white font-semibold px-5 py-2 rounded-md transition flex items-center gap-3">
        Contact us
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  </div>
</section>


      <Rndfooter/>
    </>
  );
}