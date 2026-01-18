import { useEffect, useRef } from 'react';

interface BackgroundVideoProps {
  src: string;
  opacity?: number;
}

const BackgroundVideo = ({ src, opacity = 0.15 }: BackgroundVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 min-w-full min-h-full object-cover z-0"
      style={{ opacity }}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;