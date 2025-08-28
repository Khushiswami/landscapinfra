"use client";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import IndustryHeader from "yes/Components/Industryheader";import ProjectSlider from "yes/Components/ProjectSlider";
import ServicesSlider from "yes/Components/ServicesSlider";
import Explore from "yes/Components/Explore";
import Footer from "../../Components/Footer";
import IndustrySlider from "yes/Components/IndustrySlider";
const projects = [
  {
    title: "Elixir Reserve",
    status: "Ongoing",
    img: "/slider/p1.jpg",
    location: "Powai, Mumbai",
  },
  {
    title: "The Gateway",
    status: "Ongoing",
    img: "/slider/p2.jpg",
    location: "Sewri, Mumbai",
  },
  {
    title: "77 Crossroads",
    status: "Ongoing",
    img: "/slider/p3.jpg",
    location: "Ghatkopar, Mumbai",
  },
  {
    title: "Emerald Heights",
    status: "Ongoing",
    img: "/slider/p4.jpg",
    location: "Andheri, Mumbai",
  },
  {
    title: "Sunrise Towers",
    status: "Ongoing",
    img: "/slider/p5.webp",
    location: "Thane, Mumbai",
  },
  {
    title: "Sunrise Towers",
    status: "Ongoing",
    img: "/slider/p7.png",
    location: "Thane, Mumbai",
  },
];

const TABS = [
  {
    title: "Pre Engineered Buildings",
    headline: "High-Performance Pre-Engineered Steel Buildings",
    body: "LandsKingInfra Pvt. Ltd. delivers modern, durable, and cost-efficient pre-engineered buildings.",
    img: "/about.png",
    buttonText: "VIEW MORE",
    url: "/menupage",
  },
  {
    title: "EPC Solutions",
    headline: "End-to-End EPC Solutions",
    body: "From concept to commissioning, our EPC solutions ensure seamless project execution.",
    img: "/solution/stell.jpg",
    buttonText: "VIEW MORE",
    url: "/epcsolutions",
  },
  {
    title: "Structural Engineering Services",
    headline: "Excellence in Structural Engineering",
    body: "Our expert engineers provide innovative structural design and analysis services.",
    img: "/industry.png",
    buttonText: "VIEW MORE",
    url: "/structural-engineering",
  },
  {
    title: "Project Consultancy & Management",
    headline: "Trusted Project Consultancy & Management",
    body: "We provide end-to-end project consultancy and management services.",
    img: "/project.jpg",
    buttonText: "VIEW MORE",
    url: "/project-consultancy",
  },
];

const slides = [
  {
    title: "PRE ENGINEERED BUILDINGS",
    description: "WE DELIVER HIGH PERFORMANCE PRE ENGINEERED STEEL BUILDINGS.",
    video: "/video.mp4",
    url: "/menupage",
  },
  {
    title: "EPC Solutions",
    description: "Delivering end-to-end Engineering, Procurement, and Construction solutions.",
    video: "/video.mp4",
    url: "/epcsolutions",
  },
  {
    title: "Project Management Consultancy",
    description: "Providing expert project management guidance.",
    video: "/video.mp4",
    url: "/project-management",
  },
  {
    title: "Structural Engineering Services",
    description: "Offering innovative structural engineering solutions.",
    video: "/homeslider.mp4",
    url: "/solutionservice",
  },
];


const sectors = [
  {
    id: 1,
    title: "Buildings and Infrastructure",
    image: "/industry.jpg",
    url: "/manufacturing",
    description: "We deliver cutting-edge buildings and infrastructure solutions.",
  },
  {
    id: 2,
    title: "Warehouses",
    image: "/industry.jpg",
    url: "/urban",
    description: "We construct modern warehouses optimized for logistics.",
  },
  {
    id: 3,
    title: "Building Information Modeling",
    image: "/industry.jpg",
    url: "/advanced",
    description: "We leverage BIM to transform construction workflows.",
  },
  {
    id: 4,
    title: "PLANT & PRODUCT ENGINEERING SERVICES",
    image: "/industry.jpg",
    url: "/oil",
    description: "Our engineering services cover every aspect of plant and product development.",
  },
  {
    id: 5,
    title: "Water",
    image: "/industry.jpg",
    url: "/water",
    description: "We provide advanced water management solutions.",
  },
];

const stats = [
  { number: "4,000+", label: "employees" },
  { number: "250+", label: "active projects" },
  { number: "17", label: "states with active projects" },
  { number: "15+", label: "years in business" },
  { number: "$7.4", label: "billion in projected annual revenue" },
];

export default function HeavyEngineering() {
  const router = useRouter();

  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [current, setCurrent] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  useEffect(() => {
    setProgress(0);
    const progressTimer = setInterval(() => setProgress((prev) => Math.min(prev + 2, 100)), 100);
    const slideTimer = setTimeout(() => setActiveSlide((prev) => (prev + 1) % slides.length), 5000);
    return () => {
      clearInterval(progressTimer);
      clearTimeout(slideTimer);
    };
  }, [activeSlide]);

  useEffect(() => {
    const updateItems = () => setItemsPerView(window.innerWidth < 768 ? 1 : 3);
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  useEffect(() => {
    if (itemsPerView > 1) {
      const timer = setInterval(() => setCurrent((c) => (c + 1) % sectors.length), 5000);
      return () => clearInterval(timer);
    }
  }, [itemsPerView]);

  const prevSlide = () => setCurrent((c) => (c - 1 + sectors.length) % sectors.length);
  const nextSlide = () => setCurrent((c) => (c + 1) % sectors.length);

  return (
    <>
      <IndustryHeader/>

      {/* Hero Section */}
     <div className="relative w-full h-[70vh] sm:h-[100vh] overflow-hidden">
  {/* Background Video */}
  <video
    key={slides[activeSlide].video}
    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
    autoPlay
    loop
    muted
  >
    <source src={slides[activeSlide].video} type="video/mp4" />
  </video>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-8 md:px-20 text-white">
    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug sm:leading-tight max-w-full md:max-w-3xl">
      {slides[activeSlide].title}
    </h1>
    <p className="mt-3 text-sm sm:text-base md:text-lg max-w-full md:max-w-2xl">
      {slides[activeSlide].description}
    </p>

    {/* Learn More button → redirect */}
    <button
      onClick={() => router.push(slides[activeSlide].url)} // ✅ redirect
      className="hidden sm:inline-block mt-5 mb-8 sm:mb-10 w-fit sm:max-w-[50%] md:max-w-[20%] px-5 sm:px-6 py-2 text-sm sm:text-base font-semibold text-blue-600 bg-white rounded-full shadow-md hover:bg-blue-100 transition"
    >
      Learn more
    </button>

    {/* Bottom Tabs */}
    <div className="absolute bottom-0 left-0 right-0 flex flex-col sm:flex-row gap-3 sm:gap-6 px-4 sm:px-8 md:px-20 pb-6">
      {slides.map((slide, index) => (
        <div key={index} className="relative w-full sm:w-auto">
          {activeSlide === index && (
            <div
              className="absolute -top-1 left-0 h-1 bg-blue-500 rounded"
              style={{
                width: `${progress}%`,
                transition: "width 0.1s linear",
              }}
            ></div>
          )}
          <button
            onClick={() => {
              setActiveSlide(index); // ✅ switch immediately
              setProgress(0);        // ✅ reset progress
            }}
            className={`pt-4 sm:pt-8 text-left sm:text-center transition-all duration-300 break-words 
              ${
                activeSlide === index
                  ? "text-white"
                  : "text-white/80 hover:text-white"
              }`}
          >
            {slide.title}
          </button>
        </div>
      ))}
    </div>
  </div>
</div>

      {/* Sectors */}
      <div className="w-full py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Sectors</h2>
          <div className="relative overflow-hidden">
            {itemsPerView > 1 ? (
              <motion.div className="flex transition-transform duration-700" style={{ transform: `translateX(-${current * (100 / itemsPerView)}%)` }}>
                {sectors.map((sector) => (
                  <div key={sector.id} className="px-2" style={{ minWidth: `${100 / itemsPerView}%` }}>
                    <div className="relative group overflow-hidden rounded-lg cursor-pointer">
                      <img src={sector.image} alt={sector.title} className="w-full h-60 object-cover" />
                      <div className="absolute bottom-0 w-full bg-blue-600/90 text-white py-2 text-center text-sm font-semibold">
                        {sector.title}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <div className="flex justify-center">
                <img src={sectors[current].image} alt={sectors[current].title} className="w-full h-60 object-cover rounded-lg" />
              </div>
            )}
            <button onClick={prevSlide} className="absolute top-1/2 left-2 -translate-y-1/2 bg-white rounded-full p-2">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={nextSlide} className="absolute top-1/2 right-2 -translate-y-1/2 bg-white rounded-full p-2">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <section className="w-full">
        <div className="max-w-4xl mx-auto px-4 pt-12 text-center">
          <h1 className="text-3xl text-[#000080] font-semibold">Comprehensive Infrastructure Solutions</h1>
          <p className="mt-4 text-base text-gray-600">From design and engineering to execution and management.</p>
        </div>
        <div className="mt-8">
          <div className="max-w-5xl mx-auto px-4 flex gap-6 overflow-x-auto">
            {TABS.map((t, i) => (
              <button key={t.title} onClick={() => setActiveTab(i)} className={`pb-3 ${activeTab === i ? "text-[#272727]" : "text-gray-600"}`}>
                {t.title}
              </button>
            ))}
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-8">
          <div className="relative rounded-xl overflow-hidden shadow-lg h-[340px] md:h-[460px]">
            <Image src={TABS[activeTab].img} alt={TABS[activeTab].title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
              <div className="p-10 text-white">
                <h2 className="text-2xl md:text-3xl font-semibold">{TABS[activeTab].headline}</h2>
                <p className="mt-4 text-sm md:text-base">{TABS[activeTab].body}</p>
                <button onClick={() => router.push(TABS[activeTab].url)} className="mt-6 bg-[#000080] text-white px-4 py-2 rounded-md">
                  {TABS[activeTab].buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* project slider */}
 <section className="py-12 relative">
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-blue-900 mb-8">
        DISCOVER OUR PROJECTS
      </h2>

      <div className="relative max-w-6xl mx-auto px-12">
        {/* ✅ Swiper only mounts on client */}
        {isMounted && (
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            slidesPerGroup={1}
            loop={true}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // @ts-expect-error: Swiper types don’t include navigation refs directly
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-expect-error: Swiper types don’t include navigation refs directly
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              0: { slidesPerView: 1, slidesPerGroup: 1 },
              768: { slidesPerView: 2, slidesPerGroup: 1 },
              1024: { slidesPerView: 3, slidesPerGroup: 1 },
            }}
          >
            {projects.map((project, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-lg font-semibold text-blue-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-2">
                    ({project.status})
                  </p>
                  <div className="relative w-full h-[300px] overflow-hidden rounded shadow">
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <button className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white border border-blue-700 text-blue-700 font-semibold px-4 py-1 text-sm hover:bg-blue-700 hover:text-white transition">
                      KNOW MORE
                    </button>
                  </div>
                  <p className="mt-3 text-gray-700">{project.location}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Left Arrow */}
        <div
          ref={prevRef}
          className="absolute top-1/2 -left-2 -translate-y-1/2 bg-blue-900 text-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-blue-700 transition z-10"
        >
          ◀
        </div>

        {/* Right Arrow */}
        <div
          ref={nextRef}
          className="absolute top-1/2 -right-2 -translate-y-1/2 bg-blue-900 text-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-blue-700 transition z-10"
        >
          ▶
        </div>
      </div>
    </section>
{/* end project slider */}
      <IndustrySlider />
      <ServicesSlider />
      <Explore />
      <Footer />
    </>
  );
}
