// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Play, Pause } from "lucide-react";
// import { IoIosArrowForward } from "react-icons/io";
// import { useRouter } from "next/navigation";

// export default function BannerP() {
//   const router = useRouter();

//   const slides = [
//     {
//       title: "Industry Installation and Construction",
//       desc: "Quality Construction Project Delivery on time with customer satisfaction.",
//       video: "/homeslider.mp4",
//       link: "/industryinstallation",
//     },

//     {
//       title: "Engineering & RND Services",
//       desc: "Committed to advancing innovation, fairness, equity, and quality in assessment.",
//       video: "/homeslider.mp4",
//       link: "/rnd",
//     },
//     {
//       title: "Renewable Energy Solution Provider",
//       desc: "Explore innovation in industrial equipment with green technologies.",
//       video: "/homeslider.mp4",
//       link: "/renewableenergy",
//     },
//     {
//       title: "Pre-Engineered Buildings",
//       desc: "Modular and pre-engineered structures tailored for efficiency and scalability.",
//       video: "/homeslider.mp4",
//       link: "/preEngineeredBuildings",
//     },
//     {
//       title: "Real Estate",
//       desc: "Innovative real estate solutions designed for modern needs and sustainable growth.",
//       video: "/homeslider.mp4",
//       link: "/realStateDevlopment",
//     },
//   ];

//   const [active, setActive] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);

//   useEffect(() => {
//     if (!isPlaying) return;
//     const interval = setInterval(() => {
//       setActive((prev) => (prev + 1) % slides.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, [isPlaying, slides.length]);

//   return (
//     <section className="relative w-full h-[80vh] sm:h-[94vh] overflow-hidden">
//       {/* Background Video */}
//       <video
//         src={slides[active].video}
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/60" />

//       {/* Slide Content */}
//       <div className="relative z-10 flex flex-col justify-center h-full  mx-auto px-4 sm:px-6 text-left sm:text-left">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={slides[active].title}
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -40 }}
//             transition={{ duration: 0.7 }}
//           >
//             <h1 className="px-4 sm:px-6 text-lg sm:text-4xl md:text-6xl font-bold text-white mb-3 sm:mb-6 drop-shadow-lg leading-snug">
//               {slides[active].title}
//             </h1>

//             <p className="px-4 sm:px-6 text-xs sm:text-lg md:text-xl text-gray-200 mb-4 sm:mb-8 max-w-xs sm:max-w-xl mx-auto sm:mx-0 leading-relaxed">
//               {slides[active].desc}
//             </p>

//             <button
//               onClick={() => router.push(slides[active].link)}
//               className="px-6 sm:px-10 py-2 sm:py-3 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:bg-blue-100 transition flex items-center justify-start sm:justify-center gap-1 sm:gap-2 text-xs sm:text-base"
//             >
//               <IoIosArrowForward className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700" />
//               <span>Start now</span>
//             </button>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Bottom Navigation Progress + Controls */}
//       <div className="absolute bottom-4 sm:bottom-6 left-0 sm:left-1/2 sm:-translate-x-1/2 w-full px-3 sm:px-6 z-10">
//         <div className="flex  gap-2 sm:gap-8 relative justify-start sm:justify-center">
//           {slides.map((s, i) => (
//             <div
//               key={i}
//               onClick={() => setActive(i)}
//               className="cursor-pointer w-20 sm:w-40 md:w-52"
//             >
//               {/* Progress Bar */}
//               <div className="h-[2px] sm:h-[3px] w-full bg-gray-500/40 rounded-full mb-1 relative overflow-hidden">
//                 <motion.div
//                   key={active === i ? `active-${i}` : `inactive-${i}`}
//                   initial={{ width: 0 }}
//                   animate={{
//                     width: active === i ? "100%" : "0%",
//                   }}
//                   transition={{
//                     duration: active === i ? 6 : 0,
//                     ease: "linear",
//                   }}
//                   className="h-full bg-blue-600 absolute left-0 top-0"
//                 />
//               </div>
//               <p
//                 className={`text-[8px] sm:text-xs font-medium leading-snug text-center ${
//                   active === i ? "text-white" : "text-gray-300"
//                 }`}
//               >
//                 {s.title}
//               </p>
//             </div>
//           ))}

//           {/* Play / Pause Button */}
//           <div className="absolute -top-10 right-0 sm:right-4">
//             <button
//               onClick={() => setIsPlaying(!isPlaying)}
//               className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-white/50 hover:bg-white/10 transition"
//             >
//               {isPlaying ? (
//                 <Pause className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
//               ) : (
//                 <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function Banner() {
  const router = useRouter();

  const slides = [
    {
      title: "Industry Installation and Construction",
      desc: "Quality Construction Project Delivery on time with customer satisfaction.",
      video: "/homeslider.mp4",
      link: "/industryinstallation",
    },
    {
      title: "Engineering & RND Services",
      desc: "Committed to advancing innovation, fairness, equity, and quality in assessment.",
      video: "/homeslider.mp4",
      link: "/rnd",
    },
    {
      title: "Renewable Energy Solution Provider",
      desc: "Explore innovation in industrial equipment with green technologies.",
      video: "/homeslider.mp4",
      link: "/renewableenergy",
    },
    {
      title: "Pre-Engineered Buildings",
      desc: "Modular and pre-engineered structures tailored for efficiency and scalability.",
      video: "/homeslider.mp4",
      link: "/preEngineeredBuildings",
    },
    {
      title: "Real Estate",
      desc: "Innovative real estate solutions designed for modern needs and sustainable growth.",
      video: "/homeslider.mp4",
      link: "/realStateDevlopment",
    },
  ];

  const [active, setActive] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  // --- Group logic for mobile tabs ---
  const groupSize = 2; // how many tabs per view on mobile
  let startIndex = 0;
  if (isMobile) {
    startIndex = Math.floor(active / groupSize) * groupSize; // group start
  }
  const visibleSlides = isMobile
    ? slides.slice(startIndex, startIndex + groupSize)
    : slides;

  return (
    <section className="relative w-full h-[80vh] sm:h-[80vh] overflow-hidden">
      {/* Background Video */}
      <video
        src={slides[active].video}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Slide Content */}
      <div className="relative z-10 flex flex-col justify-center h-full mx-auto px-6 sm:px-16 text-left max-w-6xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[active].title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg leading-snug">
              {slides[active].title}
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-gray-200 mb-6 max-w-xl leading-relaxed">
              {slides[active].desc}
            </p>
            <button
              onClick={() => router.push(slides[active].link)}
              className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:bg-blue-100 transition flex items-center gap-2 text-sm sm:text-base"
            >
              <IoIosArrowForward className="w-5 h-5 text-blue-700" />
              <span>Start now</span>
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Navigation + Controls */}
      <div className="absolute bottom-6 left-0 sm:left-1/2 sm:-translate-x-1/2 w-full px-6 z-10">
        <div className="flex gap-4 sm:gap-8 justify-start sm:justify-center relative items-center">
          {visibleSlides.map((s, idx) => {
            const realIndex = isMobile ? startIndex + idx : idx;
            return (
              <div
                key={realIndex}
                onClick={() => setActive(realIndex)}
                className="cursor-pointer flex-1 sm:w-48"
              >
                <div className="h-[3px] w-full bg-gray-500/40 rounded-full mb-1 relative overflow-hidden">
                  <motion.div
                    key={`progress-${realIndex}`}
                    initial={{ width: 0 }}
                    animate={{ width: active === realIndex ? "100%" : "0%" }}
                    transition={{
                      duration: active === realIndex ? 6 : 0,
                      ease: "linear",
                    }}
                    className="h-full bg-blue-600 absolute left-0 top-0"
                  />
                </div>
                <p
                  className={`text-md  font-medium text-center ${
                    active === realIndex ? "text-white" : "text-gray-300"
                  }`}
                >
                  {s.title}
                </p>
              </div>
            );
          })}

          {/* Play/Pause */}
          <div className="absolute -top-12 right-0 sm:right-6">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/50 hover:bg-white/10 transition"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-white" />
              ) : (
                <Play className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
