
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
}

const SolutionCard = ({
  solutionName,
  briefDescription,
  benefitsList = [],
  ctaButton,
  className = "",
}: SolutionCardProps) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 flex flex-col transition-all duration-300 hover:shadow-lg ${className}`}
    >
      <h3 className="font-heading font-semibold text-xl mb-3 text-loor-solution-title">{solutionName}</h3>
      <p className="text-gray-600 mb-4">{briefDescription}</p>

      {benefitsList.length > 0 && (
        <ul className="space-y-2 mb-6">
          {benefitsList.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="text-loor-solution-benefits flex-shrink-0 mr-2 h-5 w-5" />
              <span className="text-gray-600 text-sm">{benefit}</span>
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
