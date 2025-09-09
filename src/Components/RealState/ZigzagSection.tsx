// components/ZigzagSection.tsx
"use client";
import { FC } from "react";
import { motion } from "framer-motion";

const ZigzagSection: FC = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
        
        {/* Left Section (Residential) */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative  items-center justify-center z-10 -me-16"
        >
          <div className="flex items-center gap-4 justify-center py-10">
  <h2 className="text-xl md:text-xl font-bold text-blue-900">
    RESIDENTIAL PROJECTS
  </h2>
  <button className="text-sm px-4 py-2 border-2 border-blue-600 text-blue-600 font-semibold flex items-center gap-2 hover:bg-blue-600 hover:text-white transition">
    View Projects <span className="text-yellow-500">→</span>
  </button>
</div>

          <img
            src="realstate/left.webp"
            alt="Left"
            className="w-full h-120 object-cover clip-left"
          />
          {/* Text Overlay */}
         
        </motion.div>

        {/* Right Section (Commercial) */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative  items-center justify-center -ml-16"
        >

            <div className="flex items-center gap-4 justify-center py-10">
  <h2 className="text-xl md:text-xl font-bold text-blue-900">
    COMMERCIAL PROJECTS
  </h2>
  <button className="text-sm px-4 py-2 border-2 border-blue-600 text-blue-600 font-semibold flex items-center gap-2 hover:bg-blue-600 hover:text-white transition">
    View Projects <span className="text-yellow-500">→</span>
  </button>
</div>
            
          
          <img
            src="realstate/right.webp"
            alt="Right"
            className="w-full h-120 object-cover clip-right"
          />
        
        </motion.div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .clip-left {
          clip-path: polygon(0 0, 96% 0, 80% 100%, 0% 100%);
        }
        .clip-right {
          clip-path: polygon(18% 0, 100% 0, 100% 100%, 3% 100%);
        }
      `}</style>
    </section>
  );
};

export default ZigzagSection;
