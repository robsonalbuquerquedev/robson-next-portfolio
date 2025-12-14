import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";

export const metadata: Metadata = {
  title: {
    default: "Robson Albuquerque | Desenvolvedor Front-End",
    template: "%s | Robson Albuquerque",
  },

  description:
    "Portfólio profissional de Robson Albuquerque, Desenvolvedor Front-End e Analista de Sistemas, com foco em desenvolvimento web moderno.",

  metadataBase: new URL("https://robson-next-portfolio.vercel.app"),

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <MainLayout>
          <main>{children}</main>
        </MainLayout>
      </body>
    </html>
  );
}
