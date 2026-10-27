# Cloudflare edge config (sabaghelkuwait.com)

The site runs behind Cloudflare (orange-cloud proxy on both `sabaghelkuwait.com`
and `www`). Two things can only be fixed there, not in this repo.

## 1. One-hop redirect for every http / www variant

**Problem (Ahrefs, 21 Oct 2026):**

```
http://www.sabaghelkuwait.com/  → 301 → https://www.sabaghelkuwait.com/  (Cloudflare "Always Use HTTPS")
https://www.sabaghelkuwait.com/ → 308 → https://sabaghelkuwait.com/      (next.config.mjs host redirect)
```

Cloudflare upgrades http → https at the edge before the request ever reaches
Next, so Next can't collapse the chain. A single Cloudflare redirect rule has
to handle both the scheme and the host.

**Rules → Redirect Rules → Create rule** (a "Single Redirect"):

| Field | Value |
|---|---|
| Rule name | `canonical host + https (one hop)` |
| When incoming requests match | Custom filter expression |
| Expression | `(http.host eq "www.sabaghelkuwait.com") or (http.host eq "sabaghelkuwait.com" and not ssl)` |
| Then — Type | Dynamic |
| Expression | `concat("https://sabaghelkuwait.com", http.request.uri.path)` |
| Status code | 301 |
| Preserve query string | ✅ on |

Then **SSL/TLS → Edge Certificates → Always Use HTTPS: Off**, because the rule
above now does that job for the apex host. With it on, Cloudflare may still
upgrade `http://www.` to `https://www.` first and re-create the two-hop chain.

The `www` → apex redirect in `next.config.mjs` stays as an origin-side
fallback. It only fires if a request bypasses the Cloudflare rule.

**Expected result** (each one is a single hop):

```
http://sabaghelkuwait.com/x?a=1      → 301 → https://sabaghelkuwait.com/x?a=1
http://www.sabaghelkuwait.com/x?a=1  → 301 → https://sabaghelkuwait.com/x?a=1
https://www.sabaghelkuwait.com/x?a=1 → 301 → https://sabaghelkuwait.com/x?a=1
```

Verify:

```sh
for u in http://sabaghelkuwait.com/regions/hawally-painter \
         http://www.sabaghelkuwait.com/regions/hawally-painter \
         https://www.sabaghelkuwait.com/regions/hawally-painter; do
  curl -sIL -o /dev/null -w "$u  hops=%{num_redirects}  final=%{url_effective}\n" "$u"
done
# every line must show hops=1 and final=https://sabaghelkuwait.com/regions/hawally-painter
```

## 2. Edge-cache HTML (TTFB)

Region, service and article pages are prerendered (ISR). Next sends
`Cache-Control: s-maxage=3600, stale-while-revalidate=…` and
`x-nextjs-cache: HIT`. But Cloudflare does not cache HTML by default
(`cf-cache-status: DYNAMIC`), so every request still makes a round trip to the
origin (about 330–470 ms TTFB measured on 27 Oct 2026).

**Caching → Cache Rules → Create rule:**

| Field | Value |
|---|---|
| Rule name | `cache prerendered HTML` |
| Expression | `(http.host eq "sabaghelkuwait.com" and not http.request.uri.path contains "/_next/image" and not http.request.uri.path contains "/api/" and not http.request.uri.query contains "_rsc")` |
| Cache eligibility | Eligible for cache |
| Edge TTL | Use cache-control header if present, bypass cache if not |
| Browser TTL | Respect origin |

"Respect origin" keeps dynamic responses (`private, no-store`, e.g.
`/articles?page=2`) uncached, while ISR pages are served from the edge for up
to `s-maxage`. After deploying content changes, run **Purge Everything** (or
purge the changed URLs).

Brotli/gzip: Cloudflare already serves `content-encoding: br`, and Next has
`compress: true` for the origin hop. Nothing to change.
