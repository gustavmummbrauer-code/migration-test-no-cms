import { Rocket, Database, Bell, Map, Briefcase, Truck, LucideIcon } from "lucide-react";

interface MarketingFeature {
  title: string;
  description: string;
  icon?: LucideIcon;
}

interface MarketingSolutionGridProps {
  title?: string;
  subtitle?: string;
  features?: MarketingFeature[];
}

const defaultFeatures: MarketingFeature[] = [
  {
    title: "Express Editor",
    description:
      "Quickly customize postcard templates, upload images, adjust colors, and load MLS data—no design skills needed.",
    icon: Rocket,
  },
  {
    title: "MLS Integration",
    description:
      "Select listings and instantly fill postcards with MLS photos and details, covering 95% of all listings.",
    icon: Database,
  },
  {
    title: "Automated Seller Valuation",
    description:
      "Track potential leads with postcards that notify you instantly when scanned for timely follow-up.",
    icon: Bell,
  },
  {
    title: "Mailing List Pro",
    description:
      "Use advanced filters for targeted mailings, see turnover rates, and find high-potential areas for max impact.",
    icon: Map,
  },
  {
    title: "Subscription Plans",
    description:
      "Maximize campaign effectiveness with four mailing plans to optimize mailing performance and unlock savings.",
    icon: Briefcase,
  },
  {
    title: "No Minimum Orders",
    description:
      "Enjoy free standard shipping with no minimums—mail any quantity, anytime, without extra costs.",
    icon: Truck,
  },
];

const MarketingSolutionGrid = ({
  title = "A Marketing Solution Built for REALTORS®",
  subtitle,
  features = defaultFeatures,
}: MarketingSolutionGridProps) => {
  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-[40px] md:leading-tight font-bold text-heading-accent mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-background rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow duration-300"
              >
                {/* Top accent line */}
                <div className="h-2 bg-[hsl(var(--heading-accent))] w-full" />
                
                {/* Content */}
                <div className="p-6 md:p-8 text-center">
                  {/* Icon */}
                  {IconComponent && (
                    <div className="flex justify-center mb-4">
                      <IconComponent className="w-12 h-12 text-[#5AC8C8]" />
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MarketingSolutionGrid;
