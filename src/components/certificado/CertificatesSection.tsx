import CertificateCard from "@/components/card/CertificateCard";

export default function CertificatesSection() {
    return (
        <section
            id="certificates"
            aria-labelledby="certificates-title"
            className="space-y-8"
        >
            {/* Title */}
            <header className="text-center space-y-2">
                <h2
                    id="certificates-title"
                    className="text-3xl font-bold bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-transparent"
                >
                   Meus Certificados
                </h2>

                <p className="text-white/70 max-w-xl mx-auto">
                    Um conjunto de cursos e qualificações que fortalecem minha constante evolução na área da tecnologia.
                </p>
            </header>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <CertificateCard
                    title="Python"
                    logo="/logos/fp.png"
                    description="Um curso introdutório em Python, com foco nos fundamentos da linguagem, lógica de programação e boas práticas."
                    link="https://drive.google.com/file/d/1fjuT_ZnIuMnI5xmmv9XcXbRL_yq2QT1K/view?usp=sharing"
                />

                <CertificateCard
                    title="Qualificação em Inteligência Artificial"
                    logo="/logos/if.png"
                    description="Um curso de extensão focado nos fundamentos da IA e aprendizado de máquina."
                    link="https://drive.google.com/file/d/1sP85RbXeHIG6nmPOpQI4b6k8ktS2hjVZ/view?usp=sharing"
                />

                <CertificateCard
                    title="Internet das Coisas aplicada para resolução de desafios"
                    logo="/logos/ep.png"
                    description="Um curso que explora como dispositivos conectados podem coletar dados e se comunicar."
                    link="https://drive.google.com/file/d/1BBFYdozCN_pGlK5yUHex87427fhgTD0r/view?usp=sharing"
                />

                <CertificateCard
                    title="Descomplica que Destrava 1.0 - Gabi Modesto Teacher"
                    logo="/logos/ht.png"
                    description="Um curso prático para desbloquear de vez a fluência no idioma da língua inglesa."
                    link="https://drive.google.com/file/d/1h-BP5_i0NMhpoR0AbMt21Q1v10JaDIY4/view?usp=sharing"
                />

                <CertificateCard
                    title="Detecção Inteligente de Intrusão em Redes"
                    logo="/logos/if.png"
                    description="Um curso que aborda conceitos de segurança da informação."
                    link="https://drive.google.com/file/d/11l7FNw1KELoBWFoG3wydnSoBLdfa7Q8k/view?usp=sharing"
                />

                {/* Add more cards here */}
            </div>
        </section>
    );
}
