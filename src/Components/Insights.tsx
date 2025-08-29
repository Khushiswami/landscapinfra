
// "use client";

// import { useState, useEffect } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// const cards = [
//   {
//     id: 1,
//     tag: "Whitepaper",
//     title: "How AI is Driving the Next Era of Mobility",
//     description:
//       "The mobility industry experts at LTTS engaged in an extensive analysis of these trends, across three domains – Product Development Life Cycle, Software Development Life Cycle and User Experience.",
//     image: "/industry.jpg",
//   },
//   {
//     id: 2,
//     tag: "Whitepaper",
//     title: "EU AI Act is Critical for Innovation",
//     description:
//       "The integration of Artificial Intelligence is transforming the medical device industry, facilitating smarter diagnosis, physiological monitoring, and treatment decisions",
//     image: "/industry.jpg",
//   },
//   {
//     id: 3,
//     tag: "Blog",
//     title: "Agentic AI Meets ER&D: Engineering the Next Leap in Autonomy",
//     description:
//       "Agentic AI is redefining autonomy—LTTS fuses AI with engineering to build intelligent, adaptive systems across mobility, manufacturing, and healthcare.",
//     image: "/industry.jpg",
//   },
//   {
//     id: 4,
//     tag: "Whitepaper Study",
//     title: "Everest Group: Unlocking Business Brilliance with GenAI and ...",
//     description:
//       "The comprehensive playbook to learn how unlock the full potential of gen AI and LLMs to drive your business towards unprecedented success.",
//     image: "/industry.jpg",
//   },
//   {
//     id: 5,
//     tag: "Whitepaper Study",
//     title: "Everest Group: Unlocking Business Brilliance with GenAI and ...",
//     description:
//       "The comprehensive playbook to learn how unlock the full potential of gen AI and LLMs to drive your business towards unprecedented success.",
//     image: "/industry.jpg",
//   },
//   {
//     id: 6,
//     tag: "Whitepaper Study",
//     title: "Everest Group: Unlocking Business Brilliance with GenAI and ...",
//     description:
//       "The comprehensive playbook to learn how unlock the full potential of gen AI and LLMs to drive your business towards unprecedented success.",
//     image: "/industry.jpg",
//   },
// ];

// export default function Insights() {
//   const [startIndex, setStartIndex] = useState(0);
//   const [cardsPerSlide, setCardsPerSlide] = useState(3);

//   // Responsive cards per slide
//   useEffect(() => {
//     const updateCardsPerSlide = () => {
//       if (window.innerWidth < 640) {
//         setCardsPerSlide(1);
//       } else if (window.innerWidth < 1024) {
//         setCardsPerSlide(2);
//       } else {
//         setCardsPerSlide(3);
//       }
//     };
//     updateCardsPerSlide();
//     window.addEventListener("resize", updateCardsPerSlide);
//     return () => window.removeEventListener("resize", updateCardsPerSlide);
//   }, []);

//   const nextSlide = () => {
//     if (startIndex < cards.length - cardsPerSlide) {
//       setStartIndex((prev) => prev + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (startIndex > 0) {
//       setStartIndex((prev) => prev - 1);
//     }
//   };

//   return (
//     <div className="relative md:px-20 py-10">
//       <h1 className="text-left text-4xl font-bold my-10 text-[#000080]">
//         Our Latest Insights
//       </h1>

//       {/* Slider Container */}
//       <div className="overflow-hidden">
//         <div
//           className="flex gap-6 transition-transform duration-500 mx-6 md:mx-9"
//           style={{
//             transform: `translateX(-${(startIndex * 100) / cardsPerSlide}%)`,
//           }}
//         >
//           {cards.slice(startIndex, startIndex + cardsPerSlide).map((card) => (
//             <div
//               key={card.id}
//               className="flex-shrink-0 bg-[#f3f6f4] relative w-full sm:w-1/2 lg:w-1/3 rounded-md overflow-hidden cursor-pointer group"
//             >
//               {/* Mobile version: text first, then image */}
//               <div className="block sm:hidden p-4 bg-[#f3f6f4] rounded-md mb-6">
//                 <div className="inline-block px-3 py-1 rounded-full text-md bg-[#23dce1] text-[#112868] mb-2">
//                   {card.tag}
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-widest">
//                   {card.title}
//                 </h3>
//                 <p className="text-sm text-gray-600 tracking-widest mb-4">
//                   {card.description}
//                 </p>
//                 <button className="mb-4 bg-blue-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-800 transition">
//                   Know More
//                 </button>
//                 <img
//                   src={card.image}
//                   alt={card.title}
//                   className="w-full h-48 object-cover rounded-sm"
//                 />
//               </div>

//               {/* Desktop version with hover effect */}
//               <div className="hidden sm:block h-[380px]">
//                 {/* Tag */}
//                 <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-md bg-[#23dce1] text-[#112868]">
//                   {card.tag}
//                 </div>

//                 {/* Image */}
//                 <img
//                   src={card.image}
//                   alt={card.title}
//                   className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0 rounded-md"
//                 />

//                 {/* Title (default) */}
//                 <div className="absolute bottom-4 left-4 right-4 text-white text-lg font-bold transition-opacity duration-500 group-hover:opacity-0 tracking-widest">
//                   {card.title}
//                 </div>

//                 {/* Hover content */}
//                 <div className="absolute inset-0 bg-[#f8f8f8] flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-left rounded-md">
//                   <div>
//                     <h3 className="text-xl font-bold mt-17 mb-4 text-[#112868] ">
//                       {card.title}
//                     </h3>
//                     <p className="text-[14px] text-black mb-6 ">
//                       {card.description}
//                     </p>
//                   </div>
//                   <div>
// <div className="flex justify-end">
//   <button className="bg-blue-900 text-sm text-[#23dce1] px-4 py-2 rounded-lg font-medium 
//                      hover:bg-[#23dce1] hover:text-[#000080] 
//                      transition">
//     Know More
//   </button>
// </div>


//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Navigation Arrows Bottom Right */}
//      <div className="flex justify-end gap-3 mt-6 pr-6 md:pr-10">
//   <button
//     onClick={prevSlide}
//     disabled={startIndex === 0}
//     className="bg-white border-2 border-[#000080] text-[#000080] p-2 rounded-[6px] shadow-sm 
//                hover:bg-[#23dce1] hover:text-[#000080] active:bg-[#23dce1] transition 
//                disabled:opacity-50 disabled:border-gray-300 disabled:text-[#000080]"
//   >
//     <FaArrowLeft size={20} className="font-light" />
//   </button>
//   <button
//     onClick={nextSlide}
//     disabled={startIndex >= cards.length - cardsPerSlide}
//     className="bg-white border-2 border-[#000080] text-[#000080] p-2 rounded-[6px] shadow-sm 
//                hover:bg-[#23dce1] hover:text-[#000080] active:bg-[#23dce1] transition 
//                disabled:opacity-50 disabled:border-gray-300 disabled:text-[#000080]"
//   >
//     <FaArrowRight size={20} className="font-light" />
//   </button>
// </div>

//     </div>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const cards = [
  {
    id: 1,
    tag: "Whitepaper",
    title: "How AI is Driving the Next Era of Mobility",
    description:
      "The mobility industry experts at LTTS engaged in an extensive analysis of these trends, across three domains – Product Development Life Cycle, Software Development Life Cycle and User Experience.",
    image: "/industry.jpg",
  },
  {
    id: 2,
    tag: "Whitepaper",
    title: "EU AI Act is Critical for Innovation",
    description:
      "The integration of Artificial Intelligence is transforming the medical device industry, facilitating smarter diagnosis, physiological monitoring, and treatment decisions",
    image: "/industry.jpg",
  },
  {
    id: 3,
    tag: "Blog",
    title: "Agentic AI Meets ER&D: Engineering the Next Leap in Autonomy",
    description:
      "Agentic AI is redefining autonomy—LTTS fuses AI with engineering to build intelligent, adaptive systems across mobility, manufacturing, and healthcare.",
    image: "/industry.jpg",
  },
  {
    id: 4,
    tag: "Whitepaper Study",
    title: "Everest Group: Unlocking Business Brilliance with GenAI and ...",
    description:
      "The comprehensive playbook to learn how unlock the full potential of gen AI and LLMs to drive your business towards unprecedented success.",
    image: "/industry.jpg",
  },
  {
    id: 5,
    tag: "Whitepaper Study",
    title: "Everest Group: Unlocking Business Brilliance with GenAI and ...",
    description:
      "The comprehensive playbook to learn how unlock the full potential of gen AI and LLMs to drive your business towards unprecedented success.",
    image: "/industry.jpg",
  },
  {
    id: 6,
    tag: "Whitepaper Study",
    title: "Everest Group: Unlocking Business Brilliance with GenAI and ...",
    description:
      "The comprehensive playbook to learn how unlock the full potential of gen AI and LLMs to drive your business towards unprecedented success.",
    image: "/industry.jpg",
  },
];

export default function Insights() {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  // Responsive cards per slide
  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth < 640) {
        setCardsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerSlide(2);
      } else {
        setCardsPerSlide(3);
      }
    };
    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);
    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  const nextSlide = () => {
    if (startIndex < cards.length - cardsPerSlide) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative px-6 md:px-20 py-10">
      {/* Heading */}
      <h1 className="text-left text-3xl font-bold my-10 text-[#000080]">
        Our Latest Insights
      </h1>

      {/* Slider Container */}
      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500"
          style={{
            transform: `translateX(-${(startIndex * 100) / cardsPerSlide}%)`,
          }}
        >
          {cards.slice(startIndex, startIndex + cardsPerSlide).map((card) => (
            <div
              key={card.id}
              className="flex-shrink-0 bg-[#f3f6f4] relative w-full sm:w-1/2 lg:w-1/3 rounded-md overflow-hidden cursor-pointer group"
            >
              {/* Mobile version: text first, then image */}
              <div className="block sm:hidden p-4 bg-[#f3f6f4] rounded-md mb-6">
                <div className="inline-block px-3 py-1 rounded-full text-md bg-[#23dce1] text-[#112868] mb-2">
                  {card.tag}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-widest">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 tracking-widest mb-4">
                  {card.description}
                </p>
                <button className="mb-4 bg-blue-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-800 transition">
                  Know More
                </button>
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-48 object-cover rounded-sm"
                />
              </div>

              {/* Desktop version with hover effect */}
              <div className="hidden sm:block h-[380px]">
                {/* Tag */}
                <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-md bg-[#23dce1] text-[#112868]">
                  {card.tag}
                </div>

                {/* Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0 rounded-md"
                />

                {/* Title (default) */}
                <div className="absolute bottom-4 left-4 right-4 text-white text-lg font-bold transition-opacity duration-500 group-hover:opacity-0 tracking-widest">
                  {card.title}
                </div>

                {/* Hover content */}
                <div className="absolute inset-0 bg-[#f8f8f8] flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-left rounded-md">
                  <div>
                    <h3 className="text-xl font-bold mt-17 mb-4 text-[#112868] ">
                      {card.title}
                    </h3>
                    <p className="text-[14px] text-black mb-6 ">
                      {card.description}
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-end">
                      <button
                        className="bg-blue-900 text-sm text-[#23dce1] px-4 py-2 rounded-lg font-medium 
                     hover:bg-[#23dce1] hover:text-[#000080] 
                     transition"
                      >
                        Know More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows Bottom Right */}
      <div className="flex justify-end gap-3 mt-6">
        <button
          onClick={prevSlide}
          disabled={startIndex === 0}
          className="bg-white font-light border-1 border-[#000080] text-[#000080] p-2 rounded-[3px]  
               hover:bg-[#23dce1] hover:text-[#000080]"
        >
          <FaArrowLeft size={16} className="font-light" />
        </button>
        <button
          onClick={nextSlide}
          disabled={startIndex >= cards.length - cardsPerSlide}
          className="bg-white border-1 border-[#000080] text-[#000080] p-2 rounded-[3px]  
               hover:bg-[#23dce1] hover:text-[#000080] "
        >
          <FaArrowRight size={16} className="font-light" />
        </button>
      </div>
    </div>
  );
}
