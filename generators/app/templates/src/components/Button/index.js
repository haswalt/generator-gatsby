import React from 'react';
import Link from '../Link';
import './styles.module.css';

/**
 * Button component
 * Adaptive button with themes and sizes
 * @property {string} href Target URL to link to
 * @property {string} size Size of the button
 * @property {string} theme Theme of the button
 * @property {boolean} busy Whether button is busy
 * @property {boolean} disabled
 */
export default function Button({
  href = '',
  theme = 'default',
  size = 'default',
  busy = false,
  disabled = false,
  className = '',
  children,
  ...attrs
}) {
  const Element = href ? Link : 'button';

  return (
    <Element
      styleName="button"
      className={`button-reset ${className}`}
      href={href}
      data-size={size}
      data-theme={theme}
      data-busy={busy}
      disabled={disabled}
      {...attrs}
    >
      {children}
    </Element>
  );
}
