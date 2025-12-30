# Agent Guidelines for rger.dev

## Commands
- **Build**: `pnpm build`
- **Dev**: `pnpm dev`
- **Lint**: `pnpm lint` (runs Prettier auto-fix on src/)
- **No test suite configured**

## Code Style
- **Formatter**: Prettier with single quotes, no semicolons
- **Imports**: Use path aliases `@components/*` and `@assets/*` (configured in tsconfig.json)
- **TypeScript**: Strict mode enabled (extends astro/tsconfigs/strict)
- **Indentation**: 4 spaces (per .editorconfig)
- **Formatting plugins**: Prettier Tailwind CSS plugin orders classes automatically

## Astro Specifics
- Component props use `interface Props` pattern with destructuring
- Use Astro's built-in `Image` component wrapper for images
- Constants stored in `src/constants.ts` and imported as named exports

## Best Practices
- Keep components simple and focused (this is a portfolio site)
- Use Tailwind utility classes following the plugin ordering
- Maintain accessibility attributes (aria-label, alt text)
