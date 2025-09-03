import React from "react";
import Image from "next/image";
import Pebheader from "yes/Components/Pebheader";
import PedFooter from "../../Components/Footer";

const LowCostHousing = () => {
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
                "linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/new-images/low-cost-housing-1.jpg')",
            }}
          >
            {/* Centered Text */}
            <div className="text-white text-center relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold leading-snug tracking-wide">
                Cost-Effective Housing With PUF Panel Sheets
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
                src="/new-images/low-cost-housing-2.jpg"
                alt="Row 1"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl text-[#000080] font-bold mb-4">
                Innovative and Budget-Friendly Housing with PUF and EPS Panels
              </h3>
              <p className="text-gray-700 mb-4">
                LANDSKING delivers innovative, budget-friendly housing solutions using PUF and EPS panels, ensuring eco-friendly, energy-efficient, and durable construction. These solutions are designed to meet modern housing needs without compromising on quality or comfort.
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
                Advantages and unique qualities of PUF and EPS panel homes
              </h3>
              <p className="text-gray-700 mb-4">
                ✅ Cost-effective construction: Pre-engineered panels minimize labor and installation time, cutting down overall expenses.
              </p>
              <p className="text-gray-700 mb-4">
                ✅ Thermal efficiency: Excellent insulation helps maintain indoor comfort while reducing energy usage.
              </p>
              <p className="text-gray-700 mb-4">
                ✅ Durability: Built to resist corrosion, pests, fire, and extreme weather for long-lasting performance.
              </p>
              <p className="text-gray-700 mb-4">
                ✅ Lightweight and relocatable: Easy to transport and assemble, making them ideal for multiple applications.
              </p>
              <p className="text-gray-700 mb-4">
                ✅ Customizable designs: Flexible layouts and finishes tailored to suit varied project needs.
              </p>
              <p className="text-gray-700 mb-4">
                ✅ Eco-friendly: Sustainable materials help lower the overall carbon footprint.
              </p>
            </div>
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/new-images/low-cost-housing-3.jpg"
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
                src="/new-images/low-cost-housing-4.webp"
                alt="Row 3"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl text-[#000080] font-bold mb-4">
                Applications
              </h3>
              <ul className="text-gray-700 mb-4 space-y-1">
                <li>✅ Labour accommodation: Rapidly deployable housing units to meet workforce requirements.</li>
                <li>✅ Modular site offices: Efficient, relocatable office spaces designed for construction environments.</li>
                <li>✅ Temporary housing: Practical short-term living solutions for disaster relief or seasonal staff.</li>
                <li>✅ Marketing offices: Portable and functional structures for sales or promotional operations.</li>
                <li>✅ Construction canteens: Convenient on-site dining facilities for workers and teams.</li>
                <li>✅ Equipment housing: Secure and durable shelters for machinery, tools, and equipment.</li>
              </ul>
              <button className="border text-[#000080] border-[#000080] px-6 py-2 hover:bg-[#000080] hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>


{/* Centered Heading + Paragraph */}
          {/* <div className="text-center mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-[#000080]">
              Prefab Multi-Storey Buildings for Multipurpose Applications
            </h2>
            <p className="text-gray-700 text-lg">
              Landsking Infra Pvt Ltd Prefab delivers cutting-edge and
              dependable multi-storey prefabricated buildings tailored for a
              variety of uses—including office hubs, commercial centers, and
              institutional infrastructures. Constructed using advanced PUF/EPS
              insulated panels and Light Gauge Steel Framing (LGSF) technology,
              our buildings offer excellent durability, thermal efficiency, and
              quick on-site assembly.
              <br />
              <br />
              Each structure is meticulously designed to meet vital engineering
              standards, including earthquake resistance (seismic compliance),
              wind load management, and optimal load-bearing capacity. At
              Landsking Infra Pvt Ltd, we manage the entire process
              in-house—from architectural design and manufacturing to complete
              on-site erection—providing a true turnkey experience.
              <br />
              <br />
              Our prefab multi-storey solutions are especially suitable for
              sites with space constraints or time-sensitive schedules. By
              combining Pre-Engineered Building (PEB) systems with LGSF
              frameworks, we ensure enhanced strength and structural integrity.
              In addition, fire-rated coatings are applied to meet high safety
              benchmarks.
              <br />
              <br />
              Backed by 20+ years of industry experience, Landsking Infra Pvt
              Ltd Prefab is a trusted partner for fast, cost-effective, and
              long-lasting multi-storey building solutions across India.
            </p>
          </div> */}


    

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-3xl text-[#000080] font-bold text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 text-[#000080]">
              {[
                {
                  question: "Why choose PUF panels for low-cost housing?",
                  answer:
                    "PUF (Polyurethane Foam) panel-based homes are built using insulated, prefabricated panels for walls and roofs. This method ensures affordability, energy efficiency, and quick construction, making it an excellent solution for cost-effective housing.",
                },
                {
                  question: "Are PUF panel houses strong and weather-resistant?",
                  answer:
                    "Yes, PUF panel houses are highly durable and designed to endure extreme weather conditions. They offer superior insulation, fire resistance, and moisture protection, making them reliable in various climates.",
                },
                {
                  question: "What advantages do PUF panels offer for affordable housing?",
                  answer:
                    "PUF panels provide quick, cost-effective construction, offer great insulation, need little maintenance, and resist termites and corrosion — suitable for shelters, work accommodations, site offices, and permanent homes.",
                },
                {
                  question:
                    "Are PUF panel houses customizable?",
                  answer:
                    "Yes! LANDSKING offers PUF panel housing that can be personalized in every aspect — from layout and size to interior partitions, doors, windows, and utility fittings — ensuring the perfect fit for your project.",
                },
                {
                  question: "What’s the construction time for PUF panel houses?",
                  answer:
                    "Construction timelines are greatly minimized with PUF panels. Depending on the project’s scale, a standard low-cost housing unit can be completed in just a few days to a couple of weeks.",
                },
                {
                  question:
                    "Are PUF panel houses eco-friendly?",
                  answer:
                    "Yes, PUF panel homes are highly energy-efficient thanks to their excellent insulation, which reduces HVAC energy usage. Additionally, their construction process produces minimal waste, supporting sustainable and eco-friendly building practices.",
                },
                {
                  question:
                    "Is PUF panel housing good for government or NGO use?",
                  answer:
                    "Yes, PUF panel solutions are trusted by governments and NGOs for large-scale affordable housing, emergency shelters, and temporary living spaces, thanks to their quick setup and budget-friendly nature.",
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

export default LowCostHousing;