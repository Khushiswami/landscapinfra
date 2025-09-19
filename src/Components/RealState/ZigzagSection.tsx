// components/ZigzagSection.tsx
"use client";
import { FC } from "react";
import { motion } from "framer-motion";

const ZigzagSection: FC = () => {
  return (
    <section className="w-full md:py-20 bg-white">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
        {/* Left Section (Residential) */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 md:-me-16"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 justify-center py-6 md:py-10">
            <h2 className="text-lg md:text-xl font-black tracking-wide text-[#000080] text-center">
              RESIDENTIAL PROJECTS
            </h2>
            <button className="text-sm px-4 py-2 border-2 border-[#000080] text-[#000080] font-semibold flex items-center gap-2 hover:bg-blue-600 hover:text-white transition">
              View Projects <span className="text-[#8080FF]">→</span>
            </button>
          </div>

          <img
            src="realstate/left.webp"
            alt="Left"
            className="w-full h-64 md:h-120 object-cover clip-left md:clip-left"
          />
        </motion.div>

        {/* Right Section (Commercial) */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative md:-ml-16"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 justify-center py-6 md:py-10">
            <h2 className="text-lg md:text-xl font-black tracking-wide text-[#000080] text-center">
              COMMERCIAL PROJECTS
            </h2>
            <button className="text-sm px-4 py-2 border-2 border-[#000080] text-[#000080] font-semibold flex items-center gap-2 hover:bg-blue-600 hover:text-white transition">
              View Projects <span className="text-[#8080FF]">→</span>
            </button>
          </div>

          <img
            src="realstate/right.webp"
            alt="Right"
            className="w-full h-64 md:h-120 object-cover clip-right md:clip-right"
          />
        </motion.div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        /* Mobile pe normal rectangle, desktop pe zigzag */
        @media (min-width: 768px) {
          .clip-left {
            clip-path: polygon(0 0, 96% 0, 80% 100%, 0% 100%);
          }
          .clip-right {
            clip-path: polygon(18% 0, 100% 0, 100% 100%, 3% 100%);
          }
        }
      `}</style>
    </section>
  );
};

export default ZigzagSection;
