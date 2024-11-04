import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/page";

export const metadata: Metadata = {
  title: "Geek shop",
  description: "Melhor loja geek de SP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
