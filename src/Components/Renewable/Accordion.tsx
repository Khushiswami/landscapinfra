// components/TripleBottomAccordion.tsx
"use client";

import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

const items: AccordionItem[] = [
  {
    id: 1,
    title: "Engineering (E)",
    content:
      "The Blueprint of Your Solar System Engineering is the critical foundation of every Solar EPC project. At Manufyn, our EPC engineers begin with meticulous site assessments.This includes detailed energy audits,load profiling,and shadow analysis. We use this essential data to create a highly customized solar system design. This design is always optimized for your sites solar potential, climate, and electrical load. Our EPC experts ensure the layout maximizes energy production while strictly adhering to safety and local compliance standards. By combining advanced software simulations with on-site inspections, we deliver precise, efficient, and future-ready solar solutions. This proactive engineering approach reduces operational risks and guarantees long-term solar system performance.",
  },
  {
    id: 2,
    title: "Procurement(P)",
    content:
      "Sourcing Quality for Your Solar System Procurement is the assurance that every single component of your solar system meets the highest quality standards. Manufyn sources all critical materials—solar panels, inverters, batteries, and mounting structures—exclusively from certified Tier-1 suppliers. We enforce strict quality checks throughout our procurement process to guarantee the durability, efficiency, and optimal performance of your solar system under all local weather conditions. Our focus is on providing cost-effective, reliable, and scalable solar solutions. Choosing high-grade components through rigorous EPC procurement allows for lower maintenance costs, a longer system life, and consistent energy output. This commitment cements us as a trusted choice among solar EPC companies in India.",
  },
  {
    id: 3,
    title: "Construction (C)",
    content:
      "Bringing Your Solar System to Life Construction is the phase where our precise engineering design is realized with professionalism. Our certified EPC contractors meticulously manage every aspect: site preparation, civil work, module mounting, electrical wiring, and system interconnections. Every step of construction follows strict safety protocols and industry standards. Following installation, rigorous testing ensures the entire solar system operates efficiently and safely. We provide full commissioning, comprehensive documentation, and essential maintenance guidance, offering clients a seamless turnkey EPC experience. By combining engineering accuracy with expert construction execution, Manufyn delivers solar projects that are reliable, durable, and high-performing, securing our position as one of India’s leading solar EPC companies.",
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" mx-auto mt-10 p-4 md:px-29">
      <h2 className="text-sm uppercase text-gray-500 mb-2">Our Vision</h2>
      <h1 className="text-2xl font-semibold mb-6 text-[#000080] md:text-3xl">
        Your Solar EPC Partner Landsking Infra{" "}
      </h1>
      <p className="text-lg  mb-6 md:text-xl">
        Solar EPC (Engineering, Procurement & Construction) is the ultimate
        turnkey solution for your solar energy needs. When you choose a single
        company to manage every stage from initial design to final
        commissioning—you guarantee efficiency, cost control, and reliability.
      </p>
      {/* <h1 className="text-3xl font-semibold mb-6">
        How we approach the triple bottom line
      </h1> */}
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={item.id} className="border-b border-gray-300">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center py-4 text-left"
            >
              <div className="flex items-center space-x-2">
                <span className="text-blue-500 font-bold text-3xl">
                  {/* {index + 1 < 10 ? `0${index + 1}.` : `${index + 1}.`} */}
                </span>
                <span className="text-gray-900 text-3xl ">{item.title}</span>
              </div>
              <span
                className={`flex items-center justify-center h-8 w-8 rounded-full border border-black ${
                  openIndex === index ? "bg-black" : "bg-white"
                }`}
              >
                {openIndex === index ? (
                  <MinusIcon className="h-10 w-5 text-white" />
                ) : (
                  <PlusIcon className="h-10 w-5 text-black" />
                )}
              </span>
            </button>
            {openIndex === index && (
              <p className="pb-4 text-gray-800 text-xl tracking-wider ">
                {item.content}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
