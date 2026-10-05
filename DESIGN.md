---
name: Obsidian Kinetic Brutalism
colors:
  surface: "#f9f9f9"
  surface-dim: "#dadada"
  surface-bright: "#f9f9f9"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#f3f3f3"
  surface-container: "#eeeeee"
  surface-container-high: "#e8e8e8"
  surface-container-highest: "#e2e2e2"
  on-surface: "#1a1c1c"
  on-surface-variant: "#47464a"
  inverse-surface: "#2f3131"
  inverse-on-surface: "#f0f1f1"
  outline: "#78767b"
  outline-variant: "#c8c5ca"
  surface-tint: "#5f5e60"
  primary: "#000000"
  on-primary: "#ffffff"
  primary-container: "#1c1b1d"
  on-primary-container: "#858386"
  inverse-primary: "#c8c6c8"
  secondary: "#5f5e61"
  on-secondary: "#ffffff"
  secondary-container: "#e4e1e5"
  on-secondary-container: "#656467"
  tertiary: "#000000"
  on-tertiary: "#ffffff"
  tertiary-container: "#1a1c1e"
  on-tertiary-container: "#838487"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#93000a"
  primary-fixed: "#e5e1e4"
  primary-fixed-dim: "#c8c6c8"
  on-primary-fixed: "#1c1b1d"
  on-primary-fixed-variant: "#474649"
  secondary-fixed: "#e4e1e5"
  secondary-fixed-dim: "#c8c6c9"
  on-secondary-fixed: "#1b1b1e"
  on-secondary-fixed-variant: "#47464a"
  tertiary-fixed: "#e2e2e5"
  tertiary-fixed-dim: "#c6c6c9"
  on-tertiary-fixed: "#1a1c1e"
  on-tertiary-fixed-variant: "#454749"
  background: "#f9f9f9"
  on-background: "#1a1c1c"
  surface-variant: "#e2e2e2"
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: "800"
    lineHeight: 70px
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: "800"
    lineHeight: 44px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: "700"
    lineHeight: 42px
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: "700"
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: "600"
    lineHeight: 30px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: "600"
    lineHeight: 24px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 26px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 22px
    letterSpacing: 0em
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: "500"
    lineHeight: 16px
    letterSpacing: 0.02em
  label-tag:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: "600"
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2.5rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system lives at the intersection of surgical Swiss engineering and neo-brutalist tactile physicalism. It borrows the disciplined composition, intentional negative space, and refined typographical restraint of ultra-high-end design portfolios, juxtaposing it with the unapologetic weight of neo-brutalism: ink-heavy borders, rigid mechanical grids, and tactile physical offsets.

### Aesthetic Persona & Philosophy

- **Precision Mechanical Elegance:** Not reckless or chaotic brutalism, but calculated, disciplined, and measured down to the sub-pixel. Structural containers act like physical CNC-machined plates.
- **Physical Tactility:** Every interactive object possesses tangible mass. Interfaces feel mechanical: buttons push down into the canvas, snapping into their drop shadows rather than dissolving into digital blur.
- **Editorial Typography:** Dramatic scale contrasts between disciplined, neutral Grotesque headings and technical, code-inspired monospaced annotations.

### Key Visual Tenets

- Crisp offset drop shadows (`3px 3px 0px 0px`) with zero diffusion blur.
- Consistent structural borders (1.5px to 2px solid) rendering deliberate outlines around all components.
- Bento-grid modularity with dense metadata badges, technical monospaced indexers, and architectural structural dividers.

## Colors

The color system operates on an uncompromising, high-contrast monochrome foundation. Tones avoid sterile synthetic whites and washed-out grays, instead deploying warm architectural off-whites paired with deep carbon obsidian blacks.

### Functional Palette Structure

- **Canvas / Background (`#fcfcfc`):** An optical warm off-white surface that prevents eye fatigue while preserving absolute contrast.
- **Surface Elevation (`#ffffff`):** Pure stark white reserved strictly for elevated interactive bento tiles, cards, and modal sheets.
- **Primary Ink & Boundaries (`#09090b`):** Deep obsidian carbon used for all 1.5px/2px structural borders, hard offset shadows, primary typography, and filled CTA surfaces.
- **Muted Structural / Secondary (`#27272a`):** Zinc carbon utilized for secondary headers, technical subtexts, active borders, and hover micro-strokes.
- **Subtle Surface / Neutral Tint (`#f4f4f5`):** Soft zinc wash designated for passive badge fills, code blocks, tabular row alternating backgrounds, and inactive tracks.
- **Accent Rules:** No decorative colored accents are permitted in foundational states. Visual energy is derived strictly from border hierarchy, typographic contrast, and pure physical black-on-white inverted states.

## Typography

The typographical engine marries the rational, systematic clarity of Swiss-grotesque type (`Inter`) with the engineering precision of a terminal monospaced typeface (`JetBrains Mono`).

### Application Hierarchy

- **Inter (Headlines & Body):** Set with tightly calibrated negative tracking (`-0.01em` to `-0.04em`) to establish compact, architectural word shapes. Display headlines feature heavy font weights (700, 800) with compact line-heights for muscular editorial presence.
- **JetBrains Mono (Metadata, Indicators, Technical Annotations):** Expressly deployed for breadcrumbs, system badges, serial timestamps, status readouts, data metrics, and technical keys. Always set in upper or mixed case with slight positive tracking (`0.02em` to `0.06em`) to preserve character legibility within bordered micro-chips.
- **Numbers & Metrics:** Tabular figures (`font-variant-numeric: tabular-nums`) must be active across all tables, code labels, and counter displays to ensure vertical columnar alignment.

## Layout & Spacing

Layouts follow a modular bento-box philosophy built upon a disciplined 12-column fluid grid on desktop and 4-column stack on mobile devices.

### Rhythm & Grid Guidelines

- **Grid Architecture:** Desktop displays deploy 12-column frameworks with `gutter: 1.5rem` (`24px`) and canvas margins of `2.5rem` (`40px`). Screens below 768px collapse into a 4-column flow with `1rem` gutters and `1.25rem` external margins.
- **Bento Tile Structural Spacing:** Cards, modules, and control clusters rely on rigid auto-flow distributions. Elements within a bento grid must align horizontally and vertically across unified grid coordinates.
- **Component Padding Scale:**
  - `space-xs` (4px): Internal badge horizontal gaps, micro-icon margins.
  - `space-sm` (8px): Button vertical padding, chip framing, tight input offsets.
  - `space-md` (16px): Standard button horizontal padding, standard cell padding.
  - `space-lg` (24px): Bento-tile inner body padding, dialog perimeter spacing.
  - `space-xl` (40px): Section segmentations and container margins.

## Elevation & Depth

This design system strictly forbids Gaussian diffusion blurs, feathering, and ethereal low-opacity gradient drop shadows. Depth is purely mechanical and physical, engineered through crisp offset hard shadows and visible 1.5px/2px solid ink boundaries.

### Physical Depth Tokens

- **Base Interactive State (Static):**
  - Border: `2px solid #09090b`
  - Shadow: `box-shadow: 3px 3px 0px 0px #09090b`
- **Elevated Bento / Floating Panel State:**
  - Border: `2px solid #09090b`
  - Shadow: `box-shadow: 5px 5px 0px 0px #09090b`
- **Active / Pressed Mechanical Response:**
  - Border: `2px solid #09090b`
  - Transform: `translate(3px, 3px)`
  - Shadow: `box-shadow: 0px 0px 0px 0px #09090b`

Interactive objects simulate a spring-loaded push mechanism: on `:active`, the component translates down and right along the exact angle of its shadow vector, flattening flush with the underlying canvas surface.

### Boundary Overlays & Grid Seams

Card groupings placed within bento layouts can leverage shared-line border construction where cards abut against common 1.5px or 2px divider lines, reminiscent of technical blueprinted compartments.

## Shapes

The design system embraces the "Soft Brutalist" paradox: architectural angularity tempered with subtle edge softening. Elements do not use playful circular pills or aggressive razor corners; instead, they maintain a precise, engineered curvature.

### Geometry Specifications

- **Level 1 (Soft):**
  - Standard components (buttons, text inputs, status chips, segmented bars): `0.25rem` (`4px`).
  - Cards, modal containers, and bento modular compartments: `0.375rem` (`6px`) up to `0.5rem` (`8px`).
- **Corner Discipline:** The corner radius must always remain smaller than or equal to the offset shadow displacement value. This geometric relationship ensures shadow contours mirror the component shape cleanly without generating awkward corner artifacts.

## Components

### Buttons

- **Primary:** Background `#09090b`, text `#ffffff`, border `2px solid #09090b`, shadow `box-shadow: 3px 3px 0px 0px #09090b`, border-radius `4px`. Hover moves subtly to `translate(-1px, -1px)` with shadow expanding to `4px 4px 0px 0px #09090b`. Active physically translates `translate(3px, 3px)` with shadow `0px 0px 0px 0px #09090b`.
- **Secondary / Surface:** Background `#ffffff`, text `#09090b`, border `2px solid #09090b`, shadow `box-shadow: 3px 3px 0px 0px #09090b`. Active mimics primary mechanical click.
- **Ghost:** Background `transparent`, text `#09090b`, border `2px solid transparent`. Hover acquires `border: 2px solid #09090b`.

### Bento Cards & Panels

- **Structure:** Background `#ffffff`, border `2px solid #09090b`, hard shadow `4px 4px 0px 0px #09090b`, radius `6px`.
- **Header:** Features an integrated monospace section key (e.g., `// 01_SYSTEM_SPECS`) paired with high-contrast Inter headings. An optional internal horizontal divider line (`2px solid #09090b`) isolates card metadata from body content.

### Input Fields & Controls

- **Inputs:** Background `#ffffff`, border `2px solid #09090b`, text `#09090b`, placeholder `#71717a`, radius `4px`, padding `10px 14px`. On `:focus`, retains `2px solid #09090b` and gains `box-shadow: 3px 3px 0px 0px #09090b` with zero outline rings.
- **Checkboxes & Radios:** Dimensions `18px x 18px`, border `2px solid #09090b`, radius `3px` (radios `50%`), hard offset `2px 2px 0px 0px #09090b`. Checked states render a solid `#09090b` fill containing an off-white `#ffffff` mechanical tick mark.

### Chips, Badges & Labels

- **Engineering Tags:** Font `JetBrains Mono`, 11px uppercase, border `1.5px solid #09090b`, background `#f4f4f5`, text `#09090b`, radius `3px`, padding `2px 8px`. Shadow omitted or scaled to `1.5px 1.5px 0px 0px #09090b` for micro-interactions.
- **Status Indicators:** Micro-dots (`6px x 6px`) enclosed in crisp 1.5px borders, followed by uppercase technical copy (e.g., `[LIVE]`, `[IDLE]`).

### Segmented Controls & Tabs

- Contained in an exterior `2px solid #09090b` housing. Selected tab features inverted `#09090b` background with stark white text and a flush snap fit, while unselected segments rest on neutral white with crisp divider lines between choices.
