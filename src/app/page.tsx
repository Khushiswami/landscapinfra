import Image from "next/image";
import Header from "../Components/Header";

import Insights from "../Components/Insights";
import Footer from "../Components/Footer";
import HelpP from "../Components/HelpP";
import ClientP from "../Components/ClientP";
import ExpertiseP from "../Components/ExpertiseP";
import CoreBusinessP from "../Components/CoreBusinessP";
import CounterP from "../Components/CounterP";
import AboutP from "../Components/AboutP";
import BannerP from "../Components/BannerP";
import Navbar from "../Components/Navbar";
import Mainheader from "yes/Components/Mainheader";
export default function Home() {
  return (
    <>
      <Navbar />
      <BannerP />
      <AboutP />
      <CounterP />
      <CoreBusinessP />
      <ExpertiseP />
      <ClientP />
      <Insights />
      <Footer />
    </>
  );
}
