# Uptown CRM - Real Estate Lead Management System

Uptown CRM is a premium, full-stack lead management platform designed for high-end real estate agencies. It prioritizes information density, data integrity, and a professional aesthetic.

## Tech Stack
- **Frontend**: React.js (Vite) + Tailwind CSS + Framer Motion
- **Backend**: Node.js (Express)
- **Database**: Firebase (Provisioning pending user confirmation)
- **Analytics**: Integrated Service Module (Recharts)
- **Validation**: Zod + React Hook Form

## Core Features
1. **Lead Capture**: Multi-step registration with dynamic budget and property type validation.
2. **Interactive Dashboard**: Real-time KPI tracking for Conversion Rates and Lead Distribution.
3. **Advanced Pipeline Table**: High-density data grid with status-based coloring, search, and filtering.
4. **Lead Command Center**: Immersive slide-over for client history, notes logging, and status transitions.

## Project Structure
```text
/
├── server.ts             # Express primary backend & Vite middleware
├── src/
│   ├── components/       # Visual UI units (Dashboard, Leads, Forms)
│   ├── lib/              # Utils & Zod validation schemas
│   ├── types.ts          # Centralized TypeScript interfaces
│   ├── constants.ts      # Theme maps & static definitions
│   └── App.tsx           # Global state & Layout hub
```

## Setup Instructions
1. **Environment Variables**:
   - Ensure `GEMINI_API_KEY` is set in your secrets panel for AI-augmented features.
2. **Development**:
   - Run `npm run dev` to start the integrated Express + Vite server on port 3000.
3. **Analytics Integration**:
   - For environment compatibility, the Python (FastAPI) analytics logic has been implemented as a high-performance Service Module within the primary Node.js backend. This can be easily proxied to an external FastAPI service in multi-container deployments.

---
*Built with precision for Uptown Real Estate.*
