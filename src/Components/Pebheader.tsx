"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type NormalMenu = {
  name: string;
  href: string;
  subItems?: { name: string; href: string }[];
};

type ProductSubMenu = {
  title: string;
  href: string;
  subMenu?: { name: string; href: string }[];
};

type ProductMenu = {
  name: "Products";
  href: string;
  subItems?: ProductSubMenu[];
};

type MenuItem = NormalMenu | ProductMenu;

export default function Pebheader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: MenuItem[] = [
    { name: "Home", href: "/" },
     { name: "About", href: "/About" },
    // { name: "About Us", href: "/About", subItems: [
    //   { name: "EPACK Prefab", href: "/about/epack" },
    //   { name: "Group Overview", href: "/about/group-overview" }
    // ] },
    {
      name: "Products",
      href: "/products",
      subItems: [
        {
          title: "Pre Engineered Buildings",
          href: "/menupage",
          subMenu: [
            { name: "Multi-Storey Building", href: "/multistoreybuilding" },
            { name: "Warehouse", href: "/warehouse" },
            { name: "Industrial Shed", href: "/industrialShed" },
            { name: "Factory Building", href: "/factoryBuilding" },
            { name: "Cold Storage", href: "/coldStorage" },
            { name: "Industrial Enclosures", href: "/industrialEnclosures" },
          ],
        },
        {
          title: "Modular Buildings",
          href: "/modular",
          subMenu: [
            { name: "Prefab Site Office", href: "/prefabSiteOffice" },
            { name: "Cold Room", href: "/coldRoom" },
            { name: "Control Room", href: "/controlRoom" },
            { name: "Clean Room", href: "/cleanRoom" },
            { name: "Railway Shelters", href: "/railwayShelters" },
            { name: "Labor Hutment", href: "/labor-hutment" },
            { name: "Prefabricated Site Infrastructure Solutions", href: "/site-infra" },
            { name: "Low Cost Housing", href: "/low-cost-housing" },
            { name: "Acoustic Enclosures", href: "/acoustic-enclosures" },
            { name: "Portable Security Guard Cabins", href: "/security-cabins" },
          ],
        },
        { title: "Light Gauge Steel Framing", href: "/lightGaugeSteelFraming", subMenu: [
            { name: "Prefab School", href: "/products/light-gauge-steel/prefab-school" }
        ] },
        { title: "Sandwich Panels", href: "/sandwichpanels", subMenu: [
            { name: "PUF Panels", href: "/products/sandwich-panels/puf" },
            { name: "EPS Panels", href: "/products/sandwich-panels/eps" },
            { name: "Rockwool Panel", href: "/products/sandwich-panels/rockwool" },
            { name: "Glass Wool Panels", href: "/products/sandwich-panels/glass-wool" },
        ] },
        { title: "Standard Modular Solutions", href: "/standardmodular", subMenu: [
            { name: "Porta Cabins", href: "/products/standard-modular/porta-cabins" },
            { name: "Liftable Cabin", href: "/products/standard-modular/liftable-cabin" },
            { name: "Mi Homes", href: "/products/standard-modular/mi-homes" },
            { name: "K-House", href: "/products/standard-modular/k-house" },
        ] },
        { title: "EPC Solutions", href: "/epcsolutions" },
      ],
    },
    { name: "Sectors", href: "/sectors", subItems: [
      { name: "Industrial Sector", href: "/IndustrialBuildingsConstruction" },
      { name: "Construction Sector", href: "/construction" },
      { name: "Infrastructure Sector", href: "InfrastructureSector" },
      { name: "institutional Sector", href: "InstitutionalSector" },
      { name: "Sports & Leisure", href: "/sportsLeisureBuilding" },
      { name: "Special Buildings", href: "/specialBuilding" }
    ] },
    { name: "Projects", href: "/projects", subItems: [
      { name: "Pre Engineered Buildings", href: "/projects/pre-engineered" },
      { name: "Prefab Buildings", href: "/projects/prefab" },
      { name: "Project Videos", href: "/projects/videos" }
    ] },
     {
      name: "Solutions",
      href: "/system",
      subItems: [
         { name: "Overview", href: "/system" },
    { name: "Systems", href: "/systemPage" },
    { name: "Products", href: "/productsPage" },
      ],
    },
    { name: "Contact", href: "/contact" },
  ];
  
  return (
    <header
      className={`fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg w-[90%] left-1/2 -translate-x-1/2 rounded-b-2xl"
          : "bg-transparent w-full left-0"
      }`}
    >
      <div
        className={`max-w-[1400px] mx-auto flex items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "py-4" : "py-6"
        }`}
      >
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Kirby Logo"
            width={scrolled ? 120 : 150}
            height={scrolled ? 40 : 50}
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center space-x-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className={`transition font-semibold text-lg ${
                  scrolled ? "text-black" : "text-white"
                } hover:text-orange-500`}
              >
                {link.name}
              </Link>

              {/* Dropdown */}
              {"subItems" in link && link.subItems && link.subItems.length > 0 && (
                <div
                  className={`absolute left-0 mt-2 w-56 rounded-t-none rounded-b-3xl opacity-0 invisible 
                    group-hover:opacity-100 group-hover:visible
                    transform translate-y-2 group-hover:translate-y-0 
                    transition-all duration-300 ease-out backdrop-blur-md
                    ${scrolled ? "bg-white" : ""}`}
                  style={!scrolled ? { backgroundColor: "rgba(255, 255, 255, 0.2)" } : {}}
                >
                  <ul className="py-2">
                    {link.name === "Products"
                      ? (link as ProductMenu).subItems?.map((item) => (
                          <li
                            key={item.title}
                            className={`relative group/sub border-b last:border-0 ${
                              scrolled ? "border-gray-300" : "border-white/40"
                            }`}
                          >
                            <Link
                              href={item.href}
                              className={`px-4 py-2 font-medium block transition cursor-pointer ${
                                scrolled
                                  ? "text-black hover:text-orange-500"
                                  : "text-white hover:text-orange-400"
                              }`}
                            >
                              {item.title}
                            </Link>

                            {item.subMenu && item.subMenu.length > 0 && (
                              <div
                                className={`absolute left-full top-0 ml-1 min-w-[14rem] rounded-b-3xl opacity-0 invisible 
                                  group-hover/sub:opacity-100 group-hover/sub:visible
                                  transform translate-x-2 group-hover/sub:translate-x-0 
                                  transition-all duration-300 ease-out
                                  ${scrolled ? "bg-white" : ""}`}
                                style={
                                  !scrolled
                                    ? { backgroundColor: "rgba(255, 255, 255, 0.2)" }
                                    : {}
                                }
                              >
                                <ul className="py-2">
                                  {item.subMenu.map((sub) => (
                                    <li
                                      key={sub.name}
                                      className={`border-b last:border-0 ${
                                        scrolled
                                          ? "border-gray-300"
                                          : "border-white/40"
                                      }`}
                                    >
                                      <Link
                                        href={sub.href}
                                        className={`block px-4 py-2 transition ${
                                          scrolled
                                            ? "text-black hover:text-orange-500"
                                            : "text-white hover:text-orange-400"
                                        }`}
                                      >
                                        {sub.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </li>
                        ))
                      : (link as NormalMenu).subItems?.map((item, index) => (
                          <li
                            key={item.name}
                            className={`${
                              index !==
                              ((link as NormalMenu).subItems?.length ?? 0) - 1
                                ? scrolled
                                  ? "border-b border-gray-300"
                                  : "border-b border-white/40"
                                : ""
                            }`}
                          >
                            <Link
                              href={item.href}
                              className={`block px-4 py-2 transition ${
                                scrolled
                                  ? "text-black hover:text-orange-500"
                                  : "text-white hover:text-orange-400"
                              }`}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
