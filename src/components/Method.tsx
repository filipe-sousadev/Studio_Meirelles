import { steps } from "@/content/site";
import { Container, SectionHeader } from "./ui";

export function Method() {
  return (
    <section id="metodo" className="scroll-mt-6">
      <Container className="flex flex-col gap-12 py-24">
        <SectionHeader
          eyebrow="Como funciona"
          title="O trabalho começa antes de qualquer conteúdo ser publicado."
        />
        <ol className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="flex flex-col gap-2.5 border-t-[3px] border-pink pt-6">
              <span aria-hidden="true" className="font-display text-[44px] leading-none text-pink">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[22px] font-bold leading-snug">{step.title}</h3>
              <p className="text-base text-soft">{step.text}</p>
            </li>
          ))}
        </ol>
        <p className="max-w-[900px] text-[clamp(20px,2.6vw,28px)] font-semibold leading-[1.35]">
          Eu cuido da estratégia, da criação e da execução. Você traz o que ninguém mais tem:{" "}
          <span className="text-pink">sua história, sua expertise e sua essência.</span>
        </p>
      </Container>
    </section>
  );
}
