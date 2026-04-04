# Telemaster (telemasterwww)

Marketing site for Telemaster, built with [Nuxt 3](https://nuxt.com/), Vue 3, and Tailwind CSS v4. Content lives under `content/`; tutorials are Markdown with front matter, rendered via `remark` on the server.

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

Preview locally:

```bash
npm run preview
```

## Environment

- `NUXT_PUBLIC_SITE_URL` — canonical site origin (also accepts `NEXT_PUBLIC_SITE_URL` for compatibility). Defaults to `https://telemaster.io` in production config when unset.

## Deploy

Configured for the Vercel Nitro preset (`nitro.preset: 'vercel'`). Build output can be deployed with `npx vercel deploy --prebuilt` after `npm run build`.
