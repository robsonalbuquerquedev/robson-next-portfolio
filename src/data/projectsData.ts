export interface ProjectItem {
    title: string;
    description: string;
    url: string;
    technologies: string[];
    image: string;
    github?: string;
}


export const projectsData: ProjectItem[] = [
    {
        title: "Aprender Violão Online",
        description: "O LearningGuitar é uma plataforma educacional desenvolvida com Next.js 14, focada no ensino de violão e teoria musical. O projeto une conteúdo didático, animações com Framer Motion e integrações com Google AdSense e Hotmart para uma experiência moderna e fluida.",
        url: "https://aprenderviolaoonline.com.br",
        technologies: ["Next.js", "React", "TypeScript", "TailwindCSS"],
        image: "/projects/aprenderviolaoonline.png",
        github: "https://github.com/robsonalbuquerquedev/learningguitar.git",
    },
    {
        title: "Cantos JSM",
        description: "O CantosJSM é uma plataforma desenvolvida com Next.js para apoiar ministérios de música na organização de cantos litúrgicos e devocionais. O projeto oferece cantos organizados por momento da missa, com trechos permitidos, tom e cifras opcionais.",
        url: "https://cantosjsm.com.br",
        technologies: ["Next.js", "React", "TypeScript", "TailwindCSS"],
        image: "/projects/cantosjsm.png",
        github: "https://github.com/robsonalbuquerquedev/cantosjsm.git",
    },
    {
        title: "Windly",
        description: "O Windly é uma plataforma educacional focada em front-end moderno, com conteúdos sobre TailwindCSS, Next.js, SEO, HTML semântico, acessibilidade e performance. O projeto reúne exemplos reais, boas práticas e um blog dinâmico sobre desenvolvimento.",
        url: "https://windly.com.br",
        technologies: ["Next.js", "React", "TypeScript", "TailwindCSS"],
        image: "/projects/windly.png",
        github: "https://github.com/robsonalbuquerquedev/windly.git",
    },
    {
        title: "Arte Viva Q",
        description: "Site moderno com animações suaves e design minimalista.",
        url: "https://artevivaq.vercel.app",
        technologies: ["Next.js", "React", "TypeScript", "TailwindCSS"],
        image: "/projects/artevivaq.png",
        github: "https://github.com/robsonalbuquerquedev/artevivaq.git",
    },
    {
        title: "CM Store",
        description: "Loja virtual moderna com layout elegante e responsivo.",
        url: "https://cmstore-gray.vercel.app",
        technologies: ["Next.js", "React", "TypeScript", "TailwindCSS"],
        image: "/projects/cmstore.png",
        github: "https://github.com/robsonalbuquerquedev/cmstore.git",
    },
    {
        title: "English Study Hub",
        description: "Plataforma para estudos de inglês com design limpo.",
        url: "https://englishstudyhub.vercel.app",
        technologies: ["Next.js", "React", "TypeScript", "TailwindCSS"],
        image: "/projects/englishstudyhub.png",
        github: "https://github.com/robsonalbuquerquedev/englishstudyhub.git",
    },
    {
        title: "Estudar Para Concurso",
        description: "Um portal interativo de estudos voltado para candidatos de concursos públicos.",
        url: "https://estudarparaconcurso.vercel.app/",
        technologies: ["Next.js", "React", "TypeScript", "TailwindCSS"],
        image: "/projects/estudarparaconcurso.png",
        github: "https://github.com/robsonalbuquerquedev/estudarparaconcurso.git",
    },
    {
        title: "Learning Basic Computing",
        description: "Descubra o universo da informática de forma divertida e prática.",
        url: "https://learningbasiccomputing.vercel.app/",
        technologies: ["Next.js", "React", "TypeScript", "TailwindCSS"],
        image: "/projects/learningbasiccomputing.png",
        github: "https://github.com/robsonalbuquerquedev/learningbasiccomputing.git",
    },
    {
        title: "Mensageiros do Una",
        description: "Site em desenvolvimento do Clube de Desbravadores Mensageiros do Una.",
        url: "https://mensageiros-do-una-site.vercel.app/",
        technologies: ["Next.js", "React", "TypeScript", "TailwindCSS"],
        image: "/projects/mensageirosdouna.png",
        github: "https://github.com/robsonalbuquerquedev/mensageiros-do-una-site.git",
    },
    {
        title: "Urgência Segura",
        description: "Portal exclusivo para agentes da Guarda Municipal e da Defesa Civil.",
        url: "https://urgencia-segura-web.vercel.app/",
        technologies: ["Next.js", "React", "TypeScript", "TailwindCSS"],
        image: "/projects/urgenciasegura.png",
        github: "https://github.com/robsonalbuquerquedev/urgencia-segura-web.git",
    },
    {
        title: "Grupo de Oração Jovem São Francisco - GOJ",
        description: "Escolha um santo para receber uma mensagem.",
        url: "https://galeria-dos-santos.vercel.app/",
        technologies: ["Next.js", "React", "TypeScript", "TailwindCSS"],
        image: "/projects/escolhaumsanto.png",
        github: "https://github.com/robsonalbuquerquedev/galeria-dos-santos.git",
    },
    {
        title: "DevShowcase",
        description: "Uma coleção de projetos para estudos em front-end.",
        url: "https://robsonalbuquerquedev.github.io/devshowcase/",
        technologies: ["HTML", "CSS", "Sass", "JavaScript"],
        image: "/projects/devshowcase.png",
        github: "https://github.com/robsonalbuquerquedev/devshowcase.git",
    },
];
