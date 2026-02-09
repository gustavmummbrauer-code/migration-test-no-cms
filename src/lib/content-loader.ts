import YAML from "yaml";
import type { ProductPageContent } from "./content-types";

// Import all markdown files from content/products (relative to project root)
const productModules = import.meta.glob("../../content/products/**/*.md", {
  query: "?raw",
  import: "default",
  eager: false,
});

// Cache for loaded content
const contentCache = new Map<string, ProductPageContent>();

/**
 * Parse frontmatter from markdown content
 * Simple implementation that doesn't rely on Node.js-specific features
 */
function parseFrontmatter(content: string): { data: Record<string, unknown>; body: string } {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { data: {}, body: content };
  }
  
  try {
    const data = YAML.parse(match[1]) || {};
    return { data, body: match[2] || "" };
  } catch (error) {
    console.error("Error parsing YAML frontmatter:", error);
    return { data: {}, body: content };
  }
}

/**
 * Load a product page's content from its Markdown file
 */
export async function loadProductContent(
  slug: string
): Promise<ProductPageContent | null> {
  // Check cache first
  if (contentCache.has(slug)) {
    return contentCache.get(slug)!;
  }

  // Find the matching file
  const matchingPath = Object.keys(productModules).find((path) => {
    const filename = path.split("/").pop()?.replace(".md", "");
    return filename === slug;
  });

  if (!matchingPath) {
    console.error(`No content file found for slug: ${slug}`);
    return null;
  }

  try {
    // Load the raw markdown
    const rawContent = (await productModules[matchingPath]()) as string;

    // Parse frontmatter and content
    const { data } = parseFrontmatter(rawContent);

    // The frontmatter contains all our structured data
    const content: ProductPageContent = {
      title: data.title as string || "",
      price: data.price as string || "",
      slug: data.slug as string || slug,
      route: data.route as string || "",
      seoTitle: data.seoTitle as string | undefined,
      seoDescription: data.seoDescription as string | undefined,
      breadcrumbs: data.breadcrumbs as ProductPageContent["breadcrumbs"] || [],
      categories: data.categories as ProductPageContent["categories"] || [],
      images: data.images as ProductPageContent["images"] || [],
      ctaText: data.ctaText as string || "Browse All Postcards for Free",
      ctaLink: data.ctaLink as string || "/signup",
      description: data.description as string[] || [],
      templateExamples: data.templateExamples as ProductPageContent["templateExamples"],
      startingSteps: data.startingSteps as ProductPageContent["startingSteps"],
      features: data.features as ProductPageContent["features"],
      marketingFeatures: data.marketingFeatures as ProductPageContent["marketingFeatures"],
      relatedProducts: data.relatedProducts as ProductPageContent["relatedProducts"],
      faqs: data.faqs as ProductPageContent["faqs"],
      testimonials: data.testimonials as ProductPageContent["testimonials"],
      finalCta: data.finalCta as ProductPageContent["finalCta"],
    };

    // Cache the result
    contentCache.set(slug, content);

    return content;
  } catch (error) {
    console.error(`Error loading content for ${slug}:`, error);
    return null;
  }
}

/**
 * Get all available product slugs
 */
export function getAllProductSlugs(): string[] {
  return Object.keys(productModules).map((path) => {
    const filename = path.split("/").pop()?.replace(".md", "") || "";
    return filename;
  });
}
