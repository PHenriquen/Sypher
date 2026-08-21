# Sypher

Official website and brand hub for **Sypher**, a technology company in formation.

The site is designed to grow with the company: one parent brand, clear divisions and individual products with their own identities.

## Current brand structure

- **Sypher Labs** — research, prototypes and experimental R&D
- **Sypher Intelligence** — AI and intelligent automation
- **Sypher Products** — SaaS and digital products
- **Sypher Systems** — industrial and operational software
- **Sypher Engineering** — hardware, IoT and physical computing
- **Sypher Interactive** — games and digital experiences

See [`docs/BRAND_ARCHITECTURE.md`](docs/BRAND_ARCHITECTURE.md) for the provisional identity system.

## Current projects

- Illume — AI Assistant
- Nodi — SaaS
- SincroHub — Industrial Platform
- Manopla Inteligente — Hardware + Software
- Réquiem — Game

## Stack

- Next.js
- React
- TypeScript
- plain CSS

The visual foundation is intentionally framework-light so the site can evolve without inheriting a large design-system dependency before Sypher's identity is finalized.

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

## Deployment

The intended production workflow is GitHub → Vercel. Once the repository is imported into Vercel, pushes to `main` can publish production updates and pull requests can receive preview deployments.

> Status: first website and brand-architecture foundation.
