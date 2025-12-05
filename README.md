# A11y Course Project

A comprehensive web accessibility (a11y) learning project built with Next.js, demonstrating various accessibility patterns and best practices.

## Overview

This project serves as a practical guide to web accessibility, featuring multiple examples of accessible UI components and interaction patterns. It's designed for learning and implementing WCAG guidelines in modern web applications.

## Features

### Day 2 - Core Accessibility Patterns

- **Focus Trap**: Keyboard navigation trap implementation with Escape key support
- **Accessible Forms**: Form validation and error handling with proper ARIA attributes
- **View Toggle**: Collapsible sections using native `<details>` elements

### Components

- **Accessible Navigation Menu**:
  - Keyboard navigable dropdown submenus
  - Proper ARIA attributes (`aria-expanded`, `aria-haspopup`, `aria-controls`)
  - Focus management and trap functionality
  - Support for both mouse and keyboard interactions

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the project.

## Accessibility Features

- **Keyboard Navigation**: Full keyboard support with Tab, Shift+Tab, Enter, and Escape keys
- **Screen Reader Support**: Proper semantic HTML and ARIA attributes
- **Focus Management**: Visual focus indicators and logical focus order
- **Hydration Safe**: No client/server mismatch issues

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Package Manager**: pnpm

## Project Structure

```
app/
├── components/
│   └── Menu.tsx              # Accessible navigation menu
├── day2-focus-trap/         # Focus trap example
├── day2-form/               # Accessible form example
├── day2-view-toggle/        # Collapsible sections example
└── page.tsx                 # Home page
```

## Learning Resources

This project demonstrates practical implementations of:

- WCAG 2.1 Guidelines
- ARIA Authoring Practices
- Keyboard accessibility patterns
- Focus management techniques

## Development

The project follows modern React and Next.js best practices with a focus on accessibility from the ground up.
