"use client";

import { ShieldCheck, Layers, PencilRuler, Building2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useState, ReactNode } from "react";
import { FaWarehouse, FaIndustry, FaSnowflake } from "react-icons/fa";
import { MdOutlineCleanHands } from "react-icons/md";
import { ArrowRight } from "lucide-react";
import Rndheader from "yes/Components/Rndheader";
import Rndfooter from "yes/Components/Rndfooter";
import Image from "next/image";

type CardProps = {
  image: string;
  title: string;
  description: string;
  titlenew: string;
  moredata: string;
};
// ✅ Card Component
function Card({ image, title, description, titlenew, moredata }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col group transition-all duration-500 hover:shadow-lg">
      {/* Image */}
      <div className="relative w-full h-56 overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-0 bg-black opacity-0 transition-all duration-500 group-hover:w-[88%] group-hover:opacity-100"></div>
      </div>

      {/* Text */}
      <div className="px-5 pb-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold tracking-wide mb-3 text-[#000080]">
          {title}
        </h3>
        <p className="text-black text-base tracking-wide mb-5 flex-1">
          {description}
        </p>
        <h3 className="text-xl font-bold tracking-wide mb-3 text-[#000080]">
          {titlenew}
        </h3>
        <p className="text-black text-base tracking-wide mb-5 flex-1">
          {moredata}
        </p>
      </div>
    </div>
  );
}

// ✅ Main Page Component
export default function Productengineering() {
  const [activeTab, setActiveTab] = useState(1);
  const [animateArrow, setAnimateArrow] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setAnimateArrow(!animateArrow);
    router.push("/system");
  };

  const sections = [
    {
      id: "01",
      title: "Design and Engineering",
      description:
        "Development to quickly take a product from concept phases through to full production. From design space layout [packaging] to detailed design for manufacture.",
      image: "/rndimages/Design and Engineering.jpg",
    },
    {
      id: "02",
      title: "Durability Analysis",
      description:
        "Highlight and eliminate weak points, reveal weight/cost optimization opportunities, minimize physical tests and reduce warranty claims. Analysis ranges from individual abuse tests to full-life fatigue.",
      image: "/rndimages/Durability Analysis.jpeg",
    },
    {
      id: "03",
      title: "Multi-Body System Simulation",
      description:
        "Simulate kinematic systems to check mechanism motion and forces. Forces can then be applied to components to check stress levels and suitability.",
      image: "/rndimages/Multi-Body System Simulation.jpg",
    },
    {
      id: "04",
      title: "Optimisation",
      description:
        "Make a component fulfill objectives without exceeding weight/cost unnecessarily. Includes material, shape, size, and manufacturing constraints. Multi-disciplinary optimization (MDO) can consider NVH, strength, durability, and more.",
      image:
        "/rndimages/equipment-data-center-workplace-used-monitoring-performance.jpg",
    },
    {
      id: "05",
      title: "Dynamic Simulation",
      description:
        "Analyse dynamic, high-energy, or highly non-linear events to assess component or system performance. Examples include impact analysis and user safety during collisions.",
      image: "/rndimages/Gemini_Generated_Image_slbcwrslbcwrslbc.png",
    },
    {
      id: "06",
      title: "NVH (Noise, Vibration & Harshness)",
      description:
        "Predict occupant experience regarding feel and noise, including road vibrations, squeak & rattle, and aeroacoustics. Develop products to minimize undesirable effects.",
      image:
        "/rndimages/technologist-protective-uniform-operating-industrial-machine-factory-production-line.jpg",
    },
    {
      id: "07",
      title: "Computational Fluid Dynamics (CFD)",
      description:
        "Calculate fluid and heat flow over or through a vehicle/component, including aerodynamics, powertrain heat management, HVAC, brake cooling, defrosting/de-icing, water fording, and contamination simulations.",
      image: "/rndimages/Material Intelligence.jpg",
    },
    {
      id: "08",
      title: "Coupled / Multi-Physics Simulation",
      description:
        "Join multiple simulation types so outputs from one affect another, e.g., CFD pressure applied to structural model and fed back. Can include MBS, structural, and particle models.",
      image: "/rndimages/Gemini_Generated_Image_h0dp20h0dp20h0dp.png",
    },
    {
      id: "09",
      title: "System Simulation",
      description:
        "Examine complex systems where multiple components/sub-systems interact. Ensure optimal performance for interactions like electrical control of cooling systems.",
      image: "/rndimages/System Simulation.jpg",
    },
    {
      id: "10",
      title: "Virtual Benchmarking",
      description:
        "Compare competitors’ full products, vehicle components, and sub-systems. Provide CAE models for direct comparison to identify performance targets and reduce development costs.",
      image: "/rndimages/virtual bookmaking.png",
    },
  ];

  return (
    <>
      <Rndheader />

      {/* Hero Section */}
      <section className="w-full min-h-[400px] md:min-h-[500px] flex flex-col md:flex-row">
        <div
          className="flex-1 flex items-center justify-center p-6 sm:p-8 bg-cover bg-center relative"
          style={{
            backgroundImage: `linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/rndimages/Global infra.jpeg')`,
          }}
        >
          <div className="text-white text-center relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-snug tracking-wide">
              Product Engineering
            </h1>
          </div>
        </div>
      </section>
      <section className="w-full bg-white py-12 px-4 sm:px-8 md:px-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold leading-snug max-w-4xl mx-auto">
              Product engineering service
            </h2>
            <div className="w-12 h-1 bg-blue-900 mt-3 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-1 gap-8 items-center">
            <div>
              <div className="flex items-center gap-4"></div>
            </div>
          </div>
        </div>
      </section>
      <main className="bg-white px-4 sm:px-8 md:px-12">
        <section className=" py-12 px-2 sm:px-6 md:px-12">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              image="/sectorimg/pt.jpg"
              title="Production-Ready High-Quality Plastic & Composite Solutions
"
              description="For end-users, first impressions are everything. We specialize in engineering high-grade plastic and composite components that are not just durable and functional, but also visually and tactilely appealing. Our team delivers production-ready designs for the parts that end-users see, touch, and engage with, ensuring a flawless final product.
"
              titlenew="What We Do:"
              moredata="
Studio Engineering & Aesthetic Design: We blend aesthetics and engineering to create designs that are both beautiful and manufacturable.
Function Development & Expertise Support: We develop and validate the functionality of your components, providing expert support to guide your project from concept to mass production.
"
            />
            <Card
              image="/sectorimg/por.jpg"
              title="Electronics & Electrical Design Services
r"
              description=" Your innovative ideas deserve the right hardware to bring them to life. We offer a comprehensive suite of electronics and electrical design services, taking your concept from initial design to a small series production run. Our expertise spans the entire spectrum, from advanced microchips to intricate wiring.
"
              titlenew="What We Do:"
              moredata="
Build-2-Spec Electronics Development: Our team specializes in custom electronics development, including digital, FPGA, analog, power, optical, and microwave electronics.
Prototype Electrical Design: We handle all aspects of prototype electrical design, from crafting the optimal system architecture to designing wiring harnesses and ensuring EMC compliance and thermal management"
            />
            <Card
              image="/sectorimg/pt.jpg"
              title=" Simulation & Analysis for Complex Structures (FEM Modeling)
"
              description="Building complex structures requires precision and foresight. Our simulation and analysis services use a cutting-edge DevOps approach to create large, detailed Finite Element Method (FEM) models. This enables rapid, cost-effective, and highly accurate analysis, so you can validate designs and prevent costly errors before production begins."
              titlenew="What We Do:"
              moredata="
MESH Factory: We rapidly convert CAD data into large, detailed FEM models.
Structural Analysis & Validation: Our team conducts in-depth structural analysis to ensure your designs are robust and reliable.
Methods & Tools Development: We develop and optimize custom methods and tools to streamline your engineering workflow."
            />
            <Card
              image="/sectorimg/pt.jpg"
              title="Flying Engineers for Embedded Systems
"
              description=" When a critical issue arises in the field, you can’t afford to wait. Our Flying Engineers for embedded systems are a dedicated rapid-response team. We travel worldwide to provide on-site, emergency diagnostics, troubleshooting, testing, and commissioning services for critical embedded systems in transportation and electronic products.
"
              titlenew="What We Do:"
              moredata="
Prototype Diagnostics & Troubleshooting: We diagnose and resolve issues with your early-stage prototypes to keep your development on schedule.
End-of-Line & In-Service Troubleshooting: Our team provides critical support for products at the end of the production line and those already in service.
Expert Testing & Commissioning: We ensure your systems are thoroughly tested and correctly commissioned for flawless operation.
"
            />
            <Card
              image="/sectorimg/pt.jpg"
              title="RAMS & Functional Safety (FuSa) Analysis for Complex Systems
"
              description="Safety and reliability are non-negotiable. We provide comprehensive Reliability, Availability, Maintainability, and Safety (RAMS) and Functional Safety (FuSa) analysis services. Our rigorous process helps you proactively identify, reduce, and manage risks in your products and systems, ensuring they meet the highest standards of dependability.
"
              titlenew="What We Do:"
              moredata="
RAMS & FuSa for New Products: We perform in-depth analysis for new products to build safety and reliability into the design from day one.
Product Evolution Analysis: We help you manage risk for product updates and evolutions, ensuring new features do not compromise safety.
Strategic Audits & Cost Estimation: Our expert audits and cost estimations provide the data you need to make informed strategic decisions regarding risk management and product development.
"
            />
            <Card
              image="/sectorimg/lg.jpeg"
              title="Innovating with Software-Defined Systems & Products"
              description="The future is flexible and adaptable. In a world where customer expectations are constantly evolving, a software-defined approach allows your products to evolve with them. We help you design and develop systems where new features and continuous updates are delivered effortlessly through software, providing a superior and lasting customer experience."
              titlenew="What We Do:"
              moredata="Systems Engineering for Software-Defined Products: We lay the foundational architecture that enables your products to be adaptable and scalable. Embedded & Offboard Software Development: Our team creates the intelligent software that powers your products, both on the device itself and in the cloud, ensuring seamless integration and functionality."
            />
            <Card
              image="/sectorimg/lh.webp"
              title="Model-Based Systems Engineering (MBSE) & Design (MBD) Services
"
              description="Complexity is no longer a challenge with our Model-Based Systems Engineering (MBSE) and Model-Based Design (MBD) expertise. We transform your development lifecycle, replacing traditional, document-heavy processes with a visual, model-based approach that guarantees consistency, quality, and full traceability from concept to completion"
              titlenew="What We Do:"
              moredata="We use MBSE to manage and trace requirements with unparalleled clarity and precision.
Robust Systems Architecture Design: Our MBSE-driven approach ensures your system's architecture is robust, reusable, and ready for future iterations.
Efficient Embedded Software Development: We leverage MBD to create embedded software that is not only high-quality but also developed with maximum efficiency and reliability."
            />
            <Card
              image="/sectorimg/prefab.jpg"
              title="End-to-End Embedded System Design & Validation Services"
              description="At the heart of every smart product, from advanced vehicles to cutting-edge aerospace systems, is a perfectly engineered embedded system. We specialize in bringing your most ambitious ideas to life, offering a seamless, end-to-end embedded system development process. From initial architecture to final validation, we design intelligent, reliable, and high-performance solutions that power the future."
              titlenew="What We Do:"
              moredata="
Complete Embedded System Development: We manage the entire lifecycle—from system architecture and design to seamless integration and rigorous validation. Our expertise ensures your product is not just functional but market-ready and robust.
Specialized Solutions for Advanced Industries: Our engineering solutions are tailored for the most demanding sectors. We provide dedicated support for ADAS, in-vehicle infotainment, and connectivity systems, as well as mission-critical applications in automotive, avionics, and the new space industries.

"
            />
          </div>
        </section>
      </main>
      {/* Core Expertise Section */}
      <section className="bg-white">
        <div className=" ">
          <div className="text-center mt-5 py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Landsking’s Core Expertise for this Industry Includes:
            </h2>
          </div>

          {/* Sections 1–10 */}
          {sections.map((sec, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-center ${
                idx % 2 === 0 ? "bg-[#f2f2f2]" : "bg-[#fff]"
              } px-9 py-12 md:px-19`}
            >
              <div className="grid md:grid-cols-2 gap-12 w-full">
                <div className="flex flex-col items-start justify-center">
                  <h1 className="text-7xl font-bold text-[#000080]">
                    {String(idx + 1).padStart(2, "0")}
                  </h1>
                  <span className="mt-2 font-semibold text-[#000080] text-3xl md:text-5xl">
                    {sec.title}
                  </span>
                </div>
                <div className="flex flex-col justify-center space-y-6">
                  <p className="text-[#737373] text-lg md:text-[18px]">
                    {sec.description}
                  </p>
                  <img
                    src={sec.image}
                    alt={sec.title}
                    className="w-full h-52 md:h-64 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section
        className="relative w-full h-[420px] md:h-[450px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/rndimages/gn.jpeg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 md:px-20 max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Engineering Brilliance at Your Fingertips
          </h1>
          <p className="text-white text-lg md:text-xl mb-6">
            Transform your ideas into innovative products with precision, speed,
            and reliability.
          </p>

          <div className="inline-flex items-center gap-3">
            <button className="border-2 border-white  rounded-lg hover: text-white font-semibold px-5 py-2 rounded-md transition flex items-center gap-3">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <Rndfooter />
    </>
  );
}
