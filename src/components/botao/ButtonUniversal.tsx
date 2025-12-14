"use client";

interface ButtonUniversalProps {
    label: string;
    variant: "download" | "external" | "scroll";
    href: string; // pode ser arquivo, link externo ou id interno
    icon?: React.ReactNode;
}

export default function ButtonUniversal({
    label,
    variant,
    href,
    icon,
}: ButtonUniversalProps) {
    // Estilo base do botão
    const baseStyle = `
        inline-flex items-center gap-2
        px-5 py-3
        rounded-xl
        font-medium
        text-white
        bg-white/10 hover:bg-white/20
        border border-white/20
        backdrop-blur-sm
        transition-all
        cursor-pointer
        shadow-md
    `;

    /** DOWNLOAD */
    if (variant === "download") {
        return (
            <a
                href={href}
                download
                className={baseStyle}
            >
                {icon} {label}
            </a>
        );
    }

    /** LINK EXTERNO */
    if (variant === "external") {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={baseStyle}
            >
                {icon} {label}
            </a>
        );
    }

    /** SCROLL INTERNO */
    if (variant === "scroll") {
        const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            const section = document.querySelector(href);
            section?.scrollIntoView({ behavior: "smooth" });
        };

        return (
            <button onClick={handleScroll} className={baseStyle}>
                {icon} {label}
            </button>
        );
    }

    return null;
}
