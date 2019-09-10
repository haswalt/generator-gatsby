import GatsbyImg from 'gatsby-image';
import React from 'react';
import get from 'lodash/get';
import './styles.module.css';

/**
 * Img component
 * Adaptively uses gastby-img if data is available, falls back to static elements
 * @property {object} fluid Sharp img data
 * @property {object} fallback [url,alt] Fallback static image
 * @property {string} alt Alt text for the image
 * @property {boolean} cover Whether cover hacks should be applied to the fallback image
 */
export default function Img({
  fluid = {},
  fallback = {},
  alt = '',
  cover = false,
  className,
  ...attrs
}) {
  const fluidData = get(fluid, 'childImageSharp.fluid');

  return !!fluidData ? (
    <GatsbyImg
      fluid={fluidData}
      alt={alt || (fallback && fallback.alt)}
      className={className || ''}
      {...attrs}
    />
  ) : (
    <div className={className || ''} {...attrs}>
      <img
        styleName="fallbackImg"
        data-cover={cover}
        src={fallback && fallback.url}
        alt={alt || (fallback && fallback.alt)}
      />
    </div>
  );
}
