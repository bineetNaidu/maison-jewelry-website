// components/hero/BackgroundVideo.tsx
"use client";

import { useRef, useState, useEffect } from "react";

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true); // Optimistically assume autoplay works

  const toggleAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      
      // If the user unmutes, ensure the video is actually playing
      if (!isPlaying) {
        videoRef.current.play();
      }
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  return (
    <div className="absolute inset-0 z-0 h-full w-full overflow-hidden bg-black">
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 z-10 bg-black/40 mix-blend-multiply pointer-events-none" />
      
      <video
        ref={videoRef}
        autoPlay
        loop
        playsInline
        // Sync React state with actual browser media events
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        src="/assets/hero-cinematic.mp4"
      />

      {/* Brutalist Control Panel */}
      {/* LEFT SIDE: Playback Control */}
      <div className="absolute bottom-6 left-4 z-50 md:bottom-12 md:left-12 env-safe-padding">
        <button
          onClick={togglePlay}
          className="group relative flex h-10 w-24 items-center justify-center border border-white/20 bg-black/20 backdrop-blur-md transition-all duration-500 hover:border-white hover:bg-white md:h-12 md:w-28 cursor-none"
        >
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-white transition-colors group-hover:text-black md:text-[10px]">
            {isPlaying ? "Pause" : "Play"}
          </span>
        </button>
      </div>

      {/* RIGHT SIDE: Audio Control */}
      <div className="absolute bottom-6 right-4 z-50 md:bottom-12 md:right-12 env-safe-padding">
        <button
          onClick={toggleAudio}
          className="group relative flex h-10 w-32 items-center justify-center gap-3 border border-white/20 bg-black/20 backdrop-blur-md transition-all duration-500 hover:border-white hover:bg-white md:h-12 md:w-36 cursor-none"
        >
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-white transition-colors group-hover:text-black md:text-[10px]">
            {isMuted ? "Sound: Off" : "Sound: On"}
          </span>
          <div className="relative flex h-1.5 w-1.5 items-center justify-center">
            {isMuted ? (
              <span className="absolute h-px w-full bg-white/50 transition-colors group-hover:bg-black/50" />
            ) : (
              <>
                <span className="absolute h-full w-full animate-ping rounded-full bg-gold opacity-75 group-hover:bg-black" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-gold group-hover:bg-black" />
              </>
            )}
          </div>
        </button>
      </div>
    </div>
  );
}