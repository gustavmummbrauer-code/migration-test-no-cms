import { Check, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroPostcardsImage from "@/assets/hero-postcards.webp";
interface HeroSectionProps {
  title?: string;
  highlightedWord?: string;
  subtitle?: string;
  bulletPoints?: string[];
  ctaText?: string;
  ctaLink?: string;
  secondaryText?: string;
  imageSrc?: string;
  imageAlt?: string;
}
const HeroSection = ({
  title = "Grow Your Business With",
  highlightedWord = "Proven",
  subtitle = "Direct Mail",
  bulletPoints = ["Campaigns Created in Minutes", "No Minimum Order", "Fully Trackable Mailings"],
  ctaText = "Create A Free Account",
  ctaLink = "/signup",
  secondaryText = "No credit card required!",
  imageSrc,
  imageAlt = "Product showcase"
}: HeroSectionProps) => {
  return <section className="relative overflow-hidden" style={{
    backgroundColor: '#F8F8FF'
  }}>
      {/* Decorative curved dotted lines */}
      <div className="absolute inset-0 opacity-30">
        <svg className="absolute top-20 right-1/4 w-96 h-24" viewBox="0 0 400 100" fill="none">
          <path d="M0 50 Q 100 10, 200 50 T 400 50" stroke="#5AC8C8" strokeWidth="2" strokeDasharray="8 6" fill="none" />
        </svg>
        <svg className="absolute bottom-32 left-10 w-64 h-16" viewBox="0 0 300 60" fill="none">
          <path d="M0 30 Q 75 60, 150 30 T 300 30" stroke="#5AC8C8" strokeWidth="2" strokeDasharray="8 6" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="text-foreground z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              {title}{" "}
              <span className="text-primary">{highlightedWord}</span>{" "}
              {subtitle}
            </h1>

            {/* Bullet points */}
            <ul className="space-y-3 mb-8">
              {bulletPoints.map((point, index) => <li key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-lg">{point}</span>
                </li>)}
            </ul>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg rounded-full">
                <Link to={ctaLink} className="flex items-center gap-2">
                  {ctaText}
                  <User className="w-5 h-5" />
                </Link>
              </Button>
              {secondaryText && <span className="text-muted-foreground">{secondaryText}</span>}
            </div>
          </div>

          {/* Image */}
          <div className="relative z-10">
            <img src={imageSrc || heroPostcardsImage} alt={imageAlt} className="w-full max-w-xl mx-auto" />
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 32C840 34 960 38 1080 40C1200 42 1320 42 1380 42L1440 42V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0V60Z" fill="hsl(0 0% 100%)" />
        </svg>
      </div>
    </section>;
};
export default HeroSection;