
import {
    Github,
    Linkedin,
    Twitter,
    Mail,
    MapPin,
    Sparkles,
    Star,
    Gem,
    Award,
    Code2,
    Lightbulb,
    Rocket,
    Users
} from 'lucide-react';

export const profile = {
    name: "Christian Paul Mendoza",
    titles: [
        "IT Student",
        "Software Developer",
        "Full-Stack Developer",
        "UI/UX Designer",
        "Problem Solver",
        "Tech Enthusiast",
    ],
    bio: "I craft digital experiences where form meets function. Clean code, thoughtful design, and attention to detail define my approach to development.",
    quote: {
        text: "Less is more",
        subtext: "Every element serves a purpose. Every line of code tells a story. Simplicity isn't about removing value—it's about revealing it."
    },
    location: {
        label: "Based in Philippines",
        status: "Available for remote opportunities worldwide"
    },
    status: {
        available: true,
        text: "Currently accepting new freelance and full-time opportunities. Let's build something amazing together!"
    },
    socials: [
        {
            label: 'GitHub',
            href: 'https://github.com/MendozaCPE',
            username: '@christianpaulmendoza',
            icon: Github
        },
        {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/christian-paul-mendoza-73335530a/',
            username: 'Christian Paul Mendoza',
            icon: Linkedin
        },
        {
            label: 'Email',
            href: 'mailto:contact@christianpaulmendoza10@gmail.com',
            username: 'contact@christianpaulmendoza10@gmail.com',
            icon: Mail
        },
    ],
    stats: [
        { number: "50+", label: "Projects", icon: Sparkles },
        { number: "3+", label: "Years", icon: Star },
    ],
    values: [
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
    ]
};
