type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  const alignClass = centered ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-brand-green-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold text-brand-blue-900 md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
