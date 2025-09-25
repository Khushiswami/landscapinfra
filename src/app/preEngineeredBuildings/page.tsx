"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import PlatformP from "../../Components/PlatformP";
import AboutPebP from "../../Components/AboutPebP";
import MediaP from "../../Components/MediaP";
import PebBrandP from "../../Components/PebBrandP";
import ContactSection from "../../Components/ContactSection";
import Servicesone from "yes/Components/Servicesone";
import Footer from "../../Components/Footer";
import Pebheader from "yes/Components/Pebheader";
import BannerPEB from "../../Components/BannerPEB";
import Pebsolution from "yes/Components/Pebsolution";
import Pebinsight from "yes/Components/Pebinsight";
import Renewableslider from "yes/Components/Renewable/Renewableslider";

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
      <Renewableslider />
      <Pebinsight />
      <MediaP />
      <PebBrandP />
      <ContactSection />
      <Footer />
    </>
  );
}
