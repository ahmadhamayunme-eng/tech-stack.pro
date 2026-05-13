type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

export function SectionHeading({ eyebrow, title, description, align = "center" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className={`mt-3 font-heading text-3xl font-bold leading-tight text-white sm:text-5xl ${align === "center" ? "text-center" : ""}`}>{title}</h2>
      {description ? <p className="mt-5 text-base leading-8 text-white/60 sm:text-lg">{description}</p> : null}
    </div>
  );
}
