# Sardar Group of Companies Website

A corporate website for Sardar Group of Companies built with Next.js, React, and Tailwind CSS.

## Project Structure

The project follows a standardized Next.js directory structure:

```
app/
├── components/          # All UI components organized by section
│   ├── about/           # About page components
│   ├── contact/         # Contact page components
│   ├── home/            # Home page components
│   ├── layout/          # Layout components (Header, Footer)
│   ├── projects/        # Projects page components
│   ├── services/        # Services page components
│   ├── team/            # Team page components
│   └── ui/              # Reusable UI components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions and libraries
├── about/               # About page
├── contact/             # Contact page
├── projects/            # Projects page
├── services/            # Services page
├── team/                # Team page
├── globals.css          # Global CSS styles
├── layout.tsx           # Root layout component
└── page.tsx             # Home page
public/
└── images/              # Images organized by section
    ├── about/           # About page images
    ├── contact/         # Contact page images
    ├── hero/            # Hero section images
    ├── logo/            # Logo images
    ├── projects/        # Project images
    ├── services/        # Service images
    └── team/            # Team member images
scripts/                 # Utility scripts
└── setup-dev.js         # Development environment setup script
```

## Getting Started

### Automatic Setup

Run the setup script to prepare your development environment:

```bash
npm run setup
```

This script will:
- Create any missing directories
- Install dependencies if needed
- Set up environment variables

### Manual Setup

Alternatively, you can set up the project manually:

1. Install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Create a `.env.local` file based on `.env.example` if available

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Responsive design optimized for all devices
- Modern UI with animations and transitions
- Organized component structure for easy maintenance
- Optimized images and assets
- TypeScript for type safety
- Tailwind CSS for styling

## Pages

1. **Home** - Showcase of company highlights, services, and projects
2. **About Us** - Company history, mission, vision, and values
3. **Services** - Detailed descriptions of all company services
4. **Board of Directors** - Leadership team profiles
5. **Projects** - Portfolio of completed and ongoing projects
6. **Contact Us** - Contact form and company information

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- Shadcn UI Components 