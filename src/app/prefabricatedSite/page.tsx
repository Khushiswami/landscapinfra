import React from "react";
import Image from "next/image";
import Pebheader from "yes/Components/Pebheader";
import PedFooter from "../../Components/Footer";

const PrefabricatedSite = () => {
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
                "linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/new-images/prefabricated-1.jpg')",
            }}
          >
            {/* Centered Text */}
            <div className="text-white text-center relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold leading-snug tracking-wide">
                Prefabricated Site Infrastructure Solutions
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
                src="/new-images/prefabricated-2.jfif"
                alt="Row 1"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl text-[#000080] font-bold mb-4">
                Complete Infrastructure Solutions for Quick, Efficient, and Economical Project Implementation
              </h3>
              <p className="text-gray-700 mb-4">
                LANDSKING offers customized prefab site infrastructure solutions designed for fast-paced construction, industrial, and infrastructure projects throughout India. Our modular structures are durable, cost-effective, and ready for quick deployment, making them ideal for temporary high-performance setups.
                <br /><br />
                Whether it’s a site office, worker accommodation, toilet block, or storage unit, LANDSKING provides complete, ready-to-use solutions that minimize downtime and keep your projects running seamlessly.
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
                Essential Site Infrastructure Components We Provide
              </h3>
              <p className="text-gray-700 mb-4">
                We offer a comprehensive range of prefabricated infrastructure modules, including:
                <br />
              </p>
              <ul className="text-gray-700 mb-4 list-disc pl-5">
                <li>🏗️ Prefabricated Site Offices</li>
                <li>🛏️ Accommodation for Staff and Labour</li>
                <li>🚿 Sanitary and Toilet Facilities</li>
                <li>🛖 Security Cabins & Guard Posts</li>
                <li>📦 Storage and Inventory Units</li>
                <li>🍽️ Kitchen and Mess Areas</li>
                <li>🧼 Hand Wash and Utility Stations</li>
              </ul>

              <p className="text-gray-700 mb-4">
                Each unit is factory-built, pre-engineered, and ready for quick on-site assembly, saving you time, effort, and costs.
              </p>
            </div>
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/new-images/prefabricated-3.jpg"
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
                src="/new-images/prefabricated-4.jpg"
                alt="Row 3"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl text-[#000080] font-bold mb-4">
                Why Choose LANDSKING for Modular Infrastructure?
              </h3>
              <ul className="text-gray-700 mb-4 space-y-1">
                <li>✅ Quick Setup – Get your site ready faster than traditional methods</li>
                <li>✅ Moveable & Reusable – Ideal for projects across multiple locations</li>
                <li>✅ Built to Last – Engineered for extreme weather and demanding site conditions</li>
                <li>✅ Flexible Designs – Customizable layouts for offices, accommodation, and more</li>
                <li>✅ Comfortable Spaces – Thermal and sound insulation for a pleasant environment</li>
                <li>✅ Green Construction – Low waste and eco-conscious materials</li>
              </ul>
              <button className="border text-[#000080] border-[#000080] px-6 py-2 hover:bg-[#000080] hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Row 4 - Content Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl text-[#000080] font-bold mb-4">Ideal Applications</h3>
              <p className="text-gray-700 mb-4">
                Our prefabricated infrastructure solutions are trusted across a wide range of sectors: <br /><br />
                <ul className="list-disc pl-5">
                  <li>Civil construction projects</li>
                  <li>Highway and metro development projects</li>
                  <li>Oil and gas industry sites</li>
                  <li>Mining operations</li>
                  <li>Power and energy plants</li>
                  <li>Remote industrial facilities</li>
                </ul>


              </p>
            </div>
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/new-images/prefabricated-5.jpg"
                alt="Row 4"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
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
                  question: "How long does installation take?",
                  answer:
                    "Most basic setups are ready in just 5–10 days, depending on the site dimensions.",
                },
                {
                  question: "Are these units resuseable for different locations?",
                  answer:
                    "Absolutely! The units can be easily taken down, moved, and reassembled wherever needed.",
                },
                {
                  question: "What does prefabricated site infrastructure mean?",
                  answer:
                    "Prefabricated site infrastructure mean ready-made modular structures that can be quickly installed at a site to provide facilities like offices, living units, or utility blocks, saving time and reducing costs.",
                },
                {
                  question:
                    "Which industries can take advantage of prefabricated infrastructure solutions?",
                  answer:
                    "Industries such as construction, mining, oil & gas, and disaster management often use prefab setups for offices, housing, and other temporary or semi-permanent facilities.",
                },
                {
                  question: "What makes LANDSKING the ideal choice for site infrastructure?",
                  answer:
                    "LANDSKING provides innovative, durable, and eco-friendly modular solutions that save time and costs. From tailored designs to fast installation, we help businesses meet project timelines efficiently and reliably.",
                },
                {
                  question:
                    "Which materials make LANDSKING prefab infrastructure durable?",
                  answer:
                    "LANDSKING uses premium insulated panels, heavy-duty steel frames, and protective coatings to create long-lasting, low-maintenance, and energy-efficient solutions.",
                },
                {
                  question:
                    "Are these solutions customizable?",
                  answer:
                    "Yes, LANDSKING provides fully tailored designs to match your project’s specific requirements, from layout and size to functional features.",
                },
                {
                  question:
                    "What is the installation time for prefab infrastructure?",
                  answer:
                    "With LANDSKING, installation is fast and efficient, reducing downtime and enabling you to start operations in just days for smaller setups or a few weeks for larger projects.",
                },
                {
                  question:
                    "How eco-friendly are prefab structures?",
                  answer:
                    "They are designed with sustainability in mind, reducing material waste, optimizing energy efficiency, and promoting greener construction practices.",
                },
                {
                  question:
                    "How eco-friendly are LANDSKING’s prefab structures?",
                  answer:
                    "They are designed with sustainability in mind, reducing material waste, optimizing energy efficiency, and promoting greener construction practices.",
                },
                {
                  question:
                    "How long do prefabricated infrastructures last?",
                  answer:
                    "Designed with high-quality materials, these solutions are built to last for decades while withstanding tough weather and site conditions.",
                },
                {
                  question:
                    "Can prefabricated infrastructure be relocated?",
                  answer:
                    "Yes! Our modular structures are built for easy relocation, helping you save time and cost when projects shift locations.",
                },
                {
                  question:
                    "How do prefabricated structures help save money?",
                  answer:
                    "They optimize costs by reducing on-site labor, speeding up construction, and cutting down on unused materials, giving you maximum value for investment.",
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

export default PrefabricatedSite;