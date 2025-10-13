"use client";
import { useState } from "react";

import Footer from "../../../Components/Footer";

import ContactSectionB from "../../../Components/businessAreas/ContactSectionB";
import KeyFeaturesB from "../../../Components/businessAreas/KeyFeaturesB";
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

export default function NuclearPower() {
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
        title="About NuclearPower Infra"
        subtitle="Building trust with every project"
        description="Specialized landscaping solutions for secure and sustainable nuclear power sites."
        buttonText="Know More"
        buttonLink="/about"
        bgImage="/product/s2.jpg"
        testimonials={testimonialsData}
      />
      <KeyFeaturesB
        heading="Expert Landscaping for Nuclear Facilities"
        highlight=""
        image={{
          src: "/Bussinessareaimg/nucl.jpg",
          alt: "Custom Cold Storage",
          width: 700,
          height: 500,
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

      <Footer />
    </>
  );
}
