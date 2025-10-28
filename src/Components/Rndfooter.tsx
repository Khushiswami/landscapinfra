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
  // name: string;
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
    // name: "Emily Carter",
    phone: "877-017-9094",
    email: "landskinginfra@gmail.com",
    img: "/footer/cust.png",
  },
  {
    title: "Technical Support",
    // name: "Liam Rodriguez",
    phone: " 9981813922",
    email: "info@landsking.com",
    img: "/footer/tech.png",
  },
  {
    title: "Our Support",
    // name: "Sophia Nguyen",
    phone: " 9981813922 ",
    email: " landskinginfra@gmail.com",
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
    heading: "Solutions",
    links: ["Enterprise", "Small Business", "Education", "Non-Profit"],
  },
  {
    heading: "Insights",
    links: ["Blog", "Brouchers", "Whitepapers", "Carrers"],
  },
  {
    heading: "About us",
    links: ["Our History", "Innovation", "Our Mission", "Leadership"],
  },
  {
    heading: "Support",
    links: ["Contact Us"],
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
      <div className="mx-auto px-6 py-12">
        {/* Contacts + Newsletter */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contacts.map((c, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <img
                src={c.img}
                // alt={c.name}
                className="w-20 h-20 rounded-full mb-3"
              />
              <h3 className="text-[#fff] font-semibold mb-1">{c.title}</h3>
              {/* <p className="font-medium">{c.name}</p> */}
              <div className="flex items-center gap-2 mt-2">
                <FaPhoneAlt className="text-[#fff]" />
                <span>{c.phone}</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <FaEnvelope className="text-[#fff]" />
                <span>{c.email}</span>
              </div>
            </div>
          ))}

          <div className="flex flex-col items-center justify-center text-center rounded-xl p-6">
            <p className="mb-3 font-medium">Landsking Infr Pvt Limited</p>
            <button className="px-6 py-2 bg-[#fff] text-[#000080] rounded-xl shadow hover:bg-[#5c78b8] transition">
              Landsking Infr
            </button>
          </div>
        </div>

        {/* Social Icons */}
        {/* <div className="flex justify-center gap-6 text-[#fff] text-xl mb-12">
          <FaLinkedin className="cursor-pointer hover:text-[#8080FF] transition" />
          <FaYoutube className="cursor-pointer hover:text-red-600 transition" />
        </div> */}

        {/* Links with mobile dropdowns for all headings */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-left md:text-left">
          {columns.map((col, i) => (
            <div key={i} className=" md:border-none md:pb-0 pb-2">
              <h4
                className="font-semibold text-[14px] md:text-[17px] text-[#fff] mb-3 flex justify-between items-left cursor-pointer md:cursor-default"
                onClick={() => toggleDropdown(i)}
              >
                {col.heading}
                <FaChevronDown
                  className={`ml-2 transition-transform md:hidden ${
                    openDropdown === i ? "rotate-180" : ""
                  }`}
                />
              </h4>
              <ul
                className={`space-y-2 overflow-hidden transition-all duration-300 md:overflow-visible md:max-h-full md:block ${
                  openDropdown === i ? "max-h-40" : "max-h-0"
                }`}
              >
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href="#"
                      className="hover:underline hover:text-[#8080FF]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Rndfooter;
