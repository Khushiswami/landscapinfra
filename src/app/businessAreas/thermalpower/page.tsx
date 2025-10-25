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
      "Creation of eco-friendly buffer zones using native and adaptive plant species to enhance environmental compliance and air quality.",
  },
  {
    title: "Land Grading and Contouring",
    description:
      "Shaping and leveling of terrain to support site drainage, prevent soil erosion, and prepare the area for plantation or infrastructure.",
  },
  {
    title: "Roadside and Boundary Plantation",
    description:
      "Tree and shrub planting along internal roads and perimeters for dust control, aesthetic improvement, and natural barriers.",
  },
  {
    title: "Turfing and Hydroseeding",
    description:
      "Rapid vegetation cover using grass turf or seed spraying techniques to stabilize soil and prevent erosion in open areas.",
  },
  {
    title: "Erosion Control Measures",
    description:
      "Implementation of geotextiles, mulching, and native vegetation to minimize soil displacement and protect sloped terrains.",
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

export default function Thermalpower() {
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
        title="Thermal Power"
        subtitle="Building trust with every project"
        description="From green belts to grading, we deliver excellence with proven reliability."
        buttonText="Know More"
        buttonLink="/about"
        bgImage="/Bussinessareaimg/PL-31.jpg"
        testimonials={testimonialsData}
      />
      <KeyFeaturesB
        heading="Manufacturing & Process Plants"
        highlight=""
        img={{
          src: "/Bussinessareaimg/manufacturingProcessPlantss.webp",
          alt: "Custom Cold Storage",
        }}
        description="Landsking Infra offers end-to-end landscaping solutions for Coal and Gas-based Thermal Power Plants. With a proven track record, we have successfully delivered landscaping works across numerous thermal power sites."
        features={featuresData}
      />

      {/* <PreEngineeredProductsB
        heading="Our Expertise"
        subheading="What We Build"
        description="From warehouses to industrial sheds, we design reliable prefabricated solutions for every industry."
        areas={areasData}
      /> */}

      {/* <PlatformSectionB
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
      <Industryfooter />
    </>
  );
}
