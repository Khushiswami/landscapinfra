"use client";

import { useRef, useState, ReactNode } from "react";
import { FaWarehouse } from "react-icons/fa";
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
      <div className="relative -mt-8 ml-auto mr-3 sm:mr-4 bg-blue-900 p-2 sm:p-3 rounded shadow-lg flex items-center justify-center">
        {icon}
      </div>

      {/* Text */}
      <div className="px-4 sm:px-5 pb-6 flex-1 flex flex-col">
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

export default function SportsLeisureBuilding() {
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
      <section className="w-full min-h-[350px] sm:min-h-[450px] md:min-h-[500px] flex flex-col md:flex-row">
        <div
          className="flex-1 flex items-center justify-center p-6 sm:p-8 bg-cover bg-center relative"
          style={{
            backgroundImage: `linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/sectorimg/sports.jpg')`,
          }}
        >
          <div className="text-white text-center relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold leading-snug tracking-wide">
              Sports & Leisure
            </h1>
          </div>
        </div>
      </section>

      {/* Company Intro Section */}
      <section className="w-full bg-white py-10 sm:py-12 px-4 sm:px-8 md:px-12">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug max-w-4xl mx-auto">
              Pre-Engineered Building Solutions for Sports and Recreation
              Facilities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                Landsking Infra delivers comprehensive Pre-Engineered Building
                (PEB) solutions for sports and leisure facilities, combining
                durability, functionality, and aesthetic appeal. Whether its
                stadiums, gymnasiums, indoor sports complexes, or auditoriums,
                we offer complete services from design and manufacturing to
                construction, ensuring seamless project execution.
              </p>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                Our PEBs effortlessly blend strong structural integrity with
                attractive designs, suitable for a wide range of uses including
                equipment storage and team facilities. Landsking Infra is your
                reliable partner in delivering world-class sports and leisure
                infrastructure solutions.
              </p>

              <div className="flex items-center gap-3 sm:gap-4">
                <button className="border text-blue-900 border-blue-900 px-4 sm:px-6 py-2 text-sm sm:text-base hover:bg-blue-900 hover:text-white transition">
                  GET A QUOTE
                </button>
              </div>
            </div>

            <div className="relative w-full h-60 sm:h-72 md:h-[450px]">
              <Image
                src="/sectorimg/sportss.jpeg"
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
        <section className="bg-white py-10 sm:py-12 px-2 sm:px-6 md:px-12">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card
              image="/sectorimg/sportsss.jpeg"
              icon={<FaWarehouse size={34} className="text-white" />}
              title="Stadium Sports Complex"
              description="Modular prefabricated stadium structures offer a modern and cost-effective alternative to permanent stadiums. If you manage a sports team and require quickly installed infrastructure, modular stadiums are the ideal solution. We can construct your stadium facilities efficiently within a matter of weeks."
            />
          </div>
        </section>
      </main>

      {/* Info Section */}
      <section className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6 md:px-16 text-center mb-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide text-black uppercase">
          Modern Designs with Flexible Customization Options
        </h2>
        <div className="w-12 h-[2px] bg-blue-900 mx-auto mt-3 mb-6 relative">
          <span className="absolute -bottom-[3px] left-0 w-6 h-[2px] bg-blue-900"></span>
        </div>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
          Pre-engineered building (PEB) technology has achieved global
          recognition and is rapidly being embraced by various industries in
          India. These innovative structures provide resource-efficient and
          contemporary construction solutions, cutting project durations by as
          much as 50% compared to conventional methods. Offering cost savings,
          energy efficiency, and design flexibility, PEBs are revolutionizing
          the construction sector by meeting tight deadlines and delivering
          sustainable, high-quality outcomes.
        </p>
      </section>

      <Footer />
    </>
  );
}
