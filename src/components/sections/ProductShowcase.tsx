import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Product {
  title: string;
  description: string;
  image?: string;
  href: string;
  buttonText?: string;
}

const defaultProducts: Product[] = [
  {
    title: "Postcards",
    description: "Our stunning postcards are Jumbo 6x9, High Gloss, and Full Color on both sides. They are designed to be high converting to get you the maximum response rate. Use our Express Editor to customize one of our stunning templates or upload your own design. Additionally, take advantage of additional features, including automated seller valuations, to enhance your marketing strategy.",
    href: "/products/postcards",
    buttonText: "Explore Postcards",
  },
  {
    title: "Letters",
    description: "Our letters can be printed on one or both sides using durable 24# paper. Our express editor lets you customize our pre-designed templates or go all out with a custom design. Once your letter is ready, we insert it into #10 envelope, giving it that charming handwritten look for both the address and return address. Finally, we affix a live standard class stamp and have them mailed!",
    href: "/products/letters",
    buttonText: "Explore Letters",
  },
  {
    title: "Brochures",
    description: "If you're aiming for the ultimate return on your marketing campaign, incorporating brochures is an absolute must. Wise Pelican's impressive brochures, measuring a substantial 11 x 17 inches, are printed in full color on durable, high-gloss cover stock and folded in half. Their size and quality make them truly eye-catching, ensuring they stand out even in the most crowded mailboxes.",
    href: "/products/brochures",
    buttonText: "Explore Brochures",
  },
];

interface ProductShowcaseProps {
  title?: React.ReactNode;
  products?: Product[];
}

const ProductShowcase = ({
  title,
  products = defaultProducts,
}: ProductShowcaseProps) => {
  const defaultTitle = (
    <>
      <span className="italic font-bold text-primary">Incredibly</span>
      <br />
      <span className="font-bold text-teal">Effective Direct Mail</span>
      <br />
      <span className="font-bold text-primary">Product Suite</span>
    </>
  );

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight">
            {title || defaultTitle}
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.title}
              className="overflow-hidden border border-border/50 shadow-md hover:shadow-lg transition-shadow duration-300 bg-background"
            >
              <CardContent className="p-8 flex flex-col items-center text-center h-full">
                {/* Title */}
                <h3 className="text-xl font-semibold text-[hsl(var(--heading-accent))] mb-4">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Image placeholder */}
                <div className="w-full aspect-[4/3] mb-6 relative overflow-hidden rounded-lg">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted/50 to-muted">
                      <span className="text-lg font-medium text-muted-foreground/50">
                        {product.title}
                      </span>
                    </div>
                  )}
                </div>

                {/* Button */}
                <div className="mt-auto">
                  <Button
                    asChild
                    className="rounded-full px-8 py-2 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Link to={product.href}>
                      {product.buttonText || `Explore ${product.title}`}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
