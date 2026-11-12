import { testimonials } from "@/content/site";
import { Container, SectionHeader } from "./ui";

export function Testimonials() {
  return (
    <section className="bg-surface">
      <Container className="flex flex-col gap-12 py-24">
        <SectionHeader eyebrow="Quem trabalha com a Dani" title="Clientes que se sentem ouvidas." />
        <ul className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <li key={item.text}>
              <figure className="flex h-full flex-col justify-between gap-5 rounded-3xl bg-ink p-8">
                <blockquote className="text-lg leading-normal">“{item.text}”</blockquote>
                <figcaption className="text-sm text-muted">{item.author}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
