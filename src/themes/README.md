# @nlbs/css — Theming

Dark is the default theme. Light mode toggle via @media (prefers-color-scheme: light) or [data-theme="light"].

## Palette

| Token | Dark | Light |
|-------|------|-------|
| `--nl-color-canvas` | #050505 | #ffffff |
| `--nl-color-canvas-soft` | #0a0a0a | #f9fafb |
| `--nl-color-canvas-text-soft` | #f5f6f7 | #1a1a1a |
| `--nl-color-ink-strong` | #ffffff | #000000 |
| `--nl-color-ink` | #f2f2f2 | #1a1a1a |
| `--nl-color-body` | #bdbdbd | #4a4a4a |
| `--nl-color-mute` | #8b949e | #6b7280 |
| `--nl-color-border` | #1f2937 | #d1d5db |
| `--nl-color-border-soft` | #374151 | #e5e7eb |
| `--nl-color-primary` | #00ffff | #009999 |
| `--nl-color-primary-soft` | #00e5e5 | #007a7a |
| `--nl-color-primary-deep` | #00cccc | #00b8b8 |
| `--nl-color-on-primary` | #000000 | #ffffff |

Static tokens (spacing, radius, typography, etc) stay the same across themes\

## File Structure

```
src/themes/
├── dark.css       # :root, [data-theme="dark"]
└── light.css      # @media (prefers-color-scheme) + [data-theme="light"]
```
