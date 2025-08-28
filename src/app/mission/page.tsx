"use client";
import { useState, useEffect } from "react";

import Footer from "../../Components/Footer"

import MissionBanner from "../../Components/missionComponent/MissionBanner";
import HumanInnovation from "../../Components/missionComponent/HumanInnovation";
import Sustainability from "../../Components/missionComponent/Sustainability";
import CustomerStories from "../../Components/missionComponent/CustomerStories";
import BusinessPractices from "../../Components/missionComponent/BusinessPractices";
import InterestedSection from "../../Components/missionComponent/InterestedSection";
// import CompanySlider from "../../Components/companyComponent/CompanySlider";


export default function Mission() {   
    const [active, setActive] = useState(0);


  return (
    <>
      {/* <Pebheader/> */}
<MissionBanner/>
     <HumanInnovation/>
<Sustainability/>
<CustomerStories/>
<BusinessPractices/>
<InterestedSection/>
      <Footer />
    </>
  );
}
