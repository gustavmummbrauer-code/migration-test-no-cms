import { Star } from "lucide-react";
import trustpilotLogo from "@/assets/trust-badges/trustpilot-logo.png";
import googleLogo from "@/assets/trust-badges/google-logo.png";

interface ProductTrustBadgesProps {
  trustpilotRating?: string;
  trustpilotReviews?: string;
  googleRating?: string;
  googleReviews?: string;
}

const ProductTrustBadges = ({
  trustpilotRating = "4.6",
  googleRating = "4.8",
}: ProductTrustBadgesProps) => {
  return (
    <div className="flex flex-wrap items-center gap-4 text-sm">
      {/* Trustpilot */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-[#FFD700] text-[#FFD700]"
            />
          ))}
        </div>
        <span className="text-muted-foreground">
          {trustpilotRating} Stars on
        </span>
        <img 
          src={trustpilotLogo} 
          alt="Trustpilot" 
          className="h-4 w-auto"
        />
      </div>

      <span className="text-muted-foreground">|</span>

      {/* Google */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-[#FFD700] text-[#FFD700]"
            />
          ))}
        </div>
        <span className="text-muted-foreground">
          {googleRating} Stars on
        </span>
        <img 
          src={googleLogo} 
          alt="Google" 
          className="h-4 w-auto"
        />
      </div>
    </div>
  );
};

export default ProductTrustBadges;
