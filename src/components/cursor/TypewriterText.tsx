"use client";
import { useState, useEffect } from "react";

export default function TypewriterText({ text }: { text: string }) {
    const [displayed, setDisplayed] = useState("");

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayed(text.slice(0, index + 1));
            index++;
            if (index === text.length) clearInterval(interval);
        }, 80); // velocidade da digitação

        return () => clearInterval(interval);
    }, [text]);

    return (
        <p className="text-xl md:text-2xl font-semibold text-emerald-300 flex items-center">
            {displayed}
            <span className="ml-1 w-[10px] h-[26px] bg-emerald-300 animate-pulse"></span>
        </p>
    );
}
