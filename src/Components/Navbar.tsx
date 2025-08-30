"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openNestedDropdown, setOpenNestedDropdown] = useState<string | null>("mobility"); // 👈 default Mobility open

  const handleDropdownClick = (name: string) => {
    if (openDropdown === name) {
      setOpenDropdown(null);
      setOpenNestedDropdown(null);
    } else {
      setOpenDropdown(name);
      if (name === "industry") {
        setOpenNestedDropdown("mobility"); // 👈 Industry open hote hi Mobility default
      } else {
        setOpenNestedDropdown(null);
      }
    }
  };

  const handleNestedClick = (name: string) => {
    setOpenNestedDropdown(name);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#001f3f] shadow-md text-white transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/logo.jpeg" alt="L&T Technology Services" className="h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden capitalize md:flex items-center space-x-6 font-medium relative">
          {/* Industry Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleDropdownClick("industry")}
              className="flex items-center hover:opacity-80"
            >
              Industry
              {openDropdown === "industry" ? (
                <ChevronUpIcon className="h-4 w-4 inline ml-1 transition-transform duration-300" />
              ) : (
                <ChevronDownIcon className="h-4 w-4 inline ml-1 transition-transform duration-300" />
              )}
            </button>
            {openDropdown === "industry" && (
<div className="fixed left-1/2 top-[70px] transform -translate-x-1/2 bg-[#0a2351] shadow-lg rounded-lg w-[1300px] flex z-50 border border-gray-100">
      
      {/* Left Section */}
      <div className="w-1/3 text-white p-6 space-y-4">
         <Link href="/industryinstallation" className="hover:text-teal-300 cursor-pointer block">
          Industry Installation
        </Link>
        <Link href="/preEngineeredBuildings" className="hover:text-teal-300 cursor-pointer block">
          Pre Engineered Building
        </Link>
        <Link href="/buildingandinfrastructure" className="hover:text-teal-300 cursor-pointer block">
          Building And Infrastructure
        </Link>

      </div>

      {/* Middle Section (lighter blue bg) */}
      <div className="w-1/3 bg-[#1f3f73] text-white p-6 space-y-4 rounded-md">
        <Link href="#" className="hover:text-teal-300 cursor-pointer block">
          Engineering  R&amp;D
        </Link>
       
        <Link href="#" className="hover:text-teal-300 cursor-pointer block">
          Renewable Energy
        </Link>
        <Link href="#" className="hover:text-teal-300 cursor-pointer block">
          Real Estate Development
        </Link>
      </div>

      {/* Right Image Section */}
      <div className="w-1/3 bg-[#2e69c2] p-4 flex flex-col justify-between text-white">
         <img
    src="/service.jpg"
    alt="Our Services"
    className="rounded-md object-cover h-54 w-full mb-4"
  />
        <div>
          <p className="font-semibold text-xl">Explore Our Services</p>
          <Link
            href="/services"
            className="mt-2 inline-block bg-white text-blue-700 px-4 py-2 rounded font-semibold hover:bg-gray-100 transition"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
            )}
          </div>
            
{/* EXPERTISE Dropdown */}
<div className="relative">
  <button
    onClick={() => handleDropdownClick("expertise")}
    className="flex items-center hover:opacity-80"
  >
    Expertise
    {openDropdown === "expertise" ? (
      <ChevronUpIcon className="h-4 w-4 inline ml-1 transition-transform duration-300" />
    ) : (
      <ChevronDownIcon className="h-4 w-4 inline ml-1 transition-transform duration-300" />
    )}
  </button>

  {openDropdown === "expertise" && (
    <div className="fixed left-1/2 top-[70px] transform -translate-x-1/2 bg-[#0a2351] shadow-lg rounded-lg w-[1300px] flex z-50 border border-gray-100">
      
      {/* Left Section */}
      <div className="w-1/3 text-white p-6 space-y-3">
        <p className="hover:text-teal-300 cursor-pointer">Heavy Engineering</p>
        <p className="hover:text-teal-300 cursor-pointer">Office Space</p>
        <p className="hover:text-teal-300 cursor-pointer">Public Office</p>
        <p className="hover:text-teal-300 cursor-pointer">Water Infrastructure</p>
        <p className="hover:text-teal-300 cursor-pointer">Industry Building Solutions</p>
        <p className="hover:text-teal-300 cursor-pointer">HVAC Services</p>
        <p className="hover:text-teal-300 cursor-pointer">Fabrication</p>
      </div>

      {/* Middle Section (lighter blue bg) */}
      <div className="w-1/3 bg-[#1f3f73] text-white p-6 space-y-3 rounded-md">
        <p className="hover:text-teal-300 cursor-pointer">Other Industries</p>
        <p className="hover:text-teal-300 cursor-pointer">Simulation Service</p>
        <p className="hover:text-teal-300 cursor-pointer">Factories Installation</p>
        <p className="hover:text-teal-300 cursor-pointer">Cold Storage & Warehouse</p>
        <p className="hover:text-teal-300 cursor-pointer">Solar Services</p>
        <p className="hover:text-teal-300 cursor-pointer">Fire Safety</p>
        <p className="hover:text-teal-300 cursor-pointer">Green Building</p>
        <p className="hover:text-teal-300 cursor-pointer">Mining And Metals</p>
      </div>

      {/* Right Section */}
      {/* <div className="w-1/3 bg-[#2e69c2] p-6 flex flex-col justify-between text-white space-y-3">
        <p className="hover:text-teal-300 cursor-pointer">HVAC Services</p>
        <p className="hover:text-teal-300 cursor-pointer">Fabrication</p>
        <p className="hover:text-teal-300 cursor-pointer">Fire Safety</p>
        <p className="hover:text-teal-300 cursor-pointer">Green Building</p>
        <p className="hover:text-teal-300 cursor-pointer">Mining And Metals</p>
      </div> */}
      {/* Right Image Section */}
      <div className="w-1/3 bg-[#2e69c2] p-4 flex flex-col justify-between text-white">
         <img
    src="/service.jpg"
    alt="Our Services"
    className="rounded-md object-cover h-54 w-full mb-4"
  />
        <div>
          <p className="font-semibold text-xl">Explore Our Services</p>
          <Link
            href="/services"
            className="mt-2 inline-block bg-white text-blue-700 px-4 py-2 rounded font-semibold hover:bg-gray-100 transition"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  )}
</div>


       {/* Services Dropdown */}
<div className="relative">
  <button
    onClick={() => handleDropdownClick("services")}
    className="flex items-center hover:opacity-80"
  >
    Services
    {openDropdown === "services" ? (
      <ChevronUpIcon className="h-4 w-4 inline ml-1 transition-transform duration-300" />
    ) : (
      <ChevronDownIcon className="h-4 w-4 inline ml-1 transition-transform duration-300" />
    )}
  </button>

  {openDropdown === "services" && (
    <div className="fixed left-1/2 top-[70px] transform -translate-x-1/2 bg-[#0a2351] shadow-lg rounded-lg w-[1300px] flex z-50 border border-gray-100">
      
      {/* Left Section */}
      <div className="w-1/3 text-white p-6 space-y-4">
        <p className="hover:text-teal-300 cursor-pointer">Product Engineering</p>
        <p className="hover:text-teal-300 cursor-pointer">Design & Prototyping</p>
        <p className="hover:text-teal-300 cursor-pointer">Testing & Validation</p>
        <p className="hover:text-teal-300 cursor-pointer">Embedded Systems</p>
        <p className="hover:text-teal-300 cursor-pointer">Cloud Engineering</p>
      </div>

      {/* Middle Section (lighter blue bg) */}
      <div className="w-1/3 bg-[#1f3f73] text-white p-6 space-y-4 rounded-md">
        <p className="hover:text-teal-300 cursor-pointer">AI & Analytics</p>
        <p className="hover:text-teal-300 cursor-pointer">Cybersecurity</p>
        <p className="hover:text-teal-300 cursor-pointer">Digital Twin</p>
        <p className="hover:text-teal-300 cursor-pointer">IoT Solutions</p>
        <p className="hover:text-teal-300 cursor-pointer">Sustainability Services</p>
      </div>

      {/* Right Image Section */}
      <div className="w-1/3 bg-[#2e69c2] p-4 flex flex-col justify-between text-white">
         <img
    src="/service.jpg"
    alt="Our Services"
    className="rounded-md object-cover h-54 w-full mb-4"
  />
        <div>
          <p className="font-semibold text-xl">Explore Our Services</p>
          <Link
            href="/services"
            className="mt-2 inline-block bg-white text-blue-700 px-4 py-2 rounded font-semibold hover:bg-gray-100 transition"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  )}
</div>


          {/* Insights Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleDropdownClick("insights")}
              className="flex items-center hover:opacity-80"
            >
              Insights
              {openDropdown === "insights" ? (
                <ChevronUpIcon className="h-4 w-4 inline ml-1 transition-transform duration-300" />
              ) : (
                <ChevronDownIcon className="h-4 w-4 inline ml-1 transition-transform duration-300" />
              )}
            </button>
            {openDropdown === "insights" && (
         <div className="fixed left-1/2 top-[70px] transform -translate-x-1/2 bg-[#0a2351] shadow-lg rounded-lg w-[1300px] flex z-50 border border-gray-100">
      
      {/* Left Section */}
      <div className="w-1/3 text-white p-6 space-y-4">
        <p className="hover:text-teal-300 cursor-pointer">Product Engineering</p>
        <p className="hover:text-teal-300 cursor-pointer">Design & Prototyping</p>
        <p className="hover:text-teal-300 cursor-pointer">Testing & Validation</p>
        <p className="hover:text-teal-300 cursor-pointer">Embedded Systems</p>
        <p className="hover:text-teal-300 cursor-pointer">Cloud Engineering</p>
      </div>

      {/* Middle Section (lighter blue bg) */}
      <div className="w-1/3 bg-[#1f3f73] text-white p-6 space-y-4 rounded-md">
        <p className="hover:text-teal-300 cursor-pointer">AI & Analytics</p>
        <p className="hover:text-teal-300 cursor-pointer">Cybersecurity</p>
        <p className="hover:text-teal-300 cursor-pointer">Digital Twin</p>
        <p className="hover:text-teal-300 cursor-pointer">IoT Solutions</p>
        <p className="hover:text-teal-300 cursor-pointer">Sustainability Services</p>
      </div>

      {/* Right Image Section */}
      <div className="w-1/3 bg-[#2e69c2] p-4 flex flex-col justify-between text-white">
        <img
    src="/service.jpg"
    alt="Our Services"
    className="rounded-md object-cover h-54 w-full mb-4"
  />
        <div>
          <p className="font-semibold text-xl">Explore Our Services</p>
          <Link
            href="/services"
            className="mt-2 inline-block bg-white text-blue-700 px-4 py-2 rounded font-semibold hover:bg-gray-100 transition"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
            )}
          </div>

          {/* Simple Links */}
          <Link href="/" className="flex items-center hover:opacity-80">
            Careers
          </Link>
          <Link href="/" className="flex items-center hover:opacity-80">
            About Us
          </Link>
        </nav>

        {/* Right Side Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <button>
            <MagnifyingGlassIcon className="h-6 w-6 hover:opacity-80" />
          </button>
          <div className="relative">
            <button className="flex items-center space-x-1 px-2 py-1 border rounded text-sm hover:bg-gray-100">
              <span className="text-white">EN</span>
              <ChevronDownIcon className="h-4 w-4 text-white" />
            </button>
          </div>
          <Link
            href="/contact"
            className="bg-[#2e69c2] text-white px-4 py-2 rounded hover:bg-black font-semibold"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
          {menuOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white text-black px-4 py-4 shadow-lg max-h-screen overflow-auto">
          {/* Mobile menu content */}
        </nav>
      )}
    </header>
  );
}
