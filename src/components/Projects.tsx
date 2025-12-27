import { motion, PanInfo } from 'motion/react';
import { useState, useEffect } from 'react';
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



  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]); // Reset timer when index changes (manual or auto)

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

    // Normalize position to be between -totalCards/2 and totalCards/2
    const centerOffset = position > totalCards / 2 ? position - totalCards : position;

    // Determine if card should be visible (show 5 cards: current, +/- 1, +/- 2)
    const isVisible = Math.abs(centerOffset) <= 2;

    if (!isVisible) return { display: 'none' };

    // Calculate circular position
    let x = 0;
    let scale = 1;
    let blur = 0;
    let opacity = 1;
    let zIndex = 0;
    let rotateY = 0;

    if (centerOffset === 0) {
      // Center card (active) - Increased size
      x = 0;
      scale = 1.3; // Made bigger as requested
      blur = 0;
      opacity = 1;
      zIndex = 50;
      rotateY = 0;
    } else if (centerOffset === 1) {
      // First right
      x = 220; // Adjusted for bigger center
      scale = 0.9;
      blur = 2;
      opacity = 0.8;
      zIndex = 40;
      rotateY = -15;
    } else if (centerOffset === -1) {
      // First left
      x = -220;
      scale = 0.9;
      blur = 2;
      opacity = 0.8;
      zIndex = 40;
      rotateY = 15;
    } else if (centerOffset === 2) {
      // Second right
      x = 380;
      scale = 0.7;
      blur = 4;
      opacity = 0.5;
      zIndex = 30;
      rotateY = -25;
    } else if (centerOffset === -2) {
      // Second left
      x = -380;
      scale = 0.7;
      blur = 4;
      opacity = 0.5;
      zIndex = 30;
      rotateY = 25;
    }

    return {
      x,
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

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="max-w-6xl mx-auto">
        <div className="relative" style={{ perspective: '1200px' }}>
          <div className="relative h-[600px] flex items-center justify-center">
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
                  className="absolute w-[280px] h-[450px]"
                  style={{
                    width: '280px',
                    height: '450px',
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
                    className="relative h-full"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="relative h-full flex flex-col overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl shadow-2xl">
                      {/* Project Image - Fixed Aspect Ratio */}
                      <div className="aspect-[16/10] relative overflow-hidden bg-gray-900">
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
                      <div className="flex flex-col flex-1 justify-between min-h-0">
                        <div className="p-5 space-y-2">
                          <h3
                            className="font-bold text-white tracking-tight"
                            style={{ fontSize: '11px', lineHeight: '1.2' }}
                          >
                            {project.title}
                          </h3>
                          <p
                            className="text-white/70 leading-relaxed line-clamp-2"
                            style={{ fontSize: '9px', lineHeight: '1.4' }}
                          >
                            {project.description}
                          </p>
                        </div>

                        {/* Footer */}
                        <div className="px-5 py-4 border-t border-white/10 flex items-center justify-between gap-3 mt-auto bg-black/40">
                          {/* Tech indicator */}
                          <div className="flex items-center gap-1.5 opacity-60">
                            <div
                              className="font-mono uppercase tracking-wider text-white"
                              style={{ fontSize: '7px' }}
                            >
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
                              className="flex items-center justify-center p-2 rounded-full bg-white/5 hover:bg-white/20 transition-colors border border-white/5 group"
                            >
                              <Github size={16} className="text-white/70 group-hover:text-white" />
                            </motion.a>
                            <motion.a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1, color: "#fff" }}
                              className="flex items-center justify-center p-2 rounded-full bg-white/5 hover:bg-white/20 transition-colors border border-white/5 group"
                            >
                              <ExternalLink size={16} className="text-white/70 group-hover:text-white" />
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


        </div>
      </div>
    </section>
  );
}