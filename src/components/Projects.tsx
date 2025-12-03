import { motion, AnimatePresence } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack online store with payment integration, inventory management, and admin dashboard built with modern technologies.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=1200&q=80',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, team workflows, and advanced analytics.',
      tags: ['Next.js', 'TypeScript', 'Prisma', 'WebSocket'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather tracking application with interactive maps, detailed forecasts, and location services.',
      tags: ['React', 'API Integration', 'Charts', 'Geolocation'],
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=1200&q=80',
    },
    {
      title: 'Social Media Analytics',
      description: 'Platform for analyzing social media metrics with advanced data visualization and AI-powered insights.',
      tags: ['Python', 'React', 'D3.js', 'Machine Learning'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    },
    {
      title: 'Portfolio CMS',
      description: 'Content management system designed for creative professionals to showcase and manage their work effectively.',
      tags: ['Next.js', 'Sanity', 'Tailwind', 'Vercel'],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80',
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [projects.length]);

  const navigateCarousel = (newDirection: number) => {
    setDirection(newDirection);
    if (newDirection > 0) {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction > 0 ? 45 : -45,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      rotateY: direction > 0 ? -45 : 45,
      scale: 0.8,
    }),
  };

  return (
    <section id="projects" className="min-h-screen py-32 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-white/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl mb-6">Featured Projects</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-white"
          ></motion.div>
        </motion.div>

        {/* 3D Carousel Container */}
        <div className="relative" style={{ perspective: '2000px' }}>
          <div className="relative h-[600px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 },
                  rotateY: { duration: 0.6 },
                  scale: { duration: 0.5 },
                }}
                className="absolute w-full max-w-5xl"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Project Image */}
                  <motion.div
                    whileHover={{ scale: 1.02, rotateY: -5 }}
                    transition={{ duration: 0.3 }}
                    className="relative group"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm">
                      <div className="aspect-[4/3] relative">
                        <ImageWithFallback
                          src={projects[currentIndex].image}
                          alt={projects[currentIndex].title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      </div>

                      {/* Hover overlay with links */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4"
                      >
                        <motion.button
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 transition-colors"
                        >
                          <Github size={24} />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.2, rotate: -10 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 transition-colors"
                        >
                          <ExternalLink size={24} />
                        </motion.button>
                      </motion.div>
                    </div>

                    {/* 3D shadow effect */}
                    <div className="absolute inset-0 bg-white/5 blur-xl -z-10 translate-y-4"></div>
                  </motion.div>

                  {/* Project Info */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-6"
                  >
                    <div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-white/40 mb-2"
                      >
                        Project {String(currentIndex + 1).padStart(2, '0')}
                      </motion.div>
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-4xl md:text-5xl mb-4"
                      >
                        {projects[currentIndex].title}
                      </motion.h3>
                    </div>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="text-white/60"
                    >
                      {projects[currentIndex].description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="flex flex-wrap gap-3"
                    >
                      {projects[currentIndex].tags.map((tag, index) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                          whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.15)' }}
                          className="px-4 py-2 border border-white/20 rounded-full text-white/70 bg-white/5 backdrop-blur-sm"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigateCarousel(-1)}
              className="p-4 border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors rounded-xl"
            >
              <ChevronLeft size={24} />
            </motion.button>

            {/* Progress indicators */}
            <div className="flex gap-3">
              {projects.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  whileHover={{ scale: 1.2 }}
                  className="relative"
                >
                  <div
                    className={`w-3 h-3 rounded-full border border-white/30 transition-all ${
                      index === currentIndex ? 'bg-white' : 'bg-white/20'
                    }`}
                  ></div>
                  {index === currentIndex && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 rounded-full border-2 border-white"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    ></motion.div>
                  )}
                </motion.button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigateCarousel(1)}
              className="p-4 border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors rounded-xl"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>

          {/* Auto-play progress bar */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
              <motion.div
                key={currentIndex}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 5, ease: 'linear' }}
                className="h-full bg-gradient-to-r from-white/50 via-white to-white/50 relative"
              >
                <motion.div
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent"
                  style={{ width: '50%' }}
                ></motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
