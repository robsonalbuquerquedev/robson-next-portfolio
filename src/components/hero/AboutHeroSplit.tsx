"use client";

import Image from "next/image";
import TypewriterText from "@/components/cursor/TypewriterText";
import ButtonUniversal from "@/components/botao/ButtonUniversal";
import SocialLinks from "@/components/social/SocialLinks";
import { FileText, Globe, Phone } from "lucide-react";

export default function AboutHeroSplit() {
    return (
        <section
            id="about"
            className="
                grid 
                grid-cols-1 md:grid-cols-2
                gap-10
                items-center
                py-10
            "
        >
            {/* Texto */}
            <article className="space-y-6 relative">
                {/* Cabeçalho */}
                <header className="space-y-2">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Olá, meu nome é{" "}
                        <span className="bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-transparent">
                            Robson Albuquerque
                        </span>
                    </h1>

                    {/* Texto digitando */}
                    <TypewriterText text="Front-End • UI • Performance" />
                </header>

                {/* Descrição */}
                <section className="space-y-4 text-white/80">
                    <p className="text-white/80 text-lg md:text-xl max-w-prose">
                        Sou desenvolvedor especializado em construir experiências digitais modernas,
                        rápidas e elegantes. Minha missão é transformar ideias em interfaces funcionais
                        e visualmente atraentes, sempre priorizando qualidade, acessibilidade e
                        desempenho.
                    </p>

                    <p className="text-white/70">
                        Com experiência em Next.js, React, TypeScript e boas práticas de front-end,
                        busco criar soluções que realmente fazem a diferença.
                    </p>
                </section>

                {/* Ações */}
                <div className="flex flex-wrap gap-4 pt-2">
                    <ButtonUniversal
                        label="Download CV"
                        variant="download"
                        href="/robson-cv.pdf"
                        icon={<FileText size={18} />}
                    />

                    <ButtonUniversal
                        label="Ver Online"
                        variant="external"
                        href="https://robson-dev-cv.vercel.app/"
                        icon={<Globe size={18} />}
                    />

                    <ButtonUniversal
                        label="Contato"
                        variant="scroll"
                        href="#contact"
                        icon={<Phone size={18} />}
                    />
                </div>

                {/* Links sociais */}
                <footer className="pt-4">
                    <SocialLinks />
                </footer>
            </article>

            {/* Imagem */}
            <div className="flex justify-center md:justify-end">
                <Image
                    src="/robson.png"
                    alt="Foto de Robson Albuquerque"
                    width={400}
                    height={400}
                    className="
                        rounded-2xl
                        object-cover
                        shadow-xl
                        border border-white/10
                    "
                    priority
                />
            </div>
        </section>
    );
}
