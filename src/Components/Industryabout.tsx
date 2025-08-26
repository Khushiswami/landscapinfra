"use client";

export default function IndustryaboutUs() {
  const stats = [
    { number: "4,000+", label: "employees" },
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
          <h2 className="text-4xl md:text-5xl font-bold text-[#000080] mb-10">
            About Our Journey{" "}
          </h2>

          <div className="space-y-8">
            {stats.map((item, idx) => (
              <div key={idx} className="flex items-baseline space-x-9">
                <p className="text-3xl  md:text-5xl font-light  text-[#1591EA] w-28">
                  {item.number}
                </p>
                <p className="text-[#000080] text-md font-bold ">
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
