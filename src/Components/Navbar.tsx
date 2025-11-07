"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  EnvelopeIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [rightImage, setRightImage] = useState("/service.jpg"); // default img
  const [language, setLanguage] = useState("EN");

  // toggle dropdown
  const handleDropdownClick = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
    setRightImage("/service.jpg");
  };
  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  // update preview image
  const handleImageChange = (imgPath: string) => {
    setRightImage(imgPath);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md text-black transition-all duration-300">
      <div className="mx-auto flex items-center justify-between px-4 py-3 md:px-19">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/finallogo.png" alt="Logo" className="h-15 w-auto" />
        </Link>
        {/* Mobile Icons */}
        <div className="flex items-center space-x-3 md:hidden">
          <button>
            <MagnifyingGlassIcon className="h-6 w-6 hover:opacity-80" />
          </button>
          <button>
            <EnvelopeIcon className="h-6 w-6 hover:opacity-80" />
          </button>
          <button
            onClick={() => setLanguage(language === "EN" ? "AR" : "EN")}
            className="px-2 py-1 border rounded text-sm "
          >
            {language}
          </button>
        </div>
        <nav className="hidden capitalize xl:flex items-center space-x-6 font-medium text-lg xl:text-xl relative">
          <Link href="/" className="hover:opacity-80">
            Home
          </Link>

          {/* Industry Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleDropdownClick("industry")}
              className="flex items-center hover:opacity-80"
            >
              Industry
              {openDropdown === "industry" ? (
                <ChevronUpIcon className="h-4 w-4 inline ml-1" />
              ) : (
                <ChevronDownIcon className="h-4 w-4 inline ml-1" />
              )}
            </button>
            {openDropdown === "industry" && (
              <div
                onMouseLeave={() => setOpenDropdown(null)}
                className="fixed left-1/2 top-[85px] mb-10 transform -translate-x-1/2 bg-[#0a2351] shadow-lg rounded-lg w-[1300px] flex z-50"
              >
                {/* Left Section */}
                <div className="w-1/3 text-white p-6 space-y-4">
                  <button
                    onMouseEnter={() =>
                      handleImageChange("/home/industry installation.jpeg")
                    }
                    onClick={() =>
                      (window.location.href = "/industryinstallation")
                    }
                    className="hover:text-[#8080FF] block text-left w-full"
                  >
                    Industry Installation
                  </button>
                  <button
                    onMouseEnter={() => handleImageChange("/engineer.jpg")}
                    onClick={() => (window.location.href = "/rnd")}
                    className="hover:text-[#8080FF] block text-left w-full"
                  >
                    Engineering R&amp;D
                  </button>
                </div>

                {/* Middle Section */}
                <div className="w-1/3 bg-[#1f3f73] text-white p-6 space-y-4 rounded-md">
                  <button
                    onMouseEnter={() => handleImageChange("/renewable.jpg")}
                    onClick={() => (window.location.href = "/renewableenergy")}
                    className="hover:text-[#8080FF] block text-left w-full"
                  >
                    Renewable Energy
                  </button>
                  <button
                    onMouseEnter={() => handleImageChange("/pebone.jpeg")}
                    onClick={() =>
                      (window.location.href = "/preEngineeredBuildings")
                    }
                    className="hover:text-[#8080FF] block text-left w-full"
                  >
                    Pre Engineered Building
                  </button>
                  <button
                    onMouseEnter={() =>
                      handleImageChange("/home/real estate.jpeg")
                    }
                    onClick={() =>
                      (window.location.href = "/realStateDevlopment")
                    }
                    className="hover:text-[#8080FF] block text-left w-full"
                  >
                    Real Estate Development
                  </button>
                </div>

                {/* Right Image Section */}
                <div className="w-1/3 bg-[#2e69c2] p-4 pt-5 pr-8 flex flex-col justify-between text-white">
                  <img
                    src={rightImage}
                    alt="Dynamic Preview"
                    className="rounded-md object-cover h-54 w-full mb-4"
                  />
                  <div></div>
                </div>
              </div>
            )}
          </div>

          {/* Expertise Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleDropdownClick("expertise")}
              className="flex items-center hover:opacity-80"
            >
              Expertise
              {openDropdown === "expertise" ? (
                <ChevronUpIcon className="h-4 w-4 inline ml-1" />
              ) : (
                <ChevronDownIcon className="h-4 w-4 inline ml-1" />
              )}
            </button>
            {openDropdown === "expertise" && (
              <div
                onMouseLeave={() => setOpenDropdown(null)}
                className="fixed left-1/2 top-[85px] mb-20 pb-10 transform -translate-x-1/2 bg-[#0a2351] text-white shadow-lg rounded-lg w-[1300px] flex z-50"
              >
                {/* Expertise content */}
                <div className="w-1/3 text-white p-10 space-y-3">
                  <button
                    onMouseEnter={() =>
                      handleImageChange(
                        "/expertiseimages/Heavy Engineering.jpg"
                      )
                    }
                    onClick={() => (window.location.href = "/heavyengineering")}
                    className="hover:text-[#8080FF] block text-left w-full"
                  >
                    Heavy Engineering
                  </button>
                  <button
                    onMouseEnter={() => handleImageChange("/new5.jpg")}
                    onClick={() => (window.location.href = "/officespace")}
                    className="hover:text-[#8080FF] block text-left w-full"
                  >
                    Office Space
                  </button>
                  <button
                    onMouseEnter={() => handleImageChange("/new4.jpg")}
                    onClick={() => (window.location.href = "/publicoffice")}
                    className="hover:text-[#8080FF] block text-left w-full"
                  >
                    Public Office
                  </button>
                  <button
                    onMouseEnter={() =>
                      handleImageChange("/industryhome/water.jpeg")
                    }
                    onClick={() =>
                      (window.location.href = "/waterinfrastructure")
                    }
                    className="hover:text-[#8080FF] block text-left w-full"
                  >
                    Water Infrastructure
                  </button>
                  <button
                    onMouseEnter={() =>
                      handleImageChange(
                        "//expertiseimages/STRUCTURAL ENGINEERING SERVICES.jpg"
                      )
                    }
                    onClick={() =>
                      (window.location.href = "/industrybuildingsolutions")
                    }
                    className="hover:text-[#8080FF] block text-left w-full"
                  >
                    Industry Building Solutions
                  </button>
                  <button
                    onMouseEnter={() =>
                      handleImageChange("/water/Green Building Solutions.jpg")
                    }
                    onClick={() => (window.location.href = "/greenbuilding")}
                    className="hover:text-[#8080FF] block text-left w-full"
                  >
                    Green Building
                  </button>
                  <button
                    onMouseEnter={() =>
                      handleImageChange("/expertiseimages/Mining Metals.jpg")
                    }
                    onClick={() => (window.location.href = "/miningandmetals")}
                    className="hover:text-[#8080FF] block text-left w-full"
                  >
                    Mining and Metals
                  </button>
                </div>

                <div className="w-1/3 bg-[#1f3f73] text-white p-6 space-y-3 rounded-md">
                  <button
                    onMouseEnter={() => handleImageChange("/simulation.jpeg")}
                    onClick={() =>
                      (window.location.href = "/simulationservice")
                    }
                    className="hover:text-[#8080FF] block text-left w-full"
                  >
                    Simulation Service
                  </button>
                  <button
                    onMouseEnter={() =>
                      handleImageChange(
                        "/expertiseimages/Factories Installation.jpg"
                      )
                    }
                    onClick={() => (window.location.href = "/otherindustries")}
                    className="hover:text-[#8080FF] block text-left w-full"
                  >
                    Other Industries
                  </button>
                  <button
                    onMouseEnter={() =>
                      handleImageChange(
                        "/expertiseimages/Cold Storage and warehouse.jpg"
                      )
                    }
                    onClick={() =>
                      (window.location.href = "/expertisecoldstorage")
                    }
                    className="hover:text-[#8080FF] block text-left w-full"
                  >
                    Cold Storage &amp; Warehouse
                  </button>
                  <button
                    onMouseEnter={() =>
                      handleImageChange(
                        "/expertiseimages/Solar Plant Installation.jpg"
                      )
                    }
                    onClick={() => (window.location.href = "/solar")}
                    className="hover:text-[#8080FF] block text-left w-full"
                  >
                    Solar Services
                  </button>
                  <button
                    onMouseEnter={() =>
                      handleImageChange("/expertiseimages/HVAC.jpg")
                    }
                    onClick={() => (window.location.href = "/hvac")}
                    className="hover:text-[#8080FF] block text-left w-full"
                  >
                    HVAC Services
                  </button>
                  <button
                    onMouseEnter={() =>
                      handleImageChange("/expertisecoldstorage")
                    }
                    onClick={() => (window.location.href = "/fabrication")}
                    className="hover:text-[#8080FF] block text-left w-full"
                  >
                    Fabrication
                  </button>
                  <button
                    onMouseEnter={() => handleImageChange("/industry.jpg")}
                    onClick={() => (window.location.href = "/firesaftey")}
                    className="hover:text-[#8080FF] block text-left w-full"
                  >
                    Fire Safety
                  </button>
                </div>

                <div className="w-1/3 bg-[#2e69c2] p-7 pr-8 flex flex-col justify-between text-white">
                  <img
                    src={rightImage}
                    alt="Dynamic Preview"
                    className="rounded-md object-cover h-59 w-full mb-4"
                  />
                  <div></div>
                </div>
              </div>
            )}
          </div>

          {/* Projects */}
          <Link href="/projects" className="hover:opacity-80">
            Projects
          </Link>

          {/* Insights */}
          <div className="relative">
            <button
              onClick={() => handleDropdownClick("insights")}
              className="flex items-center hover:opacity-80"
            >
              Insights
              {openDropdown === "insights" ? (
                <ChevronUpIcon className="h-4 w-4 inline ml-1" />
              ) : (
                <ChevronDownIcon className="h-4 w-4 inline ml-1" />
              )}
            </button>
            {openDropdown === "insights" && (
              <div
                onMouseLeave={() => setOpenDropdown(null)}
                className="fixed left-0 top-[85px] w-full py-10 bg-[#0a2351] text-white shadow-lg rounded-none z-50 border-t border-gray-100"
              >
                <div className="grid grid-cols-4 gap-6 text-center">
                  <Link href="/careers" className="hover:text-[#8080FF]">
                    Careers
                  </Link>
                  <Link href="/blogs" className="hover:text-[#8080FF]">
                    Blogs
                  </Link>
                  <Link href="/whitepapers" className="hover:text-[#8080FF]">
                    Whitepapers
                  </Link>
                  <Link href="/brochures" className="hover:text-[#8080FF]">
                    Brochures
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* About */}
          <div className="relative">
            <button
              onClick={() => handleDropdownClick("about")}
              className="flex items-center hover:opacity-80"
            >
              About
              {openDropdown === "about" ? (
                <ChevronUpIcon className="h-4 w-4 inline ml-1" />
              ) : (
                <ChevronDownIcon className="h-4 w-4 inline ml-1" />
              )}
            </button>
            {openDropdown === "about" && (
              <div
                onMouseLeave={() => setOpenDropdown(null)}
                className="fixed left-0 top-[85px] w-full py-10 bg-[#0a2351] text-white shadow-lg rounded-none z-50 border-t border-gray-100"
              >
                <div className="grid grid-cols-4 gap-6 text-center">
                  <Link href="/mission" className="hover:text-[#8080FF]">
                    Mission
                  </Link>
                  <Link href="/leadership" className="hover:text-[#8080FF]">
                    Leadership
                  </Link>
                  <Link href="/innovation" className="hover:text-[#8080FF]">
                    Innovation
                  </Link>
                  <Link href="/company" className="hover:text-[#8080FF]">
                    History
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>
        {/* Desktop Right Icons */}
        {/* <div className="hidden md:flex items-center space-x-4"> */}
        <div className="hidden xl:flex items-center space-x-4">
          <button>
            <MagnifyingGlassIcon className="h-6 w-6 hover:opacity-80" />
          </button>
          <button>
            <EnvelopeIcon className="h-6 w-6 hover:opacity-80" />
          </button>
          <button
            onClick={() => setLanguage(language === "EN" ? "AR" : "EN")}
            className="px-2 py-1 border rounded text-sm "
          >
            {language}
          </button>
          <Link
            href="/contact"
            className="bg-[#000080] text-white px-4 py-2 rounded hover:bg-black font-semibold"
          >
            CONTACT US
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="xl:hidden text-black"
        >
          {menuOpen ? (
            <XMarkIcon className="h-7 w-7" />
          ) : (
            <Bars3Icon className="h-7 w-7" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="xl:hidden bg-[#000080] text-white px-4 py-4 shadow-lg max-h-screen overflow-auto">
          <Link
            href="/"
            className="block py-2 border-b border-gray-200 hover:text-[#8080FF]"
          >
            HOME
          </Link>

          {/* Industries collapsible */}
          <div className="border-b border-gray-200 py-2">
            <button
              onClick={() => toggleDropdown("industries")}
              className="w-full text-left font-semibold flex justify-between items-center"
            >
              INDUSTRIES
              <span>
                {openDropdown === "industries" ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </span>{" "}
            </button>

            {openDropdown === "industries" && (
              <ul className="pl-4 mt-2 space-y-1">
                <li>
                  <Link
                    href="/industryinstallation"
                    className="block  hover:text-[#8080FF] px-2 py-1 rounded"
                  >
                    Industry Installation and Construction
                  </Link>
                </li>
                <li>
                  <Link
                    href="/preEngineeredBuildings"
                    className="block   hover:text-[#8080FF] px-2 py-1 rounded"
                  >
                    Pre Engineered Building
                  </Link>
                </li>{" "}
                <li>
                  <Link
                    href="/rnd"
                    className="block  hover:text-[#8080FF] px-2 py-1 rounded"
                  >
                    Engineering R&D
                  </Link>
                </li>{" "}
                <li>
                  <Link
                    href="/renewableenergy"
                    className="block  hover:text-[#8080FF] px-2 py-1 rounded"
                  >
                    Renewable Energy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/realStateDevlopment"
                    className="block   hover:text-[#8080FF] px-2 py-1 rounded"
                  >
                    Real EState Development
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {/* Expertise collapsible */}
          <div className="border-b border-gray-200 py-2">
            <button
              onClick={() => toggleDropdown("expertise")}
              className="w-full text-left font-semibold flex justify-between items-center"
            >
              EXPERTISE
              <span>
                {openDropdown === "industries" ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </span>{" "}
            </button>

            {openDropdown === "expertise" && (
              <ul className="pl-4 mt-2 space-y-1">
                <li>
                  <Link
                    href="/heavyengineering"
                    className="block px-4 py-2  hover:text-[#8080FF]"
                  >
                    Heavy Engineering
                  </Link>
                </li>
                <li>
                  <Link
                    href="/officespace"
                    className="block px-4 py-2  hover:text-[#8080FF]"
                  >
                    Office Space
                  </Link>
                </li>
                <li>
                  <Link
                    href="/publicoffice"
                    className="block px-4 py-2  hover:text-[#8080FF]"
                  >
                    Public Office
                  </Link>
                </li>
                <li>
                  <Link
                    href="/waterinfrastructure"
                    className="block px-4 py-2  hover:text-[#8080FF]"
                  >
                    Water Infrastructure
                  </Link>
                </li>
                <li>
                  <Link
                    href="/structuralsteel"
                    className="block px-4 py-2  hover:text-[#8080FF]"
                  >
                    Industry Building Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/otherindustries"
                    className="block px-4 py-2  hover:text-[#8080FF]"
                  >
                    Other Industries
                  </Link>
                </li>
                <li>
                  <Link
                    href="/simulationservice"
                    className="block px-4 py-2  hover:text-[#8080FF]"
                  >
                    Simulation Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fabrication"
                    className="block px-4 py-2  hover:text-[#8080FF]"
                  >
                    Fabrication
                  </Link>
                </li>
                <li>
                  <Link
                    href="/firesaftey"
                    className="block px-4 py-2  hover:text-[#8080FF]"
                  >
                    Fire Safety
                  </Link>
                </li>
                <li>
                  <Link
                    href="/greenbuilding"
                    className="block px-4 py-2  hover:text-[#8080FF]"
                  >
                    Green Building
                  </Link>
                </li>
                <li>
                  <Link
                    href="/miningandmetals"
                    className="block px-4 py-2  hover:text-[#8080FF]"
                  >
                    Mining and Metals
                  </Link>
                </li>
                <li>
                  <Link
                    href="/expertisecoldstorage"
                    className="block px-4 py-2  hover:text-[#8080FF]"
                  >
                    Cold Storage &amp; Warehouse
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solar"
                    className="block px-4 py-2  hover:text-[#8080FF]"
                  >
                    Solar Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/hvac"
                    className="block px-4 py-2  hover:text-[#8080FF]"
                  >
                    HVAC Services
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <Link
            href="/projects"
            className="block py-2 border-b border-gray-200 hover:text-[#8080FF]"
          >
            PROJECTS
          </Link>
          <Link
            href="#"
            className="block py-2 border-b border-gray-200 hover:text-[#8080FF]"
          >
            INSIGHTS
          </Link>
          <Link
            href="#"
            className="block py-2 border-b border-gray-200 hover:text-[#8080FF]"
          >
            MEDIA
          </Link>
          {/* About collapsible */}
          <div className="border-b border-gray-200 py-2">
            <button
              onClick={() => toggleDropdown("about")}
              className="w-full text-left font-semibold flex justify-between items-center"
            >
              ABOUT
              <span>
                {openDropdown === "about" ? <FaChevronUp /> : <FaChevronDown />}
              </span>{" "}
            </button>

            {openDropdown === "about" && (
              <ul className="pl-4 mt-2 space-y-1">
                <li>
                  <Link
                    href="/company"
                    className="block px-4 py-2  hover:text-[#8080FF]"
                  >
                    Our History
                  </Link>
                </li>
                <li>
                  <Link
                    href="/leadership"
                    className="block px-4 py-2  hover:text-[#8080FF]"
                  >
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mission"
                    className="block px-4 py-2  hover:text-[#8080FF]"
                  >
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link
                    href="/innovation"
                    className="block px-4 py-2  hover:text-[#8080FF]"
                  >
                    Innovation
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <Link
            href="/contact"
            className="block py-2 border-b border-gray-200 hover:text-[#8080FF]"
          >
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
}
