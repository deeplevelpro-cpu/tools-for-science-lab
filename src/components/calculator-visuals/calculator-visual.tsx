type CalculatorVisualProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export function CalculatorVisual({
  title,
  description,
  children,
}: CalculatorVisualProps) {
  return (
    <section
      className="calculator-visual"
      aria-label={title}
    >
      <div className="calculator-visual__content">
        <p className="eyebrow">
          Visual explanation
        </p>

        <h2>
          {title}
        </h2>

        <p>
          {description}
        </p>

        {children}
      </div>
    </section>
  );
}
