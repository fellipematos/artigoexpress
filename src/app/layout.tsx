import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/providers/next-ui";

export const metadata: Metadata = {
  title: "Crie artigos em minutos utilizando IA.",
  description: "Com o poder da IA, gere conteúdo otimizado e relevante para seu Blog ou LinkedIn de forma rápida e personalizada. Deixe a tecnologia trabalhar para você enquanto foca no que realmente importa: o seu negócio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
