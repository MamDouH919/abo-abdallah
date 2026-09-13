/**
 * Server component. Turns the CMS `contentBlocks` array into semantic HTML.
 *
 * Safety: block text is rendered as JSX children, never via
 * `dangerouslySetInnerHTML`. Inline markup that the CMS leaves in the text is
 * handled by `lib/cms/richText` — it strips self-referential promo sentences
 * and converts inline `<a href>` into real anchors; every other tag is removed
 * rather than trusted.
 *
 * Headings:
 *  - level 2 -> <h2>, level 3 -> <h3>. An article never renders an <h1> from a
 *    block — the page title is the only <h1>.
 *  - each heading gets a deterministic id (shared with the Table of Contents).
 */

import Image from "next/image";
import { ProseContent } from "@/lib/styles";
import { buildHeadingIdByBlockId } from "@/lib/cms/toc";
import { renderRichText, toPlainText } from "@/lib/cms/richText";
import type { ContentBlock } from "@/lib/cms/types";

interface Props {
  blocks: ContentBlock[];
}

export default function ArticleContentRenderer({ blocks }: Props) {
  if (!blocks || blocks.length === 0) return null;

  const headingIds = buildHeadingIdByBlockId(blocks);

  return (
    <ProseContent>
      {blocks.map((block) => {
        switch (block.type) {
          case "heading": {
            const id = headingIds.get(block.id);
            const text = toPlainText(block.content);
            if (!text) return null;
            // Blocks only ever emit h2–h4. The page <h1> is the article title.
            if (block.level === 4) {
              return (
                <h4 key={block.id} id={id}>
                  {text}
                </h4>
              );
            }
            if (block.level === 3) {
              return (
                <h3 key={block.id} id={id}>
                  {text}
                </h3>
              );
            }
            return (
              <h2 key={block.id} id={id}>
                {text}
              </h2>
            );
          }

          case "paragraph": {
            if (!block.content.trim()) return null;
            return (
              <p key={block.id} style={{ whiteSpace: "pre-line" }}>
                {renderRichText(block.content)}
              </p>
            );
          }

          case "list": {
            const items = block.items.filter((item) => item.trim());
            if (items.length === 0) return null;
            return block.ordered ? (
              <ol key={block.id}>
                {items.map((item, i) => (
                  <li key={i}>{renderRichText(item)}</li>
                ))}
              </ol>
            ) : (
              <ul key={block.id}>
                {items.map((item, i) => (
                  <li key={i}>{renderRichText(item)}</li>
                ))}
              </ul>
            );
          }

          case "image":
            return (
              <figure key={block.id} style={{ margin: 0 }}>
                <Image
                  src={block.url}
                  alt={block.alt || block.caption || ""}
                  width={1280}
                  height={720}
                  sizes="(max-width: 768px) 100vw, 720px"
                  style={{ width: "100%", height: "auto", borderRadius: 16 }}
                  loading="lazy"
                />
                {block.caption ? (
                  <figcaption
                    style={{
                      textAlign: "center",
                      fontSize: "0.875rem",
                      opacity: 0.7,
                      marginTop: 8,
                    }}
                  >
                    {block.caption}
                  </figcaption>
                ) : null}
              </figure>
            );

          case "quote": {
            if (!block.content.trim()) return null;
            return (
              <blockquote
                key={block.id}
                style={{
                  borderInlineStart: "4px solid currentColor",
                  paddingInlineStart: 16,
                  margin: "24px 0",
                  opacity: 0.9,
                  fontStyle: "italic",
                }}
              >
                <p style={{ whiteSpace: "pre-line", margin: 0 }}>{renderRichText(block.content)}</p>
                {block.cite ? (
                  <cite style={{ display: "block", marginTop: 8, fontSize: "0.875rem", opacity: 0.75 }}>
                    — {block.cite}
                  </cite>
                ) : null}
              </blockquote>
            );
          }

          case "divider":
            return <hr key={block.id} style={{ margin: "32px 0", border: "none", borderTop: "1px solid", opacity: 0.15 }} />;

          case "faq": {
            const items = block.items.filter((i) => i.question.trim() && i.answer.trim());
            if (items.length === 0) return null;
            return (
              <section key={block.id} aria-labelledby={`${block.id}-faq`} style={{ marginTop: 40 }}>
                <h2 id={`${block.id}-faq`}>الأسئلة الشائعة</h2>
                <dl>
                  {items.map((item, i) => (
                    <div key={i} style={{ marginBottom: 20 }}>
                      <dt style={{ fontWeight: 700, fontSize: "1.1rem" }}>{item.question}</dt>
                      <dd style={{ margin: "8px 0 0" }}>{renderRichText(item.answer)}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            );
          }

          default:
            return null;
        }
      })}
    </ProseContent>
  );
}
