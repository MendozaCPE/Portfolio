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
      {/* Minimal background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Subtle animated dots */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            style={{
              left: `${(i * 5) % 100}%`,
              top: `${20 + Math.sin(i) * 60}%`,
              y,
              opacity: opacity,
            }}
            animate={{
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Minimal header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-white/40" />
            <span className="text-white/60 text-sm tracking-widest">ABOUT</span>
            <div className="w-6 h-px bg-white/40" />
          </div>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Crafting Digital Experiences
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Minimal code, maximum impact.
          </p>
        </motion.div>

        {/* Elegant stats - FIXED: Added proper spacing between icon and number */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="text-center group relative"
              >
                {/* Icon positioned separately from number */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Icon className="w-5 h-5 text-white/40" />
                </div>

                {/* Number with margin to prevent overlap */}
                <motion.div
                  className="text-3xl md:text-4xl font-light mb-2 mt-4"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  {stat.number}
                </motion.div>

                {/* Label */}
                <div className="text-white/50 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Clean two-column layout */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 mb-20">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-white/30" />
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-white/60" />
                <span className="text-white/60 text-sm">INTRODUCTION</span>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-light mb-6">
              Christian Paul Mendoza
              <br />
              <span className="text-white/60">IT Student & Developer</span>
            </h3>

            <div className="space-y-4 text-white/70">
              <p>
                Transforming ideas into elegant digital solutions. With a focus
                on clean design and efficient code, I create experiences that
                are both beautiful and functional.
              </p>
              <p>
                Currently exploring the intersection of technology and
                creativity, while pursuing excellence in software development.
              </p>
            </div>
          </motion.div>

          {/* Right - Approach */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-white/30" />
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-white/60" />
                <span className="text-white/60 text-sm">PHILOSOPHY</span>
              </div>
            </div>

            <h4 className="text-xl mb-6 font-light">Less is more</h4>

            <div className="space-y-4 text-white/70">
              <p>
                I believe in minimalism — removing the unnecessary to focus on
                what truly matters. Every line of code, every design element
                should serve a purpose.
              </p>
              <p>
                My work is driven by clarity, precision, and attention to
                detail, creating digital products that feel intuitive and
                effortless.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values - Minimal grid - FIXED: Better spacing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-4 h-px bg-white/40" />
              <span className="text-white/60 text-sm tracking-widest">
                VALUES
              </span>
              <div className="w-4 h-px bg-white/40" />
            </div>
            <h3 className="text-2xl md:text-3xl font-light mb-2">
              What guides my work
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group p-6 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                {/* Icon container with proper spacing */}
                <div className="mb-4">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className="inline-flex p-3 border border-white/10 bg-white/5 rounded-lg group-hover:border-white/20 transition-colors"
                  >
                    <value.icon className="w-6 h-6" />
                  </motion.div>
                </div>

                {/* Title with spacing */}
                <h4 className="text-lg mb-3">{value.title}</h4>

                {/* Description with proper line height */}
                <p className="text-white/60 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote - Better spacing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto pt-12 border-t border-white/10"
        >
          <div className="text-4xl md:text-5xl font-light tracking-tight mb-6 leading-tight">
            "Simplicity is the ultimate sophistication."
          </div>
          <div className="text-white/50 text-sm mt-6">— Leonardo da Vinci</div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-8 w-2 h-2 bg-white/20 rounded-full"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute bottom-1/4 left-8 w-1 h-1 bg-white/10 rounded-full"
      />
    </section>
  );
}
