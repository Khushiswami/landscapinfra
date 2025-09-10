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


export default function RealStateDevlopment() {
  return (
    <>
    
    <section className="py-12 bg-white">
        <Header /> 
        <VideoSection />
        <ProjectsSection />
        <ZigzagSection />
        <AboutPage />
        <OurLineage />
        <PropertySearch />
        <SectorSlider/>
        <LandmarkProjects />
        <NewsCorner />
        <BeyondBoundaries />
      </section>
    </>
  );
}
