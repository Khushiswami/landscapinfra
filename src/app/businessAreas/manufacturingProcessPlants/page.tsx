// "use client";
// import { useState } from "react";

// import Footer from "../../../Components/Footer";

// import ContactSectionB from "../../../Components/businessAreas/ContactSectionB";
// import KeyFeaturesB from "../../../Components/businessAreas/KeyFeaturesB";
// import PreEngineeredProductsB, {
//   Area,
// } from "../../../Components/businessAreas/PreEngineeredProductsB";
// import ProjectSliderB from "../../../Components/businessAreas/ProjectSliderB";
// import QuickLinks from "../../../Components/businessAreas/QuickLinks";
// import { Factory, Droplets, Truck, Building2 } from "lucide-react";
// import Brand from "yes/Components/Brand";
// import Industryheader from "yes/Components/Industryheader";

// const testimonialsData = [
//   {
//     name: "Ramesh Kumar",
//     location: "Factory Shed | Pune, Maharashtra",
//     img: "/product/s1.jpg",
//     text: "The process was smooth and professional. I could easily plan and execute my project with their support.",
//     quoteLink: "/quote",
//   },
//   {
//     name: "Anita Sharma",
//     location: "Warehouse | Ahmedabad, Gujarat",
//     img: "/product/s1.jpg",
//     text: "Great experience! The delivery was on time, and the team guided me throughout the project.",
//   },
// ];

// const featuresData = [
//   {
//     title: "Petrochemical Plants",
//     description:
//       "Facilities for processing and producing petrochemical products.",
//   },
//   {
//     title: "Refineries",
//     description:
//       "Units for refining crude oil into usable fuels and chemicals.",
//   },
//   {
//     title: "Fertilizer Plants",
//     description:
//       "Plants for manufacturing urea, ammonia, and other fertilizers.",
//   },
//   {
//     title: "Chemical Plants",
//     description:
//       "Infrastructure for producing industrial and specialty chemicals.",
//   },
//   {
//     title: "Steel Plants",
//     description:
//       "Structures for steel production, rolling, and finishing operations",
//   },
// ];

// const areasData: Area[] = [
//   {
//     id: 1,
//     title: "Prefabricated",
//     subtitle: "Prefabricated Multi-Storey Building Manufacturer",
//     description:
//       "We specialize in designing and delivering prefabricated multi-storey buildings that ensure durability, faster construction, and cost-effectiveness for diverse applications.",
//     image: "/industry.jpg",
//   },
//   {
//     id: 2,
//     title: "Warehouse",
//     subtitle: "Warehouse Solutions",
//     description:
//       "Our warehouses are engineered for maximum space utilization, robust structure, and efficient storage solutions.",
//     image: "/expertise/third.png",
//   },
// ];

// const HOME_TABS = [
//   {
//     title: "Pre Engineered Buildings",
//     headline: "High-Performance Pre-Engineered Steel Buildings",
//     body: "LandsKingInfra delivers modern, durable, and cost-efficient pre-engineered buildings.",
//     img: "/about.png",
//     buttonText: "VIEW MORE",
//     url: "/menupage",
//   },
//   {
//     title: "EPC Solutions",
//     headline: "End-to-End EPC Solutions",
//     body: "From concept to commissioning, our EPC solutions ensure seamless project execution.",
//     img: "/solution/stell.jpg",
//     buttonText: "VIEW MORE",
//     url: "/epcsolutions",
//   },
//   {
//     title: "EPC Solutions",
//     headline: "End-to-End EPC Solutions",
//     body: "From concept to commissioning, our EPC solutions ensure seamless project execution.",
//     img: "/solution/stell.jpg",
//     buttonText: "VIEW MORE",
//     url: "/epcsolutions",
//   },
//   {
//     title: "EPC Solutions",
//     headline: "End-to-End EPC Solutions",
//     body: "From concept to commissioning, our EPC solutions ensure seamless project execution.",
//     img: "/solution/stell.jpg",
//     buttonText: "VIEW MORE",
//     url: "/epcsolutions",
//   },
// ];

// const HOME_PROJECTS = [
//   {
//     img: "/slider/p1.jpg",
//     location: "Powai, Mumbai",
//     buttonText: "KNOW MORE",
//     url: "/projects/elixir",
//   },
//   {
//     img: "/slider/p2.jpg",
//     location: "Sewri, Mumbai",
//     buttonText: "KNOW MORE",
//     url: "/projects/gateway",
//   },
//   {
//     img: "/slider/p3.jpg",
//     location: "Ghatkopar, Mumbai",
//     buttonText: "KNOW MORE",
//     url: "/projects/crossroads",
//   },
//   {
//     title: "Elixir Reserve",
//     status: "Ongoing",
//     img: "/slider/p1.jpg",
//     location: "Powai, Mumbai",
//     buttonText: "KNOW MORE",
//     url: "/projects/elixir",
//   },
//   {
//     title: "The Gateway",
//     status: "Ongoing",
//     img: "/slider/p2.jpg",
//     location: "Sewri, Mumbai",
//     buttonText: "KNOW MORE",
//     url: "/projects/gateway",
//   },
//   {
//     title: "77 Crossroads",
//     status: "Ongoing",
//     img: "/slider/p3.jpg",
//     location: "Ghatkopar, Mumbai",
//     buttonText: "KNOW MORE",
//     url: "/projects/crossroads",
//   },
// ];

// export default function ManufacturingProcessPlants() {
//   const [active, setActive] = useState(0);

//   const links = [
//     {
//       title: "Industrial Installation",
//       subtitle: "Smart manufacturing",
//       icon: <Factory size={26} />,
//       url: "/businessAreas/industrialinstallation",
//     },
//     {
//       title: "Water Technology",
//       subtitle: "Pure and sustainable",
//       icon: <Droplets size={26} />,
//       url: "/businessAreas/water-technology",
//     },
//     {
//       title: "Transport & Mobility",
//       subtitle: "Efficient movement",
//       icon: <Truck size={26} />,
//       url: "/businessAreas/transport-mobility",
//     },
//     {
//       title: "Industry & Buildings",
//       subtitle: "Energy smart design",
//       icon: <Building2 size={26} />,
//       url: "/businessAreas/industry-building",
//     },
//   ];

//   return (
//     <>
//       <Industryheader />
//       <ContactSectionB
//         title="Manufacturing & Process Plants
// "
//         subtitle="Building trust with every project"
//         description="Leading provider of customized industrial infrastructure and fabrication solutions."
//         buttonText="Know More"
//         buttonLink="/about"
//         bgImage="/Bussinessareaimg/manufacturingProcessPlants.jpg"
//         testimonials={testimonialsData}
//       />
//       <KeyFeaturesB
//         heading="Manufacturing & Process Plants"
//         highlight=""
//         img={{
//           src= "/Bussinessareaimg/manufacturingProcessPlantss.webp",
//           alt= "Custom Cold Storage",
//          className="w-full md:w-[700px] h-auto rounded-2xl object-cover"

//           // width: 700,
//           // height: 500,
//         }}

//         description="Landsking Infra is a leading industrial infrastructure provider with extensive experience in building process plants, auxiliary facilities, factories, workshops, and pumping stations. We also specialize in establishing on-site fabrication units tailored to meet highly specific and customized project needs."
//         features={featuresData}
//       />

//       {/* <PreEngineeredProductsB
//         heading="Our Expertise"
//         subheading="What We Build"
//         description="From warehouses to industrial sheds, we design reliable prefabricated solutions for every industry."
//         areas={areasData}
//       />

//       <PlatformSectionB
//         heading="Comprehensive Infrastructure Solutions"
//         subheading="From design and engineering to execution and management..."
//         tabs={HOME_TABS}
//       /> */}

//       <ProjectSliderB
//         heading="DISCOVER OUR PROJECTS"
//         projects={HOME_PROJECTS}
//       />

//       <QuickLinks heading="Quick Links" links={links} />

//       <Brand />
//       <Footer />
//     </>
//   );
// }
"use client";
import { useState } from "react";

import Footer from "../../../Components/Footer";
import ContactSectionB from "../../../Components/businessAreas/ContactSectionB";
import KeyFeaturesB from "../../../Components/businessAreas/KeyFeaturesB";
import ProjectSliderB from "../../../Components/businessAreas/ProjectSliderB";
import QuickLinks from "../../../Components/businessAreas/QuickLinks";
import { Factory, Droplets, Truck, Building2 } from "lucide-react";
import Brand from "yes/Components/Brand";
import Industryheader from "yes/Components/Industryheader";
import Industryfooter from "yes/Components/Industryfooter";

const testimonialsData = [
  {
    name: "Ramesh Kumar",
    location: "Factory Shed | Pune, Maharashtra",
    img: "/product/s1.jpg",
    text: "The process was smooth and professional. I could easily plan and execute my project with their support.",
    quoteLink: "/quote",
  },
  {
    name: "Anita Sharma",
    location: "Warehouse | Ahmedabad, Gujarat",
    img: "/product/s1.jpg",
    text: "Great experience! The delivery was on time, and the team guided me throughout the project.",
  },
];

const featuresData = [
  {
    title: "Petrochemical Plants",
    description:
      "Facilities for processing and producing petrochemical products.",
  },
  {
    title: "Refineries",
    description:
      "Units for refining crude oil into usable fuels and chemicals.",
  },
  {
    title: "Fertilizer Plants",
    description:
      "Plants for manufacturing urea, ammonia, and other fertilizers.",
  },
  {
    title: "Chemical Plants",
    description:
      "Infrastructure for producing industrial and specialty chemicals.",
  },
  {
    title: "Steel Plants",
    description:
      "Structures for steel production, rolling, and finishing operations",
  },
];

const HOME_PROJECTS = [
  {
    img: "/slider/p1.jpg",
    location: "Powai, Mumbai",
    buttonText: "KNOW MORE",
    url: "/projects/elixir",
  },
  {
    img: "/slider/p2.jpg",
    location: "Sewri, Mumbai",
    buttonText: "KNOW MORE",
    url: "/projects/gateway",
  },
  {
    img: "/slider/p3.jpg",
    location: "Ghatkopar, Mumbai",
    buttonText: "KNOW MORE",
    url: "/projects/crossroads",
  },
  {
    title: "Elixir Reserve",
    status: "Ongoing",
    img: "/slider/p1.jpg",
    location: "Powai, Mumbai",
    buttonText: "KNOW MORE",
    url: "/projects/elixir",
  },
  {
    title: "The Gateway",
    status: "Ongoing",
    img: "/slider/p2.jpg",
    location: "Sewri, Mumbai",
    buttonText: "KNOW MORE",
    url: "/projects/gateway",
  },
  {
    title: "77 Crossroads",
    status: "Ongoing",
    img: "/slider/p3.jpg",
    location: "Ghatkopar, Mumbai",
    buttonText: "KNOW MORE",
    url: "/projects/crossroads",
  },
];

export default function ManufacturingProcessPlants() {
  const links = [
    {
      title: "Industrial Installation",
      subtitle: "Smart manufacturing",
      icon: <Factory size={26} />,
      url: "/businessAreas/industrialinstallation",
    },
    {
      title: "Water Technology",
      subtitle: "Pure and sustainable",
      icon: <Droplets size={26} />,
      url: "/businessAreas/water-technology",
    },
    {
      title: "Transport & Mobility",
      subtitle: "Efficient movement",
      icon: <Truck size={26} />,
      url: "/businessAreas/transport-mobility",
    },
    {
      title: "Industry & Buildings",
      subtitle: "Energy smart design",
      icon: <Building2 size={26} />,
      url: "/businessAreas/industry-building",
    },
  ];

  return (
    <>
      <Industryheader />

      <ContactSectionB
        title="Manufacturing & Process Plants"
        subtitle="Building trust with every project"
        description="Leading provider of customized industrial infrastructure and fabrication solutions."
        buttonText="Know More"
        buttonLink="/about"
        bgImage="/Bussinessareaimg/manufacturingProcessPlants.jpg"
        testimonials={testimonialsData}
      />

      <KeyFeaturesB
        heading="Manufacturing & Process Plants"
        highlight=""
        img={{
          src: "/Bussinessareaimg/manufacturingProcessPlantss.webp",
          alt: "Custom Cold Storage",
        }}
        description="Landsking Infra is a leading industrial infrastructure provider with extensive experience in building process plants, auxiliary facilities, factories, workshops, and pumping stations. We also specialize in establishing on-site fabrication units tailored to meet highly specific and customized project needs."
        features={featuresData}
      />

      <ProjectSliderB
        heading="DISCOVER OUR PROJECTS"
        projects={HOME_PROJECTS}
      />
      <QuickLinks heading="Quick Links" links={links} />
      <Brand />
      <Industryfooter />
    </>
  );
}
