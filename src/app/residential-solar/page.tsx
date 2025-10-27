"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Footer from "yes/Components/Footer";
import {
  Construction,
  Building2,
  Plug,
  Landmark,
  Cuboid,
  FileText,
  Flame,
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

export default function Residential() {
  const areas = [
    {
      id: 1,
      title: "Prefab Site Infrastructure ",
      subtitle: "Prefab Site Infrastructure Solutions",
      description:
        "At Landsking Infra Pvt. Ltd, we provide comprehensive Prefab Site Infrastructure Solutions designed to meet the evolving needs of modern industries and organizations. Our solutions are engineered to deliver efficiency, durability, and sustainability, ensuring that infrastructure development is completed in significantly reduced timelines without compromising on quality.",
      image: "/menupageimg/mod15.png",
    },
    {
      id: 2,
      title: "Prefab Site Office",
      subtitle: "Prefab Site Office",
      description:
        "At Landsking Infra Pvt. Ltd, we design and deliver durable and functional Labor Hutments that provide safe, comfortable, and cost-effective accommodation for workforce requirements across construction sites, industrial projects, and remote locations.",
      image: "/menupageimg/mod4.png",
    },
    {
      id: 3,
      title: "Labor Hutments",
      subtitle: "Prefabricated Industrial Shed Manufacturers",
      description:
        "We manufacture high-quality prefabricated industrial sheds that are strong, versatile, and tailored to meet the specific requirements of various industries.",
      image: "/preimages/shed.jpg",
    },
    {
      id: 4,
      title: "Portable Security Guard Cabins",
      subtitle: "Portable Security Guard Cabins",
      description:
        "Portable Security Guard Cabins are compact, movable structures designed to provide a safe, comfortable, and functional workspace for security personnel. Built with durable materials such as steel, aluminum, or high-quality insulated panels, these cabins are weather-resistant and sturdy, ensuring long-lasting use in both indoor and outdoor environments.",
      image: "/menupageimg/mod8.jpg",
    },
    {
      id: 5,
      title: "Clean Room",
      subtitle: "Clean Room",
      description:
        "offers advanced cleanroom solutions for controlled environments in industries like pharmaceuticals, electronics, and biotechnology. Our cleanrooms are designed with precision to meet stringent hygiene, airflow, and temperature control standards, ensuring optimal conditions for sensitive operations.",
      image: "/preimages/cleanroomk.jpg",
    },
    {
      id: 6,
      title: "Prefabricated Toilet",
      subtitle: "Prefabricated Toilet",
      description:
        "Landsking Infra Pvt. Ltd. provides high-quality prefabricated toilet solutions that are durable, easy to install, and efficient for use in a wide range of applications, including construction sites, industrial facilities, public places, and remote locations",
      image: "/preimages/toilet.jpg",
    },
    {
      id: 7,
      title: "Prefab Porta Cabins",
      subtitle: "Prefab Porta Cabins Manufacturer",
      description:
        "Landsking Infra Pvt. Ltd. provides high-quality prefabricated toilet solutions that are durable, easy to install, and efficient for use in a wide range of applications, including construction sites, industrial facilities, public places, and remote locations",
      image: "/preimages/porta.jpg",
    },
    {
      id: 8,
      title: "Railway Shelters",
      subtitle: "Railway Shelters",
      description:
        "Landsking Infra Pvt. Ltd. delivers robust and reliable railway and telecom shelters, specially designed to perform in harsh outdoor conditions. Manufactured using premium-grade materials, these shelters ensure maximum safety, durability, and functionality for critical applications",
      image: "/menupageimg/mod12.jpg",
    },
    {
      id: 9,
      title: "Cold Storage & Cold Room Manufacturer",
      subtitle: "Railway Shelters",
      description:
        "Our cold storage facilities are designed using high-performance insulated panels and modern refrigeration technology to deliver superior energy efficiency. Suitable for a wide range of applications — from perishable goods to pharmaceuticals —  Landsking Infra Pvt. Ltd. ensures reliable preservation, consistent temperature control, and compliance with industry standards.",
      image: "/menupageimg/cold4.png",
    },
  ];
  const servicesing = [
    {
      id: 1,
      icon: <Construction className="w-8 h-8 text-white" aria-hidden="true" />,
      title: "Civil Engineering Services",
      desc: "Landscapinfra offers reliable and affordable civil engineering support for site layout, infrastructure, and urban projects. We work on roads, bridges, drainage, and land development to ensure strong and lasting results.",
    },
    {
      id: 2,
      icon: <Building2 className="w-8 h-8 text-white" aria-hidden="true" />,
      title: "Structural Engineering Services",
      desc: "We design and plan safe, stable, and efficient structures for all kinds of projects. From industrial buildings to heavy foundations, our team ensures strength and performance in every design.",
    },
    {
      id: 3,
      icon: <Plug className="w-8 h-8 text-white " aria-hidden="true" />,
      title: "Electrical Engineering Services",
      desc: "Our team provides practical electrical design solutions for power systems, control panels, and automation setups. We help industries keep their operations safe, efficient, and well-connected.",
    },
    {
      id: 4,
      icon: <Landmark className="w-8 h-8 text-white" aria-hidden="true" />,
      title: "Infrastructure Engineering Services",
      desc: "We handle complete infrastructure planning and coordination for utilities, transport systems, and plant layouts. Every design is precise, clear, and ready for construction.",
    },
    {
      id: 5,
      icon: <Cuboid className="w-8 h-8 text-white" aria-hidden="true" />,
      title: "BIM Services",
      desc: "Our Building Information Modeling (BIM) helps reduce errors and improve project speed. We use smart 3D models to plan, estimate, and coordinate work more effectively.",
    },
    {
      id: 6,
      icon: <FileText className="w-8 h-8 text-white" aria-hidden="true" />,
      title: "Technical Manuals & Engineering Documentation",
      desc: "We create clear and accurate manuals, SOPs, and datasheets to support training, operations, and audits. Each document is simple, useful, and reliable.",
    },
    {
      id: 7,
      icon: <Flame className="w-8 h-8 text-white" aria-hidden="true" />,
      title: "Fire Protection Engineering Services",
      desc: "We design effective fire protection systems with accurate planning and safety checks. Our service helps ensure protection for industrial plants, offices, and public buildings.",
    },
  ];
  const possibilities = [
    {
      subtitle: "High Tolerance & Durability",
      description:
        "Engineered with high tolerance, corrosion resistance, and exceptional durability to ensure reliable long-term performance.",
      image: "/preimages/benone.jpg",
    },
    {
      subtitle: "Dimensional Accuracy",
      description:
        "Precision manufacturing guarantees exact dimensional accuracy, ensuring the final product meets and exceeds client expectations.",
      image: "/preimages/bentwo.jpg",
    },
    {
      subtitle: "Quick Erection & Installation",
      description:
        "Designed for rapid erection, enabling swift installation even in complex or challenging site conditions.",
      image: "/preimages/quick.png",
    },
    {
      subtitle: "Thermal Efficiency",
      description:
        "Insulated panels maintain a 5–7°C temperature difference, significantly enhancing energy efficiency and comfort.",
      image: "/preimages/benthree.jpg",
    },
    {
      subtitle: "Accelerated Project Timelines",
      description:
        "Optimized production and installation processes ensure timely delivery, meeting tight project schedules.",
      image: "/preimages/",
    },
    {
      subtitle: "Robust Construction",
      description:
        "Strong and sturdy construction ensures long service life, structural stability, and reliable performance.",
      image: "/preimages/",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 4; // Show 4 cards per row
  const [open, setOpen] = useState(false); // for mobile dropdown

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
      image: "/preimages/",
      title: "Pre-fab Office",
      link: "/prefabricatedSite",
    },
    {
      image: "/preimages/industrial encloset.jpg",
      title: "Industrial Enclousers",
      link: "/industrialEnclousers",
    },
    {
      image: "/preimages/",
      title: "Railway Shelters",
      link: "/railwayShelters",
    },
    {
      image: "/preimages/",
      title: "Control Room",
      link: "/coldRoom",
    },
    {
      image: "/preimages/cleanroomk.jpg",
      title: "Clean Room",
      link: "/cleanRoom",
    },
    {
      image: "/preimages/",
      title: "Acoustic Enclosure",
      link: "/",
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
          <source src="/video/modular.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-15 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <div className="text-center lg:text-left order-1 mt-16 sm:mt-12 md:mt-16 lg:mt-0">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug mb-4 sm:mb-6 max-w-md mx-auto lg:mx-10">
              Modular Building Solutions
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
      <section className="bg-white py-12 px-4 md:px-16">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#000080] leading-snug  ">
              Smart and Flexible Solutions for Modern Building{" "}
            </h2>
            <div className="w-20 h-[3px] bg-[#272727] mt-3 mb-6"></div>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Lightweight, durable, relocatable, economical, and
              energy-efficient, prefabricated structures are increasingly
              recognized as a modern and sustainable alternative to conventional
              construction methods. These innovative solutions meet all the
              functional requirements of traditional buildings while offering
              added advantages such as faster execution, cost savings, and
              design flexibility.{" "}
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              At Landsking Infra Pvt. Ltd, we specialize in delivering
              high-quality prefabricated structures tailored to diverse
              applications. Our dry construction process enables quicker project
              timelines and greater efficiency. Manufactured with premium-grade
              steel frames and insulated panels, our modular solutions are
              engineered for long-lasting durability and ease of installation.{" "}
            </p>
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
      {/* end description */}
      {/* capiablites */}
      <section className="w-full bg-white py-4 md:py-12 px-6 md:px-12 lg:px-20">
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="absolute -bottom-4 -right-4 w-full h-full   rounded-2xl"></div>
            <Image
              src="/preimages/define.png" // replace with your real factory image
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
                Redefining Modern Infrastructure with Prefabricated Buildings
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Landsking Infra Pvt. Ltd.</strong> we believe that the
              true value of prefabricated buildings lies in their innovative
              design, structural integrity, and flawless execution. Each project
              begins with a carefully engineered design, which is then
              integrated into advanced automated production systems to ensure
              precision, uniformity, and uncompromised quality.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Our infrastructure is powered by a highly skilled team of
              engineers, supported with state-of-the-art CNC machinery, robotic
              welding systems, and high-capacity fabrication tools. These
              advanced resources enable us to deliver large-scale{" "}
              <span className="font-semibold">steel structures</span> with
              precision and efficiency.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our prefabricated structures are pre-engineered and pre-assembled
              at the factory, reducing on-site work and ensuring quick, seamless
              installation. This approach delivers not only efficiency and
              durability, but also an elegant balance of aesthetics and
              functionality, making them ideal for a wide range of residential,
              commercial, and industrial applications
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white py-12 px-4 md:px-16">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#000080] leading-snug  ">
              Smart and Flexible Solutions for Modern Building{" "}
            </h2>
            <div className="w-20 h-[3px] bg-[#272727] mt-3 mb-6"></div>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Lightweight, durable, relocatable, economical, and
              energy-efficient, prefabricated structures are increasingly
              recognized as a modern and sustainable alternative to conventional
              construction methods. These innovative solutions meet all the
              functional requirements of traditional buildings while offering
              added advantages such as faster execution, cost savings, and
              design flexibility.{" "}
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              At Landsking Infra Pvt. Ltd, we specialize in delivering
              high-quality prefabricated structures tailored to diverse
              applications. Our dry construction process enables quicker project
              timelines and greater efficiency. Manufactured with premium-grade
              steel frames and insulated panels, our modular solutions are
              engineered for long-lasting durability and ease of installation.{" "}
            </p>
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
      {/* endcapill */}

      {/* explore content */}
      {/* business benifts */}
      <section className="max-w-7xl mx-auto px-5 py-10">
        <header className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#000080]">
            Steps
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Expert solutions across every discipline of engineering excellence.
          </p>
        </header>

        {/* Mobile: horizontal scroll with snapping */}
        <div className="block sm:hidden">
          <div className="-mx-4 px-4 overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-4">
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
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6">
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
