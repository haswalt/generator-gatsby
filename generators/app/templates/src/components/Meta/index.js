import { Location } from '@reach/router';
import React from 'react';
import Helmet from 'react-helmet';
import resolveRelative from 'resolve-relative-url';

/**
 * Head component
 * Sets a page's meta data
 * @property {string} title Title of the page
 * @property {string} description Description of the page
 * @property {string} cover URL of page cover image (social media)
 */
export default function Meta({ title = '', description = '', cover = '' }) {
  const resolvedCover = resolveRelative(cover, '<%= props.url %>');

  return (
    <Location>
      {({ location }) => (
        <Helmet>
          {/* Basic */}
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="image" content={resolvedCover} />
          <link rel="alternate" hreflang="en" href={location.href} />
          <link rel="canonical" href={location.href} />

          {/* Schema.org */}
          <meta itemprop="title" content={title} />
          <meta itemprop="description" content={description} />
          <meta itemprop="image" content={resolvedCover} />

          {/* Facebook */}
          <meta property="og:title" content={title} />
          <meta property="og:site_name" content="<%= props.name %>" />
          <meta property="og:url" content={location.href} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={resolvedCover} />

          {/* Twitter */}
          <meta property="twitter:card" content="summary" />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
          <meta property="twitter:image" content={resolvedCover} />
        </Helmet>
      )}
    </Location>
  );
}
