# The Town Tavern — olytavern.com

> **Spoke:** olybars · **Stack:** Next.js 16 (static export) · **Hosting:** Firebase Hosting · **Project:** `town-tavern-ama-prod`

## Quick Start

```bash
pnpm install
pnpm run dev       # http://localhost:3000
pnpm run build     # Static export to ./out
pnpm run lint      # ESLint
```

## Deploy

Push to `main` triggers automatic deploy via GitHub Actions.

```bash
# Manual deploy
pnpm run build
firebase deploy --only hosting --project town-tavern-ama-prod
```

## Rollback Runbook

If a deploy breaks production, roll back immediately:

```bash
# Step 1: List recent deploys to find the last known-good version
firebase hosting:releases:list --project town-tavern-ama-prod --limit 5

# Step 2: Roll back to the previous version
firebase hosting:rollback --project town-tavern-ama-prod

# Step 3: Verify production is back
curl -sI https://olytavern.com | head -5
```

**Rollback is instant** — Firebase Hosting swaps the CDN pointer, no rebuild needed.

### If rollback doesn't work:
1. Go to [Firebase Console → Hosting](https://console.firebase.google.com/project/town-tavern-ama-prod/hosting)
2. Click the **Release History** tab
3. Click the "..." menu next to the last known-good release
4. Select **"Rollback to this release"**

## Observability

| Layer | What | Endpoint |
|---|---|---|
| Health Check | Uptime monitor target | `/health.json` |
| Web Vitals | LCP, INP, CLS, FCP, TTFB | Console (dev) / `/api/vitals` (prod) |
| Error Boundary | Crash recovery UI | `src/app/error.tsx` |
| Service Worker | Offline fallback | `/sw.js` |
| Analytics | GA4 page views | Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` |

## Security Headers

All responses include:
- `Content-Security-Policy` (script/style/img/font/connect lockdown)
- `Strict-Transport-Security` (HSTS, 2yr, preload-ready)
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` (camera/mic blocked, geo self-only)

## Architecture

- **Hub-and-Spoke compliant** — no direct API calls, relative `/api/*` paths only
- **100% static** — `output: 'export'` in `next.config.ts`
- **Zero Cloud SQL** — no backend database
- **No secrets in code** — GA measurement ID via env var
