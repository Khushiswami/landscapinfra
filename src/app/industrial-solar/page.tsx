"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Footer from "yes/Components/Footer";
import {
  MapPin,
  Wrench,
  FileSpreadsheet,
  CheckCircle,
  Power,
  PlugZap,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Brand from "../../Components/Brand";

import Pebheader from "yes/Components/Pebheader";

import Link from "next/link";
import Pebfooter from "yes/Components/Pebfooter";
import Renewableheader from "yes/Components/Renewableheader";
import Solarcontact from "yes/Components/Solarcontact";
import Inds from "yes/Components/Inds";

export default function Industrial() {
  interface FAQ {
    question: string;
    answer: string;
  }
  const areas = [
    {
      id: 1,
      title: "Custom System Design ",
      subtitle: "Custom System Design",
      description:
        "We conduct a detailed site assessment and load analysis to design solar systems that are precisely aligned with your operational requirements. Each solution is engineered to maximize energy output, optimize ROI, and ensure long-term operational reliability, reflecting a strategic approach to sustainable energy adoption.",
      image: "/industryimg/Custom System Design.jpg",
    },

    {
      id: 1,
      title: "End-to-End Delivery ",
      subtitle: "End-to-End Delivery",
      description:
        "From feasibility assessment and detailed engineering to procurement, installation, and commissioning, we manage the entire project lifecycle as a single accountable entity. This integrated approach guarantees seamless execution, timely delivery, and superior quality performance without requiring you to coordinate multiple vendors.",
      image: "/industryimg/End-to-End Delivery.jpg",
    },
    {
      id: 1,
      title: "Regulatory & Net-Metering Support ",
      subtitle: "Regulatory & Net-Metering Support",
      description:
        "We navigate the complexities of regulatory compliance, approvals, and net-metering on your behalf, making it easier for your business to adopt solar energy smoothly and benefit from government incentives.",
      image: "/industryimg/Regulatory & Net-Metering Support.jpg",
    },
    {
      id: 1,
      title: "Flexible Financing ",
      subtitle: "Flexible Financing",
      description:
        "We offer multiple financing options to suit different business models and budgets, including CAPEX (capital investment), OPEX (operating expenditure), and zero-investment RESCO models.we empower organizations to deploy solar infrastructure with minimal financial friction while achieving strategic energy and sustainability goals.",
      image: "/industryimg/Flexible Financing.jpg",
    },
    {
      id: 1,
      title: "Asset Management & Monitoring ",
      subtitle: "Asset Management & Monitoring",
      description:
        "Through advanced real-time monitoring, predictive maintenance, and proactive performance optimization to safeguard your solar assets. Continuous tracking and proactive management ensure maximum energy yield, minimize downtime, and extend the lifespan of your solar system.",
      image: "/industryimg/Asset Management & Monitoring.jpg",
    },
  ];
  const servicesing = [
    {
      id: 1,
      icon: <MapPin className="w-8 h-8 text-white" aria-hidden="true" />,
      title: "Step 1: Site Evaluation",
      desc: "We start by inspecting your rooftop to analyze energy needs, structure, orientation, and shading to ensure it can support an efficient solar system.",
    },
    {
      id: 2,
      icon: (
        <FileSpreadsheet className="w-8 h-8 text-white" aria-hidden="true" />
      ),
      title: "Step 2: Customized System Design",
      desc: "A tailored solar solution designed to match your energy needs, roof layout, and power supply — balancing safety, efficiency, and long-term reliability.",
    },
    {
      id: 3,
      icon: <CheckCircle className="w-8 h-8 text-white" aria-hidden="true" />,
      title: "Step 3: Approvals & Metering",
      desc: "We handle all necessary approvals and metering so your solar system integrates seamlessly with the grid without delays or hurdles.",
    },
    {
      id: 4,
      icon: <Wrench className="w-8 h-8 text-white" aria-hidden="true" />,
      title: "Step 4: Installation & Construction",
      desc: "Our skilled engineers follow best practices to install panels and connections, ensuring safety, durability, and peak performance.",
    },
    {
      id: 5,
      icon: <Power className="w-8 h-8 text-white" aria-hidden="true" />,
      title: "Step 5: System Commissioning",
      desc: "Before going live, every system undergoes rigorous testing to confirm stability, efficiency, and seamless operation.",
    },
    {
      id: 6,
      icon: <PlugZap className="w-8 h-8 text-white" aria-hidden="true" />,
      title: "Step 6: Grid Connection & Net Metering",
      desc: "Once connected, your rooftop starts working as a full-fledged power plant, reducing costs and exporting surplus energy for extra savings.",
    },
  ];
  const possibilities = [
    {
      subtitle: "Profit with Sunshine",
      description:
        "Harness solar energy to generate returns quickly, often within two years.",
      image: "/industryimg/Profit with Sunshine.jpg",
    },
    {
      subtitle: "Effortless Upkeep",
      description:
        "Minimize routine maintenance and free resources for essential business needs.",
      image: "/industryimg/Effortless Upkeep.JPG",
    },
    {
      subtitle: "Predictable Energy Costs",
      description:
        "Take charge of your electricity expenses with self-produced power.",
      image: "/industryimg/Predictable Energy Costs.jpg",
    },
    {
      subtitle: "Enhance Asset Value",
      description:
        "Solar installations increase property worth and make facilities more appealing.",
      image: "/industryimg/Enhance Asset Value.jpg",
    },
    {
      subtitle: "Tax Advantages & Depreciation",
      description:
        "Benefit from annual 40% depreciation and other tax incentives for smarter investments.",
      image: "/industryimg/Tax Advantages.jpg",
    },
    {
      subtitle: "Eco-Leverage Your Brand",
      description:
        "Showcase sustainability and environmental responsibility to strengthen your brand image.",
      image: "/industryimg/eco lavrage.jpg",
    },
    {
      subtitle: "Cooler Workspaces",
      description:
        "Solar panels help reduce shed temperatures by approximately 4°C.",
      image: "/industryimg/Cooler Workspaces.jpg",
    },
    {
      subtitle: "Protection for Structures",
      description:
        "Extend the lifespan of sheds and RCC buildings by shielding them from direct sunlight.",
      image: "/industryimg/Protection for Structures.jpg",
    },
    {
      subtitle: "Future-Proof Your Energy Bills",
      description:
        "Safeguard your operations against rising electricity tariffs with reliable solar power.",
      image: "/industryimg/fr.jpg",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  // const visibleCards = 4; // Show 4 cards per row
  const visibleCards =
    typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 4;
  const [open, setOpen] = useState(false); // for mobile dropdown
  const [selectedId, setSelectedId] = useState(3);

  const selectedArea = areas.find((area) => area.id === selectedId);
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

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const slides = [
    {
      image: "/industryimg/Enhance Asset Value.jpg",
      title: "Enhance Asset Value",
    },
    {
      image: "/industryimg/Effortless Upkeep.JPG",
      title: "Effortless Upkeep",
    },
  ];
  const steps = [
    {
      image: "/images/step1.jpg",
      title: "Engineering",
      description:
        "Comprehensive planning and design ensuring efficient, safe, and sustainable solutions.",
    },
    {
      image: "/images/step2.jpg",
      title: "Procurement",
      description:
        "Strategic sourcing and vendor management to guarantee quality materials on time.",
    },
    {
      image: "/images/step3.jpg",
      title: "Construction",
      description:
        "Expert project execution and supervision to deliver projects with precision and safety.",
    },
  ];
  // const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <>
      <Renewableheader />
      <section className="relative min-h-screen sm:min-h-screen flex items-center text-white overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/solarvideo/industrial solar.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-15 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <div className="text-center lg:text-left order-1 mt-16 sm:mt-12 md:mt-16 lg:mt-0">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug mb-4 sm:mb-6 max-w-md mx-auto lg:mx-10">
              Industrial Solar
            </h1>
            <p className="text-sm sm:text-base md:text-lg max-w-sm mx-auto lg:mx-10">
              Build your project offsite with fast accuracy and quality. Enjoy
              faster completion and effortless on-site assembly for seamless
              results.
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
                        // href={slide.link}
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
      <section className="bg-white py-12 px-4  md:px-20 lg:px-25">
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#000080] leading-snug  ">
              Industrial Solar
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              LandsKing Infra is one of India’s most trusted names in industrial
              solar rooftop solutions, delivering high-performance, sustainable
              energy systems. From design to installation, our customized solar
              solutions are engineered to optimize energy efficiency for
              industries across the country. By adopting LandsKing Infra’s solar
              systems, businesses not only achieve significant cost savings and
              reduced grid dependency but also demonstrate a strong commitment
              to environmental stewardship and sustainable growth. At LandsKing
              Infra, we believe that powering businesses with clean energy is
              more than a technical solution—it is a strategic investment in a
              resilient, greener future.
            </p>

            <Link href="/solar-contact">
              <button className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
                GET A QUOTE
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <img
              src="/menupageimg/mod13.jpg"
              alt="EPACK Prefab Industrial Building"
              className="rounded-md shadow-md w-[600px] h-[400px] object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            />
          </div>
        </div>
      </section>
      <Inds />
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#000080]">
            Steps EPC Approach
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-[#000080] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* imaeg */}
      <section className="bg-[#000080] text-white py-10">
        <div className=" mx-auto px-4 md:px-18 lg:mx-23">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Benefits for Industries with landsking infra
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
      <section className=" mx-auto px-5 py-10 md:px-18 lg:mx-22">
        <header className="text-center mt-10 mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#000080]">
            How Can we Help Your Industry Benefit from Custom Solar?
          </h2>
          <p className=" mt-5 md:mt-10 text-sm text-slate-500 mb-9 md:mb-15 ">
            At LandsKing Infra, we specialize in industrial rooftop solar
            solutions, starting from 150 kW. Our team analyzes your facility to
            design customized systems that maximize efficiency, reduce energy
            costs, and deliver long-term sustainable value.
          </p>
        </header>

        {/* Mobile: horizontal scroll with snapping */}
        <div className="block sm:hidden">
          <div className=" grid grid-cols-1  gap-6">
            {servicesing.map((s) => (
              <article
                key={s.id}
                className="snap-center min-w-[78%] flex-shrink-0 bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-md focus:outline-none focus:ring-4 focus:ring-[#000080]"
                role="article"
              >
                <div className="w-16 h-16 text- white rounded-full flex items-center justify-center mx-auto mb-3 bg-[#000080]">
                  {s.icon}
                </div>

                <h3 className="text-lg  text-[#000080] *:font-semibold">
                  {s.title}
                </h3>
                <p className="mt-2 text-base text-black">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Tablet / Desktop */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-7">
          {servicesing.map((s) => (
            <article
              key={s.id}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow focus:shadow-lg outline-none focus:ring-4 focus:ring-indigo-200"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3 bg-[#000080]">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>
      <Solarcontact />
      <Footer />
    </>
  );
}
