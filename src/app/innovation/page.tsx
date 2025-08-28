"use client";
import { useState, useEffect } from "react";

import Footer from "../../Components/Footer";

import InnovationImpact from "../../Components/innovationComponent/InnovationImpact";
import Header from "yes/Components/Header";
// import CompanySlider from "../../Components/companyComponent/CompanySlider";

export default function Innovation() {
  const [active, setActive] = useState(0);

  return (
    <>
      {/* <Pebheader/> */}
      <Header />
      <InnovationImpact />

      <Footer />
    </>
  );
}
