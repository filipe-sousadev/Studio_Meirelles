import { faq } from "@/content/site";
import { SectionTitle } from "./ui";

export function Faq() {
  return (
    <section className="bg-paper text-plum">
      <div className="mx-auto flex w-full max-w-[860px] flex-col gap-8 px-6 py-24">
        <SectionTitle>Antes de você me chamar</SectionTitle>
        <div className="flex flex-col gap-3">
          {faq.map((item) => (
            <details key={item.q} className="group rounded-2xl bg-white px-[26px] py-[22px]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {item.q}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="size-5 shrink-0 text-berry transition-transform group-open:rotate-45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="mt-3.5 text-base text-plum-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
