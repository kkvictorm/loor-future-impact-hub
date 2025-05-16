
import { useEffect, useRef } from "react";

interface SectionTitleProps {
  overline?: string;
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
}

const SectionTitle = ({ overline, title, subtitle, alignment = "left" }: SectionTitleProps) => {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div 
      ref={titleRef} 
      className={`fade-in-section max-w-3xl mb-12 ${alignmentClasses[alignment]}`}
    >
      {overline && (
        <p className="text-loor-green font-medium mb-2 text-sm uppercase tracking-wider transition-all duration-500 delay-100">
          {overline}
        </p>
      )}
      <h2 className="text-loor-blue mb-4 transition-all duration-500 delay-200">{title}</h2>
      {subtitle && (
        <p className="text-loor-text-gray text-lg transition-all duration-500 delay-300">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
