"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import {
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

import Brand from "../../Components/Brand";
import Pebheader from "yes/Components/Pebheader";

import Footer from "../../Components/Footer";

import Link from "next/link";
import Pebfooter from "yes/Components/Pebfooter";

export default function Epcsolutions() {
  interface FAQ {
    question: string;
    answer: string;
  }
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
        "Ladsking Infra s sandwich panels are engineered to endure extreme weather conditions such as high temperatures, humidity, heavy rainfall, and wind loads, when installed properly.",
    },
    {
      question: "What is the installation process for sandwich panels?",
      answer:
        "At Ladsking Infra, installation involves securely mounting the panels onto a steel or prefabricated framework using specialized fasteners, sealants, and edge protectors to ensure a durable and leak-proof finish.",
    },
    {
      question: "What is the lifespan of sandwich panels?",
      answer:
        "When installed and maintained correctly, Ladsking Infra s sandwich panels can provide reliable performance for up to 25 years, delivering outstanding long-term value and energy efficiency.",
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
        "Ladsking Infras sandwich panels meet all applicable IS standards and fire safety regulations, guaranteeing structural strength and reliable performance.",
    },
    {
      question: "Are sandwich panels environmentally friendly?",
      answer:
        "Sandwich panels are both energy-efficient and recyclable. Ladsking Infra manufactures its panels using environmentally friendly processes that minimize waste.",
    },
  ];

  const areas = [
    {
      id: 1,
      title: " Engineering & Design ",
      subtitle: " Engineering & Design",
      description:
        "We offer detailed project planning, thorough structural analysis, and innovative design solutions tailored to project requirements. Leveraging advanced engineering tools such as BIM and 3D modeling, we ensure precision, efficiency, and seamless coordination. All our processes strictly adhere to both national and international quality and safety standards.",
      image: "/industry.jpg",
    },
    {
      id: 2,
      title: "Construction & Execution",
      subtitle: "Construction & Execution",
      description:
        "Our end-to-end site management and project coordination ensure smooth execution at every stage. Using modern construction techniques, we enable efficient and fast-track installations. With minimal on-site disruptions, we guarantee quick project turnaround without compromising quality or safety.",
      image: "/expertise/third.png",
    },
    {
      id: 3,
      title: "Procurement & Manufacturing",
      subtitle: "Procurement & Manufacturing",
      description:
        "We source only high-quality raw materials and components to ensure reliability from the ground up. Our in-house manufacturing capabilities cover PEB structures, prefabricated buildings, and sandwich panels—delivering consistent quality and faster timelines. We prioritize sustainable, cost-effective materials that offer long-term durability and performance.",
      image: "/expertise/third.png",
    },
    {
      id: 4,
      title: "Quality & Safety Compliance",
      subtitle: "Quality & Safety Compliance",
      description:
        "We implement stringent quality control measures at every stage of the project to ensure flawless execution and reliable performance. All our processes comply with ISO, IS, and global safety standards, reflecting our commitment to excellence. With a strong focus on sustainable construction, we utilize eco-friendly materials to minimize environmental impact while maximizing long-term value.",
      image: "/expertise/third.png",
    },
  ];

  const possibilities = [
    {
      subtitle: "🏭 Industrial & Manufacturing Units",
      description:
        "Robust structures designed to support heavy-duty industrial operations and production lines.",
      image: "/industry.jpg",
    },
    {
      subtitle: "🏢 Commercial & Institutional Buildings",
      description:
        "Modular spaces for offices, educational institutions, healthcare, and retail environments.",
      image: "/industry.jpg",
    },
    {
      subtitle: "🏗️ Warehouses & Logistics Parks",
      description:
        "Efficient storage and distribution facilities built for scalability and fast operations.",
      image: "/industry.jpg",
    },
    {
      subtitle: "🌱 Agro & Cold Storage Solutions",
      description:
        "Temperature-controlled, durable structures for agricultural produce and perishable goods.",
      image: "/industry.jpg",
    },
    {
      subtitle: "⚡ Power & Energy Sector Infrastructure",
      description:
        "Custom-built solutions for power plants, substations, and energy sector facilities.",
      image: "/industry.jpg",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  // Responsive visible card logic
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setVisibleCards(1); // mobile
      else if (width < 1024) setVisibleCards(3); // tablet
      else setVisibleCards(4); // desktop
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1 >= possibilities.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev === 0 ? possibilities.length - 1 : prev - 1));
  };

  // Slice visible cards and wrap around if needed
  const cardsToShow = possibilities.slice(
    startIndex,
    startIndex + visibleCards
  );
  if (cardsToShow.length < visibleCards) {
    cardsToShow.push(
      ...possibilities.slice(0, visibleCards - cardsToShow.length)
    );
  }

  const [selectedId, setSelectedId] = useState(3);

  const selectedArea = areas.find((area) => area.id === selectedId);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [open, setOpen] = useState(false); // for mobile dropdown

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
          <source src="/video/epc.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Text */}
          <div className="text-center md:text-left order-1 mt-16 sm:mt-12 md:mt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-4 sm:mb-6 max-w-lg mx-auto md:mx-0">
              EPC Solutions
            </h1>
            <p className="text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
              EPC (Engineering, Procurement, and Construction) solutions,
              ensuring a seamless journey from concept to completion.
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
              EPC Solutions – Comprehensive Turnkey Project Management by
              Ladsking Infra{" "}
            </h2>
            <div className="w-20 h-[3px] bg-[#272727] mt-3 mb-6"></div>

            <p className="text-gray-700 mb-4 leading-relaxed">
              At Ladsking Infra, we deliver complete EPC (Engineering,
              Procurement, and Construction) solutions, ensuring a smooth
              process from concept to completion. As a trusted leader in
              prefabrication and PEB systems across India, we provide tailored
              turnkey solutions for industrial, commercial, and infrastructure
              projects.{" "}
            </p>

            <Link href="/peb-contact">
              <button className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
                GET A QUOTE
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <img
              src="/industry.jpg"
              alt="Landsking Infra Pvt Ltd Prefab Industrial Building"
              className="rounded-md shadow-md w-[600px] h-[400px] object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            />
          </div>
        </div>
      </section>
      {/* end description */}
      {/* capiablites */}
      <section className="w-full bg-white py-12 px-6 md:px-13 lg:px-16">
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <img
              src="/PEB.jpg" // replace with your real factory image
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
                Ladsking Infra’s EPC Expertise: Delivering End-to-End Solutions
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              Our comprehensive project management handles every phase of the
              construction process, enabling clients to concentrate on their
              core business while we manage execution. With integrated design,
              manufacturing, and on-site capabilities, we deliver
              cost-efficient, high-quality, and timely solutions.
            </p>
          </div>
        </div>
      </section>
      {/* endcapill */}
      <section className="md:mx-12 mx-auto px-4 py-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#000080] mb-8">
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
            <div className="hidden md:flex flex-col bg-[#000080] text-white rounded-lg p-3">
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
                <h3 className="text-2xl font-semibold text-[#000080] mb-3">
                  {selectedArea.subtitle}
                </h3>
                <p className="text-gray-700 mb-5">{selectedArea.description}</p>
                <button className="flex items-center gap-2 text-[#000080] font-semibold hover:underline">
                  More{" "}
                  <span className=" p-1 rounded-full text-[#000080]">→</span>
                </button>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={selectedArea.image}
                  alt={selectedArea.subtitle}
                  className="w-full h-64 md:h-86 object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </section>
      {/* explore content */}
      {/* business benifts */}
      <section className="bg-[#000080] text-white py-10">
        <div className=" mx-auto px-4 md:mx-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Industries We Serve:
          </h2>

          {/* Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transition-all duration-500">
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
              className="bg-white p-2 rounded-full shadow hover:bg-black"
            >
              <ChevronLeft className="w-6 h-6 text-[#000080] hover:text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white p-2 rounded-full shadow hover:bg-black"
            >
              <ChevronRight className="w-6 h-6 text-[#000080] hover:text-white" />
            </button>
          </div>
        </div>
      </section>
      {/* benefits end */}
      {/* special section */}
      <section className="bg-white py-12">
        <div className="md:mx-8 mx-auto px-6 md:px-10">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#000080] text-center mb-8">
            Why Choose Ladsking Infra for Your EPC Projects?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Image Section (Left Side) */}
            <div className="relative">
              <img
                src="/industry.jpg"
                alt="PUF panels in industrial shed"
                width={600}
                height={400}
                className="rounded-md shadow-md w-[600px] h-[400px] object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
              />
            </div>

            {/* Text Section (Right Side) */}
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong> End-to-End Solutions:</strong> We offer single-point
                responsibility from design to execution, ensuring seamless
                project management.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong> Cost & Time Efficiency</strong>Our fast-track approach
                enables timely delivery while keeping costs optimized.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong> Industry Expertise </strong> With over 25 years of
                experience in PEB and prefabrication, we bring deep industry
                knowledge to every project.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong> Customization & Scalability </strong> Our modular
                solutions are tailored to meet the unique needs of various
                sectors and can scale as required.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong> Pan-India Presence </strong> A strong nationwide supply
                chain and project execution capability allow us to serve clients
                across India efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* end special section */}
      {/* why choose us */}

      <Brand />
      <section className=" mx-auto px-4 py-12 md:mx-10 ">
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

      <Pebfooter />
    </>
  );
}
