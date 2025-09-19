"use client";

import { useRouter } from "next/navigation";

const STORIES = [
  {
    id: 1,
    title: "Plug-in safety, speed and style. That’s better",
    img: "/industry.jpg",
    url: "/success/plug-in-safety",
  },
  {
    id: 2,
    title: "Connected Vehicle experience with over the air updates. That’s better",
    img: "/industry.jpg",
    url: "/success/connected-vehicle",
  },
  {
    id: 3,
    title: "Fast turnaround and low downtime. That’s engineering.",
    img: "/industry.jpg",
    url: "/success/fast-turnaround",
  },
  {
    id: 4,
    title: "A cabin designed for all-nighters. That’s better.",
    img: "/industry.jpg",
    url: "/success/cabin-design",
  },
];

export default function Rndstories() {
  const router = useRouter();

  return (
    <section className=" mx-auto px-6 md:px-12 py-12 md:mx-12">
      <h2 className="text-2xl md:text-3xl font-bold text-[#000080] text-center mb-10">
        Success Stories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {STORIES.map((story) => (
          <div
            key={story.id}
            className="flex flex-col bg-white hover:shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={story.img}
              alt={story.title}
              className="w-full h-40 md:h-48 object-cover"
            />
            <div className="p-4 flex flex-col justify-between flex-grow">
              <h3 className="text-[#000000] font-medium text-md md:text-lg mb-3">
                {story.title}
              </h3>
              <button
                onClick={() => router.push(story.url)}
                className="flex items-center text-sm md:text-base font-medium text-[#000] hover:text-[#ff0000] mt-auto"
              >
                Explore success story
                <span className="ml-1 inline-block transform transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
