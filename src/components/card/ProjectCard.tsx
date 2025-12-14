"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    url: string;
    github?: string;
    technologies: string[];
}

export default function ProjectCard({
    title,
    description,
    image,
    url,
    github,
    technologies,
}: ProjectCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="
                group relative overflow-hidden rounded-2xl border
                bg-gradient-to-br from-white/5 to-white/0
                p-4 backdrop-blur-md
                shadow-lg shadow-black/30
                hover:shadow-xl hover:shadow-black/40
                transition-all duration-300
            "
        >
            {/* Imagem */}
            <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* Conteúdo */}
            <div className="mt-4 space-y-1">
                <h3
                    className="
                        text-xl font-semibold 
                        bg-gradient-to-r from-emerald-300 to-sky-300
                        bg-clip-text text-transparent
                    "
                >
                    {title}
                </h3>

                <p className="text-white/70 text-sm leading-relaxed">
                    {description}
                </p>
            </div>

            {/* Tecnologias */}
            <ul className="flex flex-wrap gap-2 mt-4">
                {technologies.map((tech) => (
                    <li
                        key={tech}
                        className="text-xs px-2 py-1 rounded-md border bg-white/10 text-white/70"
                    >
                        {tech}
                    </li>
                ))}
            </ul>

            {/* Ações */}
            <div className="flex items-center justify-between mt-5">
                {/* GitHub */}
                {github && (
                    <button
                        onClick={() =>
                            window.open(github, "_blank", "noopener,noreferrer")
                        }
                        className="flex items-center gap-2 text-white/70 hover:text-white transition cursor-pointer"
                    >
                        <Github size={18} />
                        <span className="text-sm">GitHub</span>
                    </button>
                )}

                {/* Link para visitar o site */}
                <button
                    onClick={() =>
                        window.open(url, "_blank", "noopener,noreferrer")
                    }
                    className="flex items-center gap-2 text-white/70 hover:text-white transition cursor-pointer"
                >
                    <ExternalLink size={18} />
                    <span className="text-sm">Visitar</span>
                </button>
            </div>

            {/* Glow no hover */}
            <div
                className="
                    absolute inset-0 rounded-2xl
                    bg-gradient-to-r from-emerald-400/10 to-sky-400/10
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                    pointer-events-none
                "
            />
        </motion.article>
    );
}
