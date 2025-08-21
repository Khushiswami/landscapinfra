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
              Special Buildings
            </h1>
          </div>
        </div>
      </section>

      {/* Company Intro Section */}
      <section className="w-full bg-white py-12 px-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold leading-snug max-w-4xl mx-auto">
             Landsking Infra Special Buildings Construction Solutions
            </h2>
            <div className="w-12 h-1 bg-blue-900 mt-3 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-4">
              Landsking Infra specializes in designing and manufacturing a wide range of versatile special buildings, including K-houses, liftable porta cabins, Mi Homes, control pulpits, and noise-insulated solutions. Backed by over 25 years of prefabrication expertise, we deliver durable, industry-compliant structures tailored to diverse operational needs. Our capabilities go beyond special buildings to include warehouses, factory buildings, 
              industrial sheds, poultry sheds, cold storage rooms, and cleanrooms—each engineered for maximum efficiency, durability, and long-term performance.
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
              title="Control Room"
              description="Landsking Infra provides robust and customizable control pulpits, engineered for optimal performance in demanding industrial settings. Built with high-quality materials, these units ensure operator safety, functionality, and ease of use—making them ideal for a wide range of control and monitoring applications."
            />
             <Card
              image="/NDR.webp"
              icon={<FaWarehouse size={38} className="text-white" />}
              title="Prefab Porta Cabins Manufacturer"
              description="Landsking Infra manufactures premium, customizable porta cabins tailored to meet a wide range of functional and space requirements. Ideal for construction sites, temporary offices, and on-site facilities, these portable cabins offer durability, 
              flexibility, and hassle-free installation—making them a reliable solution for temporary infrastructure needs."
            />
               <Card
              image="/NDR.webp"
              icon={<FaWarehouse size={38} className="text-white" />}
              title="Acoustic Enclosure"
              description="Landsking Infra offers advanced acoustic enclosures engineered to reduce industrial noise and improve workplace comfort. Built with high-performance sound-absorbing panels, these enclosures ensure quieter environments for machinery and equipment. Ideal for a variety of industries,
               they support regulatory noise compliance while enhancing operational efficiency and employee productivity."
            />
               <Card
              image="/NDR.webp"
              icon={<FaWarehouse size={38} className="text-white" />}
              title="K-House"
              description="K-House is a modern, innovative housing solution that blends sustainability with smart design. Featuring modular construction and energy-efficient systems, it provides a comfortable, eco-friendly living experience—ideal for individuals and families looking to embrace a greener, more sustainable lifestyle."
            />
               <Card
              image="/NDR.webp"
              icon={<FaWarehouse size={38} className="text-white" />}
              title="Mi Homes"
              description="Landsking Infra’s MI Homes are innovative, sustainable, and budget-friendly modular housing solutions, designed for fast installation and lasting durability. Ideal for residential, commercial, and emergency use,
               these homes offer comfortable living spaces equipped with modern amenities to meet today’s dynamic housing needs."
            />
               <Card
              image="/NDR.webp"
              icon={<FaWarehouse size={38} className="text-white" />}
              title="Liftable Cabin"
              description="Landsking Infra’s liftable cabins offer a smart, versatile solution for temporary or mobile space requirements. Designed with innovation and equipped with an easy lifting mechanism,
               these cabins ensure mobility and flexibility while maintaining high standards of comfort and functionality."
            />
      
           
          </div>
        </section>
      </main>

      {/* Info Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-16 text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-wide text-black uppercase">
          Versatile Special Buildings Designed for Everyday Applications
        </h2>
        <div className="w-12 h-[2px] bg-blue-900 mx-auto mt-3 mb-6 relative">
          <span className="absolute -bottom-[3px] left-0 w-6 h-[2px] bg-blue-900"></span>
        </div>
        <p className="text-gray-700 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
         Our team is professionally trained to deliver quality and excellence, 
         with expertise across every stage of the manufacturing process—from requirement gathering to production and final installation.
        </p>
      </section>
      <Footer/>
</>
  );
}

