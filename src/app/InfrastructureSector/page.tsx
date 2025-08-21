"use client";

import { useRef, useState, ReactNode } from "react";
import { FaPlay, FaWarehouse, FaIndustry, FaSnowflake, FaShieldAlt } from "react-icons/fa";
import { MdOutlineCleanHands } from "react-icons/md";
import Pebheader from "../../Components/Pebheader";
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
        <h3 className="text-xl font-bold tracking-wide mb-3">{title}</h3>
        <p className="text-gray-600 text-base tracking-wide mb-5 flex-1">{description}</p>

        <a
          href="#"
          className="relative border border-blue-900 text-lg tracking-wider text-black px-5 py-2 font-semibold w-fit overflow-hidden"
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
export default function IndustrialBuildingsConstruction() {
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
      <section className="w-full min-h-[500px] flex flex-col md:flex-row">
        <div
          className="flex-1 flex items-center justify-center p-8 bg-cover bg-center relative"
          style={{
            backgroundImage: `linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/aboutright.jpeg')`,
          }}
        >
          <div className="text-white text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold leading-snug tracking-wide">
              Infrastructure Sector
            </h1>
          </div>
        </div>
      </section>

      {/* Company Intro Section */}
      <section className="w-full bg-white py-12 px-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold leading-snug max-w-4xl mx-auto">
             Long-Lasting and Personalized Pre-Engineered Buildings for Infrastructure Projects
            </h2>
            <div className="w-12 h-1 bg-blue-900 mt-3 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
             
              <p className="text-gray-700 mb-4">
              Landsking Infra delivers sturdy and cost-efficient<span className="text-blue-900 font-semibold">Pre-Engineered Buildings (PEBs)</span>  tailored to the specific needs of the infrastructure sector. Built using high tensile 350 MPA steel, our PEBs offer exceptional durability and operational efficiency,
               making them ideal for applications across airports, railways, and various industrial facilities.
              </p>
             <p className="text-gray-700 mb-4">
              Landsking Infra offers flexible, custom-designed Pre-Engineered Buildings tailored to exact specifications, ensuring optimal functionality for diverse applications. Our structures are energy-efficient and lightweight, with options for mezzanine floors, EOT cranes, canopies, and more. By integrating advanced technology with innovative design, we deliver reliable solutions that effectively support large-scale infrastructure projects.
              </p>
              <div className="flex items-center gap-4">
                <button className="border text-blue-900 border-blue-900 px-6 py-2 hover:bg-blue-900 hover:text-white transition">
                  GET A QUOTE
                </button>
              </div>
            </div>

            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/Industrial-Buildings-Construction.webp"
                alt="Industrial Building"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <main className="bg-white px-12">
        <section className="bg-gray-50 py-12 px-12">
          <div className="container mx-auto grid md:grid-cols-3 gap-6">
            <Card
              image="/NDR.webp"
              icon={<FaWarehouse size={38} className="text-white" />}
              title="Railway Shelters"
              description="Landsking Infra provides durable and high-performance railway and telecom
               shelters, engineered to endure harsh environmental conditions. Constructed using premium-quality
                materials, these shelters ensure safety, functionality, and resilience in diverse outdoor settings. Perfect for telecom, railway, and other industrial applications, our prefabricated shelters offer quick installation, low maintenance, and long-lasting reliability."
            />
            <Card
              image="/clean-room-2.webp"
              icon={<MdOutlineCleanHands size={38} className="text-white" />}
              title="Prefabricated Multi-Storey Building Manufacturer"
              description="Landsking Infra’s multi-storey buildings are designed for superior strength, fast-track construction, and cost-effectiveness. Suitable for both commercial and residential use, these structures ensure maximum space utilization, reduced construction time, and long-term value."
            />
            <Card
              image="/7-2.webp"
              icon={<FaIndustry size={38} className="text-white" />}
              title="Airport Terminal Buildings"
              description="Landsking Infra is a leading provider in the manufacturing and installation of prefabricated structures, including staff accommodations, worker housing, labor hutments, and more."
            />
          
           
          </div>
        </section>
      </main>

      {/* Info Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-16 text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-wide text-black uppercase">
      Buildings custom-designed to suit your unique needs
        </h2>
        <div className="w-12 h-[2px] bg-blue-900 mx-auto mt-3 mb-6 relative">
          <span className="absolute -bottom-[3px] left-0 w-6 h-[2px] bg-blue-900"></span>
        </div>
        <p className="text-gray-700 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
         <span className="text-blue-900 font-semibold"> Pre-Engineered Buildings (PEBs)</span> can be structurally customized with a variety of accessories based on the type of structure and specific project requirements. Add-ons such as mezzanine floors, internal partitions, EOT cranes, canopies, fascias, and more can be seamlessly integrated. These versatile structures are ideal for a wide range of infrastructure applications,
           including airport terminals, aircraft hangars, industrial facilities, railway station buildings, and more.
        </p>
      </section>
      <Footer/>
</>
  );
}

