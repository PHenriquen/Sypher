# Sypher deployment contract

Sypher is intended to ship from GitHub to Vercel as a standard Next.js project. This document exists to avoid confusing a temporary preview URL with the stable production address.

## Source of truth

- GitHub `main` is the production source branch.
- Review work stays on `work/**` branches and pull requests.
- Vercel Preview deployments are disposable review environments.
- The URL shared publicly must be the project production domain, never a branch-specific preview hostname.

Vercel exposes `VERCEL_PROJECT_PRODUCTION_URL` as the project's production domain even from preview deployments. If the site later needs canonical links, Open Graph URLs or absolute sitemap entries, prefer that system value instead of hardcoding a preview deployment URL.

## Project setup

When the Sypher repository is connected to Vercel:

1. import `PHenriquen/Sypher` as its own Vercel project;
2. keep the framework preset as Next.js;
3. keep the repository root as the project root;
4. use `npm run build` as the build command, or leave the framework default;
5. leave the output directory on the Next.js/Vercel default;
6. set `main` as the production branch;
7. assign a stable project domain before sharing the site publicly.

Do not point the existing unrelated `website` Vercel project at this repository just to obtain a URL. A separate project keeps aliases, deployment history and future environment variables isolated.

## Release gate

A production candidate should satisfy both locally or in CI:

```bash
npm run typecheck
npm run build
```

The repository workflow runs those checks for `main`, `work/**` and pull requests. Vercel may still build a preview independently; both signals are useful because CI validates the repository while Vercel validates the hosting integration.

## Production vs preview

A preview URL may contain branch names, team slugs or generated deployment identifiers. It is expected to change or disappear.

A production URL belongs to the Vercel project/domain and should remain stable across deployments. Vercel documents production deployment as `vercel --prod` when using the CLI; with Git integration, merging/pushing the configured production branch produces the equivalent production release flow.

## Failure triage

If a shared URL returns 404:

1. confirm it is the project production domain and not an old preview URL;
2. confirm the Sypher repository is connected to the intended Vercel project;
3. confirm `main` is the production branch;
4. inspect the latest production deployment status/build logs;
5. verify the domain/alias points at that deployment;
6. only after those checks investigate Next.js routing.

This order prevents changing application code to solve what is actually a deployment-alias problem.

## References

- Vercel Deploy CLI: https://vercel.com/docs/cli/deploy
- Vercel system environment variables: https://vercel.com/docs/environment-variables/system-environment-variables
- Vercel build configuration: https://vercel.com/docs/builds/configure-a-build
