"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import PlatformP from "../../Components/PlatformP";
import AboutPebP from "../../Components/AboutPebP";
import TotalSolutionP from "../../Components/TotalSolutionP";
import MediaP from "../../Components/MediaP";
import PebBrandP from "../../Components/PebBrandP";
import Insights from "../../Components/Insights";
import PebSlider from "../../Components/PebSlider";
import ContactSection from "../../Components/ContactSection";
import Servicesone from "yes/Components/Servicesone";
import Footer from "../../Components/Footer";
import Pebheader from "yes/Components/Pebheader";
import BannerPEB from "../../Components/BannerPEB";

export default function PreEngineeredBuildings() {
  return (
    <>
      <Pebheader />

     

<BannerPEB/>
      {/* Rest of content */}
      <AboutPebP />
      <Servicesone />
      <PlatformP />
      <TotalSolutionP />
      <PebSlider />
      {/* <ImageSlider /> */}
      <Insights />
      <MediaP />
      <PebBrandP />
      <ContactSection />
      <Footer />
    </>
  );
}
