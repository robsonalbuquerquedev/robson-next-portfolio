"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projectsData } from "@/data/projectsData";
import ProjectCard from "@/components/card/ProjectCard";

export default function ProjectsPage() {
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(projectsData.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProjects = projectsData.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    return (
        <div className="min-h-screen py-20 text-white max-w-6xl mx-auto px-4 space-y-16">

            {/* 🔙 Voltar */}
            <Link
                href="/"
                className="inline-flex items-center text-white/70 hover:text-white transition mb-6"
            >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Voltar para início
            </Link>

            {/* Cabeçalho */}
            <header className="text-center space-y-4">
                <h1 className="text-4xl font-bold">Projetos</h1>
                <p className="text-white/70 max-w-2xl mx-auto">
                    Aqui estão todos os projetos desenvolvidos utilizando Next.js,
                    React, TypeScript e outras tecnologias modernas.
                </p>
            </header>

            {/* Lista de Projetos */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {currentProjects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        github={project.github}
                        url={project.url}
                        technologies={project.technologies}
                    />
                ))}
            </div>

            {/* Paginação com números */}
            <div className="flex justify-center items-center gap-3">

                {/* Anterior */}
                <button
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                    className={`px-3 py-2 rounded-lg border 
                        ${currentPage === 1
                            ? "opacity-30 cursor-not-allowed"
                            : "hover:bg-white/10"
                        } transition cursor-pointer`}
                >
                    ←
                </button>

                {/* Números */}
                <div className="flex gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`px-4 py-2 rounded-lg border transition
                                    ${currentPage === page
                                        ? "bg-white/20 text-white border-white"
                                        : "text-white/70 hover:bg-white/10"
                                    }
                                cursor-pointer`}
                            >
                                {page}
                            </button>
                        )
                    )}
                </div>

                {/* Próxima */}
                <button
                    onClick={() =>
                        setCurrentPage((p) => Math.min(p + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className={`px-3 py-2 rounded-lg border 
                        ${currentPage === totalPages
                            ? "opacity-30 cursor-not-allowed"
                            : "hover:bg-white/10"
                        } transition cursor-pointer`}
                >
                    →
                </button>
            </div>
        </div>
    );
}
