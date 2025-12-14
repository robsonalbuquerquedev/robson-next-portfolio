/**
 * MainLayout
 *
 * Base visual global do portfólio.
 * - Responsividade consistente
 * - Background temático (gradiente)
 * - Espaçamento equilibrado
 * - Atmosfera moderna e elegante
 *
 * Não contém header, footer ou textos fixos.
 * Seu propósito é apenas fornecer a "base estética" do site.
 */

import Header from "@/components/cabecalho/Header";
import Footer from "@/components/rodape/Footer";

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <>
            <Header />
            <div
                className="
                min-h-screen
                w-full
                bg-gradient-to-r from-[#1f1c2c] to-[#928dab]
                text-white
                flex
                items-start
                justify-center
                px-4
            "
            >
                <div className="w-full max-w-6xl py-10">
                    {children}
                </div>
            </div>
            <Footer />
        </>
    );
}
