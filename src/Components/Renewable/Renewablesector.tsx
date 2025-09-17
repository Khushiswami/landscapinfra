// "use client";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { ArrowLeft, ArrowRight } from "lucide-react";

// const sectors = [
//   {
//     id: 1,
//     title: "Buildings and Infrastructure",
//     image: "/industry.jpg",
//     url: "/manufacturing",
//     description:
//       "We deliver cutting-edge buildings and infrastructure solutions. From design to execution, we ensure safety, sustainability, and efficiency. Our projects redefine skylines and enable modern living.",
//   },
//   {
//     id: 2,
//     title: "Warehouses",
//     image: "/industry.jpg",
//     url: "/urban",
//     description:
//       "We construct modern warehouses optimized for logistics. Our designs maximize space, reduce costs, and improve supply chain efficiency. Durable structures for today and tomorrow’s needs.",
//   },
//   {
//     id: 3,
//     title: "Building Information Modeling",
//     image: "/industry.jpg",
//     url: "/advanced",
//     description:
//       "We leverage BIM to transform construction workflows. Digital twins enhance planning, reduce errors, and streamline operations. Smarter, faster, and more cost-effective builds.",
//   },
//   {
//     id: 4,
//     title: "PLANT & PRODUCT ENGINEERING SERVICES",
//     image: "/industry.jpg",
//     url: "/oil",
//     description:
//       "Our engineering services cover every aspect of plant and product development. We deliver tailored solutions for oil, gas, and industrial sectors. Innovation meets precision engineering.",
//   },
//   {
//     id: 5,
//     title: "Water",
//     image: "/industry.jpg",
//     url: "/water",
//     description:
//       "We provide advanced water management solutions. From treatment to distribution, our expertise ensures sustainability. Protecting resources for future generations.",
//   },
// ];

// export default function RenewableSector() {
//   const [current, setCurrent] = useState(0);
//   const [itemsPerView, setItemsPerView] = useState(3);
//   const [mobileOverlay, setMobileOverlay] = useState(false); // toggle overlay on mobile

//   // Responsive itemsPerView
//   useEffect(() => {
//     const updateItems = () => {
//       if (window.innerWidth < 768) {
//         setItemsPerView(1);
//       } else {
//         setItemsPerView(3);
//       }
//     };
//     updateItems();
//     window.addEventListener("resize", updateItems);
//     return () => window.removeEventListener("resize", updateItems);
//   }, []);

//   // Autoplay (only for desktop)
//   useEffect(() => {
//     if (itemsPerView > 1) {
//       const timer = setInterval(() => {
//         setCurrent((c) => (c + 1) % sectors.length);
//       }, 5000);
//       return () => clearInterval(timer);
//     }
//   }, [itemsPerView]);

//   const prevSlide = () => {
//     setCurrent((c) => (c - 1 + sectors.length) % sectors.length);
//     setMobileOverlay(false);
//   };
//   const nextSlide = () => {
//     setCurrent((c) => (c + 1) % sectors.length);
//     setMobileOverlay(false);
//   };

//   return (
//     <div className="w-full py-12 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-3xl font-bold text-[#000080]">Sectors</h2>
//           <button className="text-[#000080] font-semibold hover:underline">
//             Explore Sectors →
//           </button>
//         </div>

//         {/* Carousel */}
//         <div className="relative overflow-hidden">
//           {itemsPerView > 1 ? (
//             // Desktop with sliding effect
//             <motion.div
//               className="flex transition-transform duration-700"
//               style={{
//                 transform: `translateX(-${current * (100 / itemsPerView)}%)`,
//               }}
//             >
//               {sectors.map((sector, idx) => {
//                 const centerIndex = (current + 1) % sectors.length;
//                 const isCenter = idx === centerIndex;

//                 return (
//                   <div
//                     key={sector.id}
//                     className="px-2"
//                     style={{ minWidth: `${100 / itemsPerView}%` }}
//                   >
//                     <div className="relative group overflow-hidden  cursor-pointer">
//                       {/* Image */}
//                       <img
//                         src={sector.image}
//                         alt={sector.title}
//                         className={`w-full h-60 object-cover transition-opacity ${
//                           isCenter ? "opacity-100" : "opacity-50"
//                         }`}
//                       />

//                       {/* Title bar */}
//                       <div className="absolute bottom-0 w-full bg-blue-600/90 text-white py-2 text-center text-sm font-semibold">
//                         {sector.title}
//                       </div>

//                       {/* Hover Overlay */}
//                       {isCenter && (
//                         <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-center p-4 transition-opacity duration-300">
//                           <h3 className="text-lg font-bold text-white mb-2">
//                             {sector.title}
//                           </h3>
//                           <p className="text-sm text-gray-200 mb-4 line-clamp-3">
//                             {sector.description}
//                           </p>
//                           <a
//                             href={sector.url}
//                             className="px-3 py-1 bg-white text-blue-600 rounded-sm font-semibold hover:bg-gray-200 transition"
//                           >
//                             Know More
//                           </a>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 );
//               })}
//             </motion.div>
//           ) : (
//             // Mobile: show active image (overlay appears on tap)
//             <div
//               className="relative group overflow-hidden  cursor-pointer w-full"
//               onClick={() => setMobileOverlay(!mobileOverlay)}
//             >
//               <img
//                 src={sectors[current].image}
//                 alt={sectors[current].title}
//                 className="w-full h-60 object-cover"
//               />

//               {/* Title bar always visible */}
//               <div className="absolute bottom-0 w-full bg-blue-600/90 text-white py-2 text-center text-sm font-semibold">
//                 {sectors[current].title}
//               </div>

//               {/* Overlay visible only if tapped */}
//               {mobileOverlay && (
//                 <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center p-4">
//                   <h3 className="text-lg font-bold text-white mb-2">
//                     {sectors[current].title}
//                   </h3>
//                   <p className="text-sm text-gray-200 mb-4">
//                     {sectors[current].description}
//                   </p>
//                   <a
//                     href={sectors[current].url}
//                     className="px-3 py-1 bg-white text-blue-600 rounded-sm font-semibold hover:bg-gray-200 transition"
//                   >
//                     Know More
//                   </a>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* Arrows */}
//           {/* Left Arrow */}
//           <button
//             onClick={prevSlide}
//             className="
//     absolute top-1/2 left-2 -translate-y-1/2 z-20
//     p-2 shadow hover:bg-gray-100 bg-white   // mobile default
//     md:bg-transparent md:shadow-none md:rounded-none md:p-0 md:hover:bg-transparent // desktop override
//   "
//           >
//             <ArrowLeft className="w-6 h-6 text-[#000080]" />
//           </button>

//           {/* Right Arrow */}
//           <button
//             onClick={nextSlide}
//             className="
//     absolute top-1/2 right-2 -translate-y-1/2 z-20
//     p-2 shadow hover:bg-gray-100 bg-white  // mobile default
//     md:bg-transparent md:shadow-none md:rounded-none md:p-0 md:hover:bg-transparent // desktop override
//   "
//           >
//             <ArrowRight className="w-6 h-6 text-[#000080]" />
//           </button>
//         </div>

//         {/* Dots */}
//         <div className="flex justify-center mt-6 space-x-2">
//           {sectors.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => {
//                 setCurrent(i);
//                 setMobileOverlay(false);
//               }}
//               className={`w-3 h-3 rounded-full ${
//                 current === i ? "bg-blue-600" : "bg-gray-300"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const sectors = [
  {
    id: 1,
    title: "Buildings and Infrastructure",
    image: "/industry.jpg",
    url: "/manufacturing",
    description:
      "We deliver cutting-edge buildings and infrastructure solutions. From design to execution, we ensure safety, sustainability, and efficiency. Our projects redefine skylines and enable modern living.",
  },
  {
    id: 2,
    title: "Warehouses",
    image: "/industry.jpg",
    url: "/urban",
    description:
      "We construct modern warehouses optimized for logistics. Our designs maximize space, reduce costs, and improve supply chain efficiency. Durable structures for today and tomorrow’s needs.",
  },
  {
    id: 3,
    title: "Building Information Modeling",
    image: "/industry.jpg",
    url: "/advanced",
    description:
      "We leverage BIM to transform construction workflows. Digital twins enhance planning, reduce errors, and streamline operations. Smarter, faster, and more cost-effective builds.",
  },
  {
    id: 4,
    title: "PLANT & PRODUCT ENGINEERING SERVICES",
    image: "/industry.jpg",
    url: "/oil",
    description:
      "Our engineering services cover every aspect of plant and product development. We deliver tailored solutions for oil, gas, and industrial sectors. Innovation meets precision engineering.",
  },
  {
    id: 5,
    title: "Water",
    image: "/industry.jpg",
    url: "/water",
    description:
      "We provide advanced water management solutions. From treatment to distribution, our expertise ensures sustainability. Protecting resources for future generations.",
  },
];

export default function RenewableSector() {
  const [current, setCurrent] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [mobileOverlay, setMobileOverlay] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Responsive itemsPerView
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else setItemsPerView(3);
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  // Clone slides for seamless loop
  const extendedSectors = [
    ...sectors.slice(-itemsPerView),
    ...sectors,
    ...sectors.slice(0, itemsPerView),
  ];

  const total = sectors.length;
  const startIndex = itemsPerView; // start in the middle (first real slide)

  const [position, setPosition] = useState(startIndex);

  // Animate to next
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setPosition((p) => p + 1);
  };

  // Animate to prev
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setPosition((p) => p - 1);
  };

  // Handle seamless loop
  useEffect(() => {
    if (!isAnimating) return;
    const timer = setTimeout(() => {
      let newPos = position;
      if (position >= total + itemsPerView) newPos = startIndex;
      if (position < itemsPerView) newPos = total + startIndex - 1;
      if (newPos !== position) setPosition(newPos);
      setIsAnimating(false);
    }, 500); // match transition duration
    return () => clearTimeout(timer);
  }, [position, isAnimating, total, itemsPerView]);

  return (
    <div className="w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-[#000080]">Sectors</h2>
          <button className="text-[#000080] font-semibold hover:underline">
            Explore Sectors →
          </button>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          {itemsPerView > 1 ? (
            <motion.div
              className="flex transition-transform duration-500"
              style={{
                width: `${(extendedSectors.length * 100) / itemsPerView}%`,
                transform: `translateX(-${
                  (position * 100) / extendedSectors.length
                }%)`,
              }}
            >
              {extendedSectors.map((sector, idx) => (
                <div
                  key={idx}
                  style={{ minWidth: `${100 / extendedSectors.length}%` }}
                  className="px-2"
                >
                  <div className="relative group overflow-hidden cursor-pointer">
                    <img
                      src={sector.image}
                      alt={sector.title}
                      className="w-full h-60 object-cover"
                    />
                    <div className="absolute bottom-0 w-full bg-blue-600/90 text-white py-2 text-center text-sm font-semibold">
                      {sector.title}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            // Mobile
            <div
              className="relative group cursor-pointer w-full"
              onClick={() => setMobileOverlay(!mobileOverlay)}
            >
              <img
                src={sectors[position % total].image}
                alt={sectors[position % total].title}
                className="w-full h-60 object-cover"
              />
              <div className="absolute bottom-0 w-full bg-blue-600/90 text-white py-2 text-center text-sm font-semibold">
                {sectors[position % total].title}
              </div>
              {mobileOverlay && (
                <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center p-4">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {sectors[position % total].title}
                  </h3>
                  <p className="text-sm text-gray-200 mb-4">
                    {sectors[position % total].description}
                  </p>
                  <a
                    href={sectors[position % total].url}
                    className="px-3 py-1 bg-white text-blue-600 rounded-sm font-semibold hover:bg-gray-200 transition"
                  >
                    Know More
                  </a>
                </div>
              )}
            </div>
          )}

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 -translate-y-1/2 z-20 md:bg-transparent md:p-0"
          >
            <ArrowLeft className="w-6 h-6 text-[#000080]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 -translate-y-1/2 z-20 md:bg-transparent md:p-0"
          >
            <ArrowRight className="w-6 h-6 text-[#000080]" />
          </button>
        </div>
      </div>
    </div>
  );
}
