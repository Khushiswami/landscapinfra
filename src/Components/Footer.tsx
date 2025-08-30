"use client";

import { useState } from "react";
import { FaExternalLinkAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";

type Item =
  | string
  | {
      name: string;
      href?: string;
      subItems?: { name: string; href?: string }[];
    };

type Section = {
  title: string;
  link?: string;
  external?: boolean;
  items: Item[];
};

export default function Footer() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const sections: Section[] = [
    {
      title: "Industries",
      external: true,
      items: [
        {
          name: "Industry Installation and Construction",
          subItems: [
            { name: "Power", href: "/power" },
            { name: "Transportation", href: "/transportation" },
            { name: "Water", href: "/water" },
            { name: "Industrial & Buildings", href: "/industrialBuildings" },
          ],
        },
        {
          name: "Pre Engineered Buildings",
          subItems: [
            { name: "Pre Engineered Buildings", href: "/menupage" },
            { name: "Modular Buildings", href: "/modular" },
            { name: "Light Gauge Steel Framing", href: "/lightGaugeSteelFraming" },
            { name: "Sandwich Panels", href: "/sandwichpanels" },
            { name: "Standard Modular Solutions", href: "/standardmodular" },
          ],
        },
        { name: "Renewable Energy and solution Provider" },
        { name: "Real Estate Development" },
      ],
    },
    {
      title: "Expertise",
      external: true,
      items: [
        { name: "Heavy Engineering", href: "/heavyengineering" },
        { name: "Office Space", href: "/officespace" },
        { name: "Public Office", href: "/publicoffice" },
        { name: "Water Infrastructure", href: "/waterinfrastructure" },
        { name: "Industry Building Solutions", href: "/structuralsteel" },
        { name: "Other Industries", href: "/otherindustries" },
        { name: "Simulation Service", href: "/simulation" },
        { name: "Factories Installation", href: "https://staging.landsking.com/fabrication/" },
        { name: "Cold Storage & Warehouse", href: "/coldstorageandwarehouse" },
        { name: "Solar Services", href: "/solar" },
        { name: "HVAC Services", href: "/hvac" },
        { name: "Fabrication", href: "/fabrication" },
        { name: "Fire Safety", href: "/fire-safety" },
        { name: "Green Building", href: "/greenbuilding" },
        { name: "Mining and Metals", href: "/miningandmetals" },
      ],
    },
    {
      title: "Insights",
      external: true,
      items: [
        { name: "Blogs", href: "/insights/reports" },
        { name: "Brochures", href: "/insights/articles" },
        { name: "Whitepaper", href: "/insights/case-studies" },
        { name: "Career", href: "/insights/research" },
      ],
    },
    {
      title: "About Us",
      external: true,
      items: [
        { name: "Our History", href: "/company" },
        { name: "Leadership", href: "/about/leadership" },
        { name: "Our Mission", href: "/mission" },
        { name: "Innovation", href: "/innovation" },
      ],
    },
  ];

  const toggleItem = (name: string) => {
    setOpenItem(openItem === name ? null : name);
  };

  return (
    <footer
      className="py-12 px-6 md:px-20 text-[14px] text-white"
      style={{
        backgroundColor: "#0d1d52",
        fontFamily: `"DM Sans", Arial, sans-serif !important`,
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="flex items-center text-lg font-semibold border-b border-gray-500 pb-3">
              <span>{section.title}</span>
              {section.external && <FaExternalLinkAlt className="ml-2 text-xs opacity-70" />}
            </h3>

            <ul className="mt-5 space-y-3">
              {section.items.map((item) => {
                if (typeof item === "string") {
                  return (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-[#c1cbd1] hover:text-[#23dce1] cursor-pointer block leading-relaxed px-1"
                      >
                        {item}
                      </a>
                    </li>
                  );
                } else {
                  const hasSub = item.subItems && item.subItems.length > 0;
                  return (
                    <div
                      key={item.name}
                      className={`${hasSub ? "border-b border-gray-700" : ""} rounded-md`}
                    >
                      <div
                        className={`flex items-center justify-between cursor-pointer ${
                          hasSub ? "text-[#23dce1]" : "text-[#c1cbd1]"
                        } hover:text-[#23dce1] px-1 py-1`}
                        onClick={() => hasSub && toggleItem(item.name)}
                      >
                        {item.href ? (
                          <a href={item.href} className="block w-full">
                            {item.name}
                          </a>
                        ) : (
                          item.name
                        )}

                        {hasSub && (
                          <span>
                            {openItem === item.name ? (
                              <FaChevronUp className="ml-2 text-xs" />
                            ) : (
                              <FaChevronDown className="ml-2 text-xs" />
                            )}
                          </span>
                        )}
                      </div>

                      {hasSub && (
                        <ul
                          className={`pl-6 space-y-2 transition-all duration-300 overflow-hidden ${
                            openItem === item.name ? "max-h-96" : "max-h-0"
                          }`}
                        >
                          {item.subItems!.map((sub) => (
                            <li key={sub.name}>
                              <a
                                href={sub.href || "#"}
                                className="text-[#c1cbd1] hover:text-[#23dce1] cursor-pointer block py-1 pl-1"
                              >
                                {sub.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                }
              })}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-gray-400 text-center">
        © {new Date().getFullYear()} Landsking Infra Pvt.Ltd.
      </div>
    </footer>
  );
}