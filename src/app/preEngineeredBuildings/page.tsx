"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import PlatformP from "../../Components/PlatformP";
import AboutPebP from "../../Components/AboutPebP";
import MediaP from "../../Components/MediaP";
import PebBrandP from "../../Components/PebBrandP";
import Insights from "../../Components/Insights";
import ContactSection from "../../Components/ContactSection";
import Servicesone from "yes/Components/Servicesone";
import Footer from "../../Components/Footer";
import Pebheader from "yes/Components/Pebheader";
import BannerPEB from "../../Components/BannerPEB";
import Pebslide from "yes/Components/Pebslide";
import Pebsolution from "yes/Components/Pebsolution";
import Pebinsight from "yes/Components/Pebinsight";

// import ClientP from "../Components/ClientP";

export default function PreEngineeredBuildings() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Pebheader />
      {/* <PebheaderW/> */}
      <BannerPEB />
      <AboutPebP />
      <Servicesone />
      <PlatformP />
      <Pebsolution />
      <Pebslide />
      <Pebinsight />
      <MediaP />
      <PebBrandP />
      <ContactSection />
      <Footer />
    </>
  );
}
