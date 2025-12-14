"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navigation() {
    const [open, setOpen] = useState(false);

    const links = [
        { href: "#about", label: "Sobre" },
        { href: "#skills", label: "Habilidades" },
        { href: "#projects", label: "Projetos" },
        { href: "#certificates", label: "Certificados" },
        { href: "#contact", label: "Contato" },
    ];

    return (
        <nav aria-label="Main Navigation" className="relative">
            {/* Desktop Navigation */}
            <ul className="hidden md:flex md:items-center md:gap-8">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className="text-white/80 hover:text-white transition font-medium"
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-white"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
            >
                <Menu size={28} />
            </button>

            {/* Mobile Sidebar Navigation */}
            <AnimatePresence>
                {open && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)}
                        />

                        {/* Sidebar */}
                        <motion.aside
                            className="
                                fixed top-0 right-0 
                                h-full w-64 
                                bg-neutral-900/95 
                                backdrop-blur-2xl
                                border-l border-white/10 
                                p-6 
                                shadow-xl 
                                z-50 
                                flex flex-col
                            "
                            initial={{ x: "100%" }}
                            animate={{ x: "0%" }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                        >
                            {/* Close Button */}
                            <button
                                className="text-white mb-6 self-end"
                                onClick={() => setOpen(false)}
                                aria-label="Close menu"
                            >
                                <X size={28} />
                            </button>

                            {/* Links */}
                            <nav
                                className="
        bg-white/5 
        p-4 
        rounded-xl 
        border border-white/10 
        backdrop-blur-xl
    "
                            >
                                <ul className="flex flex-col gap-5">
                                    {links.map((link) => (
                                        <motion.li
                                            key={link.href}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => setOpen(false)}
                                                className="text-white/90 hover:text-white text-lg font-medium transition"
                                            >
                                                {link.label}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                            </nav>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}
