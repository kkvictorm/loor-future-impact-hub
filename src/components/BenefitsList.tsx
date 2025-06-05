
import { CheckCircle } from "lucide-react";

interface BenefitsListProps {
  benefits: string[];
  theme?: "light" | "dark";
}

const BenefitsList = ({ benefits, theme = "dark" }: BenefitsListProps) => {
  const themeClasses = {
    light: {
      icon: "text-loor-green",
      text: "text-gray-700"
    },
    dark: {
      icon: "text-green-300",
      text: "text-white/90"
    }
  };

  return (
    <ul className="space-y-4">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-start">
          <CheckCircle className={`${themeClasses[theme].icon} flex-shrink-0 mr-3 h-5 w-5 mt-0.5`} />
          <span className={`${themeClasses[theme].text}`}>{benefit}</span>
        </li>
      ))}
    </ul>
  );
};

export default BenefitsList;
