import { motion } from 'motion/react';
import { Laptop, Server, Wrench, Sparkles } from 'lucide-react';
import { useState, useRef } from 'react';
import { skillCategories } from '../data/skills';

export function Skills() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cardMousePositions, setCardMousePositions] = useState<{ [key: string]: { x: number; y: number } }>({});
    const learningRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!learningRef.current) return;
        const rect = learningRef.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardKey: string) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setCardMousePositions(prev => ({
            ...prev,
            [cardKey]: {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            }
        }));
    };



    return (
        <section id="skills" className="min-h-screen py-20 px-4 relative bg-black overflow-hidden">
            {/* Subtle background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/10 to-black"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,120,120,0.1)_0%,transparent_70%)]"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">
                        Technical Skills
                    </h2>
                    <p className="text-gray-400 text-lg font-light">
                        Expertise across the stack
                    </p>
                </motion.div>

                {/* Skill Cards with Stronger Cursor Effect */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {skillCategories.map((category, categoryIndex) => {
                        const cardPos = cardMousePositions[category.category] || { x: 0, y: 0 };

                        return (
                            <motion.div
                                key={category.category}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                                className="relative"
                            >
                                <motion.div
                                    onMouseMove={(e) => handleCardMouseMove(e, category.category)}
                                    whileHover={{
                                        y: -8,
                                        transition: { duration: 0.2 }
                                    }}
                                    className="relative h-full border border-white/5 bg-gradient-to-b from-white/[0.02] to-white/[0.01] backdrop-blur-sm rounded-2xl p-6 overflow-hidden group"
                                >
                                    {/* Stronger cursor following light effect */}
                                    <div
                                        className="absolute pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                                        style={{
                                            background: `radial-gradient(circle 350px at ${cardPos.x}px ${cardPos.y}px, rgba(255,255,255,0.15), transparent 70%)`,
                                            inset: 0,
                                        }}
                                    />

                                    {/* Stronger glass reflection effect */}
                                    <div
                                        className="absolute pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                                        style={{
                                            background: `radial-gradient(circle 200px at ${cardPos.x}px ${cardPos.y}px, rgba(255,255,255,0.08), transparent 50%)`,
                                            inset: 0,
                                            filter: 'blur(20px)',
                                        }}
                                    />

                                    {/* Animated border gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                                    {/* Category header */}
                                    <div className="relative z-10 mb-8">
                                        <motion.div
                                            whileHover={{ rotate: 180, scale: 1.1 }}
                                            transition={{ duration: 0.4 }}
                                            className="inline-flex mb-4"
                                        >
                                            <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-10`}>
                                                <category.icon size={24} className="text-white/90" />
                                            </div>
                                        </motion.div>
                                        <h3 className="text-xl font-medium mb-2">{category.category}</h3>
                                        <div className="h-px w-12 bg-gradient-to-r from-white/40 to-transparent"></div>
                                    </div>

                                    {/* Skills with progress bars */}
                                    <div className="space-y-5 relative z-10">
                                        {category.skills.map((skill, skillIndex) => (
                                            <div key={skill.name}>
                                                <div className="mb-2">
                                                    <span className="text-sm font-light text-gray-300">{skill.name}</span>
                                                </div>
                                                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${skill.level}%` }}
                                                        viewport={{ once: true }}
                                                        transition={{
                                                            duration: 1,
                                                            delay: skillIndex * 0.1 + 0.2,
                                                            ease: "easeOut"
                                                        }}
                                                        className={`h-full bg-gradient-to-r ${category.color} relative`}
                                                    >
                                                        {/* Shimmer effect */}
                                                        <motion.div
                                                            animate={{ x: ['0%', '100%'] }}
                                                            transition={{
                                                                duration: 2,
                                                                repeat: Infinity,
                                                                ease: "linear",
                                                                delay: skillIndex * 0.2
                                                            }}
                                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                                        />
                                                    </motion.div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Learning Section with Stronger Cursor Effect */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                >
                    <div
                        ref={learningRef}
                        onMouseMove={handleMouseMove}
                        className="relative border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent backdrop-blur-sm rounded-2xl p-8 overflow-hidden group"
                    >
                        {/* Stronger cursor following light effect */}
                        <div
                            className="absolute pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                            style={{
                                background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15), transparent 70%)`,
                                inset: 0,
                            }}
                        />

                        {/* Stronger glass reflection effect */}
                        <div
                            className="absolute pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                            style={{
                                background: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.08), transparent 50%)`,
                                inset: 0,
                                filter: 'blur(25px)',
                            }}
                        />

                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10"
                            >
                                <Sparkles size={28} className="text-white/80" />
                            </motion.div>

                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-xl font-medium mb-3">Continuous Learning</h3>
                                <p className="text-gray-400 text-sm font-light leading-relaxed">
                                    Exploring AI/ML, Web3, and cloud-native architectures.
                                    Committed to staying current with emerging technologies and best practices.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Floating geometric elements */}
            <motion.div
                animate={{
                    rotateY: [0, 360],
                    rotateX: [0, 180]
                }}
                transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-1/4 -left-10 w-20 h-20 border border-white/5 rounded-lg"
                style={{ transformStyle: 'preserve-3d' }}
            />

            <motion.div
                animate={{
                    rotateZ: [0, 360],
                    scale: [1, 1.1, 1]
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute bottom-1/4 -right-8 w-16 h-16 border border-white/5 rounded-full"
            />
        </section>
    );
}