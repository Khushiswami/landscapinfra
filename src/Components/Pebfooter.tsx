"use client";

import { useState } from "react";
import { FaExternalLinkAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import Link from "next/link";
import {
  FaXTwitter,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa6";
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

export default function Pebfooter() {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [openSection, setOpenSection] = useState<string | null>(null); // NEW for mobile sections

  const sections: Section[] = [
    {
      title: "Products",
      external: true,
      items: [
        {
          name: "Pre Engineered Buildings",
          subItems: [
            { name: "Multi-Storey Building", href: "/multiStoryBuilding" },
            { name: "Warehouse", href: "/warehouse" },
            { name: "Industrial Shed", href: "/industrialShed" },
            { name: "Factory Building", href: "/factoryBuilding" },
            { name: "Cold Storage", href: "/coldStorage" },
            { name: "Industrial Enclosures", href: "/industrialEnclosures" },
          ],
        },
        {
          name: "Modular Buildings",
          subItems: [
            { name: "Prefab Site Office", href: "/prefabSiteOffice" },
            { name: "Cold Room", href: "/coldRoom" },
            { name: "Control Room", href: "/controlRoom" },
            { name: "Clean Room", href: "/cleanRoom" },
            { name: "Railway Shelters", href: "/railwayShelters" },
            { name: "Labor Hutment", href: "/laborHutment" },
            {
              name: "Prefabricated Site Infrastructure Solutions",
              href: "/prefabricatedSite",
            },
            { name: "Low Cost Housing", href: "/lowCostHousing" },
            { name: "Acoustic Enclosures", href: "/acousticEnclosures" },
            {
              name: "Portable Security Guard Cabins",
              href: "/security-cabins",
            },
          ],
        },
        {
          name: "Light Gauge Steel Framing",
          subItems: [{ name: "Prefab School", href: "/prefabSiteOffice" }],
        },
        {
          name: "Sandwich Panels",
          subItems: [
            { name: "PUF Panels", href: "/puf" },
            { name: "EPS Panels", href: "/eps" },
            { name: "Rockwool Panel", href: "/rockwool" },
            { name: "Glass Wool Panels", href: "/glasswool" },
          ],
        },
        {
          name: "Standard Modular Solutions",
          subItems: [
            { name: "Porta Cabins", href: "/portacabins" },
            { name: "Liftable Cabin", href: "/liftablecabin" },
            { name: "Mi Homes", href: "/mihomes" },
            { name: "K-House", href: "/khouse" },
          ],
        },
        { name: "EPC Solutions", href: "/epcsolutions" },
      ],
    },
    {
      title: "Sectors",
      external: true,
      items: [
        { name: "Construction Sector", href: "/construction" },
        { name: "Infrastructure Sector", href: "/InfrastructureSector" },
        { name: "Institutional Sector", href: "/InstitutionalSector" },
        { name: "Sports & Leisure", href: "/sportsLeisureBuilding" },
        { name: "Special Buildings", href: "/specialBuilding" },
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
        { name: "Our Leadership", href: "/pebabout/leadership" },
        { name: "Our History", href: "/pebabout/history" },
        { name: "Our Mission", href: "/pebabout/mission" },
        { name: "Innovation", href: "/pebabout/innovation" },
      ],
    },
  ];

  const toggleItem = (name: string) => {
    setOpenItem(openItem === name ? null : name);
  };

  const toggleSection = (title: string) => {
    setOpenSection(openSection === title ? null : title);
  };

  return (
    <footer
      className="py-12 px-6 md:px-17 text-[14px] text-white"
      style={{
        backgroundColor: "#0d1d52",
        fontFamily: `"DM Sans", Arial, sans-serif !important`,
      }}
    >
      {/* Desktop grid */}
      <div className="hidden md:grid grid-cols-4 gap-10  mx-auto">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="flex items-center text-lg font-semibold border-b border-gray-500 pb-3">
              <span>{section.title}</span>
              {section.external && (
                <FaExternalLinkAlt className="ml-2 text-xs opacity-70" />
              )}
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
                      className={`${
                        hasSub ? "border-b border-gray-700" : ""
                      } rounded-md`}
                    >
                      <div
                        className={`flex items-center justify-between cursor-pointer ${
                          hasSub ? "text-[#8080FF]" : "text-[#c1cbd1]"
                        } hover:text-[#8080FF] px-1 py-1`}
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
                                className="text-[#c1cbd1] hover:text-[#8080FF] cursor-pointer block py-1 pl-1"
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

      {/* Mobile accordion */}
      <div className="md:hidden space-y-6 max-w-7xl mx-auto">
        {sections.map((section) => (
          <div key={section.title} className="border-b border-gray-600 pb-3">
            <button
              className="w-full flex justify-between items-center text-left text-lg font-semibold text-white"
              onClick={() => toggleSection(section.title)}
            >
              <span>{section.title}</span>
              {openSection === section.title ? (
                <FaChevronUp className="text-xs" />
              ) : (
                <FaChevronDown className="text-xs" />
              )}
            </button>

            <div
              className={`transition-all duration-300 overflow-hidden ${
                openSection === section.title ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <ul className="mt-3 space-y-3 pl-2">
                {section.items.map((item) => {
                  if (typeof item === "string") {
                    return (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-[#c1cbd1] hover:text-[#8080FF] cursor-pointer block leading-relaxed px-1"
                        >
                          {item}
                        </a>
                      </li>
                    );
                  } else {
                    const hasSub = item.subItems && item.subItems.length > 0;
                    return (
                      <div key={item.name} className="rounded-md">
                        <div
                          className={`flex items-center justify-between cursor-pointer ${
                            hasSub ? "text-[#8080FF]" : "text-[#c1cbd1]"
                          } hover:text-[#8080FF] px-1 py-1`}
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
                                  className="text-[#c1cbd1] hover:text-[#8080FF] cursor-pointer block py-1 pl-1"
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
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Top section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-white/20 pb-6 mb-6">
          {/* Logo */}
          <div className="flex items-center space-x-3  mt-5 mb-4 md:mb-0">
            {/* <Link href="/" className="flex items-center">
              <img src="/blank.jpg" alt="Logo" className="h-15 w-auto" />
            </Link> */}
            <span className="font-bold text-lg">Landsking Infra </span>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <Link href="#" aria-label="X">
              <FaXTwitter className="text-xl hover:text-[#8080FF]" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <FaLinkedin className="text-xl hover:text-[#8080FF]" />
            </Link>
            <Link href="#" aria-label="YouTube">
              <FaYoutube className="text-xl hover:text-[#8080FF]" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <FaFacebook className="text-xl hover:text-[#8080FF]" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <FaInstagram className="text-xl hover:text-[#8080FF]" />
            </Link>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between text-sm space-y-4 md:space-y-0">
          {/* Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="#" className="hover:underline">
              Copyright & Terms
            </Link>
            <Link href="#" className="hover:underline">
              Privacy
            </Link>
            <Link href="#" className="hover:underline">
              Sitemap
            </Link>
            <Link href="mailto:info@ltts.com" className="hover:underline">
              info@Landskinginfra .com
            </Link>
          </div>

          {/* Rights */}
          <div className="text-gray-300">
            © 2025 Landsking Infra Pvt. Limited. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
