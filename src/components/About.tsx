import { credentials } from "@/content/site";
import { Container, Eyebrow, ImagePlaceholder, SectionTitle } from "./ui";

export function About() {
  return (
    <section>
      <Container className="grid items-center gap-14 py-24 lg:grid-cols-[1fr_1.35fr]">
        <ImagePlaceholder
          ratio="1/1"
          className="mx-auto w-full max-w-[440px] rounded-[28px] text-[15px]"
          label="[FOTO DA DANI — no evento, com a placa 100K]"
        />
        <div className="flex flex-col gap-5">
          <Eyebrow>Quem está por trás</Eyebrow>
          <SectionTitle>Prazer, Dani Meirelles.</SectionTitle>
          <p className="text-soft">
            Estrategista de social media e designer, à frente do Studio Meirelles. Eu nunca quis ter
            uma agência gigantesca. Quero atender bem as minhas clientes, e isso só acontece quando
            eu conheço de verdade o negócio de cada uma.
          </p>
          <p className="text-soft">
            Não vou te prometer resultados milagrosos só para vender. Prefiro ser honesta desde o
            início, porque o que faz uma parceria funcionar é a confiança.
          </p>
          <p className="text-[22px] font-bold leading-[1.35] text-pink">
            “Quero que o meu maior diferencial seja a minha honestidade.”
          </p>
          <ul className="flex flex-col gap-2.5 border-t border-line pt-5 text-[15px] text-muted">
            {credentials.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
