"use client";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import ServicesSlider from "yes/Components/ServicesSlider";
import Explore from "yes/Components/Explore";
import Footer from "../../Components/Footer";
import IndustrySlider from "yes/Components/IndustrySlider";
import Navbar from "yes/Components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import Heavysector from "yes/Components/Heavysector";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
const projects = [
  {
    id: 1,
    title: "Rejuve 360",
    status: "Ongoing",
    image: "/realstate/three.webp",
    location: "Mulund, Mumbai",
  },
  {
    id: 2,
    title: "West Square",
    status: "Ongoing",
    image: "/realstate/two.jpg",
    location: "Seawoods, Navi Mumbai",
  },
  {
    id: 3,
    title: "Veridian",
    status: "Completed",
    image: "/realstate/one.webp",
    location: "Powai, Mumbai",
  },
  {
    id: 4,
    title: "Veridian",
    status: "Completed",
    image: "/realstate/one.webp",
    location: "Powai, Mumbai",
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
    img: "/industry.jpg",
    buttonText: "VIEW MORE",
    url: "/epcsolutions",
  },
  {
    title: "Structural Engineering Services",
    headline: "Excellence in Structural Engineering",
    body: "Our expert engineers provide innovative structural design and analysis services.",
    img: "/fourth.png",
    buttonText: "VIEW MORE",
    url: "/structural-engineering",
  },
  {
    title: "Project Consultancy & Management",
    headline: "Trusted Project Consultancy & Management",
    body: "We provide end-to-end project consultancy and management services.",
    img: "/about.png",
    buttonText: "VIEW MORE",
    url: "/project-consultancy",
  },
];

const slides = [
  {
    title: "PRE ENGINEERED BUILDINGS",
    desc: "WE DELIVER HIGH PERFORMANCE PRE ENGINEERED STEEL BUILDINGS.",
    video: "/video.mp4",
    link: "/menupage",
  },
  {
    title: "EPC Solutions",
    desc: "Delivering end-to-end Engineering, Procurement, and Construction solutions.",
    video: "/video.mp4",
    link: "/epcsolutions",
  },
  {
    title: "Project Management Consultancy",
    desc: "Providing expert project management guidance.",
    video: "/video.mp4",
    link: "/project-management",
  },
  {
    title: "Structural Engineering Services",
    desc: "Offering innovative structural engineering solutions.",
    video: "/homeslider.mp4",
    link: "/solutionservice",
  },
];

const sectors = [
  {
    id: 1,
    title: "Buildings and Infrastructure",
    image: "/industry.jpg",
    url: "/manufacturing",
    description:
      "We deliver cutting-edge buildings and infrastructure solutions.",
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
    description:
      "Our engineering services cover every aspect of plant and product development.",
  },
  {
    id: 5,
    title: "Water",
    image: "/industry.jpg",
    url: "/water",
    description: "We provide advanced water management solutions.",
  },
];

export default function HeavyEngineering() {
  const router = useRouter();

  const [activeSlide, setActiveSlide] = useState(0);
  const [, setProgress] = useState(0);
  const [, setCurrent] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  const [active, setActive] = useState(0);
  const [underlineStyle, setUnderlineStyle] = useState<{
    width: number;
    left: number;
  }>({ width: 0, left: 0 });
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  useEffect(() => {
    setProgress(0);
    const progressTimer = setInterval(
      () => setProgress((prev) => Math.min(prev + 2, 100)),
      100
    );
    const slideTimer = setTimeout(
      () => setActiveSlide((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => {
      clearInterval(progressTimer);
      clearTimeout(slideTimer);
    };
  }, [activeSlide]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const updateItems = () => setItemsPerView(window.innerWidth < 768 ? 1 : 3);
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  useEffect(() => {
    if (itemsPerView > 1) {
      const timer = setInterval(
        () => setCurrent((c) => (c + 1) % sectors.length),
        5000
      );
      return () => clearInterval(timer);
    }
  }, [itemsPerView]);
  useEffect(() => {
    const el = tabRefs.current[active];
    if (el) {
      setUnderlineStyle({
        width: el.offsetWidth,
        left: el.offsetLeft,
      });

      if (window.innerWidth < 768) {
        el.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }
  }, [active]);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + sectors.length) % sectors.length);
  const nextSlide = () => setCurrent((c) => (c + 1) % sectors.length);
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[70vh] sm:h-[99vh] overflow-hidden">
        {/* Background Video */}
        <video
          src={slides[active].video}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Slide Content */}
        <div className="relative z-10 flex flex-col justify-center h-full  mx-auto px-6  text-left md:px-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[active].title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 leading-snug">
                {slides[active].title}
              </h1>
              <p className="text-base md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                {slides[active].desc}
              </p>

              <button
                onClick={() => router.push(slides[active].link)}
                className="px-6 py-3 bg-white text-[#000080] font-semibold rounded-md shadow-lg hover:bg-[#000080]  hover:text-white transition flex items-center gap-2"
              >
                <span>Learn More</span>
                <IoIosArrowForward className="w-5 h-5" />
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 w-full ">
          <div className="max-w-7xl mx-auto flex justify-center sm:justify-start gap-6 px-6 py-4 overflow-x-auto">
            {/* Desktop Tabs */}
            <div className="hidden sm:flex gap-6">
              {slides.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`pb-1 text-sm sm:text-base font-medium border-b-2 transition ${
                    active === i
                      ? "text-[#8080FF] border-[#8080FF]"
                      : "text-gray-300 border-transparent hover:text-white"
                  }`}
                >
                  {s.title}
                </button>
              ))}
            </div>

            {/* Mobile Dots */}
            <div className="flex sm:hidden justify-center w-full gap-2">
              {slides.map((_, i) => (
                <span
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full cursor-pointer transition ${
                    active === i ? "bg-#8080FF" : "bg-[#fff]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Heavysector />
      {/* Tabs */}
      <section className="w-full">
        {/* Top heading + subheading */}
        <div className="mx-auto px-4 pt-12 text-center">
          <h1 className="text-2xl text-[#000080] md:text-3xl font-bold tracking-tight">
            Comprehensive Infrastructure Solutions
          </h1>
          <p className="mt-4 text-[14px] font-light md:text-[16px] text-gray-600">
            From design and engineering to execution and management, we deliver
            integrated solutions that shape industries and build a stronger
            future.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-8">
          <div className="mx-auto px-4">
            <div className="relative">
              <div className="flex md:justify-center gap-4 md:gap-10 overflow-x-auto md:overflow-x-visible relative">
                {TABS.map((t, i) => (
                  <button
                    key={t.title}
                    ref={(el) => {
                      tabRefs.current[i] = el;
                    }}
                    onClick={() => setActive(i)}
                    className={`pb-3 font-medium whitespace-nowrap transition-colors
                         ${
                           active === i
                             ? "text-[#272727]"
                             : "text-gray-600 hover:text-[#000080]"
                         }
                         text-[13px] sm:text-sm md:text-[16px]`}
                  >
                    {t.title}
                  </button>
                ))}

                {/* Underline */}
                <span
                  className="absolute bottom-0 block h-0.5 bg-[#000080] transition-all duration-300"
                  style={underlineStyle}
                />
              </div>
              {/* <div className="h-px bg-gray-200 mt-0.5 w-full"></div> */}
            </div>
          </div>
        </div>

        {/* Content Card */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="mt-8 flex justify-center">
            <div className="relative rounded-[5px] overflow-hidden shadow-lg w-full md:w-[90%] lg:w-[80%]">
              <div className="relative w-full h-[340px] md:h-[460px]">
                <Image
                  src={TABS[active].img}
                  alt={TABS[active].title}
                  fill
                  priority
                  className="object-cover rounded-[5px]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent rounded-[5px]" />
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full p-6 md:p-10">
                    <div className="text-white text-center md:text-left mx-auto">
                      <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
                        {TABS[active].headline}
                      </h2>
                      <p className="mt-4 text-sm md:text-[15px] text-gray-200">
                        {TABS[active].body}
                      </p>
                      <button
                        className="mt-6 border border-[#fff] rounded-lg text-[13px] hover:bg-[#272727] text-white font-semibold px-4 py-2"
                        onClick={() => router.push(TABS[active].url)}
                      >
                        {TABS[active].buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* project slider */}
      <section className="w-full py-12 md:py-16 bg-white relative">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#000080] mb-8 md:mb-10">
          DISCOVER OUR PROJECTS
        </h2>

        <div className=" mx-auto sm:px-4 px-2 relative md:mx-25">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="pb-10" // ⬅️ niche dots ke liye jagah
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="text-center">
                  <h3 className="text-base md:text-lg font-semibold text-[#000080]">
                    {project.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 mb-2 md:mb-4">
                    ({project.status})
                  </p>

                  {/* Image + Button */}
                  <div className="relative w-full h-52 sm:h-60 md:h-64 flex justify-center">
                    <div className="relative w-[85%] sm:w-[90%] md:w-full h-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                      <button className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 bg-white text-[#000080] text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 border-2 border-blue-900 hover:bg-black hover:text-white transition">
                        KNOW MORE
                      </button>
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-gray-700 mt-2 md:mt-3">
                    {project.location}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation buttons */}
          <div className="custom-prev absolute left-2 md:-left-10 top-1/2 -translate-y-1/2 z-20 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12"
              fill="#000080"
              viewBox="0 0 24 24"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </div>
          <div className="custom-next absolute right-2 md:-right-10 top-1/2 -translate-y-1/2 z-20 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12"
              fill="#000080"
              viewBox="0 0 24 24"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
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
