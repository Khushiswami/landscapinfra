"use client";

import { useState } from "react";
import { resources } from "yes/data/resources";
import Image from "next/image";
import Navbar from "yes/Components/Navbar";
import Footer from "yes/Components/Footer";

export default function ResourceDetails({
  params,
}: {
  params: { id: string };
}) {
  const [agree, setAgree] = useState(false); // ✅ checkbox state
  const [industry, setIndustry] = useState("");

  const itemId = parseInt(params.id);
  const item = resources.find((r) => r.id === itemId);

  if (!item) {
    return (
      <div className="p-10 text-center text-red-600">Resource Not Found</div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree) return;
    alert("Form submitted successfully!");
  };

  return (
    <>
      <Navbar />
      <div className="w-full">
        {/* Banner Section */}
        <div className="relative h-[350px] md:h-[360px] w-full">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover brightness-50"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
            <h1 className=" text-2xl md:text-3xl font-bold md:pt-5">
              {item.title}
            </h1>
            <p className="mt-2 px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm">
              {item.type} • {item.industry}
            </p>
          </div>
        </div>

        {/* Content Section (8 / 4 Grid) */}
        <div className=" md:px-0  grid grid-cols-1 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7 p-6 md:p-16">
            <h2 className="text-2xl font-semibold text-[#000080] mb-4">
              {item.title}
            </h2>

            <p className="text-gray-700 leading-relaxed mb-3">
              {item.description}
            </p>
            <h2 className="text-2xl font-semibold text-[#000080] mb-4">
              {item.question}
            </h2>
            {/* Detailed Content from resources.ts */}
            <div className="space-y-4 text-gray-600">
              {item.detailedDescription.split("\n").map((line, index) => (
                <p key={index}>{line.trim()}</p>
              ))}
            </div>
          </div>

          {/* Right Form - 4 columns */}
          <div className="md:col-span-5 bg-[#000080]  p-6 md:p-15  shadow-md">
            <h3 className="text-xl font-bold text-white mb-4">
              Download This {item.type}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 text-white ">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg text-[#000080] bg-white"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg text-[#000080] bg-white"
                required
              />
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full p-3 border rounded-lg text-[#000080] bg-white"
              >
                <option value="">Select Industry</option>
                <option value="Solar">Solar</option>
                <option value="PEB">PEB</option>
                <option value="Infrastructure">Industry Installation</option>
                <option value="Sustainability">Real Estate Development</option>
                <option value="Construction">Rnd</option>
              </select>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full p-3 border rounded-lg text-[#000080] bg-white"
              ></textarea>

              {/* Checkbox */}
              <label className="flex items-center gap-2 text-sm text-white">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={() => setAgree(!agree)}
                  className="h-4 w-4"
                />
                I agree to submit this form to download the {item.type}.
              </label>

              <button
                type="submit"
                disabled={!agree}
                className={`w-full py-3 rounded-lg transition ${
                  agree
                    ? "bg-white text-[#000080] hover:bg-[#2a2ad1]"
                    : "bg-white text-[#000080] cursor-not-allowed"
                }`}
              >
                Submit & Download
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
