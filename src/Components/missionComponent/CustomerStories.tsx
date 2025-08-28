// app/components/CustomerStories.tsx
import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";

export default function CustomerStories() {
  const stories = [
    {
      id: 1,
      image: "/company/about.webp", 
      tag: "CUSTOMER STORY",
      title: "Francine Acher: Université de Paris",
      desc: "Helping to revolutionize treatments for neurological diseases.",
      link: "#",
    },
    {
      id: 2,
      image: "/company/about.webp",
      tag: "CUSTOMER STORY",
      title: "Mirco Maschio: Maschio Gaspardo",
      desc: "Improving the lives of his employees & of the local community and preserving the environment.",
      link: "#",
    },
    {
      id: 3,
      image: "/company/about.webp",
      tag: "CUSTOMER STORY",
      title: "Martin Edlund: Minesto",
      desc: "Harnessing the constant and powerful energy source of Nature.",
      link: "#",
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      {/* Heading */}
      <div className="max-w-6xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          We Help Our Customers Create a Positive Impact
        </h2>
        <p className="text-gray-600 mb-8">
          We help people to make a difference! <br />
          Discover inspiring stories of our customers, in their own words,
          who are creating a positive impact in their communities and the
          world at large.
        </p>
        <a
          href="#"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Explore more stories
        </a>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        {stories.map((story) => (
          <div
            key={story.id}
            className="relative rounded-lg overflow-hidden group shadow-md"
          >
            {/* Image */}
            <div className="relative w-full h-[360px]">
              <Image
                src={story.image}
                alt={story.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-200 mb-2">
                {story.tag}
              </span>
              <h3 className="text-white text-lg md:text-xl font-bold leading-snug mb-2">
                {story.title}
              </h3>
              <p className="text-gray-200 text-sm mb-4">{story.desc}</p>

              {/* Watch video */}
              <a
                href={story.link}
                className="flex items-center gap-2 text-white font-semibold hover:underline"
              >
                <FaPlayCircle className="text-lg" />
                Watch the video
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
