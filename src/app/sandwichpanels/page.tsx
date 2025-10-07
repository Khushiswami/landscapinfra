"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  FaTools,
  FaBolt,
  FaShieldAlt,
  FaLeaf,
  FaCogs,
  FaExpand,
} from "react-icons/fa";
import {
  FaAward,
  FaGlobeAsia,
  FaDraftingCompass,
  FaCertificate,
  FaClock,
  FaProjectDiagram,
} from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import Platform from "../platform/page";
import Brand from "../../Components/Brand";

import Footer from "../../Components/Footer";
import Pebheader from "yes/Components/Pebheader";
import Link from "next/link";

export default function Sandwichpanels() {
  interface FAQ {
    question: string;
    answer: string;
  }
  const areas = [
    {
      id: 1,
      title: "PUF Panels",
      subtitle: "PUF Panels",
      description:
        "PUF panels offer excellent thermal insulation, energy efficiency, and durability, ideal for cold storage and prefabricated constructions.",
      image: "/menupageimg/sap-pub.jpg",
    },
    {
      id: 2,
      title: "Rockwool Panel",
      subtitle: "Rockwool Panel",
      description:
        "Rockwool panels provide thermal and acoustic insulation with strong fire resistance, perfect for factories and studios.",
      image: "/menupageimg/sp-Rockwool-Panel.jpg",
    },
    {
      id: 3,
      title: "Glass Wool Panels",
      subtitle: "Glass Wool Panels",
      description:
        "Glass Wool Panels are lightweight, fire-resistant, and offer great thermal and noise insulation for homes and offices.",
      image: "/menupageimg/sandwich-glasswool-panel.png",
    },
    {
      id: 4,
      title: "EPS Panels",
      subtitle: "EPS Panels",
      description:
        "EPS panels are lightweight, affordable, and thermally efficient, suitable for warehouses and commercial buildings.",
      image: "/menupageimg/sp-eps.png",
    },
  ];

  const faqs: FAQ[] = [
    {
      question: "What are sandwich panels?",
      answer:
        "Sandwich panels consist of two metal layers with an insulating core in between, offering superior thermal insulation and structural strength.",
    },
    {
      question: "What materials are used in sandwich panels?",
      answer:
        "Sandwich panels usually feature outer layers made of galvanized or coated steel, while the core insulation is commonly composed of materials such as EPS (Expanded Polystyrene), PUF (Polyurethane Foam), Rockwool, or Glasswool.",
    },
    {
      question: "What are the applications of sandwich panels?",
      answer:
        "Due to their excellent thermal and sound insulation properties, sandwich panels are extensively used in industrial facilities, cold storage units, clean rooms, site offices, warehouses, and various prefabricated structures.",
    },
    {
      question: "What are the advantages of sandwich panels?",
      answer:
        "The main advantages include effective thermal and acoustic insulation, lightweight design, fast installation, fire resistance (depending on the core material), and overall cost-effectiveness.",
    },
    {
      question: "How durable are sandwich panels?",
      answer:
        "Sandwich panels offer high durability and are resistant to corrosion, moisture, and physical impact, with an average lifespan ranging from 15 to 25 years, depending on the core material and application.",
    },
    {
      question: "Are sandwich panels fire-resistant?",
      answer:
        "Rockwool and Glasswool panels provide outstanding fire resistance, while PUF and EPS panels offer moderate protection and are available in fire-retardant variants.",
    },
    {
      question: "Can sandwich panels withstand harsh weather conditions?",
      answer:
        "Ladsking Infra’s sandwich panels are engineered to endure extreme weather conditions such as high temperatures, humidity, heavy rainfall, and wind loads, when installed properly.",
    },
    {
      question: "What is the installation process for sandwich panels?",
      answer:
        "At Ladsking Infra, installation involves securely mounting the panels onto a steel or prefabricated framework using specialized fasteners, sealants, and edge protectors to ensure a durable and leak-proof finish.",
    },
    {
      question: "What is the lifespan of sandwich panels?",
      answer:
        "When installed and maintained correctly, Ladsking Infra’s sandwich panels can provide reliable performance for up to 25 years, delivering outstanding long-term value and energy efficiency.",
    },
    {
      question: "What industries use sandwich panels the most?",
      answer:
        "Sectors like warehousing, logistics, food processing, pharmaceuticals, agriculture, and construction extensively depend on sandwich panels.",
    },
    {
      question: "What are Sandwich Panels in construction?",
      answer:
        "Sandwich Panels are prefabricated wall and roof panels with an insulating core between two metal sheets, offering excellent thermal efficiency and durability.",
    },
    {
      question: "What are the benefits of Sandwich Panels?",
      answer:
        "They provide superior insulation, reduce energy costs, are lightweight, easy to install, and suitable for cold storage, industrial sheds, and modular units.",
    },
    {
      question: "How energy-efficient are sandwich panels?",
      answer:
        "Sandwich panels help cut energy expenses by limiting heat transfer, keeping indoor temperatures stable, and lowering the need for air conditioning or heating",
    },
    {
      question:
        "Do sandwich panels meet building code and safety standards in India?",
      answer:
        "Ladsking Infra’s sandwich panels meet all applicable IS standards and fire safety regulations, guaranteeing structural strength and reliable performance.",
    },
    {
      question: "Are sandwich panels environmentally friendly?",
      answer:
        "Sandwich panels are both energy-efficient and recyclable. Ladsking Infra manufactures its panels using environmentally friendly processes that minimize waste.",
    },
  ];

  const possibilities = [
    {
      subtitle: "Industrial & Commercial Use",
      description:
        "Ideal for prefabricated industrial buildings, warehouses, and commercial setups—sandwich panels offer strong structural integrity and excellent insulation for long-term use.",
      image: "/industry.jpg",
    },
    {
      subtitle: "Cold Storage & Clean Rooms",
      description:
        "Perfect for cold storage units, clean rooms, and temperature-sensitive environments, thanks to their superior thermal performance and airtight sealing.",
      image: "/industry.jpg",
    },
    {
      subtitle: "Site & Workforce Facilities",
      description:
        "Used extensively in site offices, worker accommodations, and modular cabins for their quick installation, durability, and low-maintenance design.",
      image: "/industry.jpg",
    },
    {
      subtitle: "Institutional & Temporary Structures",
      description:
        "Well-suited for healthcare units, schools, and both temporary and permanent setups—combining speed, safety, and energy efficiency in one solution.",
      image: "/industry.jpg",
    },
    {
      subtitle: "Residential & Modular Housing",
      description:
        "Sandwich panels are a smart choice for modular homes, prefab villas, and residential extensions, offering energy efficiency, speed of construction, and lasting comfort.",
      image: "/industry.jpg",
    },
    {
      subtitle: "Agricultural & Livestock Facilities",
      description:
        "Widely used in agro-based structures, including storage sheds, dairy units, and poultry farms, due to their insulation performance and resistance to harsh conditions.",
      image: "/industry.jpg",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 4; // Show 4 cards per row

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev === 0 ? possibilities.length - visibleCards : prev - 1
    );
  };

  const nextSlide = () => {
    setStartIndex((prev) =>
      prev + visibleCards >= possibilities.length ? 0 : prev + 1
    );
  };

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
      title: "Prefabricated Structure",
      link: "#",
    },

    {
      image: "/expertise/third.png",
      title: "Labor Hutment",
      link: "#",
    },
    {
      image: "/expertise/third.png",
      title: "Control Room",
      link: "#",
    },
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [open, setOpen] = useState(false);

  const stats = [
    {
      label: "Years of Expertise",
      value: 20,
      suffix: "+",
      icon: <FaAward className="text-[#000080] text-xl" />,
    },
    {
      label: "Projects Delivered",
      value: 500,
      suffix: "+",
      icon: <FaProjectDiagram className="text-[#000080] text-xl" />,
    },
    {
      label: "Nationwide Presence",
      value: 25,
      suffix: "+ States",
      icon: <FaGlobeAsia className="text-[#000080] text-xl" />,
    },
    {
      label: "Certified Processes",
      value: 100,
      suffix: "%",
      icon: <FaCertificate className="text-[#000080] text-xl" />,
    },
  ];

  return (
    <>
      <Pebheader />
      <section className="relative min-h-screen sm:min-h-screen flex items-center text-white overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <div className="text-center lg:text-left order-1 mt-16 sm:mt-12 md:mt-16 lg:mt-0">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug mb-4 sm:mb-6 max-w-md mx-auto lg:mx-0">
              Pre Engineered Buildings
            </h1>
            <p className="text-sm sm:text-base md:text-lg max-w-sm mx-auto lg:mx-0">
              Pre-Engineered Buildings (PEBs) are modern steel structures
              designed, fabricated, and assembled using standardized components
              for faster construction.
            </p>
          </div>

          {/* Slider */}
          <div className="w-full relative order-2 mt-8 lg:mt-0 mb-4 flex justify-center">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
              className="pb-10 max-w-[240px] sm:max-w-sm"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white text-black rounded-xl shadow-lg overflow-hidden flex flex-col items-center mx-auto w-[220px] sm:w-[280px]">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-48 sm:h-72 object-cover"
                    />
                    <div className="p-3 text-center">
                      <h3 className="text-base sm:text-lg font-semibold">
                        {slide.title}
                      </h3>
                      <a
                        href={slide.link}
                        className="mt-2 inline-block text-[#000080] hover:underline text-sm sm:text-base"
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
      <section className="bg-white py-12 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#000080] leading-snug  ">
              Premium Insulation Panels Designed for Modern Construction{" "}
            </h2>
            <div className="w-20 h-[3px] bg-[#272727] mt-3 mb-6"></div>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Landsking Infra stands as one of India s top manufacturers of
              sandwich panels, providing a diverse selection of insulated panels
              designed for superior thermal performance, robust structural
              strength, and fast installation. Equipped with both continuous and
              discontinuous production lines, we deliver consistent quality,
              precision, and adaptability for projects of all sizes—from
              large-scale developments to custom builds.{" "}
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Our sandwich panels are widely trusted across various sectors,
              including warehouses, cold storage facilities, agricultural
              buildings, pharmaceutical structures, industrial complexes, and
              commercial spaces.
            </p>

            <Link href="/peb-contact">
              <button className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
                GET A QUOTE
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <img
              src="/menupageimg/sp1.jpg"
              alt="EPACK Prefab Industrial Building"
              className="rounded-md shadow-md w-[600px] h-[400px] object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            />
          </div>
        </div>
      </section>
      {/* end description */}
      {/* capiablites */}
      <section className="w-full bg-white py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="absolute -bottom-4 -right-4 w-full h-full   rounded-2xl"></div>
            <img
              src="/menupageimg/sp2.png" // replace with your real factory image
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
                Advanced Insulating Capabilities of Sandwich Panels
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              Sandwich panels gain their structural integrity from a core
              insulating layer bonded between two rigid metal sheets. This
              advanced design enhances load-bearing strength while offering
              excellent thermal insulation, moisture protection, and
              soundproofing performance.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Sandwich panels reduce heat transfer, helping to maintain stable
              indoor temperatures while lowering energy usage and
              air-conditioning expenses—making them ideal for buildings with
              constant occupancy.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              With fast installation, extended durability, and low maintenance
              requirements, they serve as a highly efficient alternative to
              conventional masonry in contemporary construction.
            </p>
            <button className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
              GET A QUOTE
            </button>
          </div>
        </div>
      </section>
      {/* endcapill */}
      {/* explore conettt */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
          Our Products
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Menu */}
          <div className="w-full md:w-1/4">
            {/* Mobile Dropdown */}
            <div className="md:hidden mb-0">
              <button
                onClick={() => setOpen(!open)}
                className="w-full p-3 rounded-t-lg text-white font-semibold flex justify-between items-center bg-[#000080]"
              >
                {areas.find((a) => a.id === selectedId)?.title}
                <svg
                  className="w-5 h-5 text-[#8080FF]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={open ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                  />
                </svg>
              </button>

              {open && (
                <div className="mt-0 w-full bg-[#000080] rounded-b-lg shadow">
                  {areas.map((area) => (
                    <button
                      key={area.id}
                      onClick={() => {
                        setSelectedId(area.id);
                        setOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-[#8080FF]  ${
                        selectedId === area.id ? "text-white font-semibold" : ""
                      }`}
                    >
                      {area.title}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex flex-col bg-[#000080] text-white rounded-lg pt-[62px] pb-[62px] px-[5px]">
              {areas.map((area, idx) => (
                <button
                  key={area.id}
                  onClick={() => setSelectedId(area.id)}
                  className={`flex items-center gap-3 px-5 py-4 text-left transition ${
                    selectedId === area.id
                      ? " font-bold"
                      : "hover: text-gray-300"
                  }`}
                >
                  <span className="text-sm opacity-70">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span>{area.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Content */}
          {selectedArea && (
            // *** CHANGE HERE: flex-col-reverse on mobile, md:flex-row on desktop ***
            <div className="flex flex-col-reverse md:flex-row bg-white rounded-lg shadow overflow-hidden w-full">
              <div
                className="
    p-6 flex flex-col justify-center w-full md:w-1/2
    rounded-lg                
    md:rounded-none          
    md:rounded-tl-lg md:rounded-bl-lg
    shadow border border-[#808080] md:border-r-0
  "
              >
                <h3 className="text-2xl font-semibold text-blue-900 mb-3">
                  {selectedArea.subtitle}
                </h3>
                <p className="text-gray-700 mb-5">{selectedArea.description}</p>
                <button className="flex items-center gap-2 text-blue-900 font-semibold hover:underline">
                  More{" "}
                  <span className=" p-1 rounded-full text-[#000080]">→</span>
                </button>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={selectedArea.image}
                  alt={selectedArea.subtitle}
                  className="w-full h-64 md:h-87 object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </section>
      {/* explore content */}
      {/* business benifts */}
      <section className="bg-[#000080] text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Applications of Sandwich Panels
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

          {/* Navigation Buttons Below */}
          <div className="flex justify-center mt-6 gap-4">
            <button
              onClick={prevSlide}
              className="bg-white p-2 rounded-full shadow hover:bg-gray-700"
            >
              <ChevronLeft className="w-6 h-6 text-[#000080]" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white p-2 rounded-full shadow hover:bg-gray-700"
            >
              <ChevronRight className="w-6 h-6 text-[#000080]" />
            </button>
          </div>
        </div>
      </section>
      {/* benefits end */}
      {/* special section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#000080] text-center mb-8">
            Why Choose Landsking Infra Sandwich Panels?
            <span className="block w-20 h-[2px] bg-[#000080] mx-auto mt-2"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Image Section (Left Side) */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#000080] z-10"></div>
              <img
                src="/menupageimg/sp3.jpg"
                alt="PUF panels in industrial shed"
                width={600}
                height={400}
                className="rounded-md shadow-md w-[600px] h-[400px] object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
              />
            </div>

            {/* Text Section (Right Side) */}
            <div>
              <p className="text-gray-700 leading-relaxed">
                Landsking Infra offers advanced sandwich panels manufactured
                using both continuous and discontinuous production lines to
                ensure precision and quality. These panels deliver high
                insulation performance, offering excellent thermal and acoustic
                efficiency with low thermal conductivity, resulting in
                significant energy savings. Lightweight yet highly durable, they
                are quick to install and built to resist flame, corrosion, and
                termites. Ideal for applications such as roofing, wall cladding,
                and cold storage, our panels are backed by over 25 years of
                prefabrication expertise. We also provide PAN-India project
                execution and delivery, with products fully compliant with
                safety and industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* end special section */}
      {/* why choose us */}
      <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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

            {/* Animated Counters */}
            <div
              ref={ref}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center bg-white shadow-lg p-3 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-blue-600 text-base">{stat.icon}</div>
                  <h3 className="text-base font-extrabold text-gray-900 mt-2">
                    {inView && (
                      <CountUp
                        end={stat.value}
                        duration={2}
                        suffix={stat.suffix}
                      />
                    )}
                  </h3>
                  <p className="text-[14px] text-gray-600 mt-1 text-center">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute -bottom-4 -left-4 w-full h-full border-4 border-[#000080] rounded-2xl"></div>
            <img
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
      <section className="max-w-7xl mx-auto px-4 py-12 ">
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
                  className={`font-medium font-bold transition-colors duration-200 ${
                    openIndex === index ? "text-[#000080]" : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </span>
                <span className="text-gray-500 text-sm font-bold">
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="pb-4 text-gray-600">{faq.answer}</div>
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
