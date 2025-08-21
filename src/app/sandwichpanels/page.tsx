"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaTools, FaBolt, FaShieldAlt, FaLeaf, FaCogs, FaExpand } from "react-icons/fa";
import { FaAward, FaGlobeAsia, FaDraftingCompass, FaCertificate, FaClock, FaProjectDiagram } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import Platform from "../platform/page";
import PebCallP from "../../Components/PebCallP"
import PebFooterP from "../../Components/PebFooterP";
import Pebheader from "../../Components/Pebheader";
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
    description:"PUF panels are renowned for their superior thermal insulation, energy-saving properties, and strong mechanical performance. Combining light weight with durability, they are widely utilized in cold storage facilities, industrial buildings, and prefabricated constructions. Engineered for quick and easy installation, PUF panels help reduce both construction time and energy expenses.",
    image: "/industry.jpg",
  },
  {
    id: 2,
    title: "Rockwool Panel",
    subtitle: "Rockwool Panel",
    description:"Rockwool panels offer outstanding acoustic and thermal insulation along with exceptional fire resistance. They are perfect for spaces requiring enhanced soundproofing and temperature regulation, such as factories, recording studios, and high-temperature areas.",
   image: "/expertise/third.png",
  },
  {
    id: 3,
    title: "Glass Wool Panels",
    subtitle: "Glass Wool Panels",
    description:
      "Glass Wool Panels provide excellent resistance to fire, heat, and noise. Their lightweight and flexible nature makes them ideal for both commercial and residential applications requiring effective thermal and acoustic insulation.",
    image: "/expertise/third.png",
  },
  {
    id: 4,
    title: "EPS Panels",
    subtitle: "EPS Panels",
    description:"EPS panels deliver an excellent combination of thermal insulation, lightweight design, and affordability. Frequently utilized in warehouses, commercial buildings, and cold storage facilities, they are easy to install, highly durable, and adaptable to a wide range of project requirements.",
    image: "/expertise/third.png",
  },
 
  
];

const faqs: FAQ[] = [
  {
    question: "What are sandwich panels?",
    answer:
      "A factory building is a structure designed to house manufacturing or production operations."
  },
  {
    question: "What materials are used in factory building construction?",
    answer:
      "Factory buildings are typically constructed using steel, prefabricated panels, reinforced concrete, and insulated materials for durability and efficiency."
  },
  {
    question: "What are the benefits of prefabricated factory buildings?",
    answer:
      "They are faster to build, cost-effective, customizable, and more sustainable."
  },
  {
    question:
      "How does a pre-engineered factory building differ from traditional buildings?",
    answer:
      "Pre-engineered buildings are manufactured off-site and assembled on-site, reducing construction time and cost."
  },
  {
    question: "Can factory buildings be customized?",
    answer:
      "Yes, they can be tailored to specific design, size, and operational requirements."
  },
  {
    question: "What are Pre-Engineered Buildings (PEBs)?",
    answer:
      "Pre-Engineered Buildings are factory-fabricated steel structures that are shipped in parts and assembled on-site, offering speed, durability, and cost savings."
  },
  {
    question: "Why choose Pre-Engineered Buildings over conventional construction?",
    answer:
      "PEBs reduce construction time by up to 60%, offer flexibility in design, and ensure long-term strength with minimal maintenance compared to traditional methods."
  },
  {
    question: "What are Prefabricated Structures?",
    answer:
      "Prefabricated structures are modular buildings manufactured in factories and assembled at site, ensuring faster delivery, reduced labor, and consistent quality."
  },
  {
    question: "What is Light Gauge Steel Framing (LGSF)?",
    answer:
      "LGSF is an advanced construction method using cold-formed steel sections for walls, roofs, and floors, making structures lightweight, durable, and sustainable."
  },
  {
    question: "Where is Light Gauge Steel Framing used?",
    answer:
      "LGSF is commonly used in residential buildings, commercial complexes, schools, hospitals, and temporary housing solutions."
  },
  {
    question: "What are Sandwich Panels in construction?",
    answer:
      "Sandwich Panels are prefabricated wall and roof panels with an insulating core between two metal sheets, offering excellent thermal efficiency and durability."
  },
  {
    question: "What are the benefits of Sandwich Panels?",
    answer:
      "They provide superior insulation, reduce energy costs, are lightweight, easy to install, and suitable for cold storage, industrial sheds, and modular units."
  },
  {
    question: "What are Standard Modular Solutions?",
    answer:
      "Standard Modular Solutions are ready-to-use prefabricated units designed for quick installation, flexibility, and cost-effectiveness across industries."
  },
  {
    question: "What are Ready-to-Use Modular Units?",
    answer:
      "Ready-to-use modular units are pre-built cabins or structures delivered directly to the site, requiring minimal setup and providing instant usability."
  },
  {
    question: "Where can Ready-to-Use Modular Units be applied?",
    answer:
      "They are ideal for site offices, security cabins, classrooms, healthcare units, toilets, and temporary accommodations."
  }
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
      title:"Labor Hutment",
      link: "#",
    },
    {
     image: "/expertise/third.png",
      title:"Control Room",
      link: "#",
    },
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const stats = [
    { label: "Years of Expertise", value: 20, suffix: "+", icon: <FaAward className="text-[#000080] text-xl" /> },
    { label: "Projects Delivered", value: 500, suffix: "+", icon: <FaProjectDiagram className="text-[#000080] text-xl" /> },
    { label: "Nationwide Presence", value: 25, suffix: "+ States", icon: <FaGlobeAsia className="text-[#000080] text-xl" /> },
    { label: "Certified Processes", value: 100, suffix: "%", icon: <FaCertificate className="text-[#000080] text-xl" /> },
  ];

  
  return (
    <>
    <Pebheader/>
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
           Sandwich Panels
          </h1>
          <p className="text-lg md:text-xl max-w-lg mx-auto lg:mx-0">
Prefabricated structures are buildings or components manufactured in a factory and then transported to the site for quick assemblly.          </p>
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
Premium Insulation Panels Designed for Modern Construction     </h2>
          <div className="w-20 h-[3px] bg-[#272727] mt-3 mb-6"></div>

          <p className="text-gray-700 mb-4 leading-relaxed">Landsking Infra stands as one of India’s top manufacturers of sandwich panels, providing a diverse selection of insulated panels designed for superior thermal performance, robust structural strength, and fast installation. Equipped with both continuous and discontinuous production lines, we deliver consistent quality, 
            precision, and adaptability for projects of all sizes—from large-scale developments to custom builds. </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Our sandwich panels are widely trusted across various sectors, including warehouses, cold storage facilities,
             agricultural buildings, pharmaceutical structures, industrial complexes, and commercial spaces.
    </p>

        

          <Link href="/contact">
      <button className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
        GET A QUOTE
      </button>
    </Link>
        </div>
<div className="flex justify-center">
        <img
  src="/industry.jpg"
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
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Advanced Insulating Capabilities of Sandwich Panels
            </h2>
          </div>

          <p className="text-gray-600 leading-relaxed mb-4">
           Sandwich panels gain their structural integrity from a core insulating layer bonded between two rigid metal sheets. This advanced design enhances load-bearing strength while offering excellent thermal insulation, moisture protection, and soundproofing performance.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
           Sandwich panels reduce heat transfer, helping to maintain stable indoor temperatures while lowering energy usage and air-conditioning expenses—making them ideal for buildings with constant occupancy.
          </p>

           <p className="text-gray-600 leading-relaxed mb-4">
           With fast installation, extended durability, and low maintenance requirements, they serve as a highly efficient alternative to conventional masonry in contemporary construction.
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
      What Are Sandwich Panels?

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
             Applications of Sandwich Panels
            </h2>
    
            {/* Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
  {cardsToShow.map((item, idx) => (
    <div
      key={idx}
      className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
    >
      <img
        src={item.image}
        className="w-full h-44 object-cover"
      />
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
          src="/industry.jpg"
          alt="PUF panels in industrial shed"
          width={600}
          height={400}
         className="rounded-md shadow-md w-[600px] h-[400px] object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"

        />
      </div>

      {/* Text Section (Right Side) */}
      <div>
        <p className="text-gray-700 leading-relaxed">
          Landsking Infra offers advanced sandwich panels manufactured using both continuous and discontinuous production lines to ensure precision and quality. These panels deliver high insulation performance, offering excellent thermal and acoustic efficiency with low thermal conductivity, resulting in significant energy savings. Lightweight yet highly durable, they are quick to install and built to resist flame, corrosion, and termites. Ideal for applications such as roofing, wall cladding, and cold storage, our panels are backed by over 25 years of prefabrication expertise. We also provide PAN-India project execution and delivery, with products fully compliant with safety and industry standards.
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 flex items-center">
           
            Why Choose Landsking Infra Pvt. Ltd for PEBs?
          </h2>

          <p>25+ Years of Expertise in prefabricated and steel building solutions

Nationwide Presence with a strong logistics and project execution network

In-House Design & Engineering powered by 3D modeling and load optimization

Certified Manufacturing Standards ensuring compliance with IS codes and quality benchmarks

Timely Project Delivery backed by structured planning and skilled professionals

End-to-End Turnkey Solutions covering design, fabrication, delivery, and installation</p>

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
          <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
        )}
      </h3>
      <p className="text-[14px] text-gray-600 mt-1 text-center">{stat.label}</p>
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
     <PebCallP/>
    
     {/* faqs */}
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
    
     <PebFooterP/>
    </>
  );
}