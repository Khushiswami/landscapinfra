"use client";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

interface DropdownItem {
  label: string;
  sub?: string;
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
    {
      label: "why Landsking",
      dropdown: [
        {
          title: "Our Mission",
          items: [
            { label: "Data Science + Rocket Science" },
            { label: "Our Company" },
            { label: "About Landsking" },
            { label: "Careers" },
            { label: "Partners" },
            { label: "Investors" },
            { label: "Newsroom" },
            { label: "Blog" },
            { label: "Sustainability" },
            { label: "Licensing" },
            { label: "Contact Us" },
          ],
        },
        {
          title: "Our Technology",
          items: [
            { label: "Artificial Intelligence (AI)" },
            { label: "Cloud & Hybrid Computing" },
            { label: "Digital Twin" },
            { label: "Electrification" },
            { label: "Exascale" },
            { label: "Simulation-Driven Design" },
            { label: "Smart Manufacturing" },
            { label: "Sustainability Solutions" },
            { label: "View All" },
          ],
        },
      ],
    },
    {
      label: "Products",
      dropdown: [
        {
          title: "PLATFORMS",
          items: [
            { label: " HPCWORKS", sub: "HPC & Cloud Platform" },
            { label: "Landsking HYPERWORKS", sub: "Design & Simulation Platform" },
            { label: "Landsking RAPIDMINER", sub: "Data Analytics & AI Platform" },
          ],
        },
        {
          title: "SOLUTIONS",
          items: [
            { label: "AI-Powered Engineering" },
            { label: "Data Analytics & AI" },
            { label: "Electromagnetics" },
            { label: "Electronic System Design" },
            { label: "Fluids & Thermal" },
            { label: "HPC & Cloud" },
            { label: "Internet of Things" },
            { label: "Manufacturability" },
            { label: "Materials" },
            { label: "Multiphysics" },
            { label: "Product Design" },
            { label: "Structural Analysis" },
            { label: "Structural Engineering - AEC" },
            { label: "Systems Modeling" },
          ],
        },
        {
          title: "PRODUCTS",
          items: [{ label: "View All" }, { label: "Free Trials" }],
        },
      ],
    },
    {
      label: "Industries",
      dropdown: [
        {
          title: "Industries We Serve",
          items: [
            { label: "Aerospace" },
            { label: "Architecture, Engineering, & Construction (AEC)" },
            { label: "Automotive" },
            { label: "Consumer Goods" },
            { label: "Defense" },
            { label: "Electronics" },
            { label: "Energy" },
            { label: "Financial Services" },
            { label: "Healthcare & Life Sciences" },
            { label: "Heavy Equipment" },
            { label: "Industrial Machinery" },
            { label: "Marine" },
            { label: "Process Manufacturing" },
            { label: "Rail" },
            { label: "Semiconductors" },
            { label: "Technology" },
            { label: "Weather & Climate" },
            { label: "View All" },
          ],
        },
      ],
    },
    { label: "Landsking One", href: "#" },
    {
      label: "Resources",
      dropdown: [
        {
          title: "Resources",
          items: [
            { label: "Case Studies" },
            { label: "White Papers" },
            { label: "Webinars" },
            { label: "Events" },
            { label: "Training" },
            { label: "Documentation" },
            { label: "Videos" },
            { label: "Blogs" },
            { label: "Newsroom" },
            { label: "View All" },
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

                {/* Fullscreen Dropdown */}
               {/* Fullscreen Dropdown */}
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
                <a
                  href="#"
                  className="block hover:text-orange-600 transition"
                >
                  <div className="text-base font-medium">{link.label}</div>
                  {link.sub && (
                    <div className="text-sm text-gray-500 leading-tight">
                      {link.sub}
                    </div>
                  )}
                </a>
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
              <a
                key={idx}
                href={item.href}
                className="hover:text-orange-600 transition"
              >
                {item.label}
              </a>
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
                              <a
                                href="#"
                                className="block text-gray-700 hover:text-orange-600 text-sm"
                              >
                                {link.label}
                              </a>
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
              <a
                key={idx}
                href={item.href}
                className="block hover:text-orange-600"
              >
                {item.label}
              </a>
            )
          )}
        </div>
      )}
    </header>
  );
};

export default Rndheader;
