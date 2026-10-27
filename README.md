# Pavone Rentals: Map Landing Page Mockup

A static mockup of the proposed pavonerentals.com restructure:

- **`/`** is a full-height interactive map of every Pavone property. Click a pin or a card to open it.
- **`property.html?p=<slug>`** is one consolidated page per property: overview, incentives, unit availability and pricing (previously on `/availability`), amenities, gallery, location and a tour request form.

Every property lives in `data.js`. To add a new rental, add one object to that file. It shows up on the map and gets its own page automatically.

The two single-family homes are **placeholders**. Their addresses, photos and pricing are sample values.

## Run locally

```bash
npx serve .
```

Works on any static host (GitHub Pages, Vercel, Netlify). No rewrites needed.
