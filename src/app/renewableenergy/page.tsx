"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "yes/Components/Header";
import Footer from "yes/Components/Footer";
import QuickLinks from "../../Components/businessAreas/QuickLinks";
import { GraduationCap, Users, Lightbulb, Wrench } from "lucide-react";
import RenewableBusiness from "yes/Components/Renewable/Renewablebusiness";
import RenewableSector from "yes/Components/Renewable/Renewablesector";
import AboutPebP from "yes/Components/AboutPebP";
import Accordion from "yes/Components/Renewable/Accordion";
import PebBrandP from "yes/Components/PebBrandP";
import TotalSolutionP from "yes/Components/TotalSolutionP";
import Explore from "yes/Components/Renewable/Explore";
import Realstateheader from "yes/Components/Realstateheader";
import NewsCorner from "yes/Components/RealState/NewsCorner";
import Navbar from "yes/Components/Navbar";
import Renewablebanner from "yes/Components/Renewable/Renewablebanner";
import Renewableplatform from "yes/Components/Renewable/Renewableplatform";
import Renewableslider from "yes/Components/Renewable/Renewableslider";
import Pebsolution from "yes/Components/Pebsolution";
import Renewableabout from "yes/Components/Renewable/Renewableabout";
import Renewablesolution from "yes/Components/Renewable/Renewablesolution";
import Renewablenews from "yes/Components/Renewable/Renewablenews";

export default function Renewableenergy() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

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
      <Navbar />
      <Renewablebanner />
      
      <RenewableBusiness />
      <RenewableSector />
      <Renewableplatform />
      <Renewableabout/>
      <Accordion />
      <Renewableslider />
      <PebBrandP />
      <Renewablesolution/>
      <Renewablenews/>
      <Explore />
      <QuickLinks heading="Quick Links" links={links} />

      <Footer />
    </>
  );
}
