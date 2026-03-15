# Focus Fire

A minimalist productivity app. Built with MERN + TypeScript.

## Prerequisites

- Node.js 20+
- npm 10+
- MongoDB

## Getting Started

```bash
git clone https://github.com/yourusername/focus-fire
cd focus-fire
npm install
npm run dev:server
```

## Project Structure

```
focus-fire/
├── apps/
│   ├── server/       # Express + Node.js + TypeScript
│   ├── web/          # React frontend (coming soon)
│   └── mobile/       # Mobile (coming soon)
├── packages/
│   └── shared/       # Shared types and utilities
└── package.json
```

## Scripts

| Command              | Description                |
| -------------------- | -------------------------- |
| `npm run dev:server` | Start server in watch mode |
| `npm run build:all`  | Build all apps             |

## Environment Variables

Create a `.env` inside `apps/server/`:

```
PORT=3000
MONGO_URI=your_connection_string
```

## API

| Method | Endpoint  | Description  |
| ------ | --------- | ------------ |
| GET    | `/health` | Health check |
