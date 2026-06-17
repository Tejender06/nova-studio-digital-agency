# Nova Studio - Digital Agency Platform

Nova Studio is a fullstack web application built for a fictional digital agency. It serves as a product-grade platform showcasing frontend UI, backend API integration, structured databases, and administrative functionality.

## Live Deployment
[https://nova-studio-digital-agency.vercel.app/](https://nova-studio-digital-agency.vercel.app/)

## Tech Stack
* **Frontend**: Next.js 14 (App Router), React
* **UI/Styling**: Material UI (MUI), Vanilla CSS, Framer Motion (animations)
* **Backend**: Next.js API Routes (Serverless Functions)
* **Primary Database**: PostgreSQL (via Supabase) for structured data (Projects, Services, Stats, Contacts)
* **Secondary Database**: MongoDB (via MongoDB Atlas) for unstructured logs and analytics

## Setup Instructions

### Prerequisites
* Node.js (v18+)
* PostgreSQL Database (e.g., Supabase)
* MongoDB Cluster

### Environment Variables
Create a `.env.local` file in the root directory:
```env
DATABASE_URL=postgresql://[user]:[password]@[pooler-host]:6543/postgres
MONGODB_URI=mongodb://[user]:[password]@[cluster-host]:27017
MONGODB_DB=nova-studio
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
```

### Installation
1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Access at `http://localhost:3000`

## API Documentation

### Public Endpoints
* `GET /api/projects` - Fetches all portfolio projects.
* `GET /api/services` - Fetches all agency services.
* `GET /api/stats` - Fetches dynamic statistics. Falls back to default data if the database is unreachable to prevent frontend crashes.
* `POST /api/contact` - Submits a new contact form entry. Validates payload before insertion.
* `POST /api/analytics` - Logs page visits and CTA clicks into MongoDB.

### Protected Admin Endpoints
* `POST /api/auth/login` - Authenticates admin credentials and sets an `admin_session` HTTP-only cookie.
* `POST /api/projects` - Adds a new portfolio project (Requires Auth).
* `DELETE /api/projects/[id]` - Deletes a portfolio project by ID (Requires Auth).
* `GET /api/contacts` - Retrieves all contact submissions (Requires Auth).

## Design Decisions
1. **Error Boundaries & Fallbacks**: API routes are wrapped in global `try/catch` blocks ensuring graceful `500 Internal Server Error` JSON responses rather than unhandled server crashes.
2. **Connection Pooling**: PostgreSQL connections use standard `pg` connection pooling. For Vercel deployment, the Supabase IPv4 Transaction Pooler (port `6543`) is utilized to guarantee serverless compatibility.
3. **Analytics Separation**: Structured, relational data (Projects, Contacts) resides in PostgreSQL while high-volume, schema-less interaction events (Clicks, Visits) reside in MongoDB, demonstrating polyglot persistence.
4. **Middleware Auth**: Administrative routes (`/admin/*`) are protected at the edge using Next.js Middleware, redirecting unauthenticated users before page render.
