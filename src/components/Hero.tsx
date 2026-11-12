import { heroFacts, links } from "@/content/site";
import { ButtonLink, Container, Eyebrow, ImagePlaceholder, TextLink } from "./ui";

export function Hero() {
  return (
    <section>
      <Container className="grid items-center gap-14 pb-22 pt-14 lg:grid-cols-[1.4fr_1fr]">
        <div className="flex flex-col gap-7">
          <Eyebrow>Social media e design para empresas e marcas pessoais</Eyebrow>
          <h1 className="text-[clamp(40px,6vw,68px)] font-bold leading-[1.05] tracking-[-0.02em]">
            Você não abriu sua empresa para virar social media.
          </h1>
          <p className="max-w-[540px] text-xl text-soft">
            Enquanto você cuida do seu negócio, eu cuido da sua presença no digital. Com
            estratégia, com a sua essência e sem conteúdo genérico.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <ButtonLink href={links.whatsapp}>Quero conversar no WhatsApp</ButtonLink>
            <TextLink href={links.formSocial} className="px-2 py-4 text-base">
              Prefiro preencher o diagnóstico
            </TextLink>
          </div>
          <ul className="flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-5 text-sm text-muted">
            {heroFacts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </div>
        <ImagePlaceholder
          ratio="4/5"
          className="mx-auto w-full max-w-[420px] rounded-[28px] text-[15px]"
          label="[FOTO DA DANI — retrato vertical, fundo escuro ou roxo]"
        />
      </Container>
    </section>
  );
}
