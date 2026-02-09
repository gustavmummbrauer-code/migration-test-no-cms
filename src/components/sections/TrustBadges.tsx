import { Star } from "lucide-react";

interface TrustBadge {
  type: "users" | "trustpilot" | "google" | "bbb";
  value: string;
  subtext: string;
}

const defaultBadges: TrustBadge[] = [
  { type: "users", value: "100,000", subtext: "Users" },
  { type: "trustpilot", value: "4.6 Stars", subtext: "172 Reviews" },
  { type: "google", value: "4.8 Stars", subtext: "477 Reviews" },
  { type: "bbb", value: "A+", subtext: "BBB Accredited" },
];

interface TrustBadgesProps {
  badges?: TrustBadge[];
}

const TrustBadges = ({ badges = defaultBadges }: TrustBadgesProps) => {
  const renderBadgeIcon = (type: TrustBadge["type"]) => {
    switch (type) {
      case "users":
        return (
          <span className="text-3xl md:text-4xl font-bold text-primary">
            {badges.find((b) => b.type === "users")?.value}
          </span>
        );
      case "trustpilot":
        return (
          <div className="flex items-center gap-1">
            <Star className="w-5 h-5 text-primary fill-primary" />
            <span className="font-bold text-lg text-foreground">Trustpilot</span>
          </div>
        );
      case "google":
        return (
          <span className="font-bold text-xl text-foreground tracking-tight">
            <span className="text-secondary">G</span>
            <span className="text-destructive">o</span>
            <span className="text-primary">o</span>
            <span className="text-secondary">g</span>
            <span className="text-primary">l</span>
            <span className="text-destructive">e</span>
          </span>
        );
      case "bbb":
        return (
          <div className="flex items-center gap-1">
            <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded font-bold">BBB</span>
            <span className="text-xs font-medium text-muted-foreground">ACCREDITED<br/>BUSINESS</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-8 md:py-12 relative z-10 -mt-8">
      <div className="container mx-auto px-4">
        <div className="bg-card rounded-xl shadow-lg trust-badge-shadow p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center">
            {badges.map((badge, index) => (
              <div
                key={badge.type}
                className={`text-center ${
                  index < badges.length - 1 ? "md:border-r md:border-border" : ""
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  {renderBadgeIcon(badge.type)}
                  <p className="text-sm text-muted-foreground">
                    {badge.type === "users" ? badge.subtext : badge.value}
                    {badge.type !== "users" && badge.type !== "bbb" && (
                      <span className="block text-xs">{badge.subtext}</span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
