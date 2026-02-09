import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import TrustBadges from "@/components/sections/TrustBadges";
import ProductShowcase from "@/components/sections/ProductShowcase";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Trust Badges */}
      <TrustBadges />

      {/* Product Showcase */}
      <ProductShowcase />

      {/* How It Works */}
      <HowItWorks />

      {/* Testimonials */}
      <Testimonials />

      {/* Final CTA */}
      <CTASection />
    </Layout>
  );
};

export default Index;
