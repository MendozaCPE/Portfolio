
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
        label: "Based in United States",
        status: "Available for remote opportunities worldwide"
    },
    status: {
        available: true,
        text: "Currently accepting new freelance and full-time opportunities. Let's build something amazing together!"
    },
    socials: [
        {
            label: 'GitHub',
            href: '#',
            username: '@christianpaulmendoza',
            icon: Github
        },
        {
            label: 'LinkedIn',
            href: '#',
            username: 'Christian Paul Mendoza',
            icon: Linkedin
        },
        {
            label: 'Twitter',
            href: '#',
            username: '@cpmendoza_dev',
            icon: Twitter
        },
        {
            label: 'Email',
            href: 'mailto:contact@christianmendoza.dev',
            username: 'contact@christianmendoza.dev',
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
