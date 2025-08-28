"use client";
import { useState, useEffect } from "react";
import Footer from "yes/Components/Footer";
import Pebheader from "yes/Components/Pebheader";

import ContactSection from "yes/Components/ContactSection";

type Project = {
  id: number;
  img: string;
  location: string;
};

const projects: Project[] = [
  { id: 1, img: "/industry.jpg", location: "MaharajSagar Warehouse, Lohati" },
  { id: 2, img: "/realstate.png", location: "Baba Warehouse, Pipariya" },
  { id: 3, img: "/new1.png", location: "Maa Narmada Ware House, Pipriya" },
  {
    id: 4,
    img: "/industry.jpg",
    location: "Devisingh Patel Ware House, Raisen",
  },
  { id: 5, img: "/industry.jpg", location: "Maa Narmada Ware House, Pipriya" },
  {
    id: 6,
    img: "/industry.jpg",
    location: "Devisingh Patel Ware House, Raisen",
  },
  { id: 7, img: "/industry.jpg", location: "Astik Agro Marketing, Hosangabad" },
  { id: 8, img: "/industry.jpg", location: "ShreeSai Ware House, Tikamgargh" },
  { id: 9, img: "/industry.jpg", location: "Goverdhan WareHouse, Pipriya" },
  {
    id: 10,
    img: "/industry.jpg",
    location: "100 ft Clear Span Panchotiya Warehouse, Kasrawad",
  },
  { id: 11, img: "/industry.jpg", location: "Maanpurna Warehouse, Nalkheda" },
  { id: 12, img: "/industry.jpg", location: "Agrawal Logistic Park, Dewas" },
  {
    id: 13,
    img: "/industry.jpg",
    location: "Trivani Crop Science Pvt Ltd, Factory Shed, Bhopal MP",
  },
  {
    id: 14,
    img: "/industry.jpg",
    location: "100X245 Clear 100ft Span, Ringnod Warehouse, Dhar",
  },
  {
    id: 15,
    img: "/industry.jpg",
    location: "Reva Rice Mill Warehouse, Udaipura MP",
  },
  {
    id: 16,
    img: "/industry.jpg",
    location: "Mekal Food Products Pvt Ltd (Rice Mill, 120MT), Udaipura MP",
  },
  { id: 17, img: "/industry.jpg", location: "PMAY, Indore" },
  {
    id: 18,
    img: "/industry.jpg",
    location: "Kundaliyalift Irrigation, Nalkheda",
  },
  {
    id: 19,
    img: "/industry.jpg",
    location: "DFCC Site Tata Project, Ankleshwar, Gujarat",
  },
  { id: 20, img: "/industry.jpg", location: "ROB, Hoshangabad MP" },
  {
    id: 21,
    img: "/industry.jpg",
    location: "O2 Power, 200MW Solar Pilework, Agar MP",
  },
  {
    id: 22,
    img: "/industry.jpg",
    location: "TATA Steel Plant, Kaling Nagar, Odisha",
  },
  {
    id: 23,
    img: "/industry.jpg",
    location: "TATA Steel Plant, Kaling Nagar, Odisha",
  },
  {
    id: 24,
    img: "/industry.jpg",
    location: "Praj Industries Ltd, Kandala Port, Gujarat",
  },
];

const slides = [
  {
    title: "PRE ENGINEERED BUILDINGS",
    description: "WE DELIVER HIGH PERFORMANCE PRE ENGINEERED STEEL BUILDINGS.",
    video: "/video.mp4",
  },
  {
    title: "EPC Solutions",
    description:
      "Delivering end-to-end Engineering, Procurement, and Construction solutions, we turn ambitious visions into iconic structures with precision and innovation.",
    video: "/video.mp4",
  },
  {
    title: "Project Management Consultancy",
    description:
      "Providing expert project management guidance, we ensure projects are delivered on time, within budget, and to the highest standards of quality.",
    video: "/video.mp4",
  },
  {
    title: "Structural Engineering Services",
    description:
      "Offering innovative structural engineering solutions, we design safe, durable, and efficient frameworks that form the backbone of iconic projects.",
    video: "/homeslider.mp4",
  },
];

export default function Projects() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 12;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handleClick = (id: number) => {
    setSelectedId(id === selectedId ? null : id);
  };

  useEffect(() => {
    setProgress(0);

    const progressTimer = setInterval(() => {
      setProgress((prev) => Math.min(prev + 2, 100));
    }, 100);

    const slideTimer = setTimeout(() => {
      setActive((prevActive) => (prevActive + 1) % slides.length);
    }, 5000);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(slideTimer);
    };
  }, [active]);

  // Calculate projects to show on current page
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  // Pagination controls
  const goToPage = (page: number) => {
    if (page < 1) page = 1;
    else if (page > totalPages) page = totalPages;
    setCurrentPage(page);
    setSelectedId(null); // reset selection on page change
  };

  return (
    <>
      <Pebheader />
      <div className="relative w-full h-[70vh] sm:h-[100vh] overflow-hidden">
        {/* Background Video */}
        <video
          key={slides[active].video}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          autoPlay
          loop
          muted
        >
          <source src={slides[active].video} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-8 md:px-20 text-white">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug sm:leading-tight max-w-full md:max-w-3xl">
            {slides[active].title}
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg max-w-full md:max-w-2xl">
            {slides[active].description}
          </p>

          <button className="mt-5 mb-8 sm:mb-10 w-fit sm: max-w-[50%] md:max-w-[20%] inline-block px-5 sm:px-6 py-2 text-sm sm:text-base font-semibold text-blue-600 bg-white rounded-full shadow-md hover:bg-blue-100 transition">
            Learn more
          </button>

          {/* Tabs with blue progress bar */}
          <div className="absolute bottom-0 left-0 right-0 flex flex-col sm:flex-row gap-3 sm:gap-6 px-4 sm:px-8 md:px-20 pb-6">
            {slides.map((slide, index) => (
              <div key={index} className="relative w-full sm:w-auto">
                {active === index && (
                  <div
                    className="absolute -top-1 left-0 h-1 bg-blue-500 rounded"
                    style={{
                      width: `${progress}%`,
                      transition: "width 0.1s linear",
                    }}
                  ></div>
                )}
                <button
                  onClick={() => setActive(index)}
                  className={`pt-4 sm:pt-8 text-left sm:text-center transition-all duration-300 break-words 
              ${
                active === index
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

      {/* Projects grid */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {currentProjects.map(({ id, img, location }) => (
            <div
              key={id}
              className="relative cursor-pointer overflow-hidden rounded-md shadow-md"
              onClick={() => handleClick(id)}
            >
              <img
                src={img}
                alt={location}
                className={`w-full h-48 object-cover transition-transform duration-300 ${
                  selectedId === id ? "scale-105" : ""
                }`}
              />
              <div
                className={`absolute inset-0 flex items-center justify-center text-white text-xl font-semibold
          transition-opacity duration-500
          bg-[#000080] ${
            selectedId === id
              ? "bg-opacity-40 opacity-50"
              : "bg-opacity-0 opacity-0"
          }`}
                style={{ pointerEvents: selectedId === id ? "auto" : "none" }}
              >
                {location}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 space-x-3">
          {/* <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded bg-blue-600 text-white disabled:bg-gray-400"
          >
            Prev
          </button> */}
          {[...Array(totalPages)].map((_, idx) => {
            const pageNum = idx + 1;
            return (
              <button
                key={pageNum}
                onClick={() => goToPage(pageNum)}
                className={`px-3 py-1 rounded ${
                  currentPage === pageNum
                    ? "bg-black text-white"
                    : "bg-[#000080] text-white hover:[bg-#000080]"
                }`}
              >
                {pageNum}
              </button>
            );
          })}
          {/* <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded bg-blue-600 text-white disabled:bg-gray-400"
          >
            Next
          </button> */}
        </div>
      </div>

      <ContactSection />

      <Footer />
    </>
  );
}
