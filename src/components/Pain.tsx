import { pains } from "@/content/site";
import { Container } from "./ui";

export function Pain() {
  return (
    <section className="bg-paper text-plum">
      <Container className="flex flex-col gap-12 py-22">
        <div className="flex max-w-[820px] flex-col gap-4">
          <h2 className="font-display text-[clamp(36px,5.4vw,64px)] uppercase leading-[1.08] text-berry">
            Seu concorrente não é melhor que você. Ele só aparece mais.
          </h2>
          <p className="text-[19px] text-plum-soft">
            Enquanto você não posta, tem paciente pesquisando pela sua especialidade agora e
            encontrando outra profissional no lugar.
          </p>
        </div>
        <ul className="grid gap-6 md:grid-cols-3">
          {pains.map((pain) => (
            <li key={pain.title} className="flex flex-col gap-2.5 rounded-[20px] bg-white p-7">
              <h3 className="text-xl font-bold leading-snug">{pain.title}</h3>
              <p className="text-base text-plum-muted">{pain.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
