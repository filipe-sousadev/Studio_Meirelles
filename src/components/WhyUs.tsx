import { here, notHere } from "@/content/site";
import { Container, SectionHeader } from "./ui";

export function WhyUs() {
  return (
    <section className="bg-surface">
      <Container className="flex flex-col gap-12 py-24">
        <SectionHeader
          eyebrow="Por que o Studio Meirelles"
          title="Eu quero ser sua social media. Mas não qualquer uma."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-5 rounded-3xl bg-ink p-9">
            <h3 className="text-[22px] font-bold text-muted">O que você não vai encontrar aqui</h3>
            <ul className="flex flex-col text-soft">
              {notHere.map((item) => (
                <li key={item} className="border-b border-line py-4 first:pt-0 last:border-0 last:pb-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-5 rounded-3xl bg-paper p-9 text-plum">
            <h3 className="text-[22px] font-bold text-berry">O que você encontra</h3>
            <ul className="flex flex-col text-plum-soft">
              {here.map((item) => (
                <li
                  key={item}
                  className="border-b border-paper-line py-4 first:pt-0 last:border-0 last:pb-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
