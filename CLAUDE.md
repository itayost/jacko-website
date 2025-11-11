# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 restaurant website for "Jacko" (ג׳קו) - a seafood restaurant in Netanya, Israel established in 1973. The site is built with:
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Hook Form** + **Zod** for form validation
- **Embla Carousel** for image carousels

The site is **RTL (right-to-left)** for Hebrew language support and uses the Heebo font.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Lint code
npm run lint

# Format code with Prettier
npm run format
```

Development server runs on `http://localhost:3000`.

## Architecture

### Directory Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── about/page.tsx     # About page
│   ├── menu/page.tsx      # Menu page
│   ├── contact/page.tsx   # Contact page
│   ├── layout.tsx         # Root layout with Navigation/Footer
│   └── globals.css        # Global styles and Tailwind config
├── components/
│   ├── layout/            # Layout components (Navigation, Footer)
│   ├── sections/          # Page sections (Hero, Story, Features, etc.)
│   └── ui/                # Reusable UI components
├── data/                  # Static data files (menu, contact info, about)
├── types/                 # TypeScript type definitions
├── hooks/                 # Custom React hooks
├── utils/                 # Utility functions
└── lib/                   # Library code (utils, constants)
```

### Key Architecture Patterns

#### 1. Data-Driven Content
Content is separated from components in `/src/data/`:
- `menu.ts` - Menu items by category
- `contact.ts` - Contact information, hours, parking
- `about.ts` - Restaurant story and history

This allows easy content updates without touching components.

#### 2. Section-Based Components
Pages are composed of section components in `/src/components/sections/`:
- Each section is self-contained with its own animations and layout
- Sections follow a consistent pattern: Header → Content → CTA
- Complex sections have subdirectories (e.g., `about/`, `menu/`, `contact/`)

#### 3. Type Safety
TypeScript types are centralized in `/src/types/`:
- `menu.ts` - Menu items and categories
- `contact.ts` - Contact info structure
- `about.ts` - About page content types

#### 4. Path Aliases
The project uses `@/*` path alias pointing to `src/*`:
```typescript
import { contactInfo } from '@/data/contact'
import { cn } from '@/lib/utils'
```

### Styling Conventions

#### Color Scheme
The site uses a blue and yellow color palette defined in `globals.css`:
```css
--blue-primary: 63 136 197;   /* Main blue */
--blue-dark: 53 111 163;       /* Darker blue for hover */
--yellow-accent: 255 222 89;   /* Accent yellow */
--yellow-dark: 245 212 69;     /* Darker yellow */
```

**Important:** When making design changes, keep these brand colors. Do not replace them with other colors.

#### Tailwind Utilities
Custom utility classes in `globals.css`:
- `.card-hover` - Subtle card hover effect
- `.btn-base`, `.btn-primary`, `.btn-secondary` - Button styles
- `.container-custom` - Container with generous padding
- `.section-padding` - Consistent section spacing (py-20 md:py-32)
- `.section-gray` - Light gray background for alternating sections

#### RTL Considerations
- The site uses `dir="rtl"` on the HTML element
- Text alignment defaults to right
- Flexbox and grid reverse automatically
- Carousels need RTL-specific logic (see MenuPreview.tsx)

### Animation Patterns

The site uses Framer Motion extensively:
- **Scroll-triggered animations**: `whileInView` with `viewport={{ once: true }}`
- **Staggered delays**: Sequential animations with `delay: index * 0.1`
- **Parallax effects**: Hero section uses `useScroll` and `useTransform`
- **Carousel animations**: Embla Carousel with autoplay

### SEO and Metadata

The root `layout.tsx` includes:
- Comprehensive metadata (Open Graph, Twitter Cards)
- JSON-LD structured data for Restaurant schema
- Multi-language alternate links
- Complete icon and manifest configuration

### Forms

Contact/reservation forms use:
- React Hook Form for form state
- Zod for validation schemas
- Custom `FormField` component for consistent styling
- Hooks: `useReservation.ts` for form logic

## Important Notes

### Image Assets
Images are expected in `/public/images/`:
- `/images/logo.png` - Restaurant logo
- `/images/hero-bg.jpg` - Hero background
- `/images/gallery/` - Gallery images
- `/images/og-image.jpg` - Social media preview

### Environment Variables
Set `NEXT_PUBLIC_BASE_URL` for production deployment (defaults to Vercel URL).

### Component Conventions
- Use TypeScript for all components
- Export components as default
- Use 'use client' directive for interactive components (animations, state)
- Follow existing animation patterns for consistency

### Data Updates
To update menu items, hours, or contact info, edit files in `/src/data/` rather than hardcoding in components.

## Design Review System

This project includes an automated design review system to ensure visual consistency, accessibility, and user experience quality.

### Design Standards
Comprehensive design guidelines are maintained in:
- **Design Principles**: `.claude/context/design-principles.md` - Core design philosophy, visual principles, UX guidelines
- **Style Guide**: `.claude/context/style-guide.md` - Brand colors, typography, spacing, components

**Key Brand Standards:**
- **Colors**: Blue primary (#3f88c5), Yellow accent (#ffde59)
- **Typography**: Heebo font family
- **Spacing**: 8px base system
- **RTL Layout**: Right-to-left for Hebrew
- **Accessibility**: WCAG 2.1 AA compliance

### Running Design Reviews

**On-Demand Reviews:**
Use the `/design-review` slash command to trigger a comprehensive design review of your recent changes. The review will:
1. Analyze git diff to understand changes
2. Check compliance with design principles and style guide
3. Test the live site using Playwright (at `http://localhost:3000`)
4. Verify responsive design (desktop, tablet, mobile)
5. Test accessibility (keyboard navigation, contrast, ARIA)
6. Provide categorized feedback (Blockers, High-Priority, Medium-Priority, Nitpicks)

**Before Running Reviews:**
- Ensure dev server is running (`npm run dev`)
- Make sure you have recent changes to review (check `git status`)
- Playwright MCP should be configured (`.playwright-mcp/` directory)

**Review Checklist:**
When making UI/design changes, ensure:
- [ ] Using brand colors (blue/yellow palette)
- [ ] Following spacing system (multiples of 8px)
- [ ] RTL layout works correctly
- [ ] Using existing utility classes (`.btn-primary`, `.section-padding`)
- [ ] Responsive on all breakpoints (mobile, tablet, desktop)
- [ ] Accessible (keyboard navigation, focus states, contrast)
- [ ] Smooth Framer Motion animations
- [ ] Images optimized with Next.js Image component

### Design Agent
A specialized design review agent is available at `.claude/agents/design-review.md` for automated reviews during development and PR processes.
