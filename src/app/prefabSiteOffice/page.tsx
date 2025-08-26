import React from "react";
import Image from "next/image";
import Pebheader from "../../Components/Pebheader";
import PedFooter from "../../Components/Footer";

const PrefabSiteOffice = () => {
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
                "linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/menupagetwo/pso-1.jpg')",
            }}
          >
            {/* Centered Text */}
            <div className="text-white text-center relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold leading-snug tracking-wide">
                Prefab Site Office
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
                src="/menupagetwo/pso-3.jpg"
                alt="Row 1"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl text-[#000080] font-bold mb-4">
                Efficiently Designed Modular Site Offices for Quick Deployment
              </h3>
              <p className="text-gray-700 mb-4">
                LandsKing Prefab delivers modular site office solutions using
                advanced building materials like PUF insulated panels, EPS
                insulated panels, and Light Gauge Steel Framing (LGSF). Designed
                for rapid deployment, our prefab site offices are the perfect
                solution for projects requiring a quick and efficient setup.
              </p>
              <p className="text-gray-700 mb-4">
                From design and fabrication to production and installation, our
                end-to-end turnkey services ensure a smooth and streamlined
                experience.
              </p>
              <p className="text-gray-700 mb-4">
                Engineered to withstand extreme weather conditions, our
                insulated cabins offer exceptional thermal performance. With
                prefabricated components manufactured off-site, project
                timelines are significantly shortened—cutting construction time
                by up to 40%—and minimizing delays caused by weather or other
                site-related challenges.
              </p>
              <p className="text-gray-700 mb-4">
                LandsKing has successfully delivered modular site offices to a
                wide range of clients across India, earning a reputation for
                reliability, cost-efficiency, and long-lasting performance.
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
                Key Features of LandsKing Modular Site Offices
              </h3>
              <p className="text-gray-700 mb-4">
                Tailored to your project needs using PUF/EPS insulated panels
                and LGSF structures for superior strength and efficiency.
              </p>
              <p className="text-gray-700 mb-4">
                📏 Flexible Wall Heights - Available in various heights with
                solid construction, offering adaptability across different site
                requirements.
              </p>
              <p className="text-gray-700 mb-4">
                🏗️ Lightweight & Easy to Install - OModular panels are quick to
                assemble and ideal for roof extensions with minimal structural
                load.
              </p>
              <p className="text-gray-700 mb-4">
                🪟 Supports Modern Glazing - Compatible with large glass panels
                and insulated doors for a clean, professional look.
              </p>
              <p className="text-gray-700 mb-4">
                🔒 Enhanced Safety & Comfort - Built-in provisions for smoke
                detectors, fire safety, and air-conditioning to ensure a secure
                and comfortable workspace.
              </p>
            </div>
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/menupagetwo/pso-4.jpg"
                alt="Row 2"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Centered Heading + Paragraph */}
          <div className="text-center mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-[#000080]">
              Flexible Applications for Every Need
            </h2>
            <p className="text-gray-700 text-lg">
              LandsKing offers flexible and innovative design solutions for a
              variety of applications. Our modular site offices and construction
              site office cabins provide efficient and durable workspaces that
              can be quickly installed to support your project needs. Designed
              for adaptability, these prefab units ensure reliable performance
              across different environments and timelines.
              <br />
              <br />
              Beyond site offices, LandsKing also supplies temporary office
              cabins ideal for events and other short-term uses. Our
              prefabricated sales and marketing offices, along with multi-storey
              modular buildings, offer scalable and cost-effective solutions
              tailored to meet the evolving demands of your business without
              compromising on quality or installation speed.
            </p>
          </div>

          {/* Row 3 - Image Left, Content Right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/menupagetwo/pso-2.jpeg"
                alt="Row 3"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Why Choose LandsKing Prefab Site Offices?
              </h3>
              <ul className="text-gray-700 mb-4 space-y-1">
                <li>
                  ✔️ Sturdy, ergonomic structures designed to withstand harsh
                  and extreme conditions.
                </li>
                <li>
                  ✔️ Insulated construction for improved energy efficiency and
                  enhanced comfort.
                </li>
                <li>
                  ✔️ Fast and straightforward dry construction method allowing
                  rapid assembly.
                </li>
                <li>
                  ✔️ Flexible fascia panel choices tailored to the specific
                  needs of the site.
                </li>
                <li>
                  ✔️ Modular design enabling easy expansion and relocation when
                  required.
                </li>
                <li>
                  ✔️ Weather-resistant and thermally insulated to maintain
                  durability and indoor climate control.
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
                Benefits of Choosing LandsKing Prefab Solutions
              </h3>

              <ul className="space-y-1">
                <li>
                  🔹 Enhanced insulation for superior energy efficiency and
                  comfort, even in extreme environments.
                </li>
                <li>
                  🔹 Rapid, dry construction methods paired with adaptable
                  design options.
                </li>
                <li>
                  🔹 Modular units that can be easily expanded or relocated as
                  project needs evolve.
                </li>
                <li>
                  🔹 Durable, weather-resistant structures built for reliable,
                  all-season performance.
                </li>
                <li>
                  🔹 Minimal site disruption thanks to off-site manufacturing
                  and clean installation.
                </li>
                <li>
                  🔹 Reduced construction waste with efficient material usage
                  and eco-friendly processes.
                </li>
                <li>
                  🔹 Quick project turnaround to meet tight deadlines and
                  accelerate delivery.
                </li>
              </ul>
            </div>
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/menupagetwo/pso-7.png"
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
                src="/menupagetwo/pso-9.jpg"
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
                  question: "What is a prefab site office?",
                  answer:
                    "A prefab site office is a pre-manufactured, modular workspace designed for quick installation at construction sites, industrial zones, or remote project locations. These offices are built off-site and assembled on-site, offering a fast and flexible alternative to traditional buildings.",
                },
                {
                  question:
                    "What materials are typically used to build prefab site offices?",
                  answer:
                    "Prefab site offices are commonly constructed using insulated panels such as PUF (Polyurethane Foam) or EPS (Expanded Polystyrene), along with Light Gauge Steel Framing (LGSF) for structural support. These materials offer strength, thermal insulation, and durability.",
                },
                {
                  question:
                    "What are the key benefits of using prefab site offices?",
                  answer:
                    "They offer quick installation, cost-efficiency, minimal on-site disruption, and flexibility in design. Prefab offices are ideal for fast-track projects and provide all essential office amenities in a compact, functional form.",
                },
                {
                  question: "Are prefab site offices energy efficient?",
                  answer:
                    "Yes, they are designed with insulation materials that help regulate indoor temperatures, reducing the need for excessive heating or cooling and contributing to overall energy savings.",
                },
                {
                  question: "Can prefab site offices be relocated?",
                  answer:
                    "Absolutely. Prefab site offices are modular and portable, making them easy to disassemble, transport, and reinstall at a new location without structural damage.",
                },
                {
                  question:
                    "How long does it take to install a prefab site office?",
                  answer:
                    "Depending on size and customization, installation typically takes a few days to a couple of weeks — significantly faster than traditional construction methods.",
                },
                {
                  question:
                    "Which industries commonly use prefab site offices?",
                  answer:
                    "They are widely used in construction, infrastructure development, mining, oil & gas, manufacturing, and event management industries — essentially wherever temporary or remote office space is needed.",
                },
                {
                  question:
                    "Can prefab site offices handle extreme weather conditions?",
                  answer:
                    "Yes, they are engineered to be weather-resistant and can perform well under harsh climates, including extreme heat, cold, wind, and rain.",
                },
                {
                  question: "Are prefab site offices customizable?",
                  answer:
                    "Yes, they can be fully tailored in terms of size, layout, materials, doors, windows, electrical fittings, HVAC, and more — to meet specific project needs and branding requirements.",
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

export default PrefabSiteOffice;
