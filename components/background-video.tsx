"use client";

export function BackgroundVideo() {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none bg-[#fdfbf7]">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        className="h-full w-full object-cover"
      >
        <source src="/videos/bg-video-new.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[#fdfbf7]/30 backdrop-blur-[4px] mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#fdfbf7]/80 via-transparent to-[#fdfbf7]/90" />
    </div>
  );
}
