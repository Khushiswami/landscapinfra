"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Option {
  label: string;
  image: string;
  link: string;
}

const options: Option[] = [
  {
    label: "Industrial",
    image:
      "https://images.unsplash.com/photo-1581091215367-59ab6d2a9a15?auto=format&fit=crop&w=1600&q=80",
    link: "/advisory-services",
  },
  {
    label: "Warehouse",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    link: "/alternative-project-delivery",
  },
  {
    label: "Commercial ",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    link: "/architecture",
  },
  {
    label: "Institutional",
    image: "/industry.jpg",
    link: "/aviation",
  },
  {
    label: "Hotels ",
    image: "/industry.jpg",
    link: "/aviation",
  },
  {
    label: "Pharma Projects",
    image: "/industry.jpg",
    link: "/aviation",
  },
  {
    label: "Hospital",
    image: "/industry.jpg",
    link: "/aviation",
  },
  {
    label: "Marriage Halls",
    image: "/industry.jpg",
    link: "/aviation",
  },
  {
    label: "Resorts & Solar Project",
    image: "/industry.jpg",
    link: "/aviation",
  },
];

export default function Industrybanner() {
  const [selected, setSelected] = useState<Option>(options[0]);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  // Optional auto background rotation
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (options.indexOf(selected) + 1) % options.length;
      setSelected(options[nextIndex]);
    }, 6000);
    return () => clearInterval(interval);
  }, [selected]);

  const handleSelect = (opt: Option) => {
    setSelected(opt);
    setShowDropdown(false);
    router.push(opt.link);
  };

  return (
    <section className="relative h-[100vh] w-full overflow-hidden flex items-center text-white">
      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selected.image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${selected.image})` }}
        />
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Text content */}
      <div className="relative z-10 px-6 md:px-16 lg:px-28 max-w-6xl text-left">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-light leading-tight mb-8"
        >
          End-to-End Industrial Installation &
          <span className="font-semibold">Construction Solutions</span>
        </motion.h1>

        {/* Dropdown */}
        <div className="inline-block text-left relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="text-lg md:text-xl mb-2 font-light flex items-center gap-2 cursor-pointer focus:outline-none"
          >
            I’m interested in{" "}
            <span className="font-semibold">{selected.label}</span>
            <motion.span
              initial={false}
              animate={{ rotate: showDropdown ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="ml-1"
            >
              {showDropdown ? (
                <ChevronUp size={22} className="text-white" />
              ) : (
                <ChevronDown size={22} className="text-white" />
              )}
            </motion.span>
          </button>

          <AnimatePresence>
            {showDropdown && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="absolute left-0 mt-2 w-64 bg-white text-black rounded-lg shadow-lg overflow-y-auto max-h-60"
              >
                {options.map((opt) => (
                  <li
                    key={opt.label}
                    onClick={() => handleSelect(opt)}
                    className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
                  >
                    {opt.label}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
