
import { AlertTriangle } from "lucide-react";

interface ChallengesListProps {
  challenges: string[];
  theme?: "light" | "dark";
}

const ChallengesList = ({ challenges, theme = "dark" }: ChallengesListProps) => {
  const themeClasses = {
    light: {
      icon: "text-red-500",
      text: "text-gray-700"
    },
    dark: {
      icon: "text-red-300",
      text: "text-white/90"
    }
  };

  return (
    <ul className="space-y-4">
      {challenges.map((challenge, index) => (
        <li key={index} className="flex items-start">
          <AlertTriangle className={`${themeClasses[theme].icon} flex-shrink-0 mr-3 h-5 w-5 mt-0.5`} />
          <span className={`${themeClasses[theme].text}`}>{challenge}</span>
        </li>
      ))}
    </ul>
  );
};

export default ChallengesList;
