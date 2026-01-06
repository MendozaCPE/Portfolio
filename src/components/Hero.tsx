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

import { profile } from "../data/profile";
import { heroSkills } from "../data/skills";

export function Hero() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = heroSkills;

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
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              backgroundSize: "200% 200%",
            }}
          ></div>


          <div
            className="absolute bottom-20 right-20 w-64 h-64 bg-white/5 blur-[100px]"
          ></div>
        </div>
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
            <div
              className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 opacity-50"
              style={{ backgroundSize: "200% 200%" }}
            ></div>

            <div className="relative z-10">
              {/* Greeting badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-block mb-6"
              >
                <div
                  className="px-4 py-2 border border-white/30 bg-white/10 backdrop-blur-sm rounded-full text-sm"
                >
                  👋 Welcome to my portfolio
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl lg:text-5xl xl:text-6xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70"
              >
                {profile.name}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-8 text-lg"
              >
                <TypingAnimation
                  titles={profile.titles}
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
                  href="/Mendoza Resume.pdf"
                  download="Mendoza Resume.pdf"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.15)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border border-white/30 bg-white/5 backdrop-blur-sm rounded-xl flex items-center gap-2"
                >
                  <Download size={18} />
                  <span>Download Resume</span>
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
                <div
                  className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-50"
                  style={{ backgroundSize: "200% 200%" }}
                ></div>
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




            {/* Light rays */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] opacity-20"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0%, rgba(255,255,255,0.1) 10%, transparent 20%, rgba(255,255,255,0.1) 30%, transparent 40%)",
              }}
            ></div>
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
        <div
          className="w-px h-12 bg-gradient-to-b from-transparent to-white/50"
        ></div>
        <motion.span
          className="text-white/50 tracking-widest text-sm"
          whileHover={{ color: "rgba(255,255,255,0.8)" }}
        >
          EXPLORE WORK
        </motion.span>
      </motion.div>
    </section>
  );
}
