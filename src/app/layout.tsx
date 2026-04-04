import type { Metadata } from "next";
import { LanguageProvider } from '@/context/LanguageContext';
import "./globals.css";

export const metadata: Metadata = {
  title: "Chá de Casa Nova",
  description: "Lista de presentes para nossa casa nova",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}