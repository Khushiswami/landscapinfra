"use client";

import Image from "next/image";

export default function KeyFeatures() {
  return (
    <section className="w-full bg-white py-12 px-6 lg:px-20">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-10">
        <span className=" text-[#000080] px-3 py-1 rounded-md mr-2">
          KEY FEATURES
        </span>
        OF LANDSKING INFRA PVT LTD COLD STORAGE & COLD ROOM SOLUTIONS
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="w-full">
          <Image
            src="/industry.jpg"
            alt="Cold Storage by LANDSKING INFRA"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <p className="text-gray-600 leading-relaxed">
            At <span className="font-semibold">LANDSKING INFRA PVT LTD</span>, we deliver 
            <span className="font-semibold"> state-of-the-art cold storage systems</span> and 
            <span className="font-semibold"> energy-efficient cold rooms</span>. 
            Our solutions are designed to maintain product freshness, reduce energy costs, 
            and ensure long-lasting durability for industries like food processing, 
            pharmaceuticals, agriculture, and logistics.
          </p>

          {/* Feature Points */}
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-gray-800">
                • Factory-Fabricated Panels:
              </h4>
              <p className="text-gray-600">
                Precision-engineered insulated panels ensure airtight sealing, 
                excellent thermal efficiency, and unmatched durability.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-800">
                • Advanced Insulation Technology:
              </h4>
              <p className="text-gray-600">
                Incorporation of <span className="font-semibold">PUF / EPS panels</span> 
                and continuous line production methods for superior cooling, 
                reduced heat loss, and energy savings.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-800">
                • Reliable Engineering & Design:
              </h4>
              <p className="text-gray-600">
                Built with advanced structural design and engineering, 
                our cold rooms guarantee consistent performance and 
                compliance with global industry standards.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-800">
                • Energy Efficiency & Cost Savings:
              </h4>
              <p className="text-gray-600">
                Optimized refrigeration systems that minimize power consumption 
                while delivering maximum cooling efficiency, reducing operational costs 
                over the long term.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-800">
                • Hygiene & Easy Maintenance:
              </h4>
              <p className="text-gray-600">
                Designed with smooth, easy-to-clean surfaces and proper ventilation 
                systems to maintain strict hygiene, making them ideal for food and 
                pharma applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
