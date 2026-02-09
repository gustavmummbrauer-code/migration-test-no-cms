# Content Creator's Guide

This guide explains how to create new product pages without writing any code.

---

## Quick Start (5 Steps)

### Step 1: Download the Template
1. Go to your repository on GitHub
2. Navigate to `content/products/postcards/`
3. Click on `_template.md`
4. Click the "Download" button (or copy the raw content)
5. Rename the file to your product name (e.g., `open-house.md`)

### Step 2: Edit the Markdown File
Open the file in any text editor and fill in your content:

```yaml
title: "Open House Postcards"
price: "$1.04"
slug: "open-house"  # Must match your filename!
```

**Important:** The `slug` must exactly match your filename (without `.md`)

### Step 3: Prepare Your Images
- Create 4 product images in `.webp` format
- Name them consistently: `open-house-1.webp`, `open-house-2.webp`, etc.
- Recommended size: 800x600 pixels or larger

### Step 4: Upload to GitHub

**Upload images first:**
1. Go to `public/images/products/` in GitHub
2. Click "Add file" → "Create new file"
3. Type `open-house/placeholder.txt` (this creates the folder)
4. Click "Commit changes"
5. Navigate into the new `open-house/` folder
6. Click "Add file" → "Upload files"
7. Upload your 4 images
8. Click "Commit changes"

**Then upload your markdown file:**
1. Go to `content/products/postcards/`
2. Click "Add file" → "Upload files"
3. Upload your `open-house.md` file
4. Click "Commit changes"

### Step 5: Wait for Netlify
- Netlify automatically detects your changes
- A new build starts within 1-2 minutes
- Your page will be live at: `yoursite.com/products/postcards/open-house`

---

## File Locations

```
your-repository/
├── content/
│   └── products/
│       └── postcards/
│           ├── _template.md      ← Copy this to create new pages
│           ├── just-sold.md
│           ├── just-listed.md
│           └── open-house.md     ← Your new page
│
└── public/
    └── images/
        └── products/
            └── open-house/        ← Your images folder
                ├── open-house-1.webp
                ├── open-house-2.webp
                ├── open-house-3.webp
                └── open-house-4.webp
```

---

## Template Reference

### Required Fields

| Field | Description | Example |
|-------|-------------|---------|
| `title` | Product name shown on page | "Open House Postcards" |
| `price` | Starting price | "$1.04" |
| `slug` | URL identifier (must match filename) | "open-house" |
| `route` | Full URL path | "/products/postcards/open-house" |
| `images` | Array of 4 product images | See template |
| `description` | Array of paragraphs | See template |

### Optional Sections

| Section | Description |
|---------|-------------|
| `seoTitle` / `seoDescription` | Improves search engine visibility |
| `templateExamples` | Carousel of design templates |
| `features` | Alternating image/text sections |
| `marketingFeatures` | 6-card grid with icons |
| `relatedProducts` | Links to other products |
| `faqs` | Frequently asked questions |

---

## Available Icons

Use these names in the `marketingFeatures` section:

| Icon Name | Best For |
|-----------|----------|
| `Rocket` | Speed, getting started, launch |
| `Database` | Data, MLS integration |
| `Bell` | Notifications, alerts |
| `Map` | Location, targeting, areas |
| `Briefcase` | Business, professional |
| `Truck` | Shipping, delivery |

---

## Image Guidelines

### Product Images
- **Format:** `.webp` (preferred) or `.jpg`
- **Size:** Minimum 800x600 pixels
- **Quantity:** 4 images per product
- **Naming:** `[slug]-1.webp`, `[slug]-2.webp`, etc.

### Feature Section Images
- **Format:** `.webp` or `.svg`
- **Aspect Ratio:** 16:9 or 4:3 works best
- **Style:** Clean, professional illustrations or screenshots

---

## Troubleshooting

### Page shows "Product Not Found"
- ✅ Check that `slug` in the markdown matches the filename
- ✅ Verify the file is in `content/products/postcards/`
- ✅ Wait 2-3 minutes for Netlify to rebuild

### Images not showing
- ✅ Check image paths start with `/images/products/`
- ✅ Verify images are in `public/images/products/[slug]/`
- ✅ Ensure filenames match exactly (case-sensitive)

### YAML parsing errors
- ✅ Keep quotes around text with special characters
- ✅ Use proper indentation (2 spaces)
- ✅ Don't use tabs, only spaces

---

## Example: Complete Markdown File

```yaml
---
title: "Open House Postcards"
price: "$1.04"
slug: "open-house"
route: "/products/postcards/open-house"

breadcrumbs:
  - label: "Home"
    href: "/"
  - label: "Postcards"
    href: "/products/postcards"
  - label: "Open House Postcards"

categories:
  - label: "Postcards"
    href: "/products/postcards"

images:
  - src: "/images/products/open-house/open-house-1.webp"
    alt: "Open House Postcard Design 1"
  - src: "/images/products/open-house/open-house-2.webp"
    alt: "Open House Postcard Design 2"
  - src: "/images/products/open-house/open-house-3.webp"
    alt: "Open House Postcard Design 3"
  - src: "/images/products/open-house/open-house-4.webp"
    alt: "Open House Postcard Design 4"

ctaText: "Browse Open House Templates"
ctaLink: "/signup"

description:
  - "Drive traffic to your open houses with professional postcards that get noticed. Our open house postcards help you maximize attendance and generate more leads from every showing."
  - "Choose from dozens of eye-catching designs, customize with your property details and photos, and mail to targeted neighborhoods in minutes."
  - "With free standard shipping and no minimum orders, you can send the perfect number of postcards for any open house event."

faqs:
  - question: "How far in advance should I mail open house postcards?"
    answer: "We recommend mailing 7-10 days before your open house to ensure timely delivery and give recipients time to plan their visit."
  - question: "Can I include a QR code?"
    answer: "Yes! Our editor makes it easy to add QR codes that link to your listing, virtual tour, or registration page."
---
```

---

## Need Help?

If you encounter issues:
1. Check this guide's troubleshooting section
2. Compare your file to an existing working page (e.g., `just-sold.md`)
3. Contact the development team for assistance
