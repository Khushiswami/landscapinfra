import React from "react";
import Image from "next/image";
import PedFooter from "../../Components/Footer";
import Pebheader from "yes/Components/Pebheader";

const RailwayShelters = () => {
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
                "linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/new-images/railway-shelters-1.jpg')",
            }}
          >
            {/* Centered Text */}
            <div className="text-white text-center relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold leading-snug tracking-wide">
                Railway Shelters
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
                src="/new-images/railway-shelters-2.jpg"
                alt="Row 1"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl text-[#000080] font-bold mb-4">
                Durable and Highly Functional Shelters
              </h3>
              <p className="text-gray-700 mb-4">
                LANDSKING is recognized as a top manufacturer of prefabricated railway and telecom shelters, delivering dependable, customized turnkey solutions to meet the specific needs of industrial clients. <br /><br />

                Engineered to endure extreme weather, our railway and telecom shelters safeguard delicate telecom equipment from dust, moisture, and environmental damage. Their portable and lightweight design ensures quick installation, cost savings, and long-lasting performance.
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
                Key Features of Prefabricated Shelters
              </h3>
              <p className="text-gray-700">LANDSKING’s railway and telecom shelters are built using high-quality materials, delivering superior performance. Key features include:</p><br />
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>Excellent thermal resistance for effective temperature management</li>
                <li>Reinforced floor and ceiling panels for enhanced strength</li>
                <li>Extra roofing to ensure proper water drainage</li>
                <li>IP54-rated protection with airtight and watertight sealing</li>
                <li>Durable, low-maintenance construction for long-lasting use</li>
                <li>3-way locking system with stainless steel hinges for optimum security</li>
                <li>Torque groove design with integrated cam locks for structural stability</li>
              </ul>
            </div>
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/new-images/railway-shelters-3.jpg"
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
                src="/new-images/railway-shelters-4.jpeg"
                alt="Row 3"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#000080]">
                Advanced Manufacturing Technology
              </h3>
              <p className="text-gray-700 mb-4">
                LANDSKING employs advanced manufacturing techniques and meticulous engineering to create robust, high-quality shelters. Tailored for railway and telecom applications, our shelters are made with superior materials to endure extreme weather conditions. They safeguard critical equipment while providing long-term protection from dust, moisture, and corrosion, ensuring dependable performance.
              </p>
              <button className="border text-[#000080] border-[#000080] px-6 py-2 hover:bg-[#000080] hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Row 4 - Content Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#000080]">Uses of Prefabricated Shelters</h3>

              <p className="text-gray-700 mb-4">LANDSKING offers durable and user-friendly shelters suitable for a variety of temporary or permanent uses, such as:</p>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>Railway Shelters</li>
                <li>BTS (Base Transceiver Station) Shelters</li>
                <li>Telecom Shelters</li>
                <li>Signaling Huts</li>
                <li>Temporary Shelters</li>
              </ul>

            </div>
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/new-images/railway-shelters-5.jpg"
                alt="Row 4"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>



          {/* Centered Heading + Paragraph */}
          <div className=" mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-[#000080] text-center">
              Benefits of Landsking Prefab Shelters
            </h2>
            <p className="text-gray-700 text-lg">
              With expertise and precise engineering, LANDSKING is a leading choice for railway and telecom shelters. Renowned for prompt delivery and installation, our shelters provide the following benefits:
              <br />
              <br />
             <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>Fully Waterproof: Built to withstand outdoor conditions</li>
                <li>Corrosion Resistant: Can endure severe weather conditions</li>
                <li>Portable and Lightweight: Easy to move and set up</li>
                <li>Strong Load Capacity: Built for durability</li>
                <li>Maintenance-Free: Ensures extended life span</li>
              </ul>
            </p>
          </div>


          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-3xl text-[#000080] font-bold text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 text-[#000080]">
              {[
                {
                  question: "What is a railway shelter used for?",
                  answer:
                    "A railway shelter is a prefabricated structure that offers passengers protection and comfort at railway stations, keeping them safe from weather conditions.",
                },
                {
                  question: "What is a telecom shelter used for?",
                  answer:
                    "A telecom shelter is a modular, weather-resistant structure that houses telecom equipment such as batteries, servers, and transmission units, safeguarding them from external conditions.",
                },
                {
                  question: "Which materials are used in railway and telecom shelters?",
                  answer:
                    "Railway and telecom shelters are constructed using durable components like steel frameworks, insulated panels, and finishes that resist harsh weather, providing extended service life.",
                },
                {
                  question:
                    "Why choose prefabricated railway and telecom shelters?",
                  answer:
                    "These shelters are quick to set up, economical, energy-efficient, and adaptable to specific needs, offering robust protection for equipment and infrastructure.",
                },
                {
                  question: "Are these shelters suitable for harsh weather?",
                  answer:
                    "Absolutely, LANDSKING’s railway and telecom shelters are built to endure challenging weather conditions such as heavy rainfall, high winds, and extreme heat.",
                },
                {
                  question:
                    "Can these shelters be customized?",
                  answer:
                    "Yes, LANDSKING delivers customizable shelters, allowing adjustments in dimensions, insulation, and added features to cater to the exact requirements of railway and telecom sites.",
                },
                {
                  question:
                    "How do telecom shelters keep equipment in optimal conditions?",
                  answer:
                    "These shelters include insulation, proper ventilation, and humidity management to maintain ideal conditions for delicate telecom equipment.",
                },
                {
                  question:
                    "What is the expected lifespan of these shelters?",
                  answer:
                    "When maintained correctly, these shelters can serve reliably for more than 20 years while retaining their durability and functionality.",
                },
                {
                  question:
                    "How quickly can a railway or telecom shelter be installed?",
                  answer:
                    "Thanks to prefabrication, LANDSKING’s shelters can be installed much faster than traditional structures, with most projects completed within a few weeks.",
                },
                {
                  question:
                    "Why choose LANDSKING for railway and telecom shelters?",
                  answer:
                    "LANDSKING delivers high-quality, durable, and customizable shelters, specifically designed to meet industry requirements, all at competitive prices.",
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

export default RailwayShelters;