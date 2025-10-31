"use client";
import { useState } from "react";

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Brand from "../../Components/Brand";

import Footer from "../../Components/Footer";
import Pebheader from "yes/Components/Pebheader";

export default function Lightguage() {
  interface FAQ {
    question: string;
    answer: string;
  }
  const areas = [
    {
      id: 1,
      title: "LGSF Homes & Luxury Villas",
      subtitle: "LGSF Homes & Luxury Villas",
      description:
        "Landsking Infra offers expertly crafted prefabricated homes, designed to be innovative, energy-efficient, and budget-friendly. Constructed using premium materials such as PUF and EPS panels, these homes provide excellent thermal insulation and long-lasting durability. Fully customizable and rapidly installable, they are an ideal solution for a wide range of residential applications.",
      image: "/menupageimg/lgs3.jpg",
    },
    {
      id: 2,
      title: "Prefab School",
      subtitle: "Prefab School",
      description:
        " Landsking Infra delivers sustainable and economical prefabricated solutions tailored for schools and healthcare facilities. These modular buildings are engineered for fast deployment, design flexibility, and energy efficiency, making them perfect for educational and medical environments. Built with high-quality, customizable materials, they ensure optimal functionality, safety, and comfort to meet diverse operational needs.",
      image: "/menupageimg/lgs4.jpg",
    },
  ];

  const faqs: FAQ[] = [
    {
      question: "What is Light Gauge Steel Framing (LGSF)?",
      answer:
        "It is a digitally modelled, cold-formed structural system where members are manufactured off-site with sub−millimeter precision for bolt-together assembly.",
    },
    {
      question:
        "How does LGSF fundamentally outperform wood in structural longevity?",
      answer:
        "LGSF ensures permanent structural integrity because the galvanized steel is immune to biological decay, moisture absorption, and the costly maintenance associated with wood rot or termites.",
    },
    {
      question: "What is the key project management gain from using LGSF?",
      answer:
        "The systems predictable, factory-cut components drastically reduce the need for on−site rework or cutting, guaranteeing project phases align perfectly with the original, compressed schedule.",
    },
    {
      question:
        "Does LGSF introduce thermal bridging issues compared to timber framing?",
      answer:
        "Myth: Steel conducts heat excessively. Fact: Modern LGSF designs incorporate thermal break strips and optimized insulation strategies, effectively mitigating thermal transfer far beyond older steel standards.",
    },
    {
      question: "How does LGSF enhance building safety during a fire?",
      answer:
        "Unlike wood which contributes fuel, LGSF is inherently non−combustible. When paired with rated gypsum board, it achieves superior fire−resistance ratings that protect occupants.",
    },
    {
      question: "What makes LGSF a superior choice in high seismic zones?",
      answer:
        "The framings engineered connections and the steels natural high ductility allow the structure to flex and absorb severe kinetic energy, minimizing damage during major dynamic events.",
    },
    {
      question: "How does LGSF influence foundation requirements?",
      answer:
        "Due to the steels exceptional strength-to-weight ratio, LGSF results in a significantly lighter total building mass, often enabling simpler and more economical shallow foundations.",
    },
  ];

  const possibilities = [
    {
      subtitle: "Expert Design & Planning",
      description:
        "Dedicated in-house team for design, engineering, and detailed planning",
      image: "/light/in-house team for design, engineering.jpeg",
    },
    {
      subtitle: "Fabrication & Delivery",
      description:
        "Complete fabrication and delivery solutions for LGSF structures",
      image: "/light/delivery solutions for LGSF structures (2).jpg",
    },
    {
      subtitle: "Nationwide Execution",
      description:
        "Nationwide project execution and ongoing support across India",
      image: "/light/Nationwide project execution.png",
    },
    {
      subtitle: "Quality & Standards",
      description:
        "Adherence to Indian Standards (IS) and global quality norms",
      image: "/light/qu.jpg",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 4; // Show 4 cards per row
  const [open, setOpen] = useState(false); // for mobile dropdown

  // const prevSlide = () => {
  //   setStartIndex((prev) =>
  //     prev === 0 ? possibilities.length - visibleCards : prev - 1
  //   );
  // };

  // const nextSlide = () => {
  //   setStartIndex((prev) =>
  //     prev + visibleCards >= possibilities.length ? 0 : prev + 1
  //   );
  // };

  // Slice visible cards and wrap around if needed
  const cardsToShow = possibilities
    .slice(startIndex, startIndex + visibleCards)
    .concat(
      startIndex + visibleCards > possibilities.length
        ? possibilities.slice(
            0,
            (startIndex + visibleCards) % possibilities.length
          )
        : []
    );
  const [selectedId, setSelectedId] = useState(3);

  const selectedArea = areas.find((area) => area.id === selectedId);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const slides = [
    {
      image: "/expertise/third.png",
      title: "Prefab School",
      link: "/prefabschool",
    },

    {
      image: "/expertise/third.png",
      title: "Multistorey Building",
      link: "/multiStoryBuilding",
    },
  ];

  return (
    <>
      <Pebheader />
      <section className="relative min-h-screen flex items-center text-white overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/light.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Text */}
          <div className="text-center md:text-left order-1 mt-16 sm:mt-12 md:mt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-4 sm:mb-6 max-w-lg mx-auto md:mx-0">
              Light Gauge Steel Framing
            </h1>
            <p className="text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
              Build smarter with our Light Gauge Steel Framing. Offsite
              precision meets on-site speed and reliability.
            </p>
          </div>

          {/* Slider */}
          <div className="w-full relative order-2 mt-10 md:mt-0 flex justify-center md:justify-end">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
              className="pb-10 max-w-[260px] sm:max-w-sm md:max-w-md"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white text-black rounded-xl shadow-lg overflow-hidden flex flex-col items-center mx-auto w-[240px] sm:w-[280px] md:w-[320px]">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-48 sm:h-64 md:h-72 object-cover"
                    />
                    <div className="p-4 text-center">
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                        {slide.title}
                      </h3>
                      <a
                        href={slide.link}
                        className="mt-2 inline-block text-[#000080] hover:underline text-sm sm:text-base md:text-lg"
                      >
                        Read more →
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      {/* description */}
      <section className="bg-white py-12 px-4 md:px-16">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#000080] leading-snug  ">
              Innovative Light Gauge Steel Framing (LGSF) Solutions by Landsking
              Infra{" "}
            </h2>
            <div className="w-20 h-[3px] bg-[#272727] mt-3 mb-6"></div>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Landsking Infra is a prominent provider of Light Gauge Steel
              Framing (LGSF) solutions in India, offering strong, sustainable,
              and budget-friendly construction options for diverse applications.
              With a strong foundation in engineering expertise and innovation,
              we deliver fully tailored LGSF systems designed to align with the
              evolving demands of modern infrastructure.
            </p>
            <h2 className="font-extrabold text-[#000080] leading-snug  ">
              What is Light Gauge Steel Framing (LGSF)?{" "}
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Light Gauge Steel Framing (LGSF) is an advanced construction
              technique that utilizes cold-formed steel components to create
              structural frameworks for various building types. These components
              are lightweight, resistant to corrosion, and designed to deliver
              high speed, durability, and adaptability—making LGSF a perfect fit
              for modular builds and time-sensitive projects.
            </p>

            <Link href="/peb-contact">
              <button className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
                GET A QUOTE
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <img
              src="/menupageimg/lgs1.jpeg"
              alt="EPACK Prefab Industrial Building"
              className="rounded-md shadow-md w-[600px] h-[400px] object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            />
          </div>
        </div>
      </section>
      {/* end description */}
      {/* capiablites */}
      <section className="w-full bg-white py-12 px-6 md:px-12 lg:px-17">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="absolute -bottom-4 -right-4 w-full h-full   rounded-2xl"></div>
            <img
              src="/menupageimg/lgs2.jpg" // replace with your real factory image
              alt="Manufacturing Facility"
              width={700}
              height={450}
              className="rounded-md shadow-md w-[600px] h-[400px] object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            />
          </div>

          {/* Right Side - Content */}
          <div>
            <div className="flex items-center mb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-[#000080]">
                Why Choose LGSF Construction?
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong> Accelerated Project Delivery</strong> With components
              manufactured off-site and assembled quickly on-site, construction
              timelines are drastically shortened.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong> Exceptional Strength & Stability</strong> Steel
              structures offer superior load-bearing capabilities and perform
              reliably in seismic zones.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong> Flexible Design Capabilities</strong>Perfect for
              intricate architectural styles, curved forms, multi-level
              buildings, and adaptable layouts.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong> Environmentally Responsible</strong> Steel is fully
              recyclable and produces minimal waste, supporting green
              construction goals.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong> Built-In Resistance to Fire & Pests</strong> Steel
              framing resists termites, rot, warping, and delivers excellent
              fire protection.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong> Optimized Cost Efficiency</strong>Standardized production
              and prefabrication reduce both labor expenses and material waste.
            </p>
          </div>
        </div>
      </section>
      {/* endcapill */}
      {/* explore content */}
      {/* business benifts */}
      <section className="bg-[#000080] text-white py-10">
        <div className=" mx-auto px-4 md:mx-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Our LGSF Manufacturing Capabilities
          </h2>

          {/* Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {cardsToShow.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
              >
                <img src={item.image} className="w-full h-44 object-cover" />
                <div className="p-4">
                  <p className="text-sm text-black font-semibold mb-2 md:text-xl">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-black">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* benefits end */}
      {/* special section */}
      <section className="bg-white py-12">
        <div className="md:mx-16 mx-auto px-6 md:px-0">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#000080] text-center mb-8">
            Applications of LGSF Structures
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Image Section (Left Side) */}
            <div className="relative">
              <Image
                src="/menupageimg/lgs5.png"
                alt="PUF panels in industrial shed"
                width={600}
                height={400}
                className="rounded-md shadow-md w-[600px] h-[400px] object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
              />
            </div>

            {/* Text Section (Right Side) */}
            <div>
              <p className="text-gray-700 leading-relaxed mb-5">
                Landsking Infra provides customized LGSF structures to suit a
                broad spectrum of industry needs:
              </p>
              <ul className="text-gray-700 ">
                <li className="mb-3">
                  <strong>350Modern Prefab Villas</strong>
                </li>
                <li className="mb-3">
                  <strong>350Show Flats & Marketing Suites</strong>
                </li>
                <li className="mb-3">
                  <strong>350On-Site Office Setups</strong>
                </li>
                <li className="mb-3">
                  <strong>350Modular Classrooms & Educational Buildings</strong>
                </li>
                <li className="mb-3">
                  <strong>350Clinics, Hospitals & Medical Units</strong>
                </li>
                <li className="mb-3">
                  <strong>350Staff Housing & Worker Dormitories</strong>
                </li>
                <li className="mb-3">
                  <strong>350Commercial Units & Retail Outlets</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* end special section */}
      {/* why choose us */}
      <section className="w-full bg-white py-16 px-6 md:px-16 ">
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-6 flex items-center">
              Why Choose Landsking Infra Pvt. Ltd for PEBs?
            </h2>

            <p>
              25+ Years of Expertise in prefabricated and steel building
              solutions Nationwide Presence with a strong logistics and project
              execution network In-House Design & Engineering powered by 3D
              modeling and load optimization Certified Manufacturing Standards
              ensuring compliance with IS codes and quality benchmarks Timely
              Project Delivery backed by structured planning and skilled
              professionals End-to-End Turnkey Solutions covering design,
              fabrication, delivery, and installation
            </p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute -bottom-4 -left-4 w-full h-full  rounded-2xl"></div>
            <Image
              src="/industry.jpg" // replace with your image
              alt="Why Choose Us"
              width={700}
              height={450}
              className="relative rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>
      {/* end why choose us */}
      <Brand /> {/* faqs */}
      <section className=" mx-auto px-4 py-12 md:mx-13 ">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl  text-[#000080] md:text-3xl font-bold mb-2">
            Frequently Asked Questions
          </h2>
          {/* Yellow divider line */}
          <div className="w-16 h-1 bg-[#272727] mx-auto rounded"></div>
        </div>

        {/* FAQ Items */}
        <div className="border-t border-gray-200 ">
          {faqs.map((faq: FAQ, index: number) => (
            <div key={index} className="border-b border-gray-200">
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
              >
                <span
                  className={`text-left font-semibold md:text-xl text-md transition-colors duration-200 ${
                    openIndex === index ? "text-[#000000]" : "text-black"
                  }`}
                >
                  {faq.question}
                </span>
                <span className="text-black text-lg font-bold">
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="pb-4 text-gray-600  text-base md:text-md">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      {/* end faqs */}
      <Footer />
    </>
  );
}
