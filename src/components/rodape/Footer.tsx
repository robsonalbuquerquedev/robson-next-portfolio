"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative mt-20 border-t border-white/10 bg-gradient-to-b from-black via-gray-900 to-black text-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto px-6 py-16"
            >
                {/* Top Section */}
                <section className="grid md:grid-cols-3 gap-12">
                    {/* Branding */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-transparent">
                            Robson Albuquerque
                        </h2>
                        <p className="text-white/70">
                            Criando experiências digitais com desempenho, clareza e propósito.
                        </p>
                    </div>

                    {/* Quick Navigation */}
                    <nav aria-label="Footer navigation" className="space-y-3">
                        <h3 className="text-lg font-semibold">Navegação</h3>
                        <ul className="space-y-2 text-white/70">
                            <li><Link href="#about" className="hover:text-white transition">Sobre</Link></li>
                            <li><Link href="#skills" className="hover:text-white transition">Habilidades</Link></li>
                            <li><Link href="#projects" className="hover:text-white transition">Projetos</Link></li>
                            <li><Link href="#certificates" className="hover:text-white transition">Certificados</Link></li>
                            <li><Link href="#contact" className="hover:text-white transition">Contato</Link></li>
                        </ul>
                    </nav>

                    {/* Social and Contact */}
                    <section className="space-y-3">
                        <h3 className="text-lg font-semibold">Mídias Sociais</h3>

                        <ul className="space-y-3 text-white/70">
                            <li className="flex items-center gap-3">
                                <Github size={20} />
                                <Link
                                    href="https://github.com/robsonalbuquerquedev"
                                    target="_blank"
                                    className="hover:text-white transition"
                                >
                                    GitHub
                                </Link>
                            </li>

                            <li className="flex items-center gap-3">
                                <Linkedin size={20} />
                                <Link
                                    href="https://linkedin.com/in/robson-monteiro-de-albuquerque-8b3853230/"
                                    target="_blank"
                                    className="hover:text-white transition"
                                >
                                    LinkedIn
                                </Link>
                            </li>

                            <li className="flex items-center gap-3">
                                <Mail size={20} />
                                <a
                                    href="mailto:robson.albuquerque.docs@gmail.com"
                                    className="hover:text-white transition"
                                >
                                    Enviar Email
                                </a>
                            </li>
                        </ul>
                    </section>
                </section>

                {/* Divider */}
                <div className="my-10 border-t border-white/10"></div>

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm"
                >
                    <p>© {new Date().getFullYear()} Robson Albuquerque. Todos os direitos reservados.</p>

                    <p className="text-white/40">
                        Criando com paixão, desempenho e um toque de café expresso ☕
                    </p>
                </motion.div>
            </motion.div>
        </footer>
    );
}
