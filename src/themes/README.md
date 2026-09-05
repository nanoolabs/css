# @nlbs/css - Theming

Dark is the default theme. Light mode toggle via `@media (prefers-color-scheme: light)` or `[data-theme="light"]`.

## Design Philosophy

Design system inspired from [Resend](https://resend.com) and [Astro Component Starter](https://astro-component-starter.cc): pure neutral grays with multi-color accent system. OKLCH color space with zero chroma for true neutral gray. Accents use sparingly for status, interactive element, and emphasis.

## Palette

### Gray Scale (Primitives)

| Token       | Value             | Description                    |
| ----------- | ----------------- | ------------------------------ |
| `--gray-0`  | `oklch(0.99 0 0)` | near white                     |
| `--gray-1`  | `oklch(0.97 0 0)` | very light                     |
| `--gray-2`  | `oklch(0.93 0 0)` | light, primary text on dark    |
| `--gray-3`  | `oklch(0.88 0 0)` | light, brand on dark           |
| `--gray-4`  | `oklch(0.82 0 0)` | medium light, borders on light |
| `--gray-5`  | `oklch(0.74 0 0)` | medium, muted text             |
| `--gray-6`  | `oklch(0.64 0 0)` | mid gray, subtle elements      |
| `--gray-7`  | `oklch(0.53 0 0)` | medium dark, strong borders    |
| `--gray-8`  | `oklch(0.44 0 0)` | dark, strong borders on light  |
| `--gray-9`  | `oklch(0.35 0 0)` | dark, default borders on dark  |
| `--gray-10` | `oklch(0.26 0 0)` | dark, muted bg                 |
| `--gray-11` | `oklch(0.18 0 0)` | very dark, surface on dark     |
| `--gray-12` | `oklch(0.10 0 0)` | near black                     |

### Accent Colors (Primitives)

| Token             | Value                  | Description       |
| ----------------- | ---------------------- | ----------------- |
| `--accent-orange` | `oklch(0.75 0.18 50)`  | primary accent    |
| `--accent-green`  | `oklch(0.85 0.22 155)` | success, positive |
| `--accent-blue`   | `oklch(0.72 0.15 250)` | info, links       |
| `--accent-yellow` | `oklch(0.88 0.16 85)`  | warnings          |
| `--accent-red`    | `oklch(0.70 0.20 25)`  | danger, errors    |
| `--accent-violet` | `oklch(0.72 0.18 290)` | special, brand    |

### Semantic Tokens (Dark)

| Token                   | Reference        |
| ----------------------- | ---------------- |
| `--color-text`          | `var(--gray-2)`  |
| `--color-text-strong`   | `var(--gray-0)`  |
| `--color-text-muted`    | `var(--gray-5)`  |
| `--color-bg`            | `var(--gray-12)` |
| `--color-bg-surface`    | `var(--gray-11)` |
| `--color-bg-muted`      | `var(--gray-10)` |
| `--color-border`        | `var(--gray-9)`  |
| `--color-border-strong` | `var(--gray-7)`  |
| `--color-border-subtle` | `var(--gray-10)` |

### Semantic Tokens (Light)

| Token                   | Reference        |
| ----------------------- | ---------------- |
| `--color-text`          | `var(--gray-10)` |
| `--color-text-strong`   | `var(--gray-12)` |
| `--color-text-muted`    | `var(--gray-6)`  |
| `--color-bg`            | `var(--gray-0)`  |
| `--color-bg-surface`    | `var(--gray-1)`  |
| `--color-bg-muted`      | `var(--gray-2)`  |
| `--color-border`        | `var(--gray-4)`  |
| `--color-border-strong` | `var(--gray-8)`  |
| `--color-border-subtle` | `var(--gray-2)`  |

### Status Tokens

| Token             | Dark                   | Light                  |
| ----------------- | ---------------------- | ---------------------- |
| `--color-danger`  | `oklch(0.65 0.20 25)`  | `oklch(0.55 0.22 25)`  |
| `--color-info`    | `oklch(0.65 0.15 250)` | `oklch(0.55 0.18 250)` |
| `--color-success` | `oklch(0.70 0.19 155)` | `oklch(0.60 0.20 155)` |

### Accent Tokens

| Token                          | Dark                          | Light                         |
| ------------------------------ | ----------------------------- | ----------------------------- |
| `--color-accent-orange`        | `var(--accent-orange)`        | `var(--accent-orange)`        |
| `--color-accent-orange-subtle` | `oklch(0.75 0.18 50 / 0.12)`  | `oklch(0.75 0.18 50 / 0.08)`  |
| `--color-accent-green`         | `var(--accent-green)`         | `var(--accent-green)`         |
| `--color-accent-green-subtle`  | `oklch(0.85 0.22 155 / 0.12)` | `oklch(0.85 0.22 155 / 0.08)` |
| `--color-accent-blue`          | `var(--accent-blue)`          | `var(--accent-blue)`          |
| `--color-accent-blue-subtle`   | `oklch(0.72 0.15 250 / 0.12)` | `oklch(0.72 0.15 250 / 0.08)` |
| `--color-accent-yellow`        | `var(--accent-yellow)`        | `var(--accent-yellow)`        |
| `--color-accent-yellow-subtle` | `oklch(0.88 0.16 85 / 0.12)`  | `oklch(0.88 0.16 85 / 0.08)`  |
| `--color-accent-red`           | `var(--accent-red)`           | `var(--accent-red)`           |
| `--color-accent-red-subtle`    | `oklch(0.70 0.20 25 / 0.12)`  | `oklch(0.70 0.20 25 / 0.08)`  |
| `--color-accent-violet`        | `var(--accent-violet)`        | `var(--accent-violet)`        |
| `--color-accent-violet-subtle` | `oklch(0.72 0.18 290 / 0.12)` | `oklch(0.72 0.18 290 / 0.08)` |

### State Tokens

| Token             | Dark                  | Light                 |
| ----------------- | --------------------- | --------------------- |
| `--color-hover`   | `oklch(1 0 0 / 0.04)` | `oklch(0 0 0 / 0.04)` |
| `--color-active`  | `oklch(1 0 0 / 0.08)` | `oklch(0 0 0 / 0.08)` |
| `--color-overlay` | `oklch(0 0 0 / 0.7)`  | `oklch(0 0 0 / 0.5)`  |

## File Structure

```
src/themes/
├── dark.css       # :root, [data-theme="dark"]
└── light.css      # @media (prefers-color-scheme) + [data-theme="light"]
```
