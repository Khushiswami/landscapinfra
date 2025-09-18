"use client";

export default function IndustryaboutUs() {
  const stats = [
    { number: "55+", label: "Global Clients" },
    { number: "250+", label: "active projects" },
    { number: "17", label: "states with active projects" },
    { number: "15+", label: "years in business" },
    { number: "$7.4", label: "billion in projected annual revenue" },
  ];

  return (
    <section className="relative bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1460] mb-12">
            A little about us
          </h2>

          <div className="space-y-8">
            {stats.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-6 border-b border-gray-300 pb-2">
                <p className="text-4xl md:text-5xl font-light text-[#1591EA] w-28">
                  {item.number}
                </p>
                <p className="text-[#0B1460] text-lg md:text-xl font-semibold">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src="/industry.jpg"
            alt="About Us"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
