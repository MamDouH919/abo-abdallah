/**
 * Visible breadcrumb trail for the article section, e.g.
 *   الرئيسية ‹ المقالات ‹ عنوان المقال
 * The matching BreadcrumbList JSON-LD is emitted separately by the page.
 */

import Link from "next/link";
import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";

export interface BreadcrumbItem {
  name: string;
  /** internal path; omit for the current page */
  href?: string;
}

interface Props {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: Props) {
  return (
    <MuiBreadcrumbs
      aria-label="مسار التنقل"
      separator="‹"
      sx={{ mb: 2, fontSize: "0.875rem" }}
    >
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        if (item.href && !isLast) {
          return (
            <Link
              key={i}
              href={item.href}
              style={{ color: "inherit", textDecoration: "none", opacity: 0.75 }}
            >
              {item.name}
            </Link>
          );
        }
        return (
          <Typography
            key={i}
            component="span"
            color={isLast ? "text.primary" : "text.secondary"}
            sx={{ fontSize: "0.875rem" }}
            aria-current={isLast ? "page" : undefined}
          >
            {item.name}
          </Typography>
        );
      })}
    </MuiBreadcrumbs>
  );
}
