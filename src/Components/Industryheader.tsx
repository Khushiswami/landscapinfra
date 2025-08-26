// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { HiMenu, HiX } from "react-icons/hi"; // Hamburger icons

// type NormalMenu = {
//   name: string;
//   href: string;
//   subItems?: { name: string; href: string }[];
// };

// type MegaSubMenu = {
//   title: string;
//   href: string;
//   subMenu?: { name: string; href: string }[];
// };

// type MegaMenu = {
//   name: "Business Areas";
//   href: string;
//   subItems?: MegaSubMenu[];
// };

// type MenuItem = NormalMenu | MegaMenu;

// export default function Industryheader() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [openMobileSubMenu, setOpenMobileSubMenu] = useState<string | null>(
//     null
//   );
//   const [openMobileSubSubMenu, setOpenMobileSubSubMenu] = useState<
//     string | null
//   >(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//     setOpenMobileSubMenu(null);
//     setOpenMobileSubSubMenu(null);
//   };

//   const navLinks: MenuItem[] = [
//     { name: "About Landsking", href: "/" },
//     { name: "Our Commitment", href: "/system" },

//     {
//       name: "Business Areas",
//       href: "#",
//       subItems: [
//         {
//           title: "Power",
//           href: "/power",
//           subMenu: [
//             { name: "Hydro Power", href: "/power/hydro" },
//             { name: "Nuclear Power", href: "/power/nuclear" },
//             { name: "Thermal Power", href: "/power/thermal" },
//           ],
//         },
//         {
//           title: "Transportation",
//           href: "/transportation",
//           subMenu: [
//             {
//               name: "Highways, Roads & Bridges",
//               href: "/transportation/highways",
//             },
//             { name: "Railways", href: "/transportation/railways" },
//             {
//               name: "Mass Rapid Transit Systems",
//               href: "/transportation/mrts",
//             },
//             { name: "Ports & Harbours", href: "/transportation/ports" },
//           ],
//         },
//         {
//           title: "Water",
//           href: "/water",
//           subMenu: [
//             { name: "Water Supply & Sanitation", href: "/water/supply" },
//             { name: "Irrigation", href: "/water/irrigation" },
//           ],
//         },
//         {
//           title: "Industrial & Buildings",
//           href: "/industrial-buildings",
//           subMenu: [
//             {
//               name: "Manufacturing & Process Plants",
//               href: "/industrial/plants",
//             },
//             {
//               name: "Commercial & Institutional",
//               href: "/industrial/commercial",
//             },
//             {
//               name: "Smart Cities & Townships",
//               href: "/industrial/smart-cities",
//             },
//           ],
//         },
//       ],
//     },

//     {
//       name: "Carrers",
//       href: "/sectors",
//       subItems: [
//         { name: "Industrial Sector", href: "/IndustrialBuildingsConstruction" },
//         { name: "Construction Sector", href: "/construction" },
//         { name: "Infrastructure Sector", href: "/InfrastructureSector" },
//         { name: "Institutional Sector", href: "/InstitutionalSector" },
//         { name: "Sports & Leisure", href: "/sportsLeisureBuilding" },
//         { name: "Special Buildings", href: "/specialBuilding" },
//       ],
//     },
//     { name: "Investors", href: "/investors" },
//     { name: "Media Room", href: "/insight" },
//   ];

//   return (
//     <header
//       className={`fixed top-0 z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-white shadow-lg w-[100%] left-1/2 -translate-x-1/2 rounded-b-2xl"
//           : "bg-transparent w-full left-0"
//       }`}
//     >
//       <div
//         className={` mx-auto flex items-center justify-between px-6 transition-all duration-300 ${
//           scrolled ? "py-4" : "py-6"
//         }`}
//       >
//         {/* Logo */}
//         <Link href="/">
//           <Image
//             src="/logo.jpeg"
//             alt="logo"
//             width={scrolled ? 120 : 150}
//             height={scrolled ? 40 : 50}
//             priority
//           />
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden lg:flex items-center space-x-8">
//           {navLinks.map((link) => (
//             <div key={link.name} className="relative group">
//               <Link
//                 href={link.href}
//                 className={`font-semibold text-lg ${
//                   scrolled ? "text-black" : "text-white"
//                 } hover:text-orange-500`}
//               >
//                 {link.name}
//               </Link>

//               {/* Dropdowns */}
//               {"subItems" in link &&
//                 link.subItems &&
//                 link.subItems.length > 0 && (
//                   <>
//                     {link.name === "Business Areas" ? (
//                       // Mega Menu
//                       <div
//                         className={`absolute  left-0 mt-2 w-[430px] grid grid-cols-4 gap-6 p-6 rounded-b-2xl shadow-lg opacity-0 invisible
//                         group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out
//                         backdrop-blur-md z-50 ${
//                           scrolled ? "bg-white" : "bg-white/90"
//                         }`}
//                       >
//                         {(link as MegaMenu).subItems?.map((col) => (
//                           <div key={col.title}>
//                             <h4 className="font-semibold text-blue-700 mb-2">
//                               {col.title}
//                             </h4>
//                             <ul className="space-y-1">
//                               {col.subMenu?.map((item) => (
//                                 <li key={item.name}>
//                                   <Link
//                                     href={item.href}
//                                     className="block text-sm text-gray-700 hover:text-orange-500"
//                                   >
//                                     {item.name}
//                                   </Link>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                         ))}
//                       </div>
//                     ) : (
//                       // Normal dropdown
//                       <div
//                         className={`absolute left-0 mt-2 w-56 rounded-b-2xl opacity-0 invisible
//                         group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out
//                         backdrop-blur-md z-50 ${
//                           scrolled ? "bg-white" : "bg-white/20"
//                         }`}
//                       >
//                         <ul className="py-2">
//                           {(link as NormalMenu).subItems?.map((item) => (
//                             <li key={item.name}>
//                               <Link
//                                 href={item.href}
//                                 className="block px-4 py-2 hover:text-orange-500 text-black"
//                               >
//                                 {item.name}
//                               </Link>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     )}
//                   </>
//                 )}
//             </div>
//           ))}
//         </nav>

//         {/* Hamburger menu icon */}
//         <div className="lg:hidden z-50">
//           <button
//             onClick={toggleMobileMenu}
//             className={`text-3xl transition-colors duration-300 ${
//               scrolled ? "text-black" : "text-white"
//             }`}
//           >
//             {mobileMenuOpen ? <HiX /> : <HiMenu />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="lg:hidden bg-white px-4 py-6 shadow-md absolute w-full z-40">
//           <ul className="space-y-4">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <div>
//                   <button
//                     className="w-full text-left font-semibold text-black text-lg"
//                     onClick={() =>
//                       setOpenMobileSubMenu(
//                         openMobileSubMenu === link.name ? null : link.name
//                       )
//                     }
//                   >
//                     {link.name}
//                   </button>
//                   {"subItems" in link &&
//                     openMobileSubMenu === link.name &&
//                     link.subItems && (
//                       <ul className="ml-4 mt-2 space-y-2">
//                         {link.name === "Business Areas"
//                           ? (link as MegaMenu).subItems?.map((col) => (
//                               <li key={col.title}>
//                                 <button
//                                   className="text-left text-black font-medium"
//                                   onClick={() =>
//                                     setOpenMobileSubSubMenu(
//                                       openMobileSubSubMenu === col.title
//                                         ? null
//                                         : col.title
//                                     )
//                                   }
//                                 >
//                                   {col.title}
//                                 </button>
//                                 {openMobileSubSubMenu === col.title &&
//                                   col.subMenu && (
//                                     <ul className="ml-4 mt-1 space-y-1">
//                                       {col.subMenu.map((sub) => (
//                                         <li key={sub.name}>
//                                           <Link
//                                             href={sub.href}
//                                             onClick={() =>
//                                               setMobileMenuOpen(false)
//                                             }
//                                             className="text-sm text-black"
//                                           >
//                                             {sub.name}
//                                           </Link>
//                                         </li>
//                                       ))}
//                                     </ul>
//                                   )}
//                               </li>
//                             ))
//                           : (link as NormalMenu).subItems?.map((item) => (
//                               <li key={item.name}>
//                                 <Link
//                                   href={item.href}
//                                   onClick={() => setMobileMenuOpen(false)}
//                                   className="text-black"
//                                 >
//                                   {item.name}
//                                 </Link>
//                               </li>
//                             ))}
//                       </ul>
//                     )}
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// }
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

type NormalMenu = {
  name: string;
  href: string;
  subItems?: { name: string; href: string }[];
};

type MegaSubMenu = {
  title: string;
  href: string;
  subMenu?: { name: string; href: string }[];
};

type MegaMenu = {
  name: "Business Areas";
  href: string;
  subItems?: MegaSubMenu[];
};

type MenuItem = NormalMenu | MegaMenu;

export default function IndustryHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState<string | null>(
    null
  );
  const [openMobileSubSubMenu, setOpenMobileSubSubMenu] = useState<
    string | null
  >(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setOpenMobileSubMenu(null);
    setOpenMobileSubSubMenu(null);
  };

  const navLinks: MenuItem[] = [
    { name: "About Landsking", href: "/" },
    { name: "Our Commitment", href: "/system" },
    {
      name: "Business Areas",
      href: "#",
      subItems: [
        {
          title: "Power",
          href: "/power",
          subMenu: [
            { name: "Hydro Power", href: "/power/hydro" },
            { name: "Nuclear Power", href: "/power/nuclear" },
            { name: "Thermal Power", href: "/power/thermal" },
          ],
        },
        {
          title: "Transportation",
          href: "/transportation",
          subMenu: [
            {
              name: "Highways, Roads & Bridges",
              href: "/transportation/highways",
            },
            { name: "Railways", href: "/transportation/railways" },
            {
              name: "Mass Rapid Transit Systems",
              href: "/transportation/mrts",
            },
            { name: "Ports & Harbours", href: "/transportation/ports" },
          ],
        },
        {
          title: "Water",
          href: "/water",
          subMenu: [
            { name: "Water Supply & Sanitation", href: "/water/supply" },
            { name: "Irrigation", href: "/water/irrigation" },
          ],
        },
        {
          title: "Industrial & Buildings",
          href: "/industrial-buildings",
          subMenu: [
            {
              name: "Manufacturing & Process Plants",
              href: "/industrial/plants",
            },
            {
              name: "Commercial & Institutional",
              href: "/industrial/commercial",
            },
            {
              name: "Smart Cities & Townships",
              href: "/industrial/smart-cities",
            },
          ],
        },
      ],
    },
    { name: "Careers", href: "/sectors" },
    { name: "Investors", href: "/investors" },
    { name: "Media Room", href: "/insight" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg w-full" : "bg-transparent w-full"
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.jpeg"
            alt="logo"
            width={scrolled ? 120 : 150}
            height={scrolled ? 40 : 50}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className={`font-light text-lg tracking-wide ${
                  scrolled ? "text-black" : "text-white"
                } hover:text-orange-500`}
              >
                {link.name}
              </Link>

              {"subItems" in link &&
                link.subItems &&
                link.subItems.length > 0 && (
                  <>
                    {link.name === "Business Areas" ? (
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 mt-2 w-[800px] grid grid-cols-4 gap-6 p-6 rounded-lg shadow-lg opacity-0 invisible
  group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out
  backdrop-blur-md z-50 ${scrolled ? "bg-white" : "bg-white/95"}`}
                      >
                        {(link as MegaMenu).subItems?.map((col) => (
                          <div key={col.title}>
                            <h4 className="font-semibold text-blue-700 mb-2">
                              {col.title}
                            </h4>
                            <ul className="space-y-1">
                              {col.subMenu?.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    href={item.href}
                                    className="block text-sm font-light text-gray-700 hover:text-orange-500"
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div
                        className={`absolute left-0 mt-2 w-56 rounded-lg shadow-lg opacity-0 invisible 
                        group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out
                        backdrop-blur-md z-50 ${
                          scrolled ? "bg-white" : "bg-white/90"
                        }`}
                      >
                        <ul className="py-2">
                          {(link as NormalMenu).subItems?.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="block px-4 py-2 text-sm font-light text-gray-700 hover:text-orange-500"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                )}
            </div>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="lg:hidden z-50">
          <button
            onClick={toggleMobileMenu}
            className={`text-3xl ${scrolled ? "text-black" : "text-white"}`}
          >
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
                    className="w-full text-left font-light text-lg text-black"
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
                        {link.name === "Business Areas"
                          ? (link as MegaMenu).subItems?.map((col) => (
                              <li key={col.title}>
                                <button
                                  className="text-left text-black font-medium"
                                  onClick={() =>
                                    setOpenMobileSubSubMenu(
                                      openMobileSubSubMenu === col.title
                                        ? null
                                        : col.title
                                    )
                                  }
                                >
                                  {col.title}
                                </button>
                                {openMobileSubSubMenu === col.title &&
                                  col.subMenu && (
                                    <ul className="ml-4 mt-1 space-y-1">
                                      {col.subMenu.map((sub) => (
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
                                  className="text-black text-sm"
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
