import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

interface RelatedProduct {
  title: string;
  image: string;
  href: string;
  description?: string;
}

interface RelatedProductLink {
  title: string;
  href: string;
}

interface RelatedProductsGridProps {
  title?: string;
  products: RelatedProduct[];
  allProductLinks?: RelatedProductLink[];
  viewAllText?: string;
  viewAllLink?: string;
}

const RelatedProductsGrid = ({
  title = "Explore Our Full Range of Real Estate Postcards",
  products,
  allProductLinks,
  viewAllText = "View All Postcards",
  viewAllLink = "/products/postcards/real-estate",
}: RelatedProductsGridProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h2 className="text-2xl md:text-[40px] md:leading-tight font-bold text-center text-heading-accent mb-8">
          {title}
        </h2>

        {/* Featured Products Grid (4 cards with images) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.slice(0, 4).map((product, index) => (
            <Link
              key={index}
              to={product.href}
              className="group bg-background rounded-xl overflow-hidden border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm md:text-base">
                  {product.title}
                </h3>
                {product.description && (
                  <p className="text-xs md:text-sm text-muted-foreground mt-1 line-clamp-2">
                    {product.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Collapsible Section for All Product Links */}
        {allProductLinks && allProductLinks.length > 0 && (
          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mt-8">
            <div className="flex justify-center">
              <CollapsibleTrigger asChild>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 gap-2"
                >
                  {isOpen ? "Show Less" : viewAllText}
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                  />
                </Button>
              </CollapsibleTrigger>
            </div>

            <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
              <div className="pt-8 pb-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-3">
                  {allProductLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.href}
                      className="text-primary hover:underline text-sm py-1"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        )}

        {/* Fallback: View All Link if no allProductLinks provided */}
        {(!allProductLinks || allProductLinks.length === 0) && viewAllLink && (
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link to={viewAllLink} className="flex items-center gap-2">
                {viewAllText}
                <ChevronDown className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default RelatedProductsGrid;
