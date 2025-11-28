"use client";

import { useState } from "react";
import { resources } from "yes/data/resources";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import Navbar from "yes/Components/Navbar";
import Footer from "yes/Components/Footer";
import Link from "next/link";

export default function ResourceDetails({
  params,
}: {
  params: { id: string };
}) {
  const [agree, setAgree] = useState(false);
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

  // Show download button only for these types
  const canShowDownloadButton =
    item.type === "Brochure" ||
    item.type === "Whitepaper" ||
    item.type === "Case Studies";

  // Recent blogs excluding current
  const recentBlogs = resources
    .filter((r) => r.type === "Blog" && r.id !== item.id)
    .slice(0, 3); // show last 3 blogs

  return (
    <>
      <Navbar />
      <div className="w-full">
        {/* Banner Section */}
        <div className="relative h-[350px] md:h-[460px] w-full bg-gray-100">
          <Image
            src={item.imagebanner}
            alt={item.title}
            fill
            className="object-cover"
            style={{ filter: "brightness(0.6)" }}
            priority
          />
          <div className="absolute inset-0 "></div>
          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-20 text-white">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              {item.title}
            </h1>

            {/* Conditionally render Download Button */}
            {canShowDownloadButton && (
              <a
                href={item.linkpdf}
                download
                className="mt-6 inline-block px-6 py-3 bg-cyan-400 text-[#003366] font-semibold rounded hover:bg-cyan-500 transition"
              >
                Download Brochure
              </a>
            )}
          </div>
        </div>

        <div className="md:px-0 grid grid-cols-1 md:grid-cols-12 md:gap-10 mt-10">
          <div className="md:col-span-7 p-6 md:p-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#000080] mb-4">
              {item.title}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              {item.description}
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold text-[#000080] mb-4">
              {item.question}
            </h2>

            <div className="space-y-4 text-gray-600">
              {item.detailedDescription.split("\n").map((line, index) => (
                <p key={index}>{line.trim()}</p>
              ))}
            </div>

            {item.image && (
              <img
                src={item.image}
                alt="Description Related"
                className="my-6 w-full rounded-lg shadow"
              />
            )}

            {item.longDescription && (
              <div className="space-y-4 text-gray-600 mt-6">
                {item.longDescription.split("\n").map((line, index) => (
                  <p key={index}>{line.trim()}</p>
                ))}
              </div>
            )}
          </div>

          {/* Right Section */}
          <div className="md:col-span-5 p-6 md:p-15 ">
            {canShowDownloadButton ? (
              // Form for Brochure / Whitepaper / Case Studies
              <div className="bg-[#000080] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">
                  Download This {item.type}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4 text-white">
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
                    <option value="Infrastructure">
                      Industry Installation
                    </option>
                    <option value="Sustainability">
                      Real Estate Development
                    </option>
                    <option value="Construction">Rnd</option>
                  </select>
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full p-3 border rounded-lg text-[#000080] bg-white"
                  ></textarea>

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
            ) : (
              // Recent Blogs for Blog type
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-4">
                  Recent Blogs
                </h2>
                <div className="space-y-4 mr-7">
                  {recentBlogs.map((blog) => (
                    <Link
                      key={blog.id}
                      href={`/resources/${blog.id}`}
                      className="relative block h-45 rounded-lg overflow-hidden shadow-lg group"
                    >
                      {/* Image as background */}
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {/* Overlay */}
                      {/* Text + arrow */}
                      <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                        <div className="flex justify-between items-center w-full">
                          <h4 className="text-lg font-bold">{blog.title}</h4>
                          <Link
                            href={`/resources/${item.id}`}
                            className="p-2 bg-[#000080] w-10 h-10 flex justify-center items-center text-white rounded-sm hover:bg-[#8080FF] transition"
                          >
                            <ArrowRight size={20} />
                          </Link>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
