/**
 * Deterministic heading IDs shared by `ArticleContentRenderer` (which stamps
 * them onto <h2>/<h3>) and `TableOfContents` (which links to them). Both derive
 * from `buildHeadingIndex` on the same `contentBlocks` array, so the ids always
 * line up and duplicates are disambiguated identically on both sides.
 */

import { toPlainText } from "./richText";
import type { ContentBlock, HeadingLevel } from "./types";

export interface HeadingEntry {
  /** id of the source ContentBlock */
  blockId: string;
  /** anchor id / fragment */
  id: string;
  text: string;
  level: HeadingLevel;
}

/** Slugify a heading. Keeps Arabic letters, latin alphanumerics and dashes. */
function slugify(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/[ً-ٰٟ]/g, "") // strip Arabic diacritics
    .replace(/[^\p{L}\p{N}]+/gu, "-") // non letter/number -> dash
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

/**
 * Ordered list of headings with collision-free anchor ids.
 * Same block array in -> same ids out, every render.
 */
export function buildHeadingIndex(blocks: ContentBlock[]): HeadingEntry[] {
  const used = new Map<string, number>();
  const entries: HeadingEntry[] = [];

  blocks.forEach((block, i) => {
    if (block.type !== "heading") return;
    const text = toPlainText(block.content);
    if (!text) return;

    let slug = slugify(text) || `section-${i + 1}`;
    const seen = used.get(slug) ?? 0;
    used.set(slug, seen + 1);
    if (seen > 0) slug = `${slug}-${seen + 1}`;

    entries.push({ blockId: block.id, id: slug, text, level: block.level });
  });

  return entries;
}

/** Map from ContentBlock id -> anchor id, for the renderer. */
export function buildHeadingIdByBlockId(blocks: ContentBlock[]): Map<string, string> {
  return new Map(buildHeadingIndex(blocks).map((e) => [e.blockId, e.id]));
}

/** TOC is only worth showing with enough top-level sections. */
export function shouldShowToc(entries: HeadingEntry[]): boolean {
  return entries.filter((e) => e.level === 2).length >= 3;
}
