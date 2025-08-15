# Overview

Epidict is a modern biomedical technology company website built as a full-stack application showcasing seizure prediction devices that use microneedle-based biosensors for IL-6 and glutamate monitoring. Founded in April 2025 and currently in prototype development phase, the project features a React frontend with Express.js backend, presenting the company's innovative medical technology through an elegant, responsive interface with sections for company information, technology details, research foundation, and contact functionality.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React with TypeScript**: Single-page application using React 18 with TypeScript for type safety
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Shadcn/ui components built on Radix UI primitives with Tailwind CSS for styling
- **State Management**: TanStack React Query for server state management and caching
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Styling**: Tailwind CSS with custom design tokens matching the Epidict brand (deep blue primary, electric teal secondary)

## Backend Architecture  
- **Express.js**: RESTful API server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Validation**: Zod schemas shared between frontend and backend for consistent validation
- **Session Storage**: Currently using in-memory storage (MemStorage class) with interface for future database integration
- **Error Handling**: Centralized error handling with proper HTTP status codes

## Data Storage
- **Database**: PostgreSQL configured through Drizzle ORM
- **Tables**: 
  - `users` table with id, username, password fields
  - `contacts` table for contact form submissions with name, email, subject, message, and timestamp
- **Migrations**: Drizzle Kit handles database migrations with schema stored in `shared/schema.ts`

## Build System
- **Development**: Vite for fast development with HMR and TypeScript support
- **Production**: Vite build for frontend static assets, esbuild for backend compilation
- **Deployment**: Single production build generating both client and server bundles

# External Dependencies

## Database & ORM
- **PostgreSQL**: Primary database (configured for Neon serverless)
- **Drizzle ORM**: Type-safe database toolkit with automatic migrations
- **Drizzle Kit**: Database migration and schema management tool

## UI & Styling
- **Radix UI**: Comprehensive set of accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Lucide React**: Icon library for consistent iconography
- **Inter Font**: Primary typeface loaded from Google Fonts

## Form & Data Management
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: TypeScript-first schema validation library
- **TanStack React Query**: Data fetching and caching solution

## Development Tools
- **Vite**: Build tool and development server
- **esbuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind CSS integration
- **TypeScript**: Static type checking across the entire stack

## Runtime & Utilities  
- **Wouter**: Lightweight routing library for React
- **date-fns**: Date manipulation and formatting library
- **clsx & class-variance-authority**: Conditional CSS class management
- **Replit Integration**: Development environment integration with error overlay and cartographer