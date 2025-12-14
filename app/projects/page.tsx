import type { Metadata } from "next";
import Project from "@/components/projeto/Project";

export const metadata: Metadata = {
    title: "Projetos | Robson Albuquerque",
    description:
        "Conheça os projetos desenvolvidos por Robson Albuquerque, com foco em Front-End, React, Next.js e desenvolvimento web moderno.",

    keywords: [
        "Projetos Front-End",
        "Projetos React",
        "Projetos Next.js",
        "Portfólio de Projetos",
        "Robson Albuquerque",
        "Desenvolvedor Front-End",
        "Desenvolvimento Web"
    ],

    alternates: {
        canonical: "https://robson-next-portfolio.vercel.app/projects",
    },

    openGraph: {
        title: "Projetos | Robson Albuquerque",
        description:
            "Veja projetos reais de Front-End desenvolvidos por Robson Albuquerque utilizando tecnologias modernas.",
        url: "https://robson-next-portfolio.vercel.app/projects",
        siteName: "Portfólio Robson Albuquerque",
        locale: "pt_BR",
        type: "website",
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function ProjectPage() {
    return <Project />;
}
