# Legacy flat-slug 301 redirect map

Generated for the SEO consolidation pass. Source of truth: `data/redirects.json`
(consumed by `next.config.mjs#redirects()` and `lib/seo/links.ts#resolveCanonicalPath`).

- **108 entries.** Every `href` that used to live in `data/all.json` (served by
  the flat `app/[id]` route) now 301s to its canonical page.
- `data/all.json` is emptied; the flat pages no longer build and are dropped from
  the sitemap.
- All destinations return HTTP 200 (verified against `data/regions.json` /
  `data/services.json`). No redirect chains.

## 1. Exact region-slug duplicates → `/regions/{slug}` (75)

`/{slug}` → `/regions/{slug}` where `{slug}` already exists in `data/regions.json`.
e.g. `/hawally-painter` → `/regions/hawally-painter`, `/sabaagh-al-ahmadi` →
`/regions/sabaagh-al-ahmadi`, `/sabaagh-aljahraa` → `/regions/sabaagh-aljahraa`.

## 2. Region slug drift → current `/regions/{slug}` (4)

| Old flat | Canonical |
|---|---|
| `/sabaagh-alsalmiya` | `/regions/sabaagh-alsaalimia` |
| `/sabaagh-ashbali` | `/regions/sabaagh-ishbiliya` |
| `/sabaagh-elzahr` | `/regions/sabaagh-aldhaher` |
| `/sabaagh-salibi` | `/regions/sabaagh-alsulaibiya` |

## 3. Areas promoted to real region pages (2)

`sabaagh-alyarmouk` (اليرموك) and `sabaagh-aladaan` (العدان) had no region page and
no closely-related area to redirect to. **Added as new entries in
`data/regions.json`** so the flat slug 301s to a genuine local page rather than a
generic hub.

| Old flat | Canonical |
|---|---|
| `/sabaagh-alyarmouk` | `/regions/sabaagh-alyarmouk` |
| `/sabaagh-aladaan` | `/regions/sabaagh-aladaan` |

## 4. Generic keyword doorways → best `/services/{slug}` (27)

| Old flat | Intent | Canonical service |
|---|---|---|
| `/aspagh` | اصباغ | `/services/paints-kuwait` |
| `/aisbgh-alkuayt` | اصباغ الكويت | `/services/paints-kuwait` |
| `/sabaagh` | صباغ | `/services/painter` |
| `/sabaagh-alkuayt` | صباغ الكويت | `/services/kuwait-paints` |
| `/sabaagheen-alkuayt` | صباغين الكويت | `/services/painters-kuwait` |
| `/faniy-sabagh` | فني صباغ | `/services/painters-kuwait` |
| `/sabaagh-rakhis`, `/sabaagh-rakhisat-bi-alkuayt` | صباغ رخيص | `/services/cheap-painter-kuwait` |
| `/sabaagh-shatir`, `/sabaagh-shatir-bi-alkuayt`, `/sabaagh-mumtaz-bi-alkuayt` | صباغ شاطر/ممتاز | `/services/skilled-painter-kuwait` |
| `/muealim-sabagh`, `/muealim-sabaagh-bi-alkuayt` | معلم صباغ | `/services/painting-master-kuwait` |
| `/dikurat-sabagh-lilkuayt` | ديكورات | `/services/decor-painter-kuwait` |
| `/manazil-sabaagh-bi-alkuayt` | صباغ منازل | `/services/home-painter-kuwait` |
| `/shaqaq-sabaagh-bi-alkuayt` | صباغ شقق | `/services/apartment-painter-kuwait` |
| `/sabaagh-ghoraf-aitfal` | غرف أطفال | `/services/kids-room-painter` |
| `/sabaagh-rusumat-aitfal` | رسومات أطفال | `/services/kids-art-painter` |
| `/sabaagh-buyut-aitfal` | بيوت أطفال | `/services/kids-paint-master` |
| `/dihanat-alkuayt` | دهانات الكويت | `/services/paint-kuwait` |
| `/tarkib-waraq-judran` | تركيب ورق جدران | `/services/wallpaper-installation-kuwait` |
| `/muealim-tarkib-waraq-judran` | معلم ورق جدران | `/services/wallpaper-master` |
| `/asbagh-abwab-khashabia` | اصباغ أبواب خشب | `/services/wood-door-paint` |
| `/sabaagh-abwab-khashabia` | معلم صباغ أبواب خشب | `/services/wood-door-paint-master` |
| `/muealim-jabs-burd` | معلم جبس بورد | `/services/gypsum-master-kuwait` |
| `/muealim-tarkib-seramik` | معلم تركيب سيراميك | `/services/ceramic-master-kuwait` |

## Not affected

`/sabagh-rakhis`, `/sabagh-alkuwait`, `/sabagh-elkuwait`, `/asaar-sabagh-kuwait`,
`/painter-kuwait-instagram` are their own real static routes (different slugs) and
stay indexable. `/blogs/*` is untouched this pass.
