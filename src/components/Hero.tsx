import { motion } from "motion/react";
import {
  Code2,
  Database,
  Palette,
  Cpu,
  Globe,
  Terminal,
  ArrowRight,
  Download,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { TypingAnimation } from "./TypingAnimation";
import profilePicture from "./uploads/profilePicture.png";
import { useState } from "react";
import { Github } from "lucide-react";

export function Hero() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = ["React", "TypeScript", "Node.js", "Python", "UI/UX", "Cloud"];

  const floatingIcons = [
    { Icon: Github, position: { top: "10%", right: "60%" }, delay: 0 },
    { Icon: Database, position: { top: "30%", right: "82%" }, delay: 0.2 },
    { Icon: Cpu, position: { top: "55%", right: "18%" }, delay: 0.4 },
    { Icon: Code2, position: { top: "65%", right: "55%" }, delay: 0.6 },
    { Icon: Palette, position: { top: "22%", right: "25%" }, delay: 0.8 },
    { Icon: Terminal, position: { bottom: "18%", right: "30%" }, delay: 1.0 },
  ];

  return (
    <section
      id="home"
      className="min-h-screen relative flex justify-center overflow-hidden px-6 lg:pt-20 pb-32"
      style={{ paddingTop: window.innerWidth < 1024 ? '40px' : undefined }}
    >
      {/* Dynamic animated background */}
      <div className="absolute inset-0">
        {/* Animated mesh gradient */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            backgroundSize: "200% 200%",
          }}
        ></motion.div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-10 left-10 w-96 h-96 border border-white/5 rounded-full"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-20 w-64 h-64 bg-white/5 blur-[100px]"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 mt-8 lg:mt-0">
        {/* Left side - Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-1"
        >
          <motion.div
            whileHover={{ scale: 1.02, rotateY: 2, z: 50 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 rounded-3xl p-10 lg:p-12 relative overflow-hidden shadow-2xl"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Animated gradient overlay */}
            <motion.div
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 opacity-50"
              style={{ backgroundSize: "200% 200%" }}
            ></motion.div>

            <div className="relative z-10">
              {/* Greeting badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-block mb-6"
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(255,255,255,0.2)",
                      "0 0 40px rgba(255,255,255,0.4)",
                      "0 0 20px rgba(255,255,255,0.2)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="px-4 py-2 border border-white/30 bg-white/10 backdrop-blur-sm rounded-full text-sm"
                >
                  👋 Welcome to my portfolio
                </motion.div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl lg:text-5xl xl:text-6xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70"
              >
                Christian Paul Mendoza
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-8 text-lg"
              >
                <TypingAnimation
                  titles={[
                    "IT Student",
                    "Software Developer",
                    "Full-Stack Developer",
                    "UI/UX Designer",
                    "Problem Solver",
                    "Tech Enthusiast",
                  ]}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-3 mb-8"
              >
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    whileHover={{
                      scale: 1.15,
                      backgroundColor: "rgba(255,255,255,0.2)",
                      y: -3,
                    }}
                    className="px-5 py-2 border border-white/30 rounded-full text-white/70 bg-white/10 backdrop-blur-sm cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white text-black rounded-xl flex items-center gap-2 group"
                >
                  <span>View My Work</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.15)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border border-white/30 bg-white/5 backdrop-blur-sm rounded-xl flex items-center gap-2"
                >
                  <Download size={18} />
                  <span>Download CV</span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right side - Portrait with floating icons */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-2 relative"
        >
          <div className="relative max-w-md mx-auto">
            {/* Main portrait container */}
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5, z: 50 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-3xl overflow-hidden border-2 border-white/30 bg-white/5 backdrop-blur-sm shadow-2xl"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="aspect-[3/4] relative">
                <ImageWithFallback
                  src={profilePicture} // ✅ imported image
                  alt="Professional Portrait"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* Overlay effect */}
                <motion.div
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-50"
                  style={{ backgroundSize: "200% 200%" }}
                ></motion.div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-white/5 blur-2xl -z-10"></div>
            </motion.div>

            {/* Floating 3D icons */}
            {floatingIcons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -15, 0],
                  rotateZ: [0, 10, -10, 0],
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 1 + item.delay },
                  scale: { duration: 0.5, delay: 1 + item.delay },
                  y: {
                    duration: 3 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: item.delay,
                  },
                  rotateZ: {
                    duration: 4 + index * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: item.delay,
                  },
                }}
                whileHover={{
                  scale: 1.4,
                  rotate: 360,
                  boxShadow: "0 0 40px rgba(255,255,255,0.5)",
                }}
                className="absolute p-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl cursor-pointer shadow-lg"
                style={{
                  ...item.position,
                  transformStyle: "preserve-3d",
                  transform: "translateZ(50px)",
                }}
              >
                <item.Icon size={20} className="text-white" />
              </motion.div>
            ))}

            {/* Geometric decorative shapes */}
            <motion.div
              animate={{
                rotateX: [0, 360],
                rotateY: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-10 -left-10 w-24 h-24 border-2 border-white/20"
              style={{ transform: "rotateX(45deg) rotateY(45deg)" }}
            ></motion.div>

            <motion.div
              animate={{
                rotateX: [0, -360],
                rotateY: [0, 360],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -bottom-8 -right-8 w-20 h-20 border-2 border-white/20 rounded-full"
            ></motion.div>

            {/* Light rays */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] opacity-20"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0%, rgba(255,255,255,0.1) 10%, transparent 20%, rgba(255,255,255,0.1) 30%, transparent 40%)",
              }}
            ></motion.div>
          </div>
        </motion.div>
      </div>

      {/* Explore Work text at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        style={{ bottom: "10px" }}
      >
        <motion.span
          className="text-white/50 tracking-widest text-sm"
          whileHover={{ color: "rgba(255,255,255,0.8)" }}
        >
          EXPLORE WORK
        </motion.span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"
        ></motion.div>
      </motion.div>
    </section>
  );
}
