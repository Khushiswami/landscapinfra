// // "use client";
// // import React, { useState } from "react";
// // import {
// //   FaPhoneAlt,
// //   FaEnvelope,
// //   FaLinkedin,
// //   FaYoutube,
// //   FaChevronDown,
// // } from "react-icons/fa";

// // interface Contact {
// //   title: string;
// //   // name: string;
// //   phone: string;
// //   email: string;
// //   img: string;
// // }

// // interface Column {
// //   heading: string;
// //   links: string[];
// // }

// // const contacts: Contact[] = [
// //   {
// //     title: "Customer Support",
// //     // name: "Emily Carter",
// //     phone: "877-017-9094",
// //     email: "landskinginfra@gmail.com",
// //     img: "/footer/cust.png",
// //   },
// //   {
// //     title: "Technical Support",
// //     // name: "Liam Rodriguez",
// //     phone: " 9981813922",
// //     email: "info@landsking.com",
// //     img: "/footer/tech.png",
// //   },
// //   {
// //     title: "Our Support",
// //     // name: "Sophia Nguyen",
// //     phone: " 9981813922 ",
// //     email: " landskinginfra@gmail.com",
// //     img: "/footer/support.png",
// //   },
// // ];

// // const columns: Column[] = [
// //   {
// //     heading: "Services",
// //     links: [
// //       "Mechanical Engineering",
// //       "Civil Engineering",
// //       "Cloud Services",
// //       "CAE Simulation Services",
// //       "CAD / CAM / CAE Services",
// //       "Product Engineering",
// //       "Simulation Design for Manufacturing",
// //     ],
// //   },

// //   {
// //     heading: "Insights",
// //     links: ["Blog", "Brouchers", "Whitepapers", "Carrers"],
// //   },
// //   {
// //     heading: "About us",
// //     links: ["Our History", "Innovation", "Our Mission", "Leadership"],
// //   },

// //   {
// //     heading: "Legal",
// //     links: ["Privacy Policy", "Terms of Service"],
// //   },
// // ];

// // const Rndfooter: React.FC = () => {
// //   const [openDropdown, setOpenDropdown] = useState<number | null>(null);

// //   const toggleDropdown = (index: number) => {
// //     setOpenDropdown(openDropdown === index ? null : index);
// //   };

// //   return (
// //     <footer className="bg-[#000080] text-white text-sm">
// //       <div className="mx-auto px-6 py-12">
// //         {/* Contacts + Newsletter */}
// //         <div className="   md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
// //           {contacts.map((c, i) => (
// //             <div key={i} className="flex flex-col items-center text-center">
// //               <img
// //                 src={c.img}
// //                 // alt={c.name}
// //                 className="w-10 h-10 rounded-full mb-3"
// //               />
// //               <h3 className="text-[#fff] font-semibold mb-1">{c.title}</h3>
// //               {/* <p className="font-medium">{c.name}</p> */}
// //               <div className="flex items-center gap-2 mt-2">
// //                 <FaPhoneAlt className="text-[#fff]" />
// //                 <span>{c.phone}</span>
// //               </div>
// //               <div className="flex items-center gap-2 mt-1">
// //                 <FaEnvelope className="text-[#fff]" />
// //                 <span>{c.email}</span>
// //               </div>
// //             </div>
// //           ))}

// //           <div className="flex flex-col items-center justify-center text-center rounded-xl p-6">
// //             <p className="mb-3 font-medium">Landsking Infr Pvt Limited</p>
// //             <button className="px-6 py-2 bg-[#fff] text-[#000080] rounded-xl shadow hover:bg-[#5c78b8] transition">
// //               Landsking Infr
// //             </button>
// //           </div>
// //         </div>

// //         {/* Social Icons */}
// //         {/* <div className="flex justify-center gap-6 text-[#fff] text-xl mb-12">
// //           <FaLinkedin className="cursor-pointer hover:text-[#8080FF] transition" />
// //           <FaYoutube className="cursor-pointer hover:text-red-600 transition" />
// //         </div> */}

// //         {/* Links with mobile dropdowns for all headings */}
// //         <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left md:text-left">
// //           {columns.map((col, i) => (
// //             <div key={i} className=" flex flex-col items-center text-center">
// //               <h4
// //                 className="font-semibold text-[14px] md:text-[17px] text-[#fff] mb-3 flex justify-between items-left cursor-pointer md:cursor-default"
// //                 onClick={() => toggleDropdown(i)}
// //               >
// //                 {col.heading}
// //                 <FaChevronDown
// //                   className={`ml-2 transition-transform md:hidden ${
// //                     openDropdown === i ? "rotate-180" : ""
// //                   }`}
// //                 />
// //               </h4>
// //               <ul
// //                 className={`space-y-2 overflow-hidden transition-all duration-300 md:overflow-visible md:max-h-full md:block ${
// //                   openDropdown === i ? "max-h-40" : "max-h-0"
// //                 }`}
// //               >
// //                 {col.links.map((link, j) => (
// //                   <li key={j}>
// //                     <a
// //                       href="#"
// //                       className="hover:underline hover:text-[#8080FF]"
// //                     >
// //                       {link}
// //                     </a>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Rndfooter;
// "use client";
// import React, { useState } from "react";
// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaLinkedin,
//   FaYoutube,
//   FaChevronDown,
// } from "react-icons/fa";

// interface Contact {
//   title: string;
//   phone: string;
//   email: string;
//   img: string;
// }

// interface Column {
//   heading: string;
//   links: string[];
// }

// const contacts: Contact[] = [
//   {
//     title: "Customer Support",
//     phone: "877-017-9094",
//     email: "landskinginfra@gmail.com",
//     img: "/footer/cust.png",
//   },
//   {
//     title: "Technical Support",
//     phone: "9981813922",
//     email: "info@landsking.com",
//     img: "/footer/tech.png",
//   },
//   {
//     title: "Our Support",
//     phone: "9981813922",
//     email: "landskinginfra@gmail.com",
//     img: "/footer/support.png",
//   },
// ];

// const columns: Column[] = [
//   {
//     heading: "Services",
//     links: [
//       "Mechanical Engineering",
//       "Civil Engineering",
//       "Cloud Services",
//       "CAE Simulation Services",
//       "CAD / CAM / CAE Services",
//       "Product Engineering",
//       "Simulation Design for Manufacturing",
//     ],
//   },
//   {
//     heading: "Insights",
//     links: ["Blog", "Brochures", "Whitepapers", "Careers"],
//   },
//   {
//     heading: "About Us",
//     links: ["Our History", "Innovation", "Our Mission", "Leadership"],
//   },
//   {
//     heading: "Legal",
//     links: ["Privacy Policy", "Terms of Service"],
//   },
// ];

// const Rndfooter: React.FC = () => {
//   const [openDropdown, setOpenDropdown] = useState<number | null>(null);

//   const toggleDropdown = (index: number) => {
//     setOpenDropdown(openDropdown === index ? null : index);
//   };

//   return (
//     <footer className="bg-[#000080] text-white text-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
//         {/* ✅ Contacts Section */}
//         <div className=" hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//           {contacts.map((c, i) => (
//             <div
//               key={i}
//               className="flex flex-col items-center text-center  p-6 rounded-lg shadow-sm hover:shadow-lg transition-all"
//             >
//               <img
//                 src={c.img}
//                 alt={c.title}
//                 className="w-12 h-12 rounded-full mb-3"
//               />
//               <h3 className="font-semibold text-white mb-2 text-base">
//                 {c.title}
//               </h3>
//               <div className="flex flex-col items-center gap-1 text-sm">
//                 <div className="flex items-center gap-2">
//                   <FaPhoneAlt className="text-[#fff]" />
//                   <span>{c.phone}</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <FaEnvelope className="text-[#fff]" />
//                   <span className="break-all">{c.email}</span>
//                 </div>
//               </div>
//             </div>
//           ))}

//           {/* ✅ Brand Section */}
//           <div className="flex flex-col items-center justify-center text-center  p-6 rounded-lg">
//             <p className="mb-3 font-medium text-white">
//               Landsking Infr Pvt Limited
//             </p>
//             <button className="px-6 py-2 bg-white text-[#000080] rounded-xl shadow hover:bg-[#5c78b8] hover:text-white transition">
//               Landsking Infr
//             </button>
//           </div>
//         </div>

//         {/* ✅ Links (Collapsible on Mobile) */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
//           {columns.map((col, i) => (
//             <div key={i} className="w-full">
//               {/* Heading (Clickable on Mobile) */}
//               <h4
//                 onClick={() => toggleDropdown(i)}
//                 className="flex justify-between items-center text-white font-semibold text-base cursor-pointer md:cursor-default mb-2"
//               >
//                 {col.heading}
//                 <FaChevronDown
//                   className={`ml-2 transition-transform md:hidden ${
//                     openDropdown === i ? "rotate-180" : ""
//                   }`}
//                 />
//               </h4>

//               {/* Dropdown / Expanded Links */}
//               <ul
//                 className={`transition-all duration-300 overflow-hidden md:overflow-visible md:max-h-full md:block ${
//                   openDropdown === i ? "max-h-64" : "max-h-0 md:max-h-full"
//                 }`}
//               >
//                 {col.links.map((link, j) => (
//                   <li key={j} className="py-1 text-center md:text-left">
//                     <a
//                       href="#"
//                       className="hover:underline hover:text-[#8080FF] transition"
//                     >
//                       {link}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* ✅ Social Media (Bottom) */}
//         <div className="flex justify-center items-center gap-6 mt-12 text-xl">
//           <a
//             href="https://linkedin.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-[#8080FF] transition"
//           >
//             <FaLinkedin />
//           </a>
//           <a
//             href="https://youtube.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-red-500 transition"
//           >
//             <FaYoutube />
//           </a>
//         </div>

//         {/* ✅ Footer Bottom */}
//         <div className="mt-8 text-center text-xs text-gray-300">
//           © {new Date().getFullYear()} Landsking Infra Pvt Ltd. All rights
//           reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Rndfooter;
"use client";
import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaYoutube,
  FaChevronDown,
} from "react-icons/fa";

interface Contact {
  title: string;
  phone: string;
  email: string;
  img: string;
}

interface Column {
  heading: string;
  links: string[];
}

const contacts: Contact[] = [
  {
    title: "Customer Support",
    phone: "877-017-9094",
    email: "landskinginfra@gmail.com",
    img: "/footer/cust.png",
  },
  {
    title: "Technical Support",
    phone: "9981813922",
    email: "info@landsking.com",
    img: "/footer/tech.png",
  },
  {
    title: "Our Support",
    phone: "9981813922",
    email: "landskinginfra@gmail.com",
    img: "/footer/support.png",
  },
];

const columns: Column[] = [
  {
    heading: "Services",
    links: [
      "Mechanical Engineering",
      "Civil Engineering",
      "Cloud Services",
      "CAE Simulation Services",
      "CAD / CAM / CAE Services",
      "Product Engineering",
      "Simulation Design for Manufacturing",
    ],
  },
  {
    heading: "Insights",
    links: ["Blog", "Brochures", "Whitepapers", "Careers"],
  },
  {
    heading: "About Us",
    links: ["Our History", "Innovation", "Our Mission", "Leadership"],
  },
  {
    heading: "Legal",
    links: ["Privacy Policy", "Terms of Service"],
  },
];

const Rndfooter: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <footer className="bg-[#000080] text-white text-sm">
      <div className=" mx-auto px-4 sm:px-6 lg:px-13 py-12">
        {/* ✅ Contacts Section (Now image left, content right) */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contacts.map((c, i) => (
            <div
              key={i}
              className="flex items-center bg-transparent text-white p-4 rounded-lg transition-all"
            >
              {/* Image on the left */}
              <img
                src={c.img}
                alt={c.title}
                className="w-12 h-12 rounded-full mr-4 flex-shrink-0"
              />

              {/* Text content on the right */}
              <div className="flex flex-col text-left">
                <h3 className="font-semibold text-white text-base mb-1">
                  {c.title}
                </h3>
                <div className="flex items-center gap-2 text-sm">
                  <FaPhoneAlt className="text-[#fff]" />
                  <span>{c.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm mt-1">
                  <FaEnvelope className="text-[#fff]" />
                  <span className="break-all">{c.email}</span>
                </div>
              </div>
            </div>
          ))}

          {/* ✅ Brand Section */}
          <div className="flex flex-col items-center justify-center text-center p-6 rounded-lg">
            <p className="mb-3 font-medium text-white">
              Landsking Infr Pvt Limited
            </p>
            <button className="px-6 py-2 bg-white text-[#000080] rounded-xl shadow hover:bg-[#5c78b8] hover:text-white transition">
              Landsking Infr
            </button>
          </div>
        </div>

        {/* ✅ Links (Collapsible on Mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {columns.map((col, i) => (
            <div key={i} className="w-full">
              {/* Heading (Clickable on Mobile) */}
              <h4
                onClick={() => toggleDropdown(i)}
                className="flex justify-between items-center text-white font-semibold text-base cursor-pointer md:cursor-default mb-2"
              >
                {col.heading}
                <FaChevronDown
                  className={`ml-2 transition-transform md:hidden ${
                    openDropdown === i ? "rotate-180" : ""
                  }`}
                />
              </h4>

              {/* Dropdown / Expanded Links */}
              <ul
                className={`transition-all duration-300 overflow-hidden md:overflow-visible md:max-h-full md:block ${
                  openDropdown === i ? "max-h-64" : "max-h-0 md:max-h-full"
                }`}
              >
                {col.links.map((link, j) => (
                  <li key={j} className="py-1 text-center md:text-left">
                    <a
                      href="#"
                      className="hover:underline hover:text-[#8080FF] transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ✅ Social Media (Bottom) */}
        <div className="flex justify-center items-center gap-6 mt-12 text-xl">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8080FF] transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
          >
            <FaYoutube />
          </a>
        </div>

        {/* ✅ Footer Bottom */}
        <div className="mt-8 text-center text-xs text-gray-300">
          © {new Date().getFullYear()} Landsking Infra Pvt Ltd. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Rndfooter;
