// components/AcquisitionsSection.tsx
"use client";
// import { BsArrowRight } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

import Image from "next/image";

export default function AcquisitionsSection() {
  return (
    <section className="w-full mx-auto px-4 py-12 md:px-14">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mt-20 md:mt-30 text-[#000080]">
          Our Latest Acquisitions
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          We are a growing company! To quickly fulfill our purpose of
          harmonizing product, nature and life, we have acquired many firms to
          advance our offerings and add people who share our vision for
          transforming industry.
        </p>
      </div>

      {/* Acquisition Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow p-6 relative flex flex-col">
          <span className="absolute -top-3 left-6 bg-[#000080] text-white text-xs font-bold px-3 py-1 rounded">
            2019
          </span>
          <div className="bg-white rounded-lg shadow overflow-hidden flex flex-col">
            <Image
              src="/company/about.webp"
              alt="Outscale"
              width={400}
              height={200}
              className="w-full h-40 object-cover"
            />
          </div>
          <h3 className="text-lg font-semibold text-[#000080] mb-3 text-center">
            Medidata Solutions
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed flex-grow text-center">
            Adds clinical expertise & cloud solutions for smarter development
            and commercialization of drugs & treatments. Improves how clinical
            research is designed, conducted & analyzed. Positions Dassault
            Systèmes to lead the digital transformation in healthcare.
          </p>
          <a
            href="#"
            className="text-[#000080] font-semibold text-sm mt-4 inline-flex items-center gap-1"
          >
            <IoIosArrowForward className="text-[#000080]" /> Read the press
            release
          </a>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow overflow-hidden flex flex-col">
          <Image
            src="/company/about.webp"
            alt="Outscale"
            width={400}
            height={200}
            className="w-full h-40 object-cover"
          />
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-lg font-semibold text-[#000080] mb-3 text-center">
              No Magic
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed flex-grow text-center">
              Strengthens the CATIA portfolio for model-based systems
              engineering, architecture modeling for software, system of systems
              & enterprise business processes modeling. Allows users to
              implement continuous 3D digital processes & address all lifecycle
              aspects.
            </p>
            <a
              href="#"
              className="text-[#000080] font-semibold text-sm mt-4 inline-flex items-center gap-1"
            >
              <IoIosArrowForward className="text-[#000080]" /> Read the press
              release
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow overflow-hidden flex flex-col">
          <Image
            src="/company/about.webp"
            alt="Outscale"
            width={400}
            height={200}
            className="w-full h-40 object-cover"
          />
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-lg font-semibold text-[#000080] mb-3 text-center">
              Acquisition of Majority Stake in Outscale
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed flex-grow text-center">
              Dassault Systèmes strengthens its position as one of the fastest
              growing cloud companies.
            </p>
            <a
              href="#"
              className="text-[#000080] font-semibold text-sm mt-4 inline-flex items-center gap-1"
            >
              <IoIosArrowForward className="text-[#000080]0" /> Read the press
              release
            </a>
          </div>
        </div>
      </div>

      {/* View All Button */}
      <div className="text-center mt-10">
        <a
          href="#"
          className="inline-block border border-[#000080] text-[#000080] font-semibold px-6 py-2 rounded-full hover:bg-blue-50"
        >
          View all acquisitions
        </a>
      </div>

      {/* Leadership + Team Section */}
      <section className="w-full  mx-auto py-12 ">
        <div className="grid md:grid-cols-8 gap-6 mt-16">
          {/* Leadership */}
          <div className="bg-[#000080]  text-white md:col-span-5 rounded-lg p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Our Leadership Team
              </h3>
              <p className="text-gray-200 leading-relaxed">
                Dassault Systèmes is led by an inspiring group of executives who
                are committed to execute our long-term vision of driving
                sustainable innovation to address the worlds greatest
                challenges.
              </p>
            </div>
            <a
              href="#"
              className="w-42 text-center mt-6 inline-block  bg-white text-[#000080] font-semibold px-6 py-2 rounded-full"
            >
              Our leadership
            </a>
          </div>

          {/* Careers */}
          <div className="bg-gray-100 md:col-span-3 rounded-lg p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Be a Part of Our Team
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Do you have big dreams? Do you enjoy a challenge? Do you want to
                unleash your imagination and creativity? Join us to open new
                possibilities together through the power of virtual universes!
              </p>
            </div>
            <a
              href="#"
              className=" w-48 mt-6 inline-block bg-[#000080] text-center text-white font-semibold px-6 py-2 rounded-full"
            >
              See open positions
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
