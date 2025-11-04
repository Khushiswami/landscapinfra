"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

// TypeScript types
type MenuLink = {
  label: string;
  href: string;
};

type MegaMenu = {
  left: {
    title: string;
    text: string;
    buttonText: string;
    buttonLink: string;
    image?: string;
    linkText?: string;
    linkHref?: string;
  };
  needs: MenuLink[];
  propertyTypes: MenuLink[];
  // industries: MenuLink[];
};

export default function Realstateheader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(
    null
  );

  // Mega menu states
  const [megaMenuOpen, setMegaMenuOpen] = useState<string | null>(null);

  // Close mega menu when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        !(e.target as HTMLElement).closest("#mega-menu-container") &&
        !(e.target as HTMLElement).closest(".top-nav-item")
      ) {
        setMegaMenuOpen(null);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const menuItems = [
    { label: "Services", href: "/needs" },
    { label: "Properties", href: "/properties" },
    { label: "People & Offices", href: "/people" },
    { label: "Insights", href: "/insights" },
    { label: "About Us", href: "/about" },
  ];

  const ServicesMenu: MegaMenu = {
    left: {
      title: "Services",
      text: "Unlock the value in every dimension of your real estate with integrated, data-led Services that support your overall business strategy.",
      buttonText: "See Overview",
      buttonLink: "/needs",
      image: "/solar.jpg",
      linkText: "Sustainability Solutions",
      linkHref: "/Services/sustainability",
    },
    needs: [
      {
        label: "Invest, Finance & Value",
        href: "/needs",
      },
      { label: "Plan, Lease & Occupy", href: "/needs" },
      {
        label: "Manage Properties & Portfolios",
        href: "/needs",
      },
    ],
    propertyTypes: [
      { label: "Logistics & Industrial", href: "/property-types" },
      { label: "Retail", href: "/property-types" },
      { label: "Residential", href: "/property-types" },
      { label: "Office", href: "/property-types" },
    ],

    // industries: [
    //   { label: "Data Center", href: "/Services/datacenter" },
    //   { label: "Life Sciences", href: "/Services/lifescience" },
    //   { label: "Banking & Financial Services", href: "/Services/banking" },
    //   { label: "Tech, Media & Telecommunications", href: "/Services/tech" },
    //   { label: "Healthcare", href: "/Services/healthcare" },
    // ],
  };

  const propertiesMenu: MegaMenu = {
    left: {
      title: "Properties",
      text: "Find the right property for your business from our extensive listings of office, retail, and industrial spaces.",
      buttonText: "Browse All Properties",
      buttonLink: "/properties",
      image: "/office.jpg",
      linkText: "Leasing Opportunities",
      linkHref: "/properties",
    },
    needs: [{ label: "Properties for Lease", href: "/properties" }],
    propertyTypes: [
      {
        label: "Properties for Sale",
        href: "/properties",
      },
      {
        label: "Investment Property For Sale",
        href: "/properties",
      },
    ],
    // industries: [{ label: "Hospitality", href: "/Services/hospitality" }],
  };

  const peopleMenu: MegaMenu = {
    left: {
      title: "People & Offices",
      text: "Meet our team and find the right office for your business.",
      buttonText: "Find Offices",
      buttonLink: "/people",
      image: "/office.jpg",
      linkText: "Our Team",
      linkHref: "/people/team",
    },
    needs: [],
    propertyTypes: [],
    // industries: [],
  };

  const activeMenu: MegaMenu | null =
    megaMenuOpen === "Services"
      ? ServicesMenu
      : megaMenuOpen === "Properties"
      ? propertiesMenu
      : megaMenuOpen === "People & Offices"
      ? peopleMenu
      : null;

  return (
    <header className="w-full border-b border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpeg"
              alt="CBRE Logo"
              width={100}
              height={30}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 text-md font-medium text-black">
            {menuItems.map((item) => {
              const hasMega =
                item.label === "Services" ||
                item.label === "Properties" ||
                item.label === "People & Offices";
              return (
                <div key={item.label} className="relative top-nav-item">
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      if (hasMega) {
                        e.preventDefault();
                        setMegaMenuOpen((prev) =>
                          prev === item.label ? null : item.label
                        );
                      } else {
                        setMegaMenuOpen(null);
                      }
                    }}
                    className="hover:text-[#000080] transition flex items-center"
                  >
                    {item.label}
                    {hasMega && <ChevronDown className="ml-1 h-4 w-4" />}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Right Side */}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mega Menu Desktop */}
      {activeMenu && (
        <div
          id="mega-menu-container"
          className="absolute left-0 w-full bg-white border-t border-gray-200 shadow-lg z-50"
        >
          <div className="max-w-7xl mx-auto px-8 py-8 grid grid-cols-4 gap-8">
            {/* LEFT COLUMN */}
            <div className="col-span-1">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                {activeMenu.left.title}
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                {activeMenu.left.text}
              </p>
              <Link
                href={activeMenu.left.buttonLink}
                className="inline-block bg-[#000080] text-white px-4 py-2 rounded hover:bg-[#000080] transition mb-6"
              >
                {activeMenu.left.buttonText}
              </Link>
              {activeMenu.left.image && (
                <div className="flex items-center gap-4 mt-2">
                  <Image
                    src={activeMenu.left.image}
                    alt="Promo"
                    width={200}
                    height={120}
                    className="rounded"
                  />
                  {activeMenu.left.linkHref && (
                    <Link
                      href={activeMenu.left.linkHref}
                      className="text-[#000080] text-sm font-medium hover:underline"
                    >
                      {activeMenu.left.linkText}
                    </Link>
                  )}
                </div>
              )}
            </div>

            {/* NEEDS */}
            {activeMenu.needs.length > 0 && (
              <div>
                <h3 className="text-gray-800 font-semibold border-b pb-2 mb-3">
                  Needs
                </h3>
                <ul className="space-y-2">
                  {activeMenu.needs.map((link: MenuLink) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="hover:text-[#000080] transition"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* PROPERTY TYPES */}
            {activeMenu.propertyTypes.length > 0 && (
              <div>
                <h3 className="text-gray-800 font-semibold border-b pb-2 mb-3">
                  Property Types
                </h3>
                <ul className="space-y-2">
                  {activeMenu.propertyTypes.map((link: MenuLink) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="hover:text-[#000080] transition"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* INDUSTRIES */}
            {/* {activeMenu.industries.length > 0 && (
              <div>
                <h3 className="text-gray-800 font-semibold border-b pb-2 mb-3">
                  Industries
                </h3>
                <ul className="space-y-2">
                  {activeMenu.industries.map((link: MenuLink) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="hover:text-[#000080] transition"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )} */}
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white">
          <nav className="px-4 py-3 space-y-2 text-gray-900">
            {menuItems.map((item) => {
              const hasMega =
                item.label === "Services" ||
                item.label === "Properties" ||
                item.label === "People & Offices";

              const activeMobileMenu: MegaMenu =
                item.label === "Services"
                  ? ServicesMenu
                  : item.label === "Properties"
                  ? propertiesMenu
                  : peopleMenu;

              return (
                <div key={item.label} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="hover:[#000080] transition flex-1 text-left"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {hasMega && (
                      <button
                        onClick={() =>
                          setMobileSubmenuOpen(
                            mobileSubmenuOpen === item.label ? null : item.label
                          )
                        }
                        className="p-1"
                        aria-label="Toggle submenu"
                      >
                        {mobileSubmenuOpen === item.label ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </button>
                    )}
                  </div>

                  {/* Mega Menu Content */}
                  {hasMega && mobileSubmenuOpen === item.label && (
                    <div className="pl-4 pt-2 space-y-4 text-sm">
                      {/* LEFT SECTION */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          {activeMobileMenu.left.title}
                        </h3>
                        <p className="text-gray-600 mb-2">
                          {activeMobileMenu.left.text}
                        </p>
                        <Link
                          href={activeMobileMenu.left.buttonLink}
                          className="inline-block bg-[#000080] text-white px-3 py-1 rounded hover:bg-[#000080] transition mb-2"
                        >
                          {activeMobileMenu.left.buttonText}
                        </Link>
                        {activeMobileMenu.left.image && (
                          <div className="mt-2">
                            <Image
                              src={activeMobileMenu.left.image}
                              alt="Promo"
                              width={180}
                              height={100}
                              className="rounded mb-1"
                            />
                            {activeMobileMenu.left.linkHref && (
                              <Link
                                href={activeMobileMenu.left.linkHref}
                                className="text-[#000080] text-sm font-medium hover:underline"
                              >
                                {activeMobileMenu.left.linkText}
                              </Link>
                            )}
                          </div>
                        )}
                      </div>

                      {/* NEEDS */}
                      {activeMobileMenu.needs.length > 0 && (
                        <div>
                          <h4 className="font-semibold mb-1">Needs</h4>
                          <ul className="space-y-1">
                            {activeMobileMenu.needs.map((link: MenuLink) => (
                              <li key={link.label}>
                                <Link
                                  href={link.href}
                                  className="block hover:text-[#000080] transition"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* PROPERTY TYPES */}
                      {activeMobileMenu.propertyTypes.length > 0 && (
                        <div>
                          <h4 className="font-semibold mb-1">Property Types</h4>
                          <ul className="space-y-1">
                            {activeMobileMenu.propertyTypes.map(
                              (link: MenuLink) => (
                                <li key={link.label}>
                                  <Link
                                    href={link.href}
                                    className="block hover:text-[#000080] transition"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {link.label}
                                  </Link>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
