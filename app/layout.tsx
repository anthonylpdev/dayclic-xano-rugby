import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Coupe du monde rugby 2023",
  description: "Créer ton équipe de rugby favorite.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-background/primary text-content/primary" lang="fr">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
