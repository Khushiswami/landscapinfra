import React from "react";
import Image from "next/image";
import Pebheader from "../../Components/Pebheader";
import Footer from "../../Components/Footer";

const IndustrialShed = () => {
  return (
    <>
      <div>
        <Pebheader />

        {/* Hero Section */}
        <section className="w-full min-h-[500px] flex flex-col md:flex-row">
          {/* Left Column */}
          <div
            className="flex-1 flex items-center justify-center p-8 bg-cover bg-center relative"
            style={{
              backgroundImage:
                "linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/menupagetwo/is-2.jpg')",
            }}
          >
            {/* Centered Text */}
            <div className="text-white text-center relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold leading-snug tracking-wide">
                Industrial Shed
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
                src="/menupagetwo/is-3.png"
                alt="Row 1"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl text-[#000080] font-bold mb-4">
                Pre-engineered Industrial Shed Builders
              </h3>
              <p className="text-gray-700 mb-4">
                As civil construction continues to advance rapidly, the demands
                on construction sites are growing exponentially. To meet these
                challenges, prefabricated industrial sheds have gained immense
                popularity due to their quick installation, easy disassembly,
                and cost-effectiveness.
              </p>
              <p className="text-gray-700 mb-4">
                LandsKing Infra, a leading manufacturer of prefabricated
                structures, delivers top-quality industrial shed solutions at
                competitive construction costs. The use of pre-engineered
                buildings has become a preferred choice across various
                industries, with pre-engineered industrial sheds leading the
                way.
              </p>
              <p className="text-gray-700 mb-4">
                With a reputation for reliability and innovation, LandsKing
                Infra has rapidly become one of the fastest-growing industrial
                shed manufacturers and suppliers in India, expertly addressing
                the evolving needs of the construction sector.
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
                High-Quality Features of Industrial Sheds
              </h3>
              <p className="text-gray-700 mb-4">
                At LandsKing Infra, we prioritize custom-designed architecture
                and client-specific construction, ensuring that every
                prefabricated structure aligns perfectly with your operational
                needs. As one of Indias trusted industrial shed providers, we
                deliver comprehensive solutions that form the backbone of our
                clients growth and long-term success.
              </p>
              <strong>
                Key Features of Our Prefabricated Industrial Sheds
              </strong>
              <ul className="list-style-type: disc; padding-left: 20px;">
                <li>
                  <strong>Sturdy structural design</strong> for enhanced
                  durability and long service life
                </li>
                <li>
                  <strong>High resistance</strong> to rust, moisture, and
                  harmful UV exposure
                </li>
                <li>
                  <strong>Fast installation process</strong> compared to
                  traditional construction methods
                </li>
                <li>
                  <strong>Built-in fire safety features</strong> for added
                  protection
                </li>
                <li>
                  <strong>Cost-efficient construction</strong> without
                  compromising on quality
                </li>
              </ul>
            </div>
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/menupagetwo/is-4.jpg"
                alt="Row 2"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Centered Heading + Paragraph */}
          <div className="text-center mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-[#000080]">
              Benefits of Choosing LandsKing Infra
            </h2>
            <p className="text-gray-700 text-lg">
              LandsKing Infra distinguishes itself as a leading industrial shed
              manufacturer and supplier in India through the use of high-quality
              materials and a detailed production process. Our focus on
              fulfilling unique customer requirements has helped us build a
              strong reputation for reliability and excellence in the
              prefabricated shed industry.
              <br />
              <br />
              Our pre-engineered building (PEB) sheds are versatile, serving
              multiple industries for storage, workshops, and warehousing.
              Constructed from premium raw materials, these sheds are designed
              to cover large areas efficiently. Moreover, our solutions are
              cost-effective and customized to meet the specific needs of each
              project, ensuring the best value for our clients.
            </p>
          </div>

          {/* Row 3 - Image Left, Content Right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/menupagetwo/is-6.jpeg"
                alt="Row 3"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Engineering Specifications for Industrial Shed Components
              </h3>
              <ul className="text-gray-700 mb-4 space-y-1">
                <li>
                  🏢 <strong>Wall Panels:</strong>
                  50mm or 60mm thick PUF/EPS insulated sandwich panels, cladded
                  with PPGI sheets on both sides for enhanced thermal efficiency
                  and durability.
                </li>

                <li>
                  🏠 <strong>Roof Panels:</strong>
                  30mm or 40mm thick PUF/EPS insulated sandwich panels, or
                  high-quality PPGI roofing sheets, depending on design and
                  thermal requirements.
                </li>

                <li>
                  🚪 <strong>Doors:</strong>
                  Factory-fabricated insulated doors, complete with all
                  necessary accessories, will be supplied and installed as part
                  of our standard package.
                </li>

                <li>
                  🪟 <strong>Windows:</strong>
                  Aluminum anodized sliding windows will be provided from our
                  in-house manufacturing setup, ensuring consistency and
                  quality.
                </li>

                <li>
                  🧱 <strong>Structure & Accessories:</strong>
                  All supporting structural components and accessories required
                  for installation will be delivered to the site prior to
                  project handover.
                </li>

                <li>
                  💡 <strong>Interiors (Optional):</strong>
                  Electrical fittings, sanitary fittings, furniture (e.g.,
                  beds), and other interior elements will be supplied and
                  installed as per the client’s requirements and contractual
                  agreement.
                </li>
              </ul>

              <button className="border text-[#000080] border-[#000080] px-6 py-2 hover:bg-[#000080] hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Row 4 - Content Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Industrial shed Applications
              </h3>
              <p className="text-gray-700 mb-4">
                LandsKing Infra offers a versatile range of pre-engineered
                industrial sheds, perfectly suited for construction needs across
                diverse industries — from aerospace to food & beverage, and
                everything in between. One of the standout features of these
                structures is their ability to support custom insulation, making
                them adaptable to specific building regulations and ideal for
                enhancing energy efficiency and reducing power consumption.
              </p>
              <ul className="space-y-1">
                <li>🚚 Transport & Logistics Sector</li>
                <li>🧪 Chemical & Processing Industry</li>
                <li>🏭 Manufacturing Units & Production Facilities</li>
                <li>📦 Warehousing & Storage Spaces</li>
                <li>🛍️ Commercial & Retail Outlets</li>
              </ul>
            </div>
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/menupagetwo/is-5.png"
                alt="Row 4"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Row 5 - Image Left, Content Right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/menupagetwo/is-7.png"
                alt="Row 5"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Why Landsking Infra Pvt Ltd Prefab?
              </h3>
              <ul className="space-y-1">
                <li>✔️ Trusted Expertise Since 1999</li>
                <li>✔️ Comprehensive Turnkey Project Solutions</li>
                <li>✔️ Pan-India Project Delivery & Implementation</li>
                <li>✔️ Fully Integrated Design & Manufacturing Capabilities</li>
                <li>✔️ Dedicated Commitment to Quality and On-Time Delivery</li>
              </ul>
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
                  question: "What is an industrial shed?",
                  answer:
                    "An industrial shed is a large, covered structure designed to accommodate various industrial activities such as storage, manufacturing, or workshops, typically made from steel frames and cladding materials.",
                },
                {
                  question: "How many types of industrial sheds are there?",
                  answer:
                    "Industrial sheds come in various types based on their design and material, including steel-framed sheds, pre-engineered buildings (PEBs), fabric-covered sheds, and modular sheds tailored for specific industrial needs.",
                },
                {
                  question:
                    "What is the difference between an industrial shed and a warehouse?",
                  answer:
                    "While both provide storage solutions, an industrial shed is generally a simpler structure primarily for storage or light industrial use, whereas a warehouse is often a more complex building with advanced storage systems and logistical facilities.",
                },
                {
                  question:
                    "How much does it cost to build an industrial shed in India?",
                  answer:
                    "The cost varies depending on size, materials, and customization but generally ranges from ₹800 to ₹1500 per square foot. Prefabricated sheds often provide cost savings due to reduced construction time and material efficiency.",
                },
                {
                  question:
                    "What are the benefits of prefabricated industrial sheds?",
                  answer:
                    "Prefabricated industrial sheds offer faster construction, cost-effectiveness, design flexibility, durability, and ease of future expansion compared to traditional buildings.",
                },
                {
                  question: "Are prefab sheds worth it?",
                  answer:
                    "Yes, prefab sheds are worth it as they provide a quick, economical, and durable solution for industrial space needs, minimizing downtime and offering customization options.",
                },
                {
                  question: "What is a prebuilt shed?",
                  answer:
                    "A prebuilt shed is a structure made from factory-fabricated components that are transported to the site and assembled quickly, reducing construction time and costs.",
                },
                {
                  question:
                    "Who are the best industrial shed manufacturers in India?",
                  answer:
                    "Several reputed manufacturers include LandsKing Infra, EPACK Prefab, Metalspace Buildcon, and Skyline Projects, known for quality and reliable industrial shed solutions.",
                },
                {
                  question:
                    "What is the construction method for industrial sheds?",
                  answer:
                    "Industrial sheds are typically constructed using pre-fabricated steel components assembled on-site, which accelerates the build process and ensures consistent quality.",
                },
                {
                  question:
                    "What materials are commonly used in industrial shed construction?",
                  answer:
                    "Common materials include galvanized steel frames, insulated sandwich panels like PUF or EPS, and corrosion-resistant coatings for durability.",
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

export default IndustrialShed;
