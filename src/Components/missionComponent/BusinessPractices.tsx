// app/components/BusinessPractices.tsx
import Image from "next/image";

export default function BusinessPractices() {
  const policies = [
    {
      id: 1,
      image: "/company/about.webp",
      title: "Ethics and Compliance",
      desc: "Pursuing ethical and sustainable growth is a fundamental value and one of the pillars of our corporate social responsibility policy.",
      btn: "Read about ethics",
      link: "#",
    },
    {
      id: 2,
      image: "/company/about.webp",
      title: "Privacy Policy",
      desc: "Our privacy policy describes the practices of our company and our affiliates related to personal data collected, used stored and processed.",
      btn: "Read about privacy",
      link: "#",
    },
    {
      id: 3,
      image: "/company/about.webp",
      title: "Anti-Piracy",
      desc: "We proactively protect our assets through anti-piracy and compliance programs to deter incidents of piracy and ensure users are in compliance.",
      btn: "Read about anti-piracy",
      link: "#",
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="md:mx-20 mx-auto px-6">
        {/* Parent Grid */}
        <div className="grid gap-10 md:grid-cols-4 items-start">
          {/* Left Side Text */}
          <div className="md:col-span-1 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-4 text-[#000080]">
              Our Principles Guide Our <br /> Business Practices
            </h2>
            <p className="text-gray-600 mb-6">
              We have policies in place to ensure that our business practices and values are aligned.
            </p>
            <a
              href="#"
              className="inline-block border border-[#000080] text-[#000080] px-6 py-2 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition"
            >
              Read our policies
            </a>
          </div>

          {/* Right Side Cards */}
          <div className="md:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {policies.map((policy) => (
              <div
                key={policy.id}
                className="bg-gray-50 rounded-lg shadow-sm overflow-hidden flex flex-col hover:shadow-lg transition"
              >
                {/* Card Image */}
                <div className="relative w-full h-40">
                  <Image
                    src={policy.image}
                    alt={policy.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {policy.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-1">{policy.desc}</p>

                  <a
                    href={policy.link}
                    className="self-start border border-[#000080] text-[#000080] px-4 py-2 rounded-full text-sm font-semibold hover:bg-black hover:text-white transition"
                  >
                    {policy.btn}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
