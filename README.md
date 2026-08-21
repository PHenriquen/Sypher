# Sypher

Official website and brand hub for the **working Sypher parent identity**.

The project is being built as a durable company architecture: one parent brand, clear divisions and individual products that keep their own identities. The division system is intentionally designed so it can survive a future parent-name change if legal/market clearance requires one.

## Brand architecture

- **Sypher Labs** — research, prototypes and experimental R&D
- **Sypher Intelligence** — AI and intelligent automation
- **Sypher Products** — SaaS and digital products
- **Sypher Systems** — industrial and operational software
- **Sypher Engineering** — hardware, IoT and physical computing
- **Sypher Interactive** — games and digital experiences

`Sypher Group` is reserved for a future real group/holding structure and is not an active division.

## Current lineage

- Illume → Intelligence
- Nodi → Products
- SincroHub → Systems
- Manopla Inteligente → Engineering
- Réquiem → Interactive
- Uncommitted experiments → Labs

## Identity system

The repository includes working SVG marks, color tokens and usage rules:

- [`docs/BRAND_SYSTEM.md`](docs/BRAND_SYSTEM.md)
- [`docs/ENDORSEMENT.md`](docs/ENDORSEMENT.md)
- [`brand/tokens.json`](brand/tokens.json)
- [`public/brand`](public/brand)

The vectors are effect-free core marks; glow and motion belong to presentation layers. Illume's approved reactor/core art remains the intended master identity and the SVG here is a web companion reconstruction.

## Site principles

The website is intentionally structured as a technology-company portfolio rather than a creator/channel page. Parent thesis comes first, divisions organize the work, and project pages provide evidence.

- [`docs/SITE_PRINCIPLES.md`](docs/SITE_PRINCIPLES.md)

## Stack

- Next.js
- React
- TypeScript
- plain CSS

## Run locally

```bash
npm install
npm run dev
```

Validation:

```bash
npm run typecheck
npm run build
```

The same typecheck + production build gate also runs in GitHub Actions for `main`, `work/**` and pull requests.

## Deployment

Production workflow: **GitHub → a dedicated Sypher Vercel project**. Keep Vercel on the Next.js preset, use `main` as the production branch and never treat a branch-specific Preview URL as the public site address.

The full release/404 triage contract is documented in [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

> Status: the brand system is usable, but the Sypher parent name remains a working identity until naming/legal risk is consciously accepted. Production hosting should stay isolated and reversible while that decision remains open.
