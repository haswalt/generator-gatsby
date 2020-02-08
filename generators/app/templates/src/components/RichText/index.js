import { RichText as PrismicRichText } from 'prismic-reactjs';
import React from 'react';
import { resolveLink } from '../../lib/resolve';
import Link from '../Link';

/**
 * RichText component
 * Render richtext HTML content from Prismic, with plain text fallbacks
 * @property {any} content
 */
export default function RichText({ content = [], className = '', ...props }) {
  const PrismicLink = (type, { data }, content) => {
    const href = data.link_type === 'Web' ? data.url : resolveLink(data);

    return (
      <Link key={data.id} href={href}>
        {content}
      </Link>
    );
  };

  return typeof content === 'string' ? (
    <p {...props}>{content}</p>
  ) : (
    <PrismicRichText
      render={content}
      serializeHyperlink={PrismicLink}
      {...props}
    />
  );
}
