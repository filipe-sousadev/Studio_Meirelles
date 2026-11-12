import { links } from "@/content/site";
import { Container } from "./ui";

const social = [
  { href: links.instagram, label: "Instagram" },
  { href: links.behance, label: "Behance" },
  { href: links.whatsapp, label: "WhatsApp" },
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-8 text-sm text-muted">
        <span>Studio Meirelles · Social media e design · Rio de Janeiro</span>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {social.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="inline-block py-3 text-pink hover:text-pink-hover">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
