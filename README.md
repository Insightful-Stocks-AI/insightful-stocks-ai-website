# Insightful Stocks AI - Waitlist Landing Page

A single-page marketing website for Insightful Stocks AI built with Gatsby, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run develop
```

Site runs at `http://localhost:8000`

### Build

```bash
npm run build
```

### Clean Cache

```bash
npm run clean
```

## 🛠️ Tech Stack

- Gatsby v5
- TypeScript
- Tailwind CSS v4
- React v18

## 📁 Key Files

- `src/pages/index.tsx` - Main landing page
- `tailwind.config.js` - Custom colors and Tailwind config
- `src/styles/global.css` - Global styles with Tailwind imports
- `postcss.config.js` - PostCSS configuration

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to modify colors:
- `fintech-dark`: `#0F172A`
- `fintech-darker`: `#020617`
- `cta-blue`: `#3B82F6`
- `cta-teal`: `#14B8A6`

### Waitlist Form

Update the `handleSubmit` function in `src/pages/index.tsx` to integrate with your waitlist service (Mailchimp, Google Forms, or custom API).

## 🚀 Deployment

### Netlify / Vercel

1. Push code to GitHub
2. Connect repository to Netlify/Vercel
3. Build command: `npm run build`
4. Publish directory: `public`

Deploy automatically on push to main branch.

## 📝 Available Scripts

- `npm run develop` - Start dev server
- `npm run build` - Production build
- `npm run serve` - Serve production build
- `npm run clean` - Clean cache
- `npm run typecheck` - TypeScript type checking
