import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ProductGallery from "@/components/product/ProductGallery";
import ProductTrustBadges from "@/components/product/ProductTrustBadges";
import ProductTrustBadgeRow from "@/components/product/ProductTrustBadgeRow";
import TemplateExamplesGrid from "@/components/product/TemplateExamplesGrid";
import FeatureSection from "@/components/product/FeatureSection";
import MarketingSolutionGrid from "@/components/product/MarketingSolutionGrid";
import StartingStepsSection from "@/components/product/StartingStepsSection";
import RelatedProductsGrid from "@/components/product/RelatedProductsGrid";
import FAQSection from "@/components/product/FAQSection";
import Testimonials from "@/components/sections/Testimonials";
import ProductCTASection from "@/components/sections/ProductCTASection";

interface BreadcrumbItemType {
  label: string;
  href?: string;
}

interface CategoryTag {
  label: string;
  href: string;
}

interface TemplateExample {
  src: string;
  alt: string;
  href?: string;
}

interface Feature {
  title: string;
  description: string | React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  ctaText?: string;
  ctaLink?: string;
  bgColor?: "default" | "muted";
}

interface MarketingFeature {
  title: string;
  description: string;
}

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

interface FAQ {
  question: string;
  answer: string | React.ReactNode;
}

interface StartingStep {
  stepNumber: number;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}

import type { Testimonial } from "@/components/sections/Testimonials";

interface ProductPageTemplateProps {
  title: string;
  price: string;
  description: React.ReactNode;
  images: { src: string; alt: string }[];
  breadcrumbs: BreadcrumbItemType[];
  categories: CategoryTag[];
  ctaText?: string;
  ctaLink?: string;
  // New optional sections
  templateExamples?: {
    title: string;
    examples: TemplateExample[];
  };
  startingSteps?: StartingStep[];
  features?: Feature[];
  marketingFeatures?: {
    title?: string;
    subtitle?: string;
    features?: MarketingFeature[];
  };
  relatedProducts?: {
    title?: string;
    products: RelatedProduct[];
    allProductLinks?: RelatedProductLink[];
    viewAllText?: string;
    viewAllLink?: string;
  };
  faqs?: FAQ[];
  testimonials?: Testimonial[];
  finalCta?: {
    title?: string;
    subtitle?: string;
    primaryCta?: { text: string; link: string };
    secondaryCta?: { text: string; link: string };
  };
}

const ProductPageTemplate = ({
  title,
  price,
  description,
  images,
  breadcrumbs,
  categories,
  ctaText = "Browse All Postcards for Free",
  ctaLink = "/signup",
  templateExamples,
  startingSteps,
  features,
  marketingFeatures,
  relatedProducts,
  faqs,
  testimonials,
  finalCta,
}: ProductPageTemplateProps) => {
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted/50 border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumbs.map((crumb, index) => (
                <BreadcrumbItem key={index}>
                  {index < breadcrumbs.length - 1 ? (
                    <>
                      <BreadcrumbLink asChild>
                        <Link to={crumb.href || "/"}>{crumb.label}</Link>
                      </BreadcrumbLink>
                      <BreadcrumbSeparator />
                    </>
                  ) : (
                    <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Product Info */}
            <div className="order-2 lg:order-1 space-y-6">
              <div>
                <h1 className="text-[50px] leading-tight font-bold text-plum mb-2">
                  {title}
                </h1>
                <p className="text-2xl font-semibold text-plum">{price}</p>
              </div>

              {/* Trust Badges */}
              <ProductTrustBadges />

              {/* Primary CTA */}
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto rounded-full px-8 py-6 text-lg font-semibold bg-plum hover:bg-heading-accent text-white"
              >
                <Link to={ctaLink} className="flex items-center gap-2">
                  {ctaText}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>

              {/* Description */}
              <div className="prose prose-lg max-w-none text-muted-foreground">
                {description}
              </div>

              {/* Secondary CTA */}
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto rounded-full px-8 py-6 text-lg font-semibold bg-plum hover:bg-heading-accent text-white"
              >
                <Link to={ctaLink} className="flex items-center gap-2">
                  {ctaText}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>

              {/* Categories */}
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-border">
                <span className="text-sm text-muted-foreground">Categories:</span>
                {categories.map((category, index) => (
                  <span key={index}>
                    <Link
                      to={category.href}
                      className="text-sm text-primary hover:underline"
                    >
                      {category.label}
                    </Link>
                    {index < categories.length - 1 && (
                      <span className="text-muted-foreground">, </span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column - Image Gallery */}
            <div className="order-1 lg:order-2">
              <div className="sticky top-24">
                <ProductGallery images={images} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badge Row */}
      <ProductTrustBadgeRow />

      {/* Testimonials */}
      {testimonials && testimonials.length > 0 ? (
        <Testimonials testimonials={testimonials} />
      ) : (
        <Testimonials />
      )}

      {/* Template Examples Grid */}
      {templateExamples && (
        <TemplateExamplesGrid
          title={templateExamples.title}
          examples={templateExamples.examples}
        />
      )}

      {/* Starting Steps */}
      <StartingStepsSection steps={startingSteps} />

      {/* Feature Sections */}
      {features?.map((feature, index) => (
        <FeatureSection
          key={index}
          title={feature.title}
          description={feature.description}
          imageSrc={feature.imageSrc}
          imageAlt={feature.imageAlt}
          imagePosition={feature.imagePosition}
          ctaText={feature.ctaText}
          ctaLink={feature.ctaLink}
          bgColor={feature.bgColor}
        />
      ))}

      {/* Marketing Solution Grid */}
      {marketingFeatures && (
        <MarketingSolutionGrid
          title={marketingFeatures.title}
          subtitle={marketingFeatures.subtitle}
          features={marketingFeatures.features}
        />
      )}

      {/* Related Products */}
      {relatedProducts && (
        <RelatedProductsGrid
          title={relatedProducts.title}
          products={relatedProducts.products}
          allProductLinks={relatedProducts.allProductLinks}
          viewAllText={relatedProducts.viewAllText}
          viewAllLink={relatedProducts.viewAllLink}
        />
      )}

      {/* FAQ Section */}
      {faqs && faqs.length > 0 && <FAQSection faqs={faqs} />}

      {/* Final CTA */}
      {finalCta ? (
        <ProductCTASection
          title={finalCta.title}
          description={finalCta.subtitle}
        />
      ) : (
        <ProductCTASection />
      )}
    </Layout>
  );
};

export default ProductPageTemplate;
