import { lazy, Suspense, useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Code2,
  Lightbulb,
  Rocket,
  Award,
  Users,
  GraduationCap,
  Briefcase,
  Trophy,
  CheckCircle,
  FileCode2,
  ChevronDown,
  Loader2
} from "lucide-react";
import { profile } from "../data/profile";

// Lazy load Spline
const Spline = lazy(() => import('@splinetool/react-spline'));

export function About() {
  const containerRef = useRef(null);
  const [isSplineVisible, setIsSplineVisible] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Only load Spline when near viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsSplineVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // Start loading 200px before
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative min-h-screen bg-black text-white"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">

          {/* Left Side - Sticky Robot (Job Description/Visual) */}
          <div className="lg:h-screen lg:sticky lg:top-0 flex flex-col justify-center py-10 lg:py-0 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] lg:h-[600px] w-full"
            >
              <div className="absolute inset-0 z-0 flex items-center justify-center">
                {/* Robot Container */}
                {isSplineVisible && (
                  <Suspense fallback={
                    <div className="flex flex-col items-center justify-center gap-2 text-white/20">
                      <Loader2 className="w-8 h-8 animate-spin" />
                      <span className="text-xs uppercase tracking-widest">Loading 3D Scene...</span>
                    </div>
                  }>
                    <Spline
                      scene="https://prod.spline.design/fAlkI-iSY1gBBwtV/scene.splinecode"
                      style={{ width: '100%', height: '100%' }}
                    />
                  </Suspense>
                )}
              </div>

              {/* Background Glows */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl -z-10"
              />
            </motion.div>

            {/* Scroll Indicator (Only visible on Desktop when sticky) */}
            <motion.div
              style={{ opacity: useTransform(scrollYProgress, [0.9, 1], [1, 0]) }}
              className="hidden lg:flex flex-col items-center gap-2 absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <span className="text-white/40 text-xs tracking-widest uppercase">Scroll to explore</span>
              <ChevronDown className="w-5 h-5 text-white/40 animate-bounce" />
            </motion.div>
          </div>

          {/* Right Side - Scrollable Content */}
          <div className="relative py-20 lg:py-32 space-y-20 lg:space-y-32">

            {/* 1. About / Bio */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-cyan-500/50" />
                <span className="text-cyan-400 font-medium tracking-widest text-sm uppercase">About Me</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                <span className="text-white/60">Hello, I'm</span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  {profile.name}
                </span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                {profile.bio}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {profile.stats.map((stat, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors">
                    <stat.icon className="w-6 h-6 text-cyan-400 mb-2" />
                    <div className="text-2xl font-bold">{stat.number}</div>
                    <div className="text-white/40 text-sm uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 2. Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="w-6 h-6 text-cyan-400" />
                <h3 className="text-2xl font-bold">Experience</h3>
              </div>
              <div className="space-y-6">
                {profile.experience?.map((role, idx) => (
                  <div key={idx} className="group relative pl-8 border-l-2 border-white/10 hover:border-cyan-500/50 transition-colors">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-2 border-white/20 group-hover:border-cyan-500 transition-colors" />
                    <div className="mb-1 text-cyan-400 text-sm font-medium">{role.period}</div>
                    <h4 className="text-xl font-bold">{role.role}</h4>
                    <div className="text-white/60 mb-2">{role.company}</div>
                    <p className="text-white/50 text-sm leading-relaxed">{role.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 3. Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-6 h-6 text-purple-400" />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="space-y-6">
                {profile.education?.map((edu, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold">{edu.school}</h4>
                      <span className="text-purple-400 text-sm py-1 px-3 rounded-full bg-purple-500/10 border border-purple-500/20">{edu.year}</span>
                    </div>
                    <div className="text-white/80 mb-2">{edu.degree}</div>
                    <p className="text-white/50 text-sm">{edu.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 4. Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {profile.certifications?.map((cert, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl border border-white/5 hover:border-green-400/30 hover:bg-green-400/5 transition-all">
                    <div className="mt-1 p-2 rounded-full bg-white/5 text-green-400">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white/90">{cert.name}</h4>
                      <div className="text-sm text-white/50 mt-1">{cert.issuer} • {cert.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 5. Academic Projects */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <FileCode2 className="w-6 h-6 text-pink-400" />
                <h3 className="text-2xl font-bold">Academic Projects</h3>
              </div>
              <div className="space-y-4">
                {profile.academicProjects?.map((proj, idx) => (
                  <div key={idx} className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-pink-500/30 transition-all">
                    <h4 className="text-lg font-bold mb-2 group-hover:text-pink-400 transition-colors">{proj.name}</h4>
                    <p className="text-white/60 text-sm mb-4">{proj.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {proj.tech.map((t, i) => (
                        <span key={i} className="text-xs py-1 px-2 rounded-md bg-white/5 text-white/40 border border-white/5">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 6. Awards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Trophy className="w-6 h-6 text-yellow-400" />
                <h3 className="text-2xl font-bold">Honors & Awards</h3>
              </div>
              <div className="grid gap-4">
                {profile.awards?.map((award, idx) => (
                  <div key={idx} className="relative overflow-hidden p-6 rounded-2xl border border-yellow-500/20 bg-yellow-500/5">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Trophy className="w-12 h-12 text-yellow-500" />
                    </div>
                    <h4 className="text-lg font-bold text-yellow-100">{award.title}</h4>
                    <div className="text-yellow-500/60 text-sm font-medium mb-1">{award.year}</div>
                    <p className="text-white/50 text-sm">{award.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}