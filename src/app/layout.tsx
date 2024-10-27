import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "App do Eduardo e Amigos",
  description: "Eduardo e 4 amigos ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>

        {children}
        
      </body>
    </html>
  );
}
