"use client";

import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";

interface CertificateCardProps {
    title: string;
    logo: string; // logo path (public folder) or external link
    description: string;
    link: string; // public Drive link
}

const CertificateCard: FC<CertificateCardProps> = ({ title, logo, description, link }) => {
    return (
        <motion.article initial={{ opacity: 0, y: 20 }}
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
            {/* Logo */}
            <div className="flex items-center gap-3">
                <Image
                    src={logo}
                    alt={`${title} logo`}
                    width={40}
                    height={40}
                    className="rounded-md"
                />
                <h4 className="text-lg font-semibold 
                        bg-gradient-to-r from-emerald-300 to-sky-300
                        bg-clip-text text-transparent">{title}</h4>
            </div>

            {/* Conteúdo */}
            <div className="mt-4 space-y-1">
                {/* Description */}
                <p className="text-sm text-white/70">
                    {description}
                </p>
                {/* Button */}
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/70 hover:text-white transition cursor-pointer"
                >
                    Ver Certificado
                </a>
            </div>
        </motion.article>
    );
};

export default CertificateCard;
