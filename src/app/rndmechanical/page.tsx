import Image from "next/image";

import Footer from "yes/Components/Footer";
import ExpertiseP from "yes/Components/ExpertiseP";
import Navbar from "../../Components/Navbar";
import RNDMechanicalCom from "yes/Components/RNDMechanicalCom";
export default function Rndmechanical() {
  return (
    <>
      <Navbar />
      <RNDMechanicalCom />
      {/* <ExpertiseP /> */}

      <Footer />
    </>
  );
}
