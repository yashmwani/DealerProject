# NexusTrade

A modern, Gen Z–styled frontend demo for an import/export operations platform. Built for showcasing professional marketing pages, secure login flows, and a client operations dashboard — **frontend only, no backend**.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat&logo=vite)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=flat&logo=typescript)

## Features

- **Public website** — Home, Services, and Contact pages with responsive layout and animations
- **Mock authentication** — Role-based login (admin, staff, client) via session storage
- **Operations dashboard** — Overview, trade records, reports, activity log, and user management
- **Data tables** — Sort, search, filter, and export to CSV (client-side)
- **Animations** — Framer Motion throughout (hero, cards, charts, page transitions)
- **Design** — Dark theme, glassmorphism, gradient accents, mobile-friendly navigation

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ (20+ recommended)
- npm

### Install & run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Live site (GitHub Pages)

**https://yashmwani.github.io/DealerProject/**

Pushes to `main` deploy automatically via GitHub Actions. Enable Pages once in your repo:

1. Open [DealerProject → Settings → Pages](https://github.com/yashmwani/DealerProject/settings/pages)
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”)
3. If you previously used branch deploy, switch to Actions and re-run the **Deploy to GitHub Pages** workflow under the **Actions** tab

**Blank page?** GitHub is probably serving the dev `index.html` (with `/src/main.tsx`) instead of the built app. Fix: set Source to **GitHub Actions** only, then run the deploy workflow again.

### Build for production

```bash
npm run build
npm run preview
```

## Demo accounts

Use these on the **Sign in** page (or click a quick-demo button to autofill):

| Role   | Email                    | Password   |
|--------|--------------------------|------------|
| Admin  | `admin@nexustrade.com`   | `admin123` |
| Staff  | `staff@nexustrade.com`   | `staff123` |
| Client | `client@acme.com`        | `client123` |

### Role access

| Area              | Admin | Staff | Client |
|-------------------|:-----:|:-----:|:------:|
| Dashboard overview| ✓     | ✓     | ✓      |
| Trade records     | ✓     | ✓     | ✓      |
| Reports           | ✓     | ✓     | ✓      |
| Activity log      | ✓     | ✓     | ✓      |
| User management   | ✓     | ✓     | —      |

## Project structure

```
src/
├── components/       # Navbar, Footer, DataTable, layouts, etc.
├── context/          # AuthContext (mock login state)
├── data/             # mockData.ts — demo users, records, logs
├── pages/            # Public pages + dashboard views
│   └── dashboard/    # Overview, Records, Reports, Activity, Users
├── App.tsx           # Routes
├── main.tsx          # Entry point
└── index.css         # Tailwind + custom utilities
```

## Tech stack

| Tool            | Purpose                          |
|-----------------|----------------------------------|
| React 19        | UI                               |
| Vite 8          | Build tool & dev server          |
| TypeScript      | Type safety                      |
| Tailwind CSS v4 | Styling                          |
| React Router    | Routing & protected routes       |
| Framer Motion   | Animations                       |
| Lucide React    | Icons                            |

## Routes

| Path                  | Description                    |
|-----------------------|--------------------------------|
| `/`                   | Landing page                   |
| `/services`           | Services                       |
| `/contact`            | Contact form (demo submit)     |
| `/login`              | Sign in                        |
| `/dashboard`          | Dashboard overview             |
| `/dashboard/records`  | Trade records table            |
| `/dashboard/reports`  | Performance reports & chart    |
| `/dashboard/activity` | User activity log              |
| `/dashboard/users`    | User management (admin/staff)  |

## Notes

- **No real backend** — All data lives in `src/data/mockData.ts`. Login state is stored in `sessionStorage` and clears when the tab/session ends.
- **Contact form** — Shows a success message only; nothing is sent to a server.
- **CSV export** — Generated in the browser from the current filtered table data.

## License

Private / demo project.
