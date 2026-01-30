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
    ] as const,
    projects: [
        {
            name: 'dotfiles',
            description:
                'Personal dotfiles for NixOS and various development tools',
            language: 'Nix',
            stars: 0,
            url: 'https://github.com/Dumspy/dotfiles',
        },
        {
            name: 'auxbot',
            description: 'TypeScript bot for auxiliary tasks',
            language: 'TypeScript',
            stars: 0,
            url: 'https://github.com/Dumspy/auxbot',
        },
        {
            name: 'auxlink',
            description: 'Link management utility',
            language: 'TypeScript',
            stars: 0,
            url: 'https://github.com/Dumspy/auxlink',
        },
        {
            name: 'k8s-manifest',
            description: 'Kubernetes manifests for deployment configurations',
            language: 'YAML',
            stars: 0,
            url: 'https://github.com/Dumspy/k8s-manifest',
        },
        {
            name: 'APRaidUtils',
            description: 'Lua utility for addon development',
            language: 'Lua',
            stars: 0,
            url: 'https://github.com/Dumspy/APRaidUtils',
        },
    ] as const,
}
