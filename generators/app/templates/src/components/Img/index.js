import GatsbyImg from 'gatsby-image';
import React from 'react';
import get from 'lodash/get';
import './styles.module.css';

/**
 * Img component
 * Adaptively uses gastby-img if data is available, falls back to static elements
 * @property {object} responsive Sharp img data
 * @property {object} fallback [url,alt] Fallback static image
 * @property {string} alt Alt text for the image
 * @property {boolean} cover Whether cover hacks should be applied to the fallback image
 */
export default function Img({
  responsive = {},
  fallback = {},
  alt = '',
  cover = false,
  className,
  ...attrs
}) {
  const responsiveData = get(responsive, 'childImageSharp.fluid');

  return !!responsiveData ? (
    <GatsbyImg
      responsive={responsiveData}
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
