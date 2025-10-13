// components/AlternatingSections.tsx
import Image from "next/image";
import { useState } from "react";

interface Section {
  id: number;
  title: string;
  description: string;
  images: string[];
}

const sections: Section[] = [
  {
    id: 1,
    title: "Industrial, Warehouse & PEB Projects",
    description:
      "LandsKing Infra Pvt. Ltd. is a leading industrial construction company in Chennai, specializing in delivering top-notch industrial and warehouse projects. We provide end-to-end infrastructure solutions under one roof, incorporating advanced automation and innovative construction models. With over two decades of experience, our team ensures timely project delivery with world-class standards, meeting global client expectations. Our reputation is backed by strong client testimonials and successful project completions across India.",
    images: ["/industry.jpg", "/industry.jpg", "/industry.jpg"],
  },
  {
    id: 2,
    title: "Commercial, Pharma & Hotel Projects",
    description:
      "LandsKing Infra Pvt. Ltd. has extensive experience in executing commercial projects, including office complexes, restaurants, pharma facilities, and hotels. Our professional team ensures high-quality construction, end-to-end infrastructure planning, and effective project management. Over the past 20 years, we have consistently delivered projects that meet global standards, providing clients with reliable, timely, and efficient solutions for all commercial infrastructure needs in Chennai.",
    images: [
      "/industry.jpg",
      "/industry.jpg",
      "/industry.jpg",
      "/industry.jpg",
      "/industry.jpg",
    ],
  },
  {
    id: 3,
    title: "Institutional & Educational Projects",
    description:
      "At LandsKing Infra Pvt. Ltd., we specialize in building institutional projects, including educational institutions, community centers, and marriage halls. Our team of experts delivers top-grade facilities while fostering innovation in construction technology. Beyond building structures, we also offer career opportunities in construction management and business development, empowering professionals to contribute to societal growth while shaping inspiring educational and institutional spaces.",
    images: ["/industry.jpg", "/industry.jpg", "/industry.jpg"],
  },
  {
    id: 4,
    title: "Residential, Resorts & Villas",
    description:
      "LandsKing Infra Pvt. Ltd. excels in designing and constructing luxury residences, resorts, and villas. With in-house licensed architects, interior designers, structural engineers, and MEP contractors, we provide a seamless, end-to-end construction experience. Our focus on safety, quality, and world-class architectural design ensures that every residential project reflects excellence, comfort, and enduring value for our clients.",
    images: ["/industry.jpg", "/industry.jpg", "/industry.jpg"],
  },
  {
    id: 5,
    title: "MEP (Mechanical, Electrical & Plumbing) Projects",
    description:
      "LandsKing Infra Pvt. Ltd. also offers expert MEP services, including design, planning, and installation of mechanical, electrical, and plumbing networks. Our in-house MEP engineers deliver high-quality, efficient solutions that transform client ideas into sustainable, fully functional infrastructure systems. We focus on precision, reliability, and adherence to world-class standards, ensuring seamless integration of MEP systems in all types of construction projects.",
    images: ["/industry.jpg", "/about.png", "/industry.jpg"],
  },
];

export default function Industryplatformtab() {
  const [currentSlides, setCurrentSlides] = useState<number[]>(
    sections.map(() => 0)
  );

  const handleNext = (index: number) => {
    setCurrentSlides((prev) =>
      prev.map((slide, i) =>
        i === index ? (slide + 1) % sections[i].images.length : slide
      )
    );
  };

  const handlePrev = (index: number) => {
    setCurrentSlides((prev) =>
      prev.map((slide, i) =>
        i === index
          ? (slide - 1 + sections[i].images.length) % sections[i].images.length
          : slide
      )
    );
  };

  return (
    <div className="flex flex-col  gap-7 md:gap-16  mx-5 md:mx-13">
      {sections.map((section, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <div
            key={section.id}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              isEven ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Slider */}
            <div className="relative w-full md:w-1/2">
              <Image
                src={section.images[currentSlides[idx]]}
                alt={section.title}
                width={600}
                height={400}
                className=" shadow-lg"
              />
              <button
                onClick={() => handlePrev(idx)}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
              >
                &#8592;
              </button>
              <button
                onClick={() => handleNext(idx)}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
              >
                &#8594;
              </button>
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2">
              <h2 className="text-xl md:text-3xl font-bold mb-4 text-[#000080]">
                {section.title}
              </h2>
              <p className="text-black  text-base md:text-medium ">
                {section.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
