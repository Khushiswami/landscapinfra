"use client";
import { useState, useEffect } from "react";

import PlatformP from "../../../Components/PlatformP";
import Footer from "../../../Components/Footer";
import { IoCallOutline } from "react-icons/io5";
import ProjectSlider from "../../../Components/ProjectSlider";
import KeyFeatures from "../../../Components/KeyFeatures";
import PreEngineeredProducts from "../../../Components/PreEngineeredProducts";
import PebheaderW from "../../../Components/PebheaderW";
import Accolades from "../../../Components/Accolades";
import ContactSectionB from "../../../Components/businessAreas/ContactSectionB";
import KeyFeaturesB from "../../../Components/businessAreas/KeyFeaturesB";
import PreEngineeredProductsB, {
  Area,
} from "../../../Components/businessAreas/PreEngineeredProductsB";
import PlatformSectionB from "../../../Components/businessAreas/PlatformSection";
import ProjectSliderB from "../../../Components/businessAreas/ProjectSliderB";
import QuickLinks from "../../../Components/businessAreas/QuickLinks";
import { GraduationCap, Users, Lightbulb, Wrench } from "lucide-react";
import IndustryHead from "yes/Components/Industryhead";

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
    title: "Trusted Partner in Water Solutions",
    description:
      "LandSking Infra has established itself as a reliable name in India’s water infrastructure sector, delivering complex projects from source development to bulk transmission and treatment.",
  },
  {
    title: "End-to-End Capabilities Across the Water Value Chain",
    description:
      "LandSking Infra provides comprehensive water infrastructure solutions, including source development through dams and barrages, advanced treatment facilities such as water and sewage treatment plants, efficient transmission systems involving tunnels, pipelines, and aqueducts, and integrated water supply schemes catering to both urban and rural areas.",
  },
  {
    title: "Proven Execution Track Record",
    description:
      "LandSking Infra has successfully completed over 100 water and sewage treatment plants and constructed more than 30 km of water supply and sewerage tunnels. The company possesses extensive expertise in building gravity dams and bulk water transfer systems, delivering large-scale water infrastructure projects for both public and private sector clients.",
  },
 
];

const areasData: Area[] = [
  {
    id: 1,
    title: "Prefabricated",
    subtitle: "Prefabricated Multi-Storey Building Manufacturer",
    description:
      "We specialize in designing and delivering prefabricated multi-storey buildings that ensure durability, faster construction, and cost-effectiveness for diverse applications.",
    image: "/industry.jpg",
  },
  {
    id: 2,
    title: "Warehouse",
    subtitle: "Warehouse Solutions",
    description:
      "Our warehouses are engineered for maximum space utilization, robust structure, and efficient storage solutions.",
    image: "/expertise/third.png",
  },
];

const HOME_TABS = [
  {
    title: "Pre Engineered Buildings",
    headline: "High-Performance Pre-Engineered Steel Buildings",
    body: "LandsKingInfra delivers modern, durable, and cost-efficient pre-engineered buildings.",
    img: "/about.png",
    buttonText: "VIEW MORE",
    url: "/menupage",
  },
  {
    title: "EPC Solutions",
    headline: "End-to-End EPC Solutions",
    body: "From concept to commissioning, our EPC solutions ensure seamless project execution.",
    img: "/solution/stell.jpg",
    buttonText: "VIEW MORE",
    url: "/epcsolutions",
  },
  {
    title: "EPC Solutions",
    headline: "End-to-End EPC Solutions",
    body: "From concept to commissioning, our EPC solutions ensure seamless project execution.",
    img: "/solution/stell.jpg",
    buttonText: "VIEW MORE",
    url: "/epcsolutions",
  },
  {
    title: "EPC Solutions",
    headline: "End-to-End EPC Solutions",
    body: "From concept to commissioning, our EPC solutions ensure seamless project execution.",
    img: "/solution/stell.jpg",
    buttonText: "VIEW MORE",
    url: "/epcsolutions",
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

export default function WaterSupplySanitation() {
  const [active, setActive] = useState(0);

  const links = [
    {
      title: "CADFEM Service",
      subtitle: "SUPPORT & ENGINEERING",
      icon: <Wrench size={20} />,
      url: "/service",
    },
    {
      title: "Simulation-Trends",
      subtitle: "DIE ZUKUNFT ENTDECKEN",
      icon: <Lightbulb size={20} />,
      url: "/trends",
    },
    {
      title: "Studenten-Portal",
      subtitle: "DEIN GRATIS ANGEBOT",
      icon: <GraduationCap size={20} />,
      url: "/students",
    },
    {
      title: "Starkes Netzwerk",
      subtitle: "WELTWEIT SIMULIEREN",
      icon: <Users size={20} />,
      url: "/network",
    },
  ];

  return (
    <>
      {/* <Pebheader/> */}
      <IndustryHead />
      {/* <ContactSection/> */}

      <ContactSectionB
        title="Water Supply & Sanitation"
        subtitle="Building trust with every project"
        description="Expert providers of complete water infrastructure solutions across India."
        buttonText="Know More"
        buttonLink="/about"
        bgImage="/Bussinessareaimg/water.webp"
        testimonials={testimonialsData}
      />
      <KeyFeaturesB
        heading="Water Supply & Sanitation"
        highlight=""
        image={{
          src: "/Bussinessareaimg/waterr.jpg",
          alt: "Custom Cold Storage",
          width: 700,
          height: 500,
        }}
        description=""
        features={featuresData}
      />

      {/* <PreEngineeredProductsB
        heading="Our Expertise"
        subheading="What We Build"
        description="From warehouses to industrial sheds, we design reliable prefabricated solutions for every industry."
        areas={areasData}
      />

      <PlatformSectionB
        heading="Comprehensive Infrastructure Solutions"
        subheading="From design and engineering to execution and management..."
        tabs={HOME_TABS}
      /> */}

      <ProjectSliderB
        heading="DISCOVER OUR PROJECTS"
        projects={HOME_PROJECTS}
      />

      <QuickLinks heading="Quick Links" links={links} />

      <div className="bg-[#272727] bg-repeat py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-white">
          {/* Left text */}
          <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left mb-4 md:mb-0">
            COMMITTED TO YOUR SATISFACTION
          </h2>

          {/* Right call info */}
          <div className="flex items-center gap-4 bg-white text-[#000080] px-4 py-2 rounded-full shadow-lg">
            <div className="bg-[#000080] text-white p-3 rounded-full">
              <IoCallOutline />
            </div>
            <div>
              <p className="text-sm font-semibold">CALL US</p>
              <a
                href="tel:+918130444466"
                className="text-lg font-bold hover:underline"
              >
                +91 8130 444 466
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}