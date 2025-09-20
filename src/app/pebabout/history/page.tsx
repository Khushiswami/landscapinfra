"use client";
import { useState, useEffect } from "react";

// import ProgressSection from "../../Components/companyComponent/ProgressSection";
// import AcquisitionsSection from "../../Components/companyComponent/AcquisitionsSection";
import Header from "yes/Components/Header";
import IndustryHead from "yes/Components/Industryheader";
import Footer from "yes/Components/Footer";
import CompanySlider from "yes/Components/companyComponent/CompanySlider";
import TimelineTabs from "yes/Components/companyComponent/TimelineTabs";
import ProgressSection from "yes/Components/companyComponent/ProgressSection";
import AcquisitionsSection from "yes/Components/companyComponent/AcquisitionsSection";
import Pebheader from "yes/Components/Pebheader";
import PebheaderW from "yes/Components/PebheaderW";

export default function History() {
  const [active, setActive] = useState(0);

  return (
    <>
      <PebheaderW />
      <CompanySlider />
      <TimelineTabs />
      <ProgressSection />
      <AcquisitionsSection />

      <Footer />
    </>
  );
}
