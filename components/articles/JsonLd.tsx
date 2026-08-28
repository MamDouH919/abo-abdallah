/**
 * Renders a <script type="application/ld+json"> tag. `data` is serialized here,
 * not user-authored HTML — `<` is escaped to keep the script tag well-formed.
 */

interface Props {
  data: unknown;
}

export default function JsonLd({ data }: Props) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
