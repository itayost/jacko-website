# Jacko Restaurant Website - Design Principles

## Core Philosophy

**Heritage Meets Modernity**: Honor Jacko's 50+ year tradition (established 1973) while providing a contemporary digital experience that appeals to both longtime patrons and new customers.

**Mediterranean Authenticity**: Reflect the warmth, freshness, and welcoming nature of Mediterranean seaside dining through visual design and interactions.

**Simplicity & Clarity**: Allow the food imagery and essential information to shine. Avoid clutter and complexity that distracts from the core message: fresh, quality seafood.

**Accessibility for All**: Ensure the website is usable by everyone, including elderly patrons, people with disabilities, and those less familiar with technology.

**Mobile-First Reality**: Many customers will discover Jacko while searching for restaurants on their phones. The mobile experience must be excellent.

## Visual Design Principles

### 1. Color Usage

**Primary Blue (#3f88c5, #356fa3)**
- Represents the sea, freshness, and trust
- Use for primary actions (buttons, links)
- Use for navigation elements
- Use for section backgrounds with gradients

**Accent Yellow (#ffde59, #f5d445)**
- Represents warmth, sunshine, Mediterranean cuisine
- Use sparingly for highlights and accents
- Use for call-to-action emphasis
- Never use as background color for large areas

**Neutral Palette**
- White backgrounds for clean, fresh feel
- Light gray (gray-100) for alternating sections
- Dark gray/black text for maximum readability
- Avoid pure black (#000000), use dark grays instead

**Image Treatment**
- Hero images should be vibrant, appetizing food photography
- Overlay gradients (blue) over images when text is placed on top
- Ensure minimum 4.5:1 contrast ratio for text on images
- Images must be high quality but optimized for web performance

### 2. Typography

**Heebo Font Family**
- Designed for Hebrew, clean and modern
- Use font weights 300-700 (avoid extremes)
- Maintain clear hierarchy: h1 → h2 → h3 → body

**Type Scale**
- h1: 3.5rem (56px) on desktop, 2.5rem (40px) on mobile
- h2: 2.5rem (40px) on desktop, 2rem (32px) on mobile
- h3: 1.875rem (30px) on desktop, 1.5rem (24px) on mobile
- Body: 1.125rem (18px) on desktop, 1rem (16px) on mobile
- Small: 0.875rem (14px)

**Line Height**
- Headings: 1.2-1.3
- Body text: 1.6-1.7
- Tighter for buttons and UI elements: 1.4

**Text Alignment (RTL)**
- Default text-right for Hebrew content
- Never center-align body text (hard to read)
- Center headings only when appropriate for design
- Ensure all text respects RTL directionality

### 3. Spacing & Layout

**Consistent Spacing System (8px base)**
- Use multiples of 8px for spacing: 8, 16, 24, 32, 40, 48, 64, 80
- Section padding: py-20 (80px) on mobile, py-32 (128px) on desktop
- Card padding: p-6 (24px) minimum
- Component gaps: gap-4 (16px) to gap-8 (32px)

**Container Width**
- Maximum width: 1280px (max-w-7xl)
- Generous horizontal padding: px-6 (24px) on mobile, px-12 (48px) on desktop
- Never let content touch screen edges on mobile

**Whitespace Philosophy**
- Use generous whitespace to create breathing room
- Separate distinct sections clearly
- Avoid cramped layouts that feel overwhelming

### 4. Interactive Elements

**Buttons**
- Minimum height: 44px (touch-friendly)
- Rounded corners: rounded-md (6px) for modern look
- Clear hover states (darker shade, subtle lift)
- Pressed/active states for tactile feedback
- Use `btn-primary` for main actions, `btn-secondary` for alternatives
- Always include focus states for keyboard navigation

**Links**
- Underline on hover for clarity
- Color change to indicate interactivity
- Sufficient target size (minimum 44x44px)

**Forms**
- Large, clear input fields (minimum 48px height)
- Visible labels above inputs
- Helpful error messages in plain language
- Success states after submission
- Never rely on placeholder text alone

**Cards**
- Subtle hover effects (slight lift, shadow increase)
- Use `.card-hover` utility for consistency
- Maintain adequate padding around content
- Clear visual hierarchy within cards

### 5. Animation & Motion

**Framer Motion Guidelines**
- Use `whileInView` for scroll-triggered animations
- `viewport={{ once: true }}` to prevent re-triggering
- Stagger delays: `delay: index * 0.1` for sequential reveals
- Duration: 0.3-0.6s for most animations (avoid too slow)
- Use spring physics for natural feel

**Animation Types**
- Fade + slide up for section reveals
- Scale transformations for hover effects
- Parallax effects in hero section (subtle)
- Smooth carousel transitions

**Performance**
- Avoid animating layout properties (width, height)
- Use transform and opacity (GPU-accelerated)
- Respect `prefers-reduced-motion` for accessibility

### 6. Responsive Design

**Breakpoints (Tailwind)**
- Mobile: < 640px (default)
- Tablet: 640px - 1023px (sm:, md:)
- Desktop: ≥ 1024px (lg:, xl:)

**Mobile Considerations**
- Touch targets minimum 44x44px
- Hamburger menu for navigation
- Single column layouts
- Larger text for readability
- Thumb-friendly action placement (bottom)

**Tablet Considerations**
- 2-column grids where appropriate
- Optimize for both portrait and landscape
- May use desktop or mobile nav depending on width

**Desktop Considerations**
- Multi-column layouts (3-4 columns)
- Horizontal navigation
- Larger images and hero sections
- More elaborate animations

## User Experience Principles

### 1. Clear Navigation
- Always visible (sticky header)
- Current page indication
- Logo links to homepage
- Mobile menu easily accessible
- Phone number prominently displayed

### 2. Fast Performance
- Images optimized with Next.js Image component
- Lazy loading for below-fold content
- Minimal JavaScript for fast initial load
- Preload critical fonts
- Target < 3s First Contentful Paint

### 3. Scannable Content
- Break up long text into paragraphs
- Use headings to structure content
- Bullet points for lists
- Lead with key information
- Keep menu descriptions concise

### 4. Conversion-Focused
- Clear CTAs for reservations and viewing menu
- Phone number clickable on mobile
- Social media links prominent
- Hours and location easily found
- Multiple paths to key actions

### 5. Trust Building
- High-quality food photography
- Prominent display of history (since 1973)
- Social proof (social media links)
- Contact information clearly visible
- Professional, polished appearance

## Accessibility Standards (WCAG 2.1 AA)

### Required Compliance
- **Color Contrast**: 4.5:1 for normal text, 3:1 for large text
- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **Focus Indicators**: Visible focus states (never remove outline without replacement)
- **Alt Text**: Descriptive alt text for all images
- **Semantic HTML**: Proper heading hierarchy, landmarks, lists
- **Form Labels**: Every input has an associated label
- **ARIA Attributes**: When semantic HTML isn't sufficient

### Testing Checklist
- Tab through entire page (logical order)
- Use keyboard only (no mouse)
- Test with screen reader
- Check color contrast with tool
- Verify images have alt text
- Validate HTML semantics

## Content Guidelines

### Tone of Voice
- Warm and welcoming
- Professional but not formal
- Confident in quality
- Passionate about seafood
- Respectful of tradition

### Hebrew Language
- Natural, conversational Hebrew
- Avoid overly flowery language
- Use food terminology customers understand
- Proper nikud (vowel marks) not necessary
- Consistent terminology throughout

### Menu Descriptions
- Lead with main ingredients
- Mention cooking method
- Include notable accompaniments
- Keep under 20 words
- Use appetizing language without exaggeration

## Implementation Guidelines

### Component Reuse
- Use existing components from `/src/components/sections/`
- Don't duplicate similar components
- Extract common patterns into reusable components
- Maintain consistent component structure

### Data Separation
- All content in `/src/data/` files
- Never hardcode menu items, hours, or contact info
- Makes updates easy without touching code
- Supports potential future multi-language

### TypeScript
- Define types in `/src/types/`
- Type all props and data structures
- Use strict TypeScript settings
- Catch errors at compile time

### Utility Classes
- Use existing classes from `globals.css`
- `.btn-primary`, `.btn-secondary` for buttons
- `.section-padding` for consistent spacing
- `.container-custom` for page width
- `.card-hover` for card effects

## Brand Personality

**Established & Trusted**: 50+ years in business, family-run, consistent quality

**Fresh & Quality-Focused**: Daily fresh fish, local sourcing, careful preparation

**Mediterranean & Warm**: Israeli coastal culture, welcoming atmosphere, family-friendly

**Professional & Reliable**: Attention to detail, cleanliness, excellent service

---

*These principles guide all design decisions for the Jacko website. When in doubt, refer back to these core values and test against real users.*
