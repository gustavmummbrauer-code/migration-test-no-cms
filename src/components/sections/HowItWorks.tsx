import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
}

const defaultSteps: Step[] = [
  {
    number: "1",
    title: "Choose Your Design",
    description: "Browse our library of professionally designed templates or upload your own.",
  },
  {
    number: "2",
    title: "Customize & Personalize",
    description: "Add your photo, contact info, and personalize the message for your audience.",
  },
  {
    number: "3",
    title: "We Print & Mail",
    description: "We handle everything - printing, addressing, and mailing directly to your list.",
  },
];

interface HowItWorksProps {
  title?: string;
  subtitle?: string;
  steps?: Step[];
  ctaText?: string;
  ctaLink?: string;
}

const HowItWorks = ({
  title = "Ready to Get Started?",
  subtitle = "Create your first campaign in just 3 simple steps",
  steps = defaultSteps,
  ctaText = "Create A Free Account",
  ctaLink = "/signup",
}: HowItWorksProps) => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-[40px] md:leading-tight font-bold text-heading-accent mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-border">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rotate-45" />
                </div>
              )}

              <div className="text-center relative z-10">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-4 shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg rounded-full"
          >
            <Link to={ctaLink} className="flex items-center gap-2">
              {ctaText}
              <User className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
