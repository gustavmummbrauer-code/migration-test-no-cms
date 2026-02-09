
# Self-Service Page Creation System

## Current Situation

Right now, adding a new page requires **two steps**:
1. Create a markdown file in `content/products/postcards/`
2. Add a route line in `src/App.tsx` (this requires code knowledge)

The goal is to make step 2 automatic so you can just upload files to GitHub and have pages appear.

---

## The Solution: Dynamic Routing

I'll modify the routing system to automatically detect all markdown files and create routes for them. This means:

- **No more editing App.tsx** for new product pages
- Just upload your markdown file + images to GitHub
- Netlify rebuilds and your page is live

---

## Your New Workflow

```text
Step 1: Create Markdown File
   Copy _template.md → rename to your-product.md → fill in content

Step 2: Upload Images to GitHub
   Add images to: public/images/products/your-product/
   (4 product images, named consistently)

Step 3: Upload Markdown File to GitHub
   Add your .md file to: content/products/postcards/

Step 4: Netlify Auto-Deploys
   Your page is live at: /products/postcards/your-product
```

**Time required: ~10 minutes** (excluding content writing)

---

## Where to Upload Files in GitHub

```text
your-repository/
├── content/
│   └── products/
│       └── postcards/
│           ├── _template.md      ← Copy this
│           ├── just-sold.md      ← Existing page
│           ├── just-listed.md    ← Existing page
│           └── open-house.md     ← Your new file
│
└── public/
    └── images/
        └── products/
            ├── just-sold/        ← Existing images
            ├── just-listed/      ← Existing images
            └── open-house/       ← Your new images folder
                ├── open-house-1.webp
                ├── open-house-2.webp
                ├── open-house-3.webp
                └── open-house-4.webp
```

---

## What I'll Create

### 1. Dynamic Route Component
Modify the routing to automatically pick up any markdown file as a valid route, without manual registration.

### 2. Improved Template File
Update `_template.md` with clearer instructions and a simpler structure for content writers.

### 3. Quick Reference Guide
A `CONTENT-GUIDE.md` file in your repository that explains:
- How to create new pages
- Where to put images
- How to format the markdown
- Available icons for features

---

## Technical Details

### Files to Modify

| File | Change |
|------|--------|
| `src/App.tsx` | Add catch-all route for `/products/postcards/:slug` |
| `content/products/postcards/_template.md` | Simplify and add more guidance |

### Files to Create

| File | Purpose |
|------|---------|
| `CONTENT-GUIDE.md` | Step-by-step instructions for creating pages |

### How Dynamic Routing Works

Instead of:
```tsx
<Route path="/products/postcards/just-sold" element={<ProductPage slug="just-sold" />} />
<Route path="/products/postcards/just-listed" element={<ProductPage slug="just-listed" />} />
// ...add more manually...
```

We'll use:
```tsx
<Route path="/products/postcards/:slug" element={<DynamicProductPage />} />
```

This automatically handles any slug, looking up the matching markdown file.

---

## Available Icons for Marketing Features

When writing markdown, you can use these icon names:

| Icon Name | Description |
|-----------|-------------|
| `Rocket` | Speed, launch, getting started |
| `Database` | Data, MLS integration |
| `Bell` | Notifications, alerts |
| `Map` | Location, targeting |
| `Briefcase` | Business, professional |
| `Truck` | Shipping, delivery |

---

## Example: Creating an "Open House Postcards" Page

### Step 1: Copy Template
Download `_template.md` and rename to `open-house.md`

### Step 2: Edit the Markdown
```yaml
title: "Open House Postcards"
price: "$1.04"
slug: "open-house"
route: "/products/postcards/open-house"

images:
  - src: "/images/products/open-house/open-house-1.webp"
    alt: "Open House Postcard Design 1"
  # ... more images

description:
  - "Your first paragraph about open house postcards..."
  - "Second paragraph with more details..."
```

### Step 3: Upload to GitHub
1. Go to your repository on GitHub
2. Navigate to `content/products/postcards/`
3. Click "Add file" then "Upload files"
4. Upload `open-house.md`
5. Navigate to `public/images/products/`
6. Create folder `open-house/`
7. Upload your 4 product images

### Step 4: Wait for Netlify
Netlify automatically detects the change and rebuilds (usually 1-2 minutes)

### Step 5: Visit Your Page
Go to `yoursite.com/products/postcards/open-house`

---

## Summary

After implementation, creating a new page requires:
1. One markdown file (copy from template)
2. Product images in the right folder
3. Upload to GitHub
4. Wait for Netlify to build

No code changes needed. No developer assistance required.
