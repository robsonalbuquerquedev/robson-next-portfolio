"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ProjectCard from "@/components/card/ProjectCard";
import { projectsData } from "@/data/projectsData";

export default function ProjectsSection() {
    // Mostra apenas os 3 primeiros projetos
    const featuredProjects = projectsData.slice(0, 3);

    return (
        <section
            id="projects"
            aria-labelledby="projects-title"
            className="py-16"
        >
            <div className="max-w-5xl mx-auto px-4 space-y-12">

                {/* Cabeçalho */}
                <header className="text-center space-y-4">
                    <h2
                        id="projects-title"
                        className="text-4xl font-bold bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-transparent"
                    >
                        Projetos em Destaque
                    </h2>
                    <p className="text-white/70 max-w-xl mx-auto">
                        Uma seleção dos meus projetos mais importantes, desenvolvidos com foco em performance,
                        acessibilidade e experiência do usuário.
                    </p>
                </header>

                {/* Grid com ProjectCard */}
                <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {featuredProjects.map((project, index) => (
                        <motion.li
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                image={project.image}
                                github={project.github}
                                url={project.url}
                                technologies={project.technologies}
                            />
                        </motion.li>
                    ))}
                </ul>

                {/* Botão “Ver todos” */}
                <div className="text-center">
                    <Link
                        href="/projects"
                        className="inline-block px-6 py-3 rounded-xl bg-white/10 border border-white/20
                        text-white font-medium hover:bg-white/20 transition shadow-lg"
                    >
                        Ver todos os projetos →
                    </Link>
                </div>

            </div>
        </section>
    );
}
