
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
}

const Card = ({ icon, title, description, link, className = "" }: CardProps) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 flex flex-col transition-all duration-300 hover:shadow-lg ${className}`}
    >
      {icon && <div className="text-loor-card-accent mb-4">{icon}</div>}
      <h3 className="font-heading font-semibold text-xl mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      {link && (
        <Link
          to={link.url}
          className="text-loor-link-color hover:text-loor-link-color/80 font-medium inline-flex items-center gap-1 mt-auto"
        >
          {link.text} <ArrowRight size={16} />
        </Link>
      )}
    </div>
  );
};

export default Card;
