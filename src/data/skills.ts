
import { Laptop, Server, Wrench } from 'lucide-react';

export const skillCategories = [
    {
        category: 'Frontend',
        icon: Laptop,
        color: 'from-blue-500 via-blue-600 to-cyan-500',
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
        color: 'from-emerald-500 via-emerald-600 to-teal-500',
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
        color: 'from-violet-500 via-violet-600 to-purple-500',
        skills: [
            { name: 'Git', level: 90 },
            { name: 'Docker', level: 70 },
            { name: 'Figma', level: 85 },
            { name: 'AWS', level: 65 },
        ],
    },
];

export const heroSkills = ["React", "TypeScript", "Node.js", "Python", "UI/UX", "Cloud"];
