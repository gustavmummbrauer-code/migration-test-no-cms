interface Step {
  stepNumber: number;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}

interface StartingStepsSectionProps {
  steps?: Step[];
}

const defaultSteps: Step[] = [
  {
    stepNumber: 1,
    title: "Sign Up For Free",
    description:
      "Wise Pelican is completely free to sign up and start designing Just Sold postcards. No commitment!",
    imageSrc: "/images/steps/laptop-step1-signup.webp",
    imageAlt: "Sign up form on laptop screen",
  },
  {
    stepNumber: 2,
    title: "Customize Just Sold Templates",
    description:
      "Customize hundreds of Just Sold postcard templates with your name, image and brand in minutes.",
    imageSrc: "/images/steps/laptop-step2-customize.webp",
    imageAlt: "Template customization on laptop screen",
  },
  {
    stepNumber: 3,
    title: "Start Mailing Just Sold Postcards!",
    description:
      "Just 97¢ each, including printing, posting, and mailing. Prints and mails within 2 business days!",
    imageSrc: "/images/steps/laptop-step3-mail.webp",
    imageAlt: "Mailing tracking dashboard on laptop screen",
  },
];

const StartingStepsSection = ({ steps = defaultSteps }: StartingStepsSectionProps) => {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step) => (
            <div key={step.stepNumber} className="flex flex-col items-center text-center">
              {/* Step Number Circle */}
              <div className="w-12 h-12 rounded-full bg-[hsl(var(--heading-accent))] flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-white">{step.stepNumber}</span>
              </div>

              {/* Title & Description - fixed height container for alignment */}
              <div className="md:min-h-[140px] flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed max-w-sm">
                  {step.description}
                </p>
              </div>

              {/* Laptop Image */}
              <div className="w-full max-w-md mt-6">
                {step.imageSrc ? (
                  <img
                    src={step.imageSrc}
                    alt={step.imageAlt || step.title}
                    className="w-full h-auto"
                  />
                ) : (
                  <div className="aspect-[16/10] bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-sm text-muted-foreground">Step {step.stepNumber}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartingStepsSection;
