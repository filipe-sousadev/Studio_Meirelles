import type { Metadata } from "next";
// Fontes servidas pelo próprio site (pacotes @fontsource), sem depender do Google Fonts.
import "@fontsource/sora/latin-400.css";
import "@fontsource/sora/latin-600.css";
import "@fontsource/sora/latin-700.css";
import "@fontsource/anton/latin-400.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Studio Meirelles — Social media e design para empresas",
  description:
    "Enquanto você cuida do seu negócio, o Studio Meirelles cuida da sua presença no digital: estratégia, conteúdo e design para empresas e marcas pessoais.",
  openGraph: {
    title: "Studio Meirelles — Social media e design para empresas",
    description:
      "Estratégia, conteúdo e design para empresas e marcas pessoais que querem ser encontradas por quem precisa delas.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="antialiased">
      <body className="font-sans text-[17px] leading-relaxed">{children}</body>
    </html>
  );
}
