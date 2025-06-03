
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
  backgroundImage = "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
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
      className="relative py-16 md:py-24 lg:py-32 fade-in-section bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `linear-gradient(rgba(7, 42, 200, 0.7), rgba(7, 42, 200, 0.7)), url(${backgroundImage})` 
      }}
    >
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className={`flex flex-col space-y-6 max-w-3xl mx-auto ${alignmentClasses[alignment]}`}>
          <h1 className="text-white font-bold transition-all duration-700 delay-100">{title}</h1>
          {subtitle && <p className="text-white/90 text-xl transition-all duration-700 delay-300">{subtitle}</p>}

          {/* CTA Buttons */}
          {(ctaButtonPrimaryText || ctaButtonSecondaryText) && (
            <div className="flex flex-wrap gap-4 mt-6 transition-all duration-700 delay-500">
              {ctaButtonPrimaryText && (
                <Link to={ctaButtonPrimaryLink} className="cta-primary hover:scale-105 transition-transform">
                  {ctaButtonPrimaryText}
                  <ArrowRight size={18} />
                </Link>
              )}
              {ctaButtonSecondaryText && (
                <Link to={ctaButtonSecondaryLink || "#"} className="cta-outline text-white border-white hover:bg-white hover:text-loor-primary hover:scale-105 transition-transform">
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
