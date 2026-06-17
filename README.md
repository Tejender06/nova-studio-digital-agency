# Nova Studio

This is my submission for the Fullstack Developer Internship assignment. I built Nova Studio, a digital agency website with a frontend, a backend API, and two databases.

## Live Link
[https://nova-studio-digital-agency.vercel.app/](https://nova-studio-digital-agency.vercel.app/)

## Tech Stack
* Frontend: Next.js (App Router), React, MUI, Framer Motion
* Backend: Next.js API Routes
* Databases: PostgreSQL (Supabase) for the main data and MongoDB Atlas for analytics logs

## Setup Instructions

If you want to run this locally:
1. Clone the repo
2. Run `npm install`
3. Create a `.env.local` file with these variables:
```env
DATABASE_URL=postgresql://[user]:[password]@[host]:6543/postgres
MONGODB_URI=mongodb://[user]:[password]@[cluster]:27017
MONGODB_DB=nova-studio
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
```
4. Run `npm run dev` and go to `http://localhost:3000`

## API Documentation

* `GET /api/projects` - Gets the portfolio projects
* `POST /api/projects` - Adds a new project (needs admin login)
* `DELETE /api/projects/[id]` - Deletes a project (needs admin login)
* `GET /api/services` - Gets the services list
* `GET /api/stats` - Gets the agency stats. If the DB fails, it falls back to hardcoded data.
* `POST /api/contact` - Submits the contact form
* `GET /api/contacts` - Gets all contact submissions (needs admin login)
* `POST /api/analytics` - Saves page visits and button clicks
* `GET /api/analytics` - Gets the analytics count
* `POST /api/auth/login` - Logs in the admin

## Design Decisions
1. **Error Handling**: I put `try/catch` blocks around all my API routes so the app returns a clean 500 error instead of crashing.
2. **Two Databases**: I used Postgres for structured stuff like projects and contacts, and MongoDB for unstructured analytics logs, just like the assignment asked.
3. **Auth**: I used Next.js middleware to protect the `/admin` routes. It checks for the `admin_session` cookie before letting anyone in.
4. **Animations**: I used Framer Motion for the scroll animations and page loads to make the site look more premium.
