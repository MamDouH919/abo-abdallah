/**
 * Inline text handling for CMS content blocks.
 *
 * CMS paragraph / quote / list text can carry a little inline HTML — mostly
 * `<a href>` links. `renderRichText` turns those anchors into real, styled
 * links (external ones open in a new tab) and strips every other tag rather
 * than trusting it. `toPlainText` returns tag-free text for headings / the ToC.
 */

import type { ReactNode } from "react";

/** Hostnames that count as "this site" — links to these stay in-tab. */
const SELF_HOSTS = ["sabaghelkuwait.com"];

const ANCHOR = /<a\b[^>]*?href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;

function decodeEntities(input: string): string {
  return input
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function stripTags(input: string): string {
  return decodeEntities(input.replace(/<[^>]+>/g, ""));
}

/** Tidy the whitespace a CMS block often ships with. */
function tidy(input: string): string {
  return input
    .replace(/[ \t]{2,}/g, " ")
    .replace(/\s+([.،!؟:])/g, "$1")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function isSelfHost(href: string): boolean {
  return SELF_HOSTS.some((host) => href.includes(host));
}

/** Tag-free, tidied text — for headings and the table of contents. */
export function toPlainText(raw: string): string {
  return tidy(stripTags(raw));
}

/**
 * Render block text: every inline `<a href>` becomes a real anchor (styled by
 * `ProseContent`; links to other sites open in a new tab). Any other tag is
 * dropped rather than trusted.
 */
export function renderRichText(raw: string): ReactNode {
  const text = tidy(raw);

  if (!text.includes("<a")) {
    return stripTags(text);
  }

  const nodes: ReactNode[] = [];
  let cursor = 0;
  let key = 0;
  ANCHOR.lastIndex = 0;

  let match: RegExpExecArray | null;
  while ((match = ANCHOR.exec(text)) !== null) {
    if (match.index > cursor) {
      nodes.push(stripTags(text.slice(cursor, match.index)));
    }

    const href = match[1].trim();
    const label = stripTags(match[2]).trim();
    if (label && href) {
      const external = /^https?:\/\//i.test(href) && !isSelfHost(href);
      nodes.push(
        <a
          key={`lnk-${key++}`}
          href={href}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer nofollow" }
            : {})}
        >
          {label}
        </a>,
      );
    } else if (label) {
      nodes.push(label);
    }

    cursor = match.index + match[0].length;
  }

  if (cursor < text.length) nodes.push(stripTags(text.slice(cursor)));

  return <>{nodes}</>;
}
