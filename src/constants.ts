export const constants = {
    fullname: 'Felix Berger',
    job: {
        title: 'Student Developer',
        employer: 'Monsido',
        employerUrl: 'https://monsido.com',
    },
    socials: [
        {
            title: 'Github',
            url: 'https://github.com/dumspy',
        },
        {
            title: 'Twitter',
            url: 'https://twitter.com/_dumspy',
        },
        {
            title: 'Linkedin',
            url: 'https://linkedin.com/in/f-berger/',
        },
    ],
    projects: [
        {
            id: 'dotfiles',
            name: 'dotfiles',
            description:
                'Personal NixOS configuration and dotfiles for a reproducible development environment.',
            language: 'Nix',
            languageColor: '#5277C3',
            url: 'https://github.com/Dumspy/dotfiles',
            featured: true,
        },
        {
            id: 'auxbot',
            name: 'auxbot',
            description:
                'A TypeScript-based Discord bot with modern architecture and slash commands.',
            language: 'TypeScript',
            languageColor: '#3178C6',
            url: 'https://github.com/Dumspy/auxbot',
            featured: true,
        },
        {
            id: 'auxlink',
            name: 'auxlink',
            description:
                'TypeScript utility for managing and sharing music links across platforms.',
            language: 'TypeScript',
            languageColor: '#3178C6',
            url: 'https://github.com/Dumspy/auxlink',
            featured: true,
        },
        {
            id: 'k8s-manifest',
            name: 'k8s-manifest',
            description:
                'Kubernetes manifests and configurations for container orchestration.',
            language: 'YAML',
            languageColor: '#8B8680',
            url: 'https://github.com/Dumspy/k8s-manifest',
            featured: true,
        },
        {
            id: 'go-playground',
            name: 'go-playground',
            description:
                'A playground for learning Go with a React frontend, built with go-blueprint.',
            language: 'Go',
            languageColor: '#00ADD8',
            url: 'https://github.com/Dumspy/go-playground',
            featured: false,
        },
        {
            id: 'apraidutils',
            name: 'APRaidUtils',
            description:
                'Lua utilities for World of Warcraft raid management and coordination.',
            language: 'Lua',
            languageColor: '#000080',
            url: 'https://github.com/Dumspy/APRaidUtils',
            featured: false,
        },
    ],
} as const
