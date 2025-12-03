import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Laptop, Server, Wrench, Sparkles } from 'lucide-react';

export function Skills() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);

  const skillCategories = [
    {
      category: 'Frontend',
      icon: Laptop,
      color: 'from-blue-500/20 to-cyan-500/20',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Next.js', level: 80 },
      ],
    },
    {
      category: 'Backend',
      icon: Server,
      color: 'from-green-500/20 to-emerald-500/20',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'REST APIs', level: 90 },
      ],
    },
    {
      category: 'Tools & Other',
      icon: Wrench,
      color: 'from-purple-500/20 to-pink-500/20',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'Figma', level: 85 },
        { name: 'AWS', level: 65 },
      ],
    },
  ];

  return (
    <section id="skills" ref={ref} className="min-h-screen py-32 px-6 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-white/5 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-white/5 blur-[130px] rounded-full"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] opacity-50"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl md:text-7xl mb-6">Technical Skills</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-white to-white/20 mx-auto"
          ></motion.div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              style={{ y: categoryIndex === 1 ? y : undefined }}
              className="relative group"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.03, 
                  rotateY: 5,
                  boxShadow: '0 30px 60px rgba(255,255,255,0.15)'
                }}
                transition={{ duration: 0.3 }}
                className="border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 h-full relative overflow-hidden"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Icon header */}
                <div className="relative z-10 mb-8">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex p-4 border border-white/20 bg-white/5 rounded-xl mb-4"
                  >
                    <category.icon size={32} />
                  </motion.div>
                  <h3 className="text-2xl">{category.category}</h3>
                </div>

                {/* Skills list */}
                <div className="space-y-6 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-3">
                        <span className="text-white/90">{skill.name}</span>
                        <motion.span 
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 }}
                          className="text-white/60"
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1.2, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: 'easeOut'
                          }}
                          className="h-full bg-gradient-to-r from-white to-white/70 relative rounded-full"
                        >
                          <motion.div
                            animate={{
                              x: ['-100%', '200%'],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: 'linear',
                              delay: categoryIndex * 0.5,
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                            style={{ width: '50%' }}
                          ></motion.div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-10 md:p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="p-6 border border-white/20 bg-white/5 rounded-2xl"
              >
                <Sparkles size={48} />
              </motion.div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl mb-4">Always Learning</h3>
                <p className="text-white/60">
                  Constantly exploring new technologies and frameworks. Currently diving deep into 
                  AI/ML, Web3, and advanced cloud architectures to stay ahead of the curve.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating 3D elements */}
      <motion.div
        animate={{
          rotateZ: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute -bottom-20 -left-20 w-40 h-40 border border-white/5"
        style={{ transform: 'rotateX(60deg) rotateY(60deg)' }}
      ></motion.div>

      <motion.div
        animate={{
          rotateX: [0, 360],
          rotateZ: [0, -360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-1/3 right-10 w-24 h-24 border border-white/5 rounded-full"
      ></motion.div>
    </section>
  );
}
