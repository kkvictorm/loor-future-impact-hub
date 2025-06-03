
import { useRef, useEffect } from "react";

interface IconWithTextProps {
  icon: React.ReactNode;
  title: string;
  text: string;
  layout?: 'icon-top' | 'icon-left';
  theme?: "light" | "dark";
}

const IconWithText = ({ 
  icon, 
  title,
  text, 
  layout = 'icon-top',
  theme = "light"
}: IconWithTextProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

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

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const themeClasses = {
    light: {
      icon: "text-loor-light-section-icon",
      title: "text-loor-light-section-title",
      text: "text-gray-600",
    },
    dark: {
      icon: "text-loor-dark-section-icon",
      title: "text-loor-dark-section-title",
      text: "text-loor-dark-section-subtitle",
    }
  };

  if (layout === 'icon-top') {
    return (
      <div ref={elementRef} className="fade-in-section flex flex-col items-center text-center">
        <div className={`${themeClasses[theme].icon} mb-4 transform transition-all duration-500 hover:scale-110`}>
          {icon}
        </div>
        <h3 className={`font-heading font-semibold text-lg mb-2 ${themeClasses[theme].title}`}>{title}</h3>
        <p className={themeClasses[theme].text}>{text}</p>
      </div>
    );
  }

  return (
    <div ref={elementRef} className="fade-in-section flex items-start">
      <div className={`${themeClasses[theme].icon} mr-4 mt-1 transform transition-all duration-500 hover:scale-110`}>
        {icon}
      </div>
      <div>
        <h3 className={`font-heading font-semibold text-lg mb-2 ${themeClasses[theme].title}`}>{title}</h3>
        <p className={themeClasses[theme].text}>{text}</p>
      </div>
    </div>
  );
};

export default IconWithText;
