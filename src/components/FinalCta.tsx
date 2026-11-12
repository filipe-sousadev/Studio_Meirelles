import { links } from "@/content/site";
import { ButtonLink, Container, TextLink } from "./ui";

export function FinalCta() {
  return (
    <section>
      <Container className="flex flex-col items-start gap-7 py-28">
        <h2 className="max-w-[980px] font-display text-[clamp(40px,6.4vw,84px)] uppercase leading-[1.04]">
          Você estudou anos para ser quem é.{" "}
          <span className="text-pink">Isso merece ser visto.</span>
        </h2>
        <p className="max-w-[640px] text-xl text-soft">
          Me conta sobre a sua especialidade e eu te mostro como o seu Instagram pode trazer
          pacientes, sem depender só de indicação.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <ButtonLink href={links.whatsapp} size="lg">
            Quero conversar no WhatsApp
          </ButtonLink>
          <TextLink href={links.formIdentidade} className="px-2 py-4 text-base">
            Quero uma identidade visual
          </TextLink>
        </div>
      </Container>
    </section>
  );
}
