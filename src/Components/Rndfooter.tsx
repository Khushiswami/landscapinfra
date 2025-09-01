import React from "react";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaYoutube } from "react-icons/fa";

const contacts = [
 {
    title: "Customer Success",
    name: "Emily Carter",
    phone: "+1 (123) 456-7890",
    email: "emily@company.com",
    img: "industry.jpg",
  },
  {
    title: "Technical Support",
    name: "Liam Rodriguez",
    phone: "+1 (987) 654-3210",
    email: "liam@company.com",
    img: "industry.jpg",
  },
  {
    title: "Training & Education",
    name: "Sophia Nguyen",
    phone: "+1 (555) 222-3333",
    email: "sophia@company.com",
    img: "industry.jpg",
  },
];


const columns = [
  {
    heading: "Products",
    links: ["Analytics Platform", "Mobile App", "Cloud Services", "API Documentation"],
  },
  {
    heading: "Solutions",
    links: ["Enterprise", "Small Business", "Education", "Non-Profit"],
  },
  {
    heading: "Resources",
    links: ["Blog", "Guides", "Webinars", "Customer Stories"],
  },
  {
    heading: "Company",
    links: ["About Us", "Team", "Careers", "Press"],
  },
  {
    heading: "Support",
    links: ["Help Center", "Community Forum", "Contact Us", "FAQs"],
  },
  {
    heading: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Compliance"],
  },
];

const Rndfooter = () => {
  return (
    <footer className="bg-[#f5f7fb] text-slate-700 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Contacts + Newsletter in one row */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contacts.map((c, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <img
                src={c.img}
                alt={c.name}
                className="w-20 h-20 rounded-full mb-3"
              />
              <h3 className="text-slate-900 font-semibold mb-1">{c.title}</h3>
              <p className="font-medium">{c.name}</p>
              <div className="flex items-center gap-2 mt-2">
                <FaPhoneAlt className="text-slate-500" />
                <span>{c.phone}</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <FaEnvelope className="text-slate-500" />
                <span>{c.email}</span>
              </div>
            </div>
          ))}

          {/* Newsletter inside the same row */}
          <div className="flex flex-col items-center justify-center text-center  rounded-xl  p-6">
            <p className="mb-3 font-medium">Zum CADFEM Newsletter anmelden:</p>
            <button className="px-6 py-2 bg-[#6e8fd1] text-white rounded-xl shadow hover:bg-[#5c78b8] transition">
              Zur Registrierung
            </button>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-6 text-slate-600 text-xl mb-12">
          <FaLinkedin className="cursor-pointer hover:text-[#0a66c2] transition" />
          <FaYoutube className="cursor-pointer hover:text-red-600 transition" />
        </div>

        {/* Links */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center md:text-left">
          {columns.map((col, i) => (
            <div key={i}>
              <h4 className="font-semibold text-slate-900 mb-3">
                {col.heading}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href="#"
                      className="hover:underline hover:text-[#6e8fd1]"
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
