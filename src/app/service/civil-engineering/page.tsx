"use client";
import { useRef, useState, ReactNode, useEffect } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaTools, FaBolt, FaShieldAlt, FaLeaf, FaExpand } from "react-icons/fa";
import {
  FaAward,
  FaGlobeAsia,
  FaCertificate,
  FaClock,
  FaProjectDiagram,
} from "react-icons/fa";
import {
  FaDraftingCompass,
  FaPencilRuler,
  FaCube,
  FaCogs,
  FaUndoAlt,
  FaLightbulb,
  FaIndustry,
  FaFlask,
} from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import RNDMechanicalCom from "yes/Components/RNDMechanicalCom";

import Rndheader from "yes/Components/Rndheader";

import Link from "next/link";
import Rndfooter from "yes/Components/Rndfooter";
import Brand from "yes/Components/ClientP";

type CardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

// ✅ Card Component
function Card({ icon, title, description }: CardProps) {
  return (
    <div className="bg-[#f5f7fb] shadow-md rounded-lg overflow-hidden flex flex-col group transition-all duration-500 hover:shadow-lg">
      {/* Image with centered icon */}
      <div className="relative w-full h-48 sm:h-56 overflow-hidden flex items-center justify-center">
        {/* Centered Icon */}
        <div className="absolute flex items-center justify-center bg-blue-900 p-2 sm:p-4 rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>

        {/* Hover underline effect */}
      </div>

      {/* Text */}
      <div className="px-4 sm:px-5 pb-6 flex-1 flex flex-col mt-4">
        <h3 className="text-lg sm:text-xl font-bold tracking-wide mb-3 text-center">
          {title}
        </h3>
        <p className="text-black text-sm sm:text-base tracking-wide mb-5 flex-1 text-center">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Civil() {
  interface FAQ {
    question: string;
    answer: string;
  }
  interface Possibility {
    subtitle: string;
    description: string;
    image: string;
  }

  const areas = [
    {
      id: 1,
      title: "Prefab Site Infrastructure ",
      subtitle: "Prefab Site Infrastructure Solutions",
      description:
        "At Landsking Infra Pvt. Ltd, we provide comprehensive Prefab Site Infrastructure Solutions designed to meet the evolving needs of modern industries and organizations. Our solutions are engineered to deliver efficiency, durability, and sustainability, ensuring that infrastructure development is completed in significantly reduced timelines without compromising on quality.",
      image: "/menupageimg/mod15.png",
    },
    {
      id: 2,
      title: "Prefab Site Office",
      subtitle: "Prefab Site Office",
      description:
        "At Landsking Infra Pvt. Ltd, we design and deliver durable and functional Labor Hutments that provide safe, comfortable, and cost-effective accommodation for workforce requirements across construction sites, industrial projects, and remote locations.",
      image: "/menupageimg/mod4.png",
    },
    {
      id: 3,
      title: "Labor Hutments",
      subtitle: "Prefabricated Industrial Shed Manufacturers",
      description:
        "We manufacture high-quality prefabricated industrial sheds that are strong, versatile, and tailored to meet the specific requirements of various industries.",
      image: "/menupageimg/mod3.jpg",
    },
    {
      id: 4,
      title: "Portable Security Guard Cabins",
      subtitle: "FPortable Security Guard Cabins",
      description:
        "Portable Security Guard Cabins are compact, movable structures designed to provide a safe, comfortable, and functional workspace for security personnel. Built with durable materials such as steel, aluminum, or high-quality insulated panels, these cabins are weather-resistant and sturdy, ensuring long-lasting use in both indoor and outdoor environments.",
      image: "/menupageimg/mod8.jpg",
    },
    {
      id: 5,
      title: "Clean Room",
      subtitle: "Clean Room",
      description:
        "offers advanced cleanroom solutions for controlled environments in industries like pharmaceuticals, electronics, and biotechnology. Our cleanrooms are designed with precision to meet stringent hygiene, airflow, and temperature control standards, ensuring optimal conditions for sensitive operations.",
      image: "/menupageimg/mod9.png",
    },
    {
      id: 6,
      title: "Prefabricated Toilet",
      subtitle: "Prefabricated Toilet",
      description:
        "Landsking Infra Pvt. Ltd. provides high-quality prefabricated toilet solutions that are durable, easy to install, and efficient for use in a wide range of applications, including construction sites, industrial facilities, public places, and remote locations",
      image: "/menupageimg/mod10.png",
    },
    {
      id: 7,
      title: "Prefab Porta Cabins Manufacturer",
      subtitle: "Prefab Porta Cabins Manufacturer",
      description:
        "Landsking Infra Pvt. Ltd. provides high-quality prefabricated toilet solutions that are durable, easy to install, and efficient for use in a wide range of applications, including construction sites, industrial facilities, public places, and remote locations",
      image: "/menupageimg/mod11.jpeg",
    },
    {
      id: 8,
      title: "Railway Shelters",
      subtitle: "Railway Shelters",
      description:
        "Landsking Infra Pvt. Ltd. delivers robust and reliable railway and telecom shelters, specially designed to perform in harsh outdoor conditions. Manufactured using premium-grade materials, these shelters ensure maximum safety, durability, and functionality for critical applications",
      image: "/menupageimg/mod12.jpg",
    },
    {
      id: 9,
      title: "Cold Storage & Cold Room Manufacturer",
      subtitle: "Railway Shelters",
      description:
        "Our cold storage facilities are designed using high-performance insulated panels and modern refrigeration technology to deliver superior energy efficiency. Suitable for a wide range of applications — from perishable goods to pharmaceuticals —  Landsking Infra Pvt. Ltd. ensures reliable preservation, consistent temperature control, and compliance with industry standards.",
      image: "/menupageimg/cold4.png",
    },
  ];

  const faqs: FAQ[] = [
    {
      question: "What is a factory building?",
      answer:
        "A factory building is a structure designed to house manufacturing or production operations.",
    },
    {
      question: "What materials are used in factory building construction?",
      answer:
        "Factory buildings are typically constructed using steel, prefabricated panels, reinforced concrete, and insulated materials for durability and efficiency.",
    },
    {
      question: "What are the benefits of prefabricated factory buildings?",
      answer:
        "They are faster to build, cost-effective, customizable, and more sustainable.",
    },
    {
      question:
        "How does a pre-engineered factory building differ from traditional buildings?",
      answer:
        "Pre-engineered buildings are manufactured off-site and assembled on-site, reducing construction time and cost.",
    },
    {
      question: "Can factory buildings be customized?",
      answer:
        "Yes, they can be tailored to specific design, size, and operational requirements.",
    },
    {
      question: "What are Pre-Engineered Buildings (PEBs)?",
      answer:
        "Pre-Engineered Buildings are factory-fabricated steel structures that are shipped in parts and assembled on-site, offering speed, durability, and cost savings.",
    },
    {
      question:
        "Why choose Pre-Engineered Buildings over conventional construction?",
      answer:
        "PEBs reduce construction time by up to 60%, offer flexibility in design, and ensure long-term strength with minimal maintenance compared to traditional methods.",
    },
    {
      question: "What are Prefabricated Structures?",
      answer:
        "Prefabricated structures are modular buildings manufactured in factories and assembled at site, ensuring faster delivery, reduced labor, and consistent quality.",
    },
    {
      question: "What is Light Gauge Steel Framing (LGSF)?",
      answer:
        "LGSF is an advanced construction method using cold-formed steel sections for walls, roofs, and floors, making structures lightweight, durable, and sustainable.",
    },
    {
      question: "Where is Light Gauge Steel Framing used?",
      answer:
        "LGSF is commonly used in residential buildings, commercial complexes, schools, hospitals, and temporary housing solutions.",
    },
    {
      question: "What are Sandwich Panels in construction?",
      answer:
        "Sandwich Panels are prefabricated wall and roof panels with an insulating core between two metal sheets, offering excellent thermal efficiency and durability.",
    },
    {
      question: "What are the benefits of Sandwich Panels?",
      answer:
        "They provide superior insulation, reduce energy costs, are lightweight, easy to install, and suitable for cold storage, industrial sheds, and modular units.",
    },
    {
      question: "What are Standard Modular Solutions?",
      answer:
        "Standard Modular Solutions are ready-to-use prefabricated units designed for quick installation, flexibility, and cost-effectiveness across industries.",
    },
    {
      question: "What are Ready-to-Use Modular Units?",
      answer:
        "Ready-to-use modular units are pre-built cabins or structures delivered directly to the site, requiring minimal setup and providing instant usability.",
    },
    {
      question: "Where can Ready-to-Use Modular Units be applied?",
      answer:
        "They are ideal for site offices, security cabins, classrooms, healthcare units, toilets, and temporary accommodations.",
    },
  ];

  const possibilities = [
    {
      subtitle: "High Tolerance & Durability",
      description:
        "Engineered with high tolerance, corrosion resistance, and exceptional durability to ensure reliable long-term performance.",
      image: "/industry.jpg",
    },
    {
      subtitle: "Dimensional Accuracy",
      description:
        "Precision manufacturing guarantees exact dimensional accuracy, ensuring the final product meets and exceeds client expectations.",
      image: "/industry.jpg",
    },
    {
      subtitle: "Quick Erection & Installation",
      description:
        "Designed for rapid erection, enabling swift installation even in complex or challenging site conditions.",
      image: "/industry.jpg",
    },
    {
      subtitle: "Thermal Efficiency",
      description:
        "Insulated panels maintain a 5–7°C temperature difference, significantly enhancing energy efficiency and comfort.",
      image: "/industry.jpg",
    },
    {
      subtitle: "Accelerated Project Timelines",
      description:
        "Optimized production and installation processes ensure timely delivery, meeting tight project schedules.",
      image: "/industry.jpg",
    },
    {
      subtitle: "Robust Construction",
      description:
        "Strong and sturdy construction ensures long service life, structural stability, and reliable performance.",
      image: "/industry.jpg",
    },
  ];
  const [cardsToShow, setCardsToShow] = useState<Possibility[]>([]);
  const [visibleCards, setVisibleCards] = useState(4);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1); // 📱 mobile
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2); // 💻 tablet
      } else {
        setVisibleCards(4); // 🖥 desktop
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  useEffect(() => {
    const sliced = possibilities
      .slice(startIndex, startIndex + visibleCards)
      .concat(
        startIndex + visibleCards > possibilities.length
          ? possibilities.slice(
              0,
              (startIndex + visibleCards) % possibilities.length
            )
          : []
      );
    setCardsToShow(sliced);
  }, [startIndex, visibleCards, possibilities]);

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev === 0 ? possibilities.length - visibleCards : prev - 1
    );
  };

  const nextSlide = () => {
    setStartIndex((prev) =>
      prev + visibleCards >= possibilities.length ? 0 : prev + 1
    );
  };
  const [selectedId, setSelectedId] = useState(3);

  const [open, setOpen] = useState(false);
  const selectedArea = areas.find((area) => area.id === selectedId);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const slides = [
    {
      image: "/expertise/third.png",
      title: "Prefabricated Structure",
      link: "#",
    },

    {
      image: "/expertise/third.png",
      title: "Labor Hutment",
      link: "#",
    },
    {
      image: "/expertise/third.png",
      title: "Control Room",
      link: "#",
    },
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const stats = [
    {
      label: "Years of Expertise",
      value: 20,
      suffix: "+",
      icon: <FaAward className="text-[#000080] text-xl" />,
    },
    {
      label: "Projects Delivered",
      value: 500,
      suffix: "+",
      icon: <FaProjectDiagram className="text-[#000080] text-xl" />,
    },
    {
      label: "Nationwide Presence",
      value: 25,
      suffix: "+ States",
      icon: <FaGlobeAsia className="text-[#000080] text-xl" />,
    },
    {
      label: "Certified Processes",
      value: 100,
      suffix: "%",
      icon: <FaCertificate className="text-[#000080] text-xl" />,
    },
  ];

  return (
    <>
      <Rndheader />
      <RNDMechanicalCom />
      {/* description */}
      <section className="bg-white py-12 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#000080] leading-snug  ">
              Mechanical Design and Simulation Services for Faster
              Time-to-Market{" "}
            </h2>
            <div className="w-20 h-[3px] bg-[#272727] mt-3 mb-6"></div>

            <p className="text-gray-700 mb-4 leading-relaxed">
              At landscapinfra, we eliminate design inefficiencies and
              accelerate product development through high-fidelity mechanical
              engineering services. By combining AI-powered design automation,
              performance-based material optimization, and sustainability-driven
              frameworks, we help manufacturers avoid costly reworks, delays,
              and compliance issues. Our experienced engineers serve aerospace,
              automotive, and industrial sectors—ensuring every design aligns
              with ISO, ASME, and global quality standards. From advanced CAD
              modeling to precise FEA and CFD simulations, we create
              production-ready designs that reduce prototyping time, enhance
              reliability, and support faster market launches. With Flatworld
              Solutions, you gain not just engineering precision but a trusted
              partner committed to innovation, performance, and long-term
              success.
            </p>

            <Link href="/contact">
              <button className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
                GET A QUOTE
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <img
              src="/menupageimg/mod13.jpg"
              alt="EPACK Prefab Industrial Building"
              className="rounded-md shadow-md w-[600px] h-[400px] object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            />
          </div>
        </div>
      </section>
      {/* end description */}

      {/* mechanical services */}
      <main className="bg-white px-4 sm:px-6 md:px-12">
        <section className="bg-white py-10 sm:py-12 px-2 sm:px-6 md:px-12">
          <div className="flex flex-col items-center justify-center text-center py-10 bg-white">
            <h1 className="text-2xl md:text-3xl font-bold text-[#000080] mb-4">
              Our Services
            </h1>
            <p className="text-black  text-lg md:text-2xl max-w-2xl">
              We provide high-quality mechanical engineering services tailored
              to meet your project needs.
            </p>
          </div>

          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card
              icon={<FaDraftingCompass size={34} className="text-white" />} // Compass = design conversion precision
              title="CAD Conversion Services"
              description="Transform outdated blueprints into accurate, editable CAD models that modernize your design and manufacturing workflow. Our CAD conversion services help reduce project costs, enhance collaboration, and improve design precision. Our skilled engineers and advanced tools ensure seamless interactivity, ISO-compliant accuracy, and faster product development with minimal errors."
            />

            <Card
              icon={<FaPencilRuler size={34} className="text-white" />} // Pencil + ruler = drafting
              title="2D Drafting Services"
              description="Produce modern, productive, ISO-compliant technical drawings for architectural, mechanical, and construction projects, empowering smooth design iterations. Our expert CAD drafting accelerates product development while ensuring efficiency."
            />

            <Card
              icon={<FaCube size={34} className="text-white" />} // Cube = 3D modeling
              title="3D CAD Modeling Services"
              description="Create accurate 3D models to visualize components, test tolerances, detect interferences, and enhance collaboration across engineering, architecture, and manufacturing teams."
            />

            <Card
              icon={<FaCogs size={34} className="text-white" />} // Cogs = mechanical design
              title="CAD Design Services"
              description="Comprehensive CAD design solutions covering concept development, CAE integration, fixture and mold design, prototyping, and manufacturing, backed by expert mechanical engineering knowledge."
            />

            <Card
              icon={<FaUndoAlt size={34} className="text-white" />} // Undo = reverse engineering
              title="Reverse Engineering Services"
              description="Accurately recreate digital models from physical parts using 3D scanning, parametric modeling, and benchmarking to support system upgrades and in-depth competitor analysis."
            />

            <Card
              icon={<FaLightbulb size={34} className="text-white" />} // Lightbulb = innovation, ideas
              title="Product Design & Development"
              description="End-to-end product lifecycle support—from concept and prototyping to testing and manufacturing—ensures compliance, accelerates time-to-market, and drives innovation."
            />

            <Card
              icon={<FaIndustry size={34} className="text-white" />} // Industry = manufacturing optimization
              title="Design for Manufacturing & Value Engineering"
              description="Optimize designs for manufacturability through part standardization, material efficiency, and cost-benefit engineering, enabling scalable, efficient, and high-quality production."
            />

            <Card
              icon={<FaFlask size={34} className="text-white" />} // Flask = testing, prototyping
              title="Rapid Prototyping & Testing Support"
              description="Speed up product validation with fast-turn prototypes and simulation-driven testing to ensure performance and reliability before full-scale production."
            />
          </div>
        </section>
      </main>
      {/* endcapill */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
          Our Products
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Menu */}
          <div className="w-full md:w-1/4">
            {/* Mobile Dropdown */}
            <div className="md:hidden mb-0">
              <button
                onClick={() => setOpen(!open)}
                className="w-full p-3 rounded-t-lg text-white font-semibold flex justify-between items-center bg-[#000080]"
              >
                {areas.find((a) => a.id === selectedId)?.title}
                <svg
                  className="w-5 h-5 text-[#8080FF]"
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
                <div className="mt-0 w-full bg-[#000080] rounded-b-lg shadow">
                  {areas.map((area) => (
                    <button
                      key={area.id}
                      onClick={() => {
                        setSelectedId(area.id);
                        setOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-[#8080FF]  ${
                        selectedId === area.id ? "text-white font-semibold" : ""
                      }`}
                    >
                      {area.title}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex flex-col bg-[#000080] text-white rounded-lg p-3">
              {areas.map((area, idx) => (
                <button
                  key={area.id}
                  onClick={() => setSelectedId(area.id)}
                  className={`flex items-center gap-3 px-5 py-4 text-left transition ${
                    selectedId === area.id
                      ? " font-bold"
                      : "hover: text-gray-300"
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
            // *** CHANGE HERE: flex-col-reverse on mobile, md:flex-row on desktop ***
            <div className="flex flex-col-reverse md:flex-row bg-white rounded-lg shadow overflow-hidden w-full">
              <div
                className="
    p-6 flex flex-col justify-center w-full md:w-1/2
    rounded-lg                
    md:rounded-none          
    md:rounded-tl-lg md:rounded-bl-lg
    shadow border border-[#808080] md:border-r-0
  "
              >
                <h3 className="text-2xl font-semibold text-blue-900 mb-3">
                  {selectedArea.subtitle}
                </h3>
                <p className="text-gray-700 mb-5">{selectedArea.description}</p>
                <button className="flex items-center gap-2 text-blue-900 font-semibold hover:underline">
                  More{" "}
                  <span className=" p-1 rounded-full text-[#000080]">→</span>
                </button>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={selectedArea.image}
                  alt={selectedArea.subtitle}
                  className="w-full h-64 md:h-163 object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </section>
      {/* explore content */}
      {/* business benifts */}
      <section className="text-black py-10 md:mx-8">
        <div className="mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Why Choose Us as Your Mechanical
            <br /> Engineering Services Company?
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center">
            {cardsToShow.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
              >
                <img src={item.image} className="w-full h-44 object-cover" />
                <div className="p-4">
                  <p className="text-sm text-black font-semibold mb-2 md:text-xl">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-black">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-6 gap-4">
            <button
              onClick={prevSlide}
              className="bg-[#000080] p-2 rounded-full shadow hover:bg-gray-700"
            >
              <ChevronLeft className="w-6 h-6 text-[#fff]" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-[#000080] p-2 rounded-full shadow hover:bg-gray-700"
            >
              <ChevronRight className="w-6 h-6 text-[#fff]" />
            </button>
          </div>
        </div>
      </section>
      {/* benefits end */}
      {/* special section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#000080] text-center mb-8">
            Accelerate Construction with Prefabrication – Save Up to 60% Time
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Image Section (Left Side) */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#000080] z-10"></div>
              <img
                src="/menupageimg/mod16.jpg"
                alt="PUF panels in industrial shed"
                width={600}
                height={400}
                className="rounded-md shadow-md w-[600px] h-[400px] object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
              />
            </div>

            {/* Text Section (Right Side) */}
            <div>
              <p className="text-gray-700 leading-relaxed">
                With advanced prefabrication technology,{" "}
                <b>Landsking Infra Pvt. Ltd.</b> helps you build smarter and
                faster. Our modern, fully automated production systems ensure
                precision, consistency, and reduced dependency on manual labor,
                making prefabrication up to <b>60% quicker</b> than conventional
                construction methods.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                By cutting down construction timelines, our prefabricated
                solutions not only <b>speed up project delivery</b> but also
                guarantee <b>strength, durability, and long-term reliability</b>
                . This makes them the preferred choice for a wide range of
                projects, including{" "}
                <b>
                  commercial spaces, industrial facilities, residential
                  complexes, and institutional buildings
                </b>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* end special section */}
      {/* why choose us */}
      <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-6 flex items-center">
              Why Choose Landsking Infra Pvt. Ltd for PEBs?
            </h2>

            <p>
              25+ Years of Expertise in prefabricated and steel building
              solutions Nationwide Presence with a strong logistics and project
              execution network In-House Design & Engineering powered by 3D
              modeling and load optimization Certified Manufacturing Standards
              ensuring compliance with IS codes and quality benchmarks Timely
              Project Delivery backed by structured planning and skilled
              professionals End-to-End Turnkey Solutions covering design,
              fabrication, delivery, and installation
            </p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="/industry.jpg" // replace with your image
              alt="Why Choose Us"
              width={700}
              height={450}
              className="relative rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>
      <Brand />
      {/* Heading */}

      <Rndfooter />
    </>
  );
}
