import React from "react";
import Image from "next/image";
import Pebheader from "yes/Components/Pebheader";
import PedFooter from "../../Components/Footer";

const ColdRoom = () => {
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
                "linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/new-images/cold-room-1.jpg')",
            }}
          >
            {/* Centered Text */}
            <div className="text-white text-center relative z-10">
              <h1 className="text-3xl md:text-4xl font-bold leading-snug tracking-wide">
                Cold Storage & Cold Room Manufacturer
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
                src="/new-images/cold-room-2.jpg"
                alt="Row 1"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-[28px] text-[#000080] font-bold mb-4">
                LANDSKING – Leading Cold Storage and Cold Room Solutions
                Provider in India
              </h3>
              <p className="text-gray-700 mb-4">
                Nearly 40–50% of fresh produce in India goes to waste annually
                because of inadequate cold chain systems, causing losses worth
                USD 440 billion. <br />
                <br />
                LANDSKING provides state-of-the-art cold storage and cold room
                solutions to protect perishable goods and reduce wastage. Backed
                by industry expertise, high-quality standards, and innovative
                solutions, we are a trusted cold storage manufacturer, cold room
                manufacturer, and supplier of cold room panels for businesses
                across sectors.
              </p>
              <button className="border text-[#000080] border-[#000080] px-6 py-2 hover:bg-[#000080] hover:text-white transition">
                Get a Quote
              </button>
            </div>
          </div>

          {/* Row 2 - Content Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-[28px] font-bold mb-4 text-[#000080]">
                Reasons to Choose LANDSKING for Your Cold Storage and Cold Room
                Needs
              </h3>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>
                  <strong>Proven Expertise:</strong> Years of experience
                  delivering high-performance, industry-specific cold storage
                  solutions.
                </li>
                <li>
                  <strong>Customized Designs:</strong> Storage systems tailored
                  to your precise requirements for optimal space and temperature
                  management.
                </li>
                <li>
                  <strong>Efficient Operations:</strong> Energy-saving
                  technologies that minimize costs and enhance sustainability.
                </li>
                <li>
                  <strong>Top-Quality Construction:</strong> High-grade
                  materials and advanced manufacturing for durability and
                  reliability.
                </li>
                <li>
                  <strong>Standards Compliance:</strong> Adherence to all
                  regulatory guidelines for safe and dependable storage.
                </li>
              </ul>
            </div>
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/new-images/cold-room-3.webp"
                alt="Row 2"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Row 3 - Image Left, Content Right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/new-images/cold-room-4.jpg"
                alt="Row 3"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-[28px] font-bold mb-4 text-[#000080]">
                Key Features of LANDSKING Cold Storage and Cold Room Solutions
              </h3>
              <p className="text-gray-700 mb-4">
                Our cold rooms and storage systems combine precision and
                innovation for optimal operation:
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>
                  Factory-Engineered Panels: High-quality insulated panels
                  ensure thermal efficiency and durability.
                </li>
                <li>
                  Superior Insulation: Incorporates PUF/EPS and advanced
                  continuous line panels for reduced energy loss and improved
                  heat retention.
                </li>
                <li>
                  Precision Design: Structurally optimized for reliable and
                  consistent functionality.
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
              <h3 className="text-2xl  md:text-[28px] font-bold mb-4 text-[#000080]">
                Cold Storage Manufacturing Technology
              </h3>
              <p className="text-gray-700 mb-4">
                We use advanced manufacturing technologies to deliver superior
                quality and performance:
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>
                  Continuous Line Panels: Newly implemented panels provide
                  consistent quality and are ideal for cold room construction.
                </li>
                <li>
                  Factory-Produced Insulated Panels: Offer accurate thermal
                  control and robust durability.
                </li>
                <li>
                  Innovative Insulation: Uses PUF/EPS for excellent energy
                  retention.
                </li>
                <li>
                  Precision Structural Design: Ensures consistent performance
                  and integrity in all conditions.
                </li>
              </ul>
            </div>
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/new-images/cold-room-5.jpg"
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
                src="/new-images/cold-room-6.avif"
                alt="Row 5"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-[28px] font-bold mb-4 text-[#000080]">
                Applications of Cold Room and Cold Storage Solutions
              </h3>
              <p className="text-gray-700 mb-4">
                LANDSKING’s cold storage and cold room solutions serve a wide
                range of industries, including:{" "}
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>
                  <strong>Food Sector:</strong> Keep perishable food items like
                  fruits, vegetables, dairy, and meat fresh.
                </li>
                <li>
                  <strong>Pharma Industry:</strong> Ensure secure storage of
                  medicines, vaccines, and sensitive pharmaceuticals.
                </li>
                <li>
                  <strong>Chemicals:</strong> Preserve chemicals and hazardous
                  substances under controlled conditions.
                </li>
                <li>
                  <strong>Horticulture:</strong> Prolong the life and quality of
                  flowers, plants, and horticultural produce.
                </li>
              </ul>
            </div>
          </div>

          {/* Centered Heading + Paragraph */}
          <div className=" mx-auto">
            <h2 className="text-center text-2xl md:text-[28px] font-bold mb-4 text-[#000080]">
              What Makes LANDSKING Cold Room Panels Exceptional
            </h2>
            <p className="text-gray-700 text-lg">
              LANDSKING cold room and cold storage panels are engineered for
              superior performance:
              <br />
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>
                  <strong>Precise Temperature Control:</strong> Ensures energy
                  efficiency and maintains product integrity.
                </li>
                <li>
                  <strong>Robust Construction:</strong> Panels designed to
                  endure rigorous cold room and storage conditions.
                </li>
                <li>
                  <strong>Fast Installation:</strong> Modular, pre-fabricated
                  components enable quick assembly and reduced operational
                  delays.
                </li>
              </ul>
              LANDSKING delivers reliable, energy-efficient, and durable cold
              storage and cold room solutions. Through continuous line panel
              manufacturing, advanced designs, and quality-driven processes, we
              enable industries to safeguard products and reduce waste.
              <br />
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>
                  <strong>Accurate Temperature Management:</strong> Ensures
                  product preservation with precise and stable temperatures.
                </li>
                <li>
                  <strong>Operational Efficiency:</strong> Thermally efficient
                  materials lower energy costs.
                </li>
                <li>
                  <strong>Long-Lasting Panels:</strong> Factory-produced panels
                  create airtight and robust structures.
                </li>
                <li>
                  <strong>Tailored Layouts:</strong> Designs customized for your
                  facility and industry needs.
                </li>
                <li>
                  <strong>Fast Assembly:</strong> Pre-fabricated components
                  allow rapid and smooth installation, reducing delays.
                </li>
              </ul>
            </p>
          </div>

          {/* FAQ Section */}
          <div className=" mx-auto mt-16">
            <h2 className="text-2xl md:text-[28px] text-[#000080] font-bold text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 text-[#000080]">
              {[
                {
                  question: "How is a cold storage facility used?",
                  answer:
                    "A cold storage facility provides a regulated, chilled space for storing perishable goods like food, medicines, and other temperature-sensitive materials.",
                },
                {
                  question:
                    "What are the advantages of prefabricated cold storage?",
                  answer:
                    "These solutions allow for quick setup, reduce costs, save energy, and can be tailored to specific storage needs.",
                },
                {
                  question: "Which sectors use cold storage facilities?",
                  answer:
                    "Cold storage is widely used in agriculture, food production, pharmaceuticals, fisheries, and retail to preserve perishable products.",
                },
                {
                  question:
                    "Which materials are commonly used in cold storage construction?",
                  answer:
                    "Insulated panels, including PUF, EPS, and Rockwool, are used in cold storage facilities to provide effective thermal insulation and robust durability.",
                },
                {
                  question: "Can cold storage solutions be customized?",
                  answer:
                    "Yes, LANDSKING offers fully customizable cold storage solutions to meet specific temperature control and size requirements.",
                },
                {
                  question:
                    "What temperature ranges can cold storage maintain?",
                  answer:
                    "Cold storage solutions can maintain a broad range of temperatures, from deep-freezing at -40°C to chilled conditions between 0°C and 10°C, depending on your needs.",
                },
                {
                  question: "What makes modern cold storage energy-efficient?",
                  answer:
                    "Cold storage systems use advanced insulation and energy-efficient technologies to minimize power consumption.",
                },
                {
                  question:
                    "What are the essential components of a cold storage unit?",
                  answer:
                    "Key components of a cold storage unit include insulated panels, refrigeration systems, flooring, lighting, and climate control systems.",
                },
                {
                  question:
                    "In what way does cold storage prevent food wastage?",
                  answer:
                    "Cold storage systems preserve perishable goods at ideal temperatures, reducing spoilage and lowering food wastage.",
                },
                {
                  question:
                    "Is it possible to enlarge cold storage facilities later?",
                  answer:
                    "Yes, modular cold storage units allow for seamless expansion to handle additional storage demands.",
                },
                {
                  question:
                    "How long do prefabricated cold storage facilities last?",
                  answer:
                    "A well-maintained cold storage facility can provide reliable service for many decades.",
                },
                {
                  question:
                    "How do cold storage facilities ensure fire safety?",
                  answer:
                    "Cold storage units are built with fire-resistant panels and adhere to all relevant fire safety regulations.",
                },
                {
                  question:
                    "Does LANDSKING provide turnkey solutions for cold storage?",
                  answer:
                    "Yes, LANDSKING delivers full turnkey solutions, covering everything from design and fabrication to transportation and installation.",
                },
                {
                  question:
                    "Are cold storage units suitable for pharmaceutical applications?",
                  answer:
                    "Cold storage systems are commonly used to preserve vaccines, medicines, and temperature-sensitive pharmaceutical products.",
                },
                {
                  question:
                    "How does LANDSKING ensure the quality of its cold storage solutions?",
                  answer:
                    "LANDSKING uses premium materials, advanced manufacturing technology, and rigorous quality control processes to deliver durable and efficient cold storage facilities.",
                },
                {
                  question:
                    "How much does it cost to build a cold storage unit in India?",
                  answer:
                    "Costs vary based on dimensions, materials, and customization, with LANDSKING’s prefabricated options offering an economical solution.",
                },
                {
                  question:
                    "How long does it take to build a cold storage facility?",
                  answer:
                    "Prefabricated cold storage solutions enable fast construction, significantly reducing project timelines compared to traditional methods.",
                },
                {
                  question:
                    "What maintenance is required for cold storage systems?",
                  answer:
                    "Cold storage requires routine checks of insulation, cooling systems, and temperature controls to maintain optimal efficiency.",
                },
                {
                  question: "Are portable cold storage units available?",
                  answer:
                    "Yes, LANDSKING provides portable cold storage units ideal for temporary or mobile storage requirements.",
                },
                {
                  question:
                    "What makes LANDSKING a reliable cold storage provider?",
                  answer:
                    "LANDSKING stands out for its superior quality, innovative and customizable designs, and complete turnkey services for every client.",
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
      <PedFooter />
    </>
  );
};

export default ColdRoom;
