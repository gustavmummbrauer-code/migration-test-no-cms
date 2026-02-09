import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FeatureSectionProps {
  title: string;
  description: string | React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  ctaText?: string;
  ctaLink?: string;
  bgColor?: "default" | "muted";
}

const FeatureSection = ({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition = "left",
  ctaText = "Get Started Free",
  ctaLink = "/signup",
  bgColor = "default",
}: FeatureSectionProps) => {
  const bgClass = bgColor === "muted" ? "bg-muted/30" : "bg-background";

  return (
    <section className={`py-10 md:py-14 ${bgClass}`}>
      <div className="container mx-auto px-4">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
            imagePosition === "right" ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Image */}
          <div className={`${imagePosition === "right" ? "lg:order-2" : "lg:order-1"}`}>
            <div className="relative rounded-xl overflow-hidden shadow-lg max-w-[400px] mx-auto">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Content */}
          <div className={`${imagePosition === "right" ? "lg:order-1" : "lg:order-2"}`}>
            <h2 className="text-2xl md:text-[40px] md:leading-tight font-bold text-heading-accent mb-6">
              {title}
            </h2>

            <div className="prose prose-lg text-muted-foreground mb-8">
              {typeof description === "string" ? <p>{description}</p> : description}
            </div>

            {ctaText && (
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 py-6 text-lg font-semibold bg-plum hover:bg-heading-accent text-white"
              >
                <Link to={ctaLink} className="flex items-center gap-2">
                  {ctaText}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
