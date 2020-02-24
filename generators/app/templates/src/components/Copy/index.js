import React from 'react';
import './styles.module.css';
import RichText from '../RichText';

/**
 * Copy component
 * Consistent copy
 * @property {string} content
 */
export default function Copy({
  content = null,
  plaintext = false,
  centered = false,
  className,
  ...attrs
}) {
  return (
    <div
      styleName="copy"
      data-centered={centered}
      className={className || ''}
      {...attrs}
    >
      {plaintext ? <p>{content}</p> : <RichText content={content} />}
    </div>
  );
}
