"use client";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

interface DropdownItem {
  label: string;
  sub?: string;
  href?: string;
}

interface DropdownSection {
  title: string;
  items: DropdownItem[];
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownSection[];
}

const Rndheader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    {
      label: "Solutions",
      dropdown: [
        {
          title: "PLATFORMS",
          items: [
            {
              label: "HPCWORKS",
              sub: "HPC & Cloud Platform",
              href: "/platforms/hpcworks",
            },
            {
              label: "Landsking HYPERWORKS",
              sub: "Design & Simulation Platform",
              href: "/platforms/hyperworks",
            },
            {
              label: "Landsking RAPIDMINER",
              sub: "Data Analytics & AI Platform",
              href: "/platforms/rapidminer",
            },
          ],
        },
        {
          title: "SOLUTIONS",
          items: [
            {
              label: "AI-Powered Engineering",
              href: "/solutions/ai-engineering",
            },
            { label: "Data Analytics & AI", href: "/solutions/data-ai" },
            { label: "Electromagnetics", href: "/solutions/electromagnetics" },
            // Add more links as needed
          ],
        },
      ],
    },
    { label: "Projects", href: "/projects" },
    {
      label: "Insights",
      dropdown: [
        {
          title: "Resources",
          items: [
            { label: "Our History", href: "/about/history" },
            { label: "Leadership", href: "/about/leadership" },
            { label: "Our Mission", href: "/about/mission" },
            { label: "Innovation", href: "/about/innovation" },
          ],
        },
      ],
    },
    { label: "Media", href: "/media" },
    {
      label: "About",
      dropdown: [
        {
          title: "Resources",
          items: [
            { label: "Our History", href: "/about/history" },
            { label: "Leadership", href: "/about/leadership" },
            { label: "Our Mission", href: "/about/mission" },
            { label: "Innovation", href: "/about/innovation" },
          ],
        },
      ],
    },
  ];

  return (
    <header className="w-full border-b bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-orange-500 font-bold text-xl">Landsking</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6 font-medium text-gray-800">
          {navItems.map((item, idx) =>
            item.dropdown ? (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => setOpenDropdown(idx)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center space-x-1 hover:text-orange-600 transition">
                  <span>{item.label}</span>
                  <ChevronDown size={16} />
                </button>

                {openDropdown === idx && (
                  <div className="fixed left-0 top-16 w-screen bg-white border-t shadow-xl z-50">
                    <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-3 gap-12">
                      {item.dropdown.map((section, i) => (
                        <div key={i}>
                          <h4 className="text-xs font-semibold text-gray-500 tracking-wide mb-4 uppercase">
                            {section.title}
                          </h4>
                          <ul className="space-y-4">
                            {section.items.map((link, j) => (
                              <li key={j}>
                                {link.href ? (
                                  <Link
                                    href={link.href}
                                    className="block hover:text-orange-600 transition"
                                  >
                                    <div className="text-base font-medium">
                                      {link.label}
                                    </div>
                                    {link.sub && (
                                      <div className="text-sm text-gray-500 leading-tight">
                                        {link.sub}
                                      </div>
                                    )}
                                  </Link>
                                ) : (
                                  <span className="block text-base font-medium">
                                    {link.label}
                                  </span>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={idx}
                href={item.href || "/"}
                className="hover:text-orange-600 transition"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-md p-4 space-y-4">
          {navItems.map((item, idx) =>
            item.dropdown ? (
              <div key={idx}>
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === idx ? null : idx)
                  }
                  className="flex justify-between w-full text-left font-medium"
                >
                  {item.label} <ChevronDown size={16} />
                </button>

                {openDropdown === idx && (
                  <div className="mt-2 space-y-6">
                    {item.dropdown.map((section, i) => (
                      <div key={i}>
                        <h4 className="text-orange-600 font-semibold">
                          {section.title}
                        </h4>
                        <ul className="space-y-2 pl-2">
                          {section.items.map((link, j) => (
                            <li key={j}>
                              {link.href ? (
                                <Link
                                  href={link.href}
                                  className="block text-gray-700 hover:text-orange-600 text-sm"
                                >
                                  {link.label}
                                </Link>
                              ) : (
                                <span className="block text-gray-700 text-sm">
                                  {link.label}
                                </span>
                              )}
                              {link.sub && (
                                <p className="text-xs text-gray-500 pl-2">
                                  {link.sub}
                                </p>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={idx}
                href={item.href || "/"}
                className="block hover:text-orange-600"
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
};

export default Rndheader;
