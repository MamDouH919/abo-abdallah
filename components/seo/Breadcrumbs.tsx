/**
 * Shared, accessible breadcrumb trail used by articles, services and locations.
 *
 *   الرئيسية ‹ المناطق ‹ صباغ حولي
 *
 * Semantic: <nav aria-label> › ordered list › last item carries
 * aria-current="page" and is not a link. The matching BreadcrumbList JSON-LD is
 * emitted separately by the page (see `lib/seo/jsonld.ts#breadcrumbLd`).
 *
 * Server-component safe (no hooks / client state).
 */

import Link from "next/link";
import Box from "@mui/material/Box";

export interface BreadcrumbItem {
  name: string;
  /** internal path; omit on the current page (last item). */
  href?: string;
}

interface Props {
  items: BreadcrumbItem[];
  /** extra sx on the wrapping <nav>. */
  sx?: object;
}

export default function Breadcrumbs({ items, sx }: Props) {
  return (
    <Box
      component="nav"
      aria-label="مسار التنقل"
      sx={{ mb: 2, fontSize: "0.875rem", ...sx }}
    >
      <Box
        component="ol"
        sx={{
          listStyle: "none",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 0.75,
          m: 0,
          p: 0,
        }}
      >
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <Box
              component="li"
              key={`${item.name}-${i}`}
              sx={{ display: "flex", alignItems: "center", gap: 0.75, color: "text.secondary" }}
            >
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {item.name}
                </Link>
              ) : (
                <Box
                  component="span"
                  aria-current={isLast ? "page" : undefined}
                  sx={{ color: isLast ? "text.primary" : "inherit", fontWeight: isLast ? 600 : 400 }}
                >
                  {item.name}
                </Box>
              )}
              {!isLast ? (
                <Box component="span" aria-hidden="true" sx={{ opacity: 0.5 }}>
                  ‹
                </Box>
              ) : null}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
