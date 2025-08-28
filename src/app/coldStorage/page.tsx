import React from "react";
import Image from "next/image";

import Footer from "../../Components/Footer";
import IndustryHeader from "yes/Components/Industryheader";
const ColdStorage = () => {
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
                "linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/menupagetwo/cold3.png')",
            }}
          >
            {/* Centered Text */}
            <div className="text-white text-center relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold leading-snug tracking-wide">
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
                src="/menupagetwo/cold4.png"
                alt="Row 1"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl text-[#000080] font-bold mb-4">
                LANDSKING INFRA: YOUR RELIABLE PARTNER FOR COLD STORAGE AND COLD
                ROOM MANUFACTURING IN INDIA
              </h3>
              <p className="text-gray-700 mb-4">
                Did you know that 40-50% of India’s fresh produce is wasted
                every year due to insufficient cold chain infrastructure,
                resulting in losses worth USD 440 billion?
              </p>
              <p className="text-gray-700 mb-4">
                At Landsking Infra, we offer advanced cold storage and cold room
                solutions designed to preserve perishables and minimize waste.
                With our expertise, commitment to quality, and innovative
                approach, we are the trusted cold storage manufacturer, cold
                room manufacturer, and cold room panels supplier for businesses
                across various industries.
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
                Why Choose Landsking Infra for Your Cold Storage and Cold Room
                Needs?
              </h3>
              <p className="text-gray-700 mb-4">
                🚀Expertise & Experience - Extensive experience delivering
                customized, high-performance cold storage solutions across
                diverse industries.
              </p>
              <p className="text-gray-700 mb-4">
                💰Tailored Designs - Customized solutions to meet your specific
                storage requirements, maximizing temperature control and space
                efficiency.
              </p>
              <p className="text-gray-700 mb-4">
                🏢 Energy Efficiency - Incorporation of advanced technologies to
                reduce energy consumption and lower operational costs.
              </p>
              <p className="text-gray-700 mb-4">
                🌍 Premium Quality- Use of superior materials and cutting-edge
                manufacturing processes for enhanced durability and
                reliability..
              </p>
            </div>
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/menupagetwo/cold2.jpg"
                alt="Row 2"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Centered Heading + Paragraph */}
          <div className="text-center mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-[#000080]">
              Why Landsking Infra’s Panels Are the Preferred Choice ?
            </h2>
            <p className="text-gray-700 text-lg">
              Landsking Infra’s cold storage and cold room panels deliver
              superior performance through advanced design and manufacturing
              techniques. Engineered for exceptional thermal efficiency, these
              panels maintain precise temperature control to reduce energy
              consumption and preserve product quality.
              <br />
              <br />
              Built with durable, factory-made components, the panels withstand
              the rigorous demands of cold storage environments while ensuring
              long-lasting, airtight structures. This durability ensures your
              storage facility remains reliable and efficient over time. Our
              prefab multi-storey solutions are especially suitable for sites
              with space constraints or time-sensitive schedules. By combining
              Pre-Engineered Building (PEB) systems with LGSF frameworks, we
              ensure enhanced strength and structural integrity. In addition,
              fire-rated coatings are applied to meet high safety benchmarks.
              <br />
              <br />
              The prefabricated nature of the panels allows for quick and
              hassle-free installation, significantly minimizing project
              timelines and operational downtime. This means faster setup and
              quicker operational readiness for your cold storage needs.
            </p>
          </div>

          {/* Row 3 - Image Left, Content Right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/menupagetwo/cold6.png"
                alt="Row 3"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Core Features of Landsking Infra’s Cold Storage and Cold Room
                Systems
              </h3>
              <ul className="text-gray-700 mb-4 space-y-1">
                <li>
                  <strong>Modular and scalable design:</strong> Easily
                  expandable and adaptable to changing storage needs.
                </li>
                <li>
                  <strong>Quick and easy installation:</strong> Prefabricated
                  panels allow fast setup, reducing downtime.
                </li>
                <li>
                  <strong>Fire-resistant construction:</strong> Panels are
                  designed to resist fire, ensuring safety.
                </li>
                <li>
                  <strong>Corrosion-resistant materials:</strong> Built to
                  withstand harsh environments and prevent rust.
                </li>
                <li>
                  <strong>Low maintenance requirements:</strong> Durable
                  materials minimize the need for frequent repairs.
                </li>
                <li>
                  <strong>Customizable sizes and layouts:</strong> Tailored
                  solutions to fit specific space and operational needs.
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
                Advanced Technology in Cold Storage Manufacturing
              </h3>

              <p className="text-gray-700 mb-4">
                At <strong>Landsking Infra</strong>, we leverage{" "}
                <strong>state-of-the-art manufacturing technologies</strong> to
                deliver unmatched quality and performance. Our{" "}
                <strong>continuous line panel production</strong> process
                ensures enhanced panel uniformity and superior quality, making
                it ideal for cold storage and cold room paneling. We use{" "}
                <strong>factory-made insulated panels</strong> that guarantee
                precise thermal control and exceptional durability. By
                incorporating <strong>innovative insulation materials</strong>{" "}
                such as PUF and EPS, our panels offer excellent heat retention
                and energy efficiency. Coupled with{" "}
                <strong>precision engineering</strong>, our solutions provide
                robust structural integrity and consistent performance across
                all operating conditions.
              </p>
            </div>
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/menupagetwo/cold1.jpg"
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
                src="/menupagetwo/cold5.png"
                alt="Row 5"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Key Applications of Cold Storage and Cold Room Solutions
              </h3>
              <p className="text-gray-700 mb-4">
                Landsking Infra’s cold storage and cold room solutions cater to
                various industries, including:
              </p>
              <ul className="space-y-1">
                <li>
                  🍎 <strong>Food Industry:</strong> Preserve fruits,
                  vegetables, dairy, meat, and other perishable items.
                </li>
                <li>
                  💊 <strong>Pharmaceuticals:</strong> Ensure safe storage of
                  medicines, vaccines, and temperature-sensitive drugs.
                </li>
                <li>
                  ⚗️ <strong>Chemical Industry:</strong> Maintain controlled
                  environments for chemicals and hazardous substances.
                </li>
                <li>
                  🌸 <strong>Horticulture:</strong> Extend freshness and shelf
                  life of flowers, plants, and horticultural products.
                </li>
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
                  question: "What is a cold storage facility?",
                  answer:
                    "A cold storage facility is a temperature-controlled environment specifically designed to preserve perishable goods such as food, pharmaceuticals, and other temperature-sensitive products.",
                },
                {
                  question:
                    "What are the benefits of prefabricated cold storage solutions?",
                  answer:
                    "Prefabricated cold storage systems provide fast setup, economical advantages, energy efficiency, and can be tailored to meet diverse storage requirements.",
                },
                {
                  question:
                    "What materials are used in cold storage construction?",
                  answer:
                    "Cold storage units utilize insulated panels like PUFF, EPS, or Rockwool to ensure thermal insulation and long-lasting durability.",
                },
                {
                  question:
                    "What temperature ranges can cold storage maintain?",
                  answer:
                    "Cold storage systems can regulate temperatures across a broad spectrum, from deep-freezing at around -40°C to chilled settings between 0°C and 10°C, based on specific needs.",
                },
                {
                  question:
                    "What are the key components of a cold storage unit?",
                  answer:
                    "The main components consist of insulated panels, refrigeration units, flooring, lighting, and climate control systems.",
                },
                {
                  question:
                    "What is the lifespan of a prefabricated cold storage unit?",
                  answer:
                    "When well-maintained, a prefabricated cold storage facility can have a lifespan of several decades.",
                },
                {
                  question:
                    "Does Landsking Infra offer turnkey solutions for cold storage?",
                  answer:
                    "Landsking Infra offers complete solutions covering everything from design and manufacturing to transportation and installation.",
                },
                {
                  question:
                    "How does landsking infra ensure the quality of cold storage solutions?",
                  answer:
                    "Landsking Infra employs premium materials, cutting-edge technology, and rigorous quality control measures to provide durable and efficient cold storage solutions.",
                },
                {
                  question:
                    "What makes Landsking Infra a trusted cold storage manufacturer ? ",
                  answer:
                    "Landsking Infra is recognized for its high-quality standards, innovative designs, and comprehensive turnkey solutions customized to meet client requirements.",
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

export default ColdStorage;
