"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger icons

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

export default function PebheaderW() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState<string | null>(
    null
  );
  const [openMobileSubSubMenu, setOpenMobileSubSubMenu] = useState<
    string | null
  >(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setOpenMobileSubMenu(null);
    setOpenMobileSubSubMenu(null);
  };

  const navLinks: MenuItem[] = [
    { name: "Home", href: "/" },
    {
      name: "Solutions",
      href: "/system",
      // subItems: [
      //   { name: "Overview", href: "/system" },
      //   { name: "Systems", href: "/systemPage" },
      //   { name: "Products", href: "/productsPage" },
      // ],
    },

    {
      name: "Products",
      href: "",
      subItems: [
        {
          title: "Pre Engineered Buildings",
          href: "/menupage",
          subMenu: [
            { name: "Multi-Storey Building", href: "/multiStoryBuilding" },
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
            {
              name: "Prefabricated Site Infrastructure Solutions",
              href: "/site-infra",
            },
            { name: "Low Cost Housing", href: "/low-cost-housing" },
            { name: "Acoustic Enclosures", href: "/acoustic-enclosures" },
            {
              name: "Portable Security Guard Cabins",
              href: "/security-cabins",
            },
          ],
        },
        {
          title: "Light Gauge Steel Framing",
          href: "/lightGaugeSteelFraming",
          subMenu: [
            {
              name: "Prefab School",
              href: "/products/light-gauge-steel/prefab-school",
            },
          ],
        },
        {
          title: "Sandwich Panels",
          href: "/sandwichpanels",
          subMenu: [
            { name: "PUF Panels", href: "/products/sandwich-panels/puf" },
            { name: "EPS Panels", href: "/products/sandwich-panels/eps" },
            {
              name: "Rockwool Panel",
              href: "/products/sandwich-panels/rockwool",
            },
            {
              name: "Glass Wool Panels",
              href: "/products/sandwich-panels/glass-wool",
            },
          ],
        },
        {
          title: "Standard Modular Solutions",
          href: "/standardmodular",
          subMenu: [
            {
              name: "Porta Cabins",
              href: "/products/standard-modular/porta-cabins",
            },
            {
              name: "Liftable Cabin",
              href: "/products/standard-modular/liftable-cabin",
            },
            { name: "Mi Homes", href: "/products/standard-modular/mi-homes" },
            { name: "K-House", href: "/products/standard-modular/k-house" },
          ],
        },
        { title: "EPC Solutions", href: "/epcsolutions" },
      ],
    },
    {
      name: "Sectors",
      href: "/sectors",
      subItems: [
        { name: "Industrial Sector", href: "/IndustrialBuildingsConstruction" },
        { name: "Construction Sector", href: "/construction" },
        { name: "Infrastructure Sector", href: "/InfrastructureSector" },
        { name: "institutional Sector", href: "/InstitutionalSector" },
        { name: "Sports & Leisure", href: "/sportsLeisureBuilding" },
        { name: "Special Buildings", href: "/specialBuilding" },
      ],
    },
    {
      name: "Projects",
      href: "/projects",
      // subItems: [
      //   { name: "Pre Engineered Buildings", href: "/projects/pre-engineered" },
      //   { name: "Prefab Buildings", href: "/projects/prefab" },
      //   { name: "Project Videos", href: "/projects/videos" },
      // ],
    },
    { name: "Insights", href: "/insight" },

    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <header className="fixed top-0 z-50 transition-all duration-300 bg-white shadow-lg w-full left-0">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-4 transition-all duration-300">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.jpeg" alt="Logo" width={120} height={40} priority />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className="font-semibold text-lg text-black hover:text-orange-500"
              >
                {link.name}
              </Link>
              {"subItems" in link &&
                link.subItems &&
                link.subItems.length > 0 && (
                  <div
                    className={`absolute left-0 mt-2 w-56 rounded-b-3xl opacity-0 invisible 
                      group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out
                      bg-white backdrop-blur-md z-50`}
                  >
                    <ul className="py-2">
                      {link.name === "Products"
                        ? (link as ProductMenu).subItems?.map((item) => (
                            <li key={item.title} className="relative group/sub">
                              <Link
                                href={item.href}
                                className="px-4 py-2 block hover:text-orange-500 text-black"
                              >
                                {item.title}
                              </Link>
                              {item.subMenu && (
                                <div className="absolute left-full top-0 ml-2 w-64 bg-white rounded-b-3xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all">
                                  <ul className="py-2">
                                    {item.subMenu.map((sub) => (
                                      <li key={sub.name}>
                                        <Link
                                          href={sub.href}
                                          className="block px-4 py-2 hover:text-orange-500 text-black"
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
                        : (link as NormalMenu).subItems?.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="block px-4 py-2 hover:text-orange-500 text-black"
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

        {/* Hamburger menu icon */}
        <div className="lg:hidden z-50">
          <button onClick={toggleMobileMenu} className="text-3xl text-black">
            {mobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white px-4 py-6 shadow-md absolute w-full z-40">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <div>
                  <button
                    className="w-full text-left font-semibold text-black text-lg"
                    onClick={() =>
                      setOpenMobileSubMenu(
                        openMobileSubMenu === link.name ? null : link.name
                      )
                    }
                  >
                    {link.name}
                  </button>
                  {"subItems" in link &&
                    openMobileSubMenu === link.name &&
                    link.subItems && (
                      <ul className="ml-4 mt-2 space-y-2">
                        {link.name === "Products"
                          ? (link as ProductMenu).subItems?.map((item) => (
                              <li key={item.title}>
                                <button
                                  className="text-left text-black font-medium"
                                  onClick={() =>
                                    setOpenMobileSubSubMenu(
                                      openMobileSubSubMenu === item.title
                                        ? null
                                        : item.title
                                    )
                                  }
                                >
                                  {item.title}
                                </button>
                                {openMobileSubSubMenu === item.title &&
                                  item.subMenu && (
                                    <ul className="ml-4 mt-1 space-y-1">
                                      {item.subMenu.map((sub) => (
                                        <li key={sub.name}>
                                          <Link
                                            href={sub.href}
                                            onClick={() =>
                                              setMobileMenuOpen(false)
                                            }
                                            className="text-sm text-black"
                                          >
                                            {sub.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                              </li>
                            ))
                          : (link as NormalMenu).subItems?.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="text-black"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                      </ul>
                    )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}