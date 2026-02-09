// Content types for the Markdown-based content system

export interface ProductImage {
  src: string;
  alt: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface CategoryTag {
  label: string;
  href: string;
}

export interface TemplateExample {
  src: string;
  alt: string;
  href?: string;
}

export interface Feature {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  ctaText: string;
  ctaLink: string;
  bgColor: "default" | "muted";
}

export interface MarketingFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface RelatedProduct {
  title: string;
  image: string;
  href: string;
  description?: string;
}

export interface RelatedProductLink {
  title: string;
  href: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface StartingStep {
  stepNumber: number;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  company?: string;
  image?: string;
  content: string;
  rating: number;
}

export interface ProductPageContent {
  // Core product info
  title: string;
  price: string;
  slug: string;
  route: string;

  // SEO
  seoTitle?: string;
  seoDescription?: string;

  // Navigation
  breadcrumbs: BreadcrumbItem[];
  categories: CategoryTag[];

  // Product images
  images: ProductImage[];

  // CTAs
  ctaText: string;
  ctaLink: string;

  // Description paragraphs
  description: string[];

  // Template examples section
  templateExamples?: {
    title: string;
    examples: TemplateExample[];
  };

  // Starting steps section
  startingSteps?: StartingStep[];

  // Feature sections
  features?: Feature[];

  // Marketing features grid
  marketingFeatures?: {
    title?: string;
    subtitle?: string;
    features: MarketingFeature[];
  };

  // Related products
  relatedProducts?: {
    title?: string;
    products: RelatedProduct[];
    allProductLinks?: RelatedProductLink[];
    viewAllText?: string;
    viewAllLink?: string;
  };

  // FAQs
  faqs?: FAQ[];

  // Testimonials
  testimonials?: Testimonial[];

  // Final CTA
  finalCta?: {
    title?: string;
    subtitle?: string;
    primaryCta?: { text: string; link: string };
    secondaryCta?: { text: string; link: string };
  };
}
