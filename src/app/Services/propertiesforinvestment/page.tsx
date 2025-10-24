"use client";

import { ReactNode } from "react";
import { FaWarehouse, FaIndustry, FaSnowflake } from "react-icons/fa";
import { MdOutlineCleanHands } from "react-icons/md";
import Image from "next/image";
import Footer from "yes/Components/RealState/FooterReal";
import Realstateheader from "yes/Components/Realstateheader";
import Insights from "yes/Components/Insights";
import ZigzagSection from "yes/Components/RealState/ZigzagSection";
import ContactSection from "yes/Components/ContactSection";
import QuickLinks from "yes/Components/businessAreas/QuickLinks";
import { GraduationCap, Users, Lightbulb, Wrench } from "lucide-react";
// Card Props Type
type CardProps = {
  image: string;
  icon: ReactNode;
  title: string;
  description: string;
};
const links = [
  {
    title: "CADFEM Service",
    subtitle: "SUPPORT & ENGINEERING",
    icon: <Wrench size={20} />,
    url: "/service",
  },
  {
    title: "Simulation-Trends",
    subtitle: "DIE ZUKUNFT ENTDECKEN",
    icon: <Lightbulb size={20} />,
    url: "/trends",
  },
  {
    title: "Studenten-Portal",
    subtitle: "DEIN GRATIS ANGEBOT",
    icon: <GraduationCap size={20} />,
    url: "/students",
  },
  {
    title: "Starkes Netzwerk",
    subtitle: "WELTWEIT SIMULIEREN",
    icon: <Users size={20} />,
    url: "/network",
  },
];

// ✅ Card Component
function Card({ image, icon, title, description }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col group transition-all duration-500 hover:shadow-lg">
      {/* Image */}
      <div className="relative w-full h-56 sm:h-64 md:h-72 overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-0 bg-black opacity-0 transition-all duration-500 group-hover:w-[88%] group-hover:opacity-100"></div>
      </div>

      {/* Icon */}
      <div className="relative -mt-8 ml-auto mr-4 bg-[#000080] p-3 rounded shadow-lg flex items-center justify-center">
        {icon}
      </div>

      {/* Text */}
      <div className="px-5 pb-6 flex-1 flex flex-col">
        <h3 className="text-lg md:text-xl font-bold tracking-wide mb-3">
          {title}
        </h3>
        <p className="text-gray-600 text-sm md:text-base tracking-wide mb-5 flex-1">
          {description}
        </p>

        <a
          href="#"
          className="relative border border-blue-900 text-sm md:text-lg tracking-wider text-black px-4 md:px-5 py-2 font-semibold w-fit overflow-hidden"
        >
          <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
            READ MORE
          </span>
          <span className="absolute left-0 top-0 h-full w-0 bg-[#000080] transition-all duration-500 ease-out group-hover:w-full"></span>
        </a>
      </div>
    </div>
  );
}

// ✅ Page Component
export default function Propertiesforinvestment() {
  return (
    <>
      <Realstateheader />

      {/* Hero Section */}
      <section className="w-full min-h-[400px] md:min-h-[500px] flex flex-col md:flex-row">
        <div
          className="flex-1 flex items-center justify-center p-6 sm:p-8 bg-cover bg-center relative"
          style={{
            backgroundImage: `linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/aboutright.jpeg')`,
          }}
        >
          <div className="text-white text-center relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold leading-snug tracking-wide">
              Invest Finance Value{" "}
            </h1>
          </div>
        </div>
      </section>

      {/* Company Intro Section */}
      <section className="w-full bg-white py-12 px-4 sm:px-6 md:px-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-3xl font-bold leading-snug max-w-4xl mx-auto">
              Investment Properties for Sale
            </h2>
            <div className="w-12 h-1 bg-[#000080] mt-3 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-4 text-sm md:text-base">
                Landscapinfra designs durable and efficient Solar Module
                Mounting Structures engineered for rooftops, ground-mounted, and
                large-scale solar projects. Built with high-quality materials,
                our MMS solutions withstand harsh conditions while ensuring
                stability and long-lasting performance.
              </p>
              <p className="text-gray-700 mb-4 text-sm md:text-base">
                At{" "}
                <span className="font-semibold">Landsking Infra Pvt Ltd</span>,
                we bring over 7 years of expertise in delivering top-quality
                pre-engineered and prefabricated industrial buildings.
              </p>
              <p className="text-gray-700 mb-6 text-sm md:text-base">
                Our skilled team ensures excellence at every stage — from
                understanding your vision, planning, and design to manufacturing
                and on-site installation.
              </p>
              <div className="flex items-center gap-4">
                <button className="border text-[#000080] border-blue-900 px-5 py-2 text-sm md:text-base hover:bg-[#000080] hover:text-white transition">
                  GET A QUOTE
                </button>
              </div>
            </div>

            <div className="relative w-full h-64 sm:h-80 md:h-[450px]">
              <Image
                src="/sectorimg/indd.jpg"
                alt="Industrial Building"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <main className="bg-white px-4 sm:px-6 md:px-12">
        <section className="bg-gray-50 py-12">
          <h1 className="text-black text-center text-2xl md:text-3xl font-bold mb-6">
            Solar Module Mounting Structures
          </h1>
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              image="/sectorimg/ware.jpg"
              icon={<FaWarehouse size={30} className="text-white" />}
              title="Solar Structural"
              description="Landscapinfra has established itself as a trustworthy name in the Solar MMS manufacturing sector."
            />
            <Card
              image="/sectorimg/room.jpg"
              icon={<MdOutlineCleanHands size={30} className="text-white" />}
              title="Comprehensive Expertise"
              description="Our capabilities extend far beyond fabrication, covering the complete solar project lifecycle."
            />
            <Card
              image="/sectorimg/ind.jpeg"
              icon={<FaIndustry size={30} className="text-white" />}
              title="Manufacturing Capacity"
              description="We take pride in our strong production capability, delivering over 150 MW of MMS monthly."
            />
            <Card
              image="/sectorimg/cold.png"
              icon={<FaSnowflake size={30} className="text-white" />}
              title="Rigorous Quality Control"
              description="We follow strict quality assurance protocols to ensure each MMS component meets universal guidelines."
            />
          </div>
        </section>
      </main>
      {/* zigzag */}
      {/* Info Section */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6 md:px-16 text-center mb-12">
        <h2 className="text-xl md:text-3xl font-extrabold tracking-wide text-black uppercase">
          Diverse Applications of Solar Mounting Structures
        </h2>
        <div className="w-12 h-[2px] bg-[#000080] mx-auto mt-3 mb-6 relative">
          <span className="absolute -bottom-[3px] left-0 w-6 h-[2px] bg-[#000080]"></span>
        </div>
        <p className="text-gray-700 text-sm md:text-lg max-w-4xl mx-auto leading-relaxed">
          The{" "}
          <span className="text-[#000080] font-semibold">Landscapinfra</span>{" "}
          delivers a wide portfolio of Solar Mounting Structures engineered for
          multiple applications across the renewable energy landscape.
        </p>
      </section>
      <QuickLinks heading="Quick Links" links={links} />
      <Insights />

      <Footer />
    </>
  );
}
