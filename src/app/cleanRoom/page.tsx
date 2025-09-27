import React from "react";
import Image from "next/image";
import Pebheader from "yes/Components/Pebheader";
import PedFooter from "../../Components/Footer";

const CleanRoom = () => {
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
                "linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/new-images/clean-room-1.png')",
            }}
          >
            {/* Centered Text */}
            <div className="text-white text-center relative z-10">
              <h1 className="text-3xl md:text-4xl font-bold leading-snug tracking-wide">
                Clean Room
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
                src="/new-images/clean-room-2.jpg"
                alt="Row 1"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl text-[#000080] font-bold mb-4">
                High-Precision Controlled Environments
              </h3>
              <p className="text-gray-700 mb-4">
                Clean rooms are specialized environments created to keep
                airborne particles, contaminants, and pollutants at extremely
                low levels. They are critical for sectors such as
                pharmaceuticals, electronics, biotechnology, food processing,
                and medical devices, where even tiny particles can compromise
                product quality. <br />
                <br />
                LANDSKING excels in designing and producing modular clean room
                solutions using premium PUF, EPS, and Rockwool sandwich panels.
                Leveraging more than 25 years of prefabrication expertise, our
                systems comply with rigorous international standards, offering
                excellent hygiene, thermal performance, and contamination
                control.
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
                Why Choose Us for Clean Room Construction?
              </h3>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>
                  <strong>
                    Comprehensive In-House Design & Manufacturing:
                  </strong>{" "}
                  LANDSKING offers complete clean room solutions from concept
                  design to commissioning, tailored for your industry’s needs.
                </li>
                <li>
                  <strong>Premium Modular Panels:</strong> Constructed using
                  insulated sandwich panels for high strength, thermal
                  efficiency, and airtight performance.
                </li>
                <li>
                  <strong>Flexible Configurations:</strong> ISO-class compliant
                  clean rooms with modular layouts that can be easily expanded
                  or reconfigured.
                </li>
                <li>
                  <strong>Rapid Delivery:</strong> State-of-the-art production
                  facilities enable fast manufacturing and installation,
                  covering over 6,800 sqm daily.
                </li>
                <li>
                  <strong>Nationwide Project Execution:</strong> Delivering to
                  pharma hubs, industrial zones, and R&D centers across India
                  with a reliable logistics network.
                </li>
                <li>
                  <strong>Standards & Compliance:</strong> Designed to adhere to
                  GMP, FDA, ISO, and WHO guidelines depending on project
                  specifications.
                </li>
              </ul>
            </div>
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/new-images/clean-room-3.jpg"
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
                src="/new-images/clean-room-4.jpg"
                alt="Row 3"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl text-[#000080] font-bold mb-4">
                Industries Served by Us
              </h3>
              <ul className=" list-disc text-gray-700 mb-4 space-y-1">
                <li>Pharmaceutical & API Manufacturing Units</li>
                <li>Biotechnology & Life Science Industries</li>
                <li>Food & Beverage Manufacturing</li>
                <li>Electronics and Semiconductor Assembly</li>
                <li>Medical, Lab & Research Centers</li>
                <li>Aerospace & Defense Sectors</li>
              </ul>
              <button className="border text-[#000080] border-[#000080] px-6 py-2 hover:bg-[#000080] hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Row 4 - Content Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#000080]">
                Essential Features of LANDSKING Clean Rooms
              </h3>

              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>Leak-proof, continuous construction</li>
                <li>Excellent thermal and sound insulation</li>
                <li>Panels that resist fire and corrosion</li>
                <li>Easy-to-clean, hygienic finishes</li>
                <li>Fully compatible with HVAC and filtration systems</li>
                <li>
                  Lower energy consumption thanks to high-performance insulation
                </li>
                <li>Long-lasting, maintenance-free design</li>
              </ul>
            </div>
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/new-images/clean-room-5.avif"
                alt="Row 4"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Centered Heading + Paragraph */}
          <div className="text-center mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-[#000080]">
              Let’s Build Your Clean Room – The Smarter Way
            </h2>
            <p className="text-gray-700 text-lg">
              Planning to set up a clean room? LANDSKING offers a flexible,
              affordable, and regulation-compliant solution, executed with
              accuracy and expertise.
              <br />
              📩 Contact us today for expert consultation on your clean room
              project.
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
                  question: "What is a cleanroom?",
                  answer:
                    "A cleanroom is a specially designed space that minimizes airborne pollutants, including dust, microbes, and particles, ensuring the cleanest possible environment. They are widely used in sectors such as electronics, pharma, and medical equipment production.",
                },
                {
                  question: "What are ISO cleanrooms?",
                  answer:
                    "ISO cleanrooms are rated by air cleanliness. In the U.S. Federal Standard 209, the class is defined by the number of particles 0.5 microns or larger present in each cubic foot of air.",
                },
                {
                  question: "Which types of cleanrooms are commonly used?",
                  answer:
                    "The two main types of cleanrooms are turbulently ventilated (non-unidirectional) and unidirectional flow cleanrooms. Prefabricated versions of both types are available.",
                },
                {
                  question: "What is the cost of a cleanroom in India?",
                  answer:
                    "In India, the cost of modular cleanrooms ranges from less than 7,000 INR to more than 70,000 INR per square foot. LANDSKING delivers competitively priced cleanroom solutions with free-standing walls and robust load-bearing ceilings.",
                },
                {
                  question: "Who uses cleanrooms?",
                  answer: (
                    <div>
                      <ul className="list-disc pl-5 text-gray-700 mb-4">
                        <li>Pharmaceuticals & Nutraceuticals</li>
                        <li>Research Labs & Laboratories</li>
                        <li>Hospitals & Healthcare Facilities</li>
                        <li>Food Processing Industries</li>
                        <li>Cosmetics & Perfume Manufacturing</li>
                        <li>Medical Cannabis Production</li>
                        <li>Sustainable Energy Supply Industries</li>
                      </ul>
                    </div>
                  ),
                },
                {
                  question: "Who manufactures cleanrooms?",
                  answer:
                    "LANDSKING is a leading provider of modular cleanroom systems, offering complete design, manufacturing, and installation services to meet specific industry requirements.",
                },
                {
                  question:
                    "Which cleanroom standard is commonly followed in India?",
                  answer:
                    "In India, ISO 7 is a typical cleanroom classification, allowing under 352,000 particles >0.5 microns per cubic meter and mandating 60 HEPA-filtered air changes per hour. This is equivalent to the Federal Standard Class 10,000.",
                },
                {
                  question: "How are pharmaceutical cleanrooms classified?",
                  answer:
                    "Pharmaceutical cleanrooms are categorized based on the number of airborne particles per cubic meter. This classification ensures the environment complies with pharmaceutical standards. Common ISO classes for pharmaceutical cleanrooms are ISO 7 and ISO 8, corresponding to Class 10,000 and Class 100,000 in the older Federal Standard 209E.",
                },
                {
                  question:
                    "What is the recommended ceiling coverage for a cleanroom?",
                  answer:
                    "Ceiling coverage refers to the portion of the ceiling equipped with HEPA (high-efficiency particulate air) and ULPA (ultra-low penetration air) filters. For an ISO Class 1 cleanroom, which is the highest cleanliness level, 500–750 air changes per hour are recommended, with 80–100% ceiling coverage.",
                },
                {
                  question: "How are cleanrooms used in pharma?",
                  answer:
                    "A pharmaceutical cleanroom is a specially controlled space where air is supplied, filtered, and circulated under strict monitoring. It ensures that products remain free from dust, microbes, and other pollutants.",
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

export default CleanRoom;
