"use client";

import React, { useState } from "react";
import Footer from "yes/Components/Footer";
import Renewableheader from "yes/Components/Renewableheader";
import Epc from "yes/Components/Epc";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useRouter } from "next/navigation";
import { PencilRuler, Building2 } from "lucide-react";
import {
  FaTools,
  FaBolt,
  FaShieldAlt,
  FaLeaf,
  FaCogs,
  FaExpand,
} from "react-icons/fa";
import Designsolar from "yes/Components/Designsolar";

export default function Solardesign() {
  interface FAQ {
    question: string;
    answer: string;
  }

  const [activeTab, setActiveTab] = useState(1);
  const [animateArrow, setAnimateArrow] = useState(false);
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [open, setOpen] = useState(false); // for mobile dropdown

  // ✅ FIXED: close function properly
  const handleClick = () => {
    setAnimateArrow(!animateArrow);
    router.push("/system");
  };
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  // ✅ Moved slides & features outside of handleClick
  const slides = [
    {
      image: "/preimages/office.jpg",
      title: "Pre-fab Office",
      link: "/prefabricatedSite",
    },
    {
      image: "/preimages/industrial-enclosure.jpg",
      title: "Industrial Enclosures",
      link: "/industrialEnclosures",
    },
    {
      image: "/preimages/railway-shelter.jpg",
      title: "Railway Shelters",
      link: "/railwayShelters",
    },
    {
      image: "/preimages/control-room.jpg",
      title: "Control Room",
      link: "/controlRoom",
    },
    {
      image: "/preimages/cleanroomk.jpg",
      title: "Clean Room",
      link: "/cleanRoom",
    },
    {
      image: "/preimages/acoustic.jpg",
      title: "Acoustic Enclosure",
      link: "/acousticEnclosure",
    },
  ];

  const features = [
    {
      title: "Custom-Built Design",
      description:
        "Fully tailored to your operational and architectural requirements, ensuring precision and efficiency.",
      icon: <FaCogs className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Quick Installation",
      description:
        "Factory-engineered components allow rapid onsite assembly, saving both time and labor costs.",
      icon: <FaTools className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Cost-Efficient Construction",
      description:
        "Optimized designs reduce material waste and overall construction expenses.",
      icon: <FaBolt className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Durable and Low Maintenance",
      description:
        "Built to withstand harsh weather and seismic conditions with minimal upkeep.",
      icon: <FaShieldAlt className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Energy Efficient",
      description:
        "Insulated wall and roof panels provide excellent temperature control and energy savings.",
      icon: <FaLeaf className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Expandable & Flexible",
      description:
        "Easily scalable and adaptable to meet future growth and business requirements.",
      icon: <FaExpand className="text-[#000080] text-3xl mb-4" />,
    },
  ];
  const faqs: FAQ[] = [
    {
      question: "Is a Pre-Engineered Building a permanent structure?",
      answer:
        "Yes, modern PEBs are classified as capital-grade, permanent structures with a service life of 50–75 years or more, matching conventional longevity.",
    },
    {
      question:
        "What is the typical maintenance cost difference between a PEB and a conventional building? ",
      answer:
        "The durable, coated steel and specialized roofing inherently resist pests and weather. This results in an estimated 30–40% lower long-term maintenance cost compared to masonry or wood alternatives, securing your operational budget.",
    },
    {
      question:
        "Beyond durability, how does the PEBs material choice impact its environmental footprint?",
      answer:
        "The primary material, steel, contains a high percentage of recycled content and is fully recyclable. Choosing a PEB is a commitment to a resource-efficient, lower-impact construction lifecycle.",
    },
    {
      question:
        "How does a pre-engineered factory building differ from traditional buildings?",
      answer:
        "Pre-engineered buildings are manufactured off-site and assembled on-site, reducing construction time and cost.",
    },
    {
      question:
        "Can I easily install a bridge or overhead crane system in a Pre-Engineered Metal Building?",
      answer:
        "Yes, PEBs are holistically engineered for heavy operational requirements. Columns and rafters are custom-designed during fabrication to safely bear the dynamic loads of overhead equipment.",
    },
    {
      question:
        "Do PEBs typically require a lighter or shallower foundation than traditional construction? ",
      answer:
        " Due to optimized design and lighter material weight, PEBs generally require a simpler and more economical foundation, accelerating the project’s earliest phase.",
    },
  ];
  return (
    <>
      <Renewableheader />

      {/* ===== Hero Section ===== */}
      <section className="relative min-h-screen flex items-center text-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/modular.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div className="text-center lg:text-left mt-16 lg:mt-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-snug mb-4">
              Ground Mounted{" "}
            </h1>
            <p className="text-lg max-w-md mx-auto lg:mx-0">
              Build your project offsite with precision and speed. Enjoy faster
              completion and effortless on-site assembly for seamless results.
            </p>
          </div>

          {/* Swiper Section */}
          <div className="flex justify-center mt-8 lg:mt-0">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
              className="pb-10 max-w-[280px]"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white text-black rounded-xl shadow-lg overflow-hidden flex flex-col items-center">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-56 object-cover"
                    />
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold">{slide.title}</h3>
                      <a
                        href={slide.link}
                        className="mt-2 inline-block text-[#000080] hover:underline"
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
      <section className="w-full bg-white py-12 px-4 sm:px-6 md:px-12">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug max-w-4xl mx-auto">
              Landsking Infra Fabrication Solutions
            </h2>
            <div className="w-12 h-1 bg-[#000080] mt-3 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                Landsking Infra delivers sturdy and cost-efficient
                <span className="text-[#000080] font-semibold">
                  {" "}
                  Fabrication Solutions{" "}
                </span>
                Landsking Infra delivers precision-engineered fabrication
                services for industrial, commercial, and infrastructure
                projects, ensuring strength, accuracy, and long-lasting
                performance. Our expertise covers heavy steel structures,
                customized sheet metal works, and complex assemblies tailored to
                client requirements. Equipped with an ISO-compliant fabrication
                facility, we maintain stringent quality standards while ensuring
                timely project delivery and smooth onsite erection. Our team of
                skilled welders and certified fabrication engineers works
                closely with civil and structural teams to guarantee seamless
                project execution. From design coordination to final
                installation, Landsking Infra provides reliable, efficient, and
                high-quality fabrication solutions that meet industry standards
                and project timelines.
              </p>

              <div className="flex items-center justify-center md:justify-start gap-4">
                <button className="border text-[#000080] border-blue-900 px-6 py-2 text-sm sm:text-base hover:bg-[#000080] hover:text-white transition">
                  GET A QUOTE
                </button>
              </div>
            </div>

            <div className="relative w-full h-64 sm:h-80 md:h-[450px]">
              <img
                src="/Industrial-Buildings-Construction.webp"
                alt="Industrial Building"
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <Designsolar />
      {/* ===== Steps Section ===== */}

      {/* ===== CTA Section ===== */}

      {/* ===== Key Features ===== */}
      <section className="w-full bg-white py-12 px-6 md:px-12 lg:px-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Key Features of{" "}
            <span className="text-[#000080]">
              Landsking Infra Pvt. Ltd. PEB Structures
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Our Pre-Engineered Buildings are designed for innovation,
            durability, and efficiency.
          </p>

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
      <Footer />
    </>
  );
}
