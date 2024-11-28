import React from 'react';
import { ChevronDown, Play, Pause } from 'lucide-react';

export const VideoHeroCalendar: React.FC = () => {
  const [isPlaying, setIsPlaying] = React.useState(true);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const scrollToContent = () => {
    const contentSection = document.getElementById('calendar-content');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-[85vh] overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://www.hofmann.es/content/calendar/banner-video/banner-video-ES.mp4"
          type="video/mp4"
        />
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
      
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
        <span className="text-rose-400 text-lg font-medium mb-4">Calendarios personalizados</span>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 max-w-4xl leading-tight">
          Tus momentos más especiales mes a mes
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-200">
          Crea un calendario único con tus fotos favoritas y diseños exclusivos
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={scrollToContent}
            className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-300"
          >
            Descubre nuestros calendarios
          </button>
          <button
            onClick={scrollToContent}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-300"
          >
            Ver precios
          </button>
        </div>
      </div>

      <button
        onClick={togglePlay}
        className="absolute bottom-8 right-8 bg-black/30 hover:bg-black/40 backdrop-blur-sm text-white p-3 rounded-full transition-colors"
        aria-label={isPlaying ? 'Pausar video' : 'Reproducir video'}
      >
        {isPlaying ? (
          <Pause className="w-6 h-6" />
        ) : (
          <Play className="w-6 h-6" />
        )}
      </button>

      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll to content"
      >
        <ChevronDown className="w-8 h-8" />
      </button>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};