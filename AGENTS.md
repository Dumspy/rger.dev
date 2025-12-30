# Agent Guidelines for rger.dev

## Commands

- **Dev**: `pnpm dev` or `pnpm start`
- **Build**: `pnpm build`
- **Lint/Format**: `pnpm lint` (runs Prettier on ./src)
- **Preview**: `pnpm preview`
- **No test suite configured**

## Code Style

- **Formatting**: Prettier with semi:false, singleQuote:true, Tailwind CSS class sorting
- **TypeScript**: Strict mode (astro/tsconfigs/strict), use path aliases (@components/_, @assets/_)
- **Imports**: Use path aliases for components/assets, relative imports for same directory
- **Types**: Define Props interfaces in Astro components with `interface Props`
- **Naming**: camelCase for variables/functions, PascalCase for components
- **Constants**: Use `as const` for readonly objects (see src/constants.ts)
- **Astro**: Frontmatter first, then template; use semantic HTML and accessibility attributes
- **Tailwind**: Use utility classes, extend theme in tailwind.config.cjs for custom colors
- **No comments in code** unless documenting complex logic

## Stack

Astro 5, TypeScript, Tailwind CSS, Cloudflare Pages deployment, astro-icon for icons
