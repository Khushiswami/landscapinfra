"use client";

import { useRef, useState, ReactNode } from "react";
import { FaWarehouse, FaIndustry } from "react-icons/fa";
import { MdOutlineCleanHands } from "react-icons/md";
import Pebheader from "yes/Components/Pebheader";
import Footer from "../../Components/Footer";
import Image from "next/image";

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
      <div className="relative w-full h-48 sm:h-56 overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-0 bg-black opacity-0 transition-all duration-500 group-hover:w-[88%] group-hover:opacity-100"></div>
      </div>

      {/* Icon */}
      <div className="relative -mt-8 ml-auto mr-4 bg-blue-900 p-3 rounded shadow-lg flex items-center justify-center w-fit">
        {icon}
      </div>

      {/* Text */}
      <div className="px-5 pb-6 flex-1 flex flex-col text-center sm:text-left">
        <h3 className="text-lg sm:text-xl font-bold tracking-wide mb-3">
          {title}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base tracking-wide mb-5 flex-1">
          {description}
        </p>

        <a
          href="#"
          className="relative border border-blue-900 text-sm sm:text-lg tracking-wider text-black px-4 sm:px-5 py-2 font-semibold w-fit mx-auto sm:mx-0 overflow-hidden"
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
export default function InfrastructureSector() {
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
      <Pebheader />

      {/* Hero Section */}
      <section className="w-full min-h-[300px] md:min-h-[500px] flex flex-col md:flex-row">
        <div
          className="flex-1 flex items-center justify-center p-6 md:p-8 bg-cover bg-center relative"
          style={{
            backgroundImage: `linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/sectorimg/infra.jpg')`,
          }}
        >
          <div className="text-white text-center relative z-10 px-4">
            <h1 className="text-3xl md:text-6xl font-bold leading-snug tracking-wide">
              Infrastructure Sector
            </h1>
          </div>
        </div>
      </section>

      {/* Company Intro Section */}
      <section className="w-full bg-white py-12 px-4 sm:px-6 md:px-12">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug max-w-4xl mx-auto">
              Long-Lasting and Personalized Pre-Engineered Buildings for
              Infrastructure Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                Landsking Infra delivers sturdy and cost-efficient
                <span className="text-blue-900 font-semibold">
                  {" "}
                  Pre-Engineered Buildings (PEBs)
                </span>{" "}
                tailored to the specific needs of the infrastructure sector.
                Built using high tensile 350 MPA steel, our PEBs offer
                exceptional durability and operational efficiency, making them
                ideal for applications across airports, railways, and various
                industrial facilities.
              </p>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                Landsking Infra offers flexible, custom-designed Pre-Engineered
                Buildings tailored to exact specifications, ensuring optimal
                functionality for diverse applications. Our structures are
                energy-efficient and lightweight, with options for mezzanine
                floors, EOT cranes, canopies, and more. By integrating advanced
                technology with innovative design, we deliver reliable solutions
                that effectively support large-scale infrastructure projects.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <button className="border text-blue-900 border-blue-900 px-6 py-2 text-sm sm:text-base hover:bg-blue-900 hover:text-white transition">
                  GET A QUOTE
                </button>
              </div>
            </div>

            <div className="relative w-full h-64 sm:h-80 md:h-[450px]">
              <Image
                src="/sectorimg/infreaa.jpg"
                alt="Industrial Building"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <main className="bg-white">
        <section className="bg-white py-12 px-4 sm:px-6 md:px-12">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card
              image="/NDR.webp"
              icon={<FaWarehouse size={32} className="text-white" />}
              title="Railway Shelters"
              description="Durable railway and telecom shelters, built to endure harsh conditions. Quick installation, low maintenance, and long-lasting reliability."
            />
            <Card
              image="/sectorimg/inf.jpeg"
              icon={<MdOutlineCleanHands size={32} className="text-white" />}
              title="Prefabricated Multi-Storey Buildings"
              description="Designed for superior strength and cost-effectiveness, suitable for commercial and residential projects."
            />
            <Card
              image="/sectorimg/airport.jpg"
              icon={<FaIndustry size={32} className="text-white" />}
              title="Airport Terminal Buildings"
              description="Prefabricated structures for staff accommodations, worker housing, and more."
            />
          </div>
        </section>
      </main>

      {/* Info Section */}
      <section className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-8 md:px-16 text-center mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide text-black uppercase">
          Buildings custom-designed to suit your unique needs
        </h2>
        <div className="w-12 h-[2px] bg-blue-900 mx-auto mt-3 mb-6 relative">
          <span className="absolute -bottom-[3px] left-0 w-6 h-[2px] bg-blue-900"></span>
        </div>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
          <span className="text-blue-900 font-semibold">
            Pre-Engineered Buildings (PEBs)
          </span>{" "}
          can be customized with mezzanine floors, partitions, cranes, canopies,
          and more. These structures are ideal for airport terminals, hangars,
          industrial facilities, railway station buildings, and more.
        </p>
      </section>

      <Footer />
    </>
  );
}
