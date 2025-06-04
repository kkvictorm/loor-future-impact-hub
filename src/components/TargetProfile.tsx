
import { ReactNode } from "react";

interface TargetProfileProps {
  icon: ReactNode;
  title: string;
  description: string;
  theme?: "light" | "dark";
}

const TargetProfile = ({ icon, title, description, theme = "light" }: TargetProfileProps) => {
  const themeClasses = {
    light: {
      iconBg: "bg-loor-primary/10",
      iconColor: "text-loor-primary",
      title: "text-loor-blue",
      description: "text-gray-600"
    },
    dark: {
      iconBg: "bg-white/10",
      iconColor: "text-white",
      title: "text-white",
      description: "text-white/80"
    }
  };

  return (
    <div className="flex items-start space-x-4 p-4">
      <div className={`${themeClasses[theme].iconBg} ${themeClasses[theme].iconColor} p-3 rounded-lg flex-shrink-0`}>
        {icon}
      </div>
      <div>
        <h4 className={`${themeClasses[theme].title} font-semibold mb-1`}>{title}</h4>
        <p className={`${themeClasses[theme].description} text-sm`}>{description}</p>
      </div>
    </div>
  );
};

export default TargetProfile;
