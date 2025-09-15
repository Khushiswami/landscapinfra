"use client";
import { useState, useEffect } from "react";
import Footer from "yes/Components/Footer";

import IndustryHead from "yes/Components/Industryheader";
import LeadershipBanner from "yes/Components/leadershipComponet/LeadershipBanner";
import LeadershipCards from "yes/Components/leadershipComponet/LeadershipCards";
import Pebheader from "yes/Components/Pebheader";

export default function Leadership() {
  const [active, setActive] = useState(0);

  return (
    <>
      <Pebheader />
      <LeadershipBanner />
      <LeadershipCards />
      <Footer />
    </>
  );
}
