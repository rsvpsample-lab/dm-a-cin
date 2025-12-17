# Wedding Invitation Website

## Overview
This project is a full-stack JavaScript application for a wedding invitation website for Robel & Veronica, celebrating their wedding on January 20, 2026. It features a responsive, interactive, and modern design with multiple sections including hero, slideshow, invitation details, countdown, story, venue, RSVP, and more. The website aims to provide an elegant and engaging experience for wedding guests. Key capabilities include an interactive quiz game to reveal different invitation designs, background music with user interaction, and SEO optimization.

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
- **2025-12-17**: Restructured cover images and removed Save the Date video:
  - Removed Save the Date video section
  - Added Cover 1 image after timeline
  - Added Cover 3 image between Entourage and RSVP sections
  - All covers using Cloudinary CDN for optimal performance

- **2025-12-17**: Updated RSVP link and SEO metatags:
  - RSVP link now points to https://robel-veronica-rsvp.replit.app
  - Updated page title to "Robel & Veronica Wedding Invitation | January 20, 2026"
  - Updated meta description with correct wedding details (date, venue, location)
  - Updated Open Graph tags for social media sharing
  - Updated Twitter card tags with hero image from Cloudinary
  - All metatags now reflect Robel & Veronica's wedding on January 20, 2026 at Gospel Baptist Church

- **2025-12-17**: Added Entourage link to navigation menu
  - Link appears in both desktop and mobile navigation
  - Scrolls smoothly to entourage section when clicked

- **2025-12-17**: Refined entourage layout formatting:
  - Principal Sponsors: Single sponsors (Mrs. Che Austral, Kgwd. Tessie Porceso, Mr. Duphin Pescadilla, Miss Shalyn Galanza) now centered between partner columns
  - Groomsmen & Bridesmaids: Improved responsive layout with proper centering for unequal counts

- **2025-12-17**: Updated complete entourage section:
  - Parents: Roble Dilag Andales SR., Elisam Dela Torre Andales, and Myrna D. Mangibin
  - 25 Principal Sponsor couples with pastors and officiants
  - Candle, Veil & Cord sponsors (3 couples)
  - Best Man: Pastor Mark Anthony Mahinay
  - 2 Maids of Honor: Vanissa Mae and Vianca Mangibin
  - 11 Groomsmen and 13 Bridesmaids
  - 3 Bearers: Bible, Coin, and Ring (Peñaflorida siblings)
  - 4 Flower Maidens
  - Little Bride: Alwina D. Milleza
  - 2 Wedding Officiants: Pastor Felixberto A. Peñaflorida and Pastor Sandy Villasis

- **2025-12-17**: Updated polaroid invitation images:
  - Groom image: New custom photo
  - Soulmates image: Beautiful couple photo
  - Bride image: New custom photo
  - Changed polaroid labels from "soulmates/forever/beloved" to "groom/soulmates/bride"

- **2025-12-17**: Updated all website images and background music:
  - Background music: "Us Together Lyric video" from Cloudinary
  - Hero image: New custom wedding photo
  - Love story image: "Our Story" couple photo
  - Gift guide image: Updated design photo
  - Venue image: Gospel Baptist Church photo
  - All prenup photos: 15+ wedding photos from Cloudinary
  - Cover images: Updated cover1, cover2, cover3
  - Migrated all images from local assets to Cloudinary CDN for better performance

- **2025-12-17**: Updated theme colors with enhanced visibility:
  - Changed primary color to Dark Slate Grey (#646566)
  - Updated shadow colors to Soft Beige (#E2CBAA) with increased opacity (0.5)
  - Updated all accent colors to Soft Beige for the new elegant look
  - Increased shadow opacity for better visibility and contrast
  - Applied new color scheme throughout all components

- **2025-12-17**: Updated wedding details for Robel & Veronica:
  - Updated couple names to "Robel & Veronica"
  - Changed wedding date to January 20, 2026 (01.20.26 | Tuesday) at 3:00 PM
  - Updated venue to single combined ceremony and reception location:
    - Gospel Baptist Church, Brgy. Mandalagan, Bacolod City
  - Updated timeline:
    - 3:00 PM - Guest Arrival
    - 4:00 PM - Wedding Ceremony
    - 5:00 PM - Photo Session & Refreshments
    - 6:30 PM - Reception
  - Updated attire guide:
    - Entourage: Gray and Champagne
    - Principal Sponsors: Gray (formal attire)
    - Guests: Beige, Taupe, or Cream (semi-formal attire)
  - Updated wedding guest color palette: Beige (#EDD5C9), Taupe (#A39C8E), Cream (#FEF9F3)
  - Updated story section with Robel & Veronica's narrative:
    - Met at Global Pastor's & Worker's Conference in 2016
    - Share commitment to God's calling
    - Feature Colossians 3:14 (KJV) Bible verse
  - Updated gift guide message signature to "Robel and Veronica"
  - Updated countdown timer to January 20, 2026 at 3:00 PM
  - Updated all footer content with new couple names and date
  - Added hashtag reference: #RoBelongsToVeronicaForever

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
