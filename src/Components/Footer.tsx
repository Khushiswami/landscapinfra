"use client";

import { useState } from "react";
import { FaExternalLinkAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";

// Updated Item type with href support
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
      title: "Services",
      external: true,
      items: [
        {
          name: "Industry Installation and Construction",
          // subItems: [
          //   { name: "Aerospace Engineering", href: "/aerospace-engineering" },
          //   { name: "Automotive", href: "/automotive" },
          //   { name: "Rail Transportation", href: "/rail-transportation" },
          //   {
          //     name: "Trucks & Off-Highway Vehicles",
          //     href: "/trucks-offhighway",
          //   },
          // ],
        },
        {
          name: "Engineering and R&D Services",
          // subItems: [
          //   {
          //     name: "Discrete Manufacturing & Industrial Products",
          //     href: "/discrete-manufacturing",
          //   },
          //   { name: "Process Manufacturing", href: "/process-manufacturing" },
          // ],
        },
        {
          name: "Renewable Energy and solution Provider",
          // subItems: [
          //   { name: "Consumer Electronics", href: "/consumer-electronics" },
          //   { name: "MedTech", href: "/medtech" },
          //   { name: "Media & Entertainment", href: "/media-entertainment" },
          //   { name: "NexGen Comms", href: "/nexgen-comms" },
          //   { name: "Semiconductors", href: "/semiconductors" },
          //   { name: "Software & Platforms", href: "/software-platforms" },
          //   {
          //     name: "Public Infrastructure & Smart Cities",
          //     href: "/smart-cities",
          //   },
          // ],
        },
        {
          name: "Real Estate Development",
          // subItems: [
          //   { name: "Consumer Electronics", href: "/consumer-electronics" },
          //   { name: "MedTech", href: "/medtech" },
          //   { name: "Media & Entertainment", href: "/media-entertainment" },
          //   { name: "NexGen Comms", href: "/nexgen-comms" },
          //   { name: "Semiconductors", href: "/semiconductors" },
          //   { name: "Software & Platforms", href: "/software-platforms" },
          //   {
          //     name: "Public Infrastructure & Smart Cities",
          //     href: "/smart-cities",
          //   },
          // ],
        },
      ],
    },
    {
      title: "Services",
      items: [
        {
          name: "Digital Engineering",
          // subItems: [
          //   {
          //     name: "Artificial Intelligence",
          //     href: "/artificial-intelligence",
          //   },
          //   { name: "Cybersecure", href: "/cybersecure" },
          //   { name: "Security Monitoring", href: "/security-monitoring" },
          //   { name: "Security Solutions", href: "/security-solutions" },
          //   { name: "Security Services", href: "/security-services" },
          //   { name: "Immersive Experiences", href: "/immersive-experiences" },
          //   { name: "Industry 4.0", href: "/industry-4" },
          //   { name: "Product Consulting", href: "/product-consulting" },
          //   {
          //     name: "Sustainability Engineering",
          //     href: "/sustainability-engineering",
          //   },
          //   {
          //     name: "Sustainable Smart World",
          //     href: "/sustainable-smart-world",
          //   },
          //   { name: "5G", href: "/5g" },
          // ],
        },
        {
          name: "Product Engineering",
          // subItems: [
          //   { name: "CAE & CFD", href: "/cae-cfd" },
          //   { name: "CAx Automation", href: "/cax-automation" },
          //   { name: "Software Engineering", href: "/software-engineering" },
          //   { name: "Cloud Engineering", href: "/cloud-engineering" },
          //   { name: "DevOps", href: "/devops" },
          //   { name: "Embedded Systems", href: "/embedded-systems" },
          //   { name: "Engineering Analytics", href: "/engineering-analytics" },
          //   {
          //     name: "Integrated Design, Validation & Testing",
          //     href: "/design-validation",
          //   },
          //   { name: "Lab as a Service", href: "/lab-as-service" },
          //   { name: "Sustenance", href: "/sustenance" },
          //   { name: "Testing", href: "/testing" },
          //   { name: "Testing & Validation", href: "/testing-validation" },
          //   { name: "User Experience", href: "/user-experience" },
          //   { name: "VLSI", href: "/vlsi" },
          //   { name: "Voice Innovations", href: "/voice-innovations" },
          //   { name: "Wearables Engineering", href: "/wearables-engineering" },
          // ],
        },
      ],
    },
    {
      title: "Industries",
      external: true,
      items: [
        { name: "Industry Installation", href: "/industry-installation" },
        { name: "Pre Engineered Building", href: "/pebbanner" },
        { name: "Infrastructure & Energy", href: "/infrastructure-energy" },
        { name: "Engineering R&D", href: "/engineering-rd" },
        { name: "Renewable Energy", href: "/renewable-energy" },
        { name: "Real State", href: "/real-state" },
        { name: "Civil Services", href: "/civil-services" },
        { name: "Industrial Construction", href: "/industrial-construction" },
        {
          name: "Structural Engineering Services",
          href: "/structural-engineering",
        },
        { name: "Heavy Engineering", href: "/heavy-engineering" },
        { name: "Mining Metals", href: "/mining-metals" },
        { name: "Other Industries", href: "/other-industries" },
      ],
    },
    {
      title: "About Us",
      external: true,
      items: [
        { name: "Insights", href: "/insights" },

        { name: "Blogs", href: "/blogs" },
        { name: "Contact", href: "/contact" },
      ],
    },
  ];

  const toggleItem = (name: string) => {
    setOpenItem(openItem === name ? null : name);
  };

  return (
    <footer className="bg-[#000080] text-white py-12 px-6 md:px-20 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
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
                        className="text-[#c1cbd1] hover:text-[#23dce1] cursor-pointer text-sm leading-relaxed px-1 block"
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
                                className="text-[#c1cbd1] hover:text-[#23dce1] cursor-pointer text-sm py-1 pl-1 block"
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

      <div className="mt-12 border-t border-gray-700 pt-6 text-xs text-gray-400 text-center">
        © {new Date().getFullYear()} Landsking Infra
      </div>
    </footer>
  );
}