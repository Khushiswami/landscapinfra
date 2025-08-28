import React from "react";
import Image from "next/image";
import IndustryHeader from "yes/Components/Industryheader";import Footer from "../../Components/Footer";

const FactoryBuilding = () => {
  return (
    <>
      <div>
        <IndustryHeader/>

        {/* Hero Section */}
        <section className="w-full min-h-[500px] flex flex-col md:flex-row">
          {/* Left Column */}
          <div
            className="flex-1 flex items-center justify-center p-8 bg-cover bg-center relative"
            style={{
              backgroundImage:
                "linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/menupagetwo/fac-1.jpg')",
            }}
          >
            {/* Centered Text */}
            <div className="text-white text-center relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold leading-snug tracking-wide">
                Factory Building
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full bg-white py-12 px-4 md:px-12 space-y-16">
          {/* Row 1 - Image Left, Content Right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/menupagetwo/fac-3.jpeg"
                alt="Row 1"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl text-[#000080] font-bold mb-4">
                Prefabricated Factory Buildings Designed for Industrial
                Applications
              </h3>
              <p className="text-gray-700 mb-4">
                Landsking Infra delivers durable and efficient prefabricated
                factory buildings suitable for a wide range of industrial uses,
                such as warehouses, manufacturing units, and testing centers.
                Their solutions offer fast installation, energy savings, and
                long-term reliability—all while keeping costs optimized.
              </p>
              <button className="border text-[#000080] border-[#000080] px-6 py-2 hover:bg-[#000080] hover:text-white transition">
                Get a Quote
              </button>
            </div>
          </div>

          {/* Row 2 - Content Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Prefab Factory Building Manufacturing Techniques and Technology
              </h3>
              <p className="text-gray-700 mb-4">
                🚀 Material Quality - Uses premium steel and insulated panels
                for durability and thermal efficiency.
              </p>
              <p className="text-gray-700 mb-4">
                💰Structural Design: - Features strong columns, beams, and
                trusses to guarantee stability and precision.
              </p>
              <p className="text-gray-700 mb-4">
                🏢Flexible Construction - Offsite fabrication reduces on-site
                disruptions and accelerates the installation process.
              </p>
            </div>
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/menupagetwo/factory3.jpg"
                alt="Row 2"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Centered Heading + Paragraph */}

          {/* Row 3 - Image Left, Content Right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/menupagetwo/fac-4.jpeg"
                alt="Row 3"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Key Applications of Prefabricated Factory Buildings
              </h3>
              <p>
                Landsking Infra’s factory buildings cater to a wide range of
                industrial requirements, such as:
              </p>
              <ul className="text-gray-700 mb-4 space-y-1">
                <li>🏭 Production plants and manufacturing units</li>
                <li>📦 Warehouses and distribution centers</li>
                <li>🧪 Testing and quality assurance labs</li>
                <li>🛡️ Industrial enclosures</li>
                <li>🔍 Assembly and inspection zones</li>
              </ul>
              <button className="border text-[#000080] border-[#000080] px-6 py-2 hover:bg-[#000080] hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Row 4 - Content Left, Image Right */}

          {/* Row 5 - Image Left, Content Right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Why Choose Landsking Infra?
              </h3>
              <ul className="space-y-1">
                <li>✔️ Trusted Expertise Since 1999</li>
                <li>✔️ Comprehensive Turnkey Project Solutions</li>
                <li>✔️ Pan-India Project Delivery & Implementation</li>
                <li>✔️ Fully Integrated Design & Manufacturing Capabilities</li>
                <li>✔️ Dedicated Commitment to Quality and On-Time Delivery</li>
              </ul>
            </div>
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/menupagetwo/fac-5.jpeg"
                alt="Row 5"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-3xl text-[#000080] font-bold text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  question: "What is a factory building?",
                  answer:
                    "A factory building is a facility constructed to accommodate industrial activities like manufacturing, assembly, storage, and other related processes.",
                },
                {
                  question:
                    "What materials are used in factory building construction?",
                  answer:
                    "Factory buildings are commonly built with steel, prefabricated panels, reinforced concrete, and insulated materials to ensure strength, durability, and energy efficiency.",
                },
                {
                  question:
                    "What are the benefits of prefabricated factory buildings?",
                  answer:
                    "Prefabricated factory buildings provide quicker construction times, cost savings, design flexibility, and a lower environmental footprint.",
                },
                {
                  question:
                    "How does a pre-engineered factory building differ from traditional buildings?",
                  answer:
                    "Pre-engineered buildings (PEBs) utilize pre-designed components for rapid assembly, whereas traditional buildings involve on-site construction that typically takes more time.",
                },
                {
                  question:
                    "How long does it take to construct a prefabricated factory building?",
                  answer:
                    "Construction time can vary but is generally much shorter than traditional methods, often finishing within just a few weeks.",
                },
                {
                  question: "Are prefabricated factory buildings durable?",
                  answer:
                    "Exactly! These buildings are engineered for durability, capable of enduring tough environmental conditions and supporting heavy industrial loads over the long term.",
                },
                {
                  question:
                    "What is the cost of constructing a factory building in India?",
                  answer:
                    "The cost varies based on factors such as size, design, materials, and location, but prefabricated buildings are typically more budget-friendly compared to traditional construction.",
                },
                {
                  question:
                    "What is the role of insulation in factory buildings?",
                  answer:
                    "Insulation improves energy efficiency, helps regulate temperature, and minimizes noise within factory buildings.",
                },
                {
                  question:
                    "What are the maintenance requirements for prefabricated factory buildings?",
                  answer:
                    " These buildings need minimal upkeep, mainly routine inspections and small repairs to ensure their structural soundness.",
                },
              ].map((faq, idx) => (
                <details
                  key={idx}
                  className="bg-white rounded-lg shadow p-4 cursor-pointer group"
                >
                  <summary className="flex justify-between items-center font-semibold text-lg list-none">
                    {faq.question}
                    <span className="transition-transform duration-300 group-open:rotate-90">
                      ▶
                    </span>
                  </summary>
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default FactoryBuilding;
