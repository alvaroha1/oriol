## Oriol Restaurant Site – Plan & Status

### Stack & goals
- **Framework**: Astro (static, fast, minimal JS).
- **Styling**: Tailwind CSS.
- **Content**: Markdown menus per language.
- **Languages**: English (default), German (live), Spanish (future).
- **Hosting**: GitHub Pages with GitHub Actions (planned).

---

### Implemented so far

- **Project setup**
  - Astro app initialized with Tailwind CSS.
  - Shared layout in `BaseLayout.astro` with header, footer, and central column layout.

- **Routing & i18n**
  - `/` → redirects to `/en` (English as default).
  - `/en` and `/de` as main language pages, sharing the same layout.
  - Language switcher in header toggles between `/en` and `/de`.

- **Content model (menus)**
  - `src/content/menu.en.md` and `src/content/menu.de.md` with structured frontmatter:
    - `sections[]` containing `title`, optional `note`, and `items[]` (`name`, `description`, `price`).
  - Menus rendered on `/en` and `/de` from these Markdown files.

- **Main page sections (`/en`, `/de`)**
  - **Hero**: full-width 16:9 Pexels hero image + title and short description.
  - **About / Über**: short placeholder story about the restaurant.
  - **Gallery / Galerie**: 3-image responsive grid using Pexels images.
  - **Menu / Menü**: lunch/dinner sections rendered from structured Markdown.
  - **Reservations / Reservierungen**: placeholder copy with email `mailto:` CTA.
  - **Contact / Kontakt**: placeholder address, email, and phone.

- **Navigation & footer**
  - Header:
    - Left: `Oriol` wordmark linking to current language root.
    - Center/right: `Menu`/`Menü` and `Contact`/`Kontakt` anchor links.
    - Language switcher: `EN` ↔ `DE`.
    - Instagram icon link (placeholder `https://instagram.com/`).
  - Footer:
    - © Oriol.
    - Language-aware legal links:
      - EN: `/en/imprint`, `/en/privacy`.
      - DE: `/de/impressum`, `/de/datenschutz`.

- **Legal pages (placeholders)**
  - `/en/imprint`, `/en/privacy` – simple sections with placeholder legal / privacy text.
  - `/de/impressum`, `/de/datenschutz` – German equivalents with placeholder copy.

- **Typography & spacing**
  - Hero title: `text-4xl sm:text-5xl`.
  - Section titles: `text-2xl sm:text-3xl`.
  - Increased vertical spacing between sections (`mt-12`) for calmer layout.
  - Responsive grid for gallery (`grid-cols-1 sm:grid-cols-3`).

---

### Remaining work / next steps

1. **Deployment: GitHub Pages + GitHub Actions**
   - Configure `astro.config.mjs` for GitHub Pages:
     - Set correct `base` path if the repo is not a root user/org site.
     - Confirm/build output directory (`dist`).
   - Add `.github/workflows/deploy.yml` to:
     - Trigger on pushes to `main`.
     - Install dependencies with `pnpm`.
     - Run `pnpm build`.
     - Deploy `dist` to GitHub Pages.
   - Outcome: any edit to `menu.en.md` / `menu.de.md` (or other content) on GitHub auto-deploys.

2. **Optional: mobile-specific refinements**
   - Decide if hero should be:
     - Full-bleed on mobile (edge-to-edge image), framed on desktop.
     - Centered text vs left-aligned on small screens.
   - Adjust header on very small screens if needed (e.g. slightly smaller font or stacked nav).

3. **Optional: map & real reservation integration**
   - Replace placeholder reservation `mailto:` links with:
     - External booking URL, or
     - Embedded widget (iframe/script) from the chosen provider.
   - In Contact section:
     - Add “View on Google Maps” link, or
     - Embedded static map iframe once the final address is known.

4. **Optional: Spanish language support**
   - Add `src/content/menu.es.md` with the same structured schema.
   - Create `/es` page mirroring `/en`:
     - Use `BaseLayout` with `lang="es"`.
     - Wire in Spanish menu and copy (can start as placeholders).
   - Extend language switcher and footer logic to be 3-way (EN / DE / ES) once Spanish is needed.


