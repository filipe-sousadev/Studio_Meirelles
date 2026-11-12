import { links, nav } from "@/content/site";
import { ButtonLink, Container } from "./ui";

export function Header() {
  return (
    <header>
      <Container className="flex flex-wrap items-center justify-between gap-4 py-6">
        <a href="#" className="flex flex-col gap-0.5 no-underline">
          <span className="text-xl font-bold tracking-[0.02em]">Studio Meirelles</span>
          <span className="text-xs uppercase tracking-[0.18em] text-muted">Marketing médico</span>
        </a>
        <nav aria-label="Principal" className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-3 text-[15px] no-underline transition-colors hover:text-pink"
            >
              {item.label}
            </a>
          ))}
          <ButtonLink href={links.whatsapp} size="sm">
            Falar no WhatsApp
          </ButtonLink>
        </nav>
      </Container>
    </header>
  );
}
