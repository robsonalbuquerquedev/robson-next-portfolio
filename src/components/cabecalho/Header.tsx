"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/navegacao/Navigation";
import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/40 border-b border-white/10">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between"
            >
                {/* Logo / Branding */}
                <Link
                    href="/"
                    className="text-xl font-bold bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-transparent"
                >
                    Robson.dev
                </Link>

                {/* Navigation Component */}
                <Navigation />
            </motion.div>
        </header>
    );
}
