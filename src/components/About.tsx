import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  Code2,
  Lightbulb,
  Rocket,
  Award,
  Users,
  Zap,
  GraduationCap,
  Target,
  Sparkles,
  Star,
  Gem,
} from "lucide-react";

export function About() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  const stats = [
    { number: "50+", label: "Projects", icon: Sparkles },
    { number: "3+", label: "Years", icon: Star },
    { number: "15+", label: "Technologies", icon: Gem },
    { number: "100%", label: "Satisfaction", icon: Award },
  ];

  const values = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Maintainable, scalable solutions",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Creative problem-solving",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimized user experiences",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Team-oriented approach",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen py-20 px-4 md:px-6 relative overflow-hidden"
    >
      {/* 3D Background Layer */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Multiple floating geometric shapes with varied animations */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-500/10 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.8, 1],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/3 right-1/4 w-96 h-96 border border-purple-500/10"
          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        />
        <motion.div
          animate={{
            rotate: [0, -360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/3 w-48 h-48 border border-blue-500/10"
          style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
        />

        {/* Enhanced gradient orbs with movement */}
        <motion.div
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            opacity: [0.1, 0.25, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 50, 0],
            x: [0, -30, 0],
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            opacity: [0.08, 0.15, 0.08],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl"
        />

        {/* Animated grid lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <motion.div
          animate={{ scaleX: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent origin-center"
        />
        <motion.div
          animate={{ scaleX: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent origin-center"
        />

        {/* Enhanced floating particles with varied sizes and colors */}
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${i % 3 === 0 ? 'bg-cyan-500/20' : i % 3 === 1 ? 'bg-purple-500/20' : 'bg-white/10'
              }`}
            style={{
              width: i % 5 === 0 ? '3px' : i % 3 === 0 ? '2px' : '1px',
              height: i % 5 === 0 ? '3px' : i % 3 === 0 ? '2px' : '1px',
              left: `${(i * 2.5) % 100}%`,
              top: `${10 + Math.sin(i) * 70}%`,
            }}
            animate={{
              y: [0, -40 - (i % 20), 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1.4, 0.8],
              x: [0, Math.sin(i) * 20, 0],
            }}
            transition={{
              duration: 3 + i * 0.1,
              repeat: Infinity,
              delay: i * 0.05,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Scanning lines effect */}
        <motion.div
          animate={{ y: ['0%', '100%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
        />
        <motion.div
          animate={{ y: ['100%', '0%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Content - Split Layout with increased spacing */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center min-h-[80vh]">
          {/* Left Side - 3D Robot */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] lg:h-[700px]"
          >
            {/* No container - Robot floats freely */}
            <Spline
              scene="https://prod.spline.design/fAlkI-iSY1gBBwtV/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />

            {/* Enhanced glowing orb behind robot */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl -z-10"
            />

            {/* Additional spotlight effect */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 bg-white/10 rounded-full blur-2xl -z-10"
            />

            {/* Decorative elements around robot */}
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute top-20 -right-4 w-16 h-16 border border-white/10 rounded-full"
            />
            <motion.div
              animate={{
                rotate: -360,
                y: [0, -20, 0],
              }}
              transition={{
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute bottom-32 -left-4 w-12 h-12 border border-white/10"
              style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.9, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute top-1/3 -left-8 w-3 h-3 bg-white/50 rounded-full"
            />
          </motion.div>

          {/* Right Side - Content with increased spacing */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-0 lg:space-y-0"
          >
            {/* Header with animated underline */}
            <div className="relative space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3"
              >
                <motion.div
                  animate={{ scaleX: [0, 1] }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="w-12 h-px bg-gradient-to-r from-white/100 to-white/20 origin-left"
                />
                <span className="text-white/75 text-lg tracking-[0.3em] font-medium">ABOUT ME</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap items-center gap-3 text-sm"
              >
                <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/70 whitespace-nowrap">
                  IT Student
                </span>
                <span className="text-white/30">×</span>
                <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/70 whitespace-nowrap">
                  Developer
                </span>
                <span className="text-white/30">×</span>
                <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/70 whitespace-nowrap">
                  Creator
                </span>
              </motion.div>

              {/* Decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute -bottom-4 left-0 w-32 h-px bg-gradient-to-r from-white/40 to-transparent origin-left"
              />
            </div>

            {/* Bio with card effect - Added bottom margin */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative group mt-8 mb-10"
            >
              {/* Background removed */}
              <div className="relative p-0 space-y-4">
                <p className="text-white/80 text-lg md:text-xl leading-relaxed">
                  I craft <span className="text-white font-medium">digital experiences</span> where form meets function.
                  Clean code, thoughtful design, and attention to detail
                  define my approach to development.
                </p>
              </div>
            </motion.div>

            {/* Stats with animated borders - Made smaller */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-4 mb-4"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="group relative p-4 transition-all duration-300"
                  >
                    {/* Animated corner */}
                    <motion.div
                      animate={{
                        opacity: [0.2, 0.5, 0.2],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                      className="hidden"
                    />

                    <Icon className="w-4 h-4 text-white/40 mb-2 group-hover:text-white/60 transition-colors" />
                    <motion.div
                      className="text-2xl md:text-3xl font-light mb-1"
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-white/50 text-xs tracking-wider uppercase">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Values with hover effects - Added top padding */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="space-y-2 pt-1 pb-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  animate={{ scaleX: [0, 1] }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="w-12 h-px bg-gradient-to-r from-white/100 to-white/20 origin-left"
                />
                <span className="text-white/75 text-xs tracking-widest uppercase">Core Values</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.08, y: -4 }}
                    className="group relative p-4 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 rounded-xl overflow-hidden"
                  >
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                    <div className="relative flex items-center gap-2">
                      <value.icon className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
                      <span className="text-sm text-white/80 group-hover:text-white transition-colors font-medium">{value.title}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Philosophy Quote with accent - Reduced margin */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="relative pt-10 mt-10"
            >
              <div className="absolute top-10 left-0 w-20 h-px bg-gradient-to-r from-white/40 to-transparent" />

              <div className="relative pl-6 border-l-2 border-white/20">
                <motion.div
                  animate={{ opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute left-0 top-0 bottom-0 w-0.5 bg-white/40"
                />

                <div className="text-2xl md:text-3xl font-light text-white/90 mb-3 italic leading-relaxed">
                  "Less is more"
                </div>
                <p className="text-white/50 text-sm leading-relaxed">
                  Every element serves a purpose. Every line of code tells a story.
                  Simplicity isn't about removing value—it's about revealing it.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating accent elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-12 w-2 h-2 bg-white/20 rounded-full"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-32 left-12 w-1 h-1 bg-white/10 rounded-full"
      />
    </section>
  );
}