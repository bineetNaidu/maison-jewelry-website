// components/hero/BackgroundVideo.tsx
"use client";

export default function BackgroundVideo() {
  // We use a playlist parameter equal to the video ID to force looping on YouTube iframes
  // Replace 'YOUTUBE_VIDEO_ID' with your actual cinematic b-roll video ID later.
  // Using a dark, abstract placeholder ID here for visual testing.
  const videoId = "rZ5pB4E6B3s"; 

  return (
    <div className="absolute inset-0 z-0 h-full w-full overflow-hidden bg-black">
      {/* Dark overlay to ensure text readability and brutalist mood */}
      <div className="absolute inset-0 z-10 bg-black/40 mix-blend-multiply" />
      
      <iframe
        className="pointer-events-none absolute left-1/2 top-1/2 min-h-[120vw] min-w-[120vw] -translate-x-1/2 -translate-y-1/2 opacity-60 md:min-h-[100vw] md:min-w-screen"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playsinline=1&playlist=${videoId}&vq=hd1080`}
        title="Background Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}