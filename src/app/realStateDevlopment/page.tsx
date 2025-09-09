// pages/contact.jsx
"use client";

import ProjectsSection from "../../Components/RealState/ProjectsSection";
import Header from "../../Components/Header";
import VideoSection from "../../Components/RealState/VideoSection";
import ZigzagSection from "../../Components/RealState/ZigzagSection";
import OurLineage from "../../Components/RealState/OurLineage";
import BeyondBoundaries from "../../Components/RealState/BeyondBoundaries";


export default function RealStateDevlopment() {
  return (
    <>
    
    <section className="py-12 bg-white">
      <Header /> 
<VideoSection />
<ProjectsSection />
<ZigzagSection />
<OurLineage />
<BeyondBoundaries />
      </section>
    </>
  );
}
