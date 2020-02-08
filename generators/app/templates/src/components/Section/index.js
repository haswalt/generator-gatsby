import React from 'react';
import './styles.module.css';

/**
 * Section component
 * Basic layout component for page sections
 * @property {boolean} fullWidth
 */
export default function Section({
  fullWidth = false,
  children,
  className = '',
  ...attrs
}) {
  return (
    <section
      styleName="section"
      data-fullwidth={fullWidth}
      className={className}
      {...attrs}
    >
      {children}
    </section>
  );
}
