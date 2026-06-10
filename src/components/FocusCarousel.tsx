import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface FocusCarouselProps {
  images: { src: string; label: string }[];
}

export default function FocusCarousel({ images }: FocusCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background ambient light based on active image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0 bg-cover bg-center blur-3xl saturate-200"
          style={{ backgroundImage: `url(${images[currentIndex].src})` }}
        />
      </AnimatePresence>

      <div className="relative z-10 w-full max-w-[90vw] md:max-w-7xl h-[80%] flex items-center justify-center perspective-1000">
        <div className="absolute inset-0 flex items-center justify-center">
          {images.map((img, i) => {
            const offset = (i - currentIndex + images.length) % images.length;
            const absoluteOffset = Math.abs(offset > images.length / 2 ? offset - images.length : offset);
            const isLeft = offset > images.length / 2 ? true : false;
            
            let translateX = 0;
            let translateZ = 0;
            let rotateY = 0;
            let scale = 1;
            let opacity = 1;
            let zIndex = images.length - absoluteOffset;

            if (absoluteOffset === 0) {
              // Active
              translateX = 0;
              translateZ = 100;
              rotateY = 0;
              scale = 1;
              opacity = 1;
              zIndex = 50;
            } else if (absoluteOffset === 1) {
              // Immediate siblings
              translateX = isLeft ? -40 : 40;
              translateZ = -100;
              rotateY = isLeft ? 15 : -15;
              scale = 0.75;
              opacity = 0.5;
            } else if (absoluteOffset === 2) {
              translateX = isLeft ? -70 : 70;
              translateZ = -200;
              rotateY = isLeft ? 25 : -25;
              scale = 0.5;
              opacity = 0.2;
            } else {
              translateX = isLeft ? -90 : 90;
              translateZ = -300;
              rotateY = isLeft ? 35 : -35;
              scale = 0.3;
              opacity = 0;
            }

            // Mobile specific logic
            const isMobile = window.innerWidth < 768;
            if (isMobile) {
              if (absoluteOffset === 1) {
                translateX = isLeft ? -80 : 80;
                scale = 0.8;
                opacity = 0.4;
              } else if (absoluteOffset > 1) {
                opacity = 0;
              }
            }

            return (
              <motion.div
                key={i}
                initial={false}
                animate={{
                  x: `${translateX}%`,
                  z: translateZ,
                  rotateY,
                  scale,
                  opacity,
                  zIndex,
                  filter: absoluteOffset === 0 ? 'blur(0px) grayscale(0%)' : 'blur(4px) grayscale(50%)',
                }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 20,
                  mass: 1,
                }}
                className="absolute w-[80vw] md:w-[600px] h-[50vh] md:h-[600px] rounded-lg overflow-hidden shadow-2xl cursor-pointer"
                onClick={() => {
                  if (absoluteOffset !== 0) {
                    setDirection(isLeft ? -1 : 1);
                    setCurrentIndex(i);
                  }
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-32 z-40 flex items-center justify-start pl-4 md:pl-12 bg-gradient-to-r from-black/50 to-transparent opacity-70 md:opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
        <button 
          onClick={prev}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white backdrop-blur hover:bg-white hover:text-black transition-colors pointer-events-auto"
        >
          <ArrowLeft size={20} />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 w-24 md:w-32 z-40 flex items-center justify-end pr-4 md:pr-12 bg-gradient-to-l from-black/50 to-transparent opacity-70 md:opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
        <button 
          onClick={next}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white backdrop-blur hover:bg-white hover:text-black transition-colors pointer-events-auto"
        >
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 z-40 flex items-center justify-center space-x-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > currentIndex ? 1 : -1);
              setCurrentIndex(i);
            }}
            className={`transition-all duration-300 rounded-full bg-white ${i === currentIndex ? 'w-8 h-1 opacity-100' : 'w-1 h-1 opacity-40 hover:opacity-100'}`}
          />
        ))}
      </div>
    </div>
  );
}
