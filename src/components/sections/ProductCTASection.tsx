import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ctaBackground from "@/assets/cta-background.png";

interface ProductCTASectionProps {
  title?: string;
  nextStepText?: string;
  description?: string;
  secondaryDescription?: string;
  buttonText?: string;
  buttonLink?: string;
  disclaimerText?: string;
}

const ProductCTASection = ({
  title = "Ready to get started?",
  nextStepText = "NEXT STEP: CREATE A FREE ACCOUNT TO SEE ALL TEMPLATES AND HOW THE SYSTEM WORKS",
  description = "If you still have questions, you probably haven't created your free account yet. This takes just seconds and generally answers all of your questions instantly. There's no credit card required.",
  secondaryDescription = "Once in the system, you'll be able to chat with us and get any additional questions answered.",
  buttonText = "Create A Free Account",
  buttonLink = "/signup",
  disclaimerText = "No Credit Card and No Purchase Required to Create an Account",
}: ProductCTASectionProps) => {
  return (
    <section
      className="py-16 md:py-24 relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${ctaBackground})`,
      }}
    >
      {/* Purple overlay */}
      <div className="absolute inset-0 bg-plum/80" />

      {/* Decorative curved dotted lines */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-40 z-10">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          <path
            d="M50 180 Q 100 80, 180 120"
            stroke="#5AC8C8"
            strokeWidth="2"
            strokeDasharray="8 6"
            fill="none"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-40 z-10">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          <path
            d="M20 50 Q 80 150, 180 80"
            stroke="#5AC8C8"
            strokeWidth="2"
            strokeDasharray="8 6"
            fill="none"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 italic">
            {title}
          </h2>

          {/* Next Step Subheading */}
          <p className="text-sm md:text-base font-bold text-white uppercase tracking-wide mb-6">
            {nextStepText}
          </p>

          {/* Description */}
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4 max-w-3xl mx-auto">
            {description}
          </p>

          {/* Secondary Description */}
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            {secondaryDescription}
          </p>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-plum font-semibold px-10 py-6 text-lg rounded-full mb-6"
          >
            <Link to={buttonLink}>{buttonText}</Link>
          </Button>

          {/* Disclaimer */}
          <p className="text-sm font-semibold text-white">
            {disclaimerText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductCTASection;
