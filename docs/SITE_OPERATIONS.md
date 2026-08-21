# Site operations

The Sypher website is intentionally data-driven so frequent updates do not require rebuilding the page structure.

## Where to edit normal content

`src/brand.ts` is the main content registry.

To add or update a division:

1. Edit the matching object in `divisions`.
2. Keep the slug stable after public launch.
3. Point `mark` to an SVG under `/public/brand/divisions`.
4. Keep one signature color and one visual motif.

To add or update a project:

1. Edit the matching object in `projects`.
2. Assign `divisionSlug` to an existing division.
3. Keep status honest: prototype, MVP, active development, pre-production, etc.
4. Add a project SVG under `/public/brand/projects`.
5. Link the real repository/product URL.

The homepage, project pages and division pages update from this same registry.

## Git workflow

Recommended routine for visual/content changes:

```text
main
  └── feat/<change>
       └── Pull Request
            └── Vercel Preview
                 └── Merge
                      └── Production deployment
```

Use direct commits to `main` only for tiny corrections when a preview provides no practical value.

## Vercel

Keep the project configured as:

- Framework preset: Next.js
- Root directory: repository root
- Build command: framework default (`next build`)
- Output directory: framework default / empty
- Install command: framework default

Do **not** set Output Directory to `public`. The `public` folder contains static source assets; it is not the Next.js build output.

## Image and brand assets

Use SVG for logos and marks whenever possible.

Do not bake glow, shadows or gradients into the master mark unless they become genuinely necessary to recognize the identity. Web effects should normally be CSS presentation.

## Adding After Hours links

`/after-hours` intentionally contains no invented social handles. Add public creator/art/streaming links only when the account/identity is chosen.

Personal links must remain clearly labeled as personal and non-company.

## Before merging a large visual change

- Check desktop and mobile preview.
- Open `/brand`.
- Open all six `/divisions/<slug>` pages.
- Open all `/projects/<slug>` pages.
- Check `/founder` and `/after-hours`.
- Confirm Vercel build is green.
- Confirm no new product claim overstates project maturity.
