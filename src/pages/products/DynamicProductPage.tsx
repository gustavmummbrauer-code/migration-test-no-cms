import { useParams } from "react-router-dom";
import ProductPage from "./ProductPage";

/**
 * Dynamic product page that extracts the slug from URL params.
 * This enables automatic routing for any markdown file in content/products/postcards/
 */
const DynamicProductPage = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold text-foreground">Invalid URL</h1>
        <p className="text-muted-foreground">No product specified.</p>
      </div>
    );
  }

  return <ProductPage slug={slug} />;
};

export default DynamicProductPage;
