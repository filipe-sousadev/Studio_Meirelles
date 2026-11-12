import type { Metadata } from "next";
// Fontes servidas pelo próprio site (pacotes @fontsource), sem depender do Google Fonts.
import "@fontsource/sora/latin-400.css";
import "@fontsource/sora/latin-600.css";
import "@fontsource/sora/latin-700.css";
import "@fontsource/anton/latin-400.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Studio Meirelles — Social media para profissionais da saúde",
  description:
    "Enquanto você se dedica aos seus pacientes, o Studio Meirelles cuida da sua presença no digital: estratégia, conteúdo e design para profissionais da saúde.",
  openGraph: {
    title: "Studio Meirelles — Social media para profissionais da saúde",
    description:
      "Estratégia, conteúdo e design para profissionais da saúde que querem ser encontradas por quem precisa delas.",
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
