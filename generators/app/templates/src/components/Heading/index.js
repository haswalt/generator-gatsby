import React from 'react';
import './styles.module.css';

/**
 * Heading component
 * Consistent heading
 * @property {string} heading
 * @property {boolean} secondary
 * @property {boolean} centered
 */
export default function Heading({
  content = '',
  secondary = false,
  centered = false,
  className,
  ...attrs
}) {
  const Element = secondary ? 'h2' : 'h1';

  return (
    <Element
      data-primary={!secondary}
      data-centered={centered}
      styleName="heading"
      className={className || ''}
      {...attrs}
    >
      {content}
    </Element>
  );
}