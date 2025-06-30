# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Gatsby v2, featuring Jacob Wolf's work as a teacher, programmer, and researcher. The site uses a unique horizontal layout with a sticky navigation sidebar and animated speech bubbles to guide visitors through different sections.

## Development Commands

- **Development server**: `npm run develop` or `npm start` - runs at http://localhost:8000
- **Production build**: `npm run build`
- **Serve built site**: `npm run serve`
- **Clean cache**: `npm run clean`
- **Lint**: `eslint .` (manual - no npm script configured)

## Architecture & Key Components

### Layout Structure
- **Two-column layout**: Sticky navigation (30% width) + main content (auto)
- **Responsive breakpoint**: `@media screen and (min-width: 40em)` switches from stacked to side-by-side
- **Main entry point**: `src/pages/index.js` - single-page application with sections

### Core Components
- **Layout** (`src/components/layout.js`): Simple wrapper with SEO component
- **Nav** (`src/components/nav.js`): Class-based component with sticky positioning, speech bubble animations, and scroll-to-section functionality
- **SectionItem** (`src/components/item.js`): Renders individual project items within sections
- **SEO** (`src/components/seo.js`): Helmet-based metadata management

### Data & Content
- **Content source**: `src/data/sections.js` - centralized data structure containing all portfolio content
- **Section structure**: Each section has title, intro text, speech bubble SVG path, CSS class, and projects array
- **PDF files**: Resume and research papers stored in `src/pdfs/`

### Styling System
- **CSS-in-JS**: Emotion React for component styling
- **Typography**: Custom typography configuration via `src/utils/typography.js`
- **Section themes**: Color-coded sections defined in `src/styles/sections.js` with hover effects
- **Global styles**: `src/styles/global.css`

### Interactive Features
- **Waypoint-based navigation**: Uses react-waypoint to highlight nav sections and trigger speech bubbles
- **Speech bubble system**: Animated SVG-based speech bubbles with custom paths per section
- **Smooth scrolling**: Navigation buttons scroll to corresponding sections
- **Wolf emoji navigation**: Clicking the wolf (🐺) scrolls to top

### Dependencies Note
- Uses older React (v16.13.1) and Gatsby (v2.26.1)
- Emotion for styling, Typography.js for typography, react-waypoint for scroll interactions
- CSSTransitionGroup for speech bubble animations

When adding new content, update the sections array in `src/data/sections.js`. For styling changes, modify the section classes in `src/styles/sections.js` which control the color theming throughout the site.