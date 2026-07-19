# @nlbs/css [⌐■_■]

> CSS foundation for the Nanoo Labs ecosystem. Design tokens, resets, and utility component built on LightningCSS.

` pnpm ` ` LightningCSS ` ` CSS Custom Properties ` ` Design Tokens `

## Overview

This package provides the core visual identity for Nanoo Labs — minimal CSS reset, design tokens as CSS custom properties, and essential UI components.

## Architecture & Tech Stack

- **Build:** LightningCSS CLI (`lightningcss-cli`) — bundling, minification, autoprefix via browser targets.
- **Tokens:** CSS custom properties (`--nl-*`) — colors, spacing (REM), radius, typography.
- **Components:** BEM-like `nl-*` classes — container, button, card, text utilities
- **Themes:** Dark-first with light override via `@media` + `[data-theme]`.
- **Zero runtime:** No pre-processor, no framework. Output is static CSS.

## Usage

```bash
pnpm add @nlbs/css
```

```javascript
import "@nlbs/css"
```

Or via CDN for quick prototyping:

```html
<link rel="stylesheet" href="https://unpkg.com/@nlbs/css" />
```

## Project Structure

```
src/
├── main.css            # Entry — imports all modules
├── reset.css           # Minimal reset
├── variables.css       # Static tokens: spacing, radius, typography
├── themes/
│   ├── dark.css        # Color tokens (default)
│   └── light.css       # Light overrides (see themes/README.md)
├── layout.css          # Container classes
├── typography.css      # Headings, text utils, links
├── button.css          # Button variants
└── card.css            # Card component
```

## Theming

Dark by default (`:root`). Light mode via `@media (prefers-color-scheme)` + `[data-theme="light"]`.
See [themes/README.md](./src/themes/README.md) for the full palette tablee.

## Development & Ops

- **Build prod:** `pnpm build` — minify bundle → `dist/nanoo.min.css`
- **Dev:** `pnpm dev` — unminified bundle → `dist/nanoo.css`
- **Targets:** `last 2 versions` (via lightningcss `--targets`)

---

## Nanoo Labs Ecosystem

Part of the [nanoolabs.dev](https://nanoolabs.dev) ecosystems. Keep design tokens and component contracts in sync with consuming repos.

## Contributing

1. Branch from `main` with `refactor/name-refactor` naming.
2. Commit messages follow Conventional Commits (e.g., `refactor: clean up style component button`).
3. Rebuild before pushing: `pnpm build`.

## License

ISC © [Nanoo Labs](https://nanoolabs.dev)
