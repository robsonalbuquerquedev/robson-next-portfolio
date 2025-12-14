"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

/**
 * ContactHeroSplit.tsx
 * React component (single-file) for a contact section split in two columns.
 * - Tailwind CSS for styling
 * - Semantic HTML5
 * - Accessible labels, aria-live regions, and focus management
 * - Client-side validation (name, email, message)
 * - Submit via FormSubmit AJAX endpoint (no backend required)
 * - Submission states: idle, sending, success, error
 * - Simple Framer Motion entrance animations
 *
 * Usage:
 * <ContactHeroSplit />
 *
 * Important: Replace the endpoint URL if you need a different inbox.
 */

const FORM_ENDPOINT =
    "https://formsubmit.co/ajax/00e62b2eb50670b440cf470c86da243f"; // provided by user

export default function ContactHeroSplit() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sending, setSending] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const nameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const messageRef = useRef<HTMLTextAreaElement | null>(null);

    // Basic client-side validation
    function validate() {
        if (!name.trim())
            return { ok: false, field: "name", message: "Por favor, digite seu nome." };

        if (!email.trim())
            return { ok: false, field: "email", message: "Por favor, digite seu email." };

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if (!emailRegex.test(email))
            return { ok: false, field: "email", message: "Por favor, digite um email válido." };

        if (!message.trim() || message.trim().length < 10)
            return { ok: false, field: "message", message: "A mensagem deve ter pelo menos 10 caracteres." };

        return { ok: true, field: null, message: "" }; // <-- resolvido
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (sending) return;

        const v = validate();
        if (!v.ok) {
            setErrorMsg(v.message);
            setStatus("error");
            // focus the relevant field
            if (v.field === "name") nameRef.current?.focus();
            if (v.field === "email") emailRef.current?.focus();
            if (v.field === "message") messageRef.current?.focus();
            return;
        }

        setSending(true);
        setStatus("idle");
        setErrorMsg("");

        try {
            const formData = new FormData();
            formData.append("name", name.trim());
            formData.append("email", email.trim());
            formData.append("message", message.trim());

            const res = await fetch(FORM_ENDPOINT, {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (!res.ok) {
                const text = await res.text();
                throw new Error(`Request failed: ${res.status} ${text}`);
            }

            const data = await res.json();
            // FormSubmit returns `{success: true, message: '...'}` usually
            if (data.success === true || res.status === 200) {
                setStatus("success");
                setName("");
                setEmail("");
                setMessage("");
                // move focus to the success message for screen readers
                const el = document.getElementById("contact-status");
                el?.focus();
            } else {
                throw new Error(data.message || "Unknown response from the form provider");
            }
        } catch (err: any) {
            setStatus("error");
            setErrorMsg(err?.message || "An unexpected error occurred.");
            const el = document.getElementById("contact-status");
            el?.focus();
        } finally {
            setSending(false);
        }
    }

    return (
        <section
            id="contact"
            aria-labelledby="contact-heading"
            className="mt-24 bg-gradient-to-b from-white/5 to-white/2 rounded-2xl p-6 md:p-12 lg:p-16"
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left column - text */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h2 id="contact-heading" className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-transparent">
                            Vamos construir algo juntos
                        </h2>
                        <p className="text-lg text-gray-300 max-w-xl">
                            Tem um projeto, uma oportunidade ou apenas quer dizer olá? Envie uma mensagem e entrarei em contato — geralmente dentro de um ou dois dias úteis.
                        </p>
                        <dl className="mt-4 text-sm text-gray-400">
                            <div>
                                <dt className="font-semibold">Email</dt>
                                <dd>
                                    <a href="robson.albuquerque.docs@gmail.com" className="underline">
                                        robson.albuquerque.docs@gmail.com
                                    </a>
                                </dd>
                            </div>
                            <div className="mt-2">
                                <dt className="font-semibold">Disponibilidade</dt>
                                <dd>Aberto a trabalhos freelance &amp; e colaborações</dd>
                            </div>
                        </dl>
                    </motion.div>

                    {/* Right column - form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-white/5 border border-white/6 rounded-2xl p-6 md:p-8"
                    >
                        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                            <div>
                                <label htmlFor="contact-name" className="block text-sm font-medium">
                                    Nome
                                </label>
                                <input
                                    ref={nameRef}
                                    id="contact-name"
                                    name="name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    aria-required="true"
                                    aria-describedby="name-help"
                                    className="mt-1 block w-full rounded-lg border-transparent bg-white/6 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300 px-4 py-2 outline-none"
                                />
                                <p id="name-help" className="sr-only">
                                    Digite seu nome completo.
                                </p>
                            </div>

                            <div>
                                <label htmlFor="contact-email" className="block text-sm font-medium">
                                    Email
                                </label>
                                <input
                                    ref={emailRef}
                                    id="contact-email"
                                    name="email"
                                    type="email"
                                    inputMode="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    aria-required="true"
                                    aria-describedby="email-help"
                                    className="mt-1 block w-full rounded-lg border-transparent bg-white/6 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300 px-4 py-2 outline-none"
                                />
                                <p id="email-help" className="sr-only">
                                    Usaremos isso para responder à sua mensagem.
                                </p>
                            </div>

                            <div>
                                <label htmlFor="contact-message" className="block text-sm font-medium">
                                    Menssagem
                                </label>
                                <textarea
                                    ref={messageRef}
                                    id="contact-message"
                                    name="message"
                                    rows={5}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    aria-required="true"
                                    aria-describedby="message-help"
                                    className="mt-1 block w-full rounded-lg border-transparent bg-white/6 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300 px-4 py-2 outline-none"
                                />
                                <p id="message-help" className="sr-only">
                                    Fale um pouco sobre seu projeto ou dúvida (no mínimo 10 caracteres).
                                </p>
                            </div>

                            <div className="flex items-center justify-between">
                                <button
                                    type="submit"
                                    className="inline-flex items-center gap-3 rounded-lg px-4 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-300 disabled:opacity-60 cursor-pointer"
                                    disabled={sending}
                                >
                                    {sending ? (
                                        // spinner (CSS only)
                                        <span className="inline-block h-5 w-5 animate-spin border-2 border-t-transparent rounded-full" aria-hidden></span>
                                    ) : null}
                                    <span>{sending ? "Enviando..." : "Enviar mensagem"}</span>
                                </button>

                                <div className="text-sm text-gray-400">ou envie-me um email diretamente</div>
                            </div>

                            {/* Status region */}
                            <div
                                id="contact-status"
                                tabIndex={-1}
                                aria-live="polite"
                                className="mt-2 min-h-[1.5rem] text-sm"
                            >
                                {status === "success" ? (
                                    <p className="text-emerald-300">Obrigado — sua mensagem foi enviada com sucesso.</p>
                                ) : null}

                                {status === "error" ? (
                                    <p className="text-rose-300">{errorMsg || "Algo deu errado. Por favor, tente novamente."}</p>
                                ) : null}
                            </div>

                            {/* Hidden honeypot in case FormSubmit uses simple anti-spam */}
                            <input type="text" name="_honey" style={{ display: "none" }} />
                            {/* Optionally set a redirect after success (FormSubmit supports _next) */}
                            <input type="hidden" name="_template" value="table" />
                        </form>

                        {/* Small accessibility note */}
                        <p className="mt-4 text-xs text-white/70">
                            Ao enviar, você concorda em ser contatado pelo email fornecido. Sem spam — prometemos.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
