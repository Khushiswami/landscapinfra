// "use client";

// import { useState } from "react";
// import { resources } from "yes/data/resources";
// import Image from "next/image";
// import { Search, ArrowRight } from "lucide-react";
// import Link from "next/link";

// export default function ResourcesPage() {
//   const [industry, setIndustry] = useState("All");
//   const [type, setType] = useState("All");
//   const [search, setSearch] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);

//   const itemsPerPage = 6;

//   const filtered = resources.filter((item) => {
//     const matchesIndustry = industry === "All" || item.industry === industry;
//     const matchesType = type === "All" || item.type === type;
//     const matchesSearch =
//       search === "" || item.title.toLowerCase().includes(search.toLowerCase());

//     return matchesIndustry && matchesType && matchesSearch;
//   });

//   // Pagination
//   const totalPages = Math.ceil(filtered.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const paginatedItems = filtered.slice(startIndex, startIndex + itemsPerPage);

//   const handlePrev = () => {
//     setCurrentPage((prev) => Math.max(prev - 1, 1));
//   };

//   const handleNext = () => {
//     setCurrentPage((prev) => Math.min(prev + 1, totalPages));
//   };

//   return (
//     <section className="px-6 md:px-20 py-12">
//       <h1 className="text-3xl font-bold text-[#000080] mb-10">Resources</h1>

//       {/* Filters */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
//         <div>
//           <h4 className="text-sm font-semibold mb-2 text-[#000080]">
//             Industry
//           </h4>
//           <select
//             className="border p-3 rounded-lg w-full"
//             value={industry}
//             onChange={(e) => setIndustry(e.target.value)}
//           >
//             <option>All</option>
//             <option>Telecom</option>
//             <option>Smart Cities</option>
//             <option>Automotive</option>
//             <option>R&D</option>
//             <option>Tech</option>
//           </select>
//         </div>

//         <div>
//           <h4 className="text-sm font-semibold mb-2 text-[#000080]">Type</h4>
//           <select
//             className="border p-3 rounded-lg w-full"
//             value={type}
//             onChange={(e) => setType(e.target.value)}
//           >
//             <option>All</option>
//             <option>eBook</option>
//             <option>Whitepaper</option>
//             <option>Insights</option>
//             <option>Events</option>
//             <option>Brochures</option>
//           </select>
//         </div>

//         <div>
//           <h4 className="text-sm font-semibold mb-2 text-[#000080]">Search </h4>

//           <div className="relative">
//             <input
//               className="border p-3 rounded-lg w-full pl-12"
//               placeholder="Search by keyword"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//             <Search className="absolute left-4 top-3 text-gray-500" />
//           </div>
//         </div>
//       </div>

//       {/* Results Count */}
//       <p className="text-gray-600 mb-4">Showing {filtered.length} results</p>

//       {/* Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {paginatedItems.map((item) => (
//           <div
//             key={item.id}
//             className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer bg-white flex flex-col"
//           >
//             {/* Image */}
//             <Image
//               src={item.image}
//               alt={item.title}
//               width={500}
//               height={300}
//               className="w-full h-56 object-cover"
//             />

//             {/* Text Content */}
//             <div className="p-5 flex-1">
//               <span className="px-3 py-1 text-xs bg-[#000080] text-white rounded-full">
//                 {item.type}
//               </span>

//               <h3 className="mt-3 text-lg font-bold text-[#000080]">
//                 {item.title}
//               </h3>

//               <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
//             </div>

//             {/* Arrow Button Below */}
//             <div className="p-5 flex justify-end">
//               <Link
//                 href={item.link}
//                 className="p-2 bg-[#000080] text-white rounded-sm hover:bg-[#8080FF transition"
//               >
//                 <ArrowRight size={20} />
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Pagination Controls */}
//       <div className="flex justify-center items-center gap-4 mt-10">
//         <button
//           onClick={handlePrev}
//           disabled={currentPage === 1}
//           className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
//         >
//           Prev
//         </button>
//         <span>
//           Page {currentPage} of {totalPages}
//         </span>
//         <button
//           onClick={handleNext}
//           disabled={currentPage === totalPages}
//           className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>
//     </section>
//   );
// }
"use client";

import { useState } from "react";
import { resources } from "yes/data/resources";
import Image from "next/image";
import { Search, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ResourcesPage() {
  const [industry, setIndustry] = useState("All");
  const [type, setType] = useState("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  const filtered = resources.filter((item) => {
    const matchesIndustry = industry === "All" || item.industry === industry;
    const matchesType = type === "All" || item.type === type;
    const matchesSearch =
      search === "" || item.title.toLowerCase().includes(search.toLowerCase());

    return matchesIndustry && matchesType && matchesSearch;
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = filtered.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <section className="px-6 md:px-20 py-12">
      <h1 className="text-3xl font-bold text-[#000080] mb-10">Resources</h1>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div>
          <h4 className="text-sm font-semibold mb-2 text-[#000080]">
            Industry
          </h4>
          <select
            className="border p-3 rounded-lg w-full"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          >
            <option>All</option>
            <option>Solar</option>
            <option>PEB</option>
            <option>Infrastructure</option>
            <option>Sustainability</option>
            <option>Construction</option>
          </select>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-2 text-[#000080]">Type</h4>
          <select
            className="border p-3 rounded-lg w-full"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option>All</option>
            <option>eBook</option>
            <option>Whitepaper</option>
            <option>Insight</option>
            <option>Brochure</option>
          </select>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-2 text-[#000080]">Search</h4>
          <div className="relative">
            <input
              className="border p-3 rounded-lg w-full pl-12"
              placeholder="Search by keyword"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search className="absolute left-4 top-3 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Results Count */}
      <p className="text-gray-600 mb-4">Showing {filtered.length} results</p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {paginatedItems.map((item) => (
          <div
            key={item.id}
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition bg-white flex flex-col"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={300}
              className="w-full h-56 object-cover"
            />

            <div className="p-5 flex-1">
              <span className="px-3 py-1 text-xs bg-[#000080] text-white rounded-full">
                {item.type}
              </span>

              <h3 className="mt-3 text-lg font-bold text-[#000080]">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
            </div>

            <div className="p-5 flex justify-end">
              <Link
                href={`/resources/${item.id}`}
                className="p-2 bg-[#000080] text-white rounded-sm hover:bg-[#8080FF] transition"
              >
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
}
