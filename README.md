# Focus Fire

A minimalist productivity app. Built with MERN + TypeScript.

## Prerequisites

- Node.js 20+
- npm 10+
- MongoDB

## Environment Variables

Copy `.env.example` to `.env` inside `apps/server/` and fill in the values:

```bash
cp apps/server/.env.example apps/server/.env
```

```
PORT=3000
MONGO_URI=your_connection_string
```

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
├── .prettierrc
└── package.json
```

## Scripts

| Command                   | Description                |
| ------------------------- | -------------------------- |
| `npm run dev:server`      | Start server in watch mode |
| `npm run lint:server`     | Lints server               |
| `npm run lint:fix:server` | Fix lint errors on server  |
| `npm run format:server`   | Format code on server/src  |

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
