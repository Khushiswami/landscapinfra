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

import PebCallP from "../../Components/PebCallP"
import Pebheader from "../../Components/Pebheader";
import Footer from "../../Components/Footer";

import Link from "next/link";

export default function Standardmodular() {
    interface FAQ {
  question: string;
  answer: string;
}
const areas = [
  {
    id: 1,
    title: "Liftable Cabin",
    subtitle: "Liftable Cabin",
    description:"Ladsking Infra’s liftable cabins offer a versatile and convenient solution for a wide range of temporary or portable space requirements. Featuring an innovative design and easy lifting mechanism, these cabins provide mobility and flexibility without sacrificing comfort or functionality.",
    image: "/industry.jpg",
  },
  {
    id: 2,
    title: "Mi Homes",
    subtitle: "Mi Homes",
    description:"Ladsking Infra’s MI Homes are innovative, sustainable, and budget-friendly modular homes crafted for rapid installation and lasting durability. Perfect for residential, commercial, and emergency use, these homes provide comfortable living spaces equipped with modern amenities.",
   image: "/expertise/third.png",
  },
  {
    id: 3,
    title: "K-House",
    subtitle: "K-House",
    description:
      "K-House is a state-of-the-art solution for contemporary living, blending sustainability and innovation in its design. Featuring modular construction and energy-efficient elements, K-House provides a comfortable and eco-friendly lifestyle for individuals and families committed to a greener future.",
    image: "/expertise/third.png",
  },
  
];

const faqs: FAQ[] = [
  {
    question: "What is a standard modular solution?",
    answer:
      "Standard modular solutions consist of prefabricated, customizable units designed for a wide range of applications, enabling fast, efficient, and flexible construction."
  },
  {
    question: "What types of structures can be built with modular solutions?",
    answer:
      "These solutions cover a variety of uses, including site offices, portable cabins, classrooms, worker accommodations, and modular retail spaces."
  },
  {
    question: "How are modular structures constructed?",
    answer:
      "Modular structures are constructed off-site using prefabricated components and then assembled on-site, allowing for rapid installation and minimal disruption."
  },
  {
    question:
      "What materials are used in modular structures?",
    answer:
      "They are generally constructed using steel frameworks combined with insulated panels for the walls and roofing, ensuring strength and energy efficiency."
  },
  {
    question: "Can modular structures be customized?",
    answer:
      "Yes, modular structures can be customized to meet specific dimensions, layouts, and functional requirements."
  },
  {
    question: "Are modular structures suitable for extreme weather conditions?",
    answer:
      "Yes, these structures are built to withstand tough climates, including high winds and heavy rain."
  },
  {
    question: "How long does it take to construct a modular building?",
    answer:
      "Modular structures can be completed within weeks, depending on their size and complexity, offering a much faster alternative to traditional construction methods."
  },
  {
    question: "Who can benefit from modular solutions?",
    answer:
      "Industries like construction, education, healthcare, and retail often rely on modular solutions for both temporary and permanent infrastructure needs."
  },
  {
    question: "What is the lifespan of a modular building?",
    answer:
      "With regular maintenance, modular buildings can have a lifespan of 20 to 30 years or longer."
  },
  {
    question: "Can modular solutions be relocated?",
    answer:
      "Yes, these structures are portable and can be quickly dismantled and moved to new locations as required."
  },
  {
    question: "Are modular solutions compliant with building codes?",
    answer:
      "Yes, Ladsking Infra ensures that all modular solutions comply with industry standards and regulatory requirements.."
  },
  {
    question: "What is the installation process for modular buildings?",
    answer:
      "Modules are prefabricated off-site, delivered to the site, and assembled using straightforward joining methods."
  },
  

];


const possibilities = [
  {
    subtitle: "On-site Project Offices",
    description:
      "Quick-to-install office spaces at construction or industrial sites, providing a functional and comfortable working environment for project teams.",
    image: "/industry.jpg",
  },
  {
    subtitle: "Employee Housing Units",
    description:
      "Durable and secure accommodation units for workers, designed to ensure comfort and privacy during long-term site deployments.",
    image: "/industry.jpg",
  },
  {
    subtitle: "Portable Restrooms & Washrooms",
    description:
      "Hygienic, ready-to-use sanitation units that can be quickly installed at remote locations or project sites with limited infrastructure.",
    image: "/industry.jpg",
  },
  {
    subtitle: "Modular Educational Classrooms",
    description:
      "Flexible and scalable classrooms ideal for schools, training centers, or temporary learning spaces, built for quick deployment and durability.",
    image: "/industry.jpg",
  },
  {
    subtitle: "Security Booths",
    description:
      "Compact and sturdy cabins for security personnel, strategically placed at entry points or perimeters to monitor and control access.",
    image: "/industry.jpg",
  },
  {
    subtitle: "Model Apartments & Villas",
    description:
      "Fully functional sample flats and villas used for real estate demos, built with speed and precision to showcase final project layouts.",
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
           Standard Modular Solutions
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
Flexible, Expandable, and Quick-to-Deploy Modular Solutions”    </h2>
          <div className="w-20 h-[3px] bg-[#272727] mt-3 mb-6"></div>

          <p className="text-gray-700 mb-4 leading-relaxed">
At Ladsking Infra, we recognize the demand for fast, flexible, and premium-quality infrastructure in today’s ever-changing environment. Our Standard Modular Solutions are factory-built, pre-designed structures engineered to cater to a wide variety of applications—delivering exceptional speed, quality, and cost savings.    </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
Whether you need site offices, accommodation units, toilets, guard cabins, or modular classrooms, our solutions are designed for quick deployment, minimal site disturbance, and lasting performance.      </p>

        

          <Link href="/contact">
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
             Why Choose Ladsking Infra’s Modular Solutions?
            </h2>
          </div>

          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>✅ Quick Installation:</strong>  Delivered in ready-to-assemble modules, reducing construction time by up to 60%..
          </p>
         <p className="text-gray-600 leading-relaxed mb-4">
            <strong>✅ Superior Build Quality:</strong> Manufactured in our controlled facility using high-grade materials and precision processes.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>✅ Cost-Effective: </strong>  Saves time, labor, and overhead costs while ensuring consistent quality.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>✅ Portable & Relocatable:  </strong>  Easily dismantled and reassembled at new locations.
          </p>
            <p className="text-gray-600 leading-relaxed mb-4">
            <strong>✅ Durable & Weather-Resistant :  </strong>   Built to withstand diverse environmental conditions and heavy usage.
          </p>
            <p className="text-gray-600 leading-relaxed mb-4">
            <strong>✅ Custom Configurations: </strong>  While standard in design, they can be tweaked as per your operational needs.
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
       Our Standard Modular Solutions
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
            Applications of Our Modular Solutions
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
     Engineered to Support Your Fast-Paced Projects
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
        Ladsking Infra brings years of expertise in prefab construction, delivering modular solutions that extend far beyond just temporary setups. Our standard modular units are built with the same precision and quality as permanent structures — supported by a dedicated team that manages everything from design to delivery and installation.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
         From leading infrastructure companies to real estate developers, Ladsking Infra has earned trust as a reliable modular construction partner for numerous projects nationwide. Our extensive manufacturing and logistics network across India ensures quick turnaround times and seamless execution — even in the most remote locations.
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

          <p>15 Years of Expertise in prefabricated and steel building solutions

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
    
     <Footer/>
    </>
  );
}