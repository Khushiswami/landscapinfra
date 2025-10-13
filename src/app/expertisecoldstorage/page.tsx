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
      image: "/menupageimg/peb3.jpg",
    },
    {
      id: 2,
      title: "Temperature-Controlled Warehouse Design",
      subtitle: "Temperature-Controlled Warehouse Design",
      description:
        " We design warehouses with precise temperature control to preserve product quality and shelf life.Our designs optimize workflow, storage capacity, and energy efficiency for smooth operations",
      image: "/menupageimg/peb4.png",
    },
    {
      id: 3,
      title: "Refrigeration System Integration",
      subtitle: "Refrigeration System Integration",
      description:
        " We integrate advanced refrigeration systems customised to your storage requirements.Our solutions include blast freezers, chillers, and cooling units for consistent temperature control.",
      image: "/menupageimg/peb5.png",
    },
    {
      id: 4,
      title: "Thermal Insulation",
      subtitle: "Thermal Insulation",
      description:
        " We use high-quality PUF panels, thermal insulation, and vapor barriers to maintain optimum conditions.These materials improve energy efficiency and protect goods from environmental fluctuations",
      image: "/menupageimg/peb8.jpg",
    },
    {
      id: 5,
      title: "Fire Safety, MEP, and Automation Systems",
      subtitle: "Fire Safety, MEP, and Automation Systems",
      description:
        " We incorporate fire safety measures, MEP systems, and automation for secure, efficient operations.Our smart systems ensure compliance, safety, and streamlined warehouse management.",
      image: "/menupageimg/peb6.jpg",
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
      image: "/industry.jpg",
    },
    {
      subtitle: "Pharmaceuticals & Life Sciences",
      description:
        "Our cold storage facilities preserve sensitive pharmaceuticals and life sciences products while maintaining regulatory compliance and efficacy.",
      image: "/industry.jpg",
    },
    {
      subtitle: "Horticulture & Floriculture",
      description:
        "We design cold storage systems that maintain flowers, fruits, and vegetables fresh by optimisation temperature, humidity, and airflow.",
      image: "/industry.jpg",
    },
    {
      subtitle: "Frozen Meat & Seafood Logistics",
      description:
        " Our integrated cold storage and logistics solutions maintain constant temperatures to ensure the safety and quality of frozen meat and seafood.",
      image: "/industry.jpg",
    },
    {
      subtitle: "E-commerce Cold Chain and Distribution",
      description:
        "We build smart, temperature-controlled warehouses for e-commerce cold chain products, ensuring timely delivery and product integrity.",
      image: "/industry.jpg",
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

  const slides = [
    {
      image: "/expertise/third.png",
      title: "Prefabricated Multi-Storey Building Manufacturer",
      link: "#",
    },
    {
      image: "/expertise/third.png",
      title: "Industrial Enclosures",
      link: "#",
    },
    {
      image: "/expertise/third.png",
      title: "Cold Storage & Cold Room Manufacturer",
      link: "#",
    },
    { image: "/expertise/third.png", title: "Factory Building", link: "#" },
    { image: "/expertise/third.png", title: "Warehouse", link: "#" },
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

  const [isOpen, setIsOpen] = useState(false);
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
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Text */}
          <div className="text-center lg:text-left order-1">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug mb-4 sm:mb-6 max-w-md mx-auto lg:mx-0">
              Cold Storage{" "}
            </h1>
            <p className="text-sm sm:text-base md:text-lg max-w-sm mx-auto lg:mx-0">
              Landsking Infra specializes in advanced cold storage and warehouse
              infrastructure solutions.
            </p>
          </div>

          {/* Right Slider */}
          <div className="w-full relative order-2 mt-6 lg:mt-0 flex justify-center">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
              className="pb-10 max-w-[260px] sm:max-w-sm"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white text-black rounded-xl shadow-lg overflow-hidden flex flex-col items-center mx-auto w-[220px] sm:w-[280px]">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-56 sm:h-72 object-cover"
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
              Cold Storage{" "}
            </h2>
            <div className="w-20 h-[3px] bg-[#272727] mt-3 mb-6"></div>

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

            <button className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
              GET A QUOTE
            </button>
          </div>
          <div className="flex justify-center">
            <Image
              src="/menupageimg/peb2.jpg"
              alt="EPACK Prefab Industrial Building"
              className="rounded-md shadow-md w-[600px] h-[400px] object-cover"
            />
          </div>
        </div>
      </section>
      {/* end description */}
      {/* keyfetaure */}
      <section className="w-full bg-white py-12 px-6 md:px-12 lg:px-20">
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
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
          Our services
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left menu / Dropdown */}
          <div className="bg-[#000080] text-white rounded-lg w-full md:w-1/4">
            {/* Mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-3 px-5 py-4 text-left w-full transition bg-blue-800 font-bold"
              >
                <span className="text-sm opacity-70">
                  {String(
                    areas.findIndex((a) => a.id === selectedId) + 1
                  ).padStart(2, "0")}
                </span>
                <span>{selectedArea?.title}</span>
              </button>

              {isOpen &&
                areas.map((area, idx) => (
                  <button
                    key={area.id}
                    onClick={() => {
                      setSelectedId(area.id);
                      setIsOpen(false);
                    }}
                    className={`flex items-center gap-3 px-5 py-4 text-left transition ${
                      selectedId === area.id
                        ? "bg-[#000080]  font-bold"
                        : "hover:bg-[#000080]  text-gray-300"
                    }`}
                  >
                    <span className="text-sm opacity-70">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span>{area.title}</span>
                  </button>
                ))}
            </div>

            {/* Desktop */}
            <div className="hidden md:flex flex-col">
              {areas.map((area, idx) => (
                <button
                  key={area.id}
                  onClick={() => setSelectedId(area.id)}
                  className={`flex items-center gap-3 px-5 py-4 text-left transition ${
                    selectedId === area.id
                      ? "bg-[#000080]  font-bold"
                      : "hover:bg-[#000080]  text-gray-300"
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

          {/* Right content */}
          {selectedArea && (
            <div className="bg-white rounded-lg shadow overflow-hidden w-full md:w-3/4 mt-4 md:mt-0">
              <div className="flex flex-col md:flex-row">
                {/* Text */}
                <div className="p-6 flex flex-col justify-center w-full md:w-1/2">
                  <h3 className="text-2xl font-semibold text-blue-900 mb-3">
                    {selectedArea.subtitle}
                  </h3>
                  <p className="text-gray-700 mb-5">
                    {selectedArea.description}
                  </p>
                  <button className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
                    GET A QUOTE
                  </button>
                </div>

                {/* Image */}
                <div className="w-full md:w-1/2">
                  <Image
                    src={selectedArea.image}
                    alt={selectedArea.subtitle}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* capiablites */}

      {/* endcapill */}
      {/* business benifts */}
      <section className="bg-[#000080] text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Industries We Serve{" "}
          </h2>

          {/* Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {cardsToShow.map((item, idx) => (
              <div
                key={idx}
                className=" bg-white rounded-lg overflow-hidden shadow-lg"
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
              className="bg-[#000080] p-2 rounded-full shadow hover:bg-gray-700"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-[#000080] p-2 rounded-full shadow hover:bg-gray-700"
            >
              <ChevronRight className="w-6 h-6 text-white" />
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
                src="/menupageimg/peb9.jpeg"
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
      <PlatformP />
      <section className="mb-10"></section>
      {/* end why choose us */}
      <Brand />

      {/* faqs */}
      <section className=" mx-auto px-4 py-12 md:px-13 ">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl  text-[#000080] md:text-3xl font-bold mb-2">
            Frequently Asked Questions
          </h2>
          {/* Yellow divider line */}
          <div className="w-16 h-1 bg-[#272727] mx-auto rounded"></div>
        </div>

        {/* FAQ Items */}
        <div className="border-t border-gray-200">
          {faqs.map((faq: FAQ, index: number) => (
            <div key={index} className="border-b border-gray-200">
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
              >
                <span
                  className={`font-medium transition-colors duration-200 ${
                    openIndex === index ? "text-[#000080]" : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </span>
                <span className="text-gray-500 text-sm">
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
