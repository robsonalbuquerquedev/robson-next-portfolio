import AboutHeroSplit from "@/components/hero/AboutHeroSplit";
import SkillsSection from "@/components/skill/SkillsSection";
import ProjectsSection from "@/components/projeto/ProjectsSection";
import CertificatesSection from "@/components/certificado/CertificatesSection";
import ContactHeroSplit from "@/components/hero/ContactHeroSplit";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Robson Albuquerque | Desenvolvedor Front-End & Analista de Sistemas",
  description:
    "Portfólio profissional de Robson Albuquerque, Desenvolvedor Front-End e Analista de Sistemas. Projetos, habilidades, certificados e informações de contato com foco em desenvolvimento web moderno.",

  keywords: [
    "Robson Albuquerque",
    "Desenvolvedor Front-End",
    "Desenvolvedor Web",
    "Desenvolvedor React",
    "Portfólio Next.js",
    "Analista de Sistemas",
    "Desenvolvedor de Software",
    "JavaScript",
    "TypeScript",
    "Portfólio"
  ],

  metadataBase: new URL("https://robson-next-portfolio.vercel.app"),

  alternates: {
    canonical: "https://robson-next-portfolio.vercel.app",
  },

  openGraph: {
    title: "Robson Albuquerque | Desenvolvedor Front-End",
    description:
      "Explore projetos, habilidades e certificados de Robson Albuquerque, com foco em desenvolvimento Front-End moderno.",
    url: "https://robson-next-portfolio.vercel.app",
    siteName: "Portfólio Robson Albuquerque",
    locale: "pt_BR",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <>
      <AboutHeroSplit />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactHeroSplit />
    </>
  );
}
