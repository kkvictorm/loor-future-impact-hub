
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";

interface SolutionCardProps {
  solutionName: string;
  briefDescription: string;
  benefitsList?: string[];
  ctaButton: {
    text: string;
    url: string;
  };
  className?: string;
  theme?: "light" | "dark";
}

const SolutionCard = ({
  solutionName,
  briefDescription,
  benefitsList = [],
  ctaButton,
  className = "",
  theme = "light",
}: SolutionCardProps) => {
  const themeClasses = {
    light: {
      title: "text-loor-light-section-title",
      description: "text-gray-600",
      benefits: "text-loor-light-section-benefits",
      benefitText: "text-gray-600",
    },
    dark: {
      title: "text-loor-dark-section-title",
      description: "text-loor-dark-section-subtitle",
      benefits: "text-loor-dark-section-benefits",
      benefitText: "text-loor-dark-section-subtitle",
    }
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 flex flex-col transition-all duration-300 hover:shadow-lg ${className}`}
    >
      <h3 className={`font-heading font-semibold text-xl mb-3 ${themeClasses[theme].title}`}>{solutionName}</h3>
      <p className={`${themeClasses[theme].description} mb-4`}>{briefDescription}</p>

      {benefitsList.length > 0 && (
        <ul className="space-y-2 mb-6">
          {benefitsList.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className={`${themeClasses[theme].benefits} flex-shrink-0 mr-2 h-5 w-5`} />
              <span className={`${themeClasses[theme].benefitText} text-sm`}>{benefit}</span>
            </li>
          ))}
        </ul>
      )}

      <Link
        to={ctaButton.url}
        className="mt-auto cta-primary justify-center"
      >
        {ctaButton.text}
        <ArrowRight size={16} />
      </Link>
    </div>
  );
};

export default SolutionCard;
