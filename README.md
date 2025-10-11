# XTRIUS Landing Page (Tixae.ai Brand)

A professional, brand-compliant landing page built with Next.js 14, TypeScript, and Tailwind CSS. This implementation strictly follows the official Tixae brand guidelines including typography, color palette, spacing, logo usage, and tone of voice to ensure consistent brand representation.

## Features

- ✅ **Next.js 14** with App Router
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS** for styling
- ✅ **Responsive Design** - mobile, tablet, and desktop optimized
- ✅ **Interactive Components** - hover effects, dropdowns, clickable cards
- ✅ **Optimized Images** with Next.js Image component
- ✅ **Custom Color Palette** matching original design
- ✅ **Professional UI/UX** with smooth transitions

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/AIGENTZI/xtrius-landing.git
cd xtrius-landing
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── globals.css         # Global styles with Tailwind directives
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Main page component
├── components/
│   ├── Header.tsx          # Navigation header with dropdowns
│   ├── HeroSection.tsx     # Main hero section
│   ├── TabsSection.tsx     # AI tools tabs with interactive cards
│   ├── TeamSection.tsx     # Team section with positioned testimonials
│   ├── TestimonialsSection.tsx # Industry tools testimonials
│   └── Footer.tsx          # Footer with links and social icons
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies and scripts
```

## Components Overview

### Header

- Responsive navigation with dropdown menus
- AI Agents and AI Tools dropdowns
- Contact, Developer, and Funding links
- Mobile-friendly design

### HeroSection

- Purple gradient background
- Bold typography matching original design
- Call-to-action button

### TabsSection

- Interactive tab switching
- Colored cards for AI tools (Schedulr.ai, VoicePro.ai, VirtualReception.ai)
- Clickable cards with proper button separation

### TeamSection

- Team image with positioned testimonial overlays
- Responsive design with mobile-friendly layout
- Quote testimonials from various industries

### TestimonialsSection

- Industry-specific tool cards (DentalPro, LawyerPro, E-ComControl)
- Professional testimonials with author information
- Hover effects and smooth transitions

### Footer

- Comprehensive navigation links
- Social media icons
- Professional styling

## Customization

### Colors

The custom color palette is defined in `tailwind.config.js`:

- `tixae-purple`: #8B4F9F
- `tixae-purple-dark`: #7A4190
- `tixae-purple-darker`: #42005f
- `tixae-orange`: #f49500
- `tixae-red`: #e2683e
- `tixae-blue`: #5f9cf7

### Typography

Uses the system font stack for optimal performance and consistency across platforms.

## Build for Production

```bash
npm run build
npm start
```

## Brand Compliance

This implementation strictly adheres to the official Tixae brand guidelines:

### Color Palette

- **Primary Colors**: Dark Purple (#421566), White (#ffffff), Bright Purple (#9A00F7), Black (#050A23)
- **Secondary Colors**: Peach (#D46686), Deep Purple (#490CBA)
- All colors match exact CMYK/RGB specifications from brand guidelines

### Typography

- **Primary Font**: Avenir family with Figree fallbacks (web-safe alternatives: Inter)
- **Body Text**: Avenir Book / Figree Light 300
- **Titles**: Avenir Roman / Figree Regular 400
- **Headings**: Avenir Medium / Figree Medium 500
- **Letter Spacing**: -0.025em (25pt tracking) as per brand guidelines

### Logo Usage

- Proper clearance space implementation (10mm minimum)
- Minimum size enforcement (10mm for combination mark, 2mm for lettermark)
- Correct logo variations for different backgrounds
- Adherence to brand do's and don'ts

### Tone of Voice

- Professional yet approachable communication
- Straightforward and supportive language
- Confident and future-focused messaging
- Clear, accessible technical explanations
- Emphasis on partnership and collaboration

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework with custom brand configuration
- **React** - Component-based UI library
- **Next.js Image** - Optimized image loading

## Performance Features

- Optimized images with automatic WebP conversion
- Tree-shaking and code splitting
- Server-side rendering (SSR)
- Static generation where applicable
- Responsive images with proper sizing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is owned by AIGENTZI and showcases Tixae.ai brand implementation.
