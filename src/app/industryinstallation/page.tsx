"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // ✅ import router
import Footer from "../../Components/Footer";
import Industryheader from "yes/Components/Industryheader";
import Industryplatform from "yes/Components/Industryplatform";
import IndustrySlider from "yes/Components/IndustrySlider";
import IndustryaboutUs from "yes/Components/Industryabout";
import ServicesSlider from "yes/Components/ServicesSlider";
import Explore from "yes/Components/Explore";
import { motion, AnimatePresence } from "framer-motion";
import IndustrySector from "yes/Components/Industrysectors";
import Industrybanner from "yes/Components/Industrybanner";
import Industryfooter from "yes/Components/Industryfooter";

export default function Industryinstallation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Industryheader />
      <Industrybanner />
      <IndustrySector />
      <Industryplatform />
      <IndustryaboutUs />
      <IndustrySlider />
      <ServicesSlider />
      <Explore />
      <Industryfooter />
    </>
  );
}
