# FIFA World Cup 2026 — Official Digital Experience

A world-class, production-grade web application for the FIFA World Cup 2026. Built by **IOMTechs** with editorial precision and high-performance architecture.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Bebas Neue, Barlow Condensed, Barlow, DM Mono
- **Data Source**: football-data.org REST API

## Getting Started

### 1. Obtain an API Key
Register for a free API key at [football-data.org](https://www.football-data.org/).

### 2. Environment Setup
Create a `.env.local` file in the root directory and add your key:
```env
FOOTBALL_DATA_API_KEY=your_api_key_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Installation
```bash
npm install
```

### 4. Run Development Server
```bash
npm run dev
```

## Features

- **Real-Time Live Tracker**: 30-second polling for ongoing matches with pulsing indicators.
- **Full Tournament Schedule**: Grouped by date with venue and group metadata.
- **Dynamic Group Standings**: 12 groups (A–L) with real-time qualification indicators.
- **Official Stadium Guide**: All 16 host stadiums across North America with high-fidelity Wikimedia photography.
- **Historical Archive**: Complete World Cup data from 1930 to 2022.
- **Official Anthems**: Immersive gallery of tournament anthems with YouTube integration.

## Design System

The application follows an **Editorial Precision** aesthetic, inspired by modern sports journalism platforms like NYT Sports and ESPN FC.

- **Background**: Near black (#080808)
- **Accents**: FIFA Red (#C8102E), FIFA Green (#009B3A), FIFA Gold (#C9A84C)
- **Typography**: Display typography (Bebas Neue) for impact, Mono (DM Mono) for stats.

---

Built by **IOMTechs** — Software at Scale.
