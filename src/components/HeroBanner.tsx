
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
  backgroundImage,
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
      className={`relative bg-loor-blue py-16 md:py-24 lg:py-32 fade-in-section ${
        backgroundImage ? "bg-cover bg-center" : ""
      }`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {/* Overlay for background images to ensure text readability */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-loor-blue bg-opacity-60" aria-hidden="true"></div>
      )}

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-loor-green rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-loor-green rounded-full opacity-10 blur-3xl"></div>
      </div>

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
                <Link to={ctaButtonSecondaryLink || "#"} className="cta-outline text-white border-white hover:bg-white hover:text-loor-blue hover:scale-105 transition-transform">
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
