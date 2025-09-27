import React from "react";
import Image from "next/image";
import Pebheader from "yes/Components/Pebheader";
import Footer from "../../Components/Footer";

const Warehouse = () => {
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
                "linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/menupagetwo/w-1.jpg')",
            }}
          >
            {/* Centered Text */}
            <div className="text-white text-center relative z-10">
              <h1 className="text-3xl md:text-4xl font-bold leading-snug tracking-wide">
                Warehouse
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
                src="/menupagetwo/w-2.jpg"
                alt="Row 1"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl text-[#000080] font-bold mb-4">
                Pre-fabricated Warehouse and Storage Solutions by LandsKing
                Infra.
              </h3>
              <p className="text-gray-700 mb-4">
                Boost your industrial storage and logistics efficiency with
                LandsKing Infra’s pre-fabricated warehouse and godown structures
                — engineered for strength, quick deployment, and
                cost-effectiveness. As a trusted PEB solutions provider in
                India, we offer fully customized warehouse infrastructure to
                match your specific industry requirements.
              </p>
              <p className="text-gray-700 mb-4">
                LandsKing Infra, a prominent name among warehouse structure
                manufacturers in India, specializes in delivering pre-engineered
                warehouses tailored to client-specific demands. Our structures
                are lightweight yet robust, offering a budget-friendly solution
                ideal for both commercial and industrial use.
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
                Why Choose Pre-Engineered Warehouses?
              </h3>
              <p className="text-gray-700 mb-4">
                📦 Rapid Installation - Up to 50% faster construction than
                traditional methods — enabling quicker operational readiness.
              </p>
              <p className="text-gray-700 mb-4">
                💰 Cost Efficiency - Reduce overall costs with minimal material
                waste and lower labor requirements.
              </p>
              <p className="text-gray-700 mb-4">
                📐 Customizable Designs - Fully tailored to your specific
                dimensions, layout, and workflow needs.
              </p>
              <p className="text-gray-700 mb-4">
                🛡️ Strength & Durability - Built to be earthquake-resistant and
                weatherproof, ensuring long-term reliability.
              </p>
              <p className="text-gray-700 mb-4">
                📈 Easily Expandable - Designed for future scalability, allowing
                smooth expansion as your business grows.
              </p>
            </div>
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/menupagetwo/w-4.jpg"
                alt="Row 2"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Centered Heading + Paragraph */}
          <div className="text-center mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-[#000080]">
              LandsKing Infra’s Complete Turnkey Warehouse Solutions Include:
            </h2>
            <p className="text-gray-700 text-lg">
              At LandsKing Infra, our turnkey warehouse solutions start with
              expert design and engineering, tailored to meet your unique
              operational requirements. We ensure every detail is optimized for
              performance and efficiency.
              <br />
              <br />
              Next, we focus on fabrication and quality control, producing
              durable components that meet the highest standards. Our skilled
              team handles on-site erection and installation, guaranteeing
              timely and safe project completion. When necessary, we also manage
              civil foundation work to provide a solid and reliable base for
              your structure.
              <br />
              <br />
              To ensure your facility is fully operational and compliant, we
              integrate essential electrical systems and fire safety features.
              Our support doesn’t end there — we provide ongoing post-sales
              assistance to keep your warehouse running smoothly for years to
              come.
            </p>
          </div>

          {/* Row 3 - Image Left, Content Right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/menupagetwo/w-5.png"
                alt="Row 3"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Main Advantages of LandsKing Infras Pre-Engineered Warehouses
              </h3>
              <ul className="text-gray-700 mb-4 space-y-1">
                <li>
                  <strong>🔩 Main Frame Structure:</strong>
                  Heavy-duty <em>welded steel rigid frames</em> ensure strength
                  and stability.
                </li>
                <li>
                  <strong>🧱 Support Members:</strong>
                  High-quality <em>Z/C-shaped purlins and girts</em> used for
                  walls and roofing support.
                </li>
                <li>
                  <strong>🏠 Roof & Wall Panels:</strong>
                  Insulated panels made from <em>PUF, EPS, or Rockwool</em> for
                  superior thermal efficiency.
                </li>

                <li>
                  <strong>💨 Ventilation Solutions:</strong>
                  Multiple airflow options including{" "}
                  <em>ridge vents, turbo ventilators, and louvered windows</em>.
                </li>
                <li>
                  <strong>🏢 Optional Add-Ons:</strong>
                  Customizable{" "}
                  <em>mezzanine floors and internal office partitions</em> as
                  per requirements.
                </li>
                <li>
                  <strong>🔥 Fire & Corrosion Protection:</strong>
                  Structures come with <em>fire-rated wall panels</em> and{" "}
                  <em>anti-corrosive paint coatings</em> for added safety and
                  durability.
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
                Applications Across Industries
              </h3>
              <ul className="text-gray-700 mb-4 space-y-1 ">
                <li>
                  <strong>Logistics and Supply Chain Operations:</strong>{" "}
                  Efficient storage and handling of goods to streamline
                  transportation and distribution.
                </li>
                <li>
                  <strong>FMCG and Retail Inventory Storage:</strong> Safe,
                  organized spaces for fast-moving consumer goods and retail
                  products to ensure timely availability.
                </li>
                <li>
                  <strong>Cold Chain and Food Processing Facilities:</strong>{" "}
                  Temperature-controlled environments designed for perishable
                  goods and food processing requirements.
                </li>
                <li>
                  <strong>Pharmaceutical and Chemical Storage:</strong> Secure
                  and compliant storage for sensitive pharmaceutical products
                  and hazardous chemicals.
                </li>
                <li>
                  <strong>Manufacturing Plants and Factories:</strong> Durable
                  structures to house raw materials, machinery, and finished
                  goods within production facilities.
                </li>
                <li>
                  <strong>Automotive Parts and Accessories Storage:</strong>{" "}
                  Organized storage solutions tailored to accommodate bulky
                  automotive components and spare parts.
                </li>
                <li>
                  <strong>E-commerce Fulfillment Hubs:</strong> Flexible
                  warehouse spaces that support fast and accurate order
                  processing and dispatch.
                </li>
              </ul>
            </div>
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/menupagetwo/w-6.png"
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
                src="/menupagetwo/w-7.png"
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
          <div className=" mx-auto mt-16">
            <h2 className="text-3xl text-[#000080] font-bold text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  question: "How long does it take to build a PEB warehouse? ",
                  answer:
                    "Typically, construction can be completed in 3 to 6 months, depending on size and customization. Pre-fabrication speeds up the process significantly compared to traditional methods.",
                },
                {
                  question: "What is a PEB warehouse?",
                  answer:
                    "A PEB warehouse is a pre-engineered building made from factory-fabricated steel components, designed for quick assembly and durability in industrial and commercial applications.",
                },
                {
                  question:
                    "What are the benefits of choosing a PEB warehouse over traditional construction?",
                  answer:
                    "PEB warehouses offer faster construction, lower costs, better quality control, flexibility, and ease of future expansion.",
                },
                {
                  question:
                    "What kind of maintenance do PEB warehouses require?",
                  answer:
                    "They require minimal maintenance due to corrosion-resistant coatings and durable materials but regular inspections are recommended to ensure longevity.",
                },
                {
                  question:
                    "Do you provide post-construction support and warranties?",
                  answer:
                    "Yes, comprehensive post-sales support and warranties are provided to ensure your facility operates smoothly and any issues are promptly addressed.x",
                },
                {
                  question:
                    "Are PEB warehouses resistant to natural disasters like earthquakes and storms?",
                  answer:
                    "Yes, PEB warehouses are designed to meet strict structural standards and are engineered to withstand seismic activity, high winds, and other environmental challenges.",
                },
                {
                  question: "How energy-efficient are PEB warehouses?",
                  answer:
                    "PEB warehouses can be designed with insulated panels, skylights, and ventilation systems to reduce energy consumption and improve temperature control.",
                },
                {
                  question: "What are the size limitations for PEB warehouses?",
                  answer:
                    "PEB warehouses can be designed for a wide range of sizes, with clear spans typically up to 30 meters or more without internal columns, adaptable to your space needs.",
                },
                {
                  question: "Can PEB warehouses be relocated if needed?",
                  answer:
                    "Yes, since they are modular and pre-fabricated, PEB structures can be dismantled and reassembled at a new location if required.",
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

export default Warehouse;
