"use client";

import { Github, Linkedin, Instagram, Landmark } from "lucide-react";

export default function SocialLinks() {
    return (
        <section
            aria-label="Redes sociais"
            className="
                flex flex-wrap
                items-center
                gap-4
                pt-6
            "
        >
            {/* LinkedIn */}
            <a
                href="https://linkedin.com/in/robson-monteiro-de-albuquerque-8b3853230/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                    p-3
                    rounded-xl
                    bg-white/10
                    border border-white/20
                    hover:bg-white/20
                    transition-all
                    backdrop-blur-sm
                    shadow-md
                "
                aria-label="LinkedIn"
            >
                <Linkedin size={22} className="text-white" />
            </a>

            {/* GitHub */}
            <a
                href="https://github.com/robsonalbuquerquedev"
                target="_blank"
                rel="noopener noreferrer"
                className="
                    p-3
                    rounded-xl
                    bg-white/10
                    border border-white/20
                    hover:bg-white/20
                    transition-all
                    backdrop-blur-sm
                    shadow-md
                "
                aria-label="GitHub"
            >
                <Github size={22} className="text-white" />
            </a>

            {/* Instagram */}
            <a
                href="https://instagram.com/robson.albuquerque_cm/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                    p-3
                    rounded-xl
                    bg-white/10
                    border border-white/20
                    hover:bg-white/20
                    transition-all
                    backdrop-blur-sm
                    shadow-md
                "
                aria-label="Instagram"
            >
                <Instagram size={22} className="text-white" />
            </a>

            {/* Lattes */}
            <a
                href="http://lattes.cnpq.br/8177670965841498"
                target="_blank"
                rel="noopener noreferrer"
                className="
                    p-3
                    rounded-xl
                    bg-white/10
                    border border-white/20
                    hover:bg-white/20
                    transition-all
                    backdrop-blur-sm
                    shadow-md
                "
                aria-label="Currículo Lattes"
            >
                <Landmark size={22} className="text-white" />
            </a>
        </section>
    );
}
