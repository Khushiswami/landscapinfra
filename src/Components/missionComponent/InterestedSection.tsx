// app/components/InterestedSection.tsx
export default function InterestedSection() {
  const items = [
    {
      id: 1,
      title: "About our company",
      desc: "We’re in the business of innovation. Through our unique solutions, we bring virtual twin experiences to everyone – including you!",
      btn: "What is Dassault Systèmes?",
      link: "#",
    },
    {
      id: 2,
      title: "Frequently asked questions",
      desc: "Learn answers to commonly asked questions about Dassault Systèmes like what we do and who our customers are.",
      btn: "View FAQs",
      link: "#",
    },
    {
      id: 3,
      title: "Corporate responsibility",
      desc: "We believe that by providing virtual experiences to businesses and organizations we can empower humans to create solutions that create a new era of sustainable innovation.",
      btn: "Go to corporate responsibility",
      link: "#",
    },
    {
      id: 4,
      title: "Our vision for sustainable innovation",
      desc: "Discover how Virtual Twin technologies can help you rethink your products, processes and even business models to realize radically new sustainable innovations.",
      btn: "Go to sustainability",
      link: "#",
    },
  ];

  return (
    <section className="w-full bg-white md:py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10">
          You Might Also Be Interested In…
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 rounded-lg shadow-sm p-6 flex flex-col hover:shadow-lg transition"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6 flex-1">{item.desc}</p>

              <a
                href={item.link}
                className="inline-block border border-blue-600 text-blue-600 px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 hover:text-white transition"
              >
                {item.btn}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
