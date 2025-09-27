import React from "react";
import Image from "next/image";
import Pebheader from "yes/Components/Pebheader";
import PedFooter from "../../Components/Footer";

const ControlRoom = () => {
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
                "linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/new-images/control-room-1.jpg')",
            }}
          >
            {/* Centered Text */}
            <div className="text-white text-center relative z-10">
              <h1 className="text-3xl md:text-4xl font-bold leading-snug tracking-wide">
                Control Room
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
                src="/new-images/control-room-2.jpg"
                alt="Row 1"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl text-[#000080] font-bold mb-4">
                Advanced Engineering Solutions for Control Rooms
              </h3>
              <p className="text-gray-700 mb-4">
                LANDSKING offers prefabricated control rooms using high-quality
                PUF-insulated panels, serving sectors like steel plants, mining,
                power generation, and beyond. Designed for strength and
                reliability, these control rooms come in both lift-on and
                non-lift-on variants and can be customized with or without steel
                frameworks.
              </p>
              <button className="border text-[#000080] border-[#000080] px-6 py-2 hover:bg-[#000080] hover:text-white transition">
                Get a Quote
              </button>
            </div>
          </div>

          {/* Row 2 - Content Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#000080]">
                Key Features of Control Rooms
              </h3>
              <p className="text-gray-700 mb-4">
                Control rooms are engineered for superior performance in
                industrial environments, Key features are:
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>Pre-engineered construction using PUF-insulated panels</li>
                <li>
                  Variety of exterior finishes, such as PPGS/PPGS, PPGS/ACP, and
                  SS/SS
                </li>
                <li>Strong, long-lasting walls offered in multiple heights</li>
                <li>Easy-to-handle panels for versatile installation</li>
                <li>
                  Integrated large view windows within the insulated panels
                </li>
                <li>Raised flooring for organized cable routing</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Allows for effortless integration of essential safety equipment,
                such as smoke detection and fire suppression systems.
              </p>
            </div>
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/new-images/control-room-3.jpg"
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
                src="/new-images/control-room-4.jfif"
                alt="Row 3"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#000080]">
                Manufacturing Technology
              </h3>
              <p className="text-gray-700 mb-4">
                LANDSKING leads in control room engineering, combining
                cutting-edge production technology with superior materials.
                Designed for peak performance in demanding conditions, our
                control rooms comply with regulatory approvals and satisfy both
                commercial and safety standards.
              </p>
              <button className="border text-[#000080] border-[#000080] px-6 py-2 hover:bg-[#000080] hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Row 4 - Content Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#000080]">
                Applications
              </h3>
              <p className="text-gray-700 mb-4">
                LANDSKING provides control room solutions for diverse
                industries, including:
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>Industrial manufacturing and production sites</li>
                <li>Steel plants, smelting operations, and furnace sections</li>
                <li>Bulk goods handling areas</li>
                <li>
                  Facilities for food processing, pharmaceuticals, and
                  electronics testing
                </li>
                <li>High-heat environments like steel mills</li>
                <li>
                  Tailored HSM control rooms, offered in both lift-on and
                  non-lift-on designs
                </li>
              </ul>
            </div>
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/new-images/control-room-5.jpg"
                alt="Row 4"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Centered Heading + Paragraph */}
          <div className=" mx-auto">
            <h2 className="text-center text-3xl font-bold mb-4 text-[#000080]">
              Benefits of LANDSKING Control Rooms
            </h2>
            <p className="text-gray-700 text-lg">
              Key benefits of LANDSKING control rooms include:
              <br />
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>
                  Enhanced thermal insulation for better energy management and
                  comfort
                </li>
                <li>
                  Strong, long-lasting structures for safe operation in
                  challenging environments
                </li>
                <li>Rapid dry construction, eliminating the need for water</li>
                <li>
                  Panels that can be customized to site-specific conditions
                </li>
                <li>Easily adaptable for relocation or expansion</li>
                <li>
                  All-weather construction for reliable and consistent
                  performance
                </li>
              </ul>
            </p>
          </div>

          {/* FAQ Section */}
          <div className=" mx-auto mt-16">
            <h2 className="text-3xl text-[#000080] font-bold text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 text-[#000080]">
              {[
                {
                  question: "What is a control pulpit?",
                  answer:
                    "A control pulpit is a specialized modular structure that houses industrial control panels and monitoring systems, providing a safe and organized workspace.",
                },
                {
                  question:
                    "How does a control room relate to a control pulpit?",
                  answer:
                    "A control room serves as the main hub for process monitoring and management, while a control pulpit is a compact version, customized for particular equipment or sections within an industrial setup.",
                },
                {
                  question:
                    "What sectors rely on control pulpits or control rooms?",
                  answer:
                    "Industries such as power generation, steel production, manufacturing, and process-heavy operations commonly use control rooms and pulpits.",
                },
                {
                  question:
                    "Which features define a modern control room or control pulpit?",
                  answer:
                    "Key features include ergonomically designed workspaces, state-of-the-art monitoring equipment, climate control, acoustic insulation, and tailored layouts to optimize workflow.",
                },
                {
                  question:
                    "How do control pulpits differ from traditional control rooms?",
                  answer:
                    "Control pulpits are compact, localized units designed for specific equipment, whereas control rooms oversee broader, plant-wide operations.",
                },
                {
                  question:
                    "Can control pulpits be customized for control room applications?",
                  answer:
                    "Yes, LANDSKING provides tailored solutions to suit control room needs, including advanced insulation, integrated equipment, and HVAC systems.",
                },
                {
                  question: "How are control rooms and pulpits constructed?",
                  answer:
                    "Steel structures, insulated panels, fire-retardant materials, and specialized flooring are used to construct control rooms and pulpits, providing robustness and safety.",
                },
                {
                  question:
                    "Are control rooms and pulpits built for extreme industrial environments?",
                  answer:
                    "LANDSKING’s control rooms and pulpits are designed to handle high heat, vibrations, and industrial noise, ensuring reliable functionality.",
                },
                {
                  question:
                    "How does LANDSKING ensure safety in control rooms and pulpits?",
                  answer:
                    "Control rooms and pulpits from LANDSKING are equipped with fire-resistant components, soundproofing, anti-static flooring, and advanced ventilation systems to guarantee a safe working environment.",
                },
                {
                  question: "Can control rooms be moved like control pulpits?",
                  answer:
                    "While control pulpits are generally portable, larger control rooms can be designed modularly for relocation or future expansion.",
                },
                {
                  question: "How long do control rooms and pulpits last?",
                  answer:
                    "With proper maintenance, LANDSKING control rooms and pulpits can last over 20 years while maintaining optimal performance.",
                },
                {
                  question:
                    "Why choose LANDSKING for control rooms and pulpits?",
                  answer:
                    "LANDSKING offers durable, customizable, and cost-effective solutions designed to meet industry-specific requirements while ensuring safety and reliability.",
                },
                {
                  question:
                    "How long does it take to install control rooms and pulpits?",
                  answer:
                    "Installation times vary depending on project size and complexity, but LANDSKING’s prefabricated solutions ensure faster delivery compared to conventional construction methods.",
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

export default ControlRoom;
