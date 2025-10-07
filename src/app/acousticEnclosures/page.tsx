import React from "react";
import Image from "next/image";
import IndustryHeader from "yes/Components/Industryheader";
import PedFooter from "../../Components/Footer";
import Pebheader from "yes/Components/Pebheader";

const AcousticEnclosures = () => {
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
                "linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/new-images/acoustic-enclosures-1.webp')",
            }}
          >
            {/* Centered Text */}
            <div className="text-white text-center relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold leading-snug tracking-wide">
                Acoustic Enclosure
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
                src="/new-images/acoustic-enclosures-2.webp"
                alt="Row 1"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl text-[#000080] font-bold mb-4">
                Effective Noise Control Solutions For Industrial Spaces
              </h3>
              <p className="text-gray-700 mb-4">
                Acoustic enclosures play a vital role in controlling noise
                pollution in industrial and commercial spaces. They block noise
                from loud equipment and protect interiors from external sounds,
                creating quieter and more productive workplaces.
                <br /> <br />
                LANDSKING Prefab specializes in high-performance acoustic
                enclosures made from advanced materials like PUF panels, EPS
                panels, and Rock Wool. Built for durability and efficiency, our
                enclosures meet strict noise and safety standards and can be
                customized for a wide range of applications.
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
                Advantages of LANDSKING Prefab Acoustic Enclosures
              </h3>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>
                  <strong>Superior Noise Control:</strong> Effectively blocks
                  loud industrial noise for a quieter environment.
                </li>
                <li>
                  <strong>Strong and Long-Lasting:</strong> Made with
                  high-quality materials for durability.
                </li>
                <li>
                  <strong>Thermal and Sound Insulation:</strong> Keeps spaces
                  comfortable and energy-efficient.
                </li>
                <li>
                  <strong>Customizable Solutions:</strong> Designed to fit
                  specific industrial or commercial needs.
                </li>
                <li>
                  <strong>Easy to Install and Maintain:</strong> Quick setup
                  with low maintenance requirements.
                </li>
                <li>
                  <strong>Meets Safety Standards:</strong> Fully compliant with
                  workplace noise and safety regulations.
                </li>
              </ul>
            </div>
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/new-images/acoustic-enclosures-3.jpg"
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
                src="/new-images/acoustic-enclosures-4.webp"
                alt="Row 3"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#000080]">
                Applications
              </h3>
              <ul className="text-gray-700 mb-4 space-y-1 list-disc">
                <li>
                  Soundproofing solutions for <strong>recording studios</strong>
                  .
                </li>
                <li>
                  Noise control for{" "}
                  <strong>machinery and workshop operations</strong>.
                </li>
                <li>
                  Enclosures for{" "}
                  <strong>radiators, heat exchangers, and engines</strong>.
                </li>
                <li>
                  Portable cabins for{" "}
                  <strong>metal and automotive workshops</strong>.
                </li>
                <li>
                  Noise management in{" "}
                  <strong>manufacturing and production units</strong>.
                </li>
              </ul>
              <button className="border text-[#000080] border-[#000080] px-6 py-2 hover:bg-[#000080] hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Centered Heading + Paragraph */}
          <div className="text-center mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-[#000080]">
              Manufacturing Excellence
            </h2>
            <p className="text-gray-700 text-lg">
              Our modern facility produces high-quality acoustic panels with
              advanced insulating cores like PUF, EPS, and Rock Wool. Every
              product is thoroughly tested to ensure top performance and
              compliance with industry standards.
              <br />
              <br />
              Wherever your project is in India, LANDSKING ensures on-time
              delivery, helping you build safer and quieter workplaces.
            </p>
          </div>

          {/* FAQ Section */}
          <div className=" mx-auto mt-16 md:px-9">
            <h2 className="text-3xl text-[#000080] font-bold text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 text-[#000080]">
              {[
                {
                  question: "What is an acoustic enclosure?",
                  answer:
                    "An acoustic enclosure is a specially designed structure that reduces or controls noise from machinery or equipment. It is also commonly known as a sound enclosure or noise enclosure.",
                },
                {
                  question: "What is the purpose of an acoustic enclosure?",
                  answer:
                    "An acoustic enclosure is a soundproof chamber designed to block or reduce noise. It is used across various industries and can be customized in size to fit different types of machinery and specific client requirements.",
                },
                {
                  question: "How effective is glass wool for soundproofing?",
                  answer:
                    "Glass wool is highly effective for soundproofing. Its dense structure absorbs up to 90% of sound waves, and being lightweight, it’s easy to install.",
                },
                {
                  question: "How effective is ROCKWOOL for sound panels?",
                  answer:
                    "ROCKWOOL is very effective for sound absorption thanks to its open, porous structure. It helps reduce noise, control echoes and vibrations, and even minimizes rain noise when used in roof insulation.",
                },
                {
                  question:
                    "What are the specifications of an acoustic enclosure?",
                  answer:
                    "A modular acoustic enclosure is made of steel acoustic panels filled with mineral fiber insulation, lined with glass fiber, and covered with perforated sheet steel. These panels are assembled within a strong steel support frame for durability and stability.",
                },
                {
                  question: "What is ROCKWOOL acoustic insulation?",
                  answer:
                    "ROCKWOOL acoustic insulation is engineered from stone wool to provide superior sound blocking, absorption, and optimization for a wide range of acoustic applications.",
                },
                {
                  question: "How effective are soundproof acoustic panels?",
                  answer:
                    "Acoustic panels significantly minimize noise transmission and enhance acoustic comfort, but they are designed to reduce sound, not eliminate it entirely.",
                },
                {
                  question: "Why choose prefabricated acoustic units?",
                  answer:
                    "These ready-to-install panels effectively absorb noise and improve sound quality in any space. They offer flexible installation—single units, stylish groupings, or seamless wall-to-wall coverage.",
                },
                {
                  question: "What makes a soundproof enclosure effective?",
                  answer:
                    "Soundproof enclosures combine advanced noise absorption and isolation techniques, with durable steel construction and customizable features such as airflow systems and modular panels, ensuring an efficient and client-specific noise-control solution.",
                },
                {
                  question: "Who is the best acoustic enclosure manufacturer?",
                  answer:
                    "LANDSKING Prefab is one of India’s top acoustic enclosure manufacturers, trusted by leading businesses for its high-quality, effective, and customizable noise-control solutions.",
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

export default AcousticEnclosures;
