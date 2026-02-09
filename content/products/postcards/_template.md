---
# ============================================
# PRODUCT PAGE TEMPLATE
# ============================================
# HOW TO CREATE A NEW PAGE:
# 1. Copy this file and rename it (e.g., "open-house.md")
# 2. The filename becomes your URL: open-house.md → /products/postcards/open-house
# 3. Upload images to: public/images/products/[your-slug]/
# 4. Push to GitHub → Netlify auto-deploys → Your page is live!
#
# NO CODE CHANGES NEEDED - just upload files to GitHub!
# ============================================

# REQUIRED: Core Product Info
title: "Your Product Title"
price: "$1.04"
slug: "your-slug"  # Must match your filename (without .md)
route: "/products/postcards/your-slug"

# OPTIONAL: SEO (improves search rankings)
seoTitle: "Your Product Title | Wise Pelican"
seoDescription: "Brief description for search engines (under 160 characters)"

# Navigation Breadcrumbs
breadcrumbs:
  - label: "Home"
    href: "/"
  - label: "Postcards"
    href: "/products/postcards"
  - label: "Real Estate Postcards"
    href: "/products/postcards/real-estate"
  - label: "Your Product Title"
    # No href for current page

# Category Tags (shown below product info)
categories:
  - label: "Postcards"
    href: "/products/postcards"
  - label: "Real Estate Postcards"
    href: "/products/postcards/real-estate"

# ============================================
# PRODUCT IMAGES
# ============================================
# Upload 4 images to: public/images/products/[your-slug]/
# Name them: [slug]-1.webp, [slug]-2.webp, etc.
images:
  - src: "/images/products/your-slug/your-slug-1.webp"
    alt: "Front view of postcard design"
  - src: "/images/products/your-slug/your-slug-2.webp"
    alt: "Back view of postcard"
  - src: "/images/products/your-slug/your-slug-3.webp"
    alt: "Alternative design option"
  - src: "/images/products/your-slug/your-slug-4.webp"
    alt: "Close-up of print quality"

# CTA Button
ctaText: "Browse All Postcards for Free"
ctaLink: "/signup"

# ============================================
# DESCRIPTION
# ============================================
# Each item becomes a paragraph. Write 2-4 paragraphs.
description:
  - "First paragraph: Introduce the product and its main benefit. What problem does it solve for real estate agents?"
  - "Second paragraph: Explain key features or what makes this product special."
  - "Third paragraph: Include social proof or additional benefits. End with a soft call to action."

# ============================================
# TEMPLATE EXAMPLES (optional)
# ============================================
# Shows a carousel of design templates
templateExamples:
  title: "Your Product Template Examples"
  examples:
    - src: "/placeholder.svg"
      alt: "Template 1"
    - src: "/placeholder.svg"
      alt: "Template 2"
    # Add up to 8 examples

# ============================================
# FEATURE SECTIONS (optional)
# ============================================
# Alternating image/text sections. Add 2-4 features.
features:
  - title: "Feature Headline"
    description: "Explain the benefit in 1-2 sentences."
    imageSrc: "/placeholder.svg"
    imageAlt: "Feature illustration"
    imagePosition: "left"  # or "right"
    ctaText: "Get Started"
    ctaLink: "/signup"
    bgColor: "default"  # or "muted" for gray background

# ============================================
# MARKETING FEATURES GRID (optional)
# ============================================
# 6-card grid with icons. Available icons:
# Rocket, Database, Bell, Map, Briefcase, Truck
marketingFeatures:
  title: "A Marketing Solution Built for REALTORS®"
  features:
    - title: "Express Editor"
      description: "Quickly customize postcard templates, upload images, adjust colors, and load MLS data—no design skills needed."
      icon: "Rocket"
    - title: "MLS Integration"
      description: "Select listings and instantly fill postcards with MLS photos and details, covering 95% of all listings."
      icon: "Database"
    - title: "Automated Seller Valuation"
      description: "Track potential leads with postcards that notify you instantly when scanned for timely follow-up."
      icon: "Bell"
    - title: "Mailing List Pro"
      description: "Use advanced filters for targeted mailings, see turnover rates, and find high-potential areas for max impact."
      icon: "Map"
    - title: "Subscription Plans"
      description: "Maximize campaign effectiveness with four mailing plans to optimize mailing performance and unlock savings."
      icon: "Briefcase"
    - title: "No Minimum Orders"
      description: "Enjoy free standard shipping with no minimums—mail any quantity, anytime, without extra costs."
      icon: "Truck"

# ============================================
# RELATED PRODUCTS (optional)
# ============================================
relatedProducts:
  title: "Explore Our Full Range of Real Estate Postcards"
  viewAllText: "View All Postcards"
  viewAllLink: "/products/postcards/real-estate"
  products:
    - title: "Just Listed Postcards"
      image: "/placeholder.svg"
      href: "/products/postcards/just-listed"
      description: "Announce new listings to the neighborhood"
    - title: "Just Sold Postcards"
      image: "/placeholder.svg"
      href: "/products/postcards/just-sold"
      description: "Share your recent success"
  allProductLinks:
    - title: "Just Listed Postcards"
      href: "/products/postcards/just-listed"
    - title: "Just Sold Postcards"
      href: "/products/postcards/just-sold"

# ============================================
# FAQs (optional)
# ============================================
# Add 3-6 frequently asked questions
faqs:
  - question: "How quickly will my postcards be printed and mailed?"
    answer: "Orders are typically printed within 1-2 business days and mailed via USPS First Class. Most postcards are delivered within 3-5 business days after mailing."
  - question: "Can I upload my own photos?"
    answer: "Yes! You can easily upload your own property photos, headshots, and logo through our online editor. We recommend high-resolution images (at least 300 DPI) for best print quality."
  - question: "What size are the postcards?"
    answer: "Our standard postcards are 6\" x 9\" which is the ideal size for maximum visibility and impact. We also offer 4\" x 6\" and 5\" x 7\" options for different mailing needs."
---
