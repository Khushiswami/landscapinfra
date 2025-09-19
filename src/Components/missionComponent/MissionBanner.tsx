import Image from "next/image";
import { FaBullseye } from "react-icons/fa";
import { motion } from "framer-motion";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function MissionBanner() {
  return (
 <section className="relative w-full">
      {/* Background Image with Overlay */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/company/about.webp"
            alt="Our Mission Background"
            fill
            className="object-cover z-0"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Hero Content */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="absolute inset-0 z-20 flex flex-col justify-center items-start text-left text-white px-8 md:px-20"
        >
          <h2 className="text-3xl mt-10 md:text-5xl font-bold drop-shadow-lg md:mt-0">
            Our Mission
          </h2>
          <p className="mt-3 max-w-3xl text-lg leading-relaxed text-gray-200">
            Our goal at Dassault Systèmes is to create a loop between the real
            world and the virtual world, to improve understanding and outcomes
            to benefit humankind. We are driven by a set of core values that
            define who we are and how we run our business.
          </p>
        </motion.div>
      </div>

      {/* Overlay Card Section */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        className="relative z-30 -mt-20 max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {/* Left Card */}
        <div className="bg-[#F4F6F8] p-6 rounded-xl flex flex-col items-center text-center hover:shadow-lg transition">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-900 text-white text-4xl mb-4 shadow-md">
            <FaBullseye />
          </div>
          <p className="text-gray-800 font-medium leading-relaxed">
            Our mission is to make dreams possible through collaborative
            innovation and a mindset of constantly challenging the status quo.
          </p>
        </div>

        {/* Right Content */}
        <div className="col-span-2 bg-[#F4F6F8] p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-4 text-[#000080]">
            We Are Purpose Driven
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Since 2012, our companys purpose is to provide business and people
            with virtual universes to imagine{" "}
            <a href="#" className="text-blue-600 font-medium hover:underline">
              sustainable innovations
            </a>{" "}
            capable of harmonizing product, nature and life. Since our inception,
            and at every stage in{" "}
            <a href="#" className="text-blue-600 font-medium hover:underline">
              our history
            </a>
            weve been committed to contributing positively to society through
            our{" "}
            <a href="#" className="text-blue-600 font-medium hover:underline">
              sustainable business practices and solutions
            </a>
            .
          </p>
          <p className="text-gray-700 leading-relaxed">
            We have always been a global player when it comes to knowledge and
            know-how for the industries and clients we serve; this is one of the
            reasons why so many market leading organizations have joined us for
            the ride. Our purpose is driven by{" "}
            <strong>our people</strong> and the{" "}
            <strong className="font-bold">passion</strong> they demonstrate. It
            gives meaning to our daily work. It drives a shared mindset and
            brings contagious energy to the company. It helps us set even higher
            standards across multiple markets - to the benefit of everyone.
          </p>
        </div>
      </motion.div>

      <section className="w-full  mx-auto px-4 py-16 md:mx-20">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#000080]">
            Our Horizon for 2040
          </h2>
          <p className="font-semibold">
            Inspired by nature, guided by science, driven by technology, fueled
            by a passion for learning.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our vision for 2040 is grounded in a generative economy: a model
            inspired by the generative processes of the organic world, driving
            new perspectives behind sustainable approaches for producing,
            treating, living and learning.
          </p>

          <p className="text-gray-700 leading-relaxed">
            <span className="font-bold">3D UNIV+RSES</span> is the supporting
            framework to this transformation secure, industry-specific spaces
            for experimentation, learning and innovation, where organizations
            build on their knowledge and expertise while also protecting their
            intellectual property.
          </p>

          <p className="text-gray-700 leading-relaxed">
            2040 is an era where modeling, simulation, data science and
            AI-generated content virtualizes entire product lifecycles, where
            infinite loops seamlessly link the virtual and physical worlds,
            fueled by continuous data, to benefit people, businesses and the
            planet.
          </p>
        </div>

        {/* Right Video/Image */}
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-md aspect-video rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/about.png" // replace with your image
              alt="Ambition 2040"
              fill
              className="object-cover"
            />
            {/* Play Button */}
            <button className="absolute inset-0 flex items-center justify-center">
              <span className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                ▶
              </span>
            </button>
          </div>
          <p className="mt-3 text-sm text-center text-gray-600">
            Ambition 2040: Shaping the generative economy with 3D UNIV+RSES
          </p>
        </div>
      </div>

      {/* Bottom Section */}
     
    </section>

 <section className="w-full bg-white pb-16">
      {/* Top Banner */}
       <div className="mt-20 text-center  mx-auto space-y-4 pb-12 md:mx-20">
        <h3 className="text-xl md:text-3xl font-bold text-[#000080]">
          Sustainable Innovation is a Core Practice
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Dassault Systèmes is built on a culture of continuous innovation. We
          believe that <span className="text-blue-600">science</span> and
          technology contribute to sustainable social progress, and have
          positioned our business model to support all those who imagine and
          innovate  from mass retail to high-tech to city planners.
        </p>
      </div>
      
      <div className="relative max-w-6xl mx-auto overflow-hidden rounded-xl">
        <div className="relative h-[300px] md:h-[350px] w-full">
          <Image
            src="/company/about.webp" 
            alt="Culture of Innovation"
            fill
            className="object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              A Culture of Innovation
            </h2>
            <p className="text-white max-w-2xl mb-6">
              As the global leader in sustainable innovation, we’re led by an
              inspiring group of executives who are driven by our long-term
              vision of addressing the globe’s major challenges and helping our
              customers transform how they operate.
            </p>
            <a
              href="#"
              className="bg-white text-[#000080] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
            >
              Innovation at Dassault Systèmes
            </a>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {/* Card 1 */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-bold mb-3">Open Innovation Laboratory</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            The <strong>3DEXPERIENCE Lab</strong> shapes a new framework of open
            innovation, merging collective intelligence with collaboration to
            foster entrepreneurship as well as to strengthen society’s future of
            creation.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[#000080] font-medium group"
          >
            <span className="w-7 h-7 flex items-center justify-center rounded-full border border-[#000080] group-hover:bg-blue-600 transition">
              <MdKeyboardArrowRight className="text-lg group-hover:text-white" />
            </span>
            Discover the 3DEXPERIENCE Lab
          </a>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-bold mb-3">Continuous Learning</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Through <strong>3DEXPERIENCE Edu</strong>, we’ve established a
            culture of continuous learning. We encourage our employees to take
            advantage of its wide range of learning materials to aid their
            interests and further their career development.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-blue-600 font-medium group"
          >
            <span className="w-7 h-7 flex items-center justify-center rounded-full border border-[#000080] group-hover:bg-blue-600 transition">
              <MdKeyboardArrowRight className="text-lg group-hover:text-white" />
            </span>
            Discover 3DEXPERIENCE Edu
          </a>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-bold mb-3">Innovation through Design</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our <strong>DESIGNStudio</strong> makes innovation happen by making
            available the expertise of 3D innovators who have helped companies,
            small and large, bring their ideas to life through Experience
            Thinking.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[#000080] font-medium group"
          >
            <span className="w-7 h-7 flex items-center justify-center rounded-full border border-[#000080] group-hover:bg-blue-600 transition">
              <MdKeyboardArrowRight className="text-lg group-hover:text-white" />
            </span>
            Discover our DESIGNStudio
          </a>
        </div>
      </div>
    </section>
    </section>
  );
}
