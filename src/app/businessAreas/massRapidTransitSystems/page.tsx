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
import Brand from "yes/Components/Brand";
import Industryheader from "yes/Components/Industryheader";

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
    title: "Key Contributor to Metro Infrastructure",
    description:
      "Actively involved in the execution of major metro rail projects across India’s metropolitan cities.",
  },
  {
    title: "Experience in Landmark Projects",
    description:
      "Delivered critical components for Delhi Metro, Mumbai Metro One, and currently executing underground metro packages in Mumbai.",
  },
  {
    title: "Turnkey EPC Solutions",
    description:
      "Specializes in end-to-end Metro Rail Systems on an EPC (Engineering, Procurement & Construction) basis.",
  },
  {
    title: "Multi-Disciplinary Expertise",
    description:
      "Civil & structural construction , Ballastless track laying , HVAC system installation",
  },
  {
    title: "Advanced Tunnel Construction",
    description:
      "Expertise in building underground tunnels using both conventional methods and Tunnel Boring Machines (TBMs).",
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

export default function MassRapidTransitSystems() {
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
      <Industryheader />
      <ContactSectionB
        title="Mass Rapid Transit Systems"
        subtitle="Building trust with every project"
        description="Design and construction of elevated rail corridors to suit congested urban environments."
        buttonText="Know More"
        buttonLink="/about"
        bgImage="/Bussinessareaimg/metroo.jpg"
        testimonials={testimonialsData}
      />

      <KeyFeaturesB
        heading="Mass Rapid Transit Systems"
        highlight=""
        image={{
          src: "/Bussinessareaimg/metro.jpg",
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

      <Brand />

      <Footer />
    </>
  );
}
