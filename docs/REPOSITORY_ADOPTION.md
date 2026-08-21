# Repository adoption plan

This is the rollout plan for applying the parent/division architecture to product repositories **after the parent name is approved for continued use**.

The goal is lightweight endorsement, not turning every repository into a copy of the corporate site.

## Shared README pattern

Place the endorsement after the project title and one-line product description, never above the product name.

```md
> **Lineage:** Sypher <Division> · <Category>
```

Optional corporate link:

```md
Part of the [Sypher](https://github.com/PHenriquen/Sypher) product family.
```

Do not add the parent logo as a giant README hero. Product identity stays dominant.

## Illume

- Division: **Intelligence**
- Category: AI Assistant
- Keep: existing approved reactor/core identity as master.
- Add later: small `Sypher Intelligence` endorsement near status/architecture information.
- Do not rename compatibility-sensitive Noa/TRACE internals as part of branding alone.

Suggested README line:

```md
> **Lineage:** Sypher Intelligence · Local AI Assistant
```

## Nodi

- Division: **Products**
- Category: SaaS
- Identity: Node-N working mark, mint/teal signature.
- README should emphasize the product problem first: preserving project decisions, context and evolution.

Suggested README line:

```md
> **Lineage:** Sypher Products · SaaS
```

## SincroHub

- Division: **Systems**
- Category: Industrial Platform
- Identity: blue/cobalt, signal and synchronization language.
- Keep SincroHub clearly distinct from SyncHub.

Suggested README line:

```md
> **Lineage:** Sypher Systems · Industrial Platform
```

## Manopla Inteligente

- Division: **Engineering**
- Category: Hardware + Software
- Identity: copper/amber, structural/interlock language.
- Current physical validation status must remain explicit.

Suggested README line:

```md
> **Lineage:** Sypher Engineering · Embedded / Physical Computing
```

## Réquiem

- Division: **Interactive**
- Category: Game
- Product/game identity is allowed to diverge strongly from the corporate UI.
- Preserve the red scarf, spectral-blue heart/blade language and authored dark-fantasy atmosphere.

Suggested README line:

```md
> **Lineage:** Sypher Interactive · Game
```

## GitHub topics

Use product-specific topics first. Division topics are optional and should remain descriptive rather than invented marketing tags.

Examples:

- Illume: `ai-assistant`, `local-ai`, `electron`, `python`, `ollama`
- Nodi: `saas`, `project-management`, `react`, `typescript`
- SincroHub: `industrial-iot`, `monitoring`, `telemetry`, `nestjs`, `nextjs`
- Manopla: `esp32`, `embedded`, `iot`, `arduino`, `freertos`
- Réquiem: `godot`, `csharp`, `indie-game`, `roguelite`, `rhythm-game`

## Rollout order

1. Approve/replace parent name.
2. Merge corporate brand-system PR.
3. Confirm the website production deployment.
4. Update project READMEs one repository at a time through small PRs.
5. Import/replace final product master logos where needed.
6. Add corporate site links only when the public domain/URL is stable.
