import { motion, PanInfo } from 'motion/react';
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';

function ImageWithFallback({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`${className} bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center`}>
        <div className="text-white/40 text-sm">Image not available</div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
}

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);



  const navigateCarousel = (direction: number) => {
    if (direction > 0) {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    }
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 30;
    if (Math.abs(info.offset.x) > threshold) {
      if (info.offset.x > 0) {
        navigateCarousel(-1);
      } else {
        navigateCarousel(1);
      }
    }
  };

  // Calculate position for circular arrangement
  const getCardStyle = (index: number) => {
    const totalCards = projects.length;
    const position = (index - currentIndex + totalCards) % totalCards;

    // Determine if card should be visible (show 5 cards: current, 2 next, 2 previous)
    const isVisible =
      position === 0 ||
      position === 1 || position === 2 ||
      position === totalCards - 1 || position === totalCards - 2;

    if (!isVisible) return { display: 'none' };

    // Calculate circular position
    let offset = 0;
    let scale = 1;
    let blur = 0;
    let opacity = 1;
    let zIndex = 0;
    let rotateY = 0;

    if (position === 0) {
      // Center card (active)
      offset = 0;
      scale = 1;
      blur = 0;
      opacity = 1;
      zIndex = 30;
      rotateY = 0;
    } else if (position === 1) {
      // Next card 1 (right side)
      offset = 160;
      scale = 0.8;
      blur = 2;
      opacity = 0.6;
      zIndex = 20;
      rotateY = -25;
    } else if (position === 2) {
      // Next card 2 (far right side)
      offset = 280;
      scale = 0.65;
      blur = 4;
      opacity = 0.4;
      zIndex = 10;
      rotateY = -35;
    } else if (position === totalCards - 1) {
      // Previous card 1 (left side)
      offset = -160;
      scale = 0.8;
      blur = 2;
      opacity = 0.6;
      zIndex = 20;
      rotateY = 25;
    } else {
      // Previous card 2 (far left side)
      offset = -280;
      scale = 0.65;
      blur = 4;
      opacity = 0.4;
      zIndex = 10;
      rotateY = 35;
    }

    return {
      x: offset,
      scale,
      opacity,
      zIndex,
      filter: `blur(${blur}px)`,
      rotateY,
    };
  };

  return (
    <section id="projects" className="min-h-screen py-32 px-6 relative overflow-hidden bg-gradient-to-b from-black to-gray-900">
      {/* Background elements */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto">
        <div className="relative" style={{ perspective: '1200px' }}>
          <div className="relative h-[400px] flex items-center justify-center">
            {/* Render cards in circular arrangement */}
            {projects.map((project, index) => {
              const cardStyle = getCardStyle(index);
              const isActive = (index - currentIndex + projects.length) % projects.length === 0;

              if (cardStyle.display === 'none') return null;

              return (
                <motion.div
                  key={index}
                  drag={isActive ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.3}
                  onDragEnd={isActive ? handleDragEnd : undefined}
                  initial={false}
                  animate={cardStyle}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                  }}
                  className="absolute w-[260px]"
                  style={{
                    width: '260px',
                    zIndex: cardStyle.zIndex,
                    pointerEvents: isActive ? 'auto' : 'none',
                    transformStyle: 'preserve-3d',
                    cursor: isActive ? 'grab' : 'default',
                  }}
                >
                  {/* Card Content */}
                  <motion.div
                    whileHover={isActive ? { y: -5 } : {}}
                    transition={{ duration: 0.3 }}
                    className="relative"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl shadow-2xl">
                      {/* Project Image */}
                      <div className="aspect-[16/10] relative overflow-hidden">
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                        {/* Project Number Badge */}
                        <div className="absolute top-6 right-6 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/20 rounded-full">
                          <span className="text-xs font-mono text-white/60">
                            {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                          </span>
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="flex flex-col h-full justify-between">
                        <div className="p-5 space-y-3">
                          <h3 className="text-xl font-bold text-white tracking-tight">
                            {project.title}
                          </h3>
                          <p className="text-white/70 text-sm leading-relaxed line-clamp-2">
                            {project.description}
                          </p>
                        </div>

                        {/* Footer */}
                        <div className="px-5 py-4 border-t border-white/10 flex items-center justify-between gap-3 mt-auto bg-black/40">
                          {/* Tech indicator */}
                          <div className="flex items-center gap-1.5 opacity-60">
                            <div className="text-[10px] font-mono uppercase tracking-wider text-white">
                              {project.tags.slice(0, 2).join(' • ')}
                              {project.tags.length > 2 && <span className="opacity-50"> +{project.tags.length - 2}</span>}
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex items-center gap-2">
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1, color: "#fff" }}
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/20 transition-colors border border-white/5 group"
                            >
                              <Github size={14} className="text-white/70 group-hover:text-white" />
                              <span className="text-[10px] font-medium text-white/70 group-hover:text-white">CODE</span>
                            </motion.a>
                            <motion.a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1, color: "#fff" }}
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/20 transition-colors border border-white/5 group"
                            >
                              <ExternalLink size={14} className="text-white/70 group-hover:text-white" />
                              <span className="text-[10px] font-medium text-white/70 group-hover:text-white">DEMO</span>
                            </motion.a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Soft shadow */}
                    <div className="absolute inset-0 bg-black/30 blur-3xl -z-10 translate-y-8 scale-95"></div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-5 mt-20">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigateCarousel(-1)}
              className="group p-4 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all rounded-xl"
            >
              <svg className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Progress indicators */}
            <div className="flex gap-3">
              {projects.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative group"
                >
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                      ? 'bg-white w-8'
                      : 'bg-white/30 group-hover:bg-white/50'
                      }`}
                  ></div>
                </motion.button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigateCarousel(1)}
              className="group p-4 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all rounded-xl"
            >
              <svg className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* Swipe Hint */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-white/30 text-sm font-light tracking-wide">Drag or use arrows to explore projects</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}