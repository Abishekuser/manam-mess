# Manam Mess — Website

A premium landing page built for Manam Mess (Heritage Town, Puducherry) using React, Tailwind CSS, Framer Motion and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

This outputs a static `dist/` folder that can be deployed to any static host (Netlify, Vercel, GitHub Pages, or the restaurant's own hosting).

## Before going live

- **Photos**: the hero, dish, and gallery images currently use free stock photography (Unsplash) as placeholders. Swap the `src` URLs in `src/components/Hero.jsx`, `SignatureDishes.jsx`, and `Gallery.jsx` for real photos of the restaurant and its dishes.
- **Reviews**: `src/components/Reviews.jsx` contains sample testimonials written to match real feedback themes found online. Replace these with actual customer quotes (with permission) or embed live Google reviews before publishing.
- **Contact details**: phone, email, address and hours are wired to the real Manam Mess details already found online — double check these are current before launch.
- **Google Maps**: the map embed in `MapAndHours.jsx` uses a text-query embed. For a pin-accurate location, replace it with an embed URL generated from the restaurant's actual Google Maps listing.

## Structure

```
src/
  components/
    Navbar.jsx          nav + mobile menu
    Hero.jsx            hero section with CTAs
    About.jsx            about section
    SignatureDishes.jsx  dish cards
    WhyLoveUs.jsx        value props
    Reviews.jsx          testimonials
    Gallery.jsx          photo grid
    MapAndHours.jsx       map + opening hours
    Contact.jsx          contact section
    Footer.jsx
    FloatingButtons.jsx  floating WhatsApp + mobile sticky call bar
    LeafDivider.jsx      signature scalloped section divider
  App.jsx
  index.css
  main.jsx
```
