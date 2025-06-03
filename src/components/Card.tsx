
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  link?: {
    text: string;
    url: string;
  };
  className?: string;
  theme?: "light" | "dark";
}

const Card = ({ icon, title, description, link, className = "", theme = "light" }: CardProps) => {
  const themeClasses = {
    light: {
      icon: "text-loor-light-section-icon",
      title: "text-loor-light-section-title",
      description: "text-gray-600",
      link: "text-loor-light-section-link hover:text-loor-light-section-link/80",
    },
    dark: {
      icon: "text-loor-dark-section-icon",
      title: "text-loor-dark-section-title",
      description: "text-loor-dark-section-subtitle",
      link: "text-loor-dark-section-link hover:text-loor-dark-section-link/80",
    }
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 flex flex-col transition-all duration-300 hover:shadow-lg ${className}`}
    >
      {icon && <div className={`${themeClasses[theme].icon} mb-4`}>{icon}</div>}
      <h3 className={`font-heading font-semibold text-xl mb-3 ${themeClasses[theme].title}`}>{title}</h3>
      <p className={`${themeClasses[theme].description} mb-4 flex-grow`}>{description}</p>
      {link && (
        <Link
          to={link.url}
          className={`${themeClasses[theme].link} font-medium inline-flex items-center gap-1 mt-auto`}
        >
          {link.text} <ArrowRight size={16} />
        </Link>
      )}
    </div>
  );
};

export default Card;
