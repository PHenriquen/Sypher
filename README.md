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

## Deployment

Production workflow: **GitHub → Vercel**. Keep Vercel on the Next.js preset and leave Output Directory on its framework default.

> Status: brand system v1 is being developed on a review branch before it becomes the live identity.
