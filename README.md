# Project Management System

A full-featured **project management dashboard** web app — track projects, tasks, team members, resources, events, and analytics from a single clean interface. Built with [v0.app](https://v0.app) and the Next.js + shadcn/ui stack.

> **Live demo:** https://girishlade111.github.io/project-management-system/

## What it does

A browser-based project-management workspace with a dashboard-first UI:

- **Dashboard** — overview cards, recent activity, key project/task stats
- **Projects** — project list with card and table views, create / edit project pages
- **Tasks** — task list plus a kanban-style task board
- **Team** — team member directory, invite and add-member flows
- **Resources** — resource allocation charts, usage metrics, and resource table
- **Calendar** — calendar view with event create / edit pages
- **Analytics** — charts and reports (Chart.js + Recharts)
- **Auth pages** — login and registration UI
- **Settings** — app settings page
- Dark / light theme toggle (next-themes)

> Note: the app currently runs on **in-memory mock data** via a React context (`contexts/DataContext.tsx`) — data resets on reload. There is no backend; wire your own API later if you need persistence.

## Features

- Dashboard with stats cards and activity feed
- Project grid + table views, create/edit project forms
- Task board (kanban) and task list
- Team management (list, invite, add member)
- Resource allocation and usage charts
- Event calendar with create/edit event pages
- Analytics pages with Chart.js and Recharts visualizations
- Login / register / settings pages
- Responsive layout, dark-mode support
- shadcn/ui component library (Radix UI primitives)

## Tech stack

- **Framework:** Next.js 15 (App Router, static export)
- **UI:** React 19, Tailwind CSS 3, shadcn/ui (Radix UI), lucide-react icons
- **State:** React Context (`DataContext`) — client-side mock store
- **Charts:** Chart.js + react-chartjs-2, Recharts
- **Forms & utils:** react-hook-form, zod, date-fns, cmdk, embla-carousel, vaul, sonner
- **Fonts:** Geist / Inter (next/font)
- **Analytics:** Vercel Analytics

## Quick start

```bash
# install dependencies
npm install --legacy-peer-deps

# run the dev server
npm run dev
# open http://localhost:3000
```

Build a production static bundle (exports to `./out`):

```bash
npm run build
```

Then serve the `out/` directory with any static server, e.g. `npx serve out`.

## Project structure

```
app/                 # Next.js App Router pages
  dashboard/         # Dashboard page
  projects/          # Projects list, new, edit/[id]
  tasks/             # Task list, board, new
  team/              # Team directory, invite, new
  resources/         # Resources, allocation charts, edit/[id]
  calendar/          # Calendar view, event new/edit
  analytics/        # Analytics reports
  login/ register/  # Auth pages
  settings/          # Settings page
  layout.tsx         # Root layout + providers
components/          # UI components (incl. shadcn/ui in components/ui/)
contexts/            # DataContext — client-side mock data store
lib/                 # Shared utilities
public/              # Static assets
styles/              # Extra styles
```

## Environment variables

None required. The app is fully static and client-side; no API keys or backend URLs.

## Deployment

The app uses `output: 'export'` in `next.config.mjs`, so it deploys as plain static files.

- **GitHub Pages:** this repo auto-deploys `out/` to the `gh-pages` branch → https://girishlade111.github.io/project-management-system/
- **Any static host** (Netlify, Cloudflare Pages, Vercel, nginx): run `npm run build` and serve `out/`.

> **Note on `basePath`:** `next.config.mjs` sets `basePath: '/project-management-system'` so assets resolve under the GitHub Pages sub-path. If you deploy to a custom domain or root path (e.g. Vercel), **remove the `basePath` line** before building.

## Security notes

- Next.js is pinned at **15.2.8+** (patched against CVE-2025-55182 React2Shell and related 2025 advisories — 15.2.4 is affected).

---

Built by Girish Lade — https://ladestack.in
