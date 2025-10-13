"use client";
import { useState } from "react";

import React from "react";
import Footer from "yes/Components/Footer";
import Industryheader from "yes/Components/Industryheader";
import Trunkey from "yes/Components/Trunkey";
import Link from "next/link";
import Trunkeytpes from "yes/Components/Trunkeytpes";
import Industryplatformtab from "yes/Components/Industryplatformtab";

const page = () => {
  return (
    <>
      <Industryheader />
      <Trunkey />
      <section className="bg-white py-12 px-4 md:px-15">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#000080] leading-snug  ">
              Industrial Turnkey Projects{" "}
            </h2>
            <div className="w-20 h-[3px] bg-[#272727] mt-3 mb-6"></div>

            <p className="text-gray-700 mb-4 leading-relaxed">
              At Landsking Infrarem Pvt. Ltd. we are recognized across the
              industry for our expertise in both traditional and advanced
              construction techniques. Our approach blends innovative thinking
              with precision-driven delivery processes, always centered around
              fulfilling our clients unique needs. Since our inception, we have
              upheld the highest standards of quality, customer-centric values,
              modern engineering excellence, ethical business practices, and
              transparency in every aspect of our operations. These principles
              have earned us the reputation of being a trusted and preferred
              construction partner. Our goal is to lead the commercial and
              industrial construction sector by offering personalized,
              end-to-end solutions across various domains of construction and
              infrastructure management.
              <p className="text-gray-700 mb-4 leading-relaxed">
                Landsking Infrarem Pvt. Ltd provides turnkey solutions to
                industrial projects with expertise in Minerals & Metals, Power,
                Bulk Material Handling Facilities in Ports & Mines, Fertilizers,
                Petrochemicals, Chemical Plants, Cement, Green Energy and other
                Industrial Plants.
              </p>
            </p>

            <Link href="/industry-contact">
              <button className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
                GET A QUOTE
              </button>
            </Link>
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
      <Industryplatformtab />
      <Trunkeytpes />

      <Footer />
    </>
  );
};

export default page;
