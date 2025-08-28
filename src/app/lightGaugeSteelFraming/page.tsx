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

import Brand from "../../Components/Brand";

import IndustryHeader from "yes/Components/Industryheader";import Footer from "../../Components/Footer";

import Link from "next/link";

export default function LightGaugeSteelFraming() {
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
      question: "What is Light Gauge Steel (LGS)?",
      answer:
        "Light Gauge Steel (LGS) consists of thin, cold-formed steel components commonly used in lightweight structural construction. It offers an excellent strength-to-weight ratio, resists corrosion effectively, and is highly suitable for prefabricated building systems.",
    },
    {
      question: "What is Light Gauge Steel Framing (LGSF)?",
      answer:
        "LGSF is a modern construction method that utilizes light gauge steel sections to form the structural framework for walls, floors, and roofs in modular and prefabricated buildings. These steel frames are pre-manufactured in a factory setting and assembled efficiently at the construction site.",
    },
    {
      question: "How is LGSF different from structural steel?",
      answer:
        "Structural steel is typically hot-rolled and used in large-scale projects like bridges and multi-storey buildings, whereas LGSF involves cold-formed steel sections ideal for lightweight and rapid construction, including prefabricated homes, office spaces, and villas.",
    },
    {
      question: "What are the main advantages of LGSF construction?",
      answer:
        "LGSF offers numerous advantages, including fast installation and shorter project timelines, thanks to its off-site fabrication. Despite being lightweight, the structure is strong and durable, with built-in fire and pest resistance. It allows for high design flexibility, making it suitable for a variety of architectural needs. Additionally, LGSF uses eco-friendly, recyclable materials and delivers cost efficiency, especially for low-rise and mid-rise construction projects.",
    },
    {
      question: "What are the typical applications of LGSF?",
      answer:
        "LGSF is widely applied across a range of sectors due to its versatility and speed of construction. It is commonly used in prefabricated villas and sample flats, on-site offices, and worker accommodations. The technology is also ideal for modular hospitals, clinics, and educational buildings such as schools. Additionally, LGSF serves effectively in the construction of cold storage units, warehouse enclosures, and compact commercial cabins.",
    },
    {
      question: "Is LGSF suitable for multi-storey buildings?",
      answer:
        "Yes, LGSF is suitable for G+3 and G+4 structures, and can even be used for taller buildings, depending on engineering design, structural analysis, and compliance with local building codes.",
    },
    {
      question: "What is the lifespan of an LGSF structure?",
      answer:
        "With adequate maintenance and effective corrosion protection, LGSF buildings can have a lifespan of over 50 years, making them comparable to traditional RCC structures in terms of durability.",
    },
    {
      question: "Who is the leading LGSF structures manufacturer in India?",
      answer:
        "Landsking Infra is among the leading providers of LGSF structures in India, recognized for its state-of-the-art manufacturing facilities and efficient project execution across the nation.",
    },
    {
      question: "Can LGSF buildings be customized?",
      answer:
        "Yes, Landsking Infra provides fully tailored LGSF solutions customized to your architectural requirements, project scale, and budget.",
    },
    {
      question: "Can LGSF structures withstand extreme weather conditions?",
      answer:
        "LGSF structures boast exceptional durability, designed to resist strong winds, seismic activity, and challenging weather conditions.",
    },
    {
      question: "How cost-effective is light gauge steel framing??",
      answer:
        "LGSF lowers construction expenses by enabling quicker assembly, requiring less labor, and minimizing material waste.",
    },
    {
      question: "What is the lifespan of an LGSF building?",
      answer:
        "With proper upkeep, LGSF buildings are engineered for durability and can have a lifespan exceeding 50 years.",
    },
    {
      question: "Can light gauge steel be used in multi-storey buildings?",
      answer:
        "Yes, LGSF is ideal for multi-storey constructions, providing lightweight yet robust and efficient structural solutions.",
    },
    {
      question: "How does LGSF contribute to sustainable construction?",
      answer:
        "LGSF promotes sustainability through the use of recyclable materials, lowering carbon footprints, and enhancing energy efficiency throughout the construction process.",
    },
  ];

  const possibilities = [
    {
      description:
        "Dedicated in-house team for design, engineering, and detailed planning",
      image: "/industry.jpg",
    },
    {
      description:
        "Complete fabrication and delivery solutions for LGSF structures",
      image: "/industry.jpg",
    },
    {
      description:
        "Nationwide project execution and ongoing support across India",
      image: "/industry.jpg",
    },
    {
      description:
        "Adherence to Indian Standards (IS) and global quality norms",
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
      <IndustryHeader/>
      <section className="relative h-screen flex items-center text-white overflow-hidden">
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

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Text */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Light Gauge Steel Framing
            </h1>
            <p className="text-lg md:text-xl max-w-lg mx-auto lg:mx-0">
              Light Gauge Steel Framing structures are prefabricated components
              manufactured in a controlled factory environment and then
              transported to the construction site for fast and efficient
              assembly.{" "}
            </p>
          </div>

          {/* Right Slider */}
          <div className="w-full relative mt-10">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              className="pb-10"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white text-black rounded-xl shadow-lg overflow-hidden flex flex-col items-center mx-auto w-[250px]">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-72 object-cover"
                    />
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold">{slide.title}</h3>
                      <a
                        href={slide.link}
                        className="mt-3 inline-block text-[#000080] hover:underline"
                      >
                        Read more →
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* Navigation Buttons */}
              {/* <div className="swiper-button-prev !text-white !top-1/2 !-translate-y-1/2 !left-0"></div>
            <div className="swiper-button-next !text-white !top-1/2 !-translate-y-1/2 !right-0"></div> */}
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

            <Link href="/contact">
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
      <section className="w-full bg-white py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Why Choose LGSF Construction?
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>🔧 Accelerated Project Delivery</strong> With components
              manufactured off-site and assembled quickly on-site, construction
              timelines are drastically shortened.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>🏗️ Exceptional Strength & Stability</strong> Steel
              structures offer superior load-bearing capabilities and perform
              reliably in seismic zones.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>🔄 Flexible Design Capabilities</strong>Perfect for
              intricate architectural styles, curved forms, multi-level
              buildings, and adaptable layouts.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>♻️ Environmentally Responsible</strong> Steel is fully
              recyclable and produces minimal waste, supporting green
              construction goals.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>🔥 Built-In Resistance to Fire & Pests</strong> Steel
              framing resists termites, rot, warping, and delivers excellent
              fire protection.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>💰 Optimized Cost Efficiency</strong>Standardized
              production and prefabrication reduce both labor expenses and
              material waste.
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
          Light Gauge Steel Framing Products
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Menu */}
          <div className="bg-blue-900 text-white rounded-lg flex flex-col w-full md:w-1/4">
            {areas.map((area, idx) => (
              <button
                key={area.id}
                onClick={() => setSelectedId(area.id)}
                className={`flex items-center gap-3 px-5 py-4 text-left transition ${
                  selectedId === area.id
                    ? "bg-blue-800 font-bold"
                    : "hover:bg-blue-800 text-white"
                }`}
              >
                <span className="text-sm opacity-70">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span>{area.title}</span>
              </button>
            ))}
          </div>

          {/* Right Content */}
          {selectedArea && (
            <div className="flex flex-col md:flex-row bg-white rounded-lg shadow overflow-hidden w-full">
              {/* Text Content */}
              <div className="p-6 flex flex-col justify-center w-full md:w-1/2">
                <h3 className="text-2xl font-semibold text-blue-900 mb-3">
                  {selectedArea.subtitle}
                </h3>
                <p className="text-gray-700 mb-5">{selectedArea.description}</p>
                <button className="border border-[#000080] px-4 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors w-auto md:w-36">
                  GET A QUOTE
                </button>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={selectedArea.image}
                  alt={selectedArea.subtitle}
                  className="w-full h-full object-cover"
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
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#000080] text-center mb-8">
            Applications of LGSF Structures
            <span className="block w-20 h-[2px] bg-[#000080] mx-auto mt-2"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Image Section (Left Side) */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#000080] z-10"></div>
              <img
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
              <ul>
                <li className="mb-3">
                  <strong>✅Modern Prefab Villas</strong>
                </li>
                <li className="mb-3">
                  <strong>✅Show Flats & Marketing Suites</strong>
                </li>
                <li className="mb-3">
                  <strong>✅On-Site Office Setups</strong>
                </li>
                <li className="mb-3">
                  <strong>✅Modular Classrooms & Educational Buildings</strong>
                </li>
                <li className="mb-3">
                  <strong>✅Clinics, Hospitals & Medical Units</strong>
                </li>
                <li className="mb-3">
                  <strong>✅Staff Housing & Worker Dormitories</strong>
                </li>
                <li className="mb-3">
                  <strong>✅Commercial Units & Retail Outlets</strong>
                </li>
              </ul>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 flex items-center">
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
