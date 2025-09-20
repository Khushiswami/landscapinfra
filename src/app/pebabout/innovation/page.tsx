"use client";
import { useState, useEffect } from "react";
import Footer from "yes/Components/Footer";
import Industryheader from "yes/Components/Industryheader";
import IndustryHead from "yes/Components/Industryheader";
import InnovationImpact from "yes/Components/innovationComponent/InnovationImpact";
import Pebheader from "yes/Components/Pebheader";
import PebheaderW from "yes/Components/PebheaderW";
import IndustryHeaderW from "yes/Components/PebheaderW";

export default function Innovation() {
  const [active, setActive] = useState(0);

  return (
    <>
      <PebheaderW />
      <InnovationImpact />
      <Footer />
    </>
  );
}
