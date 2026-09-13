/**
 * Collect every FAQ entry from an article's content blocks. Used to build the
 * FAQPage JSON-LD from the SAME data the page renders visibly — never a
 * search-engine-only list.
 */

import type { ContentBlock, FaqEntry } from "./types";

export function collectFaqEntries(blocks: ContentBlock[]): FaqEntry[] {
  const out: FaqEntry[] = [];
  for (const block of blocks) {
    if (block.type === "faq") {
      for (const item of block.items) {
        if (item.question.trim() && item.answer.trim()) out.push(item);
      }
    }
  }
  return out;
}

export function hasFaq(blocks: ContentBlock[]): boolean {
  return blocks.some((b) => b.type === "faq" && b.items.length > 0);
}
