
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div
      className={`relative bg-loor-blue py-16 md:py-24 lg:py-32 ${
        backgroundImage ? "bg-cover bg-center" : ""
      }`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {/* Overlay for background images to ensure text readability */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-loor-blue bg-opacity-60" aria-hidden="true"></div>
      )}

      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <div className={`flex flex-col space-y-6 max-w-3xl mx-auto ${alignmentClasses[alignment]}`}>
          <h1 className="text-white font-bold">{title}</h1>
          {subtitle && <p className="text-white/90 text-xl">{subtitle}</p>}

          {/* CTA Buttons */}
          {(ctaButtonPrimaryText || ctaButtonSecondaryText) && (
            <div className="flex flex-wrap gap-4 mt-6">
              {ctaButtonPrimaryText && (
                <Link to={ctaButtonPrimaryLink} className="cta-primary">
                  {ctaButtonPrimaryText}
                  <ArrowRight size={18} />
                </Link>
              )}
              {ctaButtonSecondaryText && (
                <Link to={ctaButtonSecondaryLink || "#"} className="cta-outline text-white border-white hover:bg-white hover:text-loor-blue">
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
