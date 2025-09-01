"use client";

const SOLUTIONS = [
  { id: 1, title: "Pre Engineered Buildings", img: "/solu.png" },
  { id: 2, title: "EPC Solutions", img: "/solu.png" },
  { id: 3, title: "Structural Engineering", img: "/solu.png" },
  { id: 4, title: "Renewable Energy", img: "/solu.png" },
  { id: 5, title: "Construction Management", img: "/solu.png" },
  { id: 6, title: "Industrial Design", img: "/solu.png" },
  { id: 7, title: "Infrastructure Planning", img:"/solu.png" },
  { id: 8, title: "Other Solutions", img: "/solu.png" },
];

export default function OurSolutions() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#000080] text-center mb-10">
        Our Solutions
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {SOLUTIONS.map((sol) => (
          <div
            key={sol.id}
            className="flex flex-col items-center overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={sol.img}
              alt={sol.title}
              className="w-full h-32 md:h-40 object-cover"
            />
            <h3 className="mt-3 text-center text-[#000080] font-light text-sm md:text-base">
              {sol.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
