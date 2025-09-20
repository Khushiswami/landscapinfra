"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Industryheader from "yes/Components/Industryheader";
import Footer from "../../Components/Footer";
import ContactSection from "yes/Components/ContactSection";
import Navbar from "yes/Components/Navbar";
interface Projectsector {
  id: number;
  title: string;
  description: string;
  image: string;
}

const projects: Projectsector[] = [
  {
    id: 1,
    title: "Power",
    description:
      "Tata Projects provides customized turnkey solutions for thermal power plants such as total EPC, comprehensive Balance of Plant (BOP), and Flue-gas desulfurization (FGD) solutions. With rich experience in coal and gas-based plants, super and subcritical technologies, we have executed several large and complex projects.",
    image: "/realstate/three.webp",
  },
  {
    id: 2,
    title: "Water",
    description:
      "Tata Projects offers end-to-end industrial and municipal water treatment solutions across the value chain; river rejuvenation, water supply system, sewage system, treatment plants including desalination and effluent treatment Plants.",
    image: "/realstate/two.jpg",
  },
  {
    id: 3,
    title: "Advanced Technology Facilities",
    description:
      "Tata Projects offers end-to-end industrial and municipal water treatment solutions across the value chain; river rejuvenation, water supply system, sewage system, treatment plants including desalination and effluent treatment Plants.",
    image: "/realstate/one.webp",
  },
  {
    id: 4,
    title: "Metals & Minerals",
    description:
      "Tata Projects offers end-to-end industrial and municipal water treatment solutions across the value chain; river rejuvenation, water supply system, sewage system, treatment plants including desalination and effluent treatment Plants.",
    image: "/realstate/fourS.webp",
  },
  {
    id: 5,
    title: "Oil, Gas and Hydrocarbon",
    description:
      "Tata Projects offers end-to-end industrial and municipal water treatment solutions across the value chain; river rejuvenation, water supply system, sewage system, treatment plants including desalination and effluent treatment Plants.",
    image: "/realstate/fiveS.webp",
  },
];

const sectors = [
  {
    id: 1,
    title: "Integrated Design & Fit-outs",
    image: "/industry.jpg",
    url: "/manufacturing",
    description:
      "We handle all space planning, interior finishes, and seamless integration of all mechanical, electrical, and plumbing systems.",
  },
  {
    id: 2,
    title: "Smart Automation",
    image: "/industry.jpg",
    url: "/urban",
    description:
      "We install smart systems for lighting, HVAC, and access control to create efficient and automated offices.",
  },
  {
    id: 3,
    title: "Specialized Interiors",
    image: "/industry.jpg",
    url: "/advanced",
    description:
      "We provide modular partitions, acoustic designs, and energy-efficient solutions for a functional and comfortable workspace.",
  },
  {
    id: 4,
    title: "Sustainable Green Offices",
    image: "/industry.jpg",
    url: "/oil",
    description:
      "We develop green offices that are certified by LEED and IGBC, focusing on eco-friendly and healthy environments.",
  },
];

export default function Publicoffice() {
  const [current, setCurrent] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [activeOverlay, setActiveOverlay] = useState<number | null>(null);

  const handleOverlayToggle = (id: number) => {
    if (activeOverlay === id) setActiveOverlay(null);
    else setActiveOverlay(id);
  };
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else {
        setItemsPerView(3);
      }
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  // Autoplay (only for desktop)
  useEffect(() => {
    if (itemsPerView > 1) {
      const timer = setInterval(() => {
        setCurrent((c) => (c + 1) % sectors.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [itemsPerView]);

  const prevSlide = () =>
    setCurrent((c) => (c - 1 + sectors.length) % sectors.length);
  const nextSlide = () => setCurrent((c) => (c + 1) % sectors.length);

  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <div className="relative w-full h-[70vh] flex items-center justify-center bg-gray-900">
        <Image
          src="/images/banner.jpg"
          alt="Renewable Energy"
          fill
          className="object-cover opacity-60"
        />
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Public Office{" "}
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-4 text-lg md:text-xl"
          >
            Building a sustainable future with clean energy solutions
          </motion.p>
        </div>
      </div>

      {/* Image + Text Section */}
      <section className=" mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-cente md:px-20">
        <div>
          <h2 className="text-3xl md:text-3xl font-bold  text-[#000080] ">
            Public Office{" "}
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6 mt-5">
            Building your dream office shouldn&apos;t be a nightmare. At
            Landsking Infra, we turn the complex process of creating a modern
            workspace into a simple, stress-free journey. We design and build
            flexible offices that not only reflect your brand&apos;s unique
            identity but also boost your team&apos;s productivity and
            well-being. <br />
            We manage the entire process, from BIM-based visualization and 3D
            walkthroughs to the final handover. This &quot;design to handover
            under one roof&quot; approach ensures timely delivery and cost
            transparency. Our dedicated in-house team handles every detail,
            ensuring your project complies with all major codes like NBC and
            ASHRAE. By focusing on employee wellness and sustainable operations,
            we create inspiring spaces where your people can thrive.
          </p>

          {/* <button className="mt-6 px-6 py-3 bg-[#000080] text-white font-medium rounded-lg shadow hover:bg-[#000060] transition">
            Read more
          </button> */}
          <a
            href="#"
            className="group relative border mt-6 border-blue-900 text-sm sm:text-lg tracking-wider text-black px-4 sm:px-5 py-2 font-semibold w-fit mx-auto sm:mx-0 overflow-hidden"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
              READ MORE
            </span>
            <span className="absolute left-0 top-0 h-full w-0 bg-[#000080] transition-all duration-500 ease-out group-hover:w-full"></span>
          </a>
        </div>

        <div className="flex justify-center">
          <div className="relative rounded-lg overflow-hidden shadow-lg w-full ">
            <Image
              src="/industry.jpg"
              alt="Office Sample"
              width={500}
              height={450}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Sectors Carousel */}
      <section className="text-center px-4 sm:px-6 md:px-20 pt-12 md:pt-16 bg-white">
        <section className="w-full py-8 md:pt-16 bg-white relative">
          <div className="mx-auto px-2 sm:px-4 relative">
            <h2 className="text-xl md:text-3xl font-bold text-start text-blue-900 mb-6">
              Sectors
            </h2>

            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              centeredSlides={false} // default false
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 0, centeredSlides: false },
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                  centeredSlides: true,
                },
                768: {
                  slidesPerView: 2.2,
                  spaceBetween: 24,
                  centeredSlides: true,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                  centeredSlides: true,
                },
              }}
            >
              {projects.map((projectsector) => (
                <SwiperSlide key={projectsector.id}>
                  {({ isActive }) => (
                    <div
                      className={`relative text-center transition-all duration-500 group ${
                        isActive ? "scale-105" : "scale-90 opacity-70"
                      }`}
                    >
                      <div className="relative w-full h-48 sm:h-56 md:h-64 flex justify-center">
                        <div className="relative w-full h-full">
                          <Image
                            src={projectsector.image}
                            alt={projectsector.title}
                            fill
                            className="object-cover w-full h-full rounded-lg"
                          />

                          {/* Bottom title bar */}
                          <div className="absolute bottom-0 w-full bg-blue-600/90 text-white py-2 text-center text-sm font-semibold">
                            {projectsector.title}
                          </div>

                          {/* Overlay */}
                          <div
                            onClick={() =>
                              handleOverlayToggle(projectsector.id)
                            }
                            className={`
                            absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-4 
                            rounded-lg transition-opacity duration-500 cursor-pointer
                            ${
                              activeOverlay === projectsector.id
                                ? "opacity-100"
                                : "opacity-0"
                            }
                            md:opacity-0 md:group-hover:opacity-100 md:cursor-default
                          `}
                          >
                            <h3 className="text-md md:text-sm font-semibold mb-2">
                              {projectsector.title}
                            </h3>
                            <p className="text-base md:text-xs mb-4 line-clamp-3">
                              {projectsector.description}
                            </p>
                            <button className="px-4 py-2 text-xs bg-white text-blue-700 font-semibold shadow-md hover:bg-gray-200 transition">
                              Know More
                            </button>
                          </div>

                          {/* Mobile arrows */}
                          <div className="custom-prev absolute top-1/2 left-2 -translate-y-1/2 z-30 bg-white/80 p-1  cursor-pointer md:hidden">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="#000080"
                              strokeWidth="1.5"
                            >
                              <line x1="20" y1="12" x2="4" y2="12" />
                              <polyline points="12 4 4 12 12 20" />
                            </svg>
                          </div>

                          <div className="custom-next absolute top-1/2 right-2 -translate-y-1/2 z-30 bg-white/80 p-1  cursor-pointer md:hidden">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="#1c398e"
                              strokeWidth="1.5"
                            >
                              <line x1="4" y1="12" x2="20" y2="12" />
                              <polyline points="12 4 20 12 12 20" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Desktop arrows */}
            <div className="custom-prev absolute top-1/2 -translate-y-1/2 left-2 md:-left-0 z-20 cursor-pointer hidden md:flex items-center justify-center rounded-full p-2 md:p-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:h-8 md:w-9"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#000080"
                strokeWidth="1.5"
              >
                <line x1="20" y1="12" x2="4" y2="12" />
                <polyline points="12 4 4 12 12 20" />
              </svg>
            </div>

            <div className="custom-next absolute top-1/2 -translate-y-1/2 right-2 md:-right-0 z-20 cursor-pointer hidden md:flex items-center justify-center rounded-full p-2 md:p-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:h-8 md:w-9"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#1c398e"
                strokeWidth="1.5"
              >
                <line x1="4" y1="12" x2="20" y2="12" />
                <polyline points="12 4 20 12 12 20" />
              </svg>
            </div>
          </div>
        </section>
      </section>
      <ContactSection />
      <Footer />
    </>
  );
}
