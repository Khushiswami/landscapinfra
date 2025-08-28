"use client";
import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

export default function AboutP() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="w-full min-h-[500px] flex flex-col md:flex-row">
      {/* Left Column (Text) */}
      <div
        className="flex-1 flex items-center justify-center p-8 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(33, 71, 95, 0.8), rgba(22, 46, 68, 0.8)), url('/aboutright.jpeg')`,
        }}
      >
        <div className="max-w-lg text-white space-y-4 relative z-10">
          <h1
            className="text-2xl md:text-3xl font-medium leading-snug tracking-wide"
            style={{ fontFamily: "'HelveticaNowLight', Arial, sans" }}
          >
            {" "}
            Landsking Infra partners with global clients to design, build, and
            maintain capital projects.
          </h1>
          <p
            className="text-base md:text-base font-bold leading-relaxed"
            style={{ fontFamily: "'HelveticaNowLight', Arial, sans" }}
          >
            Landsking Infra is one of India s Fastest Growing Company as an
            Industrial Solution Provider, It works on engineering, procurement,
            construction (EPC) and maintenance companies
          </p>
        </div>
      </div>

      {/* Right Column (Video) */}
      <div
        className="flex-1 relative flex items-center justify-center p-6 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(33, 71, 95, 0.8), rgba(22, 46, 68, 0.8)), url('/aboutleft.jpeg')`,
        }}
      >
        <div className="relative w-full max-w-xl aspect-video z-10 flex flex-col items-center justify-center">
          <video
            ref={videoRef}
            className="w-full h-full rounded-lg shadow-lg"
            src="/video.mp4"
            muted
            loop
            playsInline
            poster="/about.png"
            onPlay={() => setIsPlaying(true)}
            controls={isPlaying}
          ></video>

          {!isPlaying && (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer px-4"
              onClick={handleVideoClick}
            >
              <div className="flex items-center justify-center w-24 h-24 md:w-32 md:h-32 border-4 border-[rgb(0_0_0_/_44%)] rounded-full mb-4 hover:border-[rgb(0_0_0_/_60%)] transition">
                <FaPlay className="text-4xl md:text-6xl text-[rgb(0_0_0_/_44%)]" />
              </div>

              <h2 className="text-xl md:text-4xl font-bold leading-snug tracking-wide text-white text-center">
                Tradition, Innovation, <br /> Performance, Worldwide
              </h2>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
