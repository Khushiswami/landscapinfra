"use client";

import { ReactNode } from "react";
import { FaWarehouse, FaIndustry, FaSnowflake } from "react-icons/fa";
import { MdOutlineCleanHands } from "react-icons/md";
import Image from "next/image";
import Rndheader from "yes/Components/Rndheader";
import Rndfooter from "yes/Components/Rndfooter";

// Card Props Type
type CardProps = {
  image: string;
  icon: ReactNode;
  title: string;
  description: string;
};

// ✅ Card Component
function Card({ image, icon, title, description }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col group transition-all duration-500 hover:shadow-lg">
      {/* Image */}
      <div className="relative w-full h-56 overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-0 bg-black opacity-0 transition-all duration-500 group-hover:w-[88%] group-hover:opacity-100"></div>
      </div>

      {/* Icon */}
      <div className="relative -mt-8 ml-auto mr-4 bg-[#000080] p-3 rounded shadow-lg flex items-center justify-center">
        {icon}
      </div>

      {/* Text */}
      <div className="px-5 pb-6 flex-1 flex flex-col">
        <h3 className="text-lg sm:text-xl font-bold tracking-wide mb-3">
          {title}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base tracking-wide mb-5 flex-1">
          {description}
        </p>

        <a
          href="#"
          className="relative border border-[#000080] text-sm sm:text-lg tracking-wider text-black px-4 sm:px-5 py-2 font-semibold w-fit overflow-hidden"
        >
          <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
            READ MORE
          </span>
          <span className="absolute left-0 top-0 h-full w-0 bg-[#000080]transition-all duration-500 ease-out group-hover:w-full"></span>
        </a>
      </div>
    </div>
  );
}

// ✅ Main Page Component
export default function Rndexplore() {
  return (
    <>
      <Rndheader />
      {/* Hero Section */}
      <section className="w-full min-h-[400px] md:min-h-[590px] flex flex-col md:flex-row">
        <div
          className="flex-1 flex items-center justify-center p-6 sm:p-8 bg-cover bg-center relative"
          style={{
            backgroundImage: `linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/rnd/cadone.jpeg')`,
          }}
        >
          <div className="text-white text-center relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-snug tracking-wide">
              CFD & CAE Services
            </h1>
          </div>
        </div>
      </section>

      {/* Company Intro Section */}
      <section className="w-full bg-white py-12 px-4 sm:px-8 md:px-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold leading-snug max-w-4xl mx-auto">
              Precision CFD & CAE Services{" "}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-64 sm:h-80 md:h-[450px]">
              <Image
                src="/rnd/cad.jpeg"
                alt="Industrial Building"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                Harness the combined power of Computational Fluid Dynamics (CFD)
                and Computer-Aided Engineering (CAE) to simulate, analyze, and
                refine designs long before physical prototypes exist. By
                creating a digital twin of real-world conditions, engineers can
                visualize performance, reduce trial-and-error, and unlock
                smarter product development.From fluid flow and heat transfer to
                structural durability and system behavior, CFD and CAE enable
                manufacturers to predict outcomes, minimize risks, and cut down
                production costs—all while accelerating time-to-market.
              </p>

              <div className="flex items-center gap-4">
                <button className="border text-[#000080] border-[#000080] px-4 sm:px-6 py-2 text-sm sm:text-base hover:bg-[#000080] hover:text-white transition">
                  GET A QUOTE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDER */}
      <main className="bg-white px-4 sm:px-6 md:px-12">
        <section className="py-12 px-4 sm:px-6 md:px-12">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold leading-snug max-w-4xl mx-auto">
              Advanced CAE Services
            </h2>
          </div>
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              image="/cadservice/"
              icon={<FaIndustry size={38} className="text-white" />}
              title="Static Structural Analysis"
              description="Evaluates the response of components under steady forces, loads, and constraints. Identifies high-stress regions and ensures compliance with safety standards. Prevents overdesign while maintaining structural reliability. Critical for validating designs before manufacturing."
            />
            <Card
              image="/cadservice/explt.png"
              icon={<FaWarehouse size={38} className="text-white" />}
              title="Explicit Dynamic Analysis"
              description="Simulates short-duration, high-impact events such as crashes or explosions. Captures complex nonlinear material and contact behaviors under sudden loads. Provides insight into system resilience under extreme conditions. Essential for industries prioritizing safety and risk mitigation."
            />
            <Card
              image="/cadservice/fatigue.jpg"
              icon={<MdOutlineCleanHands size={38} className="text-white" />}
              title="Fatigue & Durability Analysis"
              description="Predicts the service life of parts under repeated cyclic stresses. Determines when and where cracks or failures may initiate. Reduces downtime, warranty issues, and maintenance costs. Ensures long-term reliability and consistent product performance."
            />
            <Card
              image="/cadservice/NHS.PNG"
              icon={<FaIndustry size={38} className="text-white" />}
              title="NVH (Noise, Vibration & Harshness)"
              description="Analyzes vibration, acoustic, and harshness behavior in mechanical systems. Helps identify and minimize unwanted noise sources. Improves comfort, safety, and user perception of product quality. Crucial for automotive, aerospace, and consumer product design."
            />
            <Card
              image="/cadservice/thermal.jpeg"
              icon={<FaSnowflake size={38} className="text-white" />}
              title="Thermal & Heat Transfer Analysis"
              description="Examines the influence of temperature on components and assemblies. Predicts heat buildup, thermal stresses, and cooling requirements. Supports thermal protection strategies and material optimization. Ensures efficiency, safety, and extended system life."
            />
            <Card
              image="/cadservice/body.jpeg"
              icon={<FaIndustry size={38} className="text-white" />}
              title="Multi-Body Dynamic Simulation"
              description="Models the motion and interaction of interconnected mechanical parts. Captures kinematics, forces, and energy transfer in real-time operation. Optimizes performance, wear resistance, and system integration. Widely applied in automotive, robotics, and machinery design."
            />
            <Card
              image="/cadservice/"
              icon={<FaWarehouse size={38} className="text-white" />}
              title="Aerodynamic & Aeroelastic Studies (CFD + CAE)"
              description="Analyzes airflow interaction with structures for performance improvement. Evaluates drag, lift, and vibration-induced instabilities. Supports stable, fuel-efficient, and safe product development. Critical in aerospace, automotive, and renewable energy sectors."
            />
            <Card
              image="/cadservice/"
              icon={<MdOutlineCleanHands size={38} className="text-white" />}
              title="Hydraulic & Pneumatic System Analysis"
              description="Simulates fluid-powered systems for efficiency and reliability. Optimizes pressure flow, energy use, and operational safety. Identifies cavitation, leakage risks, and power loss points. Widely applied in industrial, aerospace, and automotive systems."
            />
            <Card
              image="/cadservice/fluid.png"
              icon={<FaIndustry size={38} className="text-white" />}
              title="Fluid-Structure Interaction (FSI)"
              description="Studies the mutual influence between fluid flow and solid deformation. Predicts stresses, deflection, and fatigue caused by fluid forces. Supports design of pipelines, ships, turbines, and aerospace systems. Ensures structural safety under complex flow environments."
            />
            <Card
              image="/cadservice/"
              icon={<FaWarehouse size={38} className="text-white" />}
              title="Combustion & Thermal Management"
              description="Models combustion behavior for engines, turbines, and reactors. Optimizes fuel efficiency, emission reduction, and flame stability. Combines with thermal management for cooling critical systems. Enables safer and more energy-efficient product development."
            />
            <Card
              image="/cadservice/"
              icon={<FaIndustry size={38} className="text-white" />}
              title="Hypersonic & High-Mach Flows"
              description="Simulates extreme high-speed aerodynamic conditions. Ensures performance and safety of aerospace and defense systems."
            />
            <Card
              image="/cadservice/speed.jpg"
              icon={<FaWarehouse size={38} className="text-white" />}
              title="Low-Speed & Ventilation Flows"
              description="Optimizes air distribution in ventilation, wind tunnels, and environmental systems. Enhances energy efficiency and indoor comfort."
            />
            <Card
              image="/cadservice/model.jpg"
              icon={<MdOutlineCleanHands size={38} className="text-white" />}
              title="Reactive & Chemical Flows"
              description="Models chemically reacting systems such as fuel combustion, gasification, and industrial reactors. Improves efficiency and reduces emissions."
            />
            <Card
              image="/cadservice/turb.jpeg"
              icon={<FaIndustry size={38} className="text-white" />}
              title="Turbulence & Transition Modeling"
              description="Captures flow instabilities, vortices, and turbulence phenomena. Provides accurate predictions for aircraft wings, turbines, and industrial designs."
            />
            <Card
              image="/cadservice/droplet.jpg"
              icon={<FaSnowflake size={38} className="text-white" />}
              title="Droplet & Spray Dynamics"
              description="Analyzes droplet breakup, atomization, and spray distribution. Supports applications in fuel injection, agriculture, and pharmaceuticals."
            />
            <Card
              image="/cadservice/cooling.jpg"
              icon={<FaIndustry size={38} className="text-white" />}
              title="Cooling & Heat Exchange Systems"
              description="Simulates air and liquid cooling in exchangers, condensers, and industrial systems. Improves thermal regulation and energy use."
            />
            <Card
              image="/cadservice/vibration.JPG"
              icon={<FaWarehouse size={38} className="text-white" />}
              title="Flow-Induced Vibration Analysis"
              description="Studies vibrations caused by fluid interaction with structures. Prevents fatigue, noise, and failures in piping and offshore systems."
            />
            <Card
              image="/cadservice/"
              icon={<MdOutlineCleanHands size={38} className="text-white" />}
              title="Environmental & Pollution Dispersion"
              description="Predicts how pollutants, smoke, or particles spread in natural or urban environments. Helps design sustainable and regulatory-compliant solutions."
            />
            <Card
              image="/cadservice/"
              icon={<FaIndustry size={38} className="text-white" />}
              title="Propulsion & Jet Flow Studies"
              description="Models exhausts, jet engines, and propulsion systems. Enhances thrust efficiency and reduces noise in aerospace and defense."
            />
            <Card
              image="/cadservice/"
              icon={<FaWarehouse size={38} className="text-white" />}
              title="Cavitation & Multiphase Phenomena"
              description="Analyzes vapor formation, bubble collapse, and fluid cavitation. Ensures reliability in pumps, turbines, and marine systems."
            />
          </div>
        </section>
      </main>

      {/* END SLIDERR */}

      {/* ✅ Cards Section */}

      {/* Info Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-8 md:px-16 text-center mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide text-black uppercase">
          Driving Innovation with Advanced Engineering Solutions
        </h2>
        <div className="w-12 h-[2px] bg-[#000080] mx-auto mt-3 mb-6 relative">
          <span className="absolute -bottom-[3px] left-0 w-6 h-[2px] bg-[#000080]"></span>
        </div>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
          Transform ideas into reality with our cutting-edge CFD and CAE
          expertise. From performance validation to thermal and structural
          optimization, we deliver precise simulations that enhance efficiency,
          reliability, and innovation across every stage of product development.
        </p>
      </section>

      <Rndfooter />
    </>
  );
}
