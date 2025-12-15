## Future work for Oriol restaurant site

These are follow‑up improvements that are nice to have, not required for the current prototype.

### Content & assets
- Replace placeholder copy on `/en` and `/de`:
  - About/Über text
  - Reservations/Reservierungen text
  - Contact/Kontakt address, email, phone
- Replace Pexels images with real photos from Oriol (hero + gallery).
- Update legal pages (`/en/imprint`, `/en/privacy`, `/de/impressum`, `/de/datenschutz`) with proper legal copy.

### Map & reservations
- Contact section:
  - Add “View on Google Maps” link or embed a Google Maps iframe once the final address is confirmed.
- Reservations section:
  - Replace `mailto:` CTA with a real booking URL from the chosen reservation provider, or
  - Embed the provider’s booking widget (iframe or script) in place of the button.

### Languages & i18n
- Add Spanish support:
  - Create `src/content/menu.es.md` using the same structured schema as EN/DE.
  - Add `/es` page mirroring `/en` with Spanish copy.
  - Extend language switcher to handle three languages (EN / DE / ES) when Spanish goes live.

### Meta, SEO & UX polish
- Add basic SEO/meta:
  - `<title>` and `<meta name="description">` tuned for Oriol.
  - Open Graph / Twitter card tags and a social preview image.
- Add a favicon and touch icons.
- Create a simple custom 404 page.
- Optional: very light loading/transition polish (e.g. fade‑in on first load) while keeping the site static and fast.


