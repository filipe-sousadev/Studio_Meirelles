import { services } from "@/content/site";
import { Container, SectionHeader } from "./ui";

export function Services() {
  return (
    <section className="bg-paper text-plum">
      <Container className="flex flex-col gap-12 py-24">
        <SectionHeader
          tone="light"
          eyebrow="Serviços"
          title="Do posicionamento ao paciente na agenda."
        />
        <ul className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <li key={service.title} className="flex flex-col gap-3 rounded-3xl bg-white p-8">
              <h3 className="text-[22px] font-bold">{service.title}</h3>
              <p className="text-base text-plum-muted">{service.text}</p>
              <p className="text-sm text-plum-muted">{service.todo}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
