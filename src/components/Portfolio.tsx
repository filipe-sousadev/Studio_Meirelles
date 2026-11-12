import Image from "next/image";
import { links, portfolio } from "@/content/site";
import { Container, SectionHeader, ImagePlaceholder, TextLink } from "./ui";

export function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-6">
      <Container className="flex flex-col gap-12 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader eyebrow="Portfólio" title="Marcas que passaram por aqui." />
          <TextLink href={links.behance} className="py-3 text-pink">
            Ver portfólio completo no Behance
          </TextLink>
        </div>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((item) => (
            <li key={item.name}>
              <figure className="flex flex-col gap-3">
                {item.image ? (
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
                    <Image
                      src={item.image}
                      alt={`${item.name}: ${item.kind}`}
                      fill
                      sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <ImagePlaceholder ratio="4/3" className="rounded-[20px]" label={item.placeholder} />
                )}
                <figcaption className="flex flex-col gap-0.5">
                  <span className="font-semibold">{item.name}</span>
                  <span className="text-sm text-muted">{item.kind}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
