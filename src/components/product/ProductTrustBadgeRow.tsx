import bbbLogo from "@/assets/trust-badges/bbb-logo.png";
import trustpilotLogo from "@/assets/trust-badges/trustpilot-logo.png";
import googleLogo from "@/assets/trust-badges/google-logo.png";

interface TrustBadge {
  name: string;
  rating: string;
  reviewCount?: string;
  logo: string;
}

const defaultBadges: TrustBadge[] = [
  {
    name: "BBB",
    rating: "A+",
    reviewCount: "BBB Accredited",
    logo: bbbLogo,
  },
  {
    name: "Trustpilot",
    rating: "4.6 Stars",
    reviewCount: "184 Reviews",
    logo: trustpilotLogo,
  },
  {
    name: "Google",
    rating: "4.8 Stars",
    reviewCount: "580 Reviews",
    logo: googleLogo,
  },
];

interface ProductTrustBadgeRowProps {
  badges?: TrustBadge[];
}

const ProductTrustBadgeRow = ({ badges = defaultBadges }: ProductTrustBadgeRowProps) => {
  return (
    <section 
      className="py-12 relative"
      style={{
        background: "linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 50%, #F8F8FF 50%, #F8F8FF 100%)"
      }}
    >
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-8 md:p-10">
          <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12 max-w-4xl mx-auto">
            {badges.map((badge, index) => (
              <div key={index} className="flex flex-col items-center text-center flex-1 min-w-[140px]">
                {/* Badge Logo */}
                <div className="h-14 flex items-center justify-center mb-3">
                  <img 
                    src={badge.logo} 
                    alt={badge.name} 
                    className="h-10 md:h-12 w-auto object-contain"
                  />
                </div>

                {/* Rating & Reviews */}
                <p className="text-sm text-muted-foreground">
                  {badge.rating} {badge.name !== "BBB" && "|"} {badge.reviewCount}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTrustBadgeRow;
