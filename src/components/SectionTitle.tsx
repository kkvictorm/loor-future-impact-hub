
interface SectionTitleProps {
  overline?: string;
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
}

const SectionTitle = ({ overline, title, subtitle, alignment = "left" }: SectionTitleProps) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={`max-w-3xl mb-12 ${alignmentClasses[alignment]}`}>
      {overline && (
        <p className="text-loor-green font-medium mb-2 text-sm uppercase tracking-wider">
          {overline}
        </p>
      )}
      <h2 className="text-loor-blue mb-4">{title}</h2>
      {subtitle && <p className="text-loor-text-gray text-lg">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
