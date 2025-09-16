"use client";
import { useState, useEffect } from "react";

import Footer from "../../Components/Footer";

import LeadershipBanner from "../../Components/leadershipComponet/LeadershipBanner";
import LeadershipCards from "../../Components/leadershipComponet/LeadershipCards";
import Header from "yes/Components/Header";
import Navbar from "yes/Components/Navbar";
// import CompanySlider from "../../Components/companyComponent/CompanySlider";

export default function Leadership() {
  const [active, setActive] = useState(0);

  return (
    <>
      <Navbar />
      <LeadershipBanner />
      <LeadershipCards />
      <Footer />
    </>
  );
}
