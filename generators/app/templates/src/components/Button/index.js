import React from 'react';
import HTMLButton from '../HTMLButton';
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
  className,
  children,
  ...attrs
}) {
  const Element = href ? Link : HTMLButton;

  return (
    <Element
      styleName="button"
      href={href}
      data-size={size}
      data-theme={theme}
      data-busy={busy}
      disabled={disabled}
      className={className || ''}
      {...attrs}
    >
      {children}
    </Element>
  );
}
