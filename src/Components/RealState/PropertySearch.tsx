"use client";
import { useState } from "react";
import { ChevronDown, Building2, BedDouble, MapPin, Hammer } from "lucide-react";

const TABS = ["BUY", "RENT", "COMMERCIAL"];

const PROPERTY_TYPES = ["Apartment", "Villa", "Plot"];
const LOCATIONS = ["Mumbai", "Delhi", "Bangalore"];
const CONSTRUCTION_STATUS = ["Ready to Move", "Under Construction"];
const BEDROOMS = ["1 BHK", "2 BHK", "3 BHK"];

const PropertySearch = () => {
  const [activeTab, setActiveTab] = useState("BUY");
  const [price, setPrice] = useState([0, 100]);

  // Dropdown states
  const [projectTypeOpen, setProjectTypeOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [constructionOpen, setConstructionOpen] = useState(false);
  const [bedroomOpen, setBedroomOpen] = useState(false);

  // Selected values
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedConstruction, setSelectedConstruction] = useState("");
  const [selectedBedroom, setSelectedBedroom] = useState("");

  return (
    <section className="w-full bg-gray-50 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[30%_70%] gap-10 items-start">
        {/* Left Text */}
        <div>
          <h2 className="text-2xl md:text-3xl font-light text-gray-800 leading-snug">
            Find the most <br />
            <span className="font-semibold">reliable & appreciating</span> <br />
            Real Estate Properties
          </h2>
        </div>

        {/* Right Filters */}
        <div>
          {/* Tabs */}
          <div className="flex gap-8 border-b border-gray-300 mb-6">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 text-sm font-medium tracking-wide ${
                  activeTab === tab
                    ? "text-black border-b-2 border-yellow-600"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Filters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">

            {/* Project Type */}
            {(activeTab === "BUY" || activeTab === "RENT") && (
              <div className="relative">
                <label className="sr-only">Project Type</label>
                <div
                  className="flex items-center justify-between border-b border-gray-400 py-1 cursor-pointer"
                  onClick={() => setProjectTypeOpen(!projectTypeOpen)}
                >
                  <span className="text-gray-500 text-sm flex items-center gap-1">
                    {selectedProject || (
                      <>
                        <Building2 size={16} />
                        Project Type
                      </>
                    )}
                  </span>
                  <ChevronDown size={16} />
                </div>
                {projectTypeOpen && (
                  <ul className="absolute bg-white border border-gray-300 mt-1 w-full z-10 shadow-lg">
                    {PROPERTY_TYPES.map((type) => (
                      <li
                        key={type}
                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setSelectedProject(type);
                          setProjectTypeOpen(false);
                        }}
                      >
                        {type}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {/* Location */}
            {(activeTab === "BUY" || activeTab === "RENT" || activeTab === "COMMERCIAL") && (
              <div className="relative">
                <label className="sr-only">Location</label>
                <div
                  className="flex items-center justify-between border-b border-gray-400 py-1 cursor-pointer"
                  onClick={() => setLocationOpen(!locationOpen)}
                >
                  <span className="text-gray-500 text-sm flex items-center gap-1">
                    {selectedLocation || (
                      <>
                        <MapPin size={16} />
                        Location
                      </>
                    )}
                  </span>
                  <ChevronDown size={16} />
                </div>
                {locationOpen && (
                  <ul className="absolute bg-white border border-gray-300 mt-1 w-full z-10 shadow-lg">
                    {LOCATIONS.map((loc) => (
                      <li
                        key={loc}
                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setSelectedLocation(loc);
                          setLocationOpen(false);
                        }}
                      >
                        {loc}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {/* Construction Status */}
            {(activeTab === "BUY" || activeTab === "COMMERCIAL") && (
              <div className="relative">
                <label className="sr-only">Construction Status</label>
                <div
                  className="flex items-center justify-between border-b border-gray-400 py-1 cursor-pointer"
                  onClick={() => setConstructionOpen(!constructionOpen)}
                >
                  <span className="text-gray-500 text-sm flex items-center gap-1">
                    {selectedConstruction || (
                      <>
                        <Hammer size={16} />
                        Construction Status
                      </>
                    )}
                  </span>
                  <ChevronDown size={16} />
                </div>
                {constructionOpen && (
                  <ul className="absolute bg-white border border-gray-300 mt-1 w-full z-10 shadow-lg">
                    {CONSTRUCTION_STATUS.map((status) => (
                      <li
                        key={status}
                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setSelectedConstruction(status);
                          setConstructionOpen(false);
                        }}
                      >
                        {status}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {/* Bedrooms */}
            {activeTab === "BUY" && (
              <div className="relative">
                <label className="sr-only">Bedrooms</label>
                <div
                  className="flex items-center justify-between border-b border-gray-400 py-1 cursor-pointer"
                  onClick={() => setBedroomOpen(!bedroomOpen)}
                >
                  <span className="text-gray-500 text-sm flex items-center gap-1">
                    {selectedBedroom || (
                      <>
                        <BedDouble size={16} />
                        Bedrooms
                      </>
                    )}
                  </span>
                  <ChevronDown size={16} />
                </div>
                {bedroomOpen && (
                  <ul className="absolute bg-white border border-gray-300 mt-1 w-full z-10 shadow-lg">
                    {BEDROOMS.map((bed) => (
                      <li
                        key={bed}
                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setSelectedBedroom(bed);
                          setBedroomOpen(false);
                        }}
                      >
                        {bed}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {/* Last Row: Price Range + Button side by side */}
            {(activeTab === "BUY" || activeTab === "RENT" || activeTab === "COMMERCIAL") && (
              <>
                {/* Price Range only for BUY & RENT */}
                {(activeTab === "BUY" || activeTab === "RENT") && (
                  <div className="flex flex-col">
                    <label className="block text-gray-700 font-light mb-2">Price Range</label>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                      <span>{price[0]} Cr</span>
                      <span>{price[1]} Cr</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={price[1]}
                      onChange={(e) => setPrice([0, Number(e.target.value)])}
                      className="w-full accent-yellow-600"
                    />
                  </div>
                )}

                {/* Button */}
                <div className="flex items-end">
                  <button className="px-6 py-3 w-full md:w-auto rounded-full border border-gray-800 text-gray-800 font-medium flex items-center justify-center gap-2 hover:bg-gray-900 hover:text-white transition">
                    0 PROJECTS FOUND →
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertySearch;
