import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Code2, Lightbulb, Rocket, Award, Users, Zap, GraduationCap, Target } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const { scrollYProgress: containerProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotateX = useTransform(containerProgress, [0, 0.5, 1], [45, 0, -45]);
  const rotateY = useTransform(containerProgress, [0, 0.5, 1], [-45, 0, 45]);
  const scale = useTransform(containerProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '15+', label: 'Technologies' },
    { number: '100%', label: 'Client Satisfaction' },
  ];

  const values = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following industry best practices.',
      color: 'from-blue-500/30 to-cyan-500/30',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Thinking outside the box to deliver creative and effective solutions.',
      color: 'from-yellow-500/30 to-orange-500/30',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Building lightning-fast applications optimized for the best user experience.',
      color: 'from-purple-500/30 to-pink-500/30',
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'Committed to delivering high-quality work that exceeds expectations.',
      color: 'from-green-500/30 to-emerald-500/30',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working seamlessly with teams to achieve common goals.',
      color: 'from-indigo-500/30 to-blue-500/30',
    },
    {
      icon: Zap,
      title: 'Adaptability',
      description: 'Quick to learn and adapt to new technologies and methodologies.',
      color: 'from-red-500/30 to-orange-500/30',
    },
  ];

  return (
    <section id="about" ref={ref} className="min-h-screen py-32 px-6 relative overflow-hidden">
      {/* Enhanced 3D background elements */}
      <div className="absolute inset-0" style={{ perspective: '1000px' }}>
        <motion.div
          style={{ rotateX, rotateY, scale }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-white/10 to-white/5 blur-[120px] rounded-full"
        ></motion.div>
        <motion.div
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 right-20 w-64 h-64 border-4 border-white/20"
          style={{ 
            transformStyle: 'preserve-3d',
            transform: 'rotateX(45deg) rotateY(45deg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        </motion.div>
        
        <motion.div
          animate={{
            rotateZ: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 right-1/3 w-48 h-48 border-4 border-white/20 rounded-full"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full"></div>
        </motion.div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_2px,transparent_2px),linear-gradient(90deg,rgba(255,255,255,0.03)_2px,transparent_2px)] bg-[size:100px_100px]"></div>

      <div className="max-w-7xl mx-auto relative z-10" ref={containerRef}>
        <motion.div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl mb-6"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '120px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1.5 bg-gradient-to-r from-white via-white/80 to-transparent rounded-full"
          ></motion.div>
        </motion.div>

        {/* Stats Grid with enhanced 3D */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          style={{ perspective: '1500px' }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15, 
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.1, 
                rotateY: 15,
                rotateX: 10,
                z: 50,
                boxShadow: '0 30px 80px rgba(255,255,255,0.2)',
                y: -12
              }}
              className="relative group cursor-pointer"
              style={{ 
                transformStyle: 'preserve-3d',
                marginTop: index % 2 === 1 ? '30px' : '0'
              }}
            >
              <div className="border-2 border-white/30 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl p-10 text-center rounded-3xl relative overflow-hidden shadow-2xl">
                {/* Animated gradient background */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  style={{ backgroundSize: '200% 200%' }}
                ></motion.div>

                {/* 3D layered effect */}
                <div 
                  className="absolute inset-0 border-2 border-white/20 rounded-3xl"
                  style={{ transform: 'translateZ(-10px)' }}
                ></div>
                <div 
                  className="absolute inset-0 border-2 border-white/10 rounded-3xl"
                  style={{ transform: 'translateZ(-20px)' }}
                ></div>

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1, type: 'spring' }}
                  className="text-5xl md:text-6xl mb-3 relative z-10 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/60"
                  style={{ transform: 'translateZ(30px)' }}
                >
                  {stat.number}
                </motion.div>
                <div 
                  className="text-white/70 relative z-10 text-sm uppercase tracking-wider"
                  style={{ transform: 'translateZ(20px)' }}
                >
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Bio Section with 3D cards */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Main Bio Card */}
            <motion.div
              initial={{ opacity: 0, x: -80, rotateY: -45 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring' }}
              whileHover={{ 
                scale: 1.02, 
                rotateY: 5,
                rotateX: 5,
                z: 50,
                boxShadow: '0 40px 100px rgba(255,255,255,0.2)'
              }}
              className="relative"
              style={{ 
                transformStyle: 'preserve-3d',
                perspective: '1500px'
              }}
            >
              <div className="border-2 border-white/30 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl p-10 md:p-12 rounded-3xl relative overflow-hidden h-full shadow-2xl">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-pink-500/20"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  style={{ backgroundSize: '200% 200%' }}
                ></motion.div>

                {/* 3D depth layers */}
                <div 
                  className="absolute inset-0 border-2 border-white/20 rounded-3xl"
                  style={{ transform: 'translateZ(-15px)' }}
                ></div>
                <div 
                  className="absolute inset-0 border-2 border-white/10 rounded-3xl"
                  style={{ transform: 'translateZ(-30px)' }}
                ></div>

                <div className="relative z-10 space-y-6" style={{ transform: 'translateZ(40px)' }}>
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="p-4 border-2 border-white/30 bg-white/10 rounded-2xl"
                    >
                      <GraduationCap size={32} />
                    </motion.div>
                    <h3 className="text-2xl md:text-3xl">My Journey</h3>
                  </div>
                  
                  <p className="text-white/80 leading-relaxed text-lg">
                    Hello! I'm <span className="text-white font-semibold">Christian Paul Mendoza</span>, 
                    a passionate IT student with an insatiable curiosity for technology and innovation. 
                    My journey in software development began with a simple "Hello World" and has evolved 
                    into creating complex, user-centric applications.
                  </p>
                  <p className="text-white/80 leading-relaxed text-lg">
                    I specialize in full-stack development, bringing ideas to life through clean code 
                    and intuitive design. Every project is an opportunity to learn, grow, and push the 
                    boundaries of what's possible.
                  </p>
                  <p className="text-white/80 leading-relaxed text-lg">
                    Currently pursuing my degree while actively building real-world solutions that 
                    make a difference. I believe in continuous learning and staying ahead of the 
                    technological curve.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mission & Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 80, rotateY: 45 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
              whileHover={{ 
                scale: 1.02, 
                rotateY: -5,
                rotateX: 5,
                z: 50,
                boxShadow: '0 40px 100px rgba(255,255,255,0.2)'
              }}
              className="relative"
              style={{ 
                transformStyle: 'preserve-3d',
                perspective: '1500px'
              }}
            >
              <div className="border-2 border-white/30 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl p-10 md:p-12 rounded-3xl relative overflow-hidden h-full shadow-2xl">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-cyan-500/10 to-blue-500/20"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  style={{ backgroundSize: '200% 200%' }}
                ></motion.div>

                {/* 3D depth layers */}
                <div 
                  className="absolute inset-0 border-2 border-white/20 rounded-3xl"
                  style={{ transform: 'translateZ(-15px)' }}
                ></div>
                <div 
                  className="absolute inset-0 border-2 border-white/10 rounded-3xl"
                  style={{ transform: 'translateZ(-30px)' }}
                ></div>

                <div className="relative z-10 space-y-8" style={{ transform: 'translateZ(40px)' }}>
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="p-4 border-2 border-white/30 bg-white/10 rounded-2xl"
                      >
                        <Target size={28} />
                      </motion.div>
                      <h4 className="text-xl">Mission</h4>
                    </div>
                    <p className="text-white/80 leading-relaxed">
                      To create innovative digital solutions that solve real-world problems and 
                      enhance user experiences through thoughtful design and robust engineering.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="p-4 border-2 border-white/30 bg-white/10 rounded-2xl"
                      >
                        <Rocket size={28} />
                      </motion.div>
                      <h4 className="text-xl">Vision</h4>
                    </div>
                    <p className="text-white/80 leading-relaxed">
                      To become a leading force in technology innovation, contributing to projects 
                      that shape the future and inspire the next generation of developers.
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/20">
                    <p className="text-white/60 italic">
                      "Code is like humor. When you have to explain it, it's bad." - Cory House
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Values Grid with enhanced 3D */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl mb-12 text-center"
          >
            What I Bring to the Table
          </motion.h3>

          <div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            style={{ perspective: '2000px' }}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 80, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, type: 'spring' }}
                whileHover={{ 
                  y: -15, 
                  rotateX: -10,
                  rotateY: 5,
                  z: 100,
                  boxShadow: '0 30px 80px rgba(255,255,255,0.25)',
                  scale: 1.05
                }}
                className="group relative cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="border-2 border-white/30 bg-gradient-to-br from-white/15 to-transparent backdrop-blur-xl p-8 rounded-3xl h-full relative overflow-hidden shadow-xl">
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                    style={{ backgroundSize: '200% 200%' }}
                  ></motion.div>

                  {/* 3D depth layers */}
                  <div 
                    className="absolute inset-0 border-2 border-white/20 rounded-3xl"
                    style={{ transform: 'translateZ(-10px)' }}
                  ></div>
                  <div 
                    className="absolute inset-0 border-2 border-white/10 rounded-3xl"
                    style={{ transform: 'translateZ(-20px)' }}
                  ></div>
                  
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.7 }}
                    className="inline-flex p-5 border-2 border-white/30 bg-white/10 group-hover:bg-white/20 transition-colors rounded-2xl mb-6 relative z-10"
                    style={{ transform: 'translateZ(50px)' }}
                  >
                    <value.icon size={32} />
                  </motion.div>
                  
                  <h4 
                    className="text-2xl mb-4 relative z-10"
                    style={{ transform: 'translateZ(40px)' }}
                  >
                    {value.title}
                  </h4>
                  <p 
                    className="text-white/70 leading-relaxed relative z-10"
                    style={{ transform: 'translateZ(30px)' }}
                  >
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Large visible 3D floating elements */}
      <motion.div
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-1/3 -right-32 w-80 h-80 border-4 border-white/20"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: 'rotateX(45deg) rotateY(45deg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div 
          className="absolute inset-0 border-4 border-white/10"
          style={{ transform: 'translateZ(-40px)' }}
        ></div>
      </motion.div>

      <motion.div
        animate={{
          rotateZ: [0, 360],
          rotateX: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute bottom-1/4 -left-32 w-64 h-64 border-4 border-white/20 rounded-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full"></div>
        <div 
          className="absolute inset-0 border-4 border-white/10 rounded-full"
          style={{ transform: 'translateZ(-30px)' }}
        ></div>
      </motion.div>
    </section>
  );
}
