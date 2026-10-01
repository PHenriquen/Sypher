# Zypher

Official website and brand hub for the **Zypher ecosystem**.

Zypher is the parent identity connecting independent projects across software, artificial intelligence, physical computing, engineering and interactive experiences. Each project keeps its own personality while sharing one broader technical and visual system.

## Brand architecture

- **Zypher Labs** — research, prototypes and experimental R&D
- **Zypher Intelligence** — AI and intelligent automation
- **Zypher Products** — SaaS and digital products
- **Zypher Systems** — industrial and operational software
- **Zypher Engineering** — hardware, IoT and physical computing
- **Zypher Interactive** — games and digital experiences

`Zypher Group` is reserved for a future real group/holding structure and is not an active division.

## Current lineage

- **ILLume** → Intelligence
- **Nodi** → Products
- **SincroHub** → Systems
- **Manopla Inteligente / DEXTR** → Engineering
- **Ecos do Tempo** → Interactive
- Uncommitted experiments → Zypher Labs

## Identity system

The repository includes working SVG marks, color tokens and usage rules:

- [`docs/BRAND_SYSTEM.md`](docs/BRAND_SYSTEM.md)
- [`docs/ENDORSEMENT.md`](docs/ENDORSEMENT.md)
- [`brand/tokens.json`](brand/tokens.json)
- [`public/brand`](public/brand)

The vectors are effect-free core marks; glow and motion belong to presentation layers. ILLume's reactor/core art remains the intended master identity and the SVG here is a web companion reconstruction.

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
