import type { ComponentProps, ReactNode } from "react";

type Tone = "dark" | "light";

export function Container({
  className = "",
  ...props
}: ComponentProps<"div">) {
  return <div className={`mx-auto w-full max-w-[1120px] px-6 ${className}`} {...props} />;
}

export function Eyebrow({ children, tone = "dark" }: { children: ReactNode; tone?: Tone }) {
  return (
    <p
      className={`text-[13px] font-semibold uppercase tracking-[0.18em] ${
        tone === "dark" ? "text-pink" : "text-berry"
      }`}
    >
      {children}
    </p>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-[clamp(30px,4vw,44px)] font-bold leading-[1.15] tracking-[-0.01em]">
      {children}
    </h2>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  tone = "dark",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  tone?: Tone;
}) {
  return (
    <div className="flex max-w-[760px] flex-col gap-3.5">
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <SectionTitle>{title}</SectionTitle>
      {lead ? (
        <p className={tone === "dark" ? "text-soft" : "text-plum-soft"}>{lead}</p>
      ) : null}
    </div>
  );
}

const buttonSizes = {
  sm: "px-[22px] py-[13px] text-[15px]",
  md: "px-[30px] py-[18px] text-[17px]",
  lg: "px-[34px] py-5 text-lg",
} as const;

export function ButtonLink({
  size = "md",
  className = "",
  ...props
}: ComponentProps<"a"> & { size?: keyof typeof buttonSizes }) {
  return (
    <a
      className={`inline-flex items-center justify-center rounded-full bg-pink font-bold text-ink no-underline transition-colors hover:bg-pink-hover ${buttonSizes[size]} ${className}`}
      {...props}
    />
  );
}

export function TextLink({ className = "", ...props }: ComponentProps<"a">) {
  return (
    <a
      className={`font-semibold underline underline-offset-4 transition-colors hover:text-pink-hover ${className}`}
      {...props}
    />
  );
}

/** Caixa tracejada para uma imagem que ainda não foi enviada. */
export function ImagePlaceholder({
  label,
  ratio,
  className = "",
}: {
  label: string;
  ratio: "4/5" | "1/1" | "4/3";
  className?: string;
}) {
  const ratios = { "4/5": "aspect-[4/5]", "1/1": "aspect-square", "4/3": "aspect-[4/3]" };
  return (
    <div
      className={`flex items-center justify-center border-2 border-dashed border-dash bg-surface p-6 text-center text-sm text-muted ${ratios[ratio]} ${className}`}
    >
      {label}
    </div>
  );
}
