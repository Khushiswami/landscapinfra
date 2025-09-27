import React from "react";
import Image from "next/image";
import Pebheader from "yes/Components/Pebheader";
import Footer from "../../Components/Footer";

const IndustrialEnclosures = () => {
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
                "linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('menupagetwo/ind-2.jpeg')",
            }}
          >
            {/* Centered Text */}
            <div className="text-white text-center relative z-10">
              <h1 className="text-3xl md:text-4xl font-bold leading-snug tracking-wide">
                Industrial Enclosures
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
                src="/menupagetwo/ind-1.jpg"
                alt="Row 1"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl text-[#000080] font-bold mb-4">
                Industrial Enclosures – Engineered for Equipment Protection and
                Environmental Management
              </h3>
              <p className="text-gray-700 mb-4">
                At Landsking Infra, we excel in crafting innovative
                prefabricated multi-storey structures that offer unmatched
                durability, rapid construction, and eco-friendly solutions. With
                over 20 years of industry experience and advanced production
                facilities, we provide end-to-end turnkey solutions customized
                to suit your specific requirements—whether for commercial,
                institutional, or residential applications.
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
                🔧 Why Choose Landsking Infra Industrial Enclosures?
              </h3>
              <p className="text-gray-700 mb-4">
                ✅ Custom-Engineered Design - Designed to meet your specific
                operational requirements, industry standards, and spatial
                constraints.
              </p>
              <p className="text-gray-700 mb-4">
                ✅ Robust Construction - Built with high-quality PUF/EPS
                insulated sandwich panels, ensuring strength, durability,
                thermal insulation, and weather resistance.
              </p>
              <p className="text-gray-700 mb-4">
                ✅ Quick & Modular Installation - Factory-fabricated panels and
                frames enable faster, hassle-free on-site assembly with minimal
                disruption.
              </p>
              <p className="text-gray-700 mb-4">
                ✅ Thermal & Acoustic Efficiency - Engineered to reduce heat
                transfer and suppress noise, enhancing overall working
                conditions.
              </p>
              <p className="text-gray-700 mb-4">
                ✅ Corrosion & Fire Resistance - Panels are specially coated and
                treated to withstand harsh environments and ensure long-lasting
                safety.
              </p>
              <p className="text-gray-700 mb-4">
                ✅ Versatile Applications - Ideal for both indoor and outdoor
                use across diverse industrial and commercial sectors.
              </p>
            </div>
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/menupagetwo/ind-3.jpeg"
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
                src="/menupagetwo/ind-6.jpg"
                alt="Row 3"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                🏭 Applications of Landsking Infra Industrial Enclosures
              </h3>
              <ul className="text-gray-700 mb-4 space-y-1">
                <li>🔌 Electrical & Transformer Rooms</li>
                <li>🔊 Compressor & Generator Enclosures</li>
                <li>🛠️ CNC Machine Housings & Control Panels</li>
                <li>🎧 Acoustic Testing & Soundproof Cabins</li>
                <li>❄️ HVAC & AHU Units</li>
                <li>🌬️ Clean & Dust-Free Equipment Enclosuress</li>
                <li>🌡️ Material Storage with Temperature Control</li>
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
                🛠️ Complete Turnkey Solutions – From Design to Deployment
              </h3>
              <p className="text-gray-700 mb-4">
                At Landsking Infra, we offer complete turnkey solutions — from
                design consultation and precision manufacturing to delivery and
                on-site installation.
              </p>
              <p className="text-gray-700 mb-4">
                With 15+ years of industry expertise and pan-India delivery
                capabilities, we ensure smooth, timely, and reliable project
                execution, even in the most remote or challenging locations.
              </p>
            </div>
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/menupagetwo/ind-5.jpeg"
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
                src="/menupagetwo/ind-4.jpg"
                alt="Row 5"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Key Advantages of Choosing Landsking Infra Enclosures
              </h3>
              <ul className="space-y-1">
                <li>✔️ Applicable across diverse industrial sectors</li>
                <li>✔️ Constructed from strong and durable materials</li>
                <li>✔️ Fireproof and watertight design</li>
                <li>✔️ Extended service life with low upkeep</li>
                <li>✔️ Highly customizable to fit specific needs</li>
                <li>
                  ✔️ Modular structure for easy installation and scalability
                </li>
                <li>
                  ✔️ Resistant to corrosion and physical damage in tough
                  conditions
                </li>
              </ul>
            </div>
          </div>

          {/* FAQ Section */}
          <div className=" mx-auto mt-16">
            <h2 className="text-3xl text-[#000080] font-bold text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  question:
                    "What industries benefit from industrial enclosures?",
                  answer:
                    "Industries like manufacturing, energy, pharmaceuticals, FMCG, and telecommunications utilize industrial enclosures to protect their equipment and ensure optimal environmental control.",
                },
                {
                  question: "Are the enclosures suitable for outdoor use?",
                  answer:
                    "Yes, our enclosures are weatherproof and corrosion-resistant, ensuring reliable performance in both indoor and outdoor environments.",
                },
                {
                  question: "How long does installation take?",
                  answer:
                    "Installation time varies from 1 to 7 days depending on size and customization, with modular systems enabling faster deployment.",
                },
                {
                  question: "What is the insulation value of the panels?",
                  answer:
                    "PUF panels provide exceptional insulation with a low thermal conductivity of just 0.022 W/mK.",
                },
                {
                  question:
                    "Can industrial enclosures withstand harsh environments?",
                  answer:
                    "andsking Infra designs enclosures using specialized materials and coatings to endure extreme temperatures, moisture, and corrosive conditions.",
                },
                {
                  question:
                    "What industries typically use industrial enclosures?",
                  answer:
                    "Industries such as manufacturing, automotive, electronics, energy, and pharmaceuticals commonly use these enclosures.",
                },
                {
                  question: "What is the lifespan of an industrial enclosure?",
                  answer:
                    "With regular maintenance, industrial enclosures can have a service life spanning several decades.",
                },
                {
                  question:
                    "Does Landsking Infra offer end-to-end turnkey solutions for industrial enclosures?",
                  answer:
                    "Yes, Landsking Infra provides comprehensive services including design, manufacturing, transportation, and installation for complete turnkey solutions.",
                },
                {
                  question:
                    "How does Landsking Infra maintain quality standards for its industrial enclosures?",
                  answer:
                    "Landsking Infra uses premium materials, state-of-the-art manufacturing methods, and stringent quality control procedures to ensure superior industrial enclosure performance.",
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

export default IndustrialEnclosures;
