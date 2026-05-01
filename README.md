# AI-Driven-Internship-Recommendation
InternMatch AI helps students discover better-fit opportunities, helps employers hire qualified interns, and helps teams improve placement outcomes.

## Development

Install dependencies once:

```bash
npm install
```

Start frontend + backend together (recommended):

```bash
npm run dev:full
```

This command starts Flask backend first, waits for `http://127.0.0.1:5000/api/health`, and then starts Vite.

## Scripts

- `npm run dev:frontend`: Start only Vite frontend.
- `npm run dev:backend`: Start only Flask backend using workspace venv.
- `npm run dev:full`: Start backend and frontend together with backend health wait.

## Common Error

If you see this in Vite:

```text
http proxy error: /api/auth/login
Error: connect ECONNREFUSED 127.0.0.1:5000
```

it means the backend process is not available on port `5000`. Use `npm run dev:full` to avoid this recurring issue.
