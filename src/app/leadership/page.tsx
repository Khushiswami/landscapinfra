"use client";
import { useState, useEffect } from "react";

import Footer from "../../Components/Footer"


import LeadershipBanner from "../../Components/leadershipComponet/LeadershipBanner";
import LeadershipCards from "../../Components/leadershipComponet/LeadershipCards";
// import CompanySlider from "../../Components/companyComponent/CompanySlider";



export default function Leadership() {   
    const [active, setActive] = useState(0);


  return (
    <>
      {/* <Pebheader/> */}
<LeadershipBanner/>
<LeadershipCards/>
     

      <Footer />
    </>
  );
}
