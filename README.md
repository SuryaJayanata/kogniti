# Kogniti Marketing Agency

> **WORK IN PROGRESS (WIP):** Please note that this project is currently under active development. Features, architecture, and design systems are subject to change.

Kogniti is a modern, premium landing page designed for a next-generation marketing agency that operates at the intersection of data, psychology, and creative innovation. The project features a highly scalable architecture, smooth animations, and a centralized design system.

## Technology Stack

This project is built using modern web development standards to ensure high performance, maintainability, and scalability.

- Framework: React 18 with TypeScript
- Build Tool: Vite
- Styling: Tailwind CSS v4
- Animations: GSAP (GreenSock Animation Platform)
- Scrolling: Lenis (Smooth Scrolling)
- Icons: Lucide React & Simple Icons

## Architecture & Project Structure

The codebase is organized using a functional-based structure to support long-term scalability and clean code principles.

- /src/components/layout: Core structural components (Navbar, Footer).
- /src/components/ui: Reusable atomic components (Buttons).
- /src/sections: Distinct page sections (Hero, About, Clients, Services, Stats).
- /src/constants: Centralized static data and configurations (data.ts).
- /src/hooks: Reusable React hooks (useScroll.ts).
- /src/styles: Global stylesheets and Tailwind CSS v4 theme configuration.

## Design System & Theming

The project utilizes Tailwind CSS v4's native theming capabilities. All core colors, fonts, and global variables are centralized in `src/styles/index.css` via the `@theme` directive. 

To modify the global color palette, simply update the hex values in `index.css`:
- --color-primary
- --color-secondary
- --color-accent1
- --color-accent2

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed on your local machine.

### Installation

1. Clone the repository or navigate to the project directory.
2. Install the required dependencies:
   ```bash
   npm install
   ```

### Development Server

To start the local development server, run:
```bash
npm run dev
```
The application will be accessible at http://localhost:5173.

### Production Build

To create an optimized production build, run:
```bash
npm run build
```
The compiled assets will be available in the `/dist` directory.

## Code Standards

- All styles must utilize Tailwind CSS utility classes.
- Inline styles are prohibited unless absolutely necessary for dynamic layout calculations.
- Hardcoded data should be extracted to `src/constants/data.ts`.
