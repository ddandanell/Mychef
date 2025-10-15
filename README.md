# Mychef Design System

A complete design system for the Mychef platform, built with modern CSS and following accessibility best practices.

## 🎨 Color Palette

### Primary Colors
- **Creamy White**: `#FAF8F5` - Main background (90% usage)
- **Light Sage**: `#A8BFA8` - Secondary background (10% usage)
- **Forest Green**: `#2D5F3F` - Primary actions & CTA buttons
- **Terracotta**: `#D97757` - Secondary actions & accents
- **Charcoal**: `#2C2C2C` - Text (headers 100%, body 85% opacity)
- **Golden Yellow**: `#F4C542` - Accent color

### Usage Guidelines
- ✅ Use creamy white as primary background
- ✅ Forest green for main CTAs and primary actions
- ✅ Terracotta for secondary actions and highlights
- ❌ Never use pure black, neon colors, or gradients

## 🔤 Typography

### Font Family
**Inter** - Modern, clean, and excellent readability
- Primary font for headers, buttons, navigation
- Secondary font for body text
- Open-source and optimized for web

### Font Weights
- **Bold (700)**: H1, H2, Primary buttons
- **Semibold (600)**: H3, H4, Secondary buttons  
- **Medium (500)**: Navigation, labels
- **Regular (400)**: Body copy, descriptions

### Font Sizes (Responsive)

#### Desktop
- H1: 48px / Line-height: 56px
- H2: 36px / Line-height: 44px
- H3: 28px / Line-height: 36px
- H4: 24px / Line-height: 32px
- Body: 16px / Line-height: 24px

#### Mobile
- H1: 32px / Line-height: 40px
- H2: 28px / Line-height: 36px
- H3: 24px / Line-height: 32px
- Body: 16px / Line-height: 24px

## 📏 Spacing System

### 8-Point Grid System
All spacing uses multiples of 8px:
- `4px` - Micro spacing
- `8px` - Tiny spacing
- `16px` - Small spacing
- `24px` - Medium spacing
- `32px` - Large spacing
- `48px` - XL spacing
- `64px` - XXL spacing
- `96px` - XXXL spacing

## 🔘 Button System

### Button Types
1. **Primary** - Forest Green background for main CTAs
2. **Secondary** - Terracotta background for alternative actions
3. **Outline** - Transparent with Forest Green border
4. **Text** - Minimal styling for low-priority actions
5. **Icon** - Square buttons with icons

### Button Sizes
- **Small**: 32px height
- **Medium**: 40px height (default)
- **Large**: 48px height

### Usage Examples
```html
<button class="btn btn-primary">Book Now</button>
<button class="btn btn-secondary">Learn More</button>
<button class="btn btn-outline">Cancel</button>
<button class="btn btn-text">Skip</button>
```

## 🧩 Components

### Cards
```html
<div class="card">
  <div class="card-header">
    <h3>Chef Profile</h3>
  </div>
  <div class="card-body">
    <p>Content goes here</p>
  </div>
  <div class="card-footer">
    <button class="btn btn-primary">View Profile</button>
  </div>
</div>
```

### Badges
```html
<span class="badge badge-verified">Verified Chef</span>
<span class="badge badge-category">Indonesian</span>
```

### Forms
```html
<div class="form-group">
  <label class="form-label">Email Address</label>
  <input type="email" class="form-input" placeholder="your@email.com">
  <div class="form-help">We'll never share your email</div>
</div>
```

## 📱 Responsive Design

### Breakpoints
- Mobile: up to 767px
- Tablet: 768px to 1023px  
- Desktop: 1024px and above

### Grid System
- Mobile: 4-column grid
- Tablet: 8-column grid
- Desktop: 12-column grid

## 🎯 Usage

### Quick Start
1. Import the main stylesheet:
```html
<link rel="stylesheet" href="styles/main.css">
```

2. Add the Inter font:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### CSS Custom Properties
All design tokens are available as CSS custom properties:
```css
.my-component {
  background-color: var(--color-forest-green);
  padding: var(--space-medium);
  border-radius: var(--radius-card);
}
```

## 📁 File Structure
```
styles/
├── main.css          # Main import file
├── variables.css     # CSS custom properties
├── base.css         # Typography & base styles
├── buttons.css      # Button components
└── components.css   # All other UI components
```

## ♿ Accessibility

- All components meet WCAG 2.1 AA standards
- Proper focus indicators on all interactive elements
- Color contrast ratios exceed 4.5:1
- Support for reduced motion preferences
- Semantic HTML structure

## 🚀 Technology Recommendations

### Recommended Stack
- **Framework**: Next.js 14+ (React)
- **Styling**: CSS Modules or Styled Components
- **Icons**: Feather Icons or Lucide
- **Deployment**: Vercel

### Why Next.js?
- ✅ SEO-friendly with server-side rendering
- ✅ Optimized image handling
- ✅ API routes included
- ✅ Easy deployment on Vercel
- ✅ Large community support

---

**Built for Mychef - Connecting food lovers with authentic local chefs**