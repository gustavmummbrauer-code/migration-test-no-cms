import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Rocket, Database, Bell, Map, Briefcase, Truck, LucideIcon } from "lucide-react";
import ProductPageTemplate from "@/components/templates/ProductPageTemplate";
import { loadProductContent } from "@/lib/content-loader";
import type { ProductPageContent } from "@/lib/content-types";

// Icon mapping for marketing features
const iconMap: Record<string, LucideIcon> = {
  Rocket,
  Database,
  Bell,
  Map,
  Briefcase,
  Truck,
};

interface ProductPageProps {
  slug: string;
}

const ProductPage = ({ slug }: ProductPageProps) => {
  const [content, setContent] = useState<ProductPageContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError(null);

      const data = await loadProductContent(slug);

      if (!data) {
        setError("Product not found");
        setLoading(false);
        return;
      }

      setContent(data);
      setLoading(false);
    }

    load();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (error || !content) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold text-foreground">Product Not Found</h1>
        <p className="text-muted-foreground">
          The product you're looking for doesn't exist.
        </p>
        <button
          onClick={() => navigate("/")}
          className="text-primary hover:underline"
        >
          Go back home
        </button>
      </div>
    );
  }

  // Build the description JSX from paragraphs
  const description = (
    <div className="space-y-4 [&>p]:m-0">
      {content.description.map((paragraph, index) => (
  <p key={index}>{paragraph}</p>
      ))}
    </div>
  );

  // Build features with proper JSX descriptions
  const features = content.features?.map((feature) => ({
    ...feature,
    description: <p>{feature.description}</p>,
  }));

  // Build marketing features with icons
  const marketingFeatures = content.marketingFeatures
    ? {
        ...content.marketingFeatures,
        features: content.marketingFeatures.features?.map((f) => ({
          ...f,
          icon: f.icon ? iconMap[f.icon] : undefined,
        })),
      }
    : undefined;

  return (
    <ProductPageTemplate
      title={content.title}
      price={content.price}
      description={description}
      images={content.images}
      breadcrumbs={content.breadcrumbs}
      categories={content.categories}
      ctaText={content.ctaText}
      ctaLink={content.ctaLink}
      templateExamples={content.templateExamples}
      startingSteps={content.startingSteps}
      features={features}
      marketingFeatures={marketingFeatures}
      relatedProducts={content.relatedProducts}
      faqs={content.faqs}
      testimonials={content.testimonials}
      finalCta={content.finalCta}
    />
  );
};

export default ProductPage;
