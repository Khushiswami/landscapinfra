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
import {
  FaSearch, // Requirement Analysis
  FaMapMarkedAlt, // Strategic Planning
  FaCheckCircle, // Quality Assurance
  FaHandshake, // Delivery & Support
} from "react-icons/fa";
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

export default function Mechanical() {
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
      title: "  Design & Development Services ",
      subtitle: "Comprehensive Mechanical Design & Development Services",
      description:
        "We offer complete mechanical engineering solutions, including core design, analysis, CAD modeling, and product development services across industries. Our expertise covers machine design, sheet metal, assembly modeling, parametric 3D modeling, and tools, fixtures, and jigs design. Using advanced platforms like SolidWorks, CATIA, and Autodesk Inventor, we deliver Global Standard services and manufacturable designs. From legacy conversion to full product lifecycle support, our services enhance collaboration, accelerate development, ensure compliance, and drive innovation at every stage.",
      image: "/menupageimg/mod15.png",
    },
    {
      id: 2,
      title: "Advanced Simulation Services",
      subtitle: "Advanced Simulation, Analysis & Virtual Testing Services",
      description:
        "We deliver comprehensive simulation, analysis, and virtual testing services to improve engineering accuracy and product reliability. Our expertise spans finite element analysis (FEA), fatigue, crash and impact, CAE modal, structural, stress, thermal, vibration, and computational fluid dynamics simulations. Additionally, we provide failure, tolerance, and load testing analyses along with virtual prototyping services. Leveraging advanced simulation engineering tools, our solutions help validate designs, reduce defects, ensure compliance, and accelerate product development across industries.",
      image: "/menupageimg/mod4.png",
    },
    {
      id: 3,
      title: "Industrial Design  Services",
      subtitle: "Industrial Design & Engineering Automation Services",
      description:
        "We provide end-to-end industrial design and engineering automation services to optimize manufacturing processes and product quality. Our expertise includes casting design, vacuum casting, CNC programming, tooling and die design, assembly line optimization, and tolerance analysis for machining. As well, we support process planning, engineering fabrication, production cost estimation, project management, proposal review, bid management, and engineering change orders. Taking advantage of advanced automation tools and best practices, we help industries improve efficiency, reduce errors, ensure compliance, and accelerate production timelines",
      image: "/menupageimg/mod3.jpg",
    },
    {
      id: 4,
      title: "Plant, Piping & HVAC Design Services",
      subtitle: "Plant, Piping & HVAC Design Services",
      description:
        "We provide complete plant, piping, and HVAC design services to optimize operational efficiency, safety, and compliance. Our offerings include plant design engineering, Plant Design Management System (PDMS), modular plant design, piping design and drafting, HVAC ducting design, plumbing, firefighting, and fire protection engineering services. Leveraging advanced CAD and simulation tools, our expert team ensures accuracy in ISO-compliant designs that streamline construction, reduce errors, and enhance overall system performance across industries.",

      image: "/menupageimg/mod8.jpg",
    },

    {
      id: 6,
      title: "Specialized  Design Services",
      subtitle: "Specialized Sector Design Services",
      description:
        "We offer specialized design services across niche industries to meet unique technical and functional requirements. We are experts in assisting industries with our services. like tower design, ship deck design and drafting, and consumer electronics product design. Using advanced CAD tools and industry best practices, we deliver precise, ISO-compliant, and manufacturable designs that enhance performance, ensure compliance, and accelerate product development for specialized sectors.",
      image: "/menupageimg/mod10.png",
    },
    {
      id: 7,
      title: "Product  Services",
      subtitle: "Product Lifecycle & Documentation Services",
      description:
        "We provide each and every product lifecycle and documentation services to support efficient development, compliance, and operations. We are experts in PLM implementation and customization, technical publications, installation and maintenance manuals, engineering change documentation, CE/UL certification support, and material compliance reports. Leveraging industry best practices and advanced tools, we ensure accurate, ISO-compliant documentation that enhances traceability, reduces errors, and accelerates product launching.",
      image: "/menupageimg/mod11.jpeg",
    },
    {
      id: 8,
      title: " Engineering & Sustainability Services",
      subtitle:
        "We offer Expert engineering and sustainability services to optimize designs and reduce costs. Our solutions include design optimization, lightweighting, material substitution, and energy efficiency improvements.We also ensure compliance with environmental regulations like RoHS and REACH, supporting sustainable and efficient product development.",
      description: "",
      image: "/menupageimg/mod12.jpg",
    },
  ];

  const services = [
    {
      icon: <FaSearch size={40} className="text-[#000080]" />,
      title: "Requirement Analysis",
      description:
        "We begin by assessing your business goals, technical specifications, and project constraints to tailor our mechanical engineering services. This ensures compliance, addresses engineering challenges, and achieves long-term performance objectives.",
    },
    {
      icon: <FaMapMarkedAlt size={40} className="text-[#000080]" />,
      title: "Strategic Planning",
      description:
        "Our engineers and project leads develop a clear roadmap, selecting the right tools, experts, and delivery methods to optimize efficiency, accuracy, and timely delivery across all mechanical engineering services.",
    },
    {
      icon: <FaDraftingCompass size={40} className="text-[#000080]" />,
      title: "Design & Development",
      description:
        "Strategic plans are translated into action using CAD modeling, simulation, and virtual prototyping. We engineer every component for high performance, durability, and scalability.",
    },
    {
      icon: <FaIndustry size={40} className="text-[#000080]" />,
      title: "Implementation",
      description:
        "Once SLAs are defined, our engineers execute detailed modeling, drafting, analysis, and documentation tasks while maintaining full transparency and alignment with project goals.",
    },
    {
      icon: <FaCheckCircle size={40} className="text-[#000080]" />,
      title: "Quality Assurance",
      description:
        "As an ISO-certified company, we rigorously test and review every deliverable to ensure accuracy, validated simulations, and compliance with GD&T standards for reliable outcomes.",
    },
    {
      icon: <FaHandshake size={40} className="text-[#000080]" />,
      title: "Delivery & Support",
      description:
        "Final deliverables are securely shared in your preferred format. We offer ongoing support, including updates, documentation, and technical guidance for seamless post-project continuity.",
    },
  ];

  const possibilities = [
    {
      subtitle: "100% Data security",
      description:
        "We implement ISO-certified data protection protocols to ensure confidentiality at every stage. A signed NDA backs every project, safeguarding your data against breaches, downtime, or unauthorized access.",
      image: "/choose/choseone.webp",
    },
    {
      subtitle: "Global Standard Infrastructure",
      description:
        "Our team uses advanced CAD workstations, simulation software, secure data centers, and redundant communication networks",
      image: "/choose/global.png",
    },
    {
      subtitle: "Precision-Engineered Mechanical Services",
      description:
        "Using industry-standard tools like SolidWorks, AutoCAD, and Creo, we deliver models, assemblies, and components with unmatched accuracy, fidelity, and manufacturability.",
      image: "/choose/precsion.jpg",
    },
    {
      subtitle: "Multiple Quality Checks",
      description:
        "Every deliverable undergoes multi-stage quality inspections, guided by Lean Six Sigma principles, to detect and resolve even minor errors, ensuring all mechanical engineering services meet strict technical standards.",
      image: "/choose/qualitycheck.png",
    },
    {
      subtitle: "Compliance with Industry Standards",
      description:
        "All designs adhere to global protocols such as ASME, ISO, ASTM, SAE, BS, DIN, ANSI, and MIL, guaranteeing designs meet tolerancing, material specifications, and documentation requirements",
      image: "/choose/compliance.jpg",
    },
    {
      subtitle: "Quick Turnaround Time",
      description:
        "Our 10+ global delivery centers offer fast project execution and 24/48-hour response times while maintaining high accuracy, scalability, and service quality.",
      image: "/choose/quick.png",
    },
    {
      subtitle: "Flexible Pricing Options",
      description:
        "Pricing models are tailored based on team size, resource hours, shift patterns, location, and service complexity, aligning perfectly with your operational and budgeting goals.",
      image: "/choose/flexible.jpg",
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
      <section className="bg-white py-12 px-4 md:px-15">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
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
      <main className="bg-white px-4 sm:px-6 md:px-6">
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
            <Card
              icon={<FaDraftingCompass size={34} className="text-white" />} // Compass = design conversion precision
              title="CAD Conversion Services"
              description="Transform outdated blueprints into accurate, editable CAD models that modernize your design and manufacturing workflow. Our CAD conversion services help reduce project costs, enhance collaboration, and improve design precision. Our skilled engineers and advanced tools ensure seamless interactivity, ISO-compliant accuracy, and faster product development with minimal errors."
            />
          </div>
        </section>
      </main>
      {/* endcapill */}
      <section className=" mx-auto md:mx-12 px-4 py-10">
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
                  className="w-full h-64 md:h-155 object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </section>
      {/* explore content */}
      {/* business benifts */}
      <section className="text-black py-10 md:mx-8">
        <div className="mx-auto px-3 md:px-4">
          <h2 className="text-2xl md:text-3xl font-bold  text-center mb-10 text-[#000080]">
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
                <img src={item.image} className="w-full object-cover " />
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
      {/* our process */}
      <section className="py-16 ">
        {/* Heading Row */}
        <div className="text-center mb-12 px-3 md:px-0">
          <h1 className="text-2xl md:text-3xl font-bold text-[#000080]">
            Our Mechanical Engineering Service workflow
          </h1>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            At landscapinfra, we utilize a standardized workflow to streamline
            operations, reduce costs, and provide high-quality mechanical
            engineering services. Our process ensures that every step aligns
            with your project goals, technical requirements, and compliance
            standards.
          </p>
        </div>

        {/* Boxes Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 px-1 md:px-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg  hover: transition duration-300 flex flex-col items-left text-left p-6 group"
            >
              {/* Icon */}
              <div className="text-[#000080] p-4 rounded-full mb-4 flex items-left justify-left transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>

              {/* Title */}
              <h2 className="text-lg font-semibold text-black mb-2">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Brand />
      {/* Heading */}

      <Rndfooter />
    </>
  );
}
