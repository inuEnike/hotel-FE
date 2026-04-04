"use client";

import { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

const VideoHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(false);
  const handleShowVideo = () => {
    setShowVideo(!showVideo);
  };
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    togglePlay;
  }, []);

  const togglePlay = (): void => {
    if (videoRef?.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };
  return (
    // Change h-screen to h-[400px] or h-[60vh]
    <section>
      {showVideo ? (
        <div className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
            muted
            loop
            playsInline
          >
            <source src="/hybrid.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/40 z-0"></div>

          <div className="relative z-10 text-center text-white px-4">
            <div
              className={`bg-white/75 rounded-full cursor-pointer w-28.75 h-28.75 flex justify-center items-center`}
              onClick={togglePlay}
            >
              <div className="bg-white/85 rounded-full cursor-pointer w-22.75 h-22.75 flex justify-center items-center">
                <div className="bg-white rounded-full cursor-pointer w-15.75 h-15.75 flex justify-center items-center">
                  <button className="cursor-pointer">
                    {isPlaying ? (
                      <FaPause size={30} className="text-main" />
                    ) : (
                      <FaPlay size={30} className="text-main" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center hero3">
          <div
            className={`bg-white/75 rounded-full cursor-pointer w-28.75 h-28.75 flex justify-center items-center`}
            onClick={handleShowVideo}
          >
            <div className="bg-white/85 rounded-full cursor-pointer w-22.75 h-22.75 flex justify-center items-center">
              <div className="bg-white rounded-full cursor-pointer w-15.75 h-15.75 flex justify-center items-center">
                <button className="cursor-pointer">
                  {isPlaying ? (
                    <FaPause size={30} className="text-main" />
                  ) : (
                    <FaPlay size={30} className="text-main" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoHero;
