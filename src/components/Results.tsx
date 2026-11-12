import { resultQuote, results } from "@/content/site";
import { Container, SectionHeader } from "./ui";

export function Results() {
  return (
    <section id="resultados" className="scroll-mt-6">
      <Container className="flex flex-col gap-12 py-24">
        <SectionHeader
          eyebrow="Resultados de clientes"
          title="Conteúdo com estratégia chega em quem precisa de você."
          lead="Números reais de publicações criadas pelo studio para clientes."
        />
        <ul className="grid gap-6 md:grid-cols-3">
          {results.map((item) => (
            <li
              key={item.value}
              className="flex flex-col gap-2 rounded-3xl border border-line bg-surface p-8"
            >
              <span className="font-display text-[64px] leading-none text-pink">{item.value}</span>
              <span className="text-lg font-semibold">{item.label}</span>
              <span className="text-[15px] text-muted">{item.detail}</span>
            </li>
          ))}
        </ul>
        <figure className="flex flex-col gap-4 rounded-[28px] bg-pink p-[clamp(28px,5vw,56px)] text-ink">
          <blockquote className="text-[clamp(26px,3.6vw,42px)] font-bold leading-[1.2] tracking-[-0.01em]">
            “{resultQuote.text}”
          </blockquote>
          <figcaption className="text-base font-semibold">{resultQuote.author}</figcaption>
        </figure>
      </Container>
    </section>
  );
}
