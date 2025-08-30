"use client";
import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
// import {lato} from "../app/layout"
import { lato } from "../lib/fonts";

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
      className={`${lato.className} text-2xl md:text-4xl leading-snug tracking-wide`}
    >
      Landsking Infra partners with global clients to design, build, and
      maintain capital projects.
    </h1>
          <p
            className={`${lato.className} text-base md:text-lg font-medium leading-relaxed`}
           
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
      className="w-full h-full"
      src="/video.mp4"
      muted
      loop
      playsInline
      poster="/about2.jpg"
      onPlay={() => setIsPlaying(true)}
      controls={isPlaying}
    ></video>

    {!isPlaying && (
      <div
        className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer px-4 text-center"
        onClick={handleVideoClick}
      >
        {/* Play Button */}
        <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 border-7 border-[rgb(0_0_0_/_58%)] rounded-full mb-6 hover:border-[rgb(0_0_0_/_60%)] transition">
          <FaPlay className="text-3xl md:text-4xl text-[rgb(0_0_0_/_44%)]" />
        </div>

        {/* Text Below Play Button */}
        {/* <h2 className="text-xl md:text-4xl font-bold leading-snug tracking-wide text-white">
          Tradition, Innovation, <br /> Performance, Worldwide
        </h2> */}
      </div>
    )}
  </div>
</div>

    </section>
  );
}
