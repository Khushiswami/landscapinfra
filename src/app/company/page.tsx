"use client";
import { useState, useEffect } from "react";

import Footer from "../../Components/Footer"

import CompanySlider from "../../Components/companyComponent/CompanySlider";
import TimelineTabs from "../../Components/companyComponent/TimelineTabs";
import ProgressSection from "../../Components/companyComponent/ProgressSection";
import AcquisitionsSection from "../../Components/companyComponent/AcquisitionsSection";
// import CompanySlider from "../../Components/companyComponent/CompanySlider";



export default function Company() {   
    const [active, setActive] = useState(0);


  return (
    <>
      {/* <Pebheader/> */}

      <CompanySlider/>
      <TimelineTabs/>
       <ProgressSection/>
    <AcquisitionsSection/>
      
    

      <Footer />
    </>
  );
}
