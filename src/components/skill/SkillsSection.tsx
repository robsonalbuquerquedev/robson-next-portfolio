"use client";

import { skills } from "@/data/SkillData";

export default function SkillsSection() {
    return (
        <section
            id="skills"
            aria-labelledby="skills-title"
            className="py-16"
        >
            <div className="max-w-4xl mx-auto text-center">

                <h2
                    id="skills-title"
                    className="
                        text-3xl font-bold mb-6
                        bg-gradient-to-r from-emerald-300 to-sky-300
                        bg-clip-text text-transparent
                    "
                >
                    Minhas Habilidades
                </h2>

                <p className="text-white/80 max-w-2xl mx-auto mb-10">
                    Tecnologias e ferramentas que utilizo para construir aplicações modernas,
                    performáticas e escaláveis.
                </p>

                {/* GRID DE SKILLS */}
                <div
                    className="
                        grid grid-cols-2
                        sm:grid-cols-3
                        md:grid-cols-4
                        lg:grid-cols-5
                        gap-4
                    "
                >
                    {skills.map((skill) => {
                        const Icon = skill.icon;

                        return (
                            <div
                                key={skill.name}
                                className="
                px-4 py-3
                rounded-xl
                bg-white/10 border border-white/20
                backdrop-blur-sm
                shadow-md
                text-white
                font-medium
                transition-all
                hover:bg-white/20
                hover:-translate-y-1
                flex items-center justify-center gap-2
            "
                            >
                                <Icon className="w-6 h-6" />
                                <span>{skill.name}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
