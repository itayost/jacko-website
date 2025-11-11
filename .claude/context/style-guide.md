# Jacko Restaurant - Brand Style Guide

## Brand Identity

**Name**: ג׳קו (Jacko)
**Tagline**: מסעדת דגים ומאכלי ים (Seafood Restaurant)
**Established**: 1973
**Location**: נתניה (Netanya), Israel
**Category**: Mediterranean Seafood Restaurant

## Logo

**Primary Logo**: `/images/logo.png`
- Use on white or light backgrounds
- Maintain clear space around logo (minimum 20px)
- Never distort or skew
- Never change colors
- Never add effects (shadows, gradients)
- Minimum size: 60px height on desktop, 50px on mobile

**Logo Usage**
- Navigation header (left side in RTL layout)
- Footer
- Social media
- Favicon

## Color Palette

### Primary Colors

**Blue Primary**
- Hex: `#3f88c5`
- RGB: `rgb(63, 136, 197)`
- Tailwind: `bg-blue-primary` or `text-blue-primary`
- CSS Variable: `rgb(var(--blue-primary))`
- Usage: Primary buttons, links, navigation, section backgrounds

**Blue Dark**
- Hex: `#356fa3`
- RGB: `rgb(53, 111, 163)`
- Tailwind: `bg-blue-dark` or `text-blue-dark`
- CSS Variable: `rgb(var(--blue-dark))`
- Usage: Hover states, darker accents, depth

### Accent Colors

**Yellow Accent**
- Hex: `#ffde59`
- RGB: `rgb(255, 222, 89)`
- Tailwind: `bg-yellow-accent` or `text-yellow-accent`
- CSS Variable: `rgb(var(--yellow-accent))`
- Usage: Highlights, decorative elements, secondary CTAs

**Yellow Dark**
- Hex: `#f5d445`
- RGB: `rgb(245, 212, 69)`
- Tailwind: `bg-yellow-dark` or `text-yellow-dark`
- CSS Variable: `rgb(var(--yellow-dark))`
- Usage: Hover states for yellow elements

### Neutral Colors

**White**
- Hex: `#ffffff`
- Usage: Primary background, card backgrounds, text on dark backgrounds

**Gray Light**
- Tailwind: `bg-gray-100` (#f3f4f6)
- Usage: Alternating section backgrounds, subtle dividers

**Gray Medium**
- Tailwind: `text-gray-600` (#4b5563)
- Usage: Secondary text, captions

**Gray Dark / Black**
- Tailwind: `text-gray-900` (#111827) or `text-black`
- Usage: Primary text content

### Color Combinations

**Approved Combinations:**
- Blue primary + Yellow accent (primary brand combination)
- White background + Blue primary text
- Blue primary background + White text
- Gray-100 background + Blue primary accents

**Avoid:**
- Yellow on white (poor contrast)
- Blue primary + Blue dark together without hierarchy
- Too many colors in one section (limit to 3)

## Typography

### Font Family

**Primary Font**: Heebo
- Weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)
- Google Fonts: `https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800;900&display=swap`
- Optimized for Hebrew language
- Fallback: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

### Type Scale

**Desktop**
```
Heading 1 (h1):    56px / 3.5rem    - Bold (700)    - Line height: 1.2
Heading 2 (h2):    40px / 2.5rem    - Bold (700)    - Line height: 1.3
Heading 3 (h3):    30px / 1.875rem  - Semi-Bold (600) - Line height: 1.4
Heading 4 (h4):    24px / 1.5rem    - Semi-Bold (600) - Line height: 1.4
Body Large:        20px / 1.25rem   - Regular (400)  - Line height: 1.7
Body:              18px / 1.125rem  - Regular (400)  - Line height: 1.6
Body Small:        16px / 1rem      - Regular (400)  - Line height: 1.6
Caption:           14px / 0.875rem  - Regular (400)  - Line height: 1.5
```

**Mobile**
```
Heading 1 (h1):    40px / 2.5rem    - Bold (700)    - Line height: 1.2
Heading 2 (h2):    32px / 2rem      - Bold (700)    - Line height: 1.3
Heading 3 (h3):    24px / 1.5rem    - Semi-Bold (600) - Line height: 1.4
Heading 4 (h4):    20px / 1.25rem   - Semi-Bold (600) - Line height: 1.4
Body Large:        18px / 1.125rem  - Regular (400)  - Line height: 1.7
Body:              16px / 1rem      - Regular (400)  - Line height: 1.6
Body Small:        14px / 0.875rem  - Regular (400)  - Line height: 1.6
Caption:           13px / 0.8125rem - Regular (400)  - Line height: 1.5
```

### Typography Usage

**Headings**
- Use proper semantic HTML (h1, h2, h3, h4)
- Only one h1 per page
- Maintain logical hierarchy
- Color: Blue primary or default black
- Never use all caps for long headings

**Body Text**
- Regular weight (400) for readability
- Black or dark gray color
- Line height 1.6-1.7 for comfortable reading
- Maximum line length: ~70 characters

**Links**
- Color: Blue primary
- Hover: Blue dark
- Underline on hover
- Never underline by default in body text

**Emphasis**
- Use Semi-Bold (600) for emphasis
- Avoid italic for Hebrew text (looks awkward)
- Use color sparingly for emphasis

## Spacing System

### Base Unit: 8px

All spacing uses multiples of 8px for consistency:

```
4px   - 0.5    - Tiny gaps
8px   - 1      - Minimal spacing
16px  - 2      - Small spacing
24px  - 3      - Medium spacing
32px  - 4      - Large spacing
40px  - 5      - Extra large
48px  - 6      - Section internal padding
64px  - 8      - Large section spacing
80px  - 10     - Section padding mobile
128px - 16     - Section padding desktop
```

### Layout Spacing

**Section Padding**
- Mobile: `py-20` (80px top/bottom)
- Desktop: `py-32` (128px top/bottom)

**Container Padding**
- Mobile: `px-6` (24px left/right)
- Tablet: `px-8` (32px left/right)
- Desktop: `px-12` (48px left/right)

**Component Spacing**
- Card padding: `p-6` or `p-8`
- Element gaps: `gap-4` to `gap-8`
- Margin between sections: Use section padding utilities

## Buttons

### Primary Button (`.btn-primary`)
```
Background: Blue primary (#3f88c5)
Text: White
Padding: 12px 24px (py-3 px-6)
Border Radius: 6px (rounded-md)
Font Weight: 600 (Semi-Bold)
Font Size: 16px

Hover State:
  Background: Blue dark (#356fa3)
  Shadow: Shadow-lg

Focus State:
  Outline: 2px blue primary
  Outline offset: 2px
```

### Secondary Button (`.btn-secondary`)
```
Background: White
Text: Black
Border: 2px solid Blue primary
Padding: 12px 24px (py-3 px-6)
Border Radius: 6px (rounded-md)
Font Weight: 600 (Semi-Bold)
Font Size: 16px

Hover State:
  Background: Blue primary
  Text: White

Focus State:
  Outline: 2px blue primary
  Outline offset: 2px
```

### Button Sizes
- **Small**: `px-4 py-2` (16px x 8px)
- **Regular**: `px-6 py-3` (24px x 12px)
- **Large**: `px-8 py-4` (32px x 16px)

### Button States
- **Default**: Normal appearance
- **Hover**: Darker background, slight shadow
- **Active/Pressed**: Slightly darker, no shadow
- **Disabled**: Opacity 0.5, no hover effects, cursor not-allowed
- **Focus**: Visible outline (never remove)

## Cards

### Card Style
```
Background: White
Border: 1px solid gray-200 (optional)
Border Radius: 16px (rounded-2xl)
Shadow: Shadow-lg
Padding: 24px (p-6) or 32px (p-8)

Hover State:
  Transform: translateY(-4px)
  Shadow: Shadow-2xl
  Transition: 300ms ease
```

### Card Variants

**Image Card** (Menu items, features)
- Image fills top portion or entire card
- Content overlays on bottom with gradient
- Text in white over gradient overlay

**Content Card** (About, info sections)
- White background
- Border or shadow for definition
- Adequate padding around content

## Forms

### Input Fields
```
Height: 48px minimum
Padding: 12px 16px
Border: 1px solid gray-300
Border Radius: 6px (rounded-md)
Font Size: 16px (prevents zoom on iOS)

Focus State:
  Border: 2px solid blue primary
  Outline: None (replaced by border)

Error State:
  Border: 2px solid red-500
  Error message below in red-500

Success State:
  Border: 2px solid green-500
```

### Labels
- Placed above input
- Font weight: 500 (Medium)
- Color: Gray-700
- Margin bottom: 8px

### Error Messages
- Color: Red-500
- Font size: 14px
- Display below field
- Clear, helpful language

## Icons

### Icon Set: Lucide React

**Common Icons:**
- Menu: `Menu` (hamburger menu)
- Close: `X` (close menu)
- Phone: `Phone`
- Mail: `Mail`
- MapPin: `MapPin`
- Facebook: `Facebook`
- Instagram: `Instagram`
- ChevronDown: `ChevronDown`
- ChevronRight: `ChevronRight`
- ChevronLeft: `ChevronLeft`

**Icon Sizes:**
- Small: 16px
- Regular: 20px
- Medium: 24px
- Large: 32px

**Icon Colors:**
- Default: Inherit text color
- Primary: Blue primary
- Accent: Yellow accent

## Photography Style

### Image Guidelines

**Food Photography**
- Well-lit, natural lighting preferred
- Close-up shots showing texture and freshness
- Vibrant colors (especially for fish)
- Clean plating and presentation
- High resolution (min 1920px width)

**Restaurant Photography**
- Welcoming atmosphere
- Show seating and ambiance
- Natural lighting when possible
- Clean, organized appearance

**Image Treatment**
- Optimize for web (Next.js Image component)
- Provide alt text for accessibility
- Use appropriate aspect ratios
- Apply gradient overlays when placing text

### Image Formats
- JPG for photographs
- PNG for logos and graphics with transparency
- WebP served automatically by Next.js
- SVG for icons and simple graphics

## Animations

### Transition Timing
- **Fast**: 150ms - Small UI changes
- **Normal**: 300ms - Most transitions
- **Slow**: 600ms - Page sections, reveals

### Easing Functions
- **ease-in-out**: Default for most animations
- **ease-out**: Entry animations
- **ease-in**: Exit animations
- **spring**: Framer Motion physics (natural feel)

### Animation Patterns

**Fade In + Slide Up**
```javascript
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

**Staggered Animations**
```javascript
transition={{ duration: 0.6, delay: index * 0.1 }}
```

**Hover Lift**
```css
transition: transform 300ms ease, shadow 300ms ease
hover:transform: translateY(-4px)
```

## Accessibility

### Minimum Requirements

**Color Contrast**
- Normal text: 4.5:1 ratio minimum
- Large text (18px+): 3:1 ratio minimum
- UI components: 3:1 ratio minimum

**Touch Targets**
- Minimum size: 44x44px
- Adequate spacing between targets
- Works with touch, mouse, and keyboard

**Focus States**
- Always visible
- Clear contrast with background
- Never remove without replacement

**Alt Text**
- Descriptive for meaningful images
- Empty alt="" for decorative images
- Context-appropriate descriptions

## RTL (Right-to-Left) Guidelines

### Layout Direction
- HTML dir="rtl" attribute
- Text aligns right by default
- Flexbox and Grid automatically reverse
- Margins/padding reverse (mr becomes ml in RTL)

### Special Considerations
- Navigation on right side
- Icons that indicate direction must flip
- Carousel arrows reverse
- Ensure all Tailwind classes work in RTL
- Test thoroughly in Hebrew

### Text Direction
- Hebrew content: RTL
- English content (if any): LTR with dir="ltr"
- Numbers display LTR even in RTL context
- Punctuation behaves correctly

## Responsive Design

### Breakpoints (Tailwind)
```
sm:  640px   - Small tablets
md:  768px   - Tablets
lg:  1024px  - Laptops
xl:  1280px  - Desktops
2xl: 1536px  - Large screens
```

### Layout Patterns

**Mobile (< 640px)**
- Single column layouts
- Stacked navigation (hamburger menu)
- Larger touch targets
- Simplified content

**Tablet (640px - 1023px)**
- 2-column layouts
- Transitional navigation
- Balanced content density

**Desktop (≥ 1024px)**
- Multi-column layouts (3-4 columns)
- Horizontal navigation
- Richer interactions
- More visual elements

## Best Practices

### DO:
✓ Use existing utility classes
✓ Follow the 8px spacing system
✓ Test on mobile devices
✓ Check accessibility
✓ Optimize images
✓ Use semantic HTML
✓ Maintain brand colors
✓ Test in RTL layout

### DON'T:
✗ Create one-off custom styles
✗ Use arbitrary spacing values
✗ Ignore mobile breakpoints
✗ Remove focus indicators
✗ Use unoptimized images
✗ Skip alt text
✗ Change brand colors
✗ Assume LTR layout

---

*This style guide ensures consistency across the Jacko website. All design and development should reference these standards.*
