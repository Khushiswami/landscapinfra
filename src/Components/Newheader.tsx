
// "use client";
// import { useState, useEffect } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";
// import Link from "next/link";
// import { MagnifyingGlassIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

// const NAVY = "#000080";

// const INDUSTRIES: { label: string; href: string }[] = [
//   { label: "Industry Installation", href: "/industryinstallation" },
//   { label: "Pre Engineered Building", href: "/preEngineeredBuildings" },
//   { label: "Building and Infrastructure", href: "/buildingandinfrastructure" },
//   { label: "Engineering R&D", href: "/industries/healthcare" },
// ];

// const EXPERTISE: { label: string; href: string }[] = [
//   { label: "Heavy Engineering", href: "/heavyengineering" },
//   { label: "Office Space", href: "/officespace" },
//   { label: "Public Office", href: "/publicoffice" },
//   { label: "Water Infrastructure", href: "/waterinfrastructure" },
//   { label: "Industry Building Solutions", href: "/structuralsteel" },
//   { label: "Other Industries", href: "/otherindustries" },
//   { label: "Simulation Service", href: "/simulation" },
//   { label: "Factories Installation", href: "https://staging.landsking.com/fabrication/" },
//   { label: "Cold Storage & Warehouse", href: "/coldstorageandwarehouse" },
//   { label: "Solar Services", href: "/solar" },
//   { label: "HVAC Services", href: "/hvac" },
//   { label: "Fabrication", href: "/fabrication" },
//   { label: "Fire Safety", href: "/fire-safety" },
//   { label: "Green Building", href: "/greenbuilding" },
//   { label: "Mining and Metals", href: "/miningandmetals" },
// ];

// const INSIGHTS = [
//   { label: "Blogs", href: "/insights/reports" },
//   { label: "Brochures", href: "/insights/articles" },
//   { label: "Whitepaper", href: "/insights/case-studies" },
//   { label: "Career", href: "/insights/research" },
// ];

// const ABOUT = [
//   { label: "Our History", href: "/company" },
//   { label: "Leadership", href: "/about/leadership" },
//   { label: "Our Mission", href: "/mission" },
//   { label: "Innovation", href: "/innovation" },
// ];

// function DesktopDropdown({
//   title,
//   items,
//   scrolled,
//   vertical = false, // new prop to stack items vertically
// }: {
//   title: string;
//   items: { label: string; href: string }[];
//   scrolled: boolean;
//   vertical?: boolean;
// }) {
//   return (
//     <div className="relative group">
//       <button
//         className={`inline-flex items-center gap-1 font-medium transition-colors ${
//           scrolled ? "text-[#000080]" : "text-white"
//         } hover:opacity-80`}
//       >
//         <span>{title}</span>
//         <ChevronDown size={18} className="mt-0.5" />
//       </button>

//       <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-0 top-full z-[60] w-max translate-y-2 group-hover:translate-y-3 transition-all pointer-events-auto">
//         <div className="rounded-2xl bg-[#000080] shadow-xl p-3">
//           <div className={`${vertical ? "flex flex-col gap-1" : "grid grid-cols-3 gap-2"}`}>
//             {items.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className="whitespace-nowrap px-4 py-2 text-[15px] font-medium text-white hover:text-[#FFD700] transition-colors"
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [language, setLanguage] = useState("EN");

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Mobile dropdown state
//   const [mobileOpen, setMobileOpen] = useState<{ [k: string]: boolean }>({});
//   const toggleMobile = (key: string) =>
//     setMobileOpen((prev) => {
//       const newState: { [k: string]: boolean } = {};
//       Object.keys(prev).forEach((k) => (newState[k] = false));
//       newState[key] = !prev[key];
//       return newState;
//     });

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all ${
//         scrolled ? "bg-white/95 backdrop-blur shadow-lg" : "bg-transparent"
//       }`}
//       style={{ borderBottom: scrolled ? `1px solid ${NAVY}20` : undefined }}
//     >
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
//         {/* Logo */}
//         <Link href="/" className="flex items-center space-x-2">
//           <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
//         </Link>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex items-center gap-8">
//           <DesktopDropdown title="Industries" items={INDUSTRIES} scrolled={scrolled} />
//           <DesktopDropdown title="Expertise" items={EXPERTISE} scrolled={scrolled} />
//           <Link
//             href="/projects"
//             className={`font-medium transition-colors ${
//               scrolled ? "text-[#000080]" : "text-white"
//             } hover:opacity-80`}
//           >
//             Projects
//           </Link>
//           <DesktopDropdown title="Insights" items={INSIGHTS} scrolled={scrolled} vertical />
//           <Link
//             href="/media"
//             className={`font-medium transition-colors ${
//               scrolled ? "text-[#000080]" : "text-white"
//             } hover:opacity-80`}
//           >
//             Media
//           </Link>
//           <DesktopDropdown title="About" items={ABOUT} scrolled={scrolled} vertical />
//         </nav>

//         {/* Right Section */}
//         <div
//           className={`hidden md:flex items-center gap-3 ${
//             scrolled ? "text-[#000080]" : "text-white"
//           }`}
//         >
//           <button aria-label="Search">
//             <MagnifyingGlassIcon className="h-6 w-6 hover:opacity-80" />
//           </button>
//           <button aria-label="Email">
//             <EnvelopeIcon className="h-6 w-6 hover:opacity-80" />
//           </button>
//           <button
//             onClick={() => setLanguage((l) => (l === "EN" ? "AR" : "EN"))}
//             className="px-2 py-1 border rounded text-sm hover:bg-gray-100"
//             style={{ borderColor: NAVY, color: NAVY }}
//           >
//             {language}
//           </button>
//           <Link
//             href="/contact"
//             className="bg-[#000080] text-white px-4 py-2 rounded-2xl hover:opacity-90 font-semibold shadow-sm"
//           >
//             CONTACT US
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className={`md:hidden ${scrolled ? "text-[#000080]" : "text-white"}`}
//           onClick={() => setIsOpen((v) => !v)}
//           aria-label="Toggle Menu"
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white shadow-lg border-t border-[#000080]/10">
//           <nav className="flex flex-col px-6 py-4 text-[#000080]">
//             {[
//               { key: "industries", label: "Industries", items: INDUSTRIES },
//               { key: "expertise", label: "Expertise", items: EXPERTISE },
//               { key: "insights", label: "Insights", items: INSIGHTS },
//               { key: "about", label: "About", items: ABOUT },
//             ].map((section) => (
//               <div key={section.key}>
//                 <button
//                   onClick={() => toggleMobile(section.key)}
//                   className="flex items-center justify-between py-3 font-semibold w-full"
//                 >
//                   <span>{section.label}</span>
//                   <ChevronDown
//                     size={20}
//                     className={`transition-transform ${
//                       mobileOpen[section.key] ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>
//                 {mobileOpen[section.key] && (
//                   <div className="flex flex-col gap-1 pb-3">
//                     {section.items.map((i) => (
//                       <Link
//                         key={i.href}
//                         href={i.href}
//                         className="w-full px-4 py-2 text-sm rounded-md hover:bg-[#000080] hover:text-white transition-colors"
//                       >
//                         {i.label}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}

//             <Link href="/projects" className="py-3">Projects</Link>
//             <Link href="/media" className="py-3">Media</Link>
//             <Link
//               href="/contact"
//               className="mt-3 inline-flex items-center justify-center rounded-2xl bg-[#000080] px-4 py-2 font-semibold text-white"
//             >
//               Contact
//             </Link>

//             <div className="mt-3 flex items-center gap-4">
//               <button aria-label="Search">
//                 <MagnifyingGlassIcon className="h-6 w-6" />
//               </button>
//               <button aria-label="Email">
//                 <EnvelopeIcon className="h-6 w-6" />
//               </button>
//               <button
//                 onClick={() => setLanguage((l) => (l === "EN" ? "AR" : "EN"))}
//                 className="px-2 py-1 border rounded text-sm"
//                 style={{ borderColor: NAVY, color: NAVY }}
//               >
//                 {language}
//               </button>
//             </div>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }
// components/Navbar.tsx
"use client";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { MagnifyingGlassIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const NAVY = "#000080";

const INDUSTRIES: { label: string; href: string }[] = [
  { label: "Industry Installation", href: "/industryinstallation" },
  { label: "Pre Engineered Building", href: "/preEngineeredBuildings" },
  { label: "Building and Infrastructure", href: "/buildingandinfrastructure" },
  { label: "Engineering R&D", href: "/industries/healthcare" },
];

const EXPERTISE: { label: string; href: string }[] = [
  { label: "Heavy Engineering", href: "/heavyengineering" },
  { label: "Office Space", href: "/officespace" },
  { label: "Public Office", href: "/publicoffice" },
  { label: "Water Infrastructure", href: "/waterinfrastructure" },
  { label: "Industry Building Solutions", href: "/structuralsteel" },
  { label: "Other Industries", href: "/otherindustries" },
  { label: "Simulation Service", href: "/simulation" },
  { label: "Factories Installation", href: "https://staging.landsking.com/fabrication/" },
  { label: "Cold Storage & Warehouse", href: "/coldstorageandwarehouse" },
  { label: "Solar Services", href: "/solar" },
  { label: "HVAC Services", href: "/hvac" },
  { label: "Fabrication", href: "/fabrication" },
  { label: "Fire Safety", href: "/fire-safety" },
  { label: "Green Building", href: "/greenbuilding" },
  { label: "Mining and Metals", href: "/miningandmetals" },
];

const INSIGHTS = [
  { label: "Blogs", href: "/insights/reports" },
  { label: "Brochures", href: "/insights/articles" },
  { label: "Whitepaper", href: "/insights/case-studies" },
  { label: "Career", href: "/insights/research" },
];

const ABOUT = [
  { label: "Our History", href: "/company" },
  { label: "Leadership", href: "/about/leadership" },
  { label: "Our Mission", href: "/mission" },
  { label: "Innovation", href: "/innovation" },
];

function DesktopDropdown({
  title,
  items,
  scrolled,
  vertical = false,
  imageSrc, // optional image for expertise dropdown
}: {
  title: string;
  items: { label: string; href: string }[];
  scrolled: boolean;
  vertical?: boolean;
  imageSrc?: string;
}) {
  return (
    <div className="relative group">
      <button
        className={`inline-flex items-center gap-1 font-medium transition-colors ${
          scrolled ? "text-[#000080]" : "text-white"
        } hover:opacity-80`}
      >
        <span>{title}</span>
        <ChevronDown size={18} className="mt-0.5" />
      </button>

      <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-0 top-full z-[60] w-max translate-y-2 group-hover:translate-y-3 transition-all pointer-events-auto">
        <div className="rounded-2xl bg-[#000080] shadow-xl p-3">
          {imageSrc ? (
            <div className="grid grid-cols-3 gap-4 items-start">
              <div className="flex flex-col gap-2 col-span-1">
                {items.slice(0, Math.ceil(items.length / 2)).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-white hover:text-[#FFD700] px-4 py-2 font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-2 col-span-1">
                {items.slice(Math.ceil(items.length / 2)).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-white hover:text-[#FFD700] px-4 py-2 font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              {/* <div className="col-span-1">
                <img src={imageSrc} alt="Expertise" className="rounded-lg w-full h-full object-cover" />
              </div> */}
              <DesktopDropdown
  title="Expertise"
  items={EXPERTISE}
  scrolled={scrolled}
  imageSrc="/industry.jpg" // updated image
/>
            </div>
          ) : vertical ? (
            <div className="flex flex-col gap-1">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-[#FFD700] px-4 py-2 font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-2">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-[#FFD700] px-4 py-2 font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState("EN");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [mobileOpen, setMobileOpen] = useState<{ [k: string]: boolean }>({});
  const toggleMobile = (key: string) =>
    setMobileOpen((prev) => {
      const newState: { [k: string]: boolean } = {};
      Object.keys(prev).forEach((k) => (newState[k] = false));
      newState[key] = !prev[key];
      return newState;
    });

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled ? "bg-white/95 backdrop-blur shadow-lg" : "bg-transparent"
      }`}
      style={{ borderBottom: scrolled ? `1px solid ${NAVY}20` : undefined }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <DesktopDropdown title="Industries" items={INDUSTRIES} scrolled={scrolled} />
          {/* Expertise dropdown with image */}
          <DesktopDropdown
            title="Expertise"
            items={EXPERTISE}
            scrolled={scrolled}
            imageSrc="/expertise-image.jpg" // your image here
          />
          <Link
            href="/projects"
            className={`font-medium transition-colors ${
              scrolled ? "text-[#000080]" : "text-white"
            } hover:opacity-80`}
          >
            Projects
          </Link>
          <DesktopDropdown title="Insights" items={INSIGHTS} scrolled={scrolled} vertical />
          <Link
            href="/media"
            className={`font-medium transition-colors ${
              scrolled ? "text-[#000080]" : "text-white"
            } hover:opacity-80`}
          >
            Media
          </Link>
          <DesktopDropdown title="About" items={ABOUT} scrolled={scrolled} vertical />
        </nav>

        {/* Right Section */}
        <div
          className={`hidden md:flex items-center gap-3 ${
            scrolled ? "text-[#000080]" : "text-white"
          }`}
        >
          <button aria-label="Search">
            <MagnifyingGlassIcon className="h-6 w-6 hover:opacity-80" />
          </button>
          <button aria-label="Email">
            <EnvelopeIcon className="h-6 w-6 hover:opacity-80" />
          </button>
          <button
            onClick={() => setLanguage((l) => (l === "EN" ? "AR" : "EN"))}
            className="px-2 py-1 border rounded text-sm hover:bg-gray-100"
            style={{ borderColor: NAVY, color: NAVY }}
          >
            {language}
          </button>
          <Link
            href="/contact"
            className="bg-[#000080] text-white px-4 py-2 rounded-2xl hover:opacity-90 font-semibold shadow-sm"
          >
            CONTACT US
          </Link>
        </div>

        <button
          className={`md:hidden ${scrolled ? "text-[#000080]" : "text-white"}`}
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-[#000080]/10">
          <nav className="flex flex-col px-6 py-4 text-[#000080]">
            {[ 
              { key: "industries", label: "Industries", items: INDUSTRIES },
              { key: "expertise", label: "Expertise", items: EXPERTISE },
              { key: "insights", label: "Insights", items: INSIGHTS },
              { key: "about", label: "About", items: ABOUT },
            ].map((section) => (
              <div key={section.key}>
                <button
                  onClick={() => toggleMobile(section.key)}
                  className="flex items-center justify-between py-3 font-semibold w-full"
                >
                  <span>{section.label}</span>
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${mobileOpen[section.key] ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileOpen[section.key] && (
                  <div className="flex flex-col gap-1 pb-3">
                    {section.items.map((i) => (
                      <Link
                        key={i.href}
                        href={i.href}
                        className="w-full px-4 py-2 text-sm rounded-md hover:bg-[#000080] hover:text-white transition-colors"
                      >
                        {i.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/projects" className="py-3">Projects</Link>
            <Link href="/media" className="py-3">Media</Link>
            <Link
              href="/contact"
              className="mt-3 inline-flex items-center justify-center rounded-2xl bg-[#000080] px-4 py-2 font-semibold text-white"
            >
              Contact
            </Link>

            <div className="mt-3 flex items-center gap-4">
              <button aria-label="Search">
                <MagnifyingGlassIcon className="h-6 w-6" />
              </button>
              <button aria-label="Email">
                <EnvelopeIcon className="h-6 w-6" />
              </button>
              <button
                onClick={() => setLanguage((l) => (l === "EN" ? "AR" : "EN"))}
                className="px-2 py-1 border rounded text-sm"
                style={{ borderColor: NAVY, color: NAVY }}
              >
                {language}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
