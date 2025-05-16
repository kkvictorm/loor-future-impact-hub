
import { useRef, useEffect } from "react";

interface IconWithTextProps {
  icon: React.ReactNode;
  title: string;
  text: string;
  layout?: 'icon-top' | 'icon-left';
}

const IconWithText = ({ 
  icon, 
  title,
  text, 
  layout = 'icon-top' 
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

  if (layout === 'icon-top') {
    return (
      <div ref={elementRef} className="fade-in-section flex flex-col items-center text-center">
        <div className="text-loor-green mb-4 transform transition-all duration-500 hover:scale-110">
          {icon}
        </div>
        <h3 className="font-heading font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600">{text}</p>
      </div>
    );
  }

  return (
    <div ref={elementRef} className="fade-in-section flex items-start">
      <div className="text-loor-green mr-4 mt-1 transform transition-all duration-500 hover:scale-110">
        {icon}
      </div>
      <div>
        <h3 className="font-heading font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
};

export default IconWithText;
