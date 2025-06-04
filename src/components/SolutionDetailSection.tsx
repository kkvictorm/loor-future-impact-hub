
import { ReactNode } from "react";

interface SolutionDetailSectionProps {
  title: string;
  content: string | ReactNode;
  theme?: "light" | "dark";
  className?: string;
}

const SolutionDetailSection = ({ 
  title, 
  content, 
  theme = "light",
  className = ""
}: SolutionDetailSectionProps) => {
  const themeClasses = {
    light: {
      bg: "bg-white",
      title: "text-loor-blue",
      content: "text-gray-600"
    },
    dark: {
      bg: "bg-loor-blue",
      title: "text-white",
      content: "text-white/90"
    }
  };

  return (
    <section className={`${themeClasses[theme].bg} section-padding ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`${themeClasses[theme].title} text-3xl font-bold mb-6`}>
            {title}
          </h2>
          <div className={`${themeClasses[theme].content} text-lg leading-relaxed`}>
            {content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionDetailSection;
