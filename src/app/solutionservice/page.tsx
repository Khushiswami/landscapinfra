// "use client";

// import { PencilRuler, Building2 } from "lucide-react"; // Lucide icons
// import { useState } from "react";

// export default function Solutionservice() {
//   const [activeTab, setActiveTab] = useState(1);

//   return (
//     <section className="bg-white">
//       <div className=" mx-auto px-0 md:px-0 lg:px-0 py-12">
//         <div className="max-w-7xl mx-auto px-0 md:px-0 lg:px-0 py-12">
//           {/* Heading */}
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 px-6">
//             Effective & Trustworthy Services
//           </h2>
//         </div>

//         {/* Step Navigation Bar (static) */}
//         <div className="bg-[#d9d9d9] px-[60px] grid grid-cols-2 md:grid-cols-7 text-sm md:text-base font-medium text-gray-800">
//           {[
//             "Conceptual Design",
//             "Proposal Drawings",
//             "Contract Awarded",
//             "Detail Drawings",
//             "Fabrication",
//             "Erection",
//             "Warranty",
//           ].map((step, idx) => (
//             <button
//               key={idx}
//               className="px-3 py-5 text-center font-semibold  text-[#000000]"
//             >
//               {idx + 1}. {step}
//             </button>
//           ))}
//         </div>

//         {/* Content Row */}
//         <div className="  bg-[#f2f2f2] grid md:grid-cols-2 gap-12 items-center  px-6">
//           {/* Left - Number + Title */}
//           <div>
//             <h1 className="text-6xl font-bold text-blue-900">
//               {activeTab.toString().padStart(2, "0")}
//             </h1>
//             <h2 className="mt-2 text-3xl font-semibold text-blue-900">
//               Conceptual Design
//             </h2>
//           </div>

//           {/* Right - Text + Icons + List + Image */}
//           <div>
//             <h3 className="text-2xl font-bold mb-4">
//               Turn your ideas into reality
//             </h3>
//             <p className="text-[#737373] mb-6">
//               We begin with your ideas, then propose a fast and binding plan in
//               terms of design, fabrication, erection, costs, and timeframe. We
//               provide quality work and excellent service with respect to your
//               needs and future use.
//             </p>

//             {/* Icons row */}
//             <div className="flex justify-start gap-10 mb-6">
//               {/* Standard Design */}
//               <div className="flex flex-col items-center px-4 py-3  bg-[#000080] text-white">
//                 <PencilRuler className="w-10 h-10 mb-2 text-white" />
//                 <span className="font-medium">Standard Design</span>
//               </div>

//               {/* Premium Products */}
//               <div className="flex flex-col items-center px-4 py-3 bg-[#000080] text-white ">
//                 <Building2 className="w-10 h-10 mb-2 text-white" />
//                 <span className="font-medium">Premium Products</span>
//               </div>
//             </div>

//             {/* Image */}
//             <div className="mt-6">
//               <img
//                 src="/industry.jpg"
//                 alt="Conceptual Design"
//                 className="w-full h-48 object-cover rounded-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* second row */}
//       <div className=" flex items-center justify-center bg-white px-6 mb-10">
//         <div className="grid md:grid-cols-2 gap-12 max-w-5xl w-full">
//           {/* Left Section */}
//           <div className="flex flex-col items-start justify-center">
//             <h1 className="text-6xl font-bold text-blue-700">02</h1>
//             <span className="text-4xl font-semibold text-blue-700 mt-2">
//               Proposal <br /> Drawings
//             </span>
//           </div>

//           {/* Right Section */}
//           <div className="flex flex-col justify-center space-y-6">
//             <div>
//               <h3 className="font-semibold text-lg text-gray-900">
//                 ▪ Optimum Solutions
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 Energy efficiency and resistance to corrosion and severe weather
//                 conditions.
//               </p>
//             </div>

//             <div>
//               <h3 className="font-semibold text-lg text-gray-900">
//                 ▪ Optimum Construction Costs
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 For a clear view of the details of your buildings.
//               </p>
//             </div>

//             <div>
//               <h3 className="font-semibold text-lg text-gray-900">
//                 ▪ A Committed Schedule
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 For the best utilization of your budget and project management.
//               </p>
//             </div>
//             <div className="mt-6 mb-3">
//               <img
//                 src="/industry.jpg"
//                 alt="Conceptual Design"
//                 className="w-full h-48 object-cover "
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* third row */}
//       <div className=" flex items-center justify-center  mt-8 bg-[#f2f2f2]  px-6">
//         <div className="grid mt-8 md:grid-cols-2 gap-12 max-w-5xl w-full">
//           {/* Left Section */}
//           <div className="flex flex-col items-start justify-center">
//             <h1 className="text-7xl font-bold text-blue-700">03</h1>
//             <span className="text-4xl font-bold text-blue-700 mt-4 leading-tight">
//               Contract <br /> Awarded
//             </span>
//           </div>

//           {/* Right Section */}
//           <div className="flex flex-col justify-center  space-y-6">
//             <div>
//               <h3 className="font-semibold text-xl text-gray-900 flex items-start">
//                 Signing of contract to execute the construction
//               </h3>
//             </div>

//             <div className="mt-1 mb-3">
//               <img
//                 src="/industry.jpg"
//                 alt="Conceptual Design"
//                 className="w-full h-48 object-cover "
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* fourth roiw */}
//       <div className=" flex items-center justify-center bg-white px-6 mb-10">
//         <div className="grid md:grid-cols-2 gap-12 max-w-5xl w-full">
//           {/* Left Section */}
//           <div className="flex flex-col items-start justify-center">
//             <h1 className="text-6xl font-bold text-blue-700">04</h1>
//             <span className="text-4xl font-semibold text-blue-700 mt-2">
//               Detail <br /> Drawings
//             </span>
//           </div>

//           {/* Right Section */}
//           <div className="flex flex-col justify-center space-y-6 mt-8">
//             <div>
//               <h3 className="font-medium text-lg text-black">
//                 ▪ Outstanding Design Ability
//               </h3>
//             </div>

//             <div>
//               <h3 className="font-medium text-lg text-black">
//                 ▪ High Engineering Capabilities
//               </h3>
//             </div>

//             <div>
//               <h3 className="font-medium text-lg text-black">
//                 ▪ 100+ Talented In-house Engineers
//               </h3>
//             </div>
//             <div className="mt-6 mb-3">
//               <img
//                 src="/industry.jpg"
//                 alt="Conceptual Design"
//                 className="w-full h-48 object-cover "
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* fifth */}
//       <section className="bg-[#f2f2f2] py-16 px-6">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
//           {/* Left Section */}
//           <div className="text-blue-700 font-bold text-center md:text-left">
//             <p className="text-7xl">05</p>
//             <div className="w-2 h-1 bg-blue-700 mx-auto md:mx-0 my-2" />
//             <p className="text-2xl">Fabrication</p>
//           </div>

//           {/* Right Section (spanning 2 columns) */}
//           <div className="md:col-span-2">
//             <h2 className="text-xl md:text-2xl font-semibold mb-4">
//               Ensure product perfection before shipment
//             </h2>
//             <p className="text-gray-600 mb-6">
//               The fabrication process consists of 7 main steps:
//             </p>
//             <ul className="list-disc list-inside space-y-2 text-gray-800">
//               <li>Cutting (Plasma, CNC, Shearing)</li>
//               <li>Full automatic welding lines</li>
//               <li>Fitting and Finishing</li>
//               <li>Shot blasting</li>
//               <li>Painting</li>
//               <li>Galvanized purlins/ girt, wall and roof sheeting</li>
//               <li>Loading process.</li>
//             </ul>
//             <div className="mt-6 mb-3">
//               <img
//                 src="/industry.jpg"
//                 alt="Conceptual Design"
//                 className="w-full h-48 object-cover "
//               />
//             </div>
//             <h4 className="text-black text[19px] mb-6">
//               Pebsteel commits all products are tested in-house before delivery
//               to ensure the highest quality, comlying with the international
//               quality standards for raw materials (ASTM Standard) and testing
//               methods:
//             </h4>
//             <ul className="list-disc list-inside space-y-2 text-gray-800">
//               <ul className="list-disc list-inside space-y-2 text-gray-700">
//                 <li>Dimensional and visual checking</li>
//                 <li>Magnetic testing (MPI Testing)</li>
//                 <li>Ultrasonic testing (UT Testing)</li>
//                 <li>Steel protection: Shot blasting (S.A 2.0) for all jobs</li>
//                 <li>Epoxy painting from first-rate international brands</li>
//                 <li>Dry film thickness testing</li>
//               </ul>
//             </ul>
//           </div>
//         </div>
//       </section>
//     </section>
//   );
// }
"use client";

import { PencilRuler, Building2 } from "lucide-react"; // Lucide icons
import { useState } from "react";
import Footer from "yes/Components/Footer";
import PebheaderW from "yes/Components/PebheaderW";
export default function Solutionservice() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <PebheaderW />
      <section className="bg-white mt-10">
        <div className="mx-auto">
          {/* Heading */}
          <div className="max-w-7xl mx-auto py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 px-6">
              Effective & Trustworthy Services
            </h2>
          </div>

          {/* Step Navigation Bar */}
          <div className="bg-[#d9d9d9] px-[60px] grid grid-cols-2 md:grid-cols-7 text-sm md:text-base font-medium text-gray-800">
            {[
              "Conceptual Design",
              "Proposal Drawings",
              "Contract Awarded",
              "Detail Drawings",
              "Fabrication",
              "Erection",
              "Warranty",
            ].map((step, idx) => (
              <button
                key={idx}
                className="px-3 py-5 text-center font-semibold text-[#000000]"
              >
                {idx + 1}. {step}
              </button>
            ))}
          </div>

          {/* 01 - Conceptual Design */}
          <div className="flex items-center justify-center bg-[#f2f2f2] px-6 py-12">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl w-full">
              {/* Left */}
              <div className="flex flex-col items-start justify-center">
                <h1 className="text-6xl font-bold text-blue-900">
                  {activeTab.toString().padStart(2, "0")}
                </h1>
                <h2 className="mt-2 text-3xl font-semibold text-blue-900">
                  Conceptual Design
                </h2>
              </div>

              {/* Right */}
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Turn your ideas into reality
                </h3>
                <p className="text-[#737373] mb-6">
                  We begin with your ideas, then propose a fast and binding plan
                  in terms of design, fabrication, erection, costs, and
                  timeframe. We provide quality work and excellent service with
                  respect to your needs and future use.
                </p>

                {/* Icons */}
                <div className="flex justify-start gap-10 mb-6">
                  <div className="flex flex-col items-center px-4 py-3 bg-[#000080] text-white">
                    <PencilRuler className="w-10 h-10 mb-2" />
                    <span className="font-medium">Standard Design</span>
                  </div>
                  <div className="flex flex-col items-center px-4 py-3 bg-[#000080] text-white">
                    <Building2 className="w-10 h-10 mb-2" />
                    <span className="font-medium">Premium Products</span>
                  </div>
                </div>

                <img
                  src="/industry.jpg"
                  alt="Conceptual Design"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* 02 - Proposal Drawings */}
          <div className="flex items-center justify-center bg-white px-6 mb-10">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl w-full">
              {/* Left */}
              <div className="flex flex-col items-start justify-center">
                <h1 className="text-6xl font-bold text-blue-700">02</h1>
                <span className="text-4xl font-semibold text-blue-700 mt-2">
                  Proposal <br /> Drawings
                </span>
              </div>

              {/* Right */}
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    ▪ Optimum Solutions
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Energy efficiency and resistance to corrosion and severe
                    weather conditions.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    ▪ Optimum Construction Costs
                  </h3>
                  <p className="text-gray-600 text-sm">
                    For a clear view of the details of your buildings.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    ▪ A Committed Schedule
                  </h3>
                  <p className="text-gray-600 text-sm">
                    For the best utilization of your budget and project
                    management.
                  </p>
                </div>
                <div className="mt-6 mb-3">
                  <img
                    src="/industry.jpg"
                    alt="Proposal Drawings"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 03 - Contract Awarded */}
          <div className="flex items-center justify-center mt-8 bg-[#f2f2f2] px-6">
            <div className="grid mt-8 md:grid-cols-2 gap-12 max-w-5xl w-full">
              {/* Left */}
              <div className="flex flex-col items-start justify-center">
                <h1 className="text-7xl font-bold text-blue-700">03</h1>
                <span className="text-4xl font-bold text-blue-700 mt-4 leading-tight">
                  Contract <br /> Awarded
                </span>
              </div>

              {/* Right */}
              <div className="flex flex-col justify-center space-y-6">
                <h3 className="font-semibold text-xl text-gray-900">
                  Signing of contract to execute the construction
                </h3>
                <div className="mt-1 mb-3">
                  <img
                    src="/industry.jpg"
                    alt="Contract Awarded"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 04 - Detail Drawings */}
          <div className="flex items-center justify-center bg-white px-6 mb-10">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl w-full">
              {/* Left */}
              <div className="flex flex-col items-start justify-center">
                <h1 className="text-6xl font-bold text-blue-700">04</h1>
                <span className="text-4xl font-semibold text-blue-700 mt-2">
                  Detail <br /> Drawings
                </span>
              </div>

              {/* Right */}
              <div className="flex flex-col justify-center space-y-6 mt-8">
                <h3 className="font-medium text-lg text-black">
                  ▪ Outstanding Design Ability
                </h3>
                <h3 className="font-medium text-lg text-black">
                  ▪ High Engineering Capabilities
                </h3>
                <h3 className="font-medium text-lg text-black">
                  ▪ 100+ Talented In-house Engineers
                </h3>
                <div className="mt-6 mb-3">
                  <img
                    src="/industry.jpg"
                    alt="Detail Drawings"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 05 - Fabrication */}
          <div className="flex items-center justify-center bg-[#f2f2f2] px-6 py-16">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl w-full">
              {/* Left */}
              <div className="flex flex-col items-start justify-center text-blue-700 font-bold">
                <h1 className="text-7xl">05</h1>
                <h2 className="mt-2 text-3xl md:text-4xl">Fabrication</h2>
              </div>

              {/* Right */}
              <div>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">
                  Ensure product perfection before shipment
                </h2>
                <p className="text-gray-600 mb-6">
                  The fabrication process consists of 7 main steps:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-800">
                  <li>Cutting (Plasma, CNC, Shearing)</li>
                  <li>Fully automatic welding lines</li>
                  <li>Fitting and finishing</li>
                  <li>Shot blasting</li>
                  <li>Painting</li>
                  <li>Galvanized purlins/ girt, wall and roof sheeting</li>
                  <li>Loading process</li>
                </ul>

                <div className="mt-6 mb-3">
                  <img
                    src="/industry.jpg"
                    alt="Fabrication"
                    className="w-full h-48 object-cover"
                  />
                </div>

                <h4 className="text-black text-lg mb-6">
                  Pebsteel commits all products are tested in-house before
                  delivery to ensure the highest quality, complying with the
                  international standards (ASTM) and testing methods:
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-800">
                  <li>Dimensional and visual checking</li>
                  <li>Magnetic testing (MPI Testing)</li>
                  <li>Ultrasonic testing (UT Testing)</li>
                  <li>
                    Steel protection: Shot blasting (S.A 2.0) for all jobs
                  </li>
                  <li>Epoxy painting from first-rate international brands</li>
                  <li>Dry film thickness testing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* SIZXTH SECT6ION */}
        <div className="flex items-center justify-center bg-white px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl w-full">
            {/* Left */}
            <div className="flex flex-col items-start justify-center text-blue-700 font-bold">
              <h1 className="text-7xl">06</h1>
              <h2 className="mt-2 text-3xl md:text-4xl">Erection</h2>
            </div>

            {/* Right */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">
                Every single component fits together perfectly
              </h2>
              <ul className="list-disc list-inside space-y-4 text-gray-700">
                <li>
                  All parts of the building are packed, marked, and delivered to
                  the job site for complete erection in a short time.
                </li>
                <li>
                  Thanks to the materials prepared at the factories, full
                  assembly at the job site can be quickly completed with bolts,
                  nuts and fasteners. This ensures a fast and efficient process
                  to deliver the final buildings.
                </li>
                <li>
                  On-site supervision and quality control are always available
                  until the end to ensure that everything is perfect. Your
                  building is ready.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* SEVENTHG */}
        {/* 07 - Warranty */}
        <div className="flex items-center justify-center bg-[#f2f2f2] px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl w-full">
            {/* Left */}
            <div className="flex flex-col items-start justify-center text-blue-700 font-bold">
              <h1 className="text-7xl">07</h1>
              <h2 className="mt-2 text-3xl md:text-4xl">Warranty</h2>
            </div>

            {/* Right */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-8">
                Keep your buildings in first-class condition
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Card 1 */}
                <div className="flex flex-col items-start">
                  <div className="bg-blue-800 text-white p-4 rounded">
                    {/* Placeholder Icon (replace with real Lucide if needed) */}
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 4h16v16H4z" />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-semibold text-lg">
                    2-year material warranty
                  </h3>
                  <p className="text-gray-600 mt-2">
                    We use premium materials to guarantee the highest quality
                    and long-term durability.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-start">
                  <div className="bg-blue-800 text-white p-4 rounded">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 4h16v16H4z" />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-semibold text-lg">
                    10-year structural warranty
                  </h3>
                  <p className="text-gray-600 mt-2">
                    A proper warranty will maximize the performance of your
                    buildings and maintain them in top condition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
