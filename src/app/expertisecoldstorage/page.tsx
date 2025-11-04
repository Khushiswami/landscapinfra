"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  FaTools,
  FaBolt,
  FaShieldAlt,
  FaLeaf,
  FaCogs,
  FaExpand,
  FaAward,
  FaGlobeAsia,
  FaCertificate,
  FaProjectDiagram,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "../../Components/Footer";
import Brand from "yes/Components/Brand";
import PlatformP from "yes/Components/PlatformP";
import Navbar from "yes/Components/Navbar";
import Image from "next/image";
import Link from "next/link";
export default function Expertisecoldstorage() {
  interface FAQ {
    question: string;
    answer: string;
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // ===== Data =====
  const areas = [
    {
      id: 1,
      title: "Turnkey Cold Storage Facility Construction",
      subtitle: "Turnkey Cold Storage Facility Construction",
      description:
        " We deliver end-to-end cold storage construction, handling each and everything from design to final handover.Our turnkey approach ensures timely delivery, true cost, and operational readiness.",
      image: "/expertisecold/Turnkey Cold Storage Facility Construction.jpg",
    },
    {
      id: 2,
      title: "Temperature-Controlled Warehouse Design",
      subtitle: "Temperature-Controlled Warehouse Design",
      description:
        " We design warehouses with precise temperature control to preserve product quality and shelf life.Our designs optimize workflow, storage capacity, and energy efficiency for smooth operations",
      image: "/expertisecold/Temperature-Controlled Warehouse Design.jpg",
    },
    {
      id: 3,
      title: "Refrigeration System Integration",
      subtitle: "Refrigeration System Integration",
      description:
        " We integrate advanced refrigeration systems customised to your storage requirements.Our solutions include blast freezers, chillers, and cooling units for consistent temperature control.",
      image: "/expertisecold/Refrigeration System Integration.jpg",
    },
    {
      id: 4,
      title: "Thermal Insulation",
      subtitle: "Thermal Insulation",
      description:
        " We use high-quality PUF panels, thermal insulation, and vapor barriers to maintain optimum conditions.These materials improve energy efficiency and protect goods from environmental fluctuations",
      image: "/expertisecold/Thermal Insulation.jpeg",
    },
    {
      id: 5,
      title: "Fire Safety, MEP, and Automation Systems",
      subtitle: "Fire Safety, MEP, and Automation Systems",
      description:
        " We incorporate fire safety measures, MEP systems, and automation for secure, efficient operations.Our smart systems ensure compliance, safety, and streamlined warehouse management.",
      image: "/expertisecold/Fire Safety.jpg",
    },
  ];

  const faqs: FAQ[] = [
    {
      question: "What is a factory building?",
      answer:
        "A factory building is a structure designed to house manufacturing or production operations.",
    },
    {
      question: "What materials are used in factory building construction?",
      answer:
        "Factory buildings are typically constructed using steel, prefabricated panels, reinforced concrete, and insulated materials for durability and efficiency.",
    },
    {
      question: "What are the benefits of prefabricated factory buildings?",
      answer:
        "They are faster to build, cost-effective, customizable, and more sustainable.",
    },
    {
      question:
        "How does a pre-engineered factory building differ from traditional buildings?",
      answer:
        "Pre-engineered buildings are manufactured off-site and assembled on-site, reducing construction time and cost.",
    },
    {
      question: "Can factory buildings be customized?",
      answer:
        "Yes, they can be tailored to specific design, size, and operational requirements.",
    },
    {
      question:
        "How long does it take to construct a prefabricated factory building?",
      answer:
        "Construction time depends on the size and complexity but is generally much faster than traditional methods.",
    },
  ];

  const possibilities = [
    {
      subtitle: "Food Processing & Dairy",
      description:
        "Pre-engineered buildings (PEBs) allow for fast installation and easy erection due to their lightweight construction, reducing both time and labor costs.",
      image: "/expertisecold/food processing.jpg",
    },
    {
      subtitle: "Pharmaceuticals & Life Sciences",
      description:
        "Our cold storage facilities preserve sensitive pharmaceuticals and life sciences products while maintaining regulatory compliance and efficacy.",
      image: "/expertisecold/Pharmaceuticals & Life Sciences.jpg",
    },
    {
      subtitle: "Horticulture & Floriculture",
      description:
        "We design cold storage systems that maintain flowers, fruits, and vegetables fresh by optimisation temperature, humidity, and airflow.",
      image: "/expertisecold/Horticulture & Floriculture.jpg",
    },
    {
      subtitle: "Frozen Meat & Seafood Logistics",
      description:
        " Our integrated cold storage and logistics solutions maintain constant temperatures to ensure the safety and quality of frozen meat and seafood.",
      image: "/expertisecold/Frozen Meat & Seafood Logistics.jpg",
    },
    {
      subtitle: "E-commerce Cold Chain and Distribution",
      description:
        "We build smart, temperature-controlled warehouses for e-commerce cold chain products, ensuring timely delivery and product integrity.",
      image: "/expertisecold/E-commerce Cold Chain and Distribution.jpeg",
    },
  ];

  const features = [
    {
      title: ". Site Assessment",
      description:
        "We evaluate site conditions and calculate thermal loads to ensure efficient, reliable cold storage facilities.",
      icon: <FaCogs className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "HVAC Design",
      description:
        " Tailored HVAC and cooling systems guarantee precise temperature control and optimal energy efficiency.",
      icon: <FaTools className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Smart WMS",
      description:
        " Advanced warehouse management systems enable seamless inventory tracking, automation, and smooth operations.",
      icon: <FaBolt className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Quality Installation",
      description:
        " All installations follow strict quality checks and safety protocols for reliable, secure operations.",
      icon: <FaShieldAlt className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Proven Expertise",
      description:
        " Our experience in large-scale cold storage projects ensures operational excellence and compliance.",
      icon: <FaLeaf className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Scalable Solutions",
      description:
        " We deliver energy-efficient, IoT-enabled facilities that grow with your business while reducing costs.",
      icon: <FaExpand className="text-[#000080] text-3xl mb-4" />,
    },
  ];

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

  // ===== State =====
  const [selectedId, setSelectedId] = useState(areas[0].id);
  const selectedArea = areas.find((a) => a.id === selectedId);

  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 4; // Show 4 cards per row
  const prevSlide = () =>
    setStartIndex((prev) =>
      prev === 0 ? possibilities.length - visibleCards : prev - 1
    );
  const nextSlide = () =>
    setStartIndex((prev) =>
      prev + visibleCards >= possibilities.length ? 0 : prev + 1
    );

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

  const [open, setOpen] = useState(false); // for mobile dropdown

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <>
      <Navbar />
      <section className="relative min-h-screen flex items-center text-white overflow-hidden">
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

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-8 lg:px-12   items-center">
          {/* Left Text */}
          <div className="flex flex-col items-center justify-center text-center order-1">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug mb-4 sm:mb-6 max-w-md">
              Cold Storage
            </h1>
            <p className="text-sm sm:text-base md:text-lg max-w-sm">
              Landsking Infra specializes in advanced cold storage and warehouse
              infrastructure solutions.
            </p>
          </div>
        </div>
      </section>

      {/* description */}
      <section className="bg-white py-12 px-4 md:px-23">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#000080] leading-snug  ">
              Cold Storage{" "}
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Landsking Infra specializes in advanced cold storage and warehouse
              infrastructure solutions. We design temperature-controlled
              facilities that protect product quality and extend shelf life. Our
              smart systems ensure energy efficiency, cost savings, and reliable
              performance. Every project is delivered in compliance with strict
              industry and safety standards. From concept to completion, we
              provide future-ready storage solutions for diverse industries.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              What is a Pre-Engineered Building?{" "}
              <span className="font-bold">Landsking Infra pvt.ltd</span> A
              Pre-Engineered Building (PEB) is a steel structure based on a
              structural framework of primary framing (columns and rafters),
              secondary framing (purlins and girts), along with roof and wall
              sheeting, and other components. All parts are pre-fabricated in
              factories and assembled on-site, drastically reducing construction
              time compared to conventional methods.
            </p>

            <Link href="/contact">
              <button className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
                GET A QUOTE
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <img
              src="/expertisecold/cold storage one.jpg"
              alt="EPACK Prefab Industrial Building"
              className="rounded-md shadow-md w-[600px] h-[400px] object-cover"
            />
          </div>
        </div>
      </section>
      {/* end description */}
      {/* keyfetaure */}
      <section className="w-full bg-white py-12 px-6 md:px-16 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Why chose us{" "}
            <span className="text-[#000080]">Landsking Infra Pvt. Ltd.</span>
          </h2>
          {/* <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Our Pre-Engineered Buildings are designed with innovation,
            durability, and efficiency at the core—providing solutions that meet
            modern industrial and commercial needs.
          </p> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 hover:bg-gray-100 rounded-2xl shadow-md transition-all duration-300 flex flex-col items-center text-center"
              >
                {feature.icon}
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* slider section */}
      <section className="mx-auto px-4 py-10 md:px-20 lg:px-28">
        <h2 className="text-2xl lg:text-3xl font-bold text-[#000080] mb-8">
          Our Services
        </h2>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Sidebar */}
          <div className="w-full lg:w-1/4">
            {/* Mobile Dropdown */}
            <div className="lg:hidden mb-0">
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
                      className={`w-full text-left px-4 py-3 text-[#8080FF] ${
                        selectedId === area.id ? "text-white font-semibold" : ""
                      }`}
                    >
                      {area.title}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden lg:flex flex-col bg-[#000080] text-white rounded-lg pt-6 pb-6">
              {areas.map((area) => (
                <button
                  key={area.id}
                  onClick={() => setSelectedId(area.id)}
                  className={`flex items-center gap-3 px-5 py-4 text-left transition ${
                    selectedId === area.id ? "font-bold" : "hover:text-gray-300"
                  }`}
                >
                  {area.title}
                </button>
              ))}
            </div>
          </div>

          {/* Right Content */}
          {selectedArea && (
            <div className="flex flex-col-reverse md:flex-row bg-white rounded-lg shadow overflow-hidden w-full border border-gray-300">
              {/* Text Section */}
              <div className="p-6 flex flex-col justify-center w-full md:w-1/2 border-t md:border-t-0 md:border-r border-gray-300">
                <h3 className="text-2xl font-semibold text-[#000080] mb-3">
                  {selectedArea.subtitle}
                </h3>
                <p className="text-gray-700 mb-5">{selectedArea.description}</p>
                <button className="flex items-center text-md md:text-xl gap-2 text-[#000080] font-semibold">
                  Contact{" "}
                  <span className="p-1 rounded-full text-[#000080]">→</span>
                </button>
              </div>

              {/* Image Section (fills height automatically) */}
              <div className="w-full md:w-1/2 relative">
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

      {/* capiablites */}

      {/* endcapill */}
      {/* business benifts */}
      <section className="bg-[#000080] text-white py-10">
        <div className=" mx-auto px-4 md:mx-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Industries We Serve{" "}
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
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#000080] text-center mb-8">
            SPECIFICATIONS OF INDUSTRIAL SHED COMPONENTS
            <span className="block w-20 h-[2px] bg-[#000080] mx-auto mt-2"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Text Section */}
            <ul className=" list-disc space-y-4 text-gray-700 text-base leading-relaxed">
              <li>
                <span className="font-bold">Wall:</span> PUF / EPS insulated
                sandwich panels of 50 / 60mm with PPGI sheet on both sides.
              </li>
              <li>
                <span className="font-bold">Roof:</span> PUF / EPS insulated
                sandwich panels of 30 / 40 mm or PPGI roofing sheets.
              </li>
              <li>
                <span className="font-bold">Doors:</span> Insulated doors with
                all accessories will be provided from our manufacturing setup.
              </li>
              <li>
                <span className="font-bold">Windows:</span> Aluminum anodized
                sliding windows will be provided from our manufacturing setup.
              </li>
              <li>
                <span className="font-bold">Structure and Accessories:</span>{" "}
                All required supporting accessories and structures will be
                provided before project delivery.
              </li>
              <li>
                <span className="font-bold">
                  Electrical fittings, sanitary fittings, beds, etc.,
                </span>{" "}
                will be provided as per client requirements and fitted as per
                the contract.
              </li>
            </ul>

            {/* Image Section */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#000080] z-10"></div>
              <Image
                src="/expertisecold/cold storage three.jpg"
                alt="PUF panels in industrial shed"
                width={600}
                height={400}
                className="rounded-md shadow-md relative z-20"
              />
            </div>
          </div>
        </div>
      </section>
      {/* end special section */}
      <section className="mb-10"></section>
      {/* end why choose us */}
      <Brand />

      {/* faqs */}
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
