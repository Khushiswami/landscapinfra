// pages/contact.jsx
"use client";

import ProjectsSection from "../../Components/RealState/ProjectsSection";
import Header from "../../Components/Header";
import VideoSection from "../../Components/RealState/VideoSection";
import ZigzagSection from "../../Components/RealState/ZigzagSection";
import OurLineage from "../../Components/RealState/OurLineage";
import BeyondBoundaries from "../../Components/RealState/BeyondBoundaries";
import AboutPage from "../../Components/RealState/AboutPage";
import PropertySearch from "../../Components/RealState/PropertySearch";
import SectorSlider from "../../Components/RealState/SectorSlider";
import LandmarkProjects from "../../Components/RealState/LandmarkProjects";
import NewsCorner from "../../Components/RealState/NewsCorner";
import AccoladesSlider from "../../Components/RealState/AccoladesSlider";
import FooterReal from "../../Components/RealState/FooterReal";
import ClientReal from "../../Components/RealState/ClientReal";
import Realstateheader from "yes/Components/Realstateheader";
import Footer from "yes/Components/Footer";
import Realabout from "yes/Components/RealState/Realabout";

export default function RealStateDevlopment() {
  return (
    <>
      <Realstateheader />
      <VideoSection />
      <ProjectsSection />
      <ZigzagSection />
      <Realabout/>
      {/* <AboutPage /> */}
      <OurLineage />
      <PropertySearch />
      <SectorSlider />
      <LandmarkProjects />
      <ClientReal />
      <NewsCorner />
      <AccoladesSlider />
      {/* <BeyondBoundaries /> */}
      <FooterReal/>
    </>
  );
}
