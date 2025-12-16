# Wedding Invitation Website

## Overview
This project is a full-stack JavaScript application for a wedding invitation website for Jirard Elmo & Toni Kaith, celebrating their wedding on January 27, 2026. It features a responsive, interactive, and modern design with multiple sections including hero, slideshow, invitation details, countdown, story, venue, RSVP, and more. The website aims to provide an elegant and engaging experience for wedding guests. Key capabilities include an interactive quiz game to reveal different invitation designs, background music with user interaction, and SEO optimization.

## User Preferences
- Background music should play automatically when clicking "Open Invitation" with NO control buttons
- Clean, sophisticated design without visual artifacts or decorative elements that interfere with images
- Elegant wedding-appropriate typography using Google Fonts

## System Architecture
The application is a full-stack JavaScript project using a React frontend with TypeScript, Vite for bundling, and Tailwind CSS with shadcn/ui for styling. The backend is an Express.js server also written in TypeScript. Routing is handled by Wouter, and server state management uses TanStack Query. Data is currently stored in-memory using MemStorage, with potential for PostgreSQL integration. The UI/UX incorporates a dark mode aesthetic with an "old money" style, elegant Google Fonts (Playfair Display, Cormorant Garamond, Inter), and sophisticated components from shadcn/ui. Core features include an interactive quiz game that determines the invitation design (premium vs. standard based on score), responsive design for various devices, and a background music feature that respects user interaction for playback. The system is designed for deployment on platforms like Replit, with specific configurations for port handling and static asset serving.

## External Dependencies
- **Cloudinary CDN**: Used for hosting audio files and images.
- **Google Fonts**: Playfair Display, Cormorant Garamond, Inter for typography.
- **Tailwind CSS**: For utility-first styling.
- **shadcn/ui**: UI component library.
- **TanStack Query**: For server state management.
- **Wouter**: For client-side routing.
- **Express.js**: Backend server framework.
- **Vite**: Frontend build tool.

## Recent Changes
- **2025-12-16**: Updated wedding details for Jirard Elmo & Toni Kaith:
  - Updated couple names to "Jirard Elmo & Toni Kaith"
  - Changed wedding date to January 27, 2026 at 2:00 PM
  - Updated venues:
    - Ceremony: Diocesan Shrine and Parish of St. Pio of Pietrelcina (formerly San Pedro Calungsod)
    - Reception: The Chandelier Events Place
  - Updated principal sponsors attire:
    - NINONG: Black Suit, White Inner Shirt, Dark Brown Neck Tie
    - NINANG: Dark Brown Long Gown
  - Updated guests dress code:
    - Guests to wear formal or semi-formal attire in any shade from the color palette
  - Updated wedding guest color palette with new earth tones:
    - Sage Green (#8FA792), Light Olive (#9DAE91), Soft Green (#B9C4B2), Cream (#E3DECC), Beige (#DDCFB6), Tan (#C8B8A1)
  - Updated gift guide message to request monetary gifts as the couple begins their new life
  - Updated HTML title and meta descriptions with new couple names and date
  - Updated countdown timer to January 27, 2026 at 2:00 PM
  - Updated all footer content with new couple names

- **2025-11-07**: Complete content overhaul for Dong & Riza's wedding:
  - Updated all components with new couple names "Dong & Riza"
  - Changed wedding date to January 10, 2026 at 2:00 PM
  - Updated venues to two separate locations
  - Updated dress code section with new Filipino formal attire guidelines
  - Updated wedding guest color motif with earth tones
  - Updated countdown timer to January 10, 2026 at 2:00 PM
  - Completely redesigned love story section

