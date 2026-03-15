# EcoClear

EcoClear is a role-based GovTech web platform for managing the Environmental Clearance workflow across multiple stakeholders:
- Proponent
- Scrutiny Team
- MoM Team
- Admin

The system supports application submission, scrutiny review, deficiency handling, AI-generated meeting gist, MoM finalization, payment tracking, notifications, and role-based dashboards.

## Project Overview

EcoClear digitizes the environmental compliance process from initial application to finalized Minutes of Meeting (MoM), with a clean SaaS-style dashboard UI and Supabase-backed data layer.

## Tech Stack

### Frontend
- React (Vite)
- React Router DOM
- Tailwind CSS (plus project-level custom styles)
- Lucide React icons
- jsPDF + jspdf-autotable (client-side PDF export)
- Supabase JS client

### Backend (Local AI/API service)
- Node.js + Express
- Supabase JS (server-side usage)
- PDF text extraction utilities
- Ollama (local LLM) integration
- Cloudflared tunnel (to expose local backend to deployed frontend)

### Database / Platform
- Supabase
  - Auth
  - Postgres tables
  - Storage buckets
  - Realtime notifications

## Core Workflow

1. Proponent creates account and logs in.
2. Proponent creates a new application:
   - selects sector/category
   - views sector-based required documents
   - checks mandatory affidavits
   - uploads PDFs
   - completes payment
3. Application moves to Scrutiny Team.
4. Scrutiny Team reviews submitted documents:
   - approve and refer to MoM, or
   - raise deficiency with notes/EDS checklist items
5. On approval, backend generates AI meeting gist from uploaded documents.
6. MoM Team receives referred case, schedules meeting, edits minutes, and finalizes MoM.
7. Proponent sees final status and can download finalized documents.
8. Notifications are generated on status changes and shown via bell icon.

## Implemented Features

### Authentication and Access
- Supabase Auth integration
- Role-based route guards and dashboard redirects
- Public and protected routing structure

### Proponent Portal
- Dashboard analytics cards
- New Application form
  - category from DB sectors
  - required documents and affidavits display
  - affidavit validation (must be checked before submit)
  - multi-PDF upload
  - draft save/edit flow
  - deficiency resubmission flow
- Payment page
  - UPI details + QR support
  - transaction number capture
  - payment completion workflow
- My Applications table
  - workflow stage view
  - deficiency message handling
  - finalized document download options
- Payments tab
  - successful payment listing
- Bell notifications for status updates
- AI assistant in New Application form

### Scrutiny Portal
- Dashboard cards and review tables from DB
- High priority reviews (urgency-based)
- Application Review page
  - uploaded document access
  - EDS checklist
  - review notes
  - raise deficiency / approve-and-refer actions
- AI gist generation trigger on approval

### MoM Portal
- Dashboard and stage-wise tables from DB
- Referred Cases
- Meeting Scheduled
- Pending MoM
- Finalized MoM
- Edit Gist flow
- Edit Minutes flow (template-driven)
- AI assistant in minutes editor
- Download options for gist and minutes

### Admin Portal
- System dashboard with stage distribution and completion metrics
- Users and role assignment pages
- Sector and sector-parameter management
- Templates management module (create/edit/preview/etc.)
- Audit logs and payment visibility
- DB-backed cards, charts, and tables

## AI Features

- **Proponent assistant**: helps users fill application data.
- **Scrutiny AI gist generation**: extracts text from uploaded PDFs and generates structured meeting gist.
- **MoM assistant**: supports drafting/refining minutes during editing.
- Supports local LLM with Ollama (example: `gemma3:1b`).

## Deployment Architecture (Current)

- Frontend deployed on Vercel
- Supabase hosted in cloud
- Backend runs locally
- Ollama runs locally
- Cloudflared exposes local backend URL over HTTPS to Vercel frontend

## Repository Structure

This repository contains the frontend app:

```text
ecoclear-frontend/
  src/
    pages/
    components/
    context/
    routes/
    lib/
    utils/
  public/
  README.md
```

Backend is maintained in a sibling repository/folder (`ecoclear-backend`).

## Local Setup (Frontend)

### Prerequisites
- Node.js 18+
- npm
- Supabase project

### Install and run

```bash
npm install
npm run dev
```

### Frontend environment variables (`.env`)

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_AI_BACKEND_URL=http://localhost:8787
```

## Local Setup (Backend)

In `ecoclear-backend`:

```bash
npm install
npm run dev
```

Typical backend environment values:

```env
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
AI_PROVIDER=ollama
OLLAMA_BASE_URL=http://127.0.0.1:11434
OLLAMA_PRIMARY_MODEL=gemma3:1b
PORT=8787
```

Start Ollama:

```bash
ollama serve
```

## Vercel + Cloudflared (Preview-first)

1. Deploy frontend repo to Vercel.
2. Add Vercel env vars:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `VITE_AI_BACKEND_URL` (Cloudflared HTTPS URL)
3. Start backend locally on `8787`.
4. Start tunnel:

```bash
cloudflared tunnel --url http://localhost:8787
```

5. Copy generated `https://*.trycloudflare.com` into `VITE_AI_BACKEND_URL` and redeploy preview.

## Status Values Used in Workflow

- `draft`
- `submitted`
- `under_scrutiny`
- `deficiency_raised`
- `referred`
- `mom_generated`
- `meeting_scheduled`
- `minutes_draft`
- `finalized`

## Notes

- Current payment flow is user-confirmed for hackathon speed.
- Current deployment pattern (local backend + tunnel) is demo-friendly, not production-grade.
- For production, host backend and AI infrastructure as managed services.

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE).
