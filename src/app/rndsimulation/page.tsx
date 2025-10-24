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
      <Rndheader />

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
              Simulation Design for Manufacturing: Streamlining Production with
              CAD/CAE{" "}
            </h2>
            <div className="w-12 h-1 bg-blue-900 mt-3 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-1 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                Simulation Design for Manufacturing: Streamlining Production
                with CAD/CAE In today s competitive manufacturing landscape,
                Simulation Design for Manufacturing leverages the power of
                Computer-Aided Design (CAD) and Computer-Aided Engineering (CAE)
                to optimize product development and production processes. By
                integrating advanced simulation tools, manufacturers can reduce
                costs, minimize errors, and accelerate time-to-market. Below is
                a concise overview of how CAD/CAE drives manufacturing
                excellence. Engineering Solutions
              </p>

              <div className="flex items-center gap-4">
                <button className="border rounded-md text-[#000080] border-blue-900 px-4 sm:px-6 py-2 text-sm sm:text-base hover:bg-blue-900 hover:text-white transition">
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#000080]">
            Our Simulation Services
          </h2>

          {/* Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="flex flex-col items-left text-left bg-white p-6 shadow-md rounded-lg h-full">
              <Image
                src="/Profiles/PebWall.png"
                alt="Durability Analysis"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Durability Analysis
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Analyze and eliminate weak points in your design to prevent
                warranty claims and costly repairs. Ensure your products
                longevity and reliability.
              </p>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-left text-left bg-white p-6 shadow-md rounded-lg h-full">
              <Image
                src="/Profiles/PebWall.png"
                alt="Multi-Body Simulation"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Multi-Body Simulation
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Simulate complex kinematic systems to evaluate component stress
                and suitability for various use cases. Optimize performance and
                reduce physical testing.
              </p>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col items-left text-left bg-white p-6 shadow-md rounded-lg h-full">
              <Image
                src="/Profiles/PebWall.png"
                alt="Optimisation"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Optimisation</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Find the sweet spot between weight, cost, and performance while
                considering manufacturing constraints. Create efficient and
                effective designs.
              </p>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col items-left text-left bg-white p-6 shadow-md rounded-lg h-full">
              <Image
                src="/Profiles/PebWall.png"
                alt="Dynamic Simulation"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Dynamic Simulation</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Analyze high-energy events to predict component and assembly
                behavior, reducing prototype costs and time to market. Make
                informed design decisions.
              </p>
            </div>

            {/* Column 5 */}
            <div className="flex flex-col items-left text-left bg-white p-6 shadow-md rounded-lg h-full">
              <Image
                src="/Profiles/PebWall.png"
                alt="NVH Analysis"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">NVH Analysis</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Predict and minimize noise, vibration, and harshness in your
                product for a smoother user experience. Enhance comfort and
                satisfaction.
              </p>
            </div>

            {/* Column 6 */}
            <div className="flex flex-col items-left text-left bg-white p-6 shadow-md rounded-lg h-full">
              <Image
                src="/Profiles/PebWall.png"
                alt="CFD"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">CFD</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Optimize fluid and heat flow in your design for improved
                performance and efficiency. Reduce physical testing and
                prototyping.
              </p>
            </div>

            {/* Column 7 */}
            <div className="flex flex-col items-left text-left bg-white p-6 shadow-md rounded-lg h-full">
              <Image
                src="/Profiles/PebWall.png"
                alt="Multi-Physics Simulation"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Multi-Physics Simulation
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Combine multiple simulations for a holistic view of your design
                s performance. Ensure accuracy and reliability.
              </p>
            </div>

            {/* Column 8 */}
            <div className="flex flex-col items-left text-left bg-white p-6 shadow-md rounded-lg h-full">
              <Image
                src="/Profiles/PebWall.png"
                alt="System Simulation"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">System Simulation</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Examine complex systems and benchmark against competitors for
                improved product development efficiency and performance. Stay
                ahead of the curve.
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
                Simulation-Driven Manufacturing: Accelerating Innovation with
                CAD/CAE
              </h2>

              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                In today s fast-paced industrial environment, simulation-led
                design is transforming how products are engineered and
                manufactured. By harnessing Computer-Aided Design (CAD) and
                Computer-Aided Engineering (CAE), companies can explore ideas
                virtually, validate performance early, and fine-tune processes
                before production begins. With advanced CAD/CAE integration,
                manufacturers gain the ability to reduce development costs,
                eliminate design flaws, and shorten product cycles—delivering
                smarter, more reliable solutions to market faster.
              </p>

              <div className="flex items-center gap-4">
                <button className="border text-[#000080] border-blue-900 px-4 sm:px-6 py-2 text-sm sm:text-base hover:bg-blue-900 hover:text-white transition">
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

      <Rndfooter />
    </>
  );
}
