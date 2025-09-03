import React from "react";
import Image from "next/image";
import Pebheader from "yes/Components/Pebheader";
import PedFooter from "../../Components/Footer";

const LaborHutment = () => {
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
                "linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/new-images/labour-hutment-1.jpg')",
            }}
          >
            {/* Centered Text */}
            <div className="text-white text-center relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold leading-snug tracking-wide">
                Labor Hutment
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
                src="/new-images/labour-hutment-2.jpg"
                alt="Row 1"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl text-[#000080] font-bold mb-4">
                Durable, Clean, And Affordable Accommodation For Labor
              </h3>
              <p className="text-gray-700 mb-4">
                LANDSKING specializes in high-quality prefabricated labour hutments, offering ready-to-install structures tailored to your space and workforce needs. From electrical setups and sanitary systems to furniture and bunk beds, we provide everything needed to create comfortable and safe accommodations for your teams.
              </p>
              <button className="border text-[#000080] border-[#000080] px-6 py-2 hover:bg-[#000080] hover:text-white transition">
                Get a Quote
              </button>
            </div>
          </div>

          {/* Row 2 - Content Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl text-[#000080] font-bold mb-4">
                Key Features
              </h3>
              <p className="text-gray-700 mb-4">
                ● Custom-built, movable structures to suit your project needs
              </p>
              <p className="text-gray-700 mb-4">
                ● Resistant to harsh weather and termites, requiring zero maintenance
              </p>
              <p className="text-gray-700 mb-4">
                ● Energy-efficient design with G+1 and G+2 options to maximize space
              </p>
              <p className="text-gray-700 mb-4">
                ● Quick setup at an affordable cost
              </p>
              <p className="text-gray-700 mb-4">
                ● Built to last, retaining high value over time
              </p>
            </div>
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/new-images/labour-hutment-3.webp"
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
                src="/new-images/labour-hutment-4.webp"
                alt="Row 3"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl text-[#000080] font-bold mb-4">
                Technical Specifications
              </h3>
              <ul className="text-gray-700 mb-4 space-y-1">
                <li>● Walls/Roof: Insulated PUF/EPS panels</li>
                <li>● Doors: Fully insulated, equipped with premium accessories</li>
                <li>● Windows: Smooth aluminum sliding windows for a modern look</li>
                <li>● Fittings: Electrical, sanitary, and furniture options included</li>
                
              </ul>
              <button className="border text-[#000080] border-[#000080] px-6 py-2 hover:bg-[#000080] hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>

          

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-3xl text-[#000080] font-bold text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 text-[#000080]">
              {[
                {
                  question: "What is a prefabricated labour hutment?",
                  answer:
                    "A prefabricated labour hutment is a modular housing solution created for workers at construction sites or remote locations, ensuring safe, comfortable, and hygienic living spaces.",
                },
                {
                  question: "Which materials are used in prefabricated labour hutments?",
                  answer:
                    "These hutments are constructed using high-grade insulated panels, sturdy steel frames, and durable roofing materials, ensuring strength, long life, and resistance to harsh weather.",
                },
                {
                  question: "Key advantages of prefabricated labour hutments",
                  answer:
                    "They’re fast to install, easy to relocate, budget-friendly, and environmentally conscious — the perfect solution for safe and efficient temporary housing.",
                },
                {
                  question:
                    "Can labour hutments be customized?",
                  answer:
                    "Absolutely! These units can be designed to match your exact needs — from size and room layouts to ventilation, electrical fittings, and sanitation features.",
                },
                {
                  question: "How much time it take to install a labour hutment?",
                  answer:
                    "Installation is fast and efficient, most hutments are ready in just a few days, while larger or more complex units may take a couple of weeks.",
                },
                {
                  question:
                    "Are prefabricated labour hutments durable?",
                  answer:
                    "Absolutely! LANDSKING’s prefabricated hutments are built tough to handle extreme weather while providing safe and durable housing for years.",
                },
                {
                  question:
                    "Where can prefabricated labour hutments be used?",
                  answer:
                    "These hutments are widely used at construction sites, mining zones, infrastructure development projects, and remote locations where temporary housing is needed.",
                },
                {
                  question:
                    "Are labour hutments easy to relocate?",
                  answer:
                    "Absolutely! These portable units can be quickly dismantled, transported, and reinstalled wherever your project takes you.",
                },
                {
                  question:
                    "Are prefabricated hutments eco-friendly?",
                  answer:
                    "Absolutely! These hutments are designed to cut down on construction waste and energy consumption, offering a greener, more sustainable way to house your workforce.",
                },
                {
                question:
                    "Why choose LANDSKING for labour hutments?",
                  answer:
                    "With LANDSKING, you get durable, comfortable, and tailor-made hutments delivered on schedule — all at a cost-effective price.",
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

export default LaborHutment;