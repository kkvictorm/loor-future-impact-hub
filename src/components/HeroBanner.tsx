
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

interface HeroBannerProps {
  backgroundImage?: string;
  title: string;
  subtitle?: string;
  ctaButtonPrimaryText?: string;
  ctaButtonPrimaryLink?: string;
  ctaButtonSecondaryText?: string;
  ctaButtonSecondaryLink?: string;
  alignment?: "left" | "center" | "right";
}

const HeroBanner = ({
  backgroundImage = "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=1920&q=80",
  title,
  subtitle,
  ctaButtonPrimaryText,
  ctaButtonPrimaryLink = "/contato",
  ctaButtonSecondaryText,
  ctaButtonSecondaryLink,
  alignment = "left",
}: HeroBannerProps) => {
  const bannerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (bannerRef.current) {
      setTimeout(() => {
        bannerRef.current?.classList.add('is-visible');
      }, 100);
    }
  }, []);

  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div
      ref={bannerRef}
      className="relative bg-gray-900 py-20 md:py-28 lg:py-36 fade-in-section bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-loor-blue/20" aria-hidden="true"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className={`flex flex-col space-y-8 max-w-4xl mx-auto ${alignmentClasses[alignment]}`}>
          <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl leading-tight transition-all duration-700 delay-100 drop-shadow-lg">
            {title}
          </h1>
          {subtitle && (
            <p className="text-gray-200 text-xl md:text-2xl transition-all duration-700 delay-300 drop-shadow-md max-w-3xl">
              {subtitle}
            </p>
          )}

          {/* CTA Buttons */}
          {(ctaButtonPrimaryText || ctaButtonSecondaryText) && (
            <div className="flex flex-wrap gap-4 mt-8 transition-all duration-700 delay-500">
              {ctaButtonPrimaryText && (
                <Link 
                  to={ctaButtonPrimaryLink} 
                  className="bg-loor-blue text-white font-semibold px-8 py-4 rounded-lg hover:bg-loor-blue/90 hover:scale-105 transition-all duration-300 inline-flex items-center gap-3 shadow-lg"
                >
                  {ctaButtonPrimaryText}
                  <ArrowRight size={20} />
                </Link>
              )}
              {ctaButtonSecondaryText && (
                <Link 
                  to={ctaButtonSecondaryLink || "#"} 
                  className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
                >
                  {ctaButtonSecondaryText}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
