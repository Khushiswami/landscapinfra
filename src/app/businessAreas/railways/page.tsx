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
// import { GraduationCap, Users, Lightbulb, Wrench } from "lucide-react";
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
//     title:
//       "Landsking has developed landscape features for railway stations, metro lines, and transit corridors,",
//     description:
//       "including green walls, platform gardens, shaded waiting areas, and ecological buffers along tracks and yards.",
//   },
//   {
//     title:
//       "Our landscape designs provide all-weather, all-terrain sustainability",
//     description:
//       "enhancing passenger experience while improving ecological balance even in the remotest and most demanding locations.",
//   },
//   {
//     title:
//       "Landsking has also delivered green beautification projects near water bodies, canals, and drainage-sensitive zones,",
//     description:
//       "incorporating native plantation and erosion control measures.",
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

// export default function Railways() {
//   const [active, setActive] = useState(0);

//   const links = [
//     {
//       title: "CADFEM Service",
//       subtitle: "SUPPORT & ENGINEERING",
//       icon: <Wrench size={20} />,
//       url: "/service",
//     },
//     {
//       title: "Simulation-Trends",
//       subtitle: "DIE ZUKUNFT ENTDECKEN",
//       icon: <Lightbulb size={20} />,
//       url: "/trends",
//     },
//     {
//       title: "Studenten-Portal",
//       subtitle: "DEIN GRATIS ANGEBOT",
//       icon: <GraduationCap size={20} />,
//       url: "/students",
//     },
//     {
//       title: "Starkes Netzwerk",
//       subtitle: "WELTWEIT SIMULIEREN",
//       icon: <Users size={20} />,
//       url: "/network",
//     },
//   ];

//   return (
//     <>
//       <Industryheader />

//       <ContactSectionB
//         title="Railways"
//         subtitle="Building trust with every project"
//         description="With proven expertise in both softscape and hardscape solutions."
//         buttonText="Know More"
//         buttonLink="/about"
//         bgImage="/Bussinessareaimg/r.jpg"
//         testimonials={testimonialsData}
//       />
//       <KeyFeaturesB
//         heading="Railway & Transit Green Infrastructure"
//         highlight=""
//         image={{
//           src: "/Bussinessareaimg/railwayy.jpg",
//           alt: "Custom Cold Storage",
//           width: 700,
//           height: 500,
//         }}
//         description="Landsking contribution to India green infrastructure extends to the railway and transit ecosystem, where we deliver tailored landscaping solutions for railway stations, metro corridors, rail yards, and transit-adjacent areas. From functional green buffers to aesthetic enhancements, Landsking supports sustainable mobility through eco-conscious design."
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
    title: "Green Belt Development",
    description:
      "Designing and implementing eco-friendly green belts around reactor and auxiliary buildings to enhance environmental safety and air quality.",
  },
  {
    title: "Site Landscaping for Turbine Generator Buildings",
    description:
      "Developing sustainable landscapes that improve aesthetics and contribute to site safety near turbine halls.",
  },
  {
    title: "Balance of Plant Landscaping",
    description:
      "Comprehensive landscaping solutions across balance of plant areas to support operational efficiency and environmental compliance.",
  },
  {
    title: "Coastal and Sea-water Intake Landscaping",
    description:
      "Plantation and erosion control measures around sea-water intake systems to protect sensitive marine interface zones..",
  },
  {
    title: "Pumphouse and Cooling Tower Green Zones",
    description:
      "Creating green buffers and landscaped zones to mitigate heat and improve visual impact near pumphouses and cooling towers.",
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

export default function Railways() {
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
        title="About NuclearPower Infra"
        subtitle="Building trust with every project"
        description="Specialized landscaping solutions for secure and sustainable nuclear power sites."
        buttonText="Know More"
        buttonLink="/about"
        bgImage="/product/s2.jpg"
        testimonials={testimonialsData}
      />
      <KeyFeaturesB
        heading="Manufacturing & Process Plants"
        highlight=""
        img={{
          src: "/Bussinessareaimg/manufacturingProcessPlantss.webp",
          alt: "Custom Cold Storage",
        }}
        description="Landsking Infra provides expert landscaping solutions for Nuclear Power Plants, with proven experience across several critical sites nationwide."
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
