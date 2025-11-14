"use client";
import { useState, ReactNode, useEffect } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

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
import {
  Construction,
  Building2,
  Plug,
  Landmark,
  Cuboid,
  FileText,
  Flame,
} from "lucide-react";
import { useInView } from "react-intersection-observer";

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
import { ArrowRight } from "lucide-react";

import Link from "next/link";
import Rndfooter from "yes/Components/Rndfooter";
import Brand from "yes/Components/ClientP";
import ContactSection from "yes/Components/ContactSection";
import Rndtestimonial from "yes/Components/Rndtestimonial";

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
      <div className="relative w-full h-25 sm:h-25 overflow-hidden flex items-center justify-center">
        {/* Centered Icon */}
        <div className="absolute flex items-center justify-center bg-white p-2 sm:p-4 rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>

        {/* Hover underline effect */}
      </div>

      {/* Text */}
      <div className="px-4 sm:px-5 pb-6 flex-1 flex flex-col mt-0">
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
      image: "/mk/Mechanical Design & Development Service.jpg",
    },
    {
      id: 2,
      title: "Advanced Simulation Services",
      subtitle: "Advanced Simulation, Analysis & Virtual Testing Services",
      description:
        "We deliver comprehensive simulation, analysis, and virtual testing services to improve engineering accuracy and product reliability. Our expertise spans finite element analysis (FEA), fatigue, crash and impact, CAE modal, structural, stress, thermal, vibration, and computational fluid dynamics simulations. Additionally, we provide failure, tolerance, and load testing analyses along with virtual prototyping services. Leveraging advanced simulation engineering tools, our solutions help validate designs, reduce defects, ensure compliance, and accelerate product development across industries.",
      image: "/mk/Advanced Simulation, Analysis.jpg",
    },
    {
      id: 3,
      title: "Industrial Design  Services",
      subtitle: "Industrial Design & Engineering Automation Services",
      description:
        "We provide end-to-end industrial design and engineering automation services to optimize manufacturing processes and product quality. Our expertise includes casting design, vacuum casting, CNC programming, tooling and die design, assembly line optimization, and tolerance analysis for machining. As well, we support process planning, engineering fabrication, production cost estimation, project management, proposal review, bid management, and engineering change orders. Taking advantage of advanced automation tools and best practices, we help industries improve efficiency, reduce errors, ensure compliance, and accelerate production timelines",
      image: "/mk/Industrial Design & Engineering Automation Services.jpg",
    },
    {
      id: 4,
      title: "Plant, Piping & HVAC Design Services",
      subtitle: "Plant, Piping & HVAC Design Services",
      description:
        "We provide complete plant, piping, and HVAC design services to optimize operational efficiency, safety, and compliance. Our offerings include plant design engineering, Plant Design Management System (PDMS), modular plant design, piping design and drafting, HVAC ducting design, plumbing, firefighting, and fire protection engineering services. Leveraging advanced CAD and simulation tools, our expert team ensures accuracy in ISO-compliant designs that streamline construction, reduce errors, and enhance overall system performance across industries.",

      image: "/mk/Plant, Piping & HVAC Design Services.jpg",
    },

    {
      id: 6,
      title: "Specialized  Design Services",
      subtitle: "Specialized Sector Design Services",
      description:
        "We offer specialized design services across niche industries to meet unique technical and functional requirements. We are experts in assisting industries with our services. like tower design, ship deck design and drafting, and consumer electronics product design. Using advanced CAD tools and industry best practices, we deliver precise, ISO-compliant, and manufacturable designs that enhance performance, ensure compliance, and accelerate product development for specialized sectors.",
      image: "/mk/Specialized Sector Design Services.jpeg",
    },
    {
      id: 7,
      title: "Product  Services",
      subtitle: "Product Lifecycle & Documentation Services",
      description:
        "We provide each and every product lifecycle and documentation services to support efficient development, compliance, and operations. We are experts in PLM implementation and customization, technical publications, installation and maintenance manuals, engineering change documentation, CE/UL certification support, and material compliance reports. Leveraging industry best practices and advanced tools, we ensure accurate, ISO-compliant documentation that enhances traceability, reduces errors, and accelerates product launching.",
      image: "/mk/Product Lifecycle & Documentation Services.jpg",
    },
    {
      id: 8,
      title: " Engineering & Sustainability Services",
      description:
        "We offer Expert engineering and sustainability services to optimize designs and reduce costs. Our solutions include design optimization, lightweighting, material substitution, and energy efficiency improvements.We also ensure compliance with environmental regulations like RoHS and REACH, supporting sustainable and efficient product development.",
      subtitle: "Engineering & Sustainability Services",
      image: "/mk/Engineering & Sustainability Services.jpg",
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
      image: "/choose/draf.png",
    },
    {
      subtitle: "Global Standard Infrastructure",
      description:
        "Our team uses advanced CAD workstations, simulation software, secure data centers, and redundant communication networks",
      image: "/choose/global.jpg",
    },
    {
      subtitle: "Precision-Engineered Mechanical Services",
      description:
        "Using industry-standard tools like SolidWorks, AutoCAD, and Creo, we deliver models, assemblies, and components with unmatched accuracy, fidelity, and manufacturability.",
      image: "/choose/precision.jpg",
    },
    {
      subtitle: "Multiple Quality Checks",
      description:
        "Every deliverable undergoes multi-stage quality inspections, guided by Lean Six Sigma principles, to detect and resolve even minor errors, ensuring all mechanical engineering services meet strict technical standards.",
      image: "/choose/quality.jpg",
    },
    {
      subtitle: "Compliance with Industry Standards",
      description:
        "All designs adhere to global protocols such as ASME, ISO, ASTM, SAE, BS, DIN, ANSI, and MIL, guaranteeing designs meet tolerancing, material specifications, and documentation requirements",
      image: "/choose/Data security.jpg",
    },
    {
      subtitle: "Quick Turnaround Time",
      description:
        "Our 10+ global delivery centers offer fast project execution and 24/48-hour response times while maintaining high accuracy, scalability, and service quality.",
      image: "/choose/quick.jpg",
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
    // setCardsToShow(sliced);
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
  const faqs: FAQ[] = [
    {
      question:
        " What are the benefits of outsourcing mechanical engineering services?",
      answer:
        "Outsourcing mechanical design allows faster delivery, reduced overhead costs, and access to expert CAD engineers without the need for expensive in-house teams.",
    },
    {
      question:
        "Why should I choose LandsKing Infra for mechanical design services?",
      answer:
        " LandsKing Infra combines expert CAD modeling, product design, and prototyping to deliver precise, ISO-compliant engineering solutions that minimize cost and development time",
    },
    {
      question: "How does 3D CAD modeling improve product development?",
      answer:
        " 3D CAD modeling helps visualize designs, check tolerances, detect interference, and ensure perfect component fit before manufacturing.",
    },
    {
      question: " What industries does LandsKing Infra serve?",
      answer:
        " We work with clients across manufacturing, automotive, construction, and industrial design sectors, ensuring precision and efficiency in every project.",
    },
    {
      question: " What is reverse engineering and why is it important?",
      answer:
        "Reverse engineering recreates 3D digital models from physical parts to help improve performance, create replacements, or study competitors’ products.",
    },
    {
      question: "How does CAD conversion improve legacy data management?",
      answer:
        "CAD conversion transforms old blueprints or paper drawings into accurate digital files that are easier to edit, store, and reuse across projects.",
    },
    {
      question: "Does LandsKing Infra offer both 2D drafting and 3D modeling?",
      answer:
        " Yes, our team provides complete design support—from detailed 2D drafting to realistic 3D CAD modeling for mechanical, architectural, and industrial projects.",
    },
    {
      question: "How does CAD conversion improve legacy data management?",
      answer:
        "CAD conversion transforms old blueprints or paper drawings into accurate digital files that are easier to edit, store, and reuse across projects.",
    },
    {
      question: "What software tools are used for CAD and simulation services?",
      answer:
        "We use industry-leading software like SolidWorks, AutoCAD, CATIA, and ANSYS to deliver high-precision modeling, analysis, and design validation.",
    },
    {
      question: "What makes structural engineering design services essential?",
      answer:
        " Structural engineering ensures stability, safety, and load-bearing capacity for industrial, commercial, and residential construction projects",
    },
    {
      question: "How does LandsKing Infra ensure data confidentiality?",
      answer:
        " All project files are handled under strict NDA agreements and transferred through secure, encrypted cloud systems to maintain complete data protection.",
    },
    {
      question:
        "What is included in your product design and development services?",
      answer:
        "Our product design covers concept creation, 3D modeling, prototyping, material selection, and manufacturing assistance—all under one roof.",
    },
    {
      question: "How does BIM modeling improve construction planning?",
      answer:
        " BIM modeling integrates architecture, structure, and MEP designs, helping detect clashes early and streamline the entire project workflow.",
    },
    {
      question: " How do electrical engineering design services add value?",
      answer:
        " Electrical design services improve system safety, ensure power efficiency, and provide accurate control panel layouts for industrial and utility sectors.",
    },
    {
      question: "How do I start a project with LandsKing Infra?",
      answer:
        "Simply share your requirements and design files, and our team will prepare a customized proposal with timelines, cost, and deliverables.",
    },
    {
      question: " What is the advantage of simulation and analysis in design?",
      answer:
        "Simulation predicts how components behave under stress, heat, and vibration, reducing the need for multiple physical prototypes.",
    },
    {
      question: " Do you provide value engineering and cost optimization?",
      answer:
        "Yes,we help reduce material costs, simplify assemblies, and improve production efficiency without compromising design quality.",
    },
    {
      question:
        " Why is fire protection engineering important for industrial facilities?",
      answer:
        " Fire protection design ensures NFPA compliance and safety through accurate system layout, hydraulic calculations, and hazard analysis.",
    },
    {
      question:
        "  Do you assist with technical documentation and compliance reports?",
      answer:
        "Yes, we create professional manuals, QC protocols, and CE/UL documentation to ensure your project meets international standards.",
    },
    {
      question:
        "What are the key benefits of outsourcing civil engineering services?",
      answer:
        "Outsourcing civil projects saves time, ensures accuracy in design layouts, and helps manage infrastructure development efficiently.",
    },
    {
      question:
        "  How can simulation and prototyping reduce product development time?",
      answer:
        "By testing and validating virtually before production, companies avoid costly rework and achieve faster, error-free product launches.",
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
  const servicesing = [
    {
      id: 1,
      icon: <Construction className="w-8 h-8 text-white" aria-hidden="true" />,
      title: "Civil Engineering Services",
      desc: "Landscapinfra offers reliable and affordable civil engineering support for site layout, infrastructure, and urban projects. We work on roads, bridges, drainage, and land development to ensure strong and lasting results.",
    },
    {
      id: 2,
      icon: <Building2 className="w-8 h-8 text-white" aria-hidden="true" />,
      title: "Structural Engineering Services",
      desc: "We design and plan safe, stable, and efficient structures for all kinds of projects. From industrial buildings to heavy foundations, our team ensures strength and performance in every design.",
    },
    {
      id: 3,
      icon: <Plug className="w-8 h-8 text-white " aria-hidden="true" />,
      title: "Electrical Engineering Services",
      desc: "Our team provides practical electrical design solutions for power systems, control panels, and automation setups. We help industries keep their operations safe, efficient, and well-connected.",
    },
    {
      id: 4,
      icon: <Landmark className="w-8 h-8 text-white" aria-hidden="true" />,
      title: "Infrastructure Engineering Services",
      desc: "We handle complete infrastructure planning and coordination for utilities, transport systems, and plant layouts. Every design is precise, clear, and ready for construction.",
    },
    {
      id: 5,
      icon: <Cuboid className="w-8 h-8 text-white" aria-hidden="true" />,
      title: "BIM Services",
      desc: "Our Building Information Modeling (BIM) helps reduce errors and improve project speed. We use smart 3D models to plan, estimate, and coordinate work more effectively.",
    },
    {
      id: 6,
      icon: <FileText className="w-8 h-8 text-white" aria-hidden="true" />,
      title: "Technical Manuals & Engineering Documentation",
      desc: "We create clear and accurate manuals, SOPs, and datasheets to support training, operations, and audits. Each document is simple, useful, and reliable.",
    },
    {
      id: 7,
      icon: <Flame className="w-8 h-8 text-white" aria-hidden="true" />,
      title: "Fire Protection Engineering Services",
      desc: "We design effective fire protection systems with accurate planning and safety checks. Our service helps ensure protection for industrial plants, offices, and public buildings.",
    },
  ];
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
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
            {/* <Link href="/rnd-contact">
              <button className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
                GET A QUOTE
              </button>
            </Link> */}
            <Link
              href="/rnd-contact"
              className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors inline-block"
            >
              GET A QUOTE
            </Link>
          </div>
          <div className="flex justify-center">
            <img
              src="/mechenical design.jpg"
              alt=" mechanical services"
              className="rounded-md shadow-md w-[600px] h-[400px] object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            />
          </div>
        </div>
      </section>
      {/* end description */}

      {/* mechanical services */}
      <main className="bg-white px-4 sm:px-6 md:px-6">
        <section className="bg-white py-4 sm:py-12 px-2 sm:px-6 md:px-12">
          <div className="flex flex-col items-center justify-center text-center py-10 bg-white">
            <h1 className="text-2xl md:text-3xl font-bold text-[#000080] mb-4">
              Our Services
            </h1>
            <p className="text-black  text-lg md:text-2xl max-w-2xl">
              We provide high-quality mechanical engineering services tailored
              to meet your project needs.
            </p>
          </div>

          <div className="container mx-auto grid grid-cols-1  md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              icon={<FaPencilRuler size={38} className="text-[#8080FF]" />} // Pencil + ruler = drafting
              title="2D Drafting Services"
              description="Produce modern, productive, ISO-compliant technical drawings for architectural, mechanical, and construction projects, empowering smooth design iterations. Our expert CAD drafting accelerates product development while ensuring efficiency."
            />

            <Card
              icon={<FaCube size={34} className="text-[#8080FF]" />} // Cube = 3D modeling
              title="3D CAD Modeling Services"
              description="Create accurate 3D models to visualize components, test tolerances, detect interferences, and enhance collaboration across engineering, architecture, and manufacturing teams."
            />

            <Card
              icon={<FaCogs size={34} className="text-[#8080FF]" />} // Cogs = mechanical design
              title="CAD Design Services"
              description="Comprehensive CAD design solutions covering concept development, CAE integration, fixture and mold design, prototyping, and manufacturing, backed by expert mechanical engineering knowledge."
            />

            <Card
              icon={<FaUndoAlt size={34} className="text-[#8080FF]" />} // Undo = reverse engineering
              title="Reverse Engineering Services"
              description="Accurately recreate digital models from physical parts using 3D scanning, parametric modeling, and benchmarking to support system upgrades and in-depth competitor analysis."
            />

            <Card
              icon={<FaLightbulb size={34} className="text-[#8080FF]" />} // Lightbulb = innovation, ideas
              title="Product Design & Development"
              description="End-to-end product lifecycle support—from concept and prototyping to testing and manufacturing—ensures compliance, accelerates time-to-market, and drives innovation."
            />

            <Card
              icon={<FaIndustry size={34} className="text-[#8080FF]" />} // Industry = manufacturing optimization
              title="Design for Manufacturing & Value Engineering"
              description="Optimize designs for manufacturability through part standardization, material efficiency, and cost-benefit engineering, enabling scalable, efficient, and high-quality production."
            />

            <Card
              icon={<FaFlask size={34} className="text-[#8080FF]" />} // Flask = testing, prototyping
              title="Rapid Prototyping & Testing Support"
              description="Speed up product validation with fast-turn prototypes and simulation-driven testing to ensure performance and reliability before full-scale production."
            />
            <Card
              icon={<FaDraftingCompass size={34} className="text-[#8080FF]" />} // Compass = design conversion precision
              title="CAD Conversion Services"
              description="Transform outdated blueprints into accurate, editable CAD models that modernize your design and manufacturing workflow. Our CAD conversion services help reduce project costs, enhance collaboration, and improve design precision. Our skilled engineers and advanced tools ensure seamless interactivity, ISO-compliant accuracy, and faster product development with minimal errors."
            />
          </div>
        </section>
      </main>

      {/* endcapill */}
      <section className=" mx-auto px-4 py-10 md:px-17 lg:px-19">
        <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-8">
          Our Products{" "}
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Menu */}
          <div className="w-full md:w-2/4">
            {/* Mobile Dropdown */}
            <div className="md:hidden mb-0">
              <button
                onClick={() => setOpen(!open)}
                className="w-full p-3 rounded-t-lg text-white font-semibold flex justify-between items-left bg-[#000080]"
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
                <div className="mt-0 w-full bg-[#000080] rounded-b-lg ">
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
            {/* <div className="hidden md:flex flex-col bg-[#000080] text-white rounded-lg p-3"> */}
            <div className="hidden md:flex h-[70vh] flex-col bg-[#000080] text-white rounded-lg pt-[27px] pb-[27px] px-[5px]">
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
          {/* Right Content */}
          {selectedArea && (
            <div className="flex flex-col-reverse md:flex-row bg-white rounded-lg border border-[#808080] overflow-hidden w-full items-center">
              {/* ✅ Left Text Section */}
              <div
                className="
        p-6 flex flex-col justify-center w-full md:w-1/2
        rounded-lg md:rounded-none md:rounded-tl-lg md:rounded-bl-lg
      "
              >
                <h3 className="text-2xl font-semibold text-[#000080] mb-3 text-left md:text-left">
                  {selectedArea.subtitle}
                </h3>
                <p className="text-gray-700 mb-5 text-left md:text-left">
                  {selectedArea.description}
                </p>
                <div className="flex justify-start md:justify-start">
                  <button className="flex items-center gap-2 text-[#000080] font-semibold hover:underline">
                    <a
                      href="/renewable-contact"
                      className="flex items-center text-md md:text-xl gap-2 text-[#000080] font-semibold "
                    >
                      Contact{" "}
                      <span className="p-1 rounded-full text-[#000080]">→</span>
                    </a>
                    {/* <div className="bg-[#000080] rounded-full p-1.5 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-[#1a1aff]">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div> */}
                  </button>
                </div>
              </div>

              {/* ✅ Image Section (centered vertically) */}
              <div className="w-full md:w-1/2 flex  bg-white pe-2">
                <img
                  src={selectedArea.image}
                  alt={selectedArea.subtitle}
                  className="w-full max-w-[500px] h-64 md:h-80 object-cover rounded-lg md:rounded-none"
                />
              </div>
            </div>
          )}
        </div>
      </section>
      {/* explore content */}
      {/* more servies */}
      <section className=" mx-auto px-5 py-10 md:mx-10 lg:mx-18">
        <header className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#000080]">
            More Engineering Services
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Expert solutions across every discipline of engineering excellence.
          </p>
        </header>

        {/* Mobile: horizontal scroll with snapping */}
        <div className="block sm:hidden">
          <div className=" grid grid-cols-1  gap-8">
            {servicesing.map((s) => (
              <article
                key={s.id}
                className="snap-center min-w-[78%] flex-shrink-0 bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-md focus:outline-none focus:ring-4 focus:ring-[#000080]"
                role="article"
              >
                <div className="w-16 h-16 text- white rounded-full flex items-center justify-center mx-auto mb-3 bg-[#000080]">
                  {s.icon}
                </div>

                <h3 className="text-lg  text-[#000080] *:font-semibold">
                  {s.title}
                </h3>
                <p className="mt-2 text-base text-black">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Tablet / Desktop */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesing.map((s) => (
            <article
              key={s.id}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow focus:shadow-lg outline-none focus:ring-4 focus:ring-indigo-200"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3 bg-[#000080]">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>
      {/* business benifts */}
      <section className="text-black py-10 md:mx-14 lg:mx-8">
        <div className="mx-auto px-3 md:px-4">
          <h2 className="text-2xl md:text-3xl font-bold  text-center mb-10 text-[#000080]">
            Why Choose Us
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
            {cardsToShow.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
              >
                <img src={item.image} className=" w-full h-[26vh] " />
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
      {/* faqss */}
      <section className=" mx-auto px-4 py-12 md:px-15 ">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl  text-[#000080] md:text-3xl font-bold mb-2">
            Frequently Asked Questions
          </h2>
          {/* Yellow divider line */}
          <div className="w-16 h-1 bg-[#272727] mx-auto rounded"></div>
        </div>

        {/* FAQ Items */}
        <div className="border-t border-gray-200">
          {faqs.map((faq: FAQ, index: number) => (
            <div key={index} className="border-b border-gray-200">
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
              >
                <span
                  className={`font-medium transition-colors duration-200 ${
                    openIndex === index ? "text-[#000080]" : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </span>
                <span className="text-gray-500 text-sm">
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>
      {/* Heading */}
      <Rndtestimonial />
      <Rndfooter />
    </>
  );
}
